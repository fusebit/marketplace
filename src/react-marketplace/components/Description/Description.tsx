import React from 'react';
import cn from 'classnames';
import styles from './Description.module.css';

interface Props {
  className?: string;
}

const Description: React.FC<Props> = ({ className, children }) => (
  <p className={cn(styles.description, className)}>{children}</p>
);

export default Description;
