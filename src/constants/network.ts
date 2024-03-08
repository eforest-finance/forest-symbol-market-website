import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  FOREST: {
    dev: {
      cmsUrl: 'https://testhome.eforest.finance/cms/',
      s3Url: 'https://forest-dev.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      cmsUrl: 'https://cms.eforest.finance/',
      s3Url: 'https://forest.s3.ap-northeast-1.amazonaws.com/',
    },
  },
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
