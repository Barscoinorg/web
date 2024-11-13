import { SessionOptions } from "iron-session";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  wallet_address?: string;
  referral_code?: string;
  referred_by?: string;
  created_at: Date;
}

export interface SessionData {
  userId?: number;
  username?: string;
  email?: string;
  walletAddress?: string;
  referralCode?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "bars-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.WORK_ENV === "production",
  },
};
