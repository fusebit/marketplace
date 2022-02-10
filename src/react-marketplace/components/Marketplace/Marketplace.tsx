import React from 'react';
import Tile from '../Tile';
import cn from 'classnames';
import styles from './Marketplace.module.css';
import { MarketplaceProps } from '../interfaces/marketplace';

const Marketplace: React.FC<MarketplaceProps> = ({ integrations, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {integrations?.map((integration) => (
        <Tile key={integration.id} {...integration} />
      ))}
    </div>
  );
};

export default Marketplace;
