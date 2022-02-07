import React from 'react';
import styles from './BaseButtonsWrapper.modules.css';

interface Props {
  buttonsWrapperClass?: string;
  children?: React.ReactNode;
}

const BaseButtonsWrapper: React.FC<Props> = ({ buttonsWrapperClass, children }) => {
  return <div className={`${styles['wrapper']} ${buttonsWrapperClass ?? ''}`}>{children}</div>;
};

export default BaseButtonsWrapper;
