import { tursoClient } from "./utils/dbClient";
import { User } from "@/lib";
import { ResultSet } from "@libsql/client";
import * as bcrypt from "bcryptjs";

const db = tursoClient();

export async function createUsersTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      wallet_address TEXT UNIQUE,
      referred_by TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (referred_by) REFERENCES users(wallet_address)
    )
  `);
}

export async function createUser(
  user: Omit<User, "id" | "created_at">
): Promise<User | null> {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  try {
    const result = await db.execute({
      sql: `
        INSERT INTO users (
          email, username, password, 
          referred_by
        ) 
        VALUES (?, ?, ?, ?) 
        RETURNING *
      `,
      args: [
        user.email,
        user.username,
        hashedPassword,
        user.referred_by || null,
      ],
    });

    const row = result.rows[0];
    if (!row) return null;

    return mapRowToUser(result.rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM users WHERE email = ?",
      args: [email],
    });

    const row = result.rows[0];
    if (!row) return null;

    return mapRowToUser(result.rows[0]);
  } catch (error) {
    console.error("Error getting user by email:", error);
    return null;
  }
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function getUserByReferralWallet(
  walletAddress: string
): Promise<User | null> {
  const result = await db.execute({
    sql: "SELECT * FROM users WHERE wallet_address = ?",
    args: [walletAddress],
  });

  return result.rows[0] ? mapRowToUser(result.rows[0]) : null;
}

export async function updateUserWallet(
  userId: number,
  walletAddress: string
): Promise<boolean> {
  try {
    await db.execute({
      sql: "UPDATE users SET wallet_address = ? WHERE id = ?",
      args: [walletAddress, userId],
    });
    return true;
  } catch (error) {
    console.error("Error updating wallet:", error);
    return false;
  }
}

function mapRowToUser(row: any): User | null {
  if (!row) return null;

  return {
    id: row.id as number,
    email: row.email as string,
    username: row.username as string,
    password: row.password as string,
    wallet_address: row.wallet_address as string | undefined,
    referred_by: row.referred_by as string | undefined,
    created_at: new Date(row.created_at as string),
  };
}
