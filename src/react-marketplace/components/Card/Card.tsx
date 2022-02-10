import React from 'react';
import cn from 'classnames';
import styles from './Card.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const CardWrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};

export default CardWrapper;
