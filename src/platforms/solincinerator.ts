import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solincinerator",
  name: "Sol Incinerator",
  description: "Burn any unwanted NFTs or tokens and reclaim the rent",
  links: {
    website: "https://sol-incinerator.com/",
    twitter: "https://x.com/solincinerator",
    discord: "https://discord.gg/solslugs",
  },
  tags: ["tool", "dapp"],
};

const incineratorContract = {
  name: "Incinerator",
  address: "F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7",
  networkId: NetworkId.solana,
};

export const cleanupService: ServiceRaw = {
  id: `${platform.id}-cleanup`,
  name: "Cleanup",
  platformId: platform.id,
  contractsRaw: [incineratorContract],
};

export const services: ServiceRaw[] = [cleanupService];
