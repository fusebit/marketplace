import React from 'react';
import Tile from '../Tile';
import './Marketplace.css';
import { MarketplaceProps } from '../interfaces/marketplace';

const Marketplace: React.FC<MarketplaceProps> = ({ integrations, wrapperClass }) => {
  const integrationsss = [
    {
      title: 'Slack',
      disableImage: true,
      docsLinkUrl: '/',
    },
  ];

  return (
    <div className={`marketplace-wrapper ${wrapperClass ?? ''}`}>
      {integrationsss.map((integration) => (
        <Tile {...integration} />
      ))}
    </div>
  );
};

export default Marketplace;
