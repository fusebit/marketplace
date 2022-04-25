import React from 'react';
import cn from 'classnames';
import styles from './Subtitle.module.css';

interface Props {
  className?: string;
}

const Subtitle: React.FC<Props> = ({ className, children }) => (
  <h6 className={cn(styles.subtitle, className)}>{children}</h6>
);

export default Subtitle;
