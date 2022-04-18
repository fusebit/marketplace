/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface Entity {
  id: string;
  largeIcon: string;
  name: string;
  description: string;
  tags: {
    catalog: string;
  };
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
  onUninstallClick: (integrationId: string) => Promise<void>;
  onInstallClick?: (url: string) => void;
  hideTitle?: boolean;
  hideSubtitle?: boolean;
  hideDescription?: boolean;
  getTileImages?: (integrationId: string, feedId: string) => JSX.Element | void;
  hideImages?: boolean;
  learnMoreText?: string;
  hideLearnMore?: boolean;
  classes?: {
    link?: string;
    card?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    button?: string;
    imagesWrapper?: string;
    buttonsWrapper?: string;
    spinner?: string;
  };
  installText?: string;
  uninstallText?: string;
  onUninstalled?: (res: InstallStatusResponse) => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
  isDisabled?: boolean;
}

export interface MarketplaceProps
  extends Omit<TileProps, 'title' | 'feedId' | 'integrationId' | 'isInstalled' | 'feed'> {
  getIntegrations: () => Integration[] | Promise<Integration[]>;
  className?: string;
  isDemo?: boolean;
  feedUrl?: string;
}
