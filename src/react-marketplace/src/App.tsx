import Marketplace from './Marketplace';
import img from './demo-icon.svg';
import { TileProps } from './interfaces/marketplace';

const integrations: TileProps[] = [
  {
    title: 'Slack',
    image: img,
    imageAlt: 'slack',
    docsLinkUrl: '/',
  },
];

function App() {
  return (
    <div>
      <Marketplace integrations={integrations} />
    </div>
  );
}

export default App;
