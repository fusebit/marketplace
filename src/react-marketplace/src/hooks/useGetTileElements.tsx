interface Props {
  isInstalled: boolean;
  docsLinkClass?: string;
  mainActionClass?: string;
  docsLinkInnerText?: string;
  mainActionInstallInnerText?: string;
  mainActionUninstallInnertext?: string;
  docsLinkTarget?: "_blank" | "_parent" | "_self" | "_top";
  docsLinkUrl?: string;
  disableDocsLink?: boolean;
  customDocsLinkElement?: JSX.Element;
  customMainActionElement?: JSX.Element;
}

const useGetTileElements = ({
  isInstalled,
  mainActionUninstallInnertext,
  mainActionInstallInnerText,
  mainActionClass,
  disableDocsLink,
  docsLinkUrl,
  docsLinkTarget,
  docsLinkClass,
  docsLinkInnerText,
  customDocsLinkElement,
  customMainActionElement,
}: Props) => {
  const docsElement = (() => {
    if (disableDocsLink) return null;
    if (customDocsLinkElement) {
      return customDocsLinkElement;
    }
    return (
      <a
        href={docsLinkUrl}
        rel="noreferrer"
        target={docsLinkTarget || "_blank"}
        className={`tile-actions ${docsLinkClass ?? ""}`}
      >
        {docsLinkInnerText || "LEARN MORE"}
      </a>
    );
  })();

  const installAppInnerText = () => {
    if (isInstalled) {
      if (mainActionUninstallInnertext) {
        return mainActionUninstallInnertext;
      } else {
        return "UNINSTALL APP";
      }
    } else {
      if (mainActionInstallInnerText) {
        return mainActionInstallInnerText;
      } else {
        return "INSTALL APP";
      }
    }
  };

  const mainActionElement = (() => {
    if (customMainActionElement) {
      return customMainActionElement;
    } else {
      return (
        <div
          className={`tile-actions ${isInstalled ? "uninstall" : "install"} ${
            mainActionClass ?? ""
          }`}
        >
          {installAppInnerText()}
        </div>
      );
    }
  })();

  return {
    docsElement,
    mainActionElement,
  };
};

export default useGetTileElements;
