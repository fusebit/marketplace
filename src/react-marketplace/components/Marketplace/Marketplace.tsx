import React from 'react';
import Tile from '../Tile';
import styles from './Marketplace.module.css';
import { MarketplaceProps } from '../interfaces/marketplace';

const Marketplace: React.FC<MarketplaceProps> = ({ integrations, wrapperClass }) => {
  return (
    <div className={`${styles['wrapper']} ${wrapperClass ?? ''}`}>
      {integrations?.map((integration) => (
        <Tile key={integration.id} {...integration} />
      ))}
    </div>
  );
};

export default Marketplace;
