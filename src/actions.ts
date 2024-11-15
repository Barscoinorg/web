"use server";

import { SessionData } from "@/lib";
import { defaultSession, sessionOptions } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createUser, getUserByEmail, verifyPassword } from "./db";

export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  // If user visits for the first time session returns an empty object.
  // Let's add the isLoggedIn property to this object and its value will be the default value which is false
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function login(formData: FormData) {
  const session = await getSession();

  const formEmail = formData.get("email") as string;
  const formPassword = formData.get("password") as string;

  if (!formEmail || !formPassword) {
    return { error: "All fields are required" };
  }

  const user = await getUserByEmail(formEmail);

  if (!user) {
    return { error: "Wrong Credentials!" };
  }

  const isValidPassword = await verifyPassword(formPassword, user.password);

  if (!isValidPassword) {
    return { error: "Wrong Credentials!" };
  }

  session.isLoggedIn = true;
  session.email = user.email;
  session.username = user.username;

  await session.save();

  return {
    isLoggedIn: true,
    email: user.email,
    username: user.username,
  };
}

export async function register(formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!email || !username || !password) {
    return { error: "All fields are required" };
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const user = await createUser({ email, username, password });

  if (!user) {
    return { error: "Error creating user" };
  }

  const session = await getSession();
  session.isLoggedIn = true;
  session.userId = user.id;
  session.email = user.email;
  session.username = user.username;

  await session.save();
  return {
    isLoggedIn: true,
    email: user.email,
    username: user.username,
  };
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  return { success: true };
}
