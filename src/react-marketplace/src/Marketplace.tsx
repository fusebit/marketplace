import React from "react";
import Tile from "./Tile";
import "./marketplace-styles.css";
import { MarketplaceProps } from "./interfaces/marketplace";

const Marketplace: React.FC<MarketplaceProps> = ({
  integrations,
  wrapperClass,
}) => {
  return (
    <div className={`marketplace-wrapper ${wrapperClass ?? ""}`}>
      {integrations.map((integration) => (
        <Tile {...integration} />
      ))}
    </div>
  );
};

export default Marketplace;
