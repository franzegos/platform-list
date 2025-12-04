import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "believe",
  name: "Believe",
  tags: ["dapp", "social"],
  links: {
    website: "https://believe.app/",
    twitter: "https://x.com/believeapp",
    documentation: "https://believe.app/faqs",
  },
  description:
    "Quickly launch tokens by replying to any tweet with @launchcoin +name to turn it into a coin.",
};

export const launchService: ServiceRaw = {
  id: `${platform.id}-launch`,
  name: "Launchacoin",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [launchService];
