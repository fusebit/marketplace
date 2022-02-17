import React from 'react';

export interface Entity {
  id: string;
  largeIcon: string;
  name: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface CustomBodyProps {
  handleClick: () => void;
  loading: boolean;
}

export interface InstallStatusResponse {
  status: 'success' | 'error';
  err?: any;
}

export type TileProps = {
  integrationId: string;
  connectorId: string;
  getInstallUrl: () => Promise<string>;
  getIsInstalled: () => Promise<boolean>;
  onCommitSession: (session: string) => Promise<void>;
  onUninstall: () => Promise<void>;
  title?: string;
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
  onInstalled?: (res: InstallStatusResponse) => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
};

export interface MarketplaceProps
  extends Omit<
    TileProps,
    'title' | 'connectorId' | 'integrationId' | 'getInstallUrl' | 'getIsInstalled' | 'onCommitSession' | 'onUninstall'
  > {
  integrations: Pick<
    TileProps,
    'title' | 'connectorId' | 'integrationId' | 'getInstallUrl' | 'getIsInstalled' | 'onCommitSession' | 'onUninstall'
  >[];
  className?: string;
}
