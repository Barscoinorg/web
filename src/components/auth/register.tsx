"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/routing";

import styles from "./register.module.css";
import { useTranslations } from "next-intl";
import { register } from "@/actions";
import { useActionState } from "react";
import { useSessionStore } from "@/store/session";

interface RegisterState {
  error?: string;
  isLoggedIn?: boolean;
  email?: string;
  username?: string;
}

export default function Register() {
  const t = useTranslations("auth");
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [state, formAction, isPending] = useActionState<
    RegisterState,
    FormData
  >(
    async (state: RegisterState, formData: FormData) => {
      const result = await register(formData);
      if (result.isLoggedIn) {
        useSessionStore.getState().setSession(result);
        router.push("/");
      }
      return result;
    },
    { error: "", isLoggedIn: false, email: "", username: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <h1 className={styles.register__title}>{t("register.title")}</h1>

        <form className={styles.register__form} action={formAction}>
          <input
            type="text"
            name="username"
            placeholder={t("register.name")}
            value={formData.username}
            onChange={handleChange}
            className={styles.register__input}
          />

          <input
            type="email"
            name="email"
            placeholder={t("register.email")}
            value={formData.email}
            onChange={handleChange}
            className={styles.register__input}
          />

          <input
            type="password"
            name="password"
            placeholder={t("register.password")}
            value={formData.password}
            onChange={handleChange}
            className={styles.register__input}
          />

          <p className={styles.register__terms}>
            {t("register.terms_description")}{" "}
            <Link href="/terms" className={styles.register__link}>
              {t("register.terms")}
            </Link>{" "}
            {t("register.terms_description2")}
          </p>

          <button
            type="submit"
            disabled={isPending}
            className={styles.register__button}>
            {t("register.button")}
          </button>
          {state?.error && (
            <p className={styles.register__error}>{state.error}</p>
          )}
        </form>

        <p className={styles.register__signin}>
          {t("register.signin_description")}{" "}
          <Link href="/login" className={styles.register__link}>
            {t("register.signin")}
          </Link>
        </p>
      </div>
    </div>
  );
}
