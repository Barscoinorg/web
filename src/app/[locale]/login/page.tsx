import Login from "@/components/auth/login";
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();
  if (session.isLoggedIn) {
    redirect("/");
  }
  return <Login />;
}
