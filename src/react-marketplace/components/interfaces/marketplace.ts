import React from 'react';

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
  hideLink?: boolean;
  linkInnerText?: string;
  installText?: string;
  uninstallText?: string;
  onMainActionClick?: () => void;
  getInstallUrl?: () => Promise<string>;
  getIsInstalled?: () => Promise<boolean>;
  onCommitSession?: (session: string) => Promise<void>;
  onUninstall?: () => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  onInstalled?: (res: InstallStatusResponse) => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ images: ImageProps[]; hideImages?: never } | { images?: never; hideImages: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  className?: string;
}
