## About

Our Marketplace enables you to easily make your integrations available to users of your application through our beautiful React components that integrate directly with Fusebit.

The Marketplace Component will automatically generate a tile for each integration you pass to it in a gallery style page. For each integration in the gallery, it will check to see if the tenant has already installed the integration and reflect the state accordingly. 

## ✨** Features**

* Standardized UI Components with built-in Fusebit Integration Logic
* Handles Installation & OAuth Process from the Marketplace
* Updates Integration Tile for each tenant based on their Installation Status 


## 📦** Install**

```javascript

npm i @fusebit/react-marketplace

```


## 🔨** Usage**

```javascript
import { Marketplace as FusebitMarketplace } from '@fusebit/react-marketplace';

<FusebitMarketplace
  onUninstall={props.onUninstall}
  getInstallUrl={props.getInstallUrl}
  getIntegrations={() => props.userData?.list || []}
/>
```


## 👀** Example Projects**

See the marketplace in action with the [Fusebit Sample App]([https://github.com/fusebit/demo-task-app](https://github.com/fusebit/demo-task-app))