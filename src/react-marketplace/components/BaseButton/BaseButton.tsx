import React from 'react';
import styles from './BaseButton.module.css';

interface Props {
  children?: React.ReactNode;
  isInstalled?: boolean;
  buttonClass?: string;
}

const BaseButton: React.FC<Props> = ({ children, isInstalled, buttonClass }) => {
  return (
    <div
      className={`${styles['button']} ${isInstalled ? styles['uninstall'] : styles['install']} ${buttonClass ?? ''}`}
    >
      {children}
    </div>
  );
};

export default BaseButton;
