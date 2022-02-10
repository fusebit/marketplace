import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

interface Props {
  children?: React.ReactNode;
  isInstalled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, isInstalled, className, onClick }) => {
  return (
    <div className={cn(styles.button, isInstalled ? styles.uninstall : styles.install, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
