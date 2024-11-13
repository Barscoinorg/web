"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";
import { useTranslations } from "next-intl";
import { login } from "@/actions";
import { useActionState } from "react";

export default function Login() {
  const t = useTranslations("auth.login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [state, formAction, isPending] = useActionState(
    async (prevState: { error: string } | null, formData: FormData) => {
      return login(formData);
    },
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <h1 className={styles.login__title}>{t("title")}</h1>
        <p className={styles.login__subtitle}>{t("subtitle")}</p>
        <form className={styles.login__form} action={formAction}>
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className={styles.login__input}
          />

          <input
            type="password"
            name="password"
            placeholder={t("password")}
            value={formData.password}
            onChange={handleChange}
            className={styles.login__input}
          />

          <Link href="/forgot-password" className={styles.login__forgot}>
            {t("forgot")}
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className={styles.login__button}>
            {t("button")}
          </button>
          {state?.error && <p className={styles.login__error}>{state.error}</p>}
        </form>

        <p className={styles.login__signup}>
          {t("signup_description")}{" "}
          <Link href="/register" className={styles.login__link}>
            {t("signup")}
          </Link>
        </p>
      </div>
    </div>
  );
}
