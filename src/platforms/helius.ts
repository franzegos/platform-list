import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "helius",
  name: "Helius",
  links: {
    website: "https://www.helius.dev/",
    twitter: "https://x.com/heliuslabs",
    documentation: "https://www.helius.dev/docs",
  },
  tags: ["tool"],
};

export const billingService: ServiceRaw = {
  id: `${platform.id}-billing`,
  name: "Billing",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [billingService];
