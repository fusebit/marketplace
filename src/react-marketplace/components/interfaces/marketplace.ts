import React from "react";

export type TileProps = {
  wrapperClass?: string;
  titleClass?: string;
  imageClass?: string;
  actionsWrapperClass?: string;
  docsLinkClass?: string;
  mainActionClass?: string;
  docsLinkInnerText?: string;
  mainActionInstallInnerText?: string;
  mainActionUninstallInnertext?: string;
  docsLinkTarget?: "_blank" | "_parent" | "_self" | "_top";
  customDocsLinkElement?: JSX.Element;
  customMainActionElement?: JSX.Element;
  onMainActionClick?: () => void;
  children?: React.ReactNode;
} & (
  | { title: string; disableTitle?: never }
  | { title?: never; disableTitle: boolean }
) &
  (
    | { image: string; disableImage?: never }
    | { image?: never; disableImage: boolean }
  ) &
  (
    | { imageAlt: string; disableImage?: never }
    | { imageAlt?: never; disableImage: boolean }
  ) &
  (
    | { docsLinkUrl: string; disableDocsLink?: never }
    | { docsLinkUrl?: never; disableDocsLink: boolean }
  );

export interface MarketplaceProps {
  integrations: TileProps[];
  wrapperClass?: string;
}
