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

### Integrate the Fusebit Marketplace component into an HTML file using javascript

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
        <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@fusebit/react-marketplace@2.5.0/dist/cjs/index.js"></script>
    </head>
    <body>
        <div id="app"></div>
        <script>
            const getIntegrations = async () => {
                const url = "/api/test-tenant/integrations";
                const res = await fetch(url || "");
                const integrations = await res.json();
                return integrations;
            };

            const getInstallUrl = async (integration) => {
                const url = `/api/${integration}/test-tenant/installUrl`;
                const res = await fetch(url || "");
                const install = await res.json();
                return install.targetUrl;
            };

            const onUninstallClick = async (integration) => {
                const url = `/api/${integration}/test-tenant/install`;
                const res = await fetch(url || "", { method: "DELETE" });
            };

            const props = {
                onUninstallClick: onUninstallClick,
                getInstallUrl: getInstallUrl,
                getIntegrations: getIntegrations,
            }

            ReactDOM.render(
                React.createElement(Fusebit.Marketplace, props), document.getElementById("app")  
            );
        </script>
    </body>
</html>
```


## 👀 Example: Fusebit Sample App

See the Marketplace in action with the [Fusebit Sample App](https://github.com/fusebit/demo-task-app). More Specifically, you can take a look at:
- [Frontend Component](https://github.com/fusebit/demo-task-app/blob/main/src/client/components/Marketplace.tsx)
- [Backend API Calls](https://github.com/fusebit/demo-task-app/tree/main/src/server/api)

