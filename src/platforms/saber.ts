import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "saber",
  name: "Saber",
  defiLlamaId: "saber",
  isDeprecated: true,
  tags: ["dapp"],
  links: {
    website: "https://saberdao.io/",
  },
};

const stableswapContract = {
  name: "Stable Swap",
  address: "SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ",
  networkId: NetworkId.solana,
};

const swapContract = {
  name: "Swap",
  address: "YAkoNb6HKmSxQN9L8hiBE5tPJRsniSSMzND1boHmZxe",
  networkId: NetworkId.solana,
};

export const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [stableswapContract, swapContract],
};

export const services: ServiceRaw[] = [swapService];
