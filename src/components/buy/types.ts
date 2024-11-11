interface ExchangeCard {
  logo: string;
  name: string;
  isComingSoon?: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
  link: string;
  logoWidth?: number;
  logoHeight?: number;
}

interface ExchangeSection {
  title: string;
  exchanges: ExchangeCard[];
}

export type { ExchangeCard, ExchangeSection };
