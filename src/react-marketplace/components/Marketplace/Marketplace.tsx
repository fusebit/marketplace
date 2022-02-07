import React from 'react';
import Tile from '../Tile';
import styles from './Marketplace.modules.css';
import { MarketplaceProps } from '../interfaces/marketplace';

const Marketplace: React.FC<MarketplaceProps> = ({ integrations, wrapperClass }) => {
  const integrationsss = [
    {
      title: 'Slack',
      hideImage: true,
      linkUrl: '/',
    },
  ];

  return (
    <div className={`${styles['wrapper']} ${wrapperClass ?? ''}`}>
      {integrationsss.map((integration) => (
        <Tile {...integration} getCustomBody={(integration) => <div>{integration.title}</div>} />
      ))}
    </div>
  );
};

export default Marketplace;
