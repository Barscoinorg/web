import { create } from "zustand";

interface SessionState {
  isLoggedIn: boolean;
  email: string | null;
  username: string | null;
  setSession: (data: {
    isLoggedIn: boolean;
    email?: string;
    username?: string;
  }) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  isLoggedIn: false,
  email: null,
  username: null,
  setSession: (data) => set(data),
  clearSession: () => set({ isLoggedIn: false, email: null, username: null }),
}));
