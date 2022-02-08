import React from 'react';
import styles from './Button.module.css';

interface Props {
  children?: React.ReactNode;
  isInstalled?: boolean;
  buttonClass?: string;
}

const Button: React.FC<Props> = ({ children, isInstalled, buttonClass }) => {
  return (
    <div
      className={`${styles['button']} ${isInstalled ? styles['uninstall'] : styles['install']} ${buttonClass ?? ''}`}
    >
      {children}
    </div>
  );
};

export default Button;
