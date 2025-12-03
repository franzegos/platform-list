import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "gpool",
  name: "GPool",
  links: {
    website: "https://github.com/gpool-cloud/gpool-staking-ui",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: "Staking",
  address: "poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc",
  networkId: NetworkId.solana,
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
