## About

The Fusebit Marketplace enables you to easily make your integrations available to users of your application through our beautiful React components that integrate directly with Fusebit.

The `FusebitMarketplace` component will create a tile for each integration that you pass to it in an automatically generated gallery style page. For each integration tile in this gallery, it will check directly with Fusebit to see if the tenant has already installed the integration and reflect the state accordingly. 

## ✨** Features**

* Standardized UI Components with built-in Fusebit Integration Logic
* Handles Installation & OAuth Process from within the Marketplace
* Displays Installation Status of each Integration per Tenant

## 📦** Install**

```javascript

npm i @fusebit/react-marketplace

```


## 🔨** Usage**

```javascript
import { Marketplace as FusebitMarketplace } from "@fusebit/react-marketplace";

return (
  <FusebitMarketplace
    onUninstall={props.onUninstall}
    getInstallUrl={props.getInstallUrl}
    getIntegrations={() => props.userData?.list || []}
  />
);
```


## 👀** Example Projects**

See the marketplace in action with the [Fusebit Sample App]([https://github.com/fusebit/demo-task-app](https://github.com/fusebit/demo-task-app))