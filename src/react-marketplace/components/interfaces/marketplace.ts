import React from 'react';

export type TileProps = {
  wrapperClass?: string;
  titleClass?: string;
  imageClass?: string;
  buttonsWrapperClass?: string;
  linkClass?: string;
  buttonClass?: string;
  linkInnerText?: string;
  buttonInstallInnerText?: string;
  buttonUninstallInnertext?: string;
  linkTarget?: '_blank' | '_parent' | '_self' | '_top';
  customLinkElement?: JSX.Element;
  customButtonElement?: JSX.Element;
  onMainActionClick?: () => void;
  getCustomBody?: (obj: any) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ image: string; hideImage?: never } | { image?: never; hideImage: boolean }) &
  ({ imageAlt: string; hideImage?: never } | { imageAlt?: never; hideImage: boolean }) &
  ({ linkUrl: string; hideLink?: never } | { linkUrl?: never; hideLink: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  wrapperClass?: string;
}
