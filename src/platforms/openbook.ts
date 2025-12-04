import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "openbook",
  name: "OpenBook",
  defiLlamaId: "openbook",
  links: {
    website: "https://www.openbook.ag/",
  },
  tags: ["dapp"],
};

const contractV1 = {
  name: "V1",
  address: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
  networkId: NetworkId.solana,
};

const contractV2 = {
  name: "V2",
  address: "opnbkNkqux64GppQhwbyEVc3axhssFhVYuwar8rDHCu",
  networkId: NetworkId.solana,
};

const contractV3 = {
  name: "V3",
  address: "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-v1`,
  name: "V1",
  platformId: platform.id,
  contractsRaw: [contractV1],
};

export const serviceV2: ServiceRaw = {
  id: `${platform.id}-v2`,
  name: "V2",
  platformId: platform.id,
  contractsRaw: [contractV2, contractV3],
};

export const services: ServiceRaw[] = [service, serviceV2];
