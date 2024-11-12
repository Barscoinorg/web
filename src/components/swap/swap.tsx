"use client";

import { useState } from "react";
import styles from "./swap.module.css";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useTranslations } from "next-intl";
import { ConnectButtonCustom } from "@/shared/connect-button";

interface Token {
  symbol: string;
  icon: string;
}

export default function Swap() {
  const t = useTranslations("swap");
  const { isConnected } = useAccount();
  const [fromToken, setFromToken] = useState<Token>({
    symbol: "BRS",
    icon: "/bars_coin.svg",
  });
  const [toToken, setToToken] = useState<Token>({
    symbol: "USDT",
    icon: "/tether.svg",
  });
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className={styles.swap}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.subtitle}>{t("description")}</p>
      <div className={styles.swapContainer}>
        <div className={styles.swapCard}>
          <div className={styles.inputGroup}>
            <span className={styles.inputTitle}>{t("sell")}</span>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0"
              />
              <button className={styles.tokenButton}>
                <Image
                  src={fromToken.icon}
                  alt={fromToken.symbol}
                  width={41}
                  height={41}
                  className={styles.tokenIcon}
                />

                <span className={styles.tokenSymbol}>{fromToken.symbol}</span>
              </button>
            </div>
            <span className={styles.usdValue}>$0</span>
          </div>

          <button className={styles.switchButton} onClick={handleSwapTokens}>
            <Image src="/switch.svg" alt="switch" width={24} height={24} />
          </button>

          <div className={styles.inputGroup}>
            <span className={styles.inputTitle}>{t("buy")}</span>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                placeholder="0"
              />
              <button className={styles.tokenButton}>
                <Image
                  src={toToken.icon}
                  alt={toToken.symbol}
                  width={41}
                  height={41}
                  className={styles.tokenIcon}
                />

                <span className={styles.tokenSymbol}>{toToken.symbol}</span>
              </button>
            </div>
            <span className={styles.usdValue}>$0</span>
          </div>
        </div>
        {isConnected ? (
          <button className={styles.connectButton}>{t("button")}</button>
        ) : (
          <ConnectButtonCustom buttonClassName={styles.connectButton} />
        )}
      </div>
    </div>
  );
}
