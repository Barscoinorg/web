"use client";

import { useEffect, useState } from "react";
import styles from "./referal.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ConnectButtonCustom } from "@/shared/connect-button";
import { useAccount } from "wagmi";

interface ClaimHistory {
  date: string;
  amount: string;
}

export default function Referal() {
  const t = useTranslations("referal");
  const { isConnected, address } = useAccount();
  const [referalLink, setReferalLink] = useState("");

  useEffect(() => {
    if (address) {
      setReferalLink(`https://barscoin.zone?ref=${address}`);
    } else {
      setReferalLink("https://barscoin.zone");
    }
  }, [address]);

  const mockHistory: ClaimHistory[] = [
    { date: "23/10/24", amount: "113BRS" },
    { date: "23/10/24", amount: "113BRS" },
    { date: "23/10/24", amount: "113BRS" },
    { date: "23/10/24", amount: "113BRS" },
    { date: "23/10/24", amount: "113BRS" },
    { date: "23/10/24", amount: "113BRS" },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referalLink);
    } catch (err) {
      console.error("Ошибка при копировании:", err);
    }
  };

  return (
    <div className={styles.referal}>
      <div className={styles.referalContainer}>
        <div className={styles.referalCard}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.subtitle}>{t("description")}</p>
          <div className={styles.linkWrapper}>
            <input
              type="text"
              value={referalLink}
              readOnly
              className={styles.linkInput}
            />
            <button className={styles.copyButton} onClick={copyToClipboard}>
              {t("shareLink")}
            </button>
          </div>
          <div className={styles.statsWrapper}>
            <div className={styles.statsCard}>
              <span className={styles.statsIcon}>4</span>
              <span className={styles.statsLabel}>{t("referrals")}</span>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsIcon}>587.061</div>
              <span className={styles.statsLabel}>{t("totalEarned")}</span>
            </div>
          </div>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.earnedCard}>
            <div className={styles.earnedInfo}>
              <span className={styles.earnedLabel}>{t("youEarned")}</span>
              <span className={styles.earnedValue}>487.003</span>
            </div>

            <Image src="/bars_ref.png" alt="coin" width={225} height={225} />

            {isConnected ? (
              <button className={styles.claimButton}>{t("claim")}</button>
            ) : (
              <ConnectButtonCustom buttonClassName={styles.claimButton} />
            )}
          </div>

          <div className={styles.historyCard}>
            <h3 className={styles.historyTitle}>{t("claimHistory")}</h3>
            <div className={styles.historyList}>
              {mockHistory.map((item, index) => (
                <div key={index} className={styles.historyItem}>
                  <span className={styles.historyDate}>{item.date}</span>
                  <span className={styles.historyAmount}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
