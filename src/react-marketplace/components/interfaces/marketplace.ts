/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface Entity {
  id: string;
  largeIcon: string;
  name: string;
  [key: string]: any;
  resources?: {
    configureAppDocUrl: string;
    [key: string]: any;
  };
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface CustomBodyProps {
  handleClick: () => void;
  isLoading: boolean;
}

export interface InstallStatusResponse {
  status: 'success' | 'error';
  err?: any;
}

export interface Integration {
  integrationId: string;
  feedId: string;
  isInstalled: boolean;
  title?: string;
}

export interface TileProps extends Integration {
  feed: Entity[];
  getInstallUrl: (integrationId: string) => Promise<string>;
  onUninstall: (integrationId: string) => Promise<void>;
  hideTitle?: boolean;
  images?: ImageProps[];
  hideImages?: boolean;
  linkText?: string;
  hideLink?: boolean;
  classes?: {
    link?: string;
    card?: string;
    title?: string;
    image?: string;
    button?: string;
    imagesWrapper?: string;
    buttonsWrapper?: string;
    spinner?: string;
  };
  installText?: string;
  uninstallText?: string;
  onMainActionClick?: () => void;
  onUninstalled?: (res: InstallStatusResponse) => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
  isDisabled?: boolean;
}

export interface MarketplaceProps
  extends Omit<TileProps, 'title' | 'feedId' | 'integrationId' | 'isInstalled' | 'feed'> {
  integrations: Integration[];
  isLoadingIntegrations?: boolean;
  className?: string;
  demo?: boolean;
}
