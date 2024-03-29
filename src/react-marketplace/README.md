## ℹ︎ About

The Fusebit Marketplace enables you to easily make all your Integrations available to users of your application through our beautiful React components that integrate directly with Fusebit.

The `FusebitMarketplace` component will create a tile for each Integration that you pass to it in an automatically generated gallery style page. Each Integration tile in this gallery will check directly with Fusebit to see if the tenant has already installed the Integration and reflect the state accordingly.

## ✨ Features

* Standardized UI Components with built-in Fusebit Integration Logic
* Handles Installation & OAuth Process from within the Marketplace
* Displays Installation Status of each Integration per Tenant

## 📦 Install

```javascript

npm i @fusebit/react-marketplace

```


## 🔨 Usage

```javascript
import { Marketplace as FusebitMarketplace } from "@fusebit/react-marketplace";

return (
  <FusebitMarketplace
    onUninstallClick={props.onUninstall}
    getInstallUrl={props.getInstallUrl}
    getIntegrations={() => props.userData?.list || []}
  />
);
```


## 👀 Example: Fusebit Sample App

See the Marketplace in action with the [Fusebit Sample App](https://github.com/fusebit/demo-task-app). More Specifically, you can take a look at:
- [Frontend Component](https://github.com/fusebit/demo-task-app/blob/main/src/client/components/Marketplace.tsx)
- [Backend API Calls](https://github.com/fusebit/demo-task-app/tree/main/src/server/api)

