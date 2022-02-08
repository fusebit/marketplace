import React from 'react';
import styles from './Card.module.css';

interface Props {
  children?: React.ReactNode;
  cardClass?: string;
}

const CardWrapper: React.FC<Props> = ({ children, cardClass }) => {
  return <div className={`${styles['wrapper']} ${cardClass ?? ''}`}>{children}</div>;
};

export default CardWrapper;
