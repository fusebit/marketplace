import React from 'react';
import Tile from '../Tile';
import styles from './Marketplace.modules.css';
import { MarketplaceProps } from '../interfaces/marketplace';

const Marketplace: React.FC<MarketplaceProps> = ({ integrations, wrapperClass }) => {
  return (
    <div className={`${styles['wrapper']} ${wrapperClass ?? ''}`}>
      {integrations?.map((integration) => (
        <Tile key={integration.id} {...integration} getCustomBody={(integration) => <div>{integration.title}</div>} />
      ))}
    </div>
  );
};

export default Marketplace;
