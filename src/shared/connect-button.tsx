"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTranslations } from "next-intl";

interface ConnectButtonCustomProps {
  className?: string;
  buttonClassName?: string;
}

export function ConnectButtonCustom({
  className,
  buttonClassName,
}: ConnectButtonCustomProps) {
  const t = useTranslations("hero.buttons");

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            className={className}
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className={buttonClassName}>
                    {t("connect")}
                  </button>
                );
              }

              return (
                <button onClick={openAccountModal} className={buttonClassName}>
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
