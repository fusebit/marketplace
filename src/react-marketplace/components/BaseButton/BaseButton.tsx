import React from 'react';
import styles from './BaseButton.modules.css';

interface Props {
  isInstalled?: boolean;
  buttonUninstallInnerText?: string;
  buttonInstallInnerText?: string;
  customButtonElement?: JSX.Element;
  buttonClass?: string;
}

const BaseButton: React.FC<Props> = ({
  isInstalled,
  buttonUninstallInnerText,
  buttonInstallInnerText,
  customButtonElement,
  buttonClass,
}) => {
  const installAppInnerText = () => {
    if (isInstalled) {
      if (buttonUninstallInnerText) {
        return buttonUninstallInnerText;
      } else {
        return 'UNINSTALL APP';
      }
    } else {
      if (buttonInstallInnerText) {
        return buttonInstallInnerText;
      } else {
        return 'INSTALL APP';
      }
    }
  };

  if (customButtonElement) {
    return customButtonElement;
  }

  return (
    <div
      className={`${styles['button']} ${isInstalled ? styles['uninstall'] : styles['install']} ${buttonClass ?? ''}`}
    >
      {installAppInnerText()}
    </div>
  );
};

export default BaseButton;
