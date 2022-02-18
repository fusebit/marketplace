import React from 'react';

export interface Entity {
  id: string;
  largeIcon: string;
  name: string;
  resources: {
    configureAppDocUrl: string;
  };
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
  onAuthentication: (session: string) => Promise<void>;
  onUninstall: () => Promise<void>;
  title?: string;
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
  onInstalled?: (res: InstallStatusResponse) => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
};

export interface MarketplaceProps extends Omit<TileProps, 'title' | 'connectorId' | 'integrationId'> {
  integrations: Pick<TileProps, 'title' | 'connectorId' | 'integrationId'>[];
  className?: string;
}
