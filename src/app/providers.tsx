"use client";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, bsc } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import {
  rainbowWallet,
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";

const wallets = [
  {
    groupName: "Popular",
    wallets: [
      rainbowWallet,
      metaMaskWallet,
      walletConnectWallet,
      coinbaseWallet,
      trustWallet,
      rabbyWallet,
    ],
  },
];

const config = getDefaultConfig({
  appName: "Barscoin",
  projectId: "64ad1c5c91c39f4d9d88ba184d6e8e89",
  chains: [mainnet, bsc],
  ssr: true,
  wallets: wallets,
});

const queryClient = new QueryClient();

export function Providers({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone="Asia/Almaty">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider initialChain={bsc}>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextIntlClientProvider>
  );
}
