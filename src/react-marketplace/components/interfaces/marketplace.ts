import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
}

export interface CustomBodyProps {
  handleClick: () => void;
}

export type TileProps = {
  id: string;
  classes?: {
    link?: string;
    card?: string;
    title?: string;
    image?: string;
    button?: string;
    imagesWrapper?: string;
    buttonsWrapper?: string;
  };
  hideLink?: boolean;
  linkInnerText?: string;
  installText?: string;
  uninstallText?: string;
  onMainActionClick?: () => void;
  getInstallUrl?: () => Promise<any>;
  getIsInstalled?: () => Promise<any>;
  onCommitSession?: (session: any) => Promise<void>;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ images: ImageProps[]; hideImages?: never } | { images?: never; hideImages: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  className?: string;
}
