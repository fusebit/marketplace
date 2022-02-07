import React from 'react';
import styles from './BaseImagesWrapper.modules.css';

interface Props {
  children?: React.ReactNode;
  imagesWrapperClass?: string;
}

const BaseImagesWrapper: React.FC<Props> = ({ children, imagesWrapperClass }) => {
  return <div className={`${styles['wrapper']} ${imagesWrapperClass ?? ''}`}>{children}</div>;
};

export default BaseImagesWrapper;
