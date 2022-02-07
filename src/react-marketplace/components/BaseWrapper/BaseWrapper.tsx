import React from 'react';
import styles from './BaseWrapper.modules.css';

interface Props {
  children?: React.ReactNode;
  wrapperClass?: string;
}

const BaseWrapper: React.FC<Props> = ({ children, wrapperClass }) => {
  return <div className={`${styles['wrapper']} ${wrapperClass ?? ''}`}>{children}</div>;
};

export default BaseWrapper;
