import { Entity } from './components/interfaces/marketplace';

export const integrationsFeed: Entity[] = [
  {
    id: 'asana',
    name: 'Asana',
    smallIcon:
      '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.2389 10.2084C12.8996 10.2084 11.0035 12.1045 11.0035 14.4435C11.0035 16.7827 12.8996 18.6791 15.2389 18.6791C17.5779 18.6791 19.474 16.7827 19.474 14.4435C19.474 12.1045 17.5779 10.2084 15.2389 10.2084ZM4.23526 10.2087C1.89628 10.2089 0 12.1045 0 14.4437C0 16.7827 1.89628 18.6789 4.23526 18.6789C6.57442 18.6789 8.47072 16.7827 8.47072 14.4437C8.47072 12.1045 6.57442 10.2087 4.23505 10.2087H4.23526ZM13.9723 4.91438C13.9723 7.25335 12.0762 9.15004 9.73721 9.15004C7.39784 9.15004 5.50174 7.25335 5.50174 4.91438C5.50174 2.57541 7.39784 0.679138 9.73719 0.679138C12.0762 0.679138 13.9721 2.57541 13.9721 4.91438H13.9723Z" fill="url(#paint0_radial)"/>\n<defs>\n<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.73963 10.5277) scale(12.9113 11.934)">\n<stop stop-color="#FFB900"/>\n<stop offset="0.6" stop-color="#F95D8F"/>\n<stop offset="0.999" stop-color="#F95353"/>\n</radialGradient>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="1000" height="198" viewBox="0 0 1000 198" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M974.795 150.604C975.4 157.497 980.914 166.272 990.467 166.272H996.057C998.223 166.272 1000 164.496 1000 162.328V39.3998H999.975C999.862 37.3289 998.151 35.6702 996.057 35.6702H978.737C976.643 35.6702 974.932 37.3289 974.817 39.3998H974.795V49.3884C964.184 36.3081 947.453 30.8789 930.676 30.8789C892.539 30.8789 861.625 61.8173 861.625 99.984C861.625 138.153 892.539 169.092 930.676 169.092V169.095C947.453 169.095 965.736 162.582 974.792 150.588L974.795 150.604V150.604ZM930.743 144.906C906.489 144.906 886.825 124.796 886.825 99.9842C886.825 75.1768 906.489 55.0653 930.743 55.0653C954.996 55.0653 974.657 75.1768 974.657 99.9842C974.657 124.796 954.996 144.906 930.743 144.906V144.906Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M839.729 154.832L839.721 91.2218H839.723C839.723 55.3652 817.119 31.1758 781.075 31.1758C763.869 31.1758 749.764 41.1329 744.783 49.6863C743.706 42.9982 740.158 35.9681 729.155 35.9681H723.547C721.378 35.9681 719.606 37.7453 719.606 39.9139V150.912C719.606 150.915 719.606 150.924 719.606 150.929V162.852H719.628C719.742 164.92 721.455 166.581 723.549 166.581H740.869C741.134 166.581 741.394 166.549 741.645 166.5C741.76 166.478 741.867 166.433 741.978 166.401C742.107 166.361 742.241 166.331 742.363 166.281C742.518 166.217 742.657 166.131 742.801 166.051C742.871 166.008 742.944 165.977 743.012 165.932C743.185 165.821 743.344 165.687 743.497 165.549C743.522 165.524 743.552 165.507 743.577 165.484C743.749 165.318 743.906 165.134 744.046 164.943C744.047 164.94 744.047 164.94 744.047 164.94C744.481 164.344 744.744 163.626 744.787 162.852H744.809V90.2356C744.809 70.9781 760.41 55.3652 779.655 55.3652C798.898 55.3652 814.499 70.9781 814.499 90.2356L814.515 150.933L814.519 150.912C814.519 150.966 814.528 151.021 814.528 151.079V162.852H814.551C814.665 164.92 816.376 166.581 818.47 166.581H835.791C836.057 166.581 836.316 166.549 836.567 166.5C836.669 166.481 836.764 166.44 836.864 166.412C837.006 166.371 837.151 166.335 837.288 166.281C837.429 166.222 837.558 166.14 837.692 166.065C837.774 166.018 837.86 165.985 837.939 165.932C838.098 165.827 838.245 165.7 838.388 165.575C838.425 165.541 838.466 165.516 838.501 165.481C838.665 165.323 838.811 165.152 838.945 164.972C838.954 164.959 838.965 164.948 838.975 164.935C839.402 164.344 839.663 163.632 839.708 162.863C839.708 162.857 839.71 162.852 839.71 162.852H839.733V154.834L839.729 154.832" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M659.351 150.604C659.957 157.497 665.471 166.272 675.023 166.272H680.613C682.78 166.272 684.553 164.496 684.553 162.328V39.3998H684.531C684.418 37.3289 682.705 35.6702 680.613 35.6702H663.293C661.199 35.6702 659.488 37.3289 659.371 39.3998H659.351V49.3884C648.738 36.3081 632.008 30.8789 615.23 30.8789C577.095 30.8789 546.181 61.8173 546.181 99.984C546.181 138.153 577.095 169.092 615.23 169.092V169.095C632.008 169.095 650.293 162.582 659.349 150.588L659.351 150.604V150.604ZM615.297 144.906C591.045 144.906 571.382 124.796 571.382 99.9842C571.382 75.1768 591.045 55.0653 615.297 55.0653C639.552 55.0653 659.211 75.1768 659.211 99.9842C659.211 124.796 639.552 144.906 615.297 144.906V144.906Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M443.756 132.998C455.318 141.014 467.939 144.907 480.067 144.907C491.621 144.907 503.566 138.913 503.566 128.479C503.566 114.549 477.538 112.382 461.184 106.819C444.828 101.257 430.741 89.7585 430.741 71.1377C430.741 42.6449 456.109 30.877 479.786 30.877C494.788 30.877 510.267 35.8277 520.302 42.9197C523.758 45.5404 521.653 48.5493 521.653 48.5493L512.074 62.2413C510.997 63.7835 509.115 65.1158 506.412 63.4467C503.71 61.7786 494.231 55.0643 479.786 55.0643C465.34 55.0643 456.638 61.7408 456.638 70.0162C456.638 79.9398 467.948 83.0609 481.195 86.4433C504.28 92.6708 529.463 100.156 529.463 128.479C529.463 153.583 505.999 169.098 480.067 169.098C460.415 169.098 443.684 163.491 429.651 153.186C426.728 150.258 428.77 147.539 428.77 147.539L438.302 133.917C440.241 131.369 442.687 132.258 443.756 132.998" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M377.173 150.604C377.779 157.497 383.293 166.272 392.846 166.272H398.436C400.602 166.272 402.378 164.496 402.378 162.328V39.3998H402.354C402.241 37.3289 400.53 35.6702 398.436 35.6702H381.116C379.022 35.6702 377.311 37.3289 377.194 39.3998H377.173V49.3884C366.562 36.3081 349.831 30.8789 333.054 30.8789C294.919 30.8789 264.004 61.8173 264.004 99.984C264.004 138.153 294.919 169.092 333.054 169.092V169.095C349.831 169.095 368.115 162.582 377.171 150.588L377.173 150.604V150.604ZM333.122 144.906C308.868 144.906 289.205 124.796 289.205 99.9842C289.205 75.1768 308.868 55.0653 333.122 55.0653C357.375 55.0653 377.035 75.1768 377.035 99.9842C377.035 124.796 357.375 144.906 333.122 144.906V144.906Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M167.197 104.685C141.533 104.685 120.729 125.489 120.729 151.155C120.729 176.819 141.533 197.623 167.197 197.623C192.861 197.623 213.665 176.819 213.665 151.155C213.665 125.489 192.861 104.685 167.197 104.685V104.685ZM46.4683 104.689C20.8048 104.689 0 125.49 0 151.155C0 176.819 20.8048 197.624 46.4683 197.624C72.1329 197.624 92.9387 176.819 92.9387 151.155C92.9387 125.49 72.1329 104.689 46.4683 104.689V104.689ZM153.3 46.5982C153.3 72.2638 132.496 93.0706 106.833 93.0706C81.1681 93.0706 60.3643 72.2638 60.3643 46.5982C60.3643 20.9377 81.1681 0.130859 106.833 0.130859C132.496 0.130859 153.3 20.9377 153.3 46.5982V46.5982Z" fill="#F06A6A"/>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with Asana is easy with Fusebit! This example lets you list the accessible resources in your customer's Asana account.\n\n[Learn more](https://developer.fusebit.io/docs/asana)!\n",
    tags: {
      catalog: 'Project Management,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/asana#creating-your-own-asana-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: true,
        terms: {
          postSuccess: 'Your Task was successfully added to Asana',
          postFail: "Oops! Something went wrong and we couldn't add your Task",
          getFail: "Oops! Something went wrong and we couldn't retrieve your tasks from Asana",
          itemName: 'Task',
          properties: [
            {
              name: 'taskName',
              label: 'Task Name',
            },
            {
              name: 'taskNotes',
              label: 'Task Notes',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          asanaIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          asanaConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/asanaIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/asanaConnector/properties/id',
            label: 'Asana Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        asanaConnector: {
          asanaName: 'asana-connector',
        },
      },
      entities: {
        asanaConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: '',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-asana-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/asana-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/asana-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Asana',
          },
        },
        asanaIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-asana-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/asana-provider":"7.41.2","@fusebit-int/framework":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Asana Integration\n//\n// This simple Asana integration allows you to call Asana APIs on behalf of the tenants of your\n// application. Fusebit manages the Asana authorization process and maps tenants of your application\n// to their Asana credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from witin your application.\nconst router = integration.router;\n\nconst connectorName = 'asanaConnector';\n\n// This sample test endpoint provides the number of tasks within the tenant's first workspace\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const asanaClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const me = await asanaClient.users.me();\n  const workspace = me.workspaces[0].gid;\n  const assignee = me.gid;\n  const tasks = await asanaClient.tasks.getTasks({ workspace, assignee });\n  ctx.body = {\n    message: `Found ${tasks.data.length} tasks in the Asana Workspace ${me.workspaces[0].name}`,\n  };\n});\n\n// Retrieve tasks from your Asana Workspace\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const asanaClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const me = await asanaClient.users.me();\n  const workspace = me.workspaces[0].gid;\n  const assignee = me.gid;\n\n  const tasks = await asanaClient.tasks.getTasks({ workspace, assignee });\n\n  const taskGIDs = tasks.data.map((tasks) => ({\n    taskGID: tasks.gid,\n  }));\n\n  const taskDetails = [];\n  for (const gid of taskGIDs) {\n    const task = await asanaClient.tasks.getTask(gid.taskGID);\n    taskDetails.push({\n      taskName: task.name,\n      taskNotes: task.notes,\n    });\n  }\n\n  ctx.body = taskDetails;\n});\n\n// Add new task to your Asana workspace\n// Note: This endpoint is also used by the sample app\nrouter.post('/api/tenant/:tenantId/item', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const asanaClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const me = await asanaClient.users.me();\n  const workspace = me.workspaces[0].gid;\n  const assignee = me.gid;\n\n  const tasks = await asanaClient.tasks.createTask({\n    name: ctx.req.body.taskName,\n    notes: ctx.req.body.taskNotes,\n    workspace: workspace,\n    assignee: assignee,\n  });\n\n  ctx.body = tasks;\n});\n\n// The sample test endpoint registers a new webhook for use with this integration\nrouter.post(\n  '/api/tenant/:tenantId/webhook/-/resource/:resourceId',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    try {\n      const asanaWebhookClient = await integration.webhook.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n      const webhook = await asanaWebhookClient.create(ctx.params.resourceId, {});\n      ctx.body = webhook;\n    } catch (e) {\n      ctx.throw(e);\n    }\n  }\n);\n\n// The sample test endpoint fetches a webhook by Id\nrouter.get(\n  '/api/tenant/:tenantId/webhook/:webhookId',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    try {\n      const asanaWebhookClient = await integration.webhook.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n      const webhook = await asanaWebhookClient.get(ctx.params.webhookId);\n      ctx.body = webhook;\n    } catch (e) {\n      ctx.throw(e);\n    }\n  }\n);\n\n// The sample test endpoint deletes a webhook by Id\nrouter.delete(\n  '/api/tenant/:tenantId/webhook/:webhookId',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    try {\n      const asanaWebhookClient = await integration.webhook.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n      const webhook = await asanaWebhookClient.delete(ctx.params.webhookId);\n      ctx.body = webhook;\n    } catch (e) {\n      ctx.throw(e);\n    }\n  }\n);\n\nintegration.event.on('/asanaConnector/webhook/:eventType', (ctx) => {\n  console.log('webhook received: ', ctx.req.body.data);\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'asanaConnector',
                skip: false,
                provider: '@fusebit-int/asana-provider',
                entityId: '<% global.entities.asanaConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Asana',
          },
        },
      },
    },
  },
  {
    id: 'confluence',
    name: 'Atlassian Confluence',
    smallIcon:
      '<svg width="60" height="57" viewBox="0 0 60 57" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.15109 43.5141C1.53759 44.5146 0.848583 45.6755 0.263398 46.6005C-0.260389 47.4856 0.0208009 48.6272 0.895775 49.1677L13.1658 56.7185C13.5965 56.9844 14.116 57.0662 14.6075 56.9456C15.0991 56.8249 15.5216 56.5118 15.7802 56.0767C16.271 55.2556 16.9034 54.189 17.5924 53.047C22.4532 45.0243 27.3424 46.0059 36.1579 50.2154L48.3241 56.0012C48.7849 56.2205 49.3148 56.2439 49.7932 56.0661C50.2715 55.8883 50.6574 55.5244 50.8631 55.0573L56.7055 41.8435C57.1182 40.8997 56.6982 39.7993 55.7616 39.3706C53.1944 38.1625 48.0881 35.7557 43.4916 33.5376C26.9554 25.5055 12.9015 26.0246 2.15109 43.5141Z" fill="url(#paint0_linear_251_481)"/> <path d="M57.169 13.5264C57.7825 12.526 58.4715 11.365 59.0567 10.4401C59.5805 9.55494 59.2993 8.41339 58.4243 7.8728L46.1543 0.322025C45.7201 0.0295662 45.1839 -0.0694339 44.6739 0.0486774C44.1638 0.166789 43.7258 0.491403 43.4643 0.944964C42.9735 1.76611 42.3411 2.83266 41.6521 3.97471C36.7913 11.9974 31.9022 11.0158 23.0867 6.80626L10.9582 1.04879C10.4974 0.829471 9.96749 0.806052 9.48917 0.983869C9.01084 1.16169 8.62489 1.52559 8.41926 1.99264L2.57685 15.2065C2.16407 16.1502 2.58408 17.2507 3.5207 17.6794C6.08796 18.8875 11.1942 21.2943 15.7907 23.5124C32.3647 31.5351 46.4186 30.9971 57.169 13.5264Z" fill="url(#paint1_linear_251_481)"/> <defs> <linearGradient id="paint0_linear_251_481" x1="56.3751" y1="60.6166" x2="42.6346" y2="29.094" gradientUnits="userSpaceOnUse"> <stop offset="0.18" stop-color="#0052CC"/> <stop offset="1" stop-color="#2684FF"/> </linearGradient> <linearGradient id="paint1_linear_251_481" x1="2.94495" y1="-3.5855" x2="16.7073" y2="27.9524" gradientUnits="userSpaceOnUse"> <stop offset="0.18" stop-color="#0052CC"/> <stop offset="1" stop-color="#2684FF"/> </linearGradient> </defs> </svg>\n',
    largeIcon:
      '<svg width="183" height="32" viewBox="0 0 183 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="logo-gradient-blue-confluence">\n<g clip-path="url(#clip0)">\n<path d="M0 0H183V32H0V0Z" fill="white" fill-opacity="0.01"/>\n<g id="Confluence">\n<path d="M48.2333 25.4279C46.9423 26.2865 44.8982 26.6442 42.7465 26.6442C35.9329 26.6442 32.0957 22.5661 32.0957 16.0197C32.0957 9.72365 35.9329 5.32359 42.7106 5.32359C44.7189 5.32359 46.763 5.71709 48.2333 6.7545V9.50901C46.763 8.57892 45.1133 8.0781 42.7106 8.0781C37.8335 8.0781 34.9646 11.2977 34.9646 16.0554C34.9646 20.8132 37.9769 23.9613 42.8899 23.9613C45.0775 23.9613 46.763 23.4604 48.2691 22.7092V25.4279H48.2333Z" fill="#253858"/>\n<path d="M50.2056 18.4522C50.2056 13.7302 52.967 10.296 57.7006 10.296C62.3985 10.296 65.1598 13.7302 65.1598 18.4522C65.1598 23.1743 62.3985 26.68 57.7006 26.68C53.0028 26.6442 50.2056 23.1743 50.2056 18.4522ZM52.8594 18.4522C52.8594 21.4572 54.3297 24.1401 57.7365 24.1401C61.0716 24.1401 62.5419 21.4214 62.5419 18.4522C62.5419 15.4831 61.1075 12.8001 57.7365 12.8001C54.3297 12.8001 52.8594 15.4473 52.8594 18.4522Z" fill="#253858"/>\n<path d="M81.7277 26.358H79.0023V16.8425C79.0023 14.0164 77.8547 12.7643 75.2727 12.7643C72.7624 12.7643 71.0052 14.4457 71.0052 17.6295V26.3938H68.2798V10.6537H71.0052V13.2294C72.0093 11.3692 73.8741 10.3318 75.9899 10.3318C79.6119 10.3318 81.6919 12.8359 81.6919 17.1644V26.358H81.7277Z" fill="#253858"/>\n<path d="M93.3826 10.618V13.1221H89.2944V26.358H86.6407V13.1221H84.0945V10.618H86.6407V8.90088C86.6407 5.96751 88.2903 4 91.6613 4C92.4861 4 93.024 4.14309 93.4902 4.25041V6.75451C93.024 6.64719 92.4143 6.61142 91.7688 6.61142C90.0834 6.61142 89.2586 7.57729 89.2586 9.0082V10.618H93.3826Z" fill="#253858"/>\n<path d="M100.519 26.4296C97.937 26.4296 96.2874 25.2133 96.2874 22.3157V4.03577H99.0128V21.9938C99.0128 23.4247 99.9452 23.9255 101.129 23.9255C101.416 23.9255 101.595 23.9255 101.918 23.8897V26.3223C101.667 26.3938 101.2 26.4296 100.519 26.4296Z" fill="#253858"/>\n<path d="M104.213 10.618H106.938V20.1336C106.938 22.9596 108.086 24.2117 110.668 24.2117C113.178 24.2117 114.935 22.5303 114.935 19.3466V10.618H117.661V26.358H114.935V23.7824C113.931 25.6426 112.066 26.68 109.95 26.68C106.328 26.68 104.249 24.1759 104.249 19.8474V10.618H104.213Z" fill="#253858"/>\n<path d="M129.28 26.6442C123.363 26.6442 120.781 23.2458 120.781 18.4165C120.781 13.6587 123.434 10.2603 128.24 10.2603C133.117 10.2603 135.053 13.6229 135.053 18.4165V19.6327H123.542C123.936 22.3157 125.658 24.0328 129.387 24.0328C131.216 24.0328 132.758 23.6751 134.193 23.1743V25.6784C132.866 26.3938 130.858 26.6442 129.28 26.6442ZM123.47 17.3433H132.292C132.149 14.4099 130.822 12.7644 128.096 12.7644C125.227 12.7644 123.757 14.5888 123.47 17.3433Z" fill="#253858"/>\n<path d="M151.657 26.358H148.932V16.8425C148.932 14.0164 147.784 12.7643 145.202 12.7643C142.692 12.7643 140.935 14.4457 140.935 17.6295V26.3938H138.209V10.6537H140.935V13.2294C141.939 11.3692 143.804 10.3318 145.919 10.3318C149.541 10.3318 151.621 12.8359 151.621 17.1644V26.358H151.657Z" fill="#253858"/>\n<path d="M166.611 25.9288C165.679 26.4296 164.209 26.6442 162.774 26.6442C157.144 26.6442 154.526 23.2458 154.526 18.4165C154.526 13.6587 157.144 10.2603 162.774 10.2603C164.209 10.2603 165.284 10.4391 166.54 11.0115V13.5156C165.535 13.0505 164.46 12.7644 162.989 12.7644C158.901 12.7644 157.216 15.34 157.216 18.4165C157.216 21.4929 158.937 24.0686 163.061 24.0686C164.675 24.0686 165.679 23.8539 166.647 23.4962V25.9288H166.611Z" fill="#253858"/>\n<path d="M177.226 26.6442C171.309 26.6442 168.727 23.2458 168.727 18.4165C168.727 13.6587 171.381 10.2603 176.186 10.2603C181.063 10.2603 183 13.6229 183 18.4165V19.6327H171.488C171.883 22.3157 173.604 24.0328 177.334 24.0328C179.163 24.0328 180.705 23.6751 182.139 23.1743V25.6784C180.812 26.3938 178.84 26.6442 177.226 26.6442ZM171.453 17.3433H180.274C180.131 14.4099 178.804 12.7644 176.079 12.7644C173.174 12.7644 171.739 14.5888 171.453 17.3433Z" fill="#253858"/>\n</g>\n<g id="Icon">\n<path id="Vector" d="M0.789051 21.8975C0.573883 22.2975 0.286993 22.7338 0.0718255 23.0974C-0.143342 23.4246 -0.0357583 23.8609 0.322854 24.0791L4.98482 26.9878C5.34343 27.2059 5.77377 27.0968 5.98893 26.7332C6.16824 26.406 6.41927 26.0061 6.6703 25.5698C8.53508 22.4793 10.364 22.8429 13.735 24.479L18.3611 26.6969C18.7197 26.8787 19.15 26.6969 19.3293 26.3333L21.5527 21.2431C21.6962 20.8795 21.5527 20.4432 21.1941 20.2978C20.2259 19.8251 18.2893 18.9161 16.5321 18.0435C10.2206 14.9894 4.87723 15.1712 0.789051 21.8975Z" fill="url(#paint0_linear)"/>\n<path id="Vector_2" d="M21.6961 10.3718C21.9113 9.97188 22.1982 9.53557 22.4133 9.17199C22.6285 8.84476 22.5209 8.40845 22.1623 8.1903L17.5003 5.28161C17.1417 5.06346 16.7114 5.17253 16.4962 5.53612C16.3169 5.86335 16.0659 6.26329 15.8149 6.6996C13.9501 9.79008 12.1212 9.4265 8.75019 7.79036L4.15995 5.53612C3.80134 5.35433 3.371 5.53612 3.1917 5.89971L0.968299 10.9899C0.824854 11.3535 0.968299 11.7898 1.32691 11.9352C2.29517 12.4079 4.23167 13.3169 5.98888 14.1895C12.2646 17.28 17.6079 17.0982 21.6961 10.3718Z" fill="url(#paint1_linear)"/>\n</g>\n</g>\n</g>\n<defs>\n<linearGradient id="paint0_linear" x1="21.403" y1="28.4975" x2="7.20258" y2="20.4492" gradientUnits="userSpaceOnUse">\n<stop stop-color="#0052CC"/>\n<stop offset="0.9182" stop-color="#2380FB"/>\n<stop offset="1" stop-color="#2684FF"/>\n</linearGradient>\n<linearGradient id="paint1_linear" x1="1.10109" y1="3.76862" x2="15.3015" y2="11.8169" gradientUnits="userSpaceOnUse">\n<stop stop-color="#0052CC"/>\n<stop offset="0.9182" stop-color="#2380FB"/>\n<stop offset="1" stop-color="#2684FF"/>\n</linearGradient>\n<clipPath id="clip0">\n<path d="M0 0H183V32H0V0Z" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with Confluence is easy with Fusebit! This example lets you list the accessible resources in your customer's Confluence account.\n\n[Learn more](https://developer.fusebit.io/docs/confluence)!\n",
    tags: {
      catalog: 'Project Management,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/confluence#creating-your-own-confluence-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: "Oops! Something went wrong and we couldn't retrieve your pages from Confluence",
          itemName: 'Page',
          properties: [
            {
              name: 'pageTitle',
              label: 'Page Title',
            },
            {
              name: 'pageLink',
              label: 'Page Link',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          confluenceIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          confluenceConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/confluenceIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/confluenceConnector/properties/id',
            label: 'Atlassian Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        confluenceConnector: {
          confluenceName: 'confluence-connector',
        },
      },
      entities: {
        confluenceConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope:
                'read:confluence-space.summary read:confluence-props read:confluence-content.summary read:confluence-user read:confluence-groups read:me search:confluence',
              audience: 'api.atlassian.com',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-atlassian-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/atlassian-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/atlassian-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Atlassian Confluence',
          },
        },
        confluenceIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-atlassian-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/atlassian-provider":"7.41.2","@fusebit-int/framework":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Atlassian Confluence Integration\n//\n// This simple Atlassian integration allows you to call Atlassian APIs on behalf of the tenants of your\n// application. Fusebit manages the Atlassian authorization process and maps tenants of your application\n// to their Atlassian credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'atlassianConnector';\n\n/// The sample test endpoint of this integration gets all available Atlassian resources for your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create an Atlassian client pre-configured with credentials necessary to communicate with your tenant's\n  // Confluence account.\n  //\n  // For the Atlassian SDK documentation, see https://developer.atlassian.com/cloud/confluence/rest/intro/.\n  const atlassianClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const resources = await atlassianClient.getAccessibleResources('confluence');\n  if (resources.length === 0) {\n    ctx.throw(404, 'No Matching Account found in Atlassian');\n  }\n\n  const confluenceCloud = resources[0];\n  const confluence = atlassianClient.confluence(confluenceCloud.id);\n\n  const result = await confluence.get('/space');\n\n  ctx.body = {\n    message: `Found ${result.size} spaces in Confluence Cloud ${confluenceCloud.id}`,\n  };\n});\n\n// Retrieve pages and their URLs from Confluence\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const atlassianClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const resources = await atlassianClient.getAccessibleResources('confluence');\n  if (resources.length === 0) {\n    ctx.throw(404, 'No Matching Account found in Atlassian');\n  }\n\n  const confluenceCloud = resources[0];\n  const confluence = atlassianClient.confluence(confluenceCloud.id);\n\n  const confluencePages = await confluence.get('/content');\n  const baseURL = confluencePages._links.base;\n\n  const pageList = confluencePages.results.map((results) => ({\n    pageTitle: results.title,\n    pageLink: baseURL + results._links.webui,\n  }));\n\n  ctx.body = pageList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'atlassianConnector',
                skip: false,
                provider: '@fusebit-int/atlassian-provider',
                entityId: '<% global.entities.confluenceConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Atlassian Confluence',
          },
        },
      },
    },
  },
  {
    id: 'custom',
    name: 'Custom',
    smallIcon:
      '<svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.5991 3.89399C60.7911 -1.298 69.2089 -1.298 74.4009 3.89399L126.106 55.5991C131.298 60.7911 131.298 69.2089 126.106 74.4009L74.4009 126.106C69.2089 131.298 60.7911 131.298 55.5991 126.106L3.89399 74.4009C-1.298 69.2089 -1.298 60.7911 3.89399 55.5991L55.5991 3.89399ZM19.6738 59.9641C16.8924 62.7456 16.8924 67.2551 19.6738 70.0365C22.4552 72.818 26.9648 72.818 29.7462 70.0365L52.241 47.5418C55.0224 44.7604 55.0224 40.2508 52.241 37.4694C49.4595 34.688 44.95 34.688 42.1685 37.4694L19.6738 59.9641ZM70.0355 29.7473C67.2541 32.5287 62.7442 32.5289 59.9628 29.7475C57.1814 26.9661 57.1816 22.4563 59.9631 19.6749C62.7445 16.8934 67.2543 16.8932 70.0357 19.6746C72.8171 22.456 72.8169 26.9659 70.0355 29.7473ZM90.1801 39.82C87.3987 37.0386 82.8891 37.0386 80.1077 39.82L39.8187 80.109C37.0372 82.8904 37.0372 87.4 39.8187 90.1814C42.6001 92.9628 47.1097 92.9628 49.8911 90.1814L90.1801 49.8924C92.9615 47.111 92.9615 42.6014 90.1801 39.82ZM100.253 59.9649C103.034 57.1834 107.544 57.1834 110.325 59.9649C113.106 62.7463 113.106 67.2558 110.325 70.0373L87.8304 92.5318C85.049 95.3133 80.5394 95.3133 77.758 92.5318C74.9766 89.7504 74.9766 85.2408 77.758 82.4594L100.253 59.9649ZM70.0359 100.254C67.2545 97.4725 62.745 97.4724 59.9636 100.254C57.1822 103.035 57.1822 107.545 59.9635 110.326C62.7449 113.108 67.2546 113.108 70.036 110.326C72.8174 107.545 72.8173 103.035 70.0359 100.254Z" fill="#FB310A"/>\n</svg>\n',
    largeIcon:
      '<svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.5991 3.89399C60.7911 -1.298 69.2089 -1.298 74.4009 3.89399L126.106 55.5991C131.298 60.7911 131.298 69.2089 126.106 74.4009L74.4009 126.106C69.2089 131.298 60.7911 131.298 55.5991 126.106L3.89399 74.4009C-1.298 69.2089 -1.298 60.7911 3.89399 55.5991L55.5991 3.89399ZM19.6738 59.9641C16.8924 62.7456 16.8924 67.2551 19.6738 70.0365C22.4552 72.818 26.9648 72.818 29.7462 70.0365L52.241 47.5418C55.0224 44.7604 55.0224 40.2508 52.241 37.4694C49.4595 34.688 44.95 34.688 42.1685 37.4694L19.6738 59.9641ZM70.0355 29.7473C67.2541 32.5287 62.7442 32.5289 59.9628 29.7475C57.1814 26.9661 57.1816 22.4563 59.9631 19.6749C62.7445 16.8934 67.2543 16.8932 70.0357 19.6746C72.8171 22.456 72.8169 26.9659 70.0355 29.7473ZM90.1801 39.82C87.3987 37.0386 82.8891 37.0386 80.1077 39.82L39.8187 80.109C37.0372 82.8904 37.0372 87.4 39.8187 90.1814C42.6001 92.9628 47.1097 92.9628 49.8911 90.1814L90.1801 49.8924C92.9615 47.111 92.9615 42.6014 90.1801 39.82ZM100.253 59.9649C103.034 57.1834 107.544 57.1834 110.325 59.9649C113.106 62.7463 113.106 67.2558 110.325 70.0373L87.8304 92.5318C85.049 95.3133 80.5394 95.3133 77.758 92.5318C74.9766 89.7504 74.9766 85.2408 77.758 82.4594L100.253 59.9649ZM70.0359 100.254C67.2545 97.4725 62.745 97.4724 59.9636 100.254C57.1822 103.035 57.1822 107.545 59.9635 110.326C62.7449 113.108 67.2546 113.108 70.036 110.326C72.8174 107.545 72.8173 103.035 70.0359 100.254Z" fill="#FB310A"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'This is a custom integration starter that allows you to use any set of connectors for ultimate flexibility.\n\n[Learn more](https://developer.fusebit.io/docs/custom)!\n',
    tags: {
      catalog:
        'Messaging,Project Management,Dev Tools,Calendar,Office,Storage,Email,Video Conferencing,CRM,Support,Spreadsheets,Operations,Sales Automation',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          customIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/customIntegration/properties/id',
            label: 'Name',
          },
        ],
      },
      data: {},
      entities: {
        customIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-custom-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Integration\n//\n// Documentation: https://developer.fusebit.io/docs/custom-integrations\n\nconst { Integration } = require('@fusebit-int/framework');\nconst integration = (module.exports = new Integration());\n\nintegration.cron.on('/cron', async (ctx) => {\n  // TODO Implement CRON-triggered integration logic here\n  console.log('RUNNING CRON-TRIGGERED INTEGRATION');\n});\n\nintegration.router.post('/api/tenant/:tenantId/test', async (ctx) => {\n  // TODO Implement HTTP-triggered integration logic here\n  console.log('RUNNING HTTP-TRIGGERED INTEGRATION');\n\n  ctx.body = {\n    message:\n      `Congratulations, your integration executed successfully! ` +\n      `Check out https://developer.fusebit.io/docs/custom-integrations to make it do something useful.`,\n  };\n});\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Custom',
          },
        },
      },
    },
  },
  {
    id: 'discord',
    name: 'Discord',
    smallIcon:
      '<svg width="75" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.3057 4.72499C58.5394 2.538 53.4283 0.926718 48.0842 0.00387122C47.9869 -0.0139394 47.8897 0.0305704 47.8396 0.119592C47.1822 1.28872 46.4541 2.81395 45.9442 4.01277C40.1964 3.15226 34.478 3.15226 28.848 4.01277C28.338 2.7873 27.5834 1.28872 26.9232 0.119592C26.873 0.0335405 26.7758 -0.0109692 26.6785 0.00387122C21.3374 0.923769 16.2262 2.53505 11.457 4.72499C11.4157 4.74279 11.3803 4.77249 11.3568 4.81104C1.66199 19.2949 -0.993816 33.4227 0.309035 47.3753C0.31493 47.4436 0.353249 47.5089 0.406307 47.5504C6.80266 52.2477 12.9986 55.0994 19.0795 56.9896C19.1768 57.0193 19.2799 56.9837 19.3419 56.9036C20.7803 54.9392 22.0626 52.868 23.162 50.6898C23.2268 50.5623 23.1649 50.4109 23.0323 50.3605C20.9985 49.589 19.0618 48.6483 17.1989 47.5801C17.0516 47.494 17.0398 47.2833 17.1753 47.1824C17.5673 46.8886 17.9595 46.583 18.3338 46.2744C18.4015 46.218 18.4959 46.2061 18.5755 46.2417C30.814 51.8294 44.0636 51.8294 56.1577 46.2417C56.2373 46.2032 56.3317 46.2151 56.4024 46.2714C56.7768 46.58 57.1688 46.8886 57.5638 47.1824C57.6993 47.2833 57.6905 47.494 57.5431 47.5801C55.6802 48.6691 53.7436 49.589 51.7068 50.3575C51.5742 50.408 51.5152 50.5623 51.5801 50.6898C52.7031 52.8649 53.9853 54.9362 55.3972 56.9006C55.4562 56.9837 55.5623 57.0193 55.6596 56.9896C61.77 55.0994 67.9659 52.2477 74.3623 47.5504C74.4183 47.5089 74.4537 47.4465 74.4596 47.3783C76.0188 31.2475 71.8479 17.2355 63.403 4.81399C63.3823 4.77249 63.347 4.74279 63.3057 4.72499ZM24.9896 38.8796C21.305 38.8796 18.2689 35.4969 18.2689 31.3425C18.2689 27.1881 21.2461 23.8053 24.9896 23.8053C28.7625 23.8053 31.7691 27.2178 31.7101 31.3425C31.7101 35.4969 28.733 38.8796 24.9896 38.8796ZM49.838 38.8796C46.1535 38.8796 43.1175 35.4969 43.1175 31.3425C43.1175 27.1881 46.0945 23.8053 49.838 23.8053C53.611 23.8053 56.6175 27.2178 56.5587 31.3425C56.5587 35.4969 53.611 38.8796 49.838 38.8796Z" fill="#5865F2"/>\n</svg>\n',
    largeIcon:
      '<svg width="75" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.3057 4.72499C58.5394 2.538 53.4283 0.926718 48.0842 0.00387122C47.9869 -0.0139394 47.8897 0.0305704 47.8396 0.119592C47.1822 1.28872 46.4541 2.81395 45.9442 4.01277C40.1964 3.15226 34.478 3.15226 28.848 4.01277C28.338 2.7873 27.5834 1.28872 26.9232 0.119592C26.873 0.0335405 26.7758 -0.0109692 26.6785 0.00387122C21.3374 0.923769 16.2262 2.53505 11.457 4.72499C11.4157 4.74279 11.3803 4.77249 11.3568 4.81104C1.66199 19.2949 -0.993816 33.4227 0.309035 47.3753C0.31493 47.4436 0.353249 47.5089 0.406307 47.5504C6.80266 52.2477 12.9986 55.0994 19.0795 56.9896C19.1768 57.0193 19.2799 56.9837 19.3419 56.9036C20.7803 54.9392 22.0626 52.868 23.162 50.6898C23.2268 50.5623 23.1649 50.4109 23.0323 50.3605C20.9985 49.589 19.0618 48.6483 17.1989 47.5801C17.0516 47.494 17.0398 47.2833 17.1753 47.1824C17.5673 46.8886 17.9595 46.583 18.3338 46.2744C18.4015 46.218 18.4959 46.2061 18.5755 46.2417C30.814 51.8294 44.0636 51.8294 56.1577 46.2417C56.2373 46.2032 56.3317 46.2151 56.4024 46.2714C56.7768 46.58 57.1688 46.8886 57.5638 47.1824C57.6993 47.2833 57.6905 47.494 57.5431 47.5801C55.6802 48.6691 53.7436 49.589 51.7068 50.3575C51.5742 50.408 51.5152 50.5623 51.5801 50.6898C52.7031 52.8649 53.9853 54.9362 55.3972 56.9006C55.4562 56.9837 55.5623 57.0193 55.6596 56.9896C61.77 55.0994 67.9659 52.2477 74.3623 47.5504C74.4183 47.5089 74.4537 47.4465 74.4596 47.3783C76.0188 31.2475 71.8479 17.2355 63.403 4.81399C63.3823 4.77249 63.347 4.74279 63.3057 4.72499ZM24.9896 38.8796C21.305 38.8796 18.2689 35.4969 18.2689 31.3425C18.2689 27.1881 21.2461 23.8053 24.9896 23.8053C28.7625 23.8053 31.7691 27.2178 31.7101 31.3425C31.7101 35.4969 28.733 38.8796 24.9896 38.8796ZM49.838 38.8796C46.1535 38.8796 43.1175 35.4969 43.1175 31.3425C43.1175 27.1881 46.0945 23.8053 49.838 23.8053C53.611 23.8053 56.6175 27.2178 56.5587 31.3425C56.5587 35.4969 53.611 38.8796 49.838 38.8796Z" fill="#5865F2"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'This integration enables you to build bots and slash commands for Discord, taking full advantage\nof the Discord API. With just a few lines of code, work with channels, messages, webhooks, and \nmanage users.\n\n[Learn more](https://developer.fusebit.io/docs/discord)!\n',
    tags: {
      catalog: 'Messaging',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/discord#creating-your-own-discord-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          discordIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          discordConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/discordIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/discordConnector/properties/id',
            label: 'Discord Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        discordConnector: {
          discordName: 'discord-connector',
        },
      },
      entities: {
        discordConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'identify webhook.incoming',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
              extraParams: 'permissions=2048',
              applicationPublicKey: '<% global.consts.random %>',
              interactionCallbackType: 5,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/discord-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
        discordIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-provider":"7.41.2","@fusebit-int/framework":"7.41.2","superagent":"^6.1.0"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Discord Integration\n//\n// This simple Discord integration allows you to call Discord APIs on behalf of the tenants of your\n// application. Fusebit manages the Discord authorization process and maps tenants of your application\n// to their Discord credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\nconst superagent = require('superagent');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'discordConnector';\n\n// The sample test endpoint of this integration returns the user object of the requester's user in the Discord account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Discord client pre-configured with credentials necessary to communicate with your tenant's Discord account.\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const { id, username, avatar } = await discordClient.user.get('users/@me');\n  ctx.body = {\n    id,\n    username,\n    avatar,\n  };\n});\n\n// List Guild channels\nrouter.get(\n  '/api/tenant/:tenantId/guilds/:guildId/channels',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    const guildChannels = await discordClient.bot.get(`guilds/${ctx.params.guildId}/channels`);\n    ctx.body = guildChannels;\n  }\n);\n\n// If your Discord application uses the webhook.incoming scope, you can use the created webhook with token and\n// post to the authorized channel.\nrouter.post(\n  '/api/tenant/:tenantId/webhook/message',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    await superagent.post(discordClient.fusebit.credentials.webhook.url).send({\n      content: ctx.req.body.message || 'Hello world from Fusebit!',\n    });\n    ctx.body = 'Message posted successfully';\n  }\n);\n\n// Create a new slash command in a specific Guild\nrouter.post(\n  '/api/tenant/:tenantId/:guild/slash-command',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordSdk = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    const command = {\n      name: 'ping',\n      type: 1,\n      description: 'Ping slash commmand example',\n    };\n\n    // Using the Discord Bot SDK requires an Application ID, Application Bot Token,\n    // and the 'applications.commands' scope in the Connector configuration.\n    if (!discordSdk.fusebit.credentials.applicationId) {\n      ctx.throw(404, 'Application Id not found');\n    }\n\n    const response = await discordSdk.bot.post(\n      `/v8/applications/${discordSdk.fusebit.credentials.applicationId}/guilds/${ctx.params.guild}/commands`,\n      command\n    );\n    ctx.body = response;\n  }\n);\n\n// Create a new global command. New global commands will be available in all guilds after 1 hour.\nrouter.post('/api/tenant/:tenantId/slash-command', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordSdk = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const command = {\n    name: 'ping',\n    type: 1,\n    description: 'Ping slash commmand example',\n  };\n\n  // Using the Discord Bot SDK requires an Application ID, Application Bot Token,\n  // and the 'applications.commands' scope in the Connector configuration.\n  const response = await discordSdk.bot.post(\n    `/v8/applications/${discordSdk.fusebit.credentials.applicationId}/commands`,\n    command\n  );\n  ctx.body = response;\n});\n\n// Respond to a Slash command\nintegration.event.on('/:componentName/webhook/:eventType', async (ctx) => {\n  const {\n    data: { data: event },\n  } = ctx.req.body;\n  console.log('received event', event);\n  const {\n    data: { application_id, token },\n  } = ctx.req.body;\n  /**\n   * You can use the following endpoints to edit your initial response or send followup messages:\n    PATCH /webhooks/<application_id>/<interaction_token>/messages/@original to edit your initial response to an Interaction\n    DELETE /webhooks/<application_id>/<interaction_token>/messages/@original to delete your initial response to an Interaction\n    POST /webhooks/<application_id>/<interaction_token> to send a new followup message\n    PATCH /webhooks/<application_id>/<interaction_token>/messages/<message_id> to edit a message sent with that token\n   */\n  await superagent.post(`https://discord.com/api/v8/webhooks/${application_id}/${token}`).send({\n    content: 'It works!',\n  });\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'discordConnector',
                skip: false,
                provider: '@fusebit-int/discord-provider',
                entityId: '<% global.entities.discordConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
      },
    },
  },
  {
    id: 'discord-slash-commands',
    name: 'Discord Slash Commands',
    smallIcon:
      '<svg width="75" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.3057 4.72499C58.5394 2.538 53.4283 0.926718 48.0842 0.00387122C47.9869 -0.0139394 47.8897 0.0305704 47.8396 0.119592C47.1822 1.28872 46.4541 2.81395 45.9442 4.01277C40.1964 3.15226 34.478 3.15226 28.848 4.01277C28.338 2.7873 27.5834 1.28872 26.9232 0.119592C26.873 0.0335405 26.7758 -0.0109692 26.6785 0.00387122C21.3374 0.923769 16.2262 2.53505 11.457 4.72499C11.4157 4.74279 11.3803 4.77249 11.3568 4.81104C1.66199 19.2949 -0.993816 33.4227 0.309035 47.3753C0.31493 47.4436 0.353249 47.5089 0.406307 47.5504C6.80266 52.2477 12.9986 55.0994 19.0795 56.9896C19.1768 57.0193 19.2799 56.9837 19.3419 56.9036C20.7803 54.9392 22.0626 52.868 23.162 50.6898C23.2268 50.5623 23.1649 50.4109 23.0323 50.3605C20.9985 49.589 19.0618 48.6483 17.1989 47.5801C17.0516 47.494 17.0398 47.2833 17.1753 47.1824C17.5673 46.8886 17.9595 46.583 18.3338 46.2744C18.4015 46.218 18.4959 46.2061 18.5755 46.2417C30.814 51.8294 44.0636 51.8294 56.1577 46.2417C56.2373 46.2032 56.3317 46.2151 56.4024 46.2714C56.7768 46.58 57.1688 46.8886 57.5638 47.1824C57.6993 47.2833 57.6905 47.494 57.5431 47.5801C55.6802 48.6691 53.7436 49.589 51.7068 50.3575C51.5742 50.408 51.5152 50.5623 51.5801 50.6898C52.7031 52.8649 53.9853 54.9362 55.3972 56.9006C55.4562 56.9837 55.5623 57.0193 55.6596 56.9896C61.77 55.0994 67.9659 52.2477 74.3623 47.5504C74.4183 47.5089 74.4537 47.4465 74.4596 47.3783C76.0188 31.2475 71.8479 17.2355 63.403 4.81399C63.3823 4.77249 63.347 4.74279 63.3057 4.72499ZM24.9896 38.8796C21.305 38.8796 18.2689 35.4969 18.2689 31.3425C18.2689 27.1881 21.2461 23.8053 24.9896 23.8053C28.7625 23.8053 31.7691 27.2178 31.7101 31.3425C31.7101 35.4969 28.733 38.8796 24.9896 38.8796ZM49.838 38.8796C46.1535 38.8796 43.1175 35.4969 43.1175 31.3425C43.1175 27.1881 46.0945 23.8053 49.838 23.8053C53.611 23.8053 56.6175 27.2178 56.5587 31.3425C56.5587 35.4969 53.611 38.8796 49.838 38.8796Z" fill="#5865F2"/>\n</svg>\n',
    largeIcon:
      '<svg width="75" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.3057 4.72499C58.5394 2.538 53.4283 0.926718 48.0842 0.00387122C47.9869 -0.0139394 47.8897 0.0305704 47.8396 0.119592C47.1822 1.28872 46.4541 2.81395 45.9442 4.01277C40.1964 3.15226 34.478 3.15226 28.848 4.01277C28.338 2.7873 27.5834 1.28872 26.9232 0.119592C26.873 0.0335405 26.7758 -0.0109692 26.6785 0.00387122C21.3374 0.923769 16.2262 2.53505 11.457 4.72499C11.4157 4.74279 11.3803 4.77249 11.3568 4.81104C1.66199 19.2949 -0.993816 33.4227 0.309035 47.3753C0.31493 47.4436 0.353249 47.5089 0.406307 47.5504C6.80266 52.2477 12.9986 55.0994 19.0795 56.9896C19.1768 57.0193 19.2799 56.9837 19.3419 56.9036C20.7803 54.9392 22.0626 52.868 23.162 50.6898C23.2268 50.5623 23.1649 50.4109 23.0323 50.3605C20.9985 49.589 19.0618 48.6483 17.1989 47.5801C17.0516 47.494 17.0398 47.2833 17.1753 47.1824C17.5673 46.8886 17.9595 46.583 18.3338 46.2744C18.4015 46.218 18.4959 46.2061 18.5755 46.2417C30.814 51.8294 44.0636 51.8294 56.1577 46.2417C56.2373 46.2032 56.3317 46.2151 56.4024 46.2714C56.7768 46.58 57.1688 46.8886 57.5638 47.1824C57.6993 47.2833 57.6905 47.494 57.5431 47.5801C55.6802 48.6691 53.7436 49.589 51.7068 50.3575C51.5742 50.408 51.5152 50.5623 51.5801 50.6898C52.7031 52.8649 53.9853 54.9362 55.3972 56.9006C55.4562 56.9837 55.5623 57.0193 55.6596 56.9896C61.77 55.0994 67.9659 52.2477 74.3623 47.5504C74.4183 47.5089 74.4537 47.4465 74.4596 47.3783C76.0188 31.2475 71.8479 17.2355 63.403 4.81399C63.3823 4.77249 63.347 4.74279 63.3057 4.72499ZM24.9896 38.8796C21.305 38.8796 18.2689 35.4969 18.2689 31.3425C18.2689 27.1881 21.2461 23.8053 24.9896 23.8053C28.7625 23.8053 31.7691 27.2178 31.7101 31.3425C31.7101 35.4969 28.733 38.8796 24.9896 38.8796ZM49.838 38.8796C46.1535 38.8796 43.1175 35.4969 43.1175 31.3425C43.1175 27.1881 46.0945 23.8053 49.838 23.8053C53.611 23.8053 56.6175 27.2178 56.5587 31.3425C56.5587 35.4969 53.611 38.8796 49.838 38.8796Z" fill="#5865F2"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'Use this integration template to register and handle Slash Commands for your Discord Bot!\n\n[Learn more](https://developer.fusebit.io/docs/discord-slash-commands)!\n',
    tags: {
      catalog: 'Messaging,Dev Tools',
    },
    resources: {
      configureAppDocUrl:
        'https://developer.fusebit.io/docs/discord-slash-commands#creating-your-own-discord-slash-commands-app',
      sampleConfig: {
        isEnabled: false,
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          'discord-slash-commandsIntegration': {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          discordConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/discord-slash-commandsIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/discordConnector/properties/id',
            label: 'Discord Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        discordConnector: {
          discordName: 'discord-connector',
        },
      },
      entities: {
        discordConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'identify webhook.incoming',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
              extraParams: 'permissions=2048',
              applicationPublicKey: '<% global.consts.random %>',
              interactionCallbackType: 5,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/discord-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
        'discord-slash-commandsIntegration': {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-slash-commands-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-provider":"7.41.2","@fusebit-int/framework":"7.41.2","superagent":"^6.1.0"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\nconst superagent = require('superagent');\nconst integration = new Integration();\nconst router = integration.router;\nconst connectorName = 'discordConnector';\n\n// Test Endpoint to demonstrate how to connect to your Discord App\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  await superagent.post(discordClient.fusebit.credentials.webhook.url).send({\n    content: `Hello from Fusebit!`,\n  });\n\n  ctx.body = 'Message posted successfully to Discord!';\n});\n\n// Configure a new Slash Command for the Discord Bot\n// Learn more: https://discord.com/developers/docs/interactions/application-commands#slash-commands\nconst configureSlashCommand = () => {\n  const command = {\n    name: 'command',\n    description: 'Command that gets triggered',\n    type: 1,\n    options: [\n      {\n        name: 'parameterOne',\n        description: 'First parameter of the Command',\n        type: 3,\n        required: true,\n      },\n      {\n        name: 'parameterTwo',\n        description: 'Second parameter of the Command',\n        type: 3,\n        required: true,\n      },\n    ],\n  };\n  return command;\n};\n\n// Register a new Slash Command in a specific Guild\n// How to Retrieve your Guild ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-\nrouter.post(\n  '/api/tenant/:tenantId/:guild/slash-command',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    const command = configureSlashCommand();\n\n    // Learn more about registering commands\n    // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n    const response = await discordClient.bot.post(\n      `/v8/applications/${discordClient.fusebit.credentials.applicationId}/guilds/${ctx.params.guild}/commands`,\n      command\n    );\n    ctx.body = response;\n  }\n);\n\n// Register a new Slash Command globally\nrouter.post('/api/tenant/:tenantId/slash-command', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const command = configureSlashCommand();\n\n  // Learn more about registering commands\n  // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n  const response = await discordClient.bot.post(\n    `/v8/applications/${discordClient.fusebit.credentials.applicationId}/commands`,\n    command\n  );\n  ctx.body = response;\n});\n\n// Listen to and Respond to a Slash Command\nintegration.event.on('/:componentName/webhook/:eventType', async (ctx) => {\n  const {\n    data: { data: event, application_id, token },\n  } = ctx.req.body;\n\n  // Retrieve the parameters and handle them\n  const [parameterOne, parameterTwo] = event.options;\n  const responseMessage = `You sent me ${parameterOne.value} and ${parameterTwo.value} as your parameters!`;\n\n  // Send back a message to respond\n  // Read more about interactions here: https://discord.com/developers/docs/interactions/receiving-and-responding\n  await superagent\n    .post(`https://discord.com/api/v8/webhooks/${application_id}/${token}`)\n    .send({ content: responseMessage });\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'discordConnector',
                skip: false,
                provider: '@fusebit-int/discord-provider',
                entityId: '<% global.entities.discordConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord-slash-commands',
          },
        },
      },
    },
  },
  {
    id: 'e2e-hubspot-slack-bot',
    name: 'HubSpot Slack Bot',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 13.107 13.099" preserveAspectRatio="xMidYMid"><path d="M12.027 6.222a3.33 3.33 0 0 0-1.209-1.201c-.382-.222-.777-.363-1.223-.424V3a1.17 1.17 0 0 0 .722-1.097 1.2 1.2 0 0 0-1.2-1.206 1.21 1.21 0 0 0-1.21 1.206c0 .49.26.908.707 1.097v1.588a3.49 3.49 0 0 0-1.064.334L3.275 1.685c.03-.113.056-.23.056-.353 0-.738-.598-1.336-1.336-1.336S.66.594.66 1.332s.598 1.336 1.336 1.336c.252 0 .485-.074.686-.195l.28.212L6.797 5.45c-.203.186-.392.398-.543.636-.306.485-.493 1.018-.493 1.6v.12a3.35 3.35 0 0 0 .21 1.156c.116.316.286.604.497.864l-1.274 1.277c-.377-.14-.8-.047-1.085.238-.194.193-.303.456-.302.73s.108.535.303.73.456.303.73.303.537-.108.73-.303.303-.456.302-.73a1.03 1.03 0 0 0-.048-.31l1.316-1.316c.18.125.375.23.585.32a3.42 3.42 0 0 0 1.369.288h.09c.552 0 1.073-.13 1.562-.395a3.23 3.23 0 0 0 1.224-1.153c.307-.49.475-1.033.475-1.63v-.03c0-.587-.136-1.128-.42-1.624zM10.42 8.984c-.357.397-.768.642-1.232.642H9.1c-.265 0-.525-.073-.778-.207a1.8 1.8 0 0 1-.682-.621c-.184-.26-.284-.544-.284-.845v-.09c0-.296.057-.577.2-.842.153-.3.36-.515.635-.694s.558-.265.88-.265h.03c.29 0 .567.057.827.19a1.75 1.75 0 0 1 .65.591 1.88 1.88 0 0 1 .291.83l.007.187c0 .407-.156.784-.467 1.126z" fill="#f8761f"/></svg>',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 585.44 164.79"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#33475b;}.cls-4{clip-path:url(#clip-path-3);}.cls-5{fill:#ff7a59;}</style><clipPath id="clip-path" transform="translate(0 -1.17)"><rect class="cls-1" width="585.44" height="165.96"/></clipPath><clipPath id="clip-path-3" transform="translate(0 -1.17)"><rect class="cls-1" x="375.89" y="0.13" width="156.42" height="163.35"/></clipPath></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Outlines_-_Full_Color" data-name="Outlines - Full Color"><g class="cls-2"><polygon class="cls-3" points="63.4 26.3 63.4 73.11 20.41 73.11 20.41 26.3 0 26.3 0 138.04 20.41 138.04 20.41 92.75 63.4 92.75 63.4 138.04 83.81 138.04 83.81 26.3 63.4 26.3"/><g class="cls-2"><path class="cls-3" d="M149.13,103.09a16.88,16.88,0,0,1-33.77,0V55.23H96v47.86a36.21,36.21,0,0,0,72.42,0V55.23H149.13Z" transform="translate(0 -1.17)"/><path class="cls-3" d="M292.57,60.16c0-9.81,6.49-12.92,13.6-12.92,5.73,0,13.3,4.36,18.25,9.65L337.1,41.95c-6.33-8.56-19.17-14.48-29.68-14.48-21,0-36.19,12.3-36.19,32.69,0,37.83,46.24,25.83,46.24,47,0,6.53-6.34,12.3-13.6,12.3-11.45,0-15.16-5.6-20.42-11.52l-14.07,14.63c9,11.05,20.1,16.66,33.4,16.66,19.95,0,36-12.45,36-31.91,0-42-46.24-28.95-46.24-47.16" transform="translate(0 -1.17)"/><path class="cls-3" d="M578.63,121.36c-11.44,0-14.69-4.95-14.69-12.53V75.28h17.78v-17H563.94V35.85l-19.63,8.81V113c0,17.48,12.06,26.29,28.6,26.29a39.62,39.62,0,0,0,7.74-.62l4.79-17.63c-2.16.15-4.64.3-6.81.3" transform="translate(0 -1.17)"/><path class="cls-3" d="M222.82,55.79c-9.59,0-16.28,2.78-22.75,9.13V28.14H180.68V96.31c0,25.52,18.45,43,39.18,43,23,0,43.23-17.79,43.23-41.75,0-23.66-18.62-41.76-40.27-41.76m-.12,64a22,22,0,1,1,22-22,22,22,0,0,1-22,22" transform="translate(0 -1.17)"/><path class="cls-3" d="M433.36,96.54c0-24-20.19-41.75-43.23-41.75-20.73,0-39.18,17.48-39.18,43V166h19.39V129.17c6.46,6.34,13.16,9.13,22.74,9.13,21.65,0,40.27-18.09,40.27-41.76M415,96.3a22,22,0,1,1-22-22,22,22,0,0,1,22,22" transform="translate(0 -1.17)"/></g><g class="cls-4"><path class="cls-5" d="M495.81,54.48V35.2a14.84,14.84,0,0,0,8.56-13.38v-.45A14.87,14.87,0,0,0,489.54,6.54h-.45a14.87,14.87,0,0,0-14.83,14.83v.45a14.84,14.84,0,0,0,8.56,13.38V54.48a42.06,42.06,0,0,0-20,8.8L409.88,22.09a16.55,16.55,0,0,0,.6-4.17,16.73,16.73,0,1,0-16.75,16.71A16.55,16.55,0,0,0,402,32.38L454.05,72.9a42.18,42.18,0,0,0,.65,47.56L438.86,136.3a13.61,13.61,0,0,0-3.93-.64,13.75,13.75,0,1,0,13.75,13.75,13.53,13.53,0,0,0-.64-3.93l15.67-15.67a42.25,42.25,0,1,0,32.1-75.33m-6.49,63.42A21.68,21.68,0,1,1,511,96.22a21.68,21.68,0,0,1-21.68,21.68" transform="translate(0 -1.17)"/></g></g></g></g></svg>',
    version: '5.2.0',
    description:
      'This Integration lets you write a custom HubSpot bot for Slack, which looks up a Contact by their \nemail address, and allows you to configure what fields are returned and how the message is formatted \nin Slack.\n\n[Learn more](https://fusebit.io/blog/slack-bot-hubspot-integration/)!\n',
    tags: {
      catalog: 'Messaging,CRM',
    },
    resources: {
      configureAppDocUrl: 'https://fusebit.io/blog/slack-bot-hubspot-integration/',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          hubspotSlackBotIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          slackConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          hubspotConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/hubspotSlackBotIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/slackConnector/properties/id',
            label: 'Slack Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
          {
            type: 'Control',
            scope: '#/properties/hubspotConnector/properties/id',
            label: 'HubSpot Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        slackConnector: {
          slackName: 'slack-connector',
        },
        hubspotConnector: {
          hubspotName: 'hubspot-connector',
        },
      },
      entities: {
        hubspotSlackBotIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-e2e-hubspot-slack-bot-integration","version":"7.41.2","scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/hubspot-provider":"7.41.2","@fusebit-int/slack-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "const { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\nconst router = integration.router;\n\nconst slackConnectorName = 'slackConnector';\nconst hubspotConnectorName = 'hubspotConnector';\n\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const slackClient = await integration.tenant.getSdkByTenant(ctx, slackConnectorName, ctx.params.tenantId);\n  const hubspotClient = await integration.tenant.getSdkByTenant(ctx, hubspotConnectorName, ctx.params.tenantId);\n\n  const contact = await lookupAndPost(\n    ctx.req.body.email,\n    slackClient.fusebit.credentials.authed_user.id,\n    slackClient,\n    hubspotClient\n  );\n\n  ctx.body = contact;\n});\n\nintegration.event.on('/:componentName/webhook/event_callback', async (ctx) => {\n  const slackClient = await integration.service.getSdk(ctx, slackConnectorName, ctx.req.body.installIds[0]);\n  const hubspotClient = await integration.service.getSdk(ctx, hubspotConnectorName, ctx.req.body.installIds[0]);\n\n  // Parsing for \"lookup <mailto:contact@fusebit.io|contact@fusebit.io>\"\n  const regex = new RegExp('(lookup.*<mailto:)([a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9]+)', 'g');\n  const result = regex.exec(ctx.req.body.data.event.text);\n  if (result) {\n    await lookupAndPost(result[2], ctx.req.body.data.event.channel, slackClient, hubspotClient);\n  }\n});\n\n// Looks up a HubSpot Contact by the email address specified, and posts a message\n// to Slack with the details of that contact\nasync function lookupAndPost(email, slackChannel, slackClient, hubSpotClient) {\n  const filter = { propertyName: 'email', operator: 'EQ', value: email };\n  const sorts = JSON.stringify({ propertyName: 'createdate', direction: 'DESCENDING' });\n  const properties = [\n    'createdate',\n    'firstname',\n    'lastname',\n    'email',\n    'website',\n    'city',\n    'country',\n    'company',\n    'jobtitle',\n  ];\n  const limit = 1;\n  const after = 0;\n\n  const result = await hubSpotClient.crm.contacts.searchApi.doSearch({\n    filterGroups: [{ filters: [filter] }],\n    sorts: [sorts],\n    email,\n    properties,\n    limit,\n    after,\n  });\n  const contact = (result.body.results[0] || {}).properties;\n\n  if (contact) {\n    slackClient.chat.postMessage({\n      text: `\n      :slightly_smiling_face: Name: ${contact.firstname} ${contact.lastname}\n      :email: <mailto:${contact.email}|Email:> ${contact.email}\n      :date: Date created: ${contact.createdate}\n      :earth_americas: Location: ${contact.city}, (${contact.country})\n      :computer: Job title: ${contact.jobtitle}\n      :100: Company: ${contact.company}\n      :link: Website: ${contact.website || 'not found'}\n    `,\n      channel: slackChannel,\n    });\n  } else {\n    slackClient.chat.postMessage({ text: 'Contact not found', channel: slackChannel });\n  }\n  console.log('contact', contact);\n}\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'slackConnector',
                skip: false,
                provider: '@fusebit-int/slack-provider',
                entityId: '<% global.entities.slackConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
              {
                name: 'hubspotConnector',
                skip: false,
                provider: '@fusebit-int/hubspot-provider',
                entityId: '<% global.entities.hubspotConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Slack + HubSpot',
          },
        },
        hubspotConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'contacts',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-hubspot-crm-contacts-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/hubspot-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/hubspot-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'HubSpot',
          },
        },
        slackConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'chat:write users:read channels:read channels:join chat:write.public',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-slack-bot-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/slack-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/slack-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Slack',
          },
        },
      },
    },
  },
  {
    id: 'e2e-linear-discord-bot',
    name: 'Linear Discord Bot',
    smallIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    largeIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    version: '5.2.0',
    description:
      'This Integration lets you write a custom Discord bot for Linear which uses Slash Commands support to create new issues in your Linear project.\n\n[Learn more](https://developer.fusebit.io/docs/e2e-linear-discord-bot)!\n',
    tags: {
      catalog: 'Project Management, Messaging',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/discord',
      sampleConfig: {
        isEnabled: false,
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          'e2e-linear-discord-botIntegration': {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          discordConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          linearConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/e2e-linear-discord-botIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/discordConnector/properties/id',
            label: 'Discord Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
          {
            type: 'Control',
            scope: '#/properties/linearConnector/properties/id',
            label: 'Linear Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        discordConnector: {
          discordName: 'discord-connector',
        },
        linearConnector: {
          linearName: 'linear-connector',
        },
      },
      entities: {
        'e2e-linear-discord-botIntegration': {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-e2e-linear-discord-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-provider":"7.41.2","@fusebit-int/framework":"7.41.2","@fusebit-int/linear-provider":"7.41.2","superagent":"^6.1.0"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\nconst superagent = require('superagent');\nconst integration = new Integration();\nconst router = integration.router;\nconst connectorName = 'discordConnector';\nconst linearConnector = 'linearConnector';\n\n// Test Endpoint to demonstrate how to connect to your Discord App\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const linearClient = await integration.tenant.getSdkByTenant(ctx, linearConnector, ctx.params.tenantId);\n\n  // List all the Linear issues assigned to me.\n  const me = await linearClient.viewer;\n  const myIssues = await me.assignedIssues();\n  const message = `You have ${myIssues.nodes.length} issues assigned to you`;\n  await superagent.post(discordClient.fusebit.credentials.webhook.url).send({\n    content: message,\n  });\n\n  ctx.body = 'Message posted successfully to Discord!';\n});\n\n// Configure a new Slash Command for the Discord Bot\n// Learn more: https://discord.com/developers/docs/interactions/application-commands#slash-commands\nconst configureSlashCommand = () => {\n  const command = {\n    name: 'linear',\n    description: 'Linear Commands',\n    options: [\n      {\n        name: 'issue',\n        description: 'Issue related commands',\n        type: 2,\n        options: [\n          {\n            name: 'create',\n            description: 'Create new Linear Issue',\n            type: 1,\n            options: [\n              {\n                name: 'title',\n                description: 'Issue Title',\n                type: 3,\n                required: true,\n              },\n            ],\n          },\n        ],\n      },\n    ],\n  };\n\n  return command;\n};\n\n// Register a new Slash Command in a specific Guild\n// How to Retrieve your Guild ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-\nrouter.post(\n  '/api/tenant/:tenantId/:guild/slash-command',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    const command = configureSlashCommand();\n\n    // Learn more about registering commands\n    // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n    const response = await discordClient.bot.post(\n      `/v8/applications/${discordClient.fusebit.credentials.applicationId}/guilds/${ctx.params.guild}/commands`,\n      command\n    );\n    ctx.body = response;\n  }\n);\n\n// Register a new Slash Command globally\nrouter.post('/api/tenant/:tenantId/slash-command', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const command = configureSlashCommand();\n\n  // Learn more about registering commands\n  // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n  const response = await discordClient.bot.post(\n    `/v8/applications/${discordClient.fusebit.credentials.applicationId}/commands`,\n    command\n  );\n  ctx.body = response;\n});\n\n// Handle the values from the Slash Command\nconst getSlashCommandValues = (event) => {\n  // The registered Slash Command is three levels deep\n  const [title] = event?.options[0]?.options[0]?.options;\n  return { issueTitle: title.value };\n};\n\n// Listen to and Respond to a Slash Command\nintegration.event.on('/:componentName/webhook/:eventType', async (ctx) => {\n  const linearClient = await integration.service.getSdk(ctx, linearConnector, ctx.req.body.installIds[0]);\n  const {\n    data: { data: event, application_id, token },\n  } = ctx.req.body;\n\n  // If there is no message object, then it's the top level message and we can send a followup message to get more information\n  // If there is a message object, then we can assume it's the followup message with more details\n  // Read more about interactions here: https://discord.com/developers/docs/interactions/receiving-and-responding\n\n  if (!ctx.req.body.data.hasOwnProperty('message')) {\n    const { issueTitle } = getSlashCommandValues(event);\n    const linearTeams = await linearClient.teams();\n\n    const teamNames = linearTeams.nodes.map((team) => ({\n      label: team.name,\n      value: JSON.stringify({\n        title: issueTitle,\n        teamid: team.id,\n      }),\n    }));\n\n    // Send back a drop-down list to select the service from\n    await superagent.post(`https://discord.com/api/v8/webhooks/${application_id}/${token}`).send({\n      content: 'What team is this issue for?',\n      components: [\n        {\n          type: 1,\n          components: [\n            {\n              type: 3,\n              custom_id: 'linear_teams',\n              options: teamNames,\n              placeholder: 'Choose one',\n              min_values: 1,\n              max_values: 1,\n            },\n          ],\n        },\n      ],\n    });\n  } else {\n    const values = JSON.parse(event.values);\n    let content = '';\n    try {\n      // Create Issue with the received details from the followup message\n      const data = { title: values.title, description: values.description, teamId: values.teamid };\n\n      const { _issue } = await linearClient.issueCreate(data);\n      const linearIssue = await linearClient.issue(_issue.id);\n\n      content = `Issue created: ${linearIssue.url}`;\n    } catch (e) {\n      content = `Incident creation failed, reason: ${e.message}`;\n    }\n\n    await superagent\n      .patch(`https://discord.com/api/v8/webhooks/${application_id}/${token}/messages/@original`)\n      .send({ content });\n  }\n});\n\nmodule.exports = integration;\n",
              'README.md':
                'This Integration lets you write a custom Discord bot for Linear which uses Slash Commands support to create new issues in your Linear project.\n\n[Learn more](https://developer.fusebit.io/docs/e2e-linear-discord-bot)!\n',
            },
            handler: './integration',
            components: [
              {
                name: 'discordConnector',
                skip: false,
                provider: '@fusebit-int/discord-provider',
                entityId: '<% global.entities.discordConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
              {
                name: 'linearConnector',
                skip: false,
                provider: '@fusebit-int/linear-provider',
                entityId: '<% global.entities.linearConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord + Linear',
          },
        },
        discordConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'identify webhook.incoming',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
              extraParams: 'permissions=2048',
              applicationPublicKey: '<% global.consts.random %>',
              interactionCallbackType: 5,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/discord-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
        linearConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read write',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linear-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linear-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/linear-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
      },
    },
  },
  {
    id: 'e2e-pagerduty-discord-bot',
    name: 'PagerDuty Discord Bot',
    smallIcon:
      '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 73.3671H30.6481V100H16V73.3671ZM71.168 4.88269C63.305 0.697527 57.8516 0 44.9791 0H16V60.6214H44.8523C56.3297 60.6214 64.8903 59.9239 72.4363 54.9144C80.6798 49.461 84.9283 40.3932 84.9283 29.9302C84.9283 18.5796 79.6652 9.51173 71.168 4.88269V4.88269ZM48.2131 47.9391H30.6481V12.9994L47.1985 12.8725C62.2904 12.6823 69.8364 18.0089 69.8364 30.0571C69.8364 42.993 60.5149 47.9391 48.2131 47.9391V47.9391Z" fill="#06AC38"/>\n</svg>\n\n',
    largeIcon:
      '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 73.3671H30.6481V100H16V73.3671ZM71.168 4.88269C63.305 0.697527 57.8516 0 44.9791 0H16V60.6214H44.8523C56.3297 60.6214 64.8903 59.9239 72.4363 54.9144C80.6798 49.461 84.9283 40.3932 84.9283 29.9302C84.9283 18.5796 79.6652 9.51173 71.168 4.88269V4.88269ZM48.2131 47.9391H30.6481V12.9994L47.1985 12.8725C62.2904 12.6823 69.8364 18.0089 69.8364 30.0571C69.8364 42.993 60.5149 47.9391 48.2131 47.9391V47.9391Z" fill="#06AC38"/>\n</svg>\n\n',
    version: '5.2.0',
    description:
      'This Integration lets you write a custom Discord bot for PagerDuty which uses Slash Commands support to trigger new incidents in PagerDuty.\n\n[Learn more](https://fusebit.io/blog/pagerduty-discord-integration/)!\n',
    tags: {
      catalog: 'Messaging,Dev Tools,Operations',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/discord',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          pagerdutyDiscordBotIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          discordConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          pagerdutyConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/pagerdutyDiscordBotIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/discordConnector/properties/id',
            label: 'Discord Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
          {
            type: 'Control',
            scope: '#/properties/pagerdutyConnector/properties/id',
            label: 'PagerDuty Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        discordConnector: {
          discordName: 'discord-connector',
        },
        pagerdutyConnector: {
          pagerdutyName: 'pagerduty-connector',
        },
      },
      entities: {
        pagerdutyDiscordBotIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-e2e-pagerduty-discord-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-provider":"7.41.2","@fusebit-int/framework":"7.41.2","@fusebit-int/pagerduty-provider":"7.41.2","superagent":"^6.1.0"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "const { Integration } = require('@fusebit-int/framework');\nconst superagent = require('superagent');\n\nconst integration = new Integration();\nconst router = integration.router;\n\nconst discordConnector = 'discordConnector';\nconst pagerDutyConnector = 'pagerdutyConnector';\n\n// Test Endpoint to demonstrate how to retrieve information from PagerDuty and send it to Discord\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const pagerdutyClient = await integration.tenant.getSdkByTenant(ctx, pagerDutyConnector, ctx.params.tenantId);\n  const discordClient = await integration.tenant.getSdkByTenant(ctx, discordConnector, ctx.params.tenantId);\n\n  const sinceDate = new Date();\n  const days = 7;\n  sinceDate.setDate(sinceDate.getDate() - days);\n\n  const incidents = await pagerdutyClient.get(`/incidents?statuses[]=triggered&since=${sinceDate}`);\n\n  await superagent.post(discordClient.fusebit.credentials.webhook.url).send({\n    content: `There have been ${incidents.resource.length} incidents triggered in the last ${days} days.`,\n  });\n\n  ctx.body = 'Message posted successfully to Discord!';\n});\n\n// Configure a new Slash Command for the Discord Bot\n// Learn more: https://discord.com/developers/docs/interactions/application-commands#slash-commands\nfunction slashCommandConfiguration() {\n  const command = {\n    name: 'pd',\n    description: 'PagerDuty Commands',\n    options: [\n      {\n        name: 'incident',\n        description: 'Incident related commands',\n        type: 2,\n        options: [\n          {\n            name: 'create',\n            description: 'Create new PD Incident',\n            type: 1,\n            options: [\n              {\n                name: 'title',\n                description: 'Incident Title',\n                type: 3,\n                required: true,\n              },\n              {\n                name: 'description',\n                description: 'Short Description of the Issue',\n                type: 3,\n                required: true,\n              },\n            ],\n          },\n        ],\n      },\n    ],\n  };\n\n  return command;\n}\n\n// Register a new Slash Command in a specific Guild\n// How to Retrieve your Guild ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-\nrouter.post(\n  '/api/tenant/:tenantId/:guild/slash-command',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    const discordSdk = await integration.tenant.getSdkByTenant(ctx, discordConnector, ctx.params.tenantId);\n    const command = slashCommandConfiguration();\n\n    // Learn more about registering commands\n    // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n    const response = await discordSdk.bot.post(\n      `/v8/applications/${discordSdk.fusebit.credentials.applicationId}/guilds/${ctx.params.guild}/commands`,\n      command\n    );\n    ctx.body = response;\n  }\n);\n\n// Register a new Slash Command globally\nrouter.post('/api/tenant/:tenantId/slash-command', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const discordSdk = await integration.tenant.getSdkByTenant(ctx, discordConnector, ctx.params.tenantId);\n  const command = slashCommandConfiguration();\n\n  // Learn more about registering commands\n  // https://discord.com/developers/docs/interactions/application-commands#registering-a-command\n  const response = await discordSdk.bot.post(\n    `/v8/applications/${discordSdk.fusebit.credentials.applicationId}/commands`,\n    command\n  );\n  ctx.body = response;\n});\n\n// Listen to and Respond to a Slash Command\nintegration.event.on('/:componentName/webhook/:eventType', async (ctx) => {\n  const pagerdutyClient = await integration.service.getSdk(ctx, pagerDutyConnector, ctx.req.body.installIds[0]);\n\n  const {\n    data: { data: event, application_id, token },\n  } = ctx.req.body;\n\n  // If there is no message object, then it's the top level message and we can send a followup message to get more information\n  // If there is a message object, then we can assume it's the followup message with more details\n  // Read more about interactions here: https://discord.com/developers/docs/interactions/receiving-and-responding\n\n  if (!ctx.req.body.data.hasOwnProperty('message')) {\n    const { incidentTitle, incidentDescription } = getSlashCommandValues(event);\n\n    // Get list of Services from PagerDuty\n    const pdServices = await pagerdutyClient.get('/services');\n    const serviceDetails = pdServices.data.services.map((service) => ({\n      label: service.name,\n      value: JSON.stringify({\n        title: incidentTitle,\n        description: incidentDescription,\n        serviceid: service.id,\n      }),\n    }));\n\n    // Send back a drop-down list to select the service from\n    await superagent.post(`https://discord.com/api/v8/webhooks/${application_id}/${token}`).send({\n      content: 'What service is this incident for?',\n      components: [\n        {\n          type: 1,\n          components: [\n            {\n              type: 3,\n              custom_id: 'pd_services',\n              options: serviceDetails,\n              placeholder: 'Choose one',\n              min_values: 1,\n              max_values: 1,\n            },\n          ],\n        },\n      ],\n    });\n  } else {\n    const values = JSON.parse(event.values);\n    let content = '';\n    try {\n      // Create Incident with the received details from the followup message\n      const createdIncident = await pagerdutyClient.post('/incidents', {\n        data: {\n          incident: {\n            type: 'incident',\n            title: values.title,\n            service: {\n              id: values.serviceid,\n              type: 'service',\n            },\n            body: {\n              type: 'incident_body',\n              details: values.description,\n            },\n          },\n        },\n      });\n      // Consider adding more details on the person who is on call and a link to the incident\n      content = `${createdIncident.data.incident.title} has been created!`;\n    } catch (e) {\n      content = `Incident creation failed, reason: ${e.message}`;\n    }\n\n    await superagent\n      .patch(`https://discord.com/api/v8/webhooks/${application_id}/${token}/messages/@original`)\n      .send({ content });\n  }\n});\n\n// Handle the values from the Slash Command\nfunction getSlashCommandValues(event) {\n  // The registered Slash Command is three levels deep\n  const [title, description] = event?.options[0]?.options[0]?.options;\n  return { incidentTitle: title.value, incidentDescription: description.value };\n}\n\nmodule.exports = integration;\n",
              'README.md':
                'This Integration lets you write a custom Discord bot for PagerDuty which uses Slash Commands support to trigger new incidents in PagerDuty.\n\n[Learn more](https://fusebit.io/blog/pagerduty-discord-integration/)!\n',
            },
            handler: './integration',
            components: [
              {
                name: 'discordConnector',
                skip: false,
                provider: '@fusebit-int/discord-provider',
                entityId: '<% global.entities.discordConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
              {
                name: 'pagerdutyConnector',
                skip: false,
                provider: '@fusebit-int/pagerduty-provider',
                entityId: '<% global.entities.pagerdutyConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord + PagerDuty',
          },
        },
        discordConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'identify webhook.incoming',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
              extraParams: 'permissions=2048',
              applicationPublicKey: '<% global.consts.random %>',
              interactionCallbackType: 5,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-discord-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/discord-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
        pagerdutyConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: '',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-pagerduty-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/pagerduty-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/pagerduty-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'PagerDuty',
          },
        },
      },
    },
  },
  {
    id: 'githubapp',
    name: 'GitHub App',
    smallIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29 0C12.9775 0 0 13.0763 0 29.2209C0 42.1511 8.30125 53.0724 19.8287 56.9442C21.2787 57.1999 21.8225 56.3232 21.8225 55.5562C21.8225 54.8622 21.7863 52.561 21.7863 50.1138C14.5 51.4653 12.615 48.324 12.035 46.6803C11.7087 45.8402 10.295 43.2469 9.0625 42.5529C8.0475 42.005 6.5975 40.6535 9.02625 40.617C11.31 40.5805 12.9413 42.7355 13.485 43.6122C16.095 48.0318 20.2638 46.7899 21.9313 46.0229C22.185 44.1235 22.9462 42.8451 23.78 42.1146C17.3275 41.3841 10.585 38.8638 10.585 27.6868C10.585 24.509 11.7088 21.8791 13.5575 19.8337C13.2675 19.1031 12.2525 16.108 13.8475 12.0901C13.8475 12.0901 16.2763 11.3231 21.8225 15.0853C24.1425 14.4278 26.6075 14.0991 29.0725 14.0991C31.5375 14.0991 34.0025 14.4278 36.3225 15.0853C41.8688 11.2866 44.2975 12.0901 44.2975 12.0901C45.8925 16.108 44.8775 19.1031 44.5875 19.8337C46.4363 21.8791 47.56 24.4725 47.56 27.6868C47.56 38.9003 40.7813 41.3841 34.3288 42.1146C35.38 43.0277 36.2863 44.781 36.2863 47.5204C36.2863 51.4287 36.25 54.57 36.25 55.5562C36.25 56.3232 36.7938 57.2364 38.2438 56.9442C49.6988 53.0724 58 42.1146 58 29.2209C58 13.0763 45.0225 0 29 0Z" fill="#03032D"/>\n</svg>\n\n',
    largeIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29 0C12.9775 0 0 13.0763 0 29.2209C0 42.1511 8.30125 53.0724 19.8287 56.9442C21.2787 57.1999 21.8225 56.3232 21.8225 55.5562C21.8225 54.8622 21.7863 52.561 21.7863 50.1138C14.5 51.4653 12.615 48.324 12.035 46.6803C11.7087 45.8402 10.295 43.2469 9.0625 42.5529C8.0475 42.005 6.5975 40.6535 9.02625 40.617C11.31 40.5805 12.9413 42.7355 13.485 43.6122C16.095 48.0318 20.2638 46.7899 21.9313 46.0229C22.185 44.1235 22.9462 42.8451 23.78 42.1146C17.3275 41.3841 10.585 38.8638 10.585 27.6868C10.585 24.509 11.7088 21.8791 13.5575 19.8337C13.2675 19.1031 12.2525 16.108 13.8475 12.0901C13.8475 12.0901 16.2763 11.3231 21.8225 15.0853C24.1425 14.4278 26.6075 14.0991 29.0725 14.0991C31.5375 14.0991 34.0025 14.4278 36.3225 15.0853C41.8688 11.2866 44.2975 12.0901 44.2975 12.0901C45.8925 16.108 44.8775 19.1031 44.5875 19.8337C46.4363 21.8791 47.56 24.4725 47.56 27.6868C47.56 38.9003 40.7813 41.3841 34.3288 42.1146C35.38 43.0277 36.2863 44.781 36.2863 47.5204C36.2863 51.4287 36.25 54.57 36.25 55.5562C36.25 56.3232 36.7938 57.2364 38.2438 56.9442C49.6988 53.0724 58 42.1146 58 29.2209C58 13.0763 45.0225 0 29 0Z" fill="#03032D"/>\n</svg>\n\n',
    version: '5.2.0',
    description:
      "Integrating with GitHub is easy with Fusebit!\n\nA GitHub App uses its own identity when installed on an organization or on repositories within an organization.\n\nThis Integration enables you to connect to GitHub's source control, issue tracking, and CI/CD to build awesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull requests, and team management functionality, among others.\n\n[Learn more](https://developer.fusebit.io/docs/githubapp)!\n",
    tags: {
      catalog: 'Dev Tools,Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/githubapp#creating-your-own-githubapp',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          githubappIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          githubappConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/githubappIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/githubappConnector/properties/id',
            label: 'GitHub Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        githubappConnector: {
          githubappName: 'githubapp-connector',
        },
      },
      entities: {
        githubappConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'user public_repo',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-githubapp-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/githubapp-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/githubapp-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHub',
          },
        },
        githubappIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-githubapp-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/githubapp-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit GitHub Integration\n//\n// This simple GitHub integration allows you to call GitHub APIs on behalf of the tenants of your\n// application. Fusebit manages the GitHub authorization process and maps tenants of your application\n// to their GitHub credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'githubappConnector';\n\n// The sample test endpoint of this integration gets the user account details in the GitHub account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', async (ctx) => {\n  const githubapp = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  // Use the authorizing user credentials\n  const userClient = githubapp.user();\n  const {\n    data: { login, public_repos, followers },\n  } = await userClient.rest.users.getAuthenticated();\n  ctx.body = `Your GitHub login is ${login} with ${public_repos} public repositories and ${followers} followers`;\n});\n\n// List repository issues\nrouter.get('/api/tenant/:tenantId/:org/:repo/issues', async (ctx) => {\n  const githubapp = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const userClient = githubapp.user();\n  const iterator = userClient.paginate.iterator(githubapp.rest.issues.listForRepo, {\n    owner: ctx.params.org,\n    repo: ctx.params.repo,\n    per_page: 100,\n  });\n\n  // iterate through each response\n  const issuesList = [];\n  for await (const { data: issues } of iterator) {\n    for (const issue of issues) {\n      issuesList.push(issue);\n    }\n  }\n  ctx.body = issuesList;\n});\n\n// Create a new GitHub issue authenticated as the authorizing user\nrouter.post('/api/tenant/:tenantId/:owner/:repo/issue', async (ctx) => {\n  const githubapp = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const userClient = githubapp.user();\n  const { data } = await userClient.rest.issues.create({\n    owner: ctx.params.owner,\n    repo: ctx.params.repo,\n    title: 'Hello world from Fusebit',\n  });\n  ctx.body = data;\n});\n\n// Create a new GitHub issue authenticated as a GitHub App Installation\nrouter.post('/api/tenant/:tenantId/app/:owner/:repo/issue', async (ctx) => {\n  const githubapp = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  // Ensure you have configured your GitHub Connector properly in order to authenticate as a GitHub Application.\n  // Setup properly the Client Secret and App ID from your GitHub app in your Connector configuration.\n  // See our developer docs for more information https://developer.fusebit.io/docs/githubapp\n  const appClient = await githubapp.app();\n  const { data: installations } = await appClient.rest.apps.listInstallations();\n\n  if (!installations.length) {\n    ctx.throw(404, 'This application has no installations');\n  }\n\n  const installation = installations.find((installation) => installation.account.login === ctx.params.owner);\n\n  if (!installation) {\n    ctx.throw(404, `Installation not found for account ${ctx.params.owner}`);\n  }\n\n  // Now you have your installation, you can request an access token to the specific installation\n  // We perform all that work for you and you get back an authenticated SDK as a GitHub installation.\n  const installationClient = await appClient.installation(installation.id);\n\n  const { data } = await installationClient.rest.issues.create({\n    owner: ctx.params.owner,\n    repo: ctx.params.repo,\n    title: 'Hello world from Fusebit',\n  });\n  ctx.body = data;\n});\n\n// Subscribe to events\nintegration.event.on('/:componentName/webhook/issue_comment.created', async (ctx) => {\n  const {\n    data: { comment },\n  } = ctx.req.body.data;\n  console.log('comment', comment);\n});\n\nintegration.event.on('/:componentName/webhook/issues.reopened', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('issues.reopened', data);\n});\n\nintegration.event.on('/:componentName/webhook/issues.closed', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('issues.closed', data);\n});\n\n// Listen all issues related webhooks\nintegration.event.on('/:componentName/webhook/(issues.*)', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('captured webhook', data);\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'githubappConnector',
                skip: false,
                provider: '@fusebit-int/githubapp-provider',
                entityId: '<% global.entities.githubappConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHub',
          },
        },
      },
    },
  },
  {
    id: 'githuboauth',
    name: 'GitHub OAuth App',
    smallIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29 0C12.9775 0 0 13.0763 0 29.2209C0 42.1511 8.30125 53.0724 19.8287 56.9442C21.2787 57.1999 21.8225 56.3232 21.8225 55.5562C21.8225 54.8622 21.7863 52.561 21.7863 50.1138C14.5 51.4653 12.615 48.324 12.035 46.6803C11.7087 45.8402 10.295 43.2469 9.0625 42.5529C8.0475 42.005 6.5975 40.6535 9.02625 40.617C11.31 40.5805 12.9413 42.7355 13.485 43.6122C16.095 48.0318 20.2638 46.7899 21.9313 46.0229C22.185 44.1235 22.9462 42.8451 23.78 42.1146C17.3275 41.3841 10.585 38.8638 10.585 27.6868C10.585 24.509 11.7088 21.8791 13.5575 19.8337C13.2675 19.1031 12.2525 16.108 13.8475 12.0901C13.8475 12.0901 16.2763 11.3231 21.8225 15.0853C24.1425 14.4278 26.6075 14.0991 29.0725 14.0991C31.5375 14.0991 34.0025 14.4278 36.3225 15.0853C41.8688 11.2866 44.2975 12.0901 44.2975 12.0901C45.8925 16.108 44.8775 19.1031 44.5875 19.8337C46.4363 21.8791 47.56 24.4725 47.56 27.6868C47.56 38.9003 40.7813 41.3841 34.3288 42.1146C35.38 43.0277 36.2863 44.781 36.2863 47.5204C36.2863 51.4287 36.25 54.57 36.25 55.5562C36.25 56.3232 36.7938 57.2364 38.2438 56.9442C49.6988 53.0724 58 42.1146 58 29.2209C58 13.0763 45.0225 0 29 0Z" fill="#03032D"/>\n</svg>\n\n',
    largeIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29 0C12.9775 0 0 13.0763 0 29.2209C0 42.1511 8.30125 53.0724 19.8287 56.9442C21.2787 57.1999 21.8225 56.3232 21.8225 55.5562C21.8225 54.8622 21.7863 52.561 21.7863 50.1138C14.5 51.4653 12.615 48.324 12.035 46.6803C11.7087 45.8402 10.295 43.2469 9.0625 42.5529C8.0475 42.005 6.5975 40.6535 9.02625 40.617C11.31 40.5805 12.9413 42.7355 13.485 43.6122C16.095 48.0318 20.2638 46.7899 21.9313 46.0229C22.185 44.1235 22.9462 42.8451 23.78 42.1146C17.3275 41.3841 10.585 38.8638 10.585 27.6868C10.585 24.509 11.7088 21.8791 13.5575 19.8337C13.2675 19.1031 12.2525 16.108 13.8475 12.0901C13.8475 12.0901 16.2763 11.3231 21.8225 15.0853C24.1425 14.4278 26.6075 14.0991 29.0725 14.0991C31.5375 14.0991 34.0025 14.4278 36.3225 15.0853C41.8688 11.2866 44.2975 12.0901 44.2975 12.0901C45.8925 16.108 44.8775 19.1031 44.5875 19.8337C46.4363 21.8791 47.56 24.4725 47.56 27.6868C47.56 38.9003 40.7813 41.3841 34.3288 42.1146C35.38 43.0277 36.2863 44.781 36.2863 47.5204C36.2863 51.4287 36.25 54.57 36.25 55.5562C36.25 56.3232 36.7938 57.2364 38.2438 56.9442C49.6988 53.0724 58 42.1146 58 29.2209C58 13.0763 45.0225 0 29 0Z" fill="#03032D"/>\n</svg>\n\n',
    version: '5.2.0',
    description:
      "Integrating with GitHub OAuth App is easy with Fusebit!\n\nAn OAuth App acts as a GitHub user.\n\nThis Integration enables you to connect to GitHub's source control, issue tracking, and CI/CD to build awesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull requests, and team management functionality, among others.\n\n[Learn more](https://developer.fusebit.io/docs/githuboauth)!\n",
    tags: {
      catalog: 'Dev Tools,Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/githuboauth#creating-your-own-githuboauth',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          githuboauthIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          githuboauthConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/githuboauthIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/githuboauthConnector/properties/id',
            label: 'GitHubOAuth Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        githuboauthConnector: {
          githuboauthName: 'githuboauth-connector',
        },
      },
      entities: {
        githuboauthConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'user public_repo',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-githuboauth-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/githuboauth-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/githuboauth-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHubOAuth',
          },
        },
        githuboauthIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-github-oauth-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/githuboauth-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit GitHub OAuth Application Integration\n//\n// This simple GitHub OAuth Application integration allows you to call GitHub OAuth Application APIs on behalf of the tenants of your\n// application. Fusebit manages the GitHub OAuth Application authorization process and maps tenants of your application\n// to their GitHub OAuth Application credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from witin your application.\nconst router = integration.router;\n\nconst connectorName = 'githubOAuthConnector';\n\n// The sample test endpoint of this integration gets the user account details in the GitHub account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', async (ctx) => {\n  const github = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const { data } = await github.rest.users.getAuthenticated();\n  ctx.body = data;\n});\n\n// List repository issues\nrouter.get('/api/tenant/:tenantId/:org/:repo/issues', async (ctx) => {\n  const github = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const iterator = github.paginate.iterator(github.rest.issues.listForRepo, {\n    owner: ctx.params.org,\n    repo: ctx.params.repo,\n    per_page: 100,\n  });\n\n  // iterate through each response\n  const issuesList = [];\n  for await (const { data: issues } of iterator) {\n    for (const issue of issues) {\n      issuesList.push(issue);\n    }\n  }\n  ctx.body = issuesList;\n});\n\n// Create a new GitHub issue\nrouter.post('/api/tenant/:tenantId/:owner/:repo/issue', async (ctx) => {\n  const github = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const { data } = await github.rest.issues.create({\n    owner: ctx.params.owner,\n    repo: ctx.params.repo,\n    title: 'Hello world from Fusebit',\n  });\n  ctx.body = data;\n});\n\n// Subscribe to events\nintegration.event.on('/:componentName/webhook/issue_comment.created', async (ctx) => {\n  const {\n    data: { comment },\n  } = ctx.req.body.data;\n  console.log('comment', comment);\n});\n\nintegration.event.on('/:componentName/webhook/issues.reopened', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('issues.reopened', data);\n});\n\nintegration.event.on('/:componentName/webhook/issues.closed', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('issues.closed', data);\n});\n\n// Listen all issues related webhooks\nintegration.event.on('/:componentName/webhook/(issues.*)', async (ctx) => {\n  const { data } = ctx.req.body.data;\n  console.log('captured webhook', data);\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'githubOAuthConnector',
                skip: false,
                provider: '@fusebit-int/githuboauth-provider',
                entityId: '<% global.entities.githuboauthConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHubOAuth',
          },
        },
      },
    },
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    smallIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M30.941 57L42.3421 21.9308H19.5566L30.941 57Z" fill="#E24329"/>\n<path d="M3.58755 21.9309L0.115669 32.5854C-0.198507 33.5529 0.140781 34.6208 0.970029 35.2238L30.9412 57L3.58755 21.9309Z" fill="#FCA326"/>\n<path d="M3.58752 21.9309H19.5566L12.684 0.810414C12.3322 -0.270138 10.7993 -0.270138 10.4349 0.810414L3.58752 21.9309Z" fill="#E24329"/>\n<path d="M58.3113 21.9309L61.7708 32.5854C62.0849 33.5529 61.7456 34.6208 60.9164 35.2238L30.941 57L58.3113 21.9309Z" fill="#FCA326"/>\n<path d="M58.3112 21.9309H42.3422L49.2022 0.810414C49.5539 -0.270138 51.0868 -0.270138 51.4512 0.810414L58.3112 21.9309Z" fill="#E24329"/>\n<path d="M30.941 57L42.3421 21.9309H58.3113L30.941 57Z" fill="#FC6D26"/>\n<path d="M30.941 57L3.58752 21.9309H19.5566L30.941 57Z" fill="#FC6D26"/>\n</svg>',
    largeIcon:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 1266 559" style="enable-background:new 0 0 1266 559;" xml:space="preserve">\n<style type="text/css">\n.st0{fill:#FAFAFA;}\n.st1{fill:#F0F0F0;}\n.st2{fill:#FFFFFF;}\n.st3{fill:#E24329;}\n.st4{fill:#FCA326;}\n.st5{fill:#FC6D26;}\n.st6{fill:#8C929D;}\n.st7{fill:#2E2E2E;}\n.st8{fill:none;stroke:#FCA326;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n.st9{fill:none;stroke:#FC6D26;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n.st10{fill:none;stroke:#E24329;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n.st11{fill:none;stroke:#F0F0F0;stroke-miterlimit:10;}\n.st12{fill:#231F20;}\n.st13{fill:none;stroke:#231F20;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n.st14{display:none;}\n.st15{display:inline;opacity:0.1;fill:#E828E3;}\n.st16{display:inline;}\n.st17{opacity:0.1;fill:#E828E3;}\n.st18{font-family:\'SourceSansPro-Semibold\';}\n.st19{font-size:24px;}\n.st20{display:inline;fill:#DB3B21;}\n.st21{display:inline;fill:#FC6D26;}\n.st22{display:inline;fill:#2E2E2E;}\n.st23{display:inline;fill:#6E49CB;}\n.st24{display:inline;fill:#380D75;}\n.st25{display:inline;fill:#FCA121;}\n.st26{opacity:0.6;fill:none;stroke:#231F20;stroke-width:2;stroke-miterlimit:10;stroke-dasharray:12,6;}\n.st27{fill:none;stroke:#444444;stroke-width:1.5339;stroke-miterlimit:10;}\n</style>\n<g id="logo_art">\n<g>\n<g>\n<path id="path14_3_" class="st6" d="M839.7,198.192h-21.8l0.1,162.5h88.3v-20.1h-66.5L839.7,198.192L839.7,198.192z"/>\n<g id="g24_3_" transform="translate(977.327440, 143.284396)">\n<path id="path26_3_" class="st6" d="M13,188.892c-5.5,5.7-14.6,11.4-27,11.4c-16.6,0-23.3-8.2-23.3-18.9\nc0-16.1,11.2-23.8,35-23.8c4.5,0,11.7,0.5,15.4,1.2v30.1H13z M-9.6,90.392c-17.6,0-33.8,6.2-46.4,16.7l7.7,13.4\nc8.9-5.2,19.8-10.4,35.5-10.4c17.9,0,25.8,9.2,25.8,24.6v7.9c-3.5-0.7-10.7-1.2-15.1-1.2c-38.2,0-57.6,13.4-57.6,41.4\nc0,25.1,15.4,37.7,38.7,37.7c15.7,0,30.8-7.2,36-18.9l4,15.9h15.4v-83.2C34.3,107.992,22.9,90.392-9.6,90.392L-9.6,90.392z"/>\n</g>\n<g id="g28_3_" transform="translate(1099.766904, 143.128930)">\n<path id="path30_3_" class="st6" d="M-17.7,201.192c-8.2,0-15.4-1-20.8-3.5v-67.3v-7.8c7.4-6.2,16.6-10.7,28.3-10.7\nc21.1,0,29.2,14.9,29.2,39C19,185.092,5.9,201.192-17.7,201.192 M-8.5,90.592c-19.5,0-30,13.3-30,13.3v-21l-0.1-27.8h-9.8h-11.5\nl0.1,158.5c10.7,4.5,25.3,6.9,41.2,6.9c40.7,0,60.3-26,60.3-70.9C41.6,114.092,23.5,90.592-8.5,90.592"/>\n</g>\n<g id="g32_5_" transform="translate(584.042117, 143.630796)">\n<path id="path34_5_" class="st6" d="M18.3,72.192c19.3,0,31.8,6.4,39.9,12.9l9.4-16.3c-12.7-11.2-29.9-17.2-48.3-17.2\nc-46.4,0-78.9,28.3-78.9,85.4c0,59.8,35.1,83.1,75.2,83.1c20.1,0,37.2-4.7,48.4-9.4l-0.5-63.9v-7.5v-12.6H4v20.1h38l0.5,48.5\nc-5,2.5-13.6,4.5-25.3,4.5c-32.2,0-53.8-20.3-53.8-63C-36.7,93.292-14.4,72.192,18.3,72.192"/>\n</g>\n<g id="g36_4_" transform="translate(793.569045, 142.577463)">\n<path id="path38_4_" class="st6" d="M-37.7,55.592H-59l0.1,27.3v11.2v6.5v11.4v65v0.2c0,26.3,11.4,43.9,43.9,43.9\nc4.5,0,8.9-0.4,13.1-1.2v-19.1c-3.1,0.5-6.4,0.7-9.9,0.7c-17.9,0-25.8-9.2-25.8-24.6v-65h35.7v-17.8h-35.7L-37.7,55.592\nL-37.7,55.592z"/>\n</g>\n<path id="path40_33_" class="st6" d="M680.4,360.692h21.3v-124h-21.3V360.692L680.4,360.692z"/>\n<path id="path42_3_" class="st6" d="M680.4,219.592h21.3v-21.3h-21.3V219.592L680.4,219.592z"/>\n</g>\n<g>\n<path id="path50_5_" class="st3" d="M292.778,434.892L292.778,434.892l62.199-191.322H230.669L292.778,434.892L292.778,434.892z"\n/>\n<path id="path66_12_" class="st4" d="M143.549,243.57L143.549,243.57l-18.941,58.126c-1.714,5.278,0.137,11.104,4.661,14.394\nl163.509,118.801L143.549,243.57L143.549,243.57z"/>\n<path id="path74_5_" class="st3" d="M143.549,243.57h87.12l-37.494-115.224c-1.919-5.895-10.282-5.895-12.27,0L143.549,243.57\nL143.549,243.57z"/>\n<path id="path82_12_" class="st4" d="M442.097,243.57L442.097,243.57l18.873,58.126c1.714,5.278-0.137,11.104-4.661,14.394\nL292.778,434.892L442.097,243.57L442.097,243.57z"/>\n<path id="path86_5_" class="st3" d="M442.097,243.57h-87.12l37.425-115.224c1.919-5.895,10.282-5.895,12.27,0L442.097,243.57\nL442.097,243.57z"/>\n<polygon class="st5" points="292.778,434.892 354.977,243.57 442.097,243.57 "/>\n<polygon class="st5" points="292.778,434.892 143.549,243.57 230.669,243.57 "/>\n</g>\n</g>\n</g>\n<g id="spacing_guides" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="st14">\n<path id="path40_32_" sketch:type="MSShapeGroup" class="st15" d="M-1,0v124h1268V0H-1L-1,0z"/>\n<path id="path40_31_" sketch:type="MSShapeGroup" class="st15" d="M-1,435v124h1268V435H-1L-1,435z"/>\n<path id="path40_30_" sketch:type="MSShapeGroup" class="st15" d="M261.69,434.551h62v-310h-62V434.551L261.69,434.551z"/>\n<path id="path40_29_" sketch:type="MSShapeGroup" class="st15" d="M462.2,560h62V-1h-62V560L462.2,560z"/>\n<text transform="matrix(1 0 0 1 256.2529 195)" class="st16 st18 st19">H: 2.5 x</text>\n<text transform="matrix(1 0 0 1 468.4727 282.832)" class="st16 st18 st19">1/2 x</text>\n<text transform="matrix(1 0 0 1 621.2881 500.4978)" class="st16 st18 st19">1x</text>\n<text transform="matrix(1 0 0 1 621.2881 65.4988)" class="st16 st18 st19">1x</text>\n<path id="path40_27_" sketch:type="MSShapeGroup" class="st15" d="M0,560h124V-1H0V560L0,560z"/>\n<text transform="matrix(1 0 0 1 51.2881 282.832)" class="st16 st18 st19">1x</text>\n<path id="path40_3_" sketch:type="MSShapeGroup" class="st15" d="M1142,560h124V-1h-124V560L1142,560z"/>\n<text transform="matrix(1 0 0 1 1191.2881 282.832)" class="st16 st18 st19">1x</text>\n</g>\n</svg>',
    version: '5.2.0',
    description:
      "Integrating with GitLab is easy with Fusebit!\n\nCreate user owned, group owned and instance-wide GitLab applications.\n\nThis Integration enables you to connect to GitLab's source control, issue tracking, and CI/CD to build awesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull requests, and team management functionality, among others.\n\n[Learn more](https://developer.fusebit.io/docs/gitlab)!",
    tags: {
      catalog: 'Dev Tools,Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/gitlab#creating-your-own-gitlab-app',
      sampleConfig: {
        isEnabled: false,
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          gitlabIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          gitlabConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/gitlabIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/gitlabConnector/properties/id',
            label: 'GitLab Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        gitlabConnector: {
          gitlabName: 'gitlab-connector',
        },
      },
      entities: {
        gitlabConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read_user read_api',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-gitlab-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/gitlab-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/gitlab-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitLab',
          },
        },
        gitlabIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-gitlab-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/gitlab-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Gitlab Integration\n//\n// This simple Gitlab integration allows you to call Gitlab APIs on behalf of the tenants of your\n// application. Fusebit manages the Gitlab authorization process and maps tenants of your application\n// to their Gitlab credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'gitlabConnector';\n\n// The sample test endpoint of this integration performs the following in the Gitlab account associated with your tenant:\n// - Gets all projects that the user belongs to\n// - Get latest commit per project\n// - Get current user information\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Gitlab client pre-configured with credentials necessary to communicate with your tenant's Gitlab account.\n  // For the Gitlab SDK documentation, see https://gitlab.com/.\n  const gitlabClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const projects = await gitlabClient.Projects.all({ membership: true });\n  const commits = [];\n  for await (const project of projects) {\n    const lastCommit = await gitlabClient.Commits.all(project.id, {\n      maxPages: 1,\n    });\n    commits.push({ project, lastCommit: lastCommit[0] });\n  }\n\n  const { name, username } = await gitlabClient.Users.current();\n  const commitsMessage = commits.map((commit) => {\n    return {\n      project: commit.project.name,\n      commit: {\n        id: commit.lastCommit.id,\n        author: commit.lastCommit.author_name,\n        date: commit.lastCommit.created_at,\n        title: commit.lastCommit.title,\n      },\n    };\n  });\n\n  ctx.body = `Hello ${name}, your GitLab username is ${username} and you belong to ${\n    projects.length\n  } projects. Latest commits: ${JSON.stringify(commitsMessage)}`;\n});\n\n// List commits for specific project\nrouter.get(\n  '/api/tenant/:tenantId/projects/:projectId/repository/commits',\n  integration.middleware.authorizeUser('install:get'),\n  async (ctx) => {\n    // Create a Gitlab client pre-configured with credentials necessary to communicate with your tenant's Gitlab account.\n    // For the Gitlab SDK documentation, see https://gitlab.com/.\n    const gitlabClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n    const commits = await gitlabClient.Commits.all(ctx.params.projectId, {\n      maxPages: 1,\n    });\n    ctx.body = commits;\n  }\n);\n\n// List projects\nrouter.get('/api/tenant/:tenantId/projects', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Gitlab client pre-configured with credentials necessary to communicate with your tenant's Gitlab account.\n  // For the Gitlab SDK documentation, see https://gitlab.com/.\n  const gitlabClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const projects = await gitlabClient.Projects.all({ membership: true });\n  ctx.body = projects;\n});\n\n// Subscribe to Webhook events (learn more at https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)\nintegration.event.on('/:componentName/webhook/:eventType', async (ctx) => {\n  console.log('webhook received: ', ctx.req.body.data);\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'gitlabConnector',
                skip: false,
                provider: '@fusebit-int/gitlab-provider',
                entityId: '<% global.entities.gitlabConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitLab',
          },
        },
      },
    },
  },
  {
    id: 'google',
    name: 'Google',
    smallIcon:
      '<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">\n    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>\n    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>\n    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>\n    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>\n  </g>\n</svg>\n\n',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="272" height="92"><path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/><path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/></svg>\n\n',
    version: '5.2.0',
    description:
      "Integrating with Google is easy with Fusebit! This example lets you list Contacts in your customer's Google instance.\n\n[Learn more](https://developer.fusebit.io/docs/google)!\n",
    tags: {
      catalog: '',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/google#creating-your-own-google-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          googleIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          googleConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/googleIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/googleConnector/properties/id',
            label: 'Google Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        googleConnector: {
          googleName: 'google-connector',
        },
      },
      entities: {
        googleConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'openid profile https://www.googleapis.com/auth/userinfo.email',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              extraParams: 'access_type=offline&prompt=consent',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-google-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/google-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google',
          },
        },
        googleIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-google-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Google Integration\n//\n// This simple Google integration allows you to call Google APIs on behalf of the tenants of your\n// application. Fusebit manages the Google authorization process and maps tenants of your application\n// to their Google credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'googleConnector';\n\n// The sample test endpoint of this integration gets the openid and email of the currently authenticated user.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Google client pre-configured with credentials necessary to communicate with your tenant's Google account.\n  // For the Google SDK documentation, see https://developers.google.com/apis-explorer.\n  const googleClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const me = await googleClient.people('v1').people.get({\n    resourceName: 'people/me',\n    personFields: 'emailAddresses,addresses,externalIds,interests',\n  });\n\n  ctx.body = {\n    message: `Your email address has ${me.data.emailAddresses[0].value.length} characters`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'googleConnector',
                skip: false,
                provider: '@fusebit-int/google-provider',
                entityId: '<% global.entities.googleConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google',
          },
        },
      },
    },
  },
  {
    id: 'google-calendar-planned',
    name: 'Google Calendar',
    smallIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M43.5 13.5H13.5V43.5H43.5V13.5Z" fill="white"/>\n<path d="M19.6538 36.7725C18.5325 36.015 17.7563 34.9087 17.3325 33.4462L19.935 32.3737C20.1713 33.2737 20.5838 33.9712 21.1725 34.4662C21.7575 34.9612 22.47 35.205 23.3025 35.205C24.1538 35.205 24.885 34.9462 25.4963 34.4287C26.1075 33.9112 26.415 33.2512 26.415 32.4525C26.415 31.635 26.0925 30.9675 25.4475 30.45C24.8025 29.9325 23.9925 29.6737 23.025 29.6737H21.5213V27.0975H22.8713C23.7038 27.0975 24.405 26.8725 24.975 26.4225C25.545 25.9725 25.83 25.3575 25.83 24.5737C25.83 23.8762 25.575 23.3212 25.065 22.905C24.555 22.4887 23.91 22.2787 23.1263 22.2787C22.3613 22.2787 21.7538 22.4812 21.3038 22.89C20.8541 23.2998 20.516 23.8173 20.3213 24.3937L17.745 23.3212C18.0863 22.3537 18.7125 21.4987 19.6313 20.76C20.55 20.0212 21.7238 19.65 23.1488 19.65C24.2025 19.65 25.1513 19.8525 25.9913 20.2612C26.8313 20.67 27.4913 21.2362 27.9675 21.9562C28.4438 22.68 28.68 23.49 28.68 24.39C28.68 25.3087 28.4588 26.085 28.0163 26.7225C27.5738 27.36 27.03 27.8475 26.385 28.1887V28.3425C27.2179 28.6858 27.9413 29.2498 28.4775 29.9737C29.0213 30.705 29.295 31.5787 29.295 32.5987C29.295 33.6187 29.0363 34.53 28.5188 35.3287C28.0013 36.1275 27.285 36.7575 26.3775 37.215C25.4663 37.6725 24.4425 37.905 23.3063 37.905C21.99 37.9087 20.775 37.53 19.6538 36.7725ZM35.64 23.8575L32.7825 25.9237L31.3538 23.7562L36.48 20.0587H38.445V37.5H35.64V23.8575Z" fill="#4285F4"/>\n<path d="M43.5 43.5H13.5V57H43.5V43.5Z" fill="#34A853"/>\n<path d="M43.5 0H4.5C2.01375 0 0 2.01375 0 4.5V43.5H13.5V13.5H43.5V0Z" fill="#4285F4"/>\n<path d="M0 43.5V52.5C0 54.9862 2.01375 57 4.5 57H13.5V43.5H0Z" fill="#188038"/>\n<path d="M57 13.5H43.5V43.5H57V13.5Z" fill="#FBBC04"/>\n<path d="M57 13.5V4.5C57 2.01375 54.9862 0 52.5 0H43.5V13.5H57Z" fill="#1967D2"/>\n<path d="M43.5 57L57 43.5H43.5V57Z" fill="#EA4335"/>\n</svg>\n',
    largeIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M43.5 13.5H13.5V43.5H43.5V13.5Z" fill="white"/>\n<path d="M19.6538 36.7725C18.5325 36.015 17.7563 34.9087 17.3325 33.4462L19.935 32.3737C20.1713 33.2737 20.5838 33.9712 21.1725 34.4662C21.7575 34.9612 22.47 35.205 23.3025 35.205C24.1538 35.205 24.885 34.9462 25.4963 34.4287C26.1075 33.9112 26.415 33.2512 26.415 32.4525C26.415 31.635 26.0925 30.9675 25.4475 30.45C24.8025 29.9325 23.9925 29.6737 23.025 29.6737H21.5213V27.0975H22.8713C23.7038 27.0975 24.405 26.8725 24.975 26.4225C25.545 25.9725 25.83 25.3575 25.83 24.5737C25.83 23.8762 25.575 23.3212 25.065 22.905C24.555 22.4887 23.91 22.2787 23.1263 22.2787C22.3613 22.2787 21.7538 22.4812 21.3038 22.89C20.8541 23.2998 20.516 23.8173 20.3213 24.3937L17.745 23.3212C18.0863 22.3537 18.7125 21.4987 19.6313 20.76C20.55 20.0212 21.7238 19.65 23.1488 19.65C24.2025 19.65 25.1513 19.8525 25.9913 20.2612C26.8313 20.67 27.4913 21.2362 27.9675 21.9562C28.4438 22.68 28.68 23.49 28.68 24.39C28.68 25.3087 28.4588 26.085 28.0163 26.7225C27.5738 27.36 27.03 27.8475 26.385 28.1887V28.3425C27.2179 28.6858 27.9413 29.2498 28.4775 29.9737C29.0213 30.705 29.295 31.5787 29.295 32.5987C29.295 33.6187 29.0363 34.53 28.5188 35.3287C28.0013 36.1275 27.285 36.7575 26.3775 37.215C25.4663 37.6725 24.4425 37.905 23.3063 37.905C21.99 37.9087 20.775 37.53 19.6538 36.7725ZM35.64 23.8575L32.7825 25.9237L31.3538 23.7562L36.48 20.0587H38.445V37.5H35.64V23.8575Z" fill="#4285F4"/>\n<path d="M43.5 43.5H13.5V57H43.5V43.5Z" fill="#34A853"/>\n<path d="M43.5 0H4.5C2.01375 0 0 2.01375 0 4.5V43.5H13.5V13.5H43.5V0Z" fill="#4285F4"/>\n<path d="M0 43.5V52.5C0 54.9862 2.01375 57 4.5 57H13.5V43.5H0Z" fill="#188038"/>\n<path d="M57 13.5H43.5V43.5H57V13.5Z" fill="#FBBC04"/>\n<path d="M57 13.5V4.5C57 2.01375 54.9862 0 52.5 0H43.5V13.5H57Z" fill="#1967D2"/>\n<path d="M43.5 57L57 43.5H43.5V57Z" fill="#EA4335"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'Millions of people use Google Calendar to track their events. This integration lets you connect your \napp with Google Calendar and work with calendars and events.',
    outOfPlan: true,
    tags: {
      catalog: 'Calendar,Office',
    },
    configuration: {},
  },
  {
    id: 'google-docs-planned',
    name: 'Google Docs',
    smallIcon:
      '<svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.25 42.75H0V53.1136C0 55.2609 1.73915 57 3.88636 57H14.25V42.75Z" fill="#00832D"/>\n<path d="M14.25 0H3.88636C1.73915 0 0 1.73915 0 3.88636V42.75H14.25V14.25H27.2045V0H14.25Z" fill="#FFBA00"/>\n<path d="M41.4546 42.75H27.2046V57H37.5682C39.7154 57 41.4546 55.2609 41.4546 53.1136V42.75Z" fill="#0066DA"/>\n<path d="M27.2045 42.75H14.25V57H27.2045V42.75Z" fill="#00AC47"/>\n<path d="M27.2046 14.25V42.75H41.4546V14.25H27.2046Z" fill="#2684FC"/>\n<path d="M27.2046 0V14.25H41.4546L27.2046 0Z" fill="#EA4335"/>\n<path d="M27.2045 14.25H14.25V42.75H27.2045V14.25Z" fill="white"/>\n</svg>\n',
    largeIcon:
      '<svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.25 42.75H0V53.1136C0 55.2609 1.73915 57 3.88636 57H14.25V42.75Z" fill="#00832D"/>\n<path d="M14.25 0H3.88636C1.73915 0 0 1.73915 0 3.88636V42.75H14.25V14.25H27.2045V0H14.25Z" fill="#FFBA00"/>\n<path d="M41.4546 42.75H27.2046V57H37.5682C39.7154 57 41.4546 55.2609 41.4546 53.1136V42.75Z" fill="#0066DA"/>\n<path d="M27.2045 42.75H14.25V57H27.2045V42.75Z" fill="#00AC47"/>\n<path d="M27.2046 14.25V42.75H41.4546V14.25H27.2046Z" fill="#2684FC"/>\n<path d="M27.2046 0V14.25H41.4546L27.2046 0Z" fill="#EA4335"/>\n<path d="M27.2045 14.25H14.25V42.75H27.2045V14.25Z" fill="white"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'Many of the features that make Google Docs so successful are available through this integration. \nIt lets you read and write documents programmatically so that you can integrate data from various \nsources leveraging the power of Google Docs.',
    outOfPlan: true,
    tags: {
      catalog: 'Office',
    },
    configuration: {},
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    smallIcon:
      '<svg width="65" height="58" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.89844 49.6152L7.75585 54.5508C8.3496 55.5898 9.20313 56.4063 10.2051 57L20.4102 39.3359H0C0 40.4863 0.296861 41.6367 0.890611 42.6758L4.89844 49.6152Z" fill="#0066DA"/>\n<path d="M32.3965 18.5547L22.1914 0.890594C21.1894 1.48434 20.3359 2.30075 19.7422 3.33981L0.890611 35.9961C0.307781 37.0127 0.000776004 38.164 0 39.3359H20.4102L32.3965 18.5547Z" fill="#00AC47"/>\n<path d="M54.5879 57C55.5899 56.4063 56.4434 55.5898 57.0371 54.5508L58.2246 52.5098L63.9024 42.6758C64.4961 41.6367 64.793 40.4863 64.793 39.3359H44.3813L48.7246 47.8711L54.5879 57Z" fill="#EA4335"/>\n<path d="M32.3965 18.5547L42.6016 0.890625C41.5996 0.296876 40.4492 0 39.2617 0H25.5312C24.3438 0 23.1934 0.333985 22.1914 0.890625L32.3965 18.5547Z" fill="#00832D"/>\n<path d="M44.3828 39.3359H20.4102L10.2051 57C11.207 57.5938 12.3574 57.8906 13.5449 57.8906H51.248C52.4355 57.8906 53.5859 57.5566 54.5879 57L44.3828 39.3359Z" fill="#2684FC"/>\n<path d="M54.4766 19.6679L45.0508 3.33981C44.457 2.30075 43.6035 1.48434 42.6016 0.890594L32.3965 18.5547L44.3828 39.3359H64.7559C64.7559 38.1855 64.459 37.0351 63.8652 35.9961L54.4766 19.6679Z" fill="#FFBA00"/>\n</svg>\n',
    largeIcon:
      '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 621 105" enable-background="new 0 0 621 105" xml:space="preserve"><g><g><g>><path fill="#787879" d="M255.64484,62.10832c0-7.88028-5.71764-13.27205-12.35367-13.27205c-6.63602,0-12.35367,5.39177-12.35367,13.27205c0,7.80127,5.71765,13.27205,12.35367,13.27205C249.9272,75.38036,255.64484,69.89972,255.64484,62.10832z M265.26312,62.10832c0,12.61042-9.86516,21.90282-21.97195,21.90282c-12.10678,0-21.97194-9.2924-21.97194-21.90282c0-12.6993,9.86516-21.90283,21.97194-21.90283C255.39796,40.20549,265.26312,49.40902,265.26312,62.10832z"/><path fill="#787879" d="M303.04498,62.10832c0-7.88028-5.71762-13.27205-12.35364-13.27205c-6.63605,0-12.35367,5.39177-12.35367,13.27205c0,7.80127,5.71762,13.27205,12.35367,13.27205C297.32736,75.38036,303.04498,69.89972,303.04498,62.10832z M312.66327,62.10832c0,12.61042-9.86514,21.90282-21.97192,21.90282c-12.10681,0-21.97195-9.2924-21.97195-21.90282c0-12.68942,9.86514-21.90283,21.97195-21.90283C302.79813,40.20549,312.66327,49.40902,312.66327,62.10832z"/><path fill="#787879" d="M349.63541,62.18731c0-7.7124-5.1449-13.35104-11.69202-13.35104c-6.63605,0-12.19568,5.63864-12.19568,13.35104c0,7.6334,5.55963,13.19305,12.19568,13.19305C344.49051,75.38036,349.63541,69.82072,349.63541,62.18731z M358.08844,41.52874v39.32238c0,16.17531-9.53928,22.78171-20.81659,22.78171c-10.61563,0-17.00479-7.10015-19.41431-12.90667l8.37405-3.48589c1.49112,3.5649,5.14487,7.77167,11.0304,7.77167c7.21866,0,11.69205-4.45364,11.69205-12.83755v-3.15013h-0.33575c-2.15277,2.65638-6.30026,4.97701-11.53406,4.97701c-10.95139,0-20.98444-9.53928-20.98444-21.81395c0-12.36354,10.03305-21.98183,20.98444-21.98183c5.22391,0,9.37143,2.32064,11.53406,4.89802h0.33575v-3.56488h9.1344V41.52874z"/><rect x="363.76657" y="18.48042" fill="#787879" width="9.38128" height="64.18772"/><path fill="#787879" d="M386.72604,61.43681l19.57233-8.12715c-1.07639-2.73539-4.3154-4.64127-8.12717-4.64127C393.28305,48.6684,386.47916,52.98378,386.72604,61.43681z M409.70523,69.31709l7.46552,4.97701c-2.40948,3.56489-8.216,9.70716-18.24902,9.70716c-12.44257,0-21.73499-9.61829-21.73499-21.90283c0-13.02517,9.37143-21.90282,20.65857-21.90282c11.36618,0,16.92581,9.04554,18.74283,13.93367l0.99738,2.48851l-29.27945,12.12654c2.24161,4.39439,5.72751,6.63602,10.61566,6.63602C403.8197,75.38036,407.21674,72.97086,409.70523,69.31709z"/><path fill="#787879" d="M185.80861,56.41042v-9.29241h31.31372c0.30612,1.6195,0.46413,3.53526,0.46413,5.60902c0,6.97178-1.90587,15.59267-8.04814,21.73495c-5.9744,6.22128-13.6078,9.53929-23.71983,9.53929c-18.74281-0.00001-34.50337-15.26681-34.50337-34.00962s15.76056-34.00961,34.50337-34.00961c10.36877,0,17.75531,4.06851,23.30508,9.37141l-6.55704,6.55702c-3.97963-3.73276-9.3714-6.63602-16.75792-6.63602c-13.6868,0-24.39134,11.03042-24.39134,24.71721s10.70454,24.71721,24.39134,24.71721c8.87766,0,13.93367-3.56488,17.17268-6.80389c2.62675-2.62676,4.35489-6.37927,5.03625-11.50441L185.80861,56.41042z"/></g><g><path fill="#787879" d="M440.40891,82.66842V23.44869h18.11328c9.04297,0,16.30664,2.72949,21.79395,8.1875c5.48633,5.45899,8.22949,12.60059,8.22949,21.42188c0,8.87891-2.74316,16.0332-8.22949,21.46386c-5.4873,5.43164-12.75098,8.14648-21.79395,8.14648H440.40891z M448.01828,30.72701V75.3901h10.50391c6.89258,0,12.32422-1.9707,16.29395-5.91406c3.96973-3.94141,5.95508-9.41406,5.95508-16.41796c0-6.94727-1.98535-12.40625-5.95508-16.37598c-3.96973-3.9707-9.40137-5.95508-16.29395-5.95508H448.01828z"/><path fill="#787879" d="M502.19406,82.66842h-7.60938V42.14108h7.27832v6.61621h0.33105c0.77148-2.15039,2.35742-3.98242,4.75586-5.5c2.39844-1.51562,4.75586-2.27441,7.07132-2.27441c2.20508,0,4.08008,0.33105,5.62402,0.99219l-2.31543,7.36133c-0.93848-0.38477-2.42676-0.5791-4.4668-0.5791c-2.86722,0-5.36331,1.1582-7.48441,3.47363c-2.12402,2.31641-3.18457,5.01855-3.18457,8.10547V82.66842z"/><path fill="#787879" d="M534.44995,28.16256c0,1.48926-0.52539,2.75781-1.57227,3.80469c-1.04785,1.04785-2.31543,1.57129-3.80469,1.57129c-1.48828,0-2.75781-0.52344-3.80469-1.57129c-1.04785-1.04688-1.57129-2.31543-1.57129-3.80469c0-1.48828,0.52344-2.75586,1.57129-3.80469c1.04688-1.04688,2.31641-1.57129,3.80469-1.57129c1.48926,0,2.75684,0.52441,3.80469,1.57129C533.92456,25.4067,534.44995,26.67428,534.44995,28.16256z M532.87769,42.14108v40.52734h-7.60938V42.14108H532.87769z"/><path fill="#787879" d="M562.48706,82.66842h-7.60938l-16.37598-40.52734h8.27051l11.91016,31.42968h0.16602l12.0752-31.42968h8.10547L562.48706,82.66842z"/><path fill="#787879" d="M600.94604,83.99166c-5.95508,0-10.86328-2.03906-14.72266-6.12012c-3.86035-4.08008-5.79004-9.23535-5.79004-15.46679c0-6.1748,1.87402-11.31738,5.625-15.42578c3.74902-4.10645,8.5459-6.16113,14.3916-6.16113c6.00879,0,10.79297,1.94336,14.34961,5.83008c3.55664,3.8877,5.33496,9.33398,5.33496,16.33594l-0.08301,0.82715h-31.84277c0.10938,3.96972,1.43262,7.16796,3.96973,9.59375c2.53613,2.42676,5.56836,3.63965,9.09766,3.63965c4.85156,0,8.65625-2.42578,11.41406-7.27832l6.78223,3.30762c-1.81934,3.41992-4.3418,6.09375-7.56738,8.02344S605.02612,83.99166,600.94604,83.99166z M588.78784,57.52487h23.24121c-0.22168-2.8125-1.36523-5.14062-3.43262-6.98926c-2.06738-1.84668-4.83887-2.77051-8.3125-2.77051c-2.86719,0-5.33496,0.88281-7.40234,2.64648C590.81421,52.17721,589.44897,54.54733,588.78784,57.52487z"/></g></g><g><g id="_0ba25eff_1_"><path fill="#00A15E" d="M39.55789,1.05311l0.10241-0.00233l0.00931,0.11405L39.53927,1.1695L39.55789,1.05311z"/><path fill="#00A15E" d="M39.15986,1.81658c0.09078-0.13035,0.26768-0.39104,0.35846-0.52139l0.16293-0.0256c0.12104,1.47572,0.55398,2.89791,0.87985,4.33407c1.40124,6.24041,2.81645,12.47616,4.28984,18.69795c0.96597,4.26657,2.04367,8.51219,2.92817,12.79505c0.76812,2.65118,1.18011,5.38616,1.92263,8.042c0.47949,2.47661,1.23132,4.8927,1.63401,7.38327c-0.16293,0.27234-0.32587,0.547-0.49113,0.81933c-0.03957,0.06284-0.12336,0.19319-0.16293,0.25837l-0.06052,0.10475c-0.00931,0.01862-0.03026,0.05819-0.0419,0.07681c-0.09078,0.16759-0.27233,0.50044-0.36311,0.6657c-0.0163,0.03026-0.05121,0.09078-0.06983,0.12104l-0.16526,0.29329c-0.02095,0.03491-0.06052,0.10242-0.07914,0.13733l-0.19319,0.33751c-0.00931,0.01862-0.03026,0.05586-0.0419,0.07449l-0.23975,0.41897c-0.02095,0.03491-0.06285,0.1094-0.0838,0.14664c-0.02328,0.03957-0.06983,0.11638-0.09311,0.15596l-0.23509,0.40501c-0.01862,0.03026-0.05587,0.09544-0.07449,0.12569l-0.14431,0.2444c-0.02328,0.0419-0.07449,0.12802-0.09776,0.16992c-0.09311,0.16061-0.27699,0.48182-0.37009,0.64475c-0.0163,0.02793-0.05121,0.08612-0.0675,0.11638l-0.14664,0.2444c-0.02328,0.04422-0.07449,0.12802-0.10009,0.17224c-0.08612,0.1513-0.26302,0.45156-0.34914,0.60286c-0.02095,0.03491-0.06052,0.10707-0.08147,0.14198l-0.17457,0.31423c-0.0163,0.02793-0.04888,0.08612-0.06517,0.11405l-0.17923,0.31424l-0.07449,0.13035c-0.09311,0.15362-0.27466,0.4632-0.36544,0.61915c-0.02095,0.03491-0.06285,0.10707-0.0838,0.14431L46.47564,60.934c-0.01629,0.02793-0.04655,0.08147-0.06052,0.1094l-0.19087,0.33053c-0.0163,0.03026-0.05121,0.08845-0.0675,0.11638c-0.09776,0.16759-0.29095,0.50044-0.38871,0.66803c-0.0163,0.03026-0.05354,0.09078-0.07215,0.12104l-0.13966,0.23043c-0.02328,0.04189-0.07216,0.12336-0.09544,0.16526c-0.08845,0.15362-0.26302,0.45855-0.35147,0.61217c-0.01397,0.0256-0.04655,0.08147-0.06052,0.10707l-0.19087,0.33983c-0.01397,0.0256-0.04189,0.07449-0.05586,0.10009l-0.19552,0.34216c-0.0163,0.0256-0.04888,0.08147-0.06517,0.10707c-0.09078,0.15363-0.27466,0.45621-0.36544,0.60984c-0.0256,0.03957-0.07215,0.12337-0.09776,0.16526l-0.13733,0.25604c-0.01862,0.03259-0.05353,0.09776-0.06983,0.12802l-0.23975,0.41431c-0.01862,0.03492-0.06052,0.10475-0.07914,0.13966c-0.02095,0.03259-0.05819,0.10009-0.07681,0.13268c-0.39337,0.66338-0.7495,1.34771-1.18477,1.98548c-2.47894,4.04311-4.76003,8.21191-7.15982,12.30392c-3.89647,6.74317-7.79139,13.48635-11.68476,20.22953c-0.58424,1.04977-1.24994,2.05531-1.75271,3.15163l-0.10242,0.14897c-0.93338-1.34535-1.65495-2.83039-2.5092-4.22697c-3.89647-6.74783-7.79294-13.49566-11.68942-20.2435c-2.16471-3.79638-4.42019-7.54621-6.52671-11.37751c8.34227-14.39646,16.66669-28.80456,24.97326-43.2243c0.00698-0.01396,0.02328-0.03957,0.03026-0.05353l0.22811-0.39104c0.00931-0.01629,0.02793-0.04888,0.03957-0.06517l0.23044-0.39337c0.02095-0.03491,0.06285-0.1094,0.08612-0.14431c0.02328-0.0419,0.06983-0.12337,0.09311-0.16526l0.23044-0.40966l0.06517-0.11172l0.17225-0.27466c0.03026-0.04423,0.09078-0.135,0.12104-0.18156c0.0838-0.12569,0.25371-0.3794,0.33984-0.5051c0.00931-0.0419,0.0256-0.12336,0.03491-0.16293l0.20251-0.38872l0.03724-0.06517l0.23277-0.39104c0.02328-0.03724,0.06983-0.11638,0.09311-0.15595c0.0256-0.04423,0.07681-0.135,0.10474-0.18155l0.19552-0.34216c0.02095-0.03724,0.06285-0.1094,0.0838-0.14431l0.16293-0.2863c0.01862-0.03026,0.05586-0.09543,0.07449-0.12802c0.09078-0.15595,0.27233-0.46786,0.36544-0.62381l0.07449-0.13035l0.16992-0.30958c0.01397-0.02328,0.0419-0.07448,0.05586-0.09776l0.22345-0.39104c0.02793-0.04655,0.08612-0.14199,0.11638-0.18854l0.1513-0.22811c0.03259-0.04655,0.09543-0.13733,0.12802-0.18155c0.02793-0.04655,0.08612-0.13966,0.11638-0.18621l0.12569-0.24207c0.0419-0.09078,0.12802-0.27233,0.16992-0.36311l0.12802-0.17923c0.02328-0.03259,0.0675-0.09543,0.09078-0.12802c0.08612-0.07216,0.26069-0.22113,0.34682-0.29561l-0.01629-0.27233c0.01397-0.03259,0.04655-0.09776,0.06285-0.13035l0.19785-0.39337c0.01629-0.02793,0.04888-0.08612,0.06517-0.11405l0.17457-0.28397c0.03259-0.04655,0.09543-0.13966,0.12802-0.18621c0.07914-0.13035,0.23975-0.38639,0.31889-0.51441c0.02328-0.04655,0.06517-0.13733,0.08845-0.18388l0.12337-0.26768c0.03724-0.06983,0.11638-0.21182,0.15595-0.28397l0.15363-0.2188l0.13034-0.1769c0.02793-0.04655,0.08612-0.13966,0.11406-0.18621l0.11406-0.23975c0.0256-0.05354,0.07914-0.16293,0.10474-0.21647l0.20018-0.38639c0.03026-0.04655,0.08845-0.14431,0.11638-0.1932l0.15363-0.22811c0.03259-0.04655,0.09776-0.135,0.13035-0.18156c0.03026-0.04655,0.08845-0.14199,0.11638-0.18854l0.11871-0.24207c0.03491-0.0675,0.10242-0.20018,0.135-0.26768l0.15828-0.2607c0.02793-0.04423,0.08379-0.13268,0.11406-0.1769c0.08379-0.13035,0.25371-0.39104,0.33984-0.51906c0.00931-0.03957,0.03026-0.11871,0.03957-0.15828l0.2025-0.38639c0.00698-0.01629,0.0256-0.04655,0.03491-0.06285l0.23277-0.39803c0.02328-0.03957,0.0675-0.11638,0.09078-0.15595c0.02328-0.03724,0.0675-0.11638,0.09078-0.15363l0.23276-0.40734c0.00931-0.01629,0.02793-0.04888,0.03724-0.0675l0.2188-0.3794c0.01532-0.02243,0.02931-0.04575,0.0419-0.06983l0.23509-0.3957c0.02095-0.03724,0.06285-0.10707,0.08379-0.14431c0.02328-0.03957,0.06983-0.12104,0.09311-0.16294l0.22345-0.39337c0.01397-0.0256,0.0419-0.07448,0.05587-0.09776l0.18854-0.30492c0.03026-0.04422,0.09078-0.135,0.11871-0.17923c0.08612-0.12802,0.25371-0.38406,0.33984-0.51208c0.00698-0.03957,0.0256-0.11871,0.03491-0.15828l0.19785-0.37941c0.01629-0.02793,0.05121-0.08612,0.0675-0.11638l0.1769-0.27699c0.03259-0.04422,0.0931-0.135,0.12569-0.18156c0.08147-0.13035,0.2444-0.38872,0.32587-0.51906c0.01164-0.03724,0.03259-0.11173,0.04423-0.14897l0.20483-0.38406c0.00931-0.01862,0.02793-0.05121,0.03724-0.06983l0.23742-0.40035c0.01862-0.03492,0.06052-0.10474,0.08147-0.13966c0.02095-0.03957,0.06285-0.11405,0.08379-0.1513l0.23277-0.41432c0.01164-0.01629,0.03026-0.05121,0.03957-0.0675l0.22112-0.37475C39.13659,1.85382,39.15288,1.82822,39.15986,1.81658z"/></g><g id="_fccd48ff_1_"><path fill="#FBCD48" d="M98.83757,35.61599c0.08997-0.40002,0.08002-0.78998,0.04999-1.19C98.92754,34.82601,98.92754,35.21597,98.83757,35.61599z"/></g><g id="_089156ff_1_"><path fill="#039056" d="M39.53927,1.1695l0.13035-0.00466l0.01164,0.10474l-0.16293,0.0256L39.53927,1.1695z"/><path fill="#00A15E" d="M39.68126,1.26958c0.46782,0.66035,0.89159,1.35083,1.26856,2.06695c6.46852,11.19363,12.93082,22.38958,19.38693,33.58787c-2.98869,5.20461-5.98902,10.40378-9.00099,15.59752c-0.40268-2.49057-1.15451-4.90667-1.63401-7.38328c-0.74252-2.65584-1.15451-5.39082-1.92263-8.042c-0.88451-4.28286-1.9622-8.52848-2.92817-12.79505c-1.4734-6.22178-2.8886-12.45754-4.28984-18.69794C40.23523,4.1675,39.80229,2.74531,39.68126,1.26958z"/><path fill="#039056" d="M39.1296,1.86546c0.00698-0.01164,0.02328-0.03724,0.03026-0.04888C39.15288,1.82822,39.13659,1.85382,39.1296,1.86546z"/><path fill="#039056" d="M38.86891,2.30771c0.01164-0.01629,0.03026-0.05121,0.03957-0.0675C38.89917,2.2565,38.88055,2.29142,38.86891,2.30771z"/><path fill="#039056" d="M38.55235,2.87333c0.02095-0.03957,0.06285-0.11405,0.08379-0.1513C38.6152,2.75927,38.5733,2.83376,38.55235,2.87333z"/><path fill="#039056" d="M38.47088,3.01299c0.01862-0.03492,0.06052-0.10474,0.08147-0.13966C38.5314,2.90824,38.4895,2.97807,38.47088,3.01299z"/><path fill="#039056" d="M38.19622,3.48317c0.00931-0.01862,0.02793-0.05121,0.03725-0.06983C38.22415,3.43196,38.20553,3.46455,38.19622,3.48317z"/><path fill="#039056" d="M37.94716,4.0162c0.01164-0.03724,0.03259-0.11173,0.04423-0.14897C37.97975,3.90447,37.9588,3.97896,37.94716,4.0162z"/><path fill="#039056" d="M37.62129,4.53527c0.08147-0.13035,0.2444-0.38872,0.32587-0.51906C37.86569,4.14655,37.70276,4.40492,37.62129,4.53527z"/><path fill="#039056" d="M37.4956,4.71682c0.03259-0.04422,0.09311-0.135,0.12569-0.18156C37.5887,4.58182,37.52819,4.6726,37.4956,4.71682z"/><path fill="#039056" d="M37.2512,5.11019c0.01629-0.02793,0.05121-0.08612,0.0675-0.11638C37.30241,5.02407,37.26749,5.08226,37.2512,5.11019z"/><path fill="#039056" d="M37.01843,5.64788c0.00698-0.03957,0.0256-0.11871,0.03491-0.15828C37.04404,5.52917,37.02541,5.60831,37.01843,5.64788z"/><path fill="#039056" d="M36.6786,6.15996c0.08612-0.12802,0.25371-0.38406,0.33984-0.51208C36.93231,5.7759,36.76472,6.03194,36.6786,6.15996z"/><path fill="#039056" d="M36.55989,6.33919c0.03026-0.04422,0.09078-0.135,0.11871-0.17923C36.65067,6.20418,36.59015,6.29496,36.55989,6.33919z"/><path fill="#039056" d="M36.31548,6.74187c0.01397-0.0256,0.0419-0.07448,0.05587-0.09776C36.35738,6.66739,36.32945,6.71627,36.31548,6.74187z"/><path fill="#039056" d="M35.99893,7.29818c0.02328-0.03957,0.06983-0.12104,0.09311-0.16294C36.06876,7.17714,36.0222,7.25861,35.99893,7.29818z"/><path fill="#039056" d="M35.91513,7.44249c0.02095-0.03724,0.06285-0.10707,0.08379-0.14431C35.97798,7.33542,35.93608,7.40525,35.91513,7.44249z"/><path fill="#039056" d="M35.63814,7.90802c0.01532-0.02243,0.02931-0.04575,0.0419-0.06983C35.66745,7.86227,35.65347,7.88558,35.63814,7.90802z"/><path fill="#039056" d="M35.3821,8.35493c0.00931-0.01629,0.02793-0.04888,0.03724-0.0675C35.41003,8.30604,35.39141,8.33863,35.3821,8.35493z"/><path fill="#039056" d="M35.05856,8.91589c0.02328-0.03724,0.0675-0.11638,0.09078-0.15363C35.12606,8.7995,35.08184,8.87864,35.05856,8.91589z"/><path fill="#039056" d="M34.96778,9.07184c0.02328-0.03957,0.0675-0.11638,0.09078-0.15595C35.03528,8.95546,34.99106,9.03227,34.96778,9.07184z"/><path fill="#039056" d="M34.7001,9.53271c0.00698-0.01629,0.0256-0.04655,0.03491-0.06285C34.72571,9.48616,34.70708,9.51642,34.7001,9.53271z"/><path fill="#039056" d="M34.45803,10.07738c0.00931-0.03957,0.03026-0.11871,0.03957-0.15828C34.48829,9.95867,34.46734,10.03781,34.45803,10.07738z"/><path fill="#039056" d="M34.11819,10.59644c0.08379-0.13035,0.25371-0.39104,0.33984-0.51906C34.37191,10.2054,34.20199,10.4661,34.11819,10.59644z"/><path fill="#039056" d="M34.00414,10.77334c0.02793-0.04423,0.08379-0.13268,0.11406-0.1769C34.08793,10.64067,34.03207,10.72912,34.00414,10.77334z"/><path fill="#039056" d="M33.71086,11.30172c0.03491-0.0675,0.10242-0.20018,0.135-0.26768C33.81327,11.10154,33.74577,11.23422,33.71086,11.30172z"/><path fill="#039056" d="M33.47576,11.73233c0.03026-0.04655,0.08845-0.14199,0.11638-0.18854C33.56421,11.59035,33.50602,11.68578,33.47576,11.73233z"/><path fill="#039056" d="M33.34541,11.91389c0.03259-0.04655,0.09776-0.135,0.13035-0.18156C33.44318,11.77889,33.378,11.86734,33.34541,11.91389z"/><path fill="#039056" d="M33.07541,12.33519c0.03026-0.04655,0.08845-0.14431,0.11638-0.19319C33.16386,12.19088,33.10567,12.28864,33.07541,12.33519z"/><path fill="#039056" d="M32.77049,12.93805c0.0256-0.05354,0.07914-0.16293,0.10474-0.21647C32.84962,12.77512,32.79609,12.88451,32.77049,12.93805z"/><path fill="#039056" d="M32.54238,13.36401c0.02793-0.04655,0.08612-0.13966,0.11406-0.18621C32.6285,13.22435,32.57031,13.31746,32.54238,13.36401z"/><path fill="#039056" d="M32.41203,13.54091l0.13034-0.1769L32.41203,13.54091z"/><path fill="#039056" d="M32.10246,14.04368c0.03724-0.06983,0.11638-0.21182,0.15595-0.28397C32.21884,13.83187,32.1397,13.97385,32.10246,14.04368z"/><path fill="#039056" d="M31.89064,14.49524c0.02328-0.04655,0.06517-0.13733,0.08845-0.18388C31.95581,14.35791,31.91392,14.44869,31.89064,14.49524z"/><path fill="#039056" d="M31.57175,15.00965c0.07914-0.13035,0.23975-0.38639,0.31889-0.51441C31.8115,14.62326,31.65089,14.8793,31.57175,15.00965z"/><path fill="#039056" d="M31.44373,15.19586c0.03259-0.04655,0.09543-0.13966,0.12802-0.18621C31.53917,15.0562,31.47632,15.14931,31.44373,15.19586z"/><path fill="#039056" d="M31.20399,15.59389c0.01629-0.02793,0.04888-0.08612,0.06517-0.11405C31.25286,15.50777,31.22028,15.56596,31.20399,15.59389z"/><path fill="#039056" d="M30.94329,16.11761c0.01397-0.03259,0.04655-0.09776,0.06285-0.13035C30.98984,16.01985,30.95726,16.08502,30.94329,16.11761z"/><path fill="#039056" d="M30.61276,16.68555c0.08147-0.14199,0.24673-0.42596,0.33052-0.56795l0.01629,0.27233C30.87346,16.46443,30.69889,16.6134,30.61276,16.68555z"/><path fill="#039056" d="M30.52198,16.81357c0.02328-0.03259,0.0675-0.09543,0.09078-0.12802C30.58949,16.71814,30.54526,16.78099,30.52198,16.81357z"/><path fill="#039056" d="M30.22405,17.35591c0.0419-0.09078,0.12802-0.27233,0.16992-0.36311C30.35207,17.08358,30.26595,17.26514,30.22405,17.35591z"/><path fill="#039056" d="M29.98197,17.7842c0.02793-0.04655,0.08612-0.13966,0.11638-0.18621C30.06809,17.64454,30.0099,17.73765,29.98197,17.7842z"/><path fill="#039056" d="M29.85395,17.96576c0.03259-0.04655,0.09543-0.13733,0.12802-0.18156C29.94939,17.82842,29.88654,17.9192,29.85395,17.96576z"/><path fill="#039056" d="M29.58627,18.3824c0.02793-0.04655,0.08612-0.14198,0.11638-0.18854C29.6724,18.24042,29.61421,18.33585,29.58627,18.3824z"/><path fill="#039056" d="M29.30696,18.87121c0.01397-0.02328,0.0419-0.07448,0.05586-0.09776C29.34885,18.79672,29.32092,18.84793,29.30696,18.87121z"/><path fill="#039056" d="M29.06255,19.31113l0.07449-0.13035L29.06255,19.31113z"/><path fill="#039056" d="M28.62263,20.06296c0.01862-0.03026,0.05586-0.09543,0.07449-0.12802C28.6785,19.96753,28.64125,20.0327,28.62263,20.06296z"/><path fill="#039056" d="M28.3759,20.49358c0.02095-0.03724,0.06285-0.1094,0.0838-0.14432C28.43875,20.38418,28.39685,20.45633,28.3759,20.49358z"/><path fill="#039056" d="M28.07563,21.01729c0.0256-0.04423,0.07681-0.135,0.10474-0.18155C28.15245,20.88229,28.10124,20.97307,28.07563,21.01729z"/><path fill="#039056" d="M27.98253,21.17325c0.02328-0.03724,0.06983-0.11638,0.09311-0.15595C28.05236,21.05686,28.00581,21.136,27.98253,21.17325z"/><path fill="#039056" d="M27.71252,21.62946l0.03724-0.06517L27.71252,21.62946z"/><path fill="#039056" d="M27.4751,22.18112c0.00931-0.0419,0.0256-0.12337,0.03491-0.16294C27.50071,22.05775,27.48441,22.13922,27.4751,22.18112z"/><path fill="#039056" d="M27.13527,22.68621c0.0838-0.12569,0.25371-0.3794,0.33984-0.5051C27.38898,22.30681,27.21906,22.56052,27.13527,22.68621z"/><path fill="#039056" d="M27.01423,22.86777c0.03026-0.04423,0.09078-0.135,0.12104-0.18156C27.10501,22.73277,27.04449,22.82355,27.01423,22.86777z"/><path fill="#039056" d="M26.77681,23.25416l0.06517-0.11172L26.77681,23.25416z"/><path fill="#039056" d="M26.45327,23.82908c0.02328-0.0419,0.06983-0.12337,0.09311-0.16526C26.5231,23.70572,26.47655,23.78719,26.45327,23.82908z"/><path fill="#039056" d="M26.36715,23.9734c0.02095-0.03491,0.06285-0.1094,0.08612-0.14431C26.42999,23.864,26.38809,23.93848,26.36715,23.9734z"/><path fill="#039056" d="M26.09714,24.43194c0.00931-0.01629,0.02793-0.04888,0.03957-0.06517C26.12507,24.38306,26.10645,24.41565,26.09714,24.43194z"/><path fill="#039056" d="M25.83877,24.87652c0.00698-0.01396,0.02328-0.03957,0.03026-0.05353C25.86205,24.83695,25.84575,24.86256,25.83877,24.87652z"/><path fill="#039056" d="M50.68169,53.59962c0.03957-0.06517,0.12336-0.19552,0.16293-0.25837C50.80505,53.4041,50.72126,53.53445,50.68169,53.59962z"/><path fill="#039056" d="M50.57927,53.78117c0.01164-0.01862,0.03259-0.05819,0.0419-0.07681C50.61186,53.72298,50.59091,53.76255,50.57927,53.78117z"/><path fill="#039056" d="M50.14633,54.56792c0.01862-0.03026,0.05354-0.09078,0.06983-0.12104C50.19987,54.47714,50.16495,54.53766,50.14633,54.56792z"/><path fill="#039056" d="M49.90193,54.99853c0.01862-0.03491,0.05819-0.10242,0.07914-0.13733C49.96012,54.89612,49.92055,54.96362,49.90193,54.99853z"/><path fill="#039056" d="M49.66684,55.41053c0.01164-0.01862,0.03259-0.05586,0.0419-0.07449C49.69942,55.35466,49.67847,55.3919,49.66684,55.41053z"/><path fill="#039056" d="M49.34329,55.97614c0.02095-0.03724,0.06285-0.11173,0.0838-0.14664C49.40614,55.86441,49.36424,55.9389,49.34329,55.97614z"/><path fill="#039056" d="M49.25019,56.1321c0.02328-0.03957,0.06983-0.11638,0.09311-0.15596C49.32002,56.01571,49.27347,56.09252,49.25019,56.1321z"/><path fill="#039056" d="M48.94061,56.6628c0.01862-0.03026,0.05586-0.09543,0.07449-0.12569C48.99648,56.56736,48.95923,56.63254,48.94061,56.6628z"/><path fill="#039056" d="M48.69854,57.07712c0.02328-0.0419,0.07449-0.12802,0.09776-0.16992C48.77302,56.94909,48.72181,57.03521,48.69854,57.07712z"/><path fill="#039056" d="M48.26094,57.83825c0.0163-0.03026,0.05121-0.08845,0.0675-0.11638C48.31215,57.7498,48.27724,57.80799,48.26094,57.83825z"/><path fill="#039056" d="M48.01421,58.2549c0.0256-0.04422,0.07681-0.12802,0.10009-0.17224C48.09102,58.12688,48.03981,58.21068,48.01421,58.2549z"/><path fill="#039056" d="M47.5836,58.99974c0.02095-0.03491,0.06052-0.10707,0.08147-0.14198C47.64412,58.89267,47.60455,58.96483,47.5836,58.99974z"/><path fill="#039056" d="M47.34385,59.42804c0.0163-0.02793,0.04888-0.08612,0.06517-0.11405C47.39273,59.34191,47.36015,59.4001,47.34385,59.42804z"/><path fill="#039056" d="M47.09014,59.87261l0.07449-0.13035L47.09014,59.87261z"/><path fill="#039056" d="M46.6409,60.63607c0.02095-0.03724,0.06285-0.1094,0.0838-0.14431C46.70375,60.52668,46.66185,60.59884,46.6409,60.63607z"/><path fill="#039056" d="M46.41512,61.04341c0.01397-0.02793,0.04423-0.08147,0.06052-0.1094C46.45935,60.96195,46.42909,61.01548,46.41512,61.04341z"/><path fill="#039056" d="M46.15675,61.49032c0.0163-0.02793,0.05121-0.08612,0.0675-0.11638C46.20796,61.4042,46.17305,61.46239,46.15675,61.49032z"/><path fill="#039056" d="M45.69588,62.2794c0.01862-0.03026,0.05586-0.09078,0.07215-0.12103C45.75174,62.18861,45.7145,62.24914,45.69588,62.2794z"/><path fill="#039056" d="M45.46079,62.67509c0.02328-0.0419,0.07215-0.12336,0.09544-0.16526C45.53294,62.55173,45.48407,62.63319,45.46079,62.67509z"/><path fill="#039056" d="M45.04879,63.39433c0.01397-0.0256,0.04655-0.08147,0.06052-0.10707C45.09535,63.31286,45.06276,63.36873,45.04879,63.39433z"/><path fill="#039056" d="M44.80207,63.83426c0.01397-0.0256,0.04189-0.07449,0.05586-0.10009C44.84396,63.75977,44.81603,63.80865,44.80207,63.83426z"/><path fill="#039056" d="M44.54137,64.28349c0.0163-0.0256,0.04888-0.08147,0.06517-0.10707C44.59025,64.20203,44.55766,64.25789,44.54137,64.28349z"/><path fill="#039056" d="M44.07817,65.05859c0.0256-0.04189,0.07215-0.12569,0.09776-0.16526C44.15033,64.93291,44.10378,65.0167,44.07817,65.05859z"/><path fill="#039056" d="M43.87101,65.44266c0.0163-0.03026,0.05121-0.09543,0.06983-0.12801C43.92222,65.34723,43.88731,65.4124,43.87101,65.44266z"/><path fill="#039056" d="M43.55212,65.99664c0.01862-0.03491,0.06052-0.10475,0.07914-0.13966C43.61264,65.89189,43.57074,65.96172,43.55212,65.99664z"/><path fill="#039056" d="M43.47531,66.12931c0.01862-0.03259,0.05586-0.10009,0.07681-0.13268C43.53117,66.02922,43.49393,66.09673,43.47531,66.12931z"/></g><g id="_10985bff_1_"><path fill="#0D975B" d="M81.49966,1.77701c0.01862,0.03026,0.05354,0.09543,0.07216,0.12802C81.55319,1.87244,81.51828,1.80727,81.49966,1.77701z"/><path fill="#0D975B" d="M83.38971,5.06597c0.01163,0.01862,0.03026,0.05354,0.04189,0.06983C83.41996,5.1195,83.40134,5.08459,83.38971,5.06597z"/><path fill="#0D975B" d="M86.88349,11.12016c0.00932,0.01629,0.03027,0.04888,0.03957,0.0675C86.91376,11.16904,86.89281,11.13646,86.88349,11.12016z"/><path fill="#0D975B" d="M87.55618,12.25838c0.01862,0.03026,0.05354,0.09311,0.07216,0.12569C87.60972,12.35149,87.57481,12.28864,87.55618,12.25838z"/><path fill="#0D975B" d="M88.50819,13.91566c0.01456,0.02168,0.02777,0.04422,0.03957,0.0675C88.53596,13.95988,88.52274,13.93734,88.50819,13.91566z"/><path fill="#0D975B" d="M89.4276,15.51475c0.01862,0.03026,0.05354,0.09078,0.07216,0.12104C89.48114,15.60553,89.44623,15.54501,89.4276,15.51475z"/><path fill="#0D975B" d="M90.36565,17.13944c0.01862,0.03026,0.05354,0.09311,0.07216,0.12337C90.41918,17.23255,90.38427,17.1697,90.36565,17.13944z"/></g><g id="_f9c941ff_1_"><path fill="#FBCD48" d="M98.83757,35.61599c0.08997-0.40002,0.08002-0.78998,0.04999-1.19C98.92754,34.82601,98.92754,35.21597,98.83757,35.61599z"/><path fill="#F9C940" d="M119.55427,67.92625l0.12104,0.00465l0.0675,0.1769l-0.13734,0.00932L119.55427,67.92625z"/></g><g id="_e3b73aff_1_"><path fill="#E1B63A" d="M60.76503,37.64597c0.01862,0.03026,0.05586,0.0931,0.07449,0.12569C60.82089,37.73907,60.78365,37.67622,60.76503,37.64597z"/><path fill="#E1B63A" d="M61.19564,38.39314c0.0163,0.02793,0.04656,0.08147,0.06285,0.1094C61.2422,38.4746,61.21194,38.42107,61.19564,38.39314z"/><path fill="#E1B63A" d="M61.44936,38.8447c0.01163,0.01862,0.03259,0.05819,0.04422,0.07681C61.48194,38.90289,61.46099,38.86332,61.44936,38.8447z"/><path fill="#E1B63A" d="M61.72867,39.33118c0.02095,0.03491,0.06052,0.10474,0.08147,0.13966C61.78919,39.43592,61.74963,39.36609,61.72867,39.33118z"/><path fill="#E1B63A" d="M61.81014,39.47083c0.02095,0.03957,0.06517,0.11406,0.08845,0.15129C61.87531,39.58489,61.83109,39.51041,61.81014,39.47083z"/><path fill="#E1B63A" d="M62.11972,40.00154c0.01163,0.02095,0.03724,0.06285,0.04888,0.08379C62.15696,40.06438,62.13136,40.02249,62.11972,40.00154z"/><path fill="#E1B63A" d="M62.62714,40.87906c0.02095,0.03724,0.06052,0.1094,0.08147,0.14431C62.68766,40.98846,62.64809,40.9163,62.62714,40.87906z"/><path fill="#E1B63A" d="M63.06707,41.6402c0.02095,0.03491,0.06052,0.10009,0.07914,0.13268C63.12759,41.74028,63.08802,41.67511,63.06707,41.6402z"/><path fill="#E1B63A" d="M63.34639,42.11038c0.04655,0.07681,0.13733,0.22811,0.18388,0.30492C63.48372,42.33849,63.39294,42.18719,63.34639,42.11038z"/><path fill="#E1B63A" d="M63.59311,42.52703c0.01336,0.02713,0.02811,0.05355,0.04423,0.07914C63.62123,42.58058,63.60647,42.55416,63.59311,42.52703z"/><path fill="#E1B63A" d="M64.047,43.3417c0.04423,0.06052,0.13268,0.18621,0.1769,0.24906C64.17969,43.52792,64.09123,43.40222,64.047,43.3417z"/><path fill="#E1B63A" d="M64.28442,43.69783c0.00932,0.01862,0.03026,0.05819,0.04189,0.07681C64.31468,43.75602,64.29374,43.71645,64.28442,43.69783z"/><path fill="#E1B63A" d="M64.98038,44.95476c0.04423,0.06517,0.13035,0.19552,0.17458,0.26069C65.11074,45.15028,65.02461,45.01993,64.98038,44.95476z"/><path fill="#E1B63A" d="M65.21781,45.32486c0.00931,0.01862,0.03259,0.05819,0.04189,0.07681C65.2504,45.38305,65.22712,45.34348,65.21781,45.32486z"/><path fill="#E1B63A" d="M65.62747,46.0697c0.02094,0.03491,0.06052,0.10474,0.08147,0.13966C65.68799,46.17444,65.64842,46.10461,65.62747,46.0697z"/><path fill="#E1B63A" d="M65.85791,46.47238c0.02328,0.03957,0.06982,0.12337,0.09311,0.16294C65.92773,46.59575,65.88119,46.51195,65.85791,46.47238z"/><path fill="#E1B63A" d="M66.1442,46.97515c0.02328,0.0419,0.07216,0.12802,0.09544,0.16992C66.21637,47.10317,66.16749,47.01705,66.1442,46.97515z"/><path fill="#E1B63A" d="M66.23964,47.14507c0.02095,0.03491,0.06284,0.1094,0.08379,0.14664C66.30249,47.25447,66.26059,47.17999,66.23964,47.14507z"/><path fill="#E1B63A" d="M66.56086,47.69905c0.00931,0.01862,0.03026,0.05121,0.03957,0.0675C66.59112,47.75026,66.57017,47.71767,66.56086,47.69905z"/><path fill="#E1B63A" d="M66.82621,48.15527c0.01862,0.03259,0.05586,0.09544,0.07449,0.12802C66.88207,48.2507,66.84483,48.18785,66.82621,48.15527z"/><path fill="#E1B63A" d="M67.04268,48.52536c0.0256,0.0419,0.07449,0.12802,0.10009,0.16992C67.11716,48.65338,67.06828,48.56726,67.04268,48.52536z"/><path fill="#E1B63A" d="M67.54545,49.37495c0.03957,0.0675,0.12104,0.20018,0.16061,0.26768C67.66649,49.57513,67.58501,49.44245,67.54545,49.37495z"/><path fill="#E1B63A" d="M67.77356,49.7497c0.01163,0.02095,0.03491,0.05819,0.04655,0.07681C67.80848,49.80789,67.7852,49.77065,67.77356,49.7497z"/><path fill="#E1B63A" d="M68.23443,50.48058l0.0163,0.02328l0.01397,0.03026C68.25771,50.52015,68.24142,50.49454,68.23443,50.48058z"/><path fill="#E1B63A" d="M68.71626,51.43491c0.02095,0.03491,0.05819,0.10242,0.07914,0.13733C68.77444,51.53733,68.73721,51.46983,68.71626,51.43491z"/><path fill="#E1B63A" d="M68.79539,51.57224l0.0931,0.15828L68.79539,51.57224z"/><path fill="#E1B63A" d="M69.10963,52.10527c0.01163,0.02095,0.03491,0.06285,0.04888,0.0838C69.14454,52.16812,69.12126,52.12622,69.10963,52.10527z"/></g><g id="_e8b835ff_1_"><path fill="#E7B732" d="M110.89544,52.71977c0.01862,0.03026,0.05586,0.09543,0.07449,0.12569C110.9513,52.8152,110.91407,52.75003,110.89544,52.71977z"/><path fill="#E7B732" d="M111.34002,53.45531c0.01862,0.03026,0.05586,0.09311,0.07449,0.12336C111.39588,53.54841,111.35864,53.48556,111.34002,53.45531z"/><path fill="#E7B732" d="M111.60072,53.89756c0.01163,0.02095,0.03491,0.06517,0.04888,0.08612C111.63563,53.96273,111.61236,53.91851,111.60072,53.89756z"/><path fill="#E7B732" d="M111.88236,54.38869c0.02328,0.03957,0.0675,0.12103,0.09078,0.16061C111.94987,54.50973,111.90564,54.42826,111.88236,54.38869z"/><path fill="#E7B732" d="M111.97314,54.54929c0.02094,0.03492,0.06284,0.10707,0.08379,0.14431C112.03599,54.65637,111.99409,54.58421,111.97314,54.54929z"/><path fill="#E7B732" d="M112.28504,55.08931l0.03725,0.06517L112.28504,55.08931z"/><path fill="#E7B732" d="M112.5504,55.54552c0.00932,0.0163,0.02793,0.04655,0.03724,0.06284C112.57833,55.59208,112.55971,55.56182,112.5504,55.54552z"/><path fill="#E7B732" d="M112.81575,56.00407c0.02328,0.03957,0.0675,0.11638,0.09077,0.15596C112.88325,56.12045,112.83903,56.04364,112.81575,56.00407z"/><path fill="#E7B732" d="M112.90652,56.16003c0.02095,0.03957,0.06518,0.11638,0.08613,0.15363C112.9717,56.27641,112.92747,56.19959,112.90652,56.16003z"/><path fill="#E7B732" d="M113.22774,56.72797c0.03259,0.08147,0.09776,0.23975,0.13035,0.31889C113.3255,56.96772,113.26033,56.80944,113.22774,56.72797z"/><path fill="#E7B732" d="M113.42326,57.17487c0.02095,0.03491,0.06052,0.10242,0.08147,0.135l-0.05121-0.0675L113.42326,57.17487z"/><path fill="#E7B732" d="M113.64207,57.51704c0.04887,0.07681,0.14431,0.23043,0.19319,0.30725C113.78638,57.74748,113.69094,57.59385,113.64207,57.51704z"/><path fill="#E7B732" d="M113.83526,57.82429c0.02792,0.04655,0.08845,0.13966,0.11638,0.18621C113.92371,57.96395,113.86318,57.87084,113.83526,57.82429z"/><path fill="#E7B732" d="M114.10526,58.2549c0.04655,0.10475,0.13966,0.31656,0.18621,0.4213C114.24492,58.57146,114.15181,58.35964,114.10526,58.2549z"/><path fill="#E7B732" d="M114.36131,58.8019c0.01163,0.02095,0.03491,0.06052,0.04655,0.07914l-0.02095-0.03026L114.36131,58.8019z"/><path fill="#E7B732" d="M114.81519,59.48855c0.0256,0.0419,0.07681,0.12569,0.10474,0.16759C114.89201,59.61424,114.8408,59.53045,114.81519,59.48855z"/><path fill="#E7B732" d="M115.05959,59.8889c0.02095,0.03724,0.06284,0.1094,0.08379,0.14431C115.12244,59.9983,115.08054,59.92615,115.05959,59.8889z"/><path fill="#E7B732" d="M115.37848,60.44521l0.08379,0.14897L115.37848,60.44521z"/><path fill="#E7B732" d="M115.46227,60.59418c0.02095,0.03724,0.06284,0.1094,0.08379,0.14664C115.52512,60.70358,115.48322,60.63142,115.46227,60.59418z"/><path fill="#E7B732" d="M115.77884,61.13885c0.01258,0.02408,0.02657,0.04739,0.04189,0.06982C115.80541,61.18624,115.79142,61.16293,115.77884,61.13885z"/><path fill="#E7B732" d="M116.03255,61.5811c0.01397,0.02328,0.0419,0.07215,0.05586,0.09543C116.07445,61.65326,116.04652,61.60437,116.03255,61.5811z"/><path fill="#E7B732" d="M116.30256,62.05128c0.0256,0.0419,0.07449,0.12802,0.10008,0.16992C116.37704,62.1793,116.32816,62.09318,116.30256,62.05128z"/><path fill="#E7B732" d="M116.40264,62.22121c0.02095,0.03724,0.06518,0.11173,0.08612,0.14897C116.46782,62.33293,116.42359,62.25844,116.40264,62.22121z"/><path fill="#FBCD48" d="M119.55754,67.92599v-0.21002l-0.25-0.45996c-0.00995-0.02002-0.01996-0.04999-0.02997-0.07001l-0.23999-0.40002c-0.02002-0.03998-0.06-0.10999-0.09003-0.14996c-0.02002-0.05005-0.07001-0.12-0.08997-0.16003l-0.23004-0.39996c0-0.01001-0.01996-0.04004-0.02997-0.06l-0.22003-0.39001c-0.01001-0.01001-0.02997-0.04999-0.03998-0.06l-0.22998-0.40002c-0.03003-0.03998-0.07001-0.10999-0.09003-0.14996l-0.08002-0.15002l-0.23999-0.40997c-0.02997-0.04004-0.08002-0.13-0.10999-0.18005l-0.16003-0.22998c-0.03998-0.03998-0.10999-0.13-0.13995-0.16998c-0.03003-0.04999-0.08002-0.15002-0.11005-0.19l-0.10999-0.25c-0.01996-0.04004-0.06-0.14001-0.08997-0.19c-0.15002-0.29999-0.32001-0.59003-0.48999-0.88c-0.02002-0.03003-0.06006-0.10999-0.08002-0.14001c-0.03003-0.04999-0.08002-0.13-0.10999-0.16998l-0.21002-0.38c-0.01001-0.02002-0.03998-0.07001-0.06-0.09003l-0.21002-0.37994c-0.01001-0.02002-0.02997-0.04004-0.03998-0.07001l-0.22998-0.40002c-0.02002-0.02997-0.06-0.09998-0.09003-0.14001l-0.08002-0.14996l-0.22998-0.41003c-0.03003-0.03998-0.07001-0.10999-0.09003-0.14996l-0.13995-0.23004c-0.03003-0.03998-0.08002-0.13-0.10004-0.16998c-0.09998-0.15002-0.31-0.45001-0.40997-0.59998l-0.02002-0.04004l-0.02997-0.03998l-0.07001-0.13c-0.04004-0.09998-0.14001-0.32001-0.17999-0.41998l-0.16003-0.25c-0.02002-0.04004-0.08002-0.14001-0.10999-0.17999c-0.04999-0.08002-0.15002-0.23004-0.20001-0.31l-0.13-0.21002l-0.04999-0.06l-0.03003-0.07001l-0.06995-0.13c-0.03003-0.08002-0.10004-0.23999-0.13-0.32001l-0.23004-0.40997c-0.02997-0.04004-0.07001-0.12-0.08997-0.16003c-0.02002-0.03998-0.07001-0.10999-0.09003-0.14996l-0.22998-0.40002c-0.01001-0.01001-0.03003-0.03998-0.03998-0.06l-0.23004-0.39001l-0.02997-0.07001l-0.23004-0.38995c-0.01996-0.04004-0.06-0.11005-0.07996-0.15002c-0.03003-0.03998-0.07001-0.12-0.10004-0.15997l-0.22998-0.40002c-0.01001-0.02002-0.03998-0.07001-0.04999-0.09003l-0.17999-0.31995c-0.02002-0.03003-0.06-0.09003-0.08002-0.12c-0.09003-0.15002-0.27002-0.46002-0.37-0.61005c-0.02002-0.02997-0.04999-0.09998-0.07001-0.13c-4.02002-7.02997-8.09003-14.02997-12.14001-21.04999c-2.76996-4.79999-5.53998-9.59998-8.32001-14.39996c-0.01996-0.03003-0.04999-0.10004-0.07001-0.13c-0.28998-0.5-0.56995-1-0.87-1.5c-0.01996-0.03003-0.04999-0.09003-0.07001-0.12c-0.28998-0.51001-0.57996-1.03003-0.87994-1.53003c-0.01001-0.02997-0.02002-0.04999-0.04004-0.07001c-0.28998-0.51001-0.58997-1.02002-0.88-1.52997c-0.01996-0.03003-0.04999-0.10004-0.07001-0.13c-0.20996-0.36005-0.42999-0.71002-0.63-1.07001c-0.00995-0.02002-0.02997-0.04999-0.03998-0.07001c-1.14996-2-2.29999-3.98999-3.46002-5.97998c-0.00995-0.02002-0.02997-0.05005-0.03998-0.07001c-0.59998-1.06-1.21002-2.10999-1.82001-3.16003c-0.01001-0.02997-0.04999-0.09998-0.07001-0.13c-0.13-0.22998-0.25995-0.46997-0.38-0.70996c-6.25-0.08002-12.51996-0.01001-18.76996-0.03003c-7.56,0.01001-15.13-0.01996-22.69,0.01001l0.01001,0.12l0.00995,0.10004c0.47003,0.65997,0.90002,1.34998,1.27002,2.06995c6.47003,11.19,12.92999,22.39001,19.39001,33.59003c0.14001,0.23999,0.27997,0.47998,0.42999,0.71997c0.02002,0.03003,0.04999,0.09003,0.07001,0.13c0.08997,0.15002,0.27002,0.46002,0.35999,0.62c0.01001,0.03003,0.04004,0.08002,0.06,0.11005l0.19,0.33997c0.01001,0.02002,0.03003,0.06,0.04999,0.08002l0.23004,0.40997c0.01996,0.03003,0.06,0.10004,0.07996,0.13c0.02002,0.04004,0.07001,0.12,0.09003,0.16003l0.21997,0.38c0.01001,0.01996,0.04004,0.06,0.05005,0.07996c0.14996,0.26001,0.29999,0.53003,0.45996,0.79004c0.02002,0.03998,0.06,0.10999,0.08002,0.14996c0.09003,0.15002,0.27002,0.46002,0.35999,0.61005c0.02002,0.03998,0.06,0.09998,0.08002,0.13995l0.20001,0.33002c0.04999,0.08002,0.14001,0.22998,0.17999,0.31l0.07001,0.10999c0.01001,0.03003,0.01996,0.05005,0.03998,0.08002l0.41003,0.73999c0.03998,0.06,0.12994,0.17999,0.17999,0.23999l0.06,0.11005c0.01001,0.01996,0.02997,0.06,0.03998,0.07996c0.21002,0.40002,0.41998,0.79004,0.65002,1.18005c0.04999,0.06,0.13,0.18994,0.17999,0.25995l0.06,0.11005c0.01001,0.01996,0.02997,0.06,0.03998,0.07996c0.10004,0.16003,0.28003,0.5,0.37,0.66003c0.02002,0.03998,0.06,0.10999,0.08002,0.14001l0.15002,0.26996c0.01996,0.04004,0.06995,0.12,0.08997,0.16003l0.20001,0.33997c0.02002,0.04004,0.07001,0.13,0.09003,0.16998c0.01996,0.03003,0.06,0.11005,0.08997,0.15002l0.22998,0.40002c0.01001,0.01996,0.03003,0.04999,0.04004,0.07001l0.22998,0.38995c0.02002,0.03003,0.04999,0.09003,0.07001,0.13l0.15002,0.23999c0.01996,0.04004,0.06995,0.13,0.09998,0.17004c0.09998,0.16998,0.29999,0.51001,0.40002,0.67999c0.03998,0.07001,0.12,0.20001,0.15997,0.26996l0.07001,0.10004c0.01001,0.02002,0.02997,0.06,0.03998,0.08002c0.10999,0.15997,0.31,0.48999,0.42004,0.64996l0.00995,0.03003l0.02002,0.02997c0.13,0.31,0.28003,0.60999,0.45001,0.90002c0.02002,0.02997,0.06,0.09998,0.08002,0.14001l0.08997,0.14996l0.22003,0.38c0.00995,0.02002,0.03998,0.06,0.04999,0.08002l0.14996,0.27997c3,5.24005,6.08002,10.42999,9.04004,15.69l0.14996,0.01001c7.16003,0.03003,14.32001,0.01001,21.48004,0.01001c6.53998-0.03003,13.08997,0.09003,19.63-0.06L119.55754,67.92599z M98.83757,35.61599c0.08997-0.40002,0.08002-0.78998,0.04999-1.19C98.92754,34.82601,98.92754,35.21597,98.83757,35.61599z"/><path fill="#E7B732" d="M116.9799,63.24537c0.02328,0.04888,0.06982,0.14664,0.09077,0.19552C117.04973,63.39201,117.00317,63.29425,116.9799,63.24537z"/><path fill="#E7B732" d="M117.17774,63.68296c0.02793,0.04655,0.08379,0.14198,0.10941,0.18854C117.26154,63.82495,117.20568,63.72951,117.17774,63.68296z"/><path fill="#E7B732" d="M117.28715,63.8715c0.03491,0.04655,0.10242,0.135,0.13733,0.17923C117.38956,64.0065,117.32207,63.91805,117.28715,63.8715z"/><path fill="#E7B732" d="M117.58508,64.27884c0.02793,0.04423,0.08379,0.13268,0.11405,0.17923C117.66888,64.41151,117.61302,64.32307,117.58508,64.27884z"/><path fill="#E7B732" d="M117.93423,64.8654l0.08379,0.14897L117.93423,64.8654z"/><path fill="#E7B732" d="M118.01803,65.01437c0.02094,0.03725,0.06284,0.1094,0.08612,0.14664C118.08087,65.12376,118.03897,65.05161,118.01803,65.01437z"/><path fill="#E7B732" d="M118.33691,65.56136c0.00931,0.01862,0.02793,0.05121,0.03724,0.0675C118.36485,65.61257,118.34622,65.57999,118.33691,65.56136z"/><path fill="#E7B732" d="M118.59528,66.01526c0.00932,0.0163,0.02793,0.04655,0.03725,0.06284C118.62321,66.06181,118.60459,66.03156,118.59528,66.01526z"/><path fill="#E7B732" d="M118.8583,66.47147c0.02328,0.03957,0.06983,0.11871,0.09311,0.16061C118.92814,66.59019,118.88158,66.51105,118.8583,66.47147z"/><path fill="#E7B732" d="M118.95142,66.63208c0.02328,0.03957,0.06982,0.11871,0.09078,0.15828C119.02124,66.75079,118.97469,66.67165,118.95142,66.63208z"/><path fill="#E7B732" d="M119.27495,67.19071c0.00932,0.0163,0.0256,0.04888,0.03492,0.06518C119.30056,67.2396,119.28426,67.20701,119.27495,67.19071z"/><path fill="#E7B732" d="M119.55659,67.71677c0.03026,0.05354,0.08845,0.16061,0.11871,0.21414l-0.12104-0.00465L119.55659,67.71677z"/></g><g id="_296ad9ff_1_"><path fill="#406AB2" d="M21.59083,103.94883l0.10242-0.14897l-0.00698,0.1513L21.59083,103.94883z"/></g><g id="_2a71e9ff_1_"><path fill="#4587F4" d="M119.83714,68.13827v0.01015c-6.9095,11.93454-13.79877,23.87929-20.688,35.82397c-25.82446-0.01015-51.64893-0.02023-77.46326-0.02023l0.01008-0.15199c0.49648-1.09418,1.16512-2.09717,1.75274-3.15079c3.89035-6.74742,7.79091-13.48465,11.68126-20.23207c2.4011-4.09299,4.68062-8.25691,7.16278-12.29932c12.01561,0.04057,24.03128-0.07086,36.0469,0.04057l0.16207,0.01014c7.15263,0.03036,14.31541,0.01008,21.4782,0.01008c6.53465-0.0405,13.08952,0.09121,19.62416-0.06078l0.14185-0.01008L119.83714,68.13827z"/></g><g id="_286ee6ff_1_"><path fill="#446DB3" d="M38.60355,88.33035c0.03026-0.02793,0.08846-0.07914,0.11871-0.10474C38.69201,88.25121,38.63382,88.30242,38.60355,88.33035z"/><path fill="#446DB3" d="M38.3545,88.53053c0.06285-0.04887,0.18621-0.15129,0.24906-0.20017C38.54071,88.37923,38.41735,88.48165,38.3545,88.53053z"/><path fill="#446DB3" d="M38.23812,88.6283c0.03026-0.0256,0.08612-0.07216,0.11638-0.09777C38.32424,88.55614,38.26838,88.60269,38.23812,88.6283z"/><path fill="#446DB3" d="M35.58228,91.11654c0.02793-0.02328,0.08612-0.07215,0.11638-0.09776C35.6684,91.04439,35.61021,91.09326,35.58228,91.11654z"/><path fill="#446DB3" d="M35.46357,91.21431c0.03026-0.02328,0.08845-0.07216,0.11871-0.09777C35.55202,91.14215,35.49383,91.19102,35.46357,91.21431z"/></g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="31.98983" y1="85.95614" x2="61.3993" y2="102.9357"><stop  offset="0" style="stop-color:#336FD6"/><stop  offset="0.99705" style="stop-color:#508DF5;stop-opacity:0"/></linearGradient><polygon fill="url(#SVGID_1_)" points="42.29054,68.11479 60.80227,103.96977 21.69324,103.79986 "/></g></g></svg>\n',
    version: '5.2.0',
    description:
      'This connector allows you to create apps that leverage Google Drive cloud storage. Download and upload \nfiles, search files and folders, and enable users to share and collaborate on content. \n\n[Learn more](https://developer.fusebit.io/docs/google-drive)!\n',
    tags: {
      catalog: 'Storage,Office',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/google-drive#creating-your-own-google-drive-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          'google-driveIntegration': {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          googleConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/google-driveIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/googleConnector/properties/id',
            label: 'Google Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        googleConnector: {
          googleName: 'google-connector',
        },
      },
      entities: {
        googleConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'openid profile https://www.googleapis.com/auth/userinfo.email',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              extraParams: 'access_type=offline&prompt=consent',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-google-drive-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/google-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google',
          },
        },
        'google-driveIntegration': {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-google-drive-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Google Integration\n//\n// This simple Google integration allows you to call Google APIs on behalf of the tenants of your\n// application. Fusebit manages the Google authorization process and maps tenants of your application\n// to their Google credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'googleConnector';\n\n// The sample test endpoint of this integration gets the openid and email of the currently authenticated user.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Google client pre-configured with credentials necessary to communicate with your tenant's Google account.\n  // For the Google SDK documentation, see https://developers.google.com/apis-explorer.\n  const googleClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const files = await googleClient\n    .drive({\n      version: 'v3',\n    })\n    .files.list();\n\n  ctx.body = {\n    message: `Your drive contains ${files.data.files.length} files and folders.`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'googleConnector',
                skip: false,
                provider: '@fusebit-int/google-provider',
                entityId: '<% global.entities.googleConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google-drive',
          },
        },
      },
    },
  },
  {
    id: 'google-gmail-planned',
    name: 'Gmail',
    smallIcon:
      '<svg width="76" height="57" viewBox="0 0 76 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.18055 57H17.2685V27.6436L0 14.6922V51.8195C0 54.6817 2.3183 57 5.18055 57Z" fill="#4285F4"/>\n<path d="M58.7129 57H70.8009C73.6631 57 75.9814 54.6817 75.9814 51.8195V14.6922L58.7129 27.6436V57Z" fill="#34A853"/>\n<path d="M58.7129 5.19451V27.6436L75.9814 14.6922V7.78479C75.9814 1.38249 68.6725 -2.27412 63.5481 1.56813L58.7129 5.19451Z" fill="#FBBC04"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2686 27.6436V5.19449L37.9908 20.7361L58.713 5.19449V27.6436L37.9908 43.1852L17.2686 27.6436Z" fill="#EA4335"/>\n<path d="M0 7.78479V14.6922L17.2685 27.6436V5.19451L12.4333 1.56813C7.3089 -2.27412 0 1.38249 0 7.78479Z" fill="#C5221F"/>\n</svg>\n',
    largeIcon:
      '<svg width="76" height="57" viewBox="0 0 76 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.18055 57H17.2685V27.6436L0 14.6922V51.8195C0 54.6817 2.3183 57 5.18055 57Z" fill="#4285F4"/>\n<path d="M58.7129 57H70.8009C73.6631 57 75.9814 54.6817 75.9814 51.8195V14.6922L58.7129 27.6436V57Z" fill="#34A853"/>\n<path d="M58.7129 5.19451V27.6436L75.9814 14.6922V7.78479C75.9814 1.38249 68.6725 -2.27412 63.5481 1.56813L58.7129 5.19451Z" fill="#FBBC04"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2686 27.6436V5.19449L37.9908 20.7361L58.713 5.19449V27.6436L37.9908 43.1852L17.2686 27.6436Z" fill="#EA4335"/>\n<path d="M0 7.78479V14.6922L17.2685 27.6436V5.19451L12.4333 1.56813C7.3089 -2.27412 0 1.38249 0 7.78479Z" fill="#C5221F"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'This integration works in conjunction with the Google Calendar API to allow you to read conference \ndata associated with events, copy conference data from one event to another, and request new \nconference generation for an event, among other things.',
    outOfPlan: true,
    tags: {
      catalog: 'Email,Office',
    },
    configuration: {},
  },
  {
    id: 'google-meet-planned',
    name: 'Google Meet',
    smallIcon:
      '<svg width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M39.1875 28.5L45.9404 36.2188L55.0208 42.0217L56.6042 28.5515L55.0208 15.3782L45.7662 20.4765L39.1875 28.5Z" fill="#00832D"/>\n<path d="M0 40.7708V52.25C0 54.8743 2.12562 57 4.75 57H16.2292L18.6042 48.3233L16.2292 40.7708L8.35207 38.3958L0 40.7708Z" fill="#0066DA"/>\n<path d="M16.2292 0L0 16.2292L8.35207 18.6042L16.2292 16.2292L18.5646 8.77562L16.2292 0Z" fill="#E94235"/>\n<path d="M16.2292 16.2292H0V40.7708H16.2292V16.2292Z" fill="#2684FC"/>\n<path d="M65.3876 6.87167L55.0208 15.3781V42.0217L65.4312 50.5598C66.9908 51.7789 69.2708 50.6667 69.2708 48.6875V8.70833C69.2708 6.70146 66.9393 5.60104 65.3876 6.87167ZM39.1875 28.5V40.7708H16.2291V57H50.2708C52.8952 57 55.0208 54.8744 55.0208 52.25V42.0217L39.1875 28.5Z" fill="#00AC47"/>\n<path d="M50.2708 0H16.2291V16.2292H39.1875V28.5L55.0208 15.3781V4.75C55.0208 2.12562 52.8952 0 50.2708 0Z" fill="#FFBA00"/>\n</svg>\n',
    largeIcon:
      '<svg width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M39.1875 28.5L45.9404 36.2188L55.0208 42.0217L56.6042 28.5515L55.0208 15.3782L45.7662 20.4765L39.1875 28.5Z" fill="#00832D"/>\n<path d="M0 40.7708V52.25C0 54.8743 2.12562 57 4.75 57H16.2292L18.6042 48.3233L16.2292 40.7708L8.35207 38.3958L0 40.7708Z" fill="#0066DA"/>\n<path d="M16.2292 0L0 16.2292L8.35207 18.6042L16.2292 16.2292L18.5646 8.77562L16.2292 0Z" fill="#E94235"/>\n<path d="M16.2292 16.2292H0V40.7708H16.2292V16.2292Z" fill="#2684FC"/>\n<path d="M65.3876 6.87167L55.0208 15.3781V42.0217L65.4312 50.5598C66.9908 51.7789 69.2708 50.6667 69.2708 48.6875V8.70833C69.2708 6.70146 66.9393 5.60104 65.3876 6.87167ZM39.1875 28.5V40.7708H16.2291V57H50.2708C52.8952 57 55.0208 54.8744 55.0208 52.25V42.0217L39.1875 28.5Z" fill="#00AC47"/>\n<path d="M50.2708 0H16.2291V16.2292H39.1875V28.5L55.0208 15.3781V4.75C55.0208 2.12562 52.8952 0 50.2708 0Z" fill="#FFBA00"/>\n</svg>\n',
    version: '5.2.0',
    description:
      "This Integration enables you to connect to GitHub's source control, issue tracking, and CI/CD to build\nawesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull \nrequests, and team management functionality, among others. ",
    outOfPlan: true,
    tags: {
      catalog: 'Video Conferencing,Office',
    },
    configuration: {},
  },
  {
    id: 'google-sheets-addon',
    name: 'Google Sheets Add-On',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="88" viewBox="0 0 64 88" style="enable-background:new 0 0 64 88;">\n    <path fill="#0DC54C" d="M58,88H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36l22,22v60C64,85.3,61.3,88,58,88z"/>\n    <path fill="#08962D" d="M42,0l22,22H42V0z"/>\n    <path fill="#FDFFFF" d="M12,34.5v28h40v-28H12z M17,39.5h12.5V46H17V39.5z M17,51h12.5v6.5H17V51z M47,57.5H34.5V51H47V57.5z M47,46H34.5v-6.5H47V46z"/>\n</svg>\n',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="88" viewBox="0 0 64 88" style="enable-background:new 0 0 64 88;">\n    <path fill="#0DC54C" d="M58,88H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36l22,22v60C64,85.3,61.3,88,58,88z"/>\n    <path fill="#08962D" d="M42,0l22,22H42V0z"/>\n    <path fill="#FDFFFF" d="M12,34.5v28h40v-28H12z M17,39.5h12.5V46H17V39.5z M17,51h12.5v6.5H17V51z M47,57.5H34.5V51H47V57.5z M47,46H34.5v-6.5H47V46z"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'This is a Google Sheets Add-On that allows you to get external data into Google Sheets with Node.js, NPM, and Fusebit Connectors. You can add this functionality into a Google Sheets spreadsheet by searching for "Fusebit" in the \nExtensions | Add-ons | Get add-ons gallery in Google Sheets. \n\n[Learn more](https://developer.fusebit.io/docs/google-sheets-addon)!\n',
    tags: {
      catalog: 'Project Management,Dev Tools,Office,Spreadsheets,Operations,Sales Automation',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          customIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/customIntegration/properties/id',
            label: 'Name',
          },
        ],
      },
      data: {},
      entities: {
        customIntegration: {
          entityType: 'integration',
          data: {
            configuration: {
              apiKey: '<% global.query.apiKey %>',
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-google-sheets-add-on-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","superagent":"7.0.1"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "//////////////////////////////////////////////////////////////////////////////////////////\n// Develop custom Google Sheets functions as properties of googleSheetsFunctions object.\n// Use Node.js, any public NPM module, and Snippets to easily connect to external systems.\n// Documentation: https://developer.fusebit.io/docs/google-sheets-addon\n//////////////////////////////////////////////////////////////////////////////////////////\n\nconst Superagent = require('superagent');\n\nconst googleSheetsFunctions = {\n  /**\n   * The default Fusebit function that can be called with `=FUSEBIT(data)` from Google Sheets.\n   *\n   * @param context Fusebit request context\n   * @param {string|number|Array<Array<string|number>>} data A Google Sheets cell or cell range.\n   * @param {object} charts A map of a chart title to a base64 encoded PNG image of the chart.\n   * @returns A single value or a two-dimensional range of values\n   */\n  default: async (ctx, data, charts) => {\n    return 'Almost there! Go to Extensions | Fusebit | Open and click Edit to implement this function in Node.js';\n  },\n\n  /**\n   * Doubles a number or range of numbers.\n   * Call with `=FUSEBIT(data, \"double\")` from Google Sheets.\n   *\n   * @param context Fusebit request context\n   * @param {string|number|Array<Array<string|number>>} data A Google Sheets cell or cell range.\n   * @param {object} charts A map of a chart title to a base64 encoded PNG image of the chart.\n   * @returns A single value or a two-dimensional range of values\n   */\n  double: async (ctx, data, charts) => {\n    return Array.isArray(data) ? data.map((row) => row.map((cell) => cell * 2)) : data * 2;\n  },\n\n  /**\n   * Returns the number of new COVID-19 cases for a US state or range or states.\n   * Call with `=FUSEBIT(data, \"covidNewCasesByState\")` from Google Sheets.\n   *\n   * @param context Fusebit request context\n   * @param {string|number|Array<Array<string|number>>} data A Google Sheets cell or cell range with US state symbols.\n   * @param {object} charts A map of a chart title to a base64 encoded PNG image of the chart.\n   * @returns A single value or a two-dimensional range of values\n   */\n  covidNewCasesByState: async (ctx, data, charts) => {\n    const response = await Superagent.get(\n      'https://api.covidactnow.org/v2/states.json?apiKey=175f5ee1a558415fbe4ba2ecfd9a6ea1'\n    );\n    const states = {};\n    response.body.forEach((entry) => {\n      states[entry.state] = entry;\n    });\n    return Array.isArray(data)\n      ? data.map((row) => row.map((cell) => states[cell]?.actuals.newCases || 'N/A'))\n      : states[data]?.actuals.newCases || 'N/A';\n  },\n\n  /**\n   * Returns the weather forecast for the [ lat, long ] location in the US.\n   * Call with `=FUSEBIT(a1:b1, \"covidNewCasesByState\")` from Google Sheets.\n   *\n   * @param context Fusebit request context\n   * @param {string|number|Array<Array<string|number>>} data A range with one row and two cells with desired [lat,long]\n   * @param {object} charts A map of a chart title to a base64 encoded PNG image of the chart.\n   * @returns Weather forecast for the location\n   */\n  weather: async (ctx, data, charts) => {\n    if (!Array.isArray(data) || data.length !== 1 || data[0].length < 2) {\n      throw new Error(\"The 'weather' function requires a range with one row and two cells with lat and long as input\");\n    }\n    try {\n      const weatherUrl = `https://api.weather.gov/points/${data[0][0]},${data[0][1]}`;\n      let response = await Superagent.get(weatherUrl).set('User-Agent', 'fusebit-gsheets-addon');\n      const forecastUrl = response.body?.properties?.forecast;\n      response = await Superagent.get(forecastUrl).set('User-Agent', 'fusebit-gsheets-addon');\n      const forecast = response.body?.properties?.periods?.[0]?.detailedForecast;\n      return forecast;\n    } catch (e) {\n      throw new Error(`Error getting forecast for [ lat, long ] location ${data[0]}. Error: ${e.stack || e.message}`);\n    }\n  },\n};\n\n//////////////////////////////////////////////////////////////////////////////////////////\n// End of custom Google Sheets functions.\n// Boilerplate integration code follows - you will unlikely need to change it.\n//////////////////////////////////////////////////////////////////////////////////////////\n\nconst { Integration } = require('@fusebit-int/framework');\nconst integration = (module.exports = new Integration());\n\nconst authorize = async (ctx, next) => {\n  const expectedApiKey = ctx.state.manager.config.configuration.apiKey;\n  if (!expectedApiKey) {\n    return next();\n  }\n  const actualApiKey = ((ctx.req.headers['authorization'] || '').match(/^bearer\\s+(.+)$/i) || [])[1];\n  return expectedApiKey === actualApiKey ? next() : ctx.throw(403);\n};\n\nintegration.router.get('/api/function', async (ctx) => {\n  const data = Object.keys(googleSheetsFunctions);\n  const i = data.indexOf('default');\n  if (i >= 0) {\n    data[i] = '<default>';\n  }\n  ctx.body = { data: data.sort() };\n});\n\nintegration.router.post('/api/tenant/:tenantId/test', async (ctx) => {\n  ctx.body = { message: `Success!` };\n});\n\nintegration.router.post('/api/run', authorize, async (ctx) => {\n  console.log('RUNNING GOOGLE SHEETS FUNCTION', {\n    functionName: ctx.req.body?.functionName,\n    data: ctx.req.body?.data,\n    charts: Object.keys(ctx.req.body?.charts || {}),\n  });\n  try {\n    const functionName = ctx.req.body.functionName || 'default';\n    const f = googleSheetsFunctions[functionName];\n    if (typeof f !== 'function') {\n      throw new Error(\n        `Custom Fusebit function \"${functionName}\" does not exist. Available functions are: ${Object.keys(\n          googleSheetsFunctions\n        )\n          .sort()\n          .join(', ')}.`\n      );\n    }\n    const data = await f(ctx, ctx.req.body?.data, ctx.req.body?.charts || {});\n    console.log('RESULT', data);\n    ctx.body = { data };\n  } catch (e) {\n    console.log('ERROR', e.stack || e.message || e);\n    ctx.body = { error: e.stack || e.message || 'Unknown error' };\n  }\n});\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google Sheets Add-On',
          },
        },
      },
    },
  },
  {
    id: 'hubspot-crm-contacts',
    name: 'HubSpot Contacts sync',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 13.107 13.099" preserveAspectRatio="xMidYMid"><path d="M12.027 6.222a3.33 3.33 0 0 0-1.209-1.201c-.382-.222-.777-.363-1.223-.424V3a1.17 1.17 0 0 0 .722-1.097 1.2 1.2 0 0 0-1.2-1.206 1.21 1.21 0 0 0-1.21 1.206c0 .49.26.908.707 1.097v1.588a3.49 3.49 0 0 0-1.064.334L3.275 1.685c.03-.113.056-.23.056-.353 0-.738-.598-1.336-1.336-1.336S.66.594.66 1.332s.598 1.336 1.336 1.336c.252 0 .485-.074.686-.195l.28.212L6.797 5.45c-.203.186-.392.398-.543.636-.306.485-.493 1.018-.493 1.6v.12a3.35 3.35 0 0 0 .21 1.156c.116.316.286.604.497.864l-1.274 1.277c-.377-.14-.8-.047-1.085.238-.194.193-.303.456-.302.73s.108.535.303.73.456.303.73.303.537-.108.73-.303.303-.456.302-.73a1.03 1.03 0 0 0-.048-.31l1.316-1.316c.18.125.375.23.585.32a3.42 3.42 0 0 0 1.369.288h.09c.552 0 1.073-.13 1.562-.395a3.23 3.23 0 0 0 1.224-1.153c.307-.49.475-1.033.475-1.63v-.03c0-.587-.136-1.128-.42-1.624zM10.42 8.984c-.357.397-.768.642-1.232.642H9.1c-.265 0-.525-.073-.778-.207a1.8 1.8 0 0 1-.682-.621c-.184-.26-.284-.544-.284-.845v-.09c0-.296.057-.577.2-.842.153-.3.36-.515.635-.694s.558-.265.88-.265h.03c.29 0 .567.057.827.19a1.75 1.75 0 0 1 .65.591 1.88 1.88 0 0 1 .291.83l.007.187c0 .407-.156.784-.467 1.126z" fill="#f8761f"/></svg>',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 585.44 164.79"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#33475b;}.cls-4{clip-path:url(#clip-path-3);}.cls-5{fill:#ff7a59;}</style><clipPath id="clip-path" transform="translate(0 -1.17)"><rect class="cls-1" width="585.44" height="165.96"/></clipPath><clipPath id="clip-path-3" transform="translate(0 -1.17)"><rect class="cls-1" x="375.89" y="0.13" width="156.42" height="163.35"/></clipPath></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Outlines_-_Full_Color" data-name="Outlines - Full Color"><g class="cls-2"><polygon class="cls-3" points="63.4 26.3 63.4 73.11 20.41 73.11 20.41 26.3 0 26.3 0 138.04 20.41 138.04 20.41 92.75 63.4 92.75 63.4 138.04 83.81 138.04 83.81 26.3 63.4 26.3"/><g class="cls-2"><path class="cls-3" d="M149.13,103.09a16.88,16.88,0,0,1-33.77,0V55.23H96v47.86a36.21,36.21,0,0,0,72.42,0V55.23H149.13Z" transform="translate(0 -1.17)"/><path class="cls-3" d="M292.57,60.16c0-9.81,6.49-12.92,13.6-12.92,5.73,0,13.3,4.36,18.25,9.65L337.1,41.95c-6.33-8.56-19.17-14.48-29.68-14.48-21,0-36.19,12.3-36.19,32.69,0,37.83,46.24,25.83,46.24,47,0,6.53-6.34,12.3-13.6,12.3-11.45,0-15.16-5.6-20.42-11.52l-14.07,14.63c9,11.05,20.1,16.66,33.4,16.66,19.95,0,36-12.45,36-31.91,0-42-46.24-28.95-46.24-47.16" transform="translate(0 -1.17)"/><path class="cls-3" d="M578.63,121.36c-11.44,0-14.69-4.95-14.69-12.53V75.28h17.78v-17H563.94V35.85l-19.63,8.81V113c0,17.48,12.06,26.29,28.6,26.29a39.62,39.62,0,0,0,7.74-.62l4.79-17.63c-2.16.15-4.64.3-6.81.3" transform="translate(0 -1.17)"/><path class="cls-3" d="M222.82,55.79c-9.59,0-16.28,2.78-22.75,9.13V28.14H180.68V96.31c0,25.52,18.45,43,39.18,43,23,0,43.23-17.79,43.23-41.75,0-23.66-18.62-41.76-40.27-41.76m-.12,64a22,22,0,1,1,22-22,22,22,0,0,1-22,22" transform="translate(0 -1.17)"/><path class="cls-3" d="M433.36,96.54c0-24-20.19-41.75-43.23-41.75-20.73,0-39.18,17.48-39.18,43V166h19.39V129.17c6.46,6.34,13.16,9.13,22.74,9.13,21.65,0,40.27-18.09,40.27-41.76M415,96.3a22,22,0,1,1-22-22,22,22,0,0,1,22,22" transform="translate(0 -1.17)"/></g><g class="cls-4"><path class="cls-5" d="M495.81,54.48V35.2a14.84,14.84,0,0,0,8.56-13.38v-.45A14.87,14.87,0,0,0,489.54,6.54h-.45a14.87,14.87,0,0,0-14.83,14.83v.45a14.84,14.84,0,0,0,8.56,13.38V54.48a42.06,42.06,0,0,0-20,8.8L409.88,22.09a16.55,16.55,0,0,0,.6-4.17,16.73,16.73,0,1,0-16.75,16.71A16.55,16.55,0,0,0,402,32.38L454.05,72.9a42.18,42.18,0,0,0,.65,47.56L438.86,136.3a13.61,13.61,0,0,0-3.93-.64,13.75,13.75,0,1,0,13.75,13.75,13.53,13.53,0,0,0-.64-3.93l15.67-15.67a42.25,42.25,0,1,0,32.1-75.33m-6.49,63.42A21.68,21.68,0,1,1,511,96.22a21.68,21.68,0,0,1-21.68,21.68" transform="translate(0 -1.17)"/></g></g></g></g></svg>',
    version: '5.2.0',
    description:
      "Integrating with HubSpot is easy with Fusebit! This example lets you list Contacts in your customer's HubSpot instance.\n\n[Learn more](https://developer.fusebit.io/docs/hubspot)!\n",
    tags: {
      catalog: 'CRM',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/hubspot#creating-your-own-hubspot-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: true,
        terms: {
          postSuccess: 'Your Contact was successfully added to Hubspot',
          postFail: "Oops! Something went wrong and we couldn't add your Contact",
          getFail: "Oops! Something went wrong and we couldn't retrieve your Contacts",
          itemName: 'Contact',
          properties: [
            {
              name: 'firstName',
              label: 'First Name',
            },
            {
              name: 'email',
              label: 'Email',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          hubspotIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          hubspotConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/hubspotIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/hubspotConnector/properties/id',
            label: 'HubSpot Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        hubspotConnector: {
          hubspotName: 'hubspot-connector',
        },
      },
      entities: {
        hubspotConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'contacts',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-hubspot-crm-contacts-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/hubspot-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/hubspot-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'HubSpot',
          },
        },
        hubspotIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-hubspot-crm-contacts-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/hubspot-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit HubSpot Integration\n//\n// This simple HubSpot integration allows you to call HubSpot APIs on behalf of the tenants of your\n// application. Fusebit manages the HubSpot authorization process and maps tenants of your application\n// to their HubSpot credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'hubspotConnector';\n\n// The sample test endpoint of this integration gets all contacts stored in the HubSpot account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a HubSpot client pre-configured with credentials necessary to communicate with your tenant's HubSpot account.\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const contacts = await hubspotClient.crm.contacts.getAll();\n\n  ctx.body = `Successfully loaded ${contacts.length} Contacts from HubSpot`;\n});\n\n// Add a new contact to HubSpot\n// Note: This endpoint is also used by the sample app\nrouter.post('/api/tenant/:tenantId/item', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const hubspotClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const newContact = { properties: { email: `${ctx.req.body.email}`, firstname: `${ctx.req.body.firstName}` } };\n\n  const addContact = await hubspotClient.crm.contacts.basicApi.create(newContact);\n});\n\n// Retrieve contact email address and first names from HubSpot\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const hubspotClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const contacts = await hubspotClient.crm.contacts.getAll();\n\n  const contactsList = contacts.map((contact) => ({\n    email: contact.properties.email,\n    firstName: contact.properties.firstname,\n  }));\n\n  ctx.body = contactsList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'hubspotConnector',
                skip: false,
                provider: '@fusebit-int/hubspot-provider',
                entityId: '<% global.entities.hubspotConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'HubSpot',
          },
        },
      },
    },
  },
  {
    id: 'intercom-planned',
    name: 'Intercom',
    smallIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M49.4001 31.3384C49.3947 31.8388 49.1921 32.3168 48.8364 32.6687C48.4806 33.0206 48.0004 33.218 47.5 33.218C46.9996 33.218 46.5195 33.0206 46.1637 32.6687C45.808 32.3168 45.6054 31.8388 45.6 31.3384V14.25C45.6054 13.7496 45.808 13.2716 46.1637 12.9197C46.5195 12.5678 46.9996 12.3704 47.5 12.3704C48.0004 12.3704 48.4806 12.5678 48.8364 12.9197C49.1921 13.2716 49.3947 13.7496 49.4001 14.25V31.3384ZM48.737 43.2312C48.4433 43.4825 41.4049 49.3887 28.5 49.3887C15.5953 49.3887 8.55712 43.4823 8.26344 43.2309C7.88091 42.9029 7.64432 42.4364 7.6057 41.934C7.56707 41.4315 7.72958 40.9343 8.05748 40.5517C8.38468 40.1697 8.85005 39.9331 9.3515 39.8937C9.85294 39.8544 10.3495 40.0156 10.7323 40.342C10.8438 40.4355 17.1289 45.5884 28.5002 45.5884C40.0142 45.5884 46.2021 40.3983 46.2633 40.346C47.0584 39.6631 48.2601 39.7548 48.9425 40.5519C49.2705 40.9345 49.4331 41.4317 49.3946 41.9341C49.3561 42.4366 49.1195 42.9031 48.737 43.2312V43.2312ZM7.59993 14.25C7.60534 13.7496 7.80791 13.2716 8.16365 12.9197C8.51938 12.5678 8.99958 12.3704 9.49996 12.3704C10.0004 12.3704 10.4805 12.5678 10.8363 12.9197C11.192 13.2716 11.3946 13.7496 11.4 14.25V31.3384C11.3946 31.8388 11.192 32.3168 10.8363 32.6687C10.4805 33.0206 10.0004 33.218 9.49996 33.218C8.99958 33.218 8.51938 33.0206 8.16365 32.6687C7.80791 32.3168 7.60534 31.8388 7.59993 31.3384V14.25ZM17.1002 10.4499C17.1079 9.95107 17.3114 9.47523 17.6669 9.12516C18.0223 8.77509 18.5012 8.57887 19.0001 8.57887C19.4991 8.57887 19.978 8.77509 20.3334 9.12516C20.6889 9.47523 20.8924 9.95107 20.9001 10.4499V35.833C20.8924 36.3318 20.6889 36.8077 20.3334 37.1577C19.978 37.5078 19.4991 37.704 19.0001 37.704C18.5012 37.704 18.0223 37.5078 17.6669 37.1577C17.3114 36.8077 17.1079 36.3318 17.1002 35.833V10.4501V10.4499ZM26.6001 9.4885C26.6 9.23899 26.6492 8.99191 26.7446 8.76139C26.8401 8.53087 26.9801 8.32141 27.1565 8.14498C27.3329 7.96855 27.5424 7.8286 27.7729 7.73313C28.0034 7.63766 28.2505 7.58854 28.5 7.58857C28.7495 7.58851 28.9966 7.63761 29.2272 7.73307C29.4577 7.82853 29.6672 7.96847 29.8437 8.1449C30.0201 8.32134 30.1601 8.5308 30.2556 8.76134C30.351 8.99188 30.4002 9.23897 30.4001 9.4885V37.0384C30.3947 37.5388 30.1922 38.0168 29.8364 38.3687C29.4807 38.7206 29.0005 38.918 28.5001 38.918C27.9997 38.918 27.5195 38.7206 27.1638 38.3687C26.8081 38.0168 26.6055 37.5388 26.6001 37.0384V9.4885V9.4885ZM36.1001 10.4499C36.1078 9.95107 36.3113 9.47523 36.6668 9.12516C37.0223 8.77509 37.5012 8.57887 38.0001 8.57887C38.499 8.57887 38.9779 8.77509 39.3334 9.12516C39.6888 9.47523 39.8924 9.95107 39.9 10.4499V35.833C39.8924 36.3318 39.6888 36.8077 39.3334 37.1577C38.9779 37.5078 38.499 37.704 38.0001 37.704C37.5012 37.704 37.0223 37.5078 36.6668 37.1577C36.3113 36.8077 36.1078 36.3318 36.1001 35.833V10.4501V10.4499ZM49.875 0H7.125C3.19 0 0 3.19 0 7.125V49.875C0 53.8098 3.19 57 7.125 57H49.875C53.81 57 57 53.8098 57 49.875V7.125C57 3.19 53.81 0 49.875 0Z" fill="#1F8DED"/>\n</svg>\n',
    largeIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M49.4001 31.3384C49.3947 31.8388 49.1921 32.3168 48.8364 32.6687C48.4806 33.0206 48.0004 33.218 47.5 33.218C46.9996 33.218 46.5195 33.0206 46.1637 32.6687C45.808 32.3168 45.6054 31.8388 45.6 31.3384V14.25C45.6054 13.7496 45.808 13.2716 46.1637 12.9197C46.5195 12.5678 46.9996 12.3704 47.5 12.3704C48.0004 12.3704 48.4806 12.5678 48.8364 12.9197C49.1921 13.2716 49.3947 13.7496 49.4001 14.25V31.3384ZM48.737 43.2312C48.4433 43.4825 41.4049 49.3887 28.5 49.3887C15.5953 49.3887 8.55712 43.4823 8.26344 43.2309C7.88091 42.9029 7.64432 42.4364 7.6057 41.934C7.56707 41.4315 7.72958 40.9343 8.05748 40.5517C8.38468 40.1697 8.85005 39.9331 9.3515 39.8937C9.85294 39.8544 10.3495 40.0156 10.7323 40.342C10.8438 40.4355 17.1289 45.5884 28.5002 45.5884C40.0142 45.5884 46.2021 40.3983 46.2633 40.346C47.0584 39.6631 48.2601 39.7548 48.9425 40.5519C49.2705 40.9345 49.4331 41.4317 49.3946 41.9341C49.3561 42.4366 49.1195 42.9031 48.737 43.2312V43.2312ZM7.59993 14.25C7.60534 13.7496 7.80791 13.2716 8.16365 12.9197C8.51938 12.5678 8.99958 12.3704 9.49996 12.3704C10.0004 12.3704 10.4805 12.5678 10.8363 12.9197C11.192 13.2716 11.3946 13.7496 11.4 14.25V31.3384C11.3946 31.8388 11.192 32.3168 10.8363 32.6687C10.4805 33.0206 10.0004 33.218 9.49996 33.218C8.99958 33.218 8.51938 33.0206 8.16365 32.6687C7.80791 32.3168 7.60534 31.8388 7.59993 31.3384V14.25ZM17.1002 10.4499C17.1079 9.95107 17.3114 9.47523 17.6669 9.12516C18.0223 8.77509 18.5012 8.57887 19.0001 8.57887C19.4991 8.57887 19.978 8.77509 20.3334 9.12516C20.6889 9.47523 20.8924 9.95107 20.9001 10.4499V35.833C20.8924 36.3318 20.6889 36.8077 20.3334 37.1577C19.978 37.5078 19.4991 37.704 19.0001 37.704C18.5012 37.704 18.0223 37.5078 17.6669 37.1577C17.3114 36.8077 17.1079 36.3318 17.1002 35.833V10.4501V10.4499ZM26.6001 9.4885C26.6 9.23899 26.6492 8.99191 26.7446 8.76139C26.8401 8.53087 26.9801 8.32141 27.1565 8.14498C27.3329 7.96855 27.5424 7.8286 27.7729 7.73313C28.0034 7.63766 28.2505 7.58854 28.5 7.58857C28.7495 7.58851 28.9966 7.63761 29.2272 7.73307C29.4577 7.82853 29.6672 7.96847 29.8437 8.1449C30.0201 8.32134 30.1601 8.5308 30.2556 8.76134C30.351 8.99188 30.4002 9.23897 30.4001 9.4885V37.0384C30.3947 37.5388 30.1922 38.0168 29.8364 38.3687C29.4807 38.7206 29.0005 38.918 28.5001 38.918C27.9997 38.918 27.5195 38.7206 27.1638 38.3687C26.8081 38.0168 26.6055 37.5388 26.6001 37.0384V9.4885V9.4885ZM36.1001 10.4499C36.1078 9.95107 36.3113 9.47523 36.6668 9.12516C37.0223 8.77509 37.5012 8.57887 38.0001 8.57887C38.499 8.57887 38.9779 8.77509 39.3334 9.12516C39.6888 9.47523 39.8924 9.95107 39.9 10.4499V35.833C39.8924 36.3318 39.6888 36.8077 39.3334 37.1577C38.9779 37.5078 38.499 37.704 38.0001 37.704C37.5012 37.704 37.0223 37.5078 36.6668 37.1577C36.3113 36.8077 36.1078 36.3318 36.1001 35.833V10.4501V10.4499ZM49.875 0H7.125C3.19 0 0 3.19 0 7.125V49.875C0 53.8098 3.19 57 7.125 57H49.875C53.81 57 57 53.8098 57 49.875V7.125C57 3.19 53.81 0 49.875 0Z" fill="#1F8DED"/>\n</svg>\n',
    version: '5.2.0',
    description:
      "Use our Intercom Integration to retrieve and update information from your own Intercom account, or to integrate Intercom into your own product. It's completely up to you and your custom use case.",
    outOfPlan: true,
    tags: {
      catalog: 'Messaging,Support',
    },
    configuration: {},
  },
  {
    id: 'jira',
    name: 'Atlassian Jira',
    smallIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M54.6187 0H27.1704C27.1704 3.2862 28.4758 6.4378 30.7995 8.76149C33.1232 11.0852 36.2748 12.3906 39.561 12.3906H44.6173V17.2722C44.6217 24.1092 50.163 29.6505 57 29.6549V2.38128C57 1.06614 55.9338 0 54.6187 0Z" fill="#2684FF"/> <path d="M41.0375 13.6765H13.5892C13.5936 20.5135 19.135 26.0548 25.9719 26.0592H31.0282V30.9567C31.0369 37.7936 36.5818 43.3314 43.4188 43.3314V16.0578C43.4188 14.7427 42.3526 13.6765 41.0375 13.6765Z" fill="url(#paint0_linear_251_365)"/> <path d="M27.4483 27.3451H0C0 34.1882 5.54747 39.7357 12.3906 39.7357H17.4627V44.6173C17.4671 51.4481 22.9988 56.9869 29.8296 57V29.7264C29.8296 28.4112 28.7634 27.3451 27.4483 27.3451Z" fill="url(#paint1_linear_251_365)"/> <defs> <linearGradient id="paint0_linear_251_365" x1="42.8314" y1="13.7241" x2="31.2262" y2="25.8336" gradientUnits="userSpaceOnUse"> <stop offset="0.18" stop-color="#0052CC"/> <stop offset="1" stop-color="#2684FF"/> </linearGradient> <linearGradient id="paint1_linear_251_365" x1="30.028" y1="27.48" x2="16.6036" y2="40.6876" gradientUnits="userSpaceOnUse"> <stop offset="0.18" stop-color="#0052CC"/> <stop offset="1" stop-color="#2684FF"/> </linearGradient> </defs> </svg>\n',
    largeIcon:
      '<svg width="76" height="32" viewBox="0 0 76 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="logo-gradient-blue-jira">\n<g clip-path="url(#clip0)">\n<path d="M0 0H76V32H0V0Z" fill="white" fill-opacity="0.01"/>\n<g id="Jira">\n<path d="M38.8963 6.13371H41.7283V20.1309C41.7283 23.8217 40.0434 26.3983 36.1359 26.3983C34.6661 26.3983 33.5189 26.1546 32.7302 25.876V23.195C33.5906 23.5432 34.6302 23.7173 35.6698 23.7173C38.0717 23.7173 38.8963 22.3245 38.8963 20.305V6.13371Z" fill="#253858"/>\n<path d="M46.9266 5.05432C48.0379 5.05432 48.8266 5.71588 48.8266 6.89972C48.8266 8.04875 48.0379 8.74513 46.9266 8.74513C45.8152 8.74513 45.0266 8.08357 45.0266 6.89972C45.0266 5.7507 45.8152 5.05432 46.9266 5.05432ZM45.5285 10.9387H48.253V26.2591H45.5285V10.9387Z" fill="#253858"/>\n<path d="M54.9924 26.2591H52.3395V10.9387H54.9924V13.6198C55.9244 11.8092 57.5018 10.5209 60.5848 10.695V13.2716C57.1075 12.9234 54.9924 13.9331 54.9924 17.2061V26.2591Z" fill="#253858"/>\n<path d="M73.3112 23.5084C72.3075 25.5279 70.4075 26.5724 67.9697 26.5724C63.7754 26.5724 61.6603 23.1254 61.6603 18.5989C61.6603 14.2813 63.8829 10.6254 68.2924 10.6254C70.5867 10.6254 72.3792 11.6351 73.3112 13.6198V10.9387H76.0358V26.2591H73.3112V23.5084ZM68.6867 24.1351C71.1245 24.1351 73.2754 22.6379 73.2754 19.2256V18.007C73.2754 14.5947 71.3037 13.0975 68.9735 13.0975C65.9263 13.0975 64.349 15.0474 64.349 18.5989C64.3848 22.2897 65.8905 24.1351 68.6867 24.1351Z" fill="#253858"/>\n</g>\n<g id="Icon">\n<path id="Vector" d="M24.664 3H12.2603C12.2603 5.99443 14.7697 8.43176 17.8527 8.43176H20.147V10.5557C20.147 13.5501 22.6565 15.9875 25.7395 15.9875V4.04457C25.7395 3.45265 25.2735 3 24.664 3Z" fill="#2684FF"/>\n<path id="Vector_2" d="M18.5339 8.98877H6.13013C6.13013 11.9832 8.63956 14.4205 11.7226 14.4205H14.0169V16.5793C14.0169 19.5737 16.5264 22.0111 19.6094 22.0111V10.0333C19.6094 9.47623 19.1433 8.98877 18.5339 8.98877Z" fill="url(#paint0_linear)"/>\n<path id="Vector_3" d="M12.4038 15.0125H0C0 18.0069 2.50943 20.4442 5.59245 20.4442H7.88679V22.5682C7.88679 25.5626 10.3962 27.9999 13.4792 27.9999V16.057C13.4792 15.4651 12.9774 15.0125 12.4038 15.0125Z" fill="url(#paint1_linear)"/>\n</g>\n</g>\n</g>\n<defs>\n<linearGradient id="paint0_linear" x1="19.3455" y1="9.01882" x2="14.2302" y2="14.45" gradientUnits="userSpaceOnUse">\n<stop offset="0.176" stop-color="#0052CC"/>\n<stop offset="1" stop-color="#2684FF"/>\n</linearGradient>\n<linearGradient id="paint1_linear" x1="13.5601" y1="15.0525" x2="7.63562" y2="20.9874" gradientUnits="userSpaceOnUse">\n<stop offset="0.176" stop-color="#0052CC"/>\n<stop offset="1" stop-color="#2684FF"/>\n</linearGradient>\n<clipPath id="clip0">\n<path d="M0 0H76V32H0V0Z" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with Jira is easy with Fusebit! This example lets you list the accessible resources in your customer's Jira account.\n\n[Learn more](https://developer.fusebit.io/docs/jira)!\n",
    tags: {
      catalog: 'Project Management,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/jira#creating-your-own-jira-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: "Oops! Something went wrong and we couldn't retrieve your issues from Jira",
          itemName: 'Issue',
          properties: [
            {
              name: 'issueKey',
              label: 'Issue Key',
            },
            {
              name: 'issueSummary',
              label: 'Issue Summary',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          jiraIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          jiraConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/jiraIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/jiraConnector/properties/id',
            label: 'Atlassian Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        jiraConnector: {
          jiraName: 'jira-connector',
        },
      },
      entities: {
        jiraConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read:jira-user read:jira-work manage:jira-webhook read:me',
              audience: 'api.atlassian.com',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-jira-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/atlassian-connector":"7.41.2","@fusebit-int/framework":"7.41.2"}}',
            },
            handler: '@fusebit-int/atlassian-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Atlassian Jira',
          },
        },
        jiraIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-jira-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/atlassian-provider":"7.41.2","@fusebit-int/framework":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Atlassian Jira Integration\n//\n// This simple Atlassian integration allows you to call Atlassian APIs on behalf of the tenants of your\n// application. Fusebit manages the Atlassian authorization process and maps tenants of your application\n// to their Atlassian credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'atlassianConnector';\n\n// The sample test endpoint of this integration gets all available Atlassian resources for your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create an Atlassian client pre-configured with credentials necessary to communicate with your tenant's\n  // Jira account.\n  //\n  // For the Atlassian SDK documentation, see https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/.\n  const atlassianClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const resources = await atlassianClient.getAccessibleResources('jira');\n  if (resources.length === 0) {\n    ctx.throw(404, 'No Matching Account found in Atlassian');\n  }\n  const jiraCloud = resources[0];\n  const jira = atlassianClient.jira(jiraCloud.id);\n\n  const result = await jira.get('/search');\n\n  ctx.body = {\n    message: `Found ${result.total} issues in Jira Cloud ${resources[0].id}`,\n  };\n});\n\n// Retrieve Issue IDs and Summaries from Jira\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const atlassianClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const resources = await atlassianClient.getAccessibleResources('jira');\n  if (resources.length === 0) {\n    ctx.throw(404, 'No Matching Account found in Atlassian');\n  }\n  const jiraCloud = resources[0];\n  const jira = atlassianClient.jira(jiraCloud.id);\n\n  const jiraIssues = await jira.get('/search?maxResults=15');\n\n  const issuesList = jiraIssues.issues.map((issues) => ({\n    issueKey: issues.key,\n    issueSummary: issues.fields.summary,\n  }));\n\n  ctx.body = issuesList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'atlassianConnector',
                skip: false,
                provider: '@fusebit-int/atlassian-provider',
                entityId: '<% global.entities.jiraConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Atlassian Jira',
          },
        },
      },
    },
  },
  {
    id: 'linear',
    name: 'Linear',
    smallIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    largeIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    version: '5.2.0',
    description:
      'Linear streamlines software projects, sprints, tasks, and bug tracking. This integration lets you \naccess the full Linear API, including issues, labels, projects, teams, and users. \n\n[Learn more](https://developer.fusebit.io/docs/linear)!\n',
    tags: {
      catalog: 'Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/linear#creating-your-own-linear-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: "Oops! Something went wrong and we couldn't retrieve your issues from Linear",
          itemName: 'Issue',
          properties: [
            {
              name: 'issueTitle',
              label: 'Title',
            },
            {
              name: 'issueDescription',
              label: 'Description',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          linearIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          linearConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/linearIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/linearConnector/properties/id',
            label: 'Linear Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        linearConnector: {
          linearName: 'linear-connector',
        },
      },
      entities: {
        linearConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read write',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linear-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linear-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/linear-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
        linearIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linear-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linear-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Linear Integration\n//\n// This simple Linear integration allows you to call Linear APIs on behalf of the tenants of your\n// application. Fusebit manages the Linear authorization process and maps tenants of your application\n// to their Linear credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'linearConnector';\n\n// The sample test endpoint of this integration gets all contacts stored in the Linear account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Linear client pre-configured with credentials necessary to communicate with your tenant's Linear account.\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started.\n  const linearClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  // List all the Linear issues assigned to me.\n  const me = await linearClient.viewer;\n  const myIssues = await me.assignedIssues();\n  if (!myIssues.nodes.length) {\n    ctx.body = {\n      message: 'You have no issues!',\n    };\n    return;\n  } else {\n    ctx.body = {\n      message: 'You have issues:',\n    };\n    myIssues.nodes.map((issue) => {\n      ctx.body.message += `\\n > ${issue.title}`;\n    });\n    return;\n  }\n});\n\n// Retrieve Issue Title and Issue Description from Linear\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const linearClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const issues = await linearClient.issues();\n\n  const issuesList = issues.nodes.map((issue) => ({\n    issueTitle: issue.title,\n    issueDescription: issue.description,\n  }));\n\n  ctx.body = issuesList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'linearConnector',
                skip: false,
                provider: '@fusebit-int/linear-provider',
                entityId: '<% global.entities.linearConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
      },
    },
  },
  {
    id: 'linear-form',
    name: 'Linear-form',
    smallIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    largeIcon:
      '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;margin-right:12px"><path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" fill="#5E6AD2"></path><path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" fill="#5E6AD2"></path><path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" fill="#5E6AD2"></path><path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" fill="#5E6AD2"></path></svg>\n\n',
    version: '5.2.0',
    private: true,
    description:
      "Integrating with Linear-form is easy with Fusebit! This example lets you list Contacts in your customer's Linear-form instance.\n\n[Learn more](https://developer.fusebit.io/docs/linear-form)!\n",
    tags: {
      catalog: 'Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/linear-form#creating-your-own-linear-form-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          linearIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          linearConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/linearIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/linearConnector/properties/id',
            label: 'Linear Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        linearConnector: {
          linearName: 'linear-connector',
        },
      },
      entities: {
        linearConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read write',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linear-form-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linear-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/linear-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
        linearIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linear-form-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linear-provider":"7.41.2","@linear/sdk":"^1.21.0","superagent":"6.1.0"},"files":["./integration.js","README.md","schema.json","uiSchema.json"]}',
              './integration.js':
                "// Fusebit Linear Integration\n//\n// This simple Linear integration allows you to call Linear APIs on behalf of the tenants of your\n// application. Fusebit manages the Linear authorization process and maps tenants of your application\n// to their Linear credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\nconst superagent = require('superagent');\nconst client = require('@linear/sdk');\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst schema = require('./schema.json');\nconst uiSchema = require('./uiSchema.json');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'linearConnector';\n\nconst getTenantInstalls = async (ctx, tenantId) => {\n  const response = await superagent\n    .get(`${ctx.state.params.baseUrl}/install?tag=fusebit.tenantId%3D${encodeURIComponent(tenantId)}`)\n    .set('Authorization', `Bearer ${ctx.state.params.functionAccessToken}`);\n  const body = response.body;\n  if (body.items.length === 0) {\n    ctx.throw(404, `Cannot find an Integration Install associated with tenant ${tenantId}`);\n  }\n\n  if (body.items.length > 1) {\n    ctx.throw(400, `Too many Integration Installs found with tenant ${tenantId}`);\n  }\n\n  return body.items;\n};\n\n// The sample test endpoint of this integration gets all contacts stored in the Linear account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Linear client pre-configured with credentials necessary to communicate with your tenant's Linear account.\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started.\n  const linearClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  // List all the Linear issues assigned to me.\n  const install = await getTenantInstalls(ctx, ctx.params.tenantId);\n  const teamName = install[0].data.form['team-name'];\n  const teams = await linearClient.teams();\n  let correctTeam;\n  teams.nodes.forEach((team) => {\n    if (team.name === teamName) {\n      correctTeam = team;\n    }\n  });\n  let issues = await correctTeam.issues();\n  if (!issues.nodes.length) {\n    ctx.body = {\n      message: 'Your team have no issues!',\n    };\n    return;\n  } else {\n    ctx.body = {\n      message: `Your team have ${issues.nodes.length} issues.`,\n    };\n    return;\n  }\n});\n\nrouter.get('/api/form', async (ctx) => {\n  let resp = await superagent\n    .get(`${ctx.state.params.baseUrl}/session/${ctx.query.session}`)\n    .set('Authorization', `Bearer ${ctx.state.params.functionAccessToken}`);\n  const connectorUrl = ctx.state.params.baseUrl.split('/');\n  connectorUrl.pop();\n  connectorUrl.pop();\n  connectorUrl.push('connector');\n  connectorUrl.push(resp.body.dependsOn.linearConnector.parentEntityId);\n  let resp2 = await superagent\n    .get(`${connectorUrl.join('/')}/api/session/${resp.body.dependsOn.linearConnector.entityId}/token`)\n    .set('Authorization', `Bearer ${ctx.state.params.functionAccessToken}`);\n\n  const linearSdk = new client.LinearClient({ accessToken: resp2.body.access_token });\n  const teams = await linearSdk.teams();\n  let teamNames = [];\n  teams.nodes.forEach((team) => teamNames.push(team.name));\n  schema.properties['team-name'].enum = teamNames;\n  const [form, contentType] = integration.response.createJsonForm({\n    schema,\n    uiSchema,\n    dialogTitle: 'Choose Your Team',\n    submitUrl: 'form/submitted',\n    state: {\n      session: ctx.query.session,\n    },\n  });\n  ctx.body = form;\n  ctx.header['Content-Type'] = contentType;\n});\n\nrouter.post('/api/form/submitted', async (ctx) => {\n  const pl = JSON.parse(ctx.req.body.payload);\n  await superagent\n    .put(`${ctx.state.params.baseUrl}/session/${pl.state.session}`)\n    .set('Authorization', `Bearer ${ctx.state.params.functionAccessToken}`)\n    .send({ output: pl.payload });\n  return ctx.redirect(`${ctx.state.params.baseUrl}/session/${pl.state.session}/callback`);\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
              'schema.json':
                '{\n  "type": "object",\n  "properties": {\n    "team-name": {\n      "type": "string",\n      "enum": []\n    }\n  }\n}\n',
              'uiSchema.json':
                '{\n  "type": "VerticalLayout",\n  "elements": [\n    {\n      "type": "HorizontalLayout",\n      "elements": [\n        {\n          "type": "Control",\n          "scope": "#/properties/team-name"\n        }\n      ]\n    }\n  ]\n}\n',
            },
            handler: './integration',
            components: [
              {
                name: 'linearConnector',
                skip: false,
                provider: '@fusebit-int/linear-provider',
                entityId: '<% global.entities.linearConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
              {
                name: 'form',
                path: '/api/form',
                skip: false,
                entityId: '<% this.id %>',
                dependsOn: ['linearConnector'],
                entityType: 'integration',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
      },
    },
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#2489be"/><stop offset="1" stop-color="#0575b3"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"/></svg>',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="662" viewBox="1.786 1.783 287.865 76.248"><path d="M213.882 7.245c0-3.015 2.508-5.462 5.6-5.462h64.568c3.093 0 5.6 2.447 5.6 5.462V72.57c0 3.016-2.507 5.461-5.6 5.461h-64.568c-3.092 0-5.6-2.445-5.6-5.46V7.244z" fill="#069"/><path d="M1.785 65.652h31.62V55.27H13.23V15.665H1.785v49.987zM49.414 65.652v-34.43H37.97v34.43h11.444zm-5.721-39.13c3.99 0 6.474-2.644 6.474-5.95-.074-3.378-2.484-5.947-6.398-5.947-3.915 0-6.475 2.57-6.475 5.947 0 3.306 2.484 5.95 6.324 5.95h.075zM54.727 65.652h11.444V46.424c0-1.029.074-2.058.377-2.791.826-2.056 2.709-4.186 5.871-4.186 4.142 0 5.799 3.158 5.799 7.784v18.42H89.66V45.91c0-10.576-5.646-15.497-13.176-15.497-6.173 0-8.884 3.451-10.39 5.802h.077v-4.993H54.727c.151 3.231 0 34.43 0 34.43zM105.805 15.665H94.361v49.987h11.444V54.489l2.86-3.601 8.96 14.764h14.078l-15.056-21.373 13.174-14.54h-13.776s-9.411 13.008-10.24 14.552V15.665z"/><path d="M162.306 51.29c.151-.884.377-2.58.377-4.498 0-8.9-4.518-17.936-16.413-17.936-12.724 0-18.597 10.063-18.597 19.19 0 11.288 7.153 18.337 19.65 18.337 4.97 0 9.561-.732 13.327-2.275l-1.506-7.558c-3.088 1.024-6.25 1.537-10.164 1.537-5.345 0-10.012-2.195-10.389-6.871l23.715.072v.002zm-23.79-7.742c.301-2.938 2.26-7.273 7.153-7.273 5.194 0 6.4 4.628 6.4 7.273h-13.552zM190.93 15.665v17.304h-.151c-1.657-2.422-5.12-4.038-9.71-4.038-8.81 0-16.564 7.05-16.49 19.094 0 11.164 7.003 18.435 15.735 18.435 4.744 0 9.26-2.058 11.52-6.024h.225l.453 5.216h10.163c-.15-2.424-.302-6.61-.302-10.723V15.664h-11.444zm0 34.05c0 .88-.075 1.763-.227 2.495-.675 3.16-3.386 5.361-6.699 5.361-4.742 0-7.83-3.818-7.83-9.84 0-5.654 2.637-10.208 7.906-10.208 3.538 0 6.022 2.423 6.7 5.433.15.663.15 1.398.15 2.058v4.7z"/><path d="M236.85 65.61V31.18h-11.444v34.43h11.445zm-5.72-39.13c3.99 0 6.474-2.644 6.474-5.948-.075-3.379-2.484-5.949-6.398-5.949-3.917 0-6.475 2.57-6.475 5.949 0 3.304 2.483 5.948 6.324 5.948h.074zM243.184 65.61h11.443V46.385c0-1.028.075-2.058.377-2.792.827-2.057 2.71-4.186 5.872-4.186 4.14 0 5.797 3.157 5.797 7.786V65.61h11.443V45.869c0-10.575-5.645-15.496-13.174-15.496-6.173 0-8.884 3.45-10.39 5.8h.076v-4.992h-11.443c.149 3.23-.001 34.43-.001 34.43z" fill="#fff"/></svg>',
    version: '5.2.0',
    description:
      "Integrating with LinkedIn is easy with Fusebit! This example lets you get the lite profile information in your customer's LinkedIn account.\n\n[Learn more](https://developer.fusebit.io/docs/linkedin)!\n",
    tags: {
      catalog: 'Community,Social',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/linkedin#creating-your-own-linkedin-app',
      sampleConfig: {
        isEnabled: false,
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          linkedinIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          linkedinConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/linkedinIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/linkedinConnector/properties/id',
            label: 'LinkedIn Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        linkedinConnector: {
          linkedinName: 'linkedin-connector',
        },
      },
      entities: {
        linkedinConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'r_liteprofile r_emailaddress',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linkedin-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linkedin-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/linkedin-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'LinkedIn',
          },
        },
        linkedinIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-linkedin-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/linkedin-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit LinkedIn Integration\n//\n// This simple LinkedIn integration allows you to call LinkedIn APIs on behalf of the tenants of your\n// application. Fusebit manages the LinkedIn authorization process and maps tenants of your application\n// to their LinkedIn credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'linkedinConnector';\n\n// The sample test endpoint of this integration gets lite profile user information from a LinkedIn account associated with your tenant.\n// Read more at https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/lite-profile\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a LinkedIn client pre-configured with credentials necessary to communicate with your tenant's LinkedIn account.\n  // For the LinkedIn SDK documentation, see https://developer.linkedin.com/.\n  const linkedInClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const { id, localizedLastName, localizedFirstName } = await linkedInClient.get('me');\n\n  ctx.body = {\n    message: `The user with id ${id} is ${localizedFirstName} ${localizedLastName} on LinkedIn`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'linkedinConnector',
                skip: false,
                provider: '@fusebit-int/linkedin-provider',
                entityId: '<% global.entities.linkedinConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'LinkedIn',
          },
        },
      },
    },
  },
  {
    id: 'microsoft-excel-planned',
    name: 'Microsoft Excel',
    smallIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279178)">\n<path d="M38.4856 27.075L14.2539 22.8V54.388C14.2539 55.8306 15.4237 57 16.8667 57H58.6792C60.1222 57 61.292 55.8306 61.292 54.388V42.75L38.4856 27.075Z" fill="#185C37"/>\n<path d="M38.4856 0H16.8667C15.4237 0 14.2539 1.16944 14.2539 2.61202V14.25L38.4856 28.5L51.3142 32.775L61.292 28.5V14.25L38.4856 0Z" fill="#21A366"/>\n<path d="M14.2539 14.25H38.4856V28.5H14.2539V14.25Z" fill="#107C41"/>\n<path opacity="0.1" d="M31.5967 11.4H14.2539V47.025H31.5967C33.0377 47.0203 34.2048 45.8536 34.2094 44.4129V14.012C34.2048 12.5714 33.0377 11.4046 31.5967 11.4Z" fill="black"/>\n<path opacity="0.2" d="M30.1713 12.825H14.2539V48.45H30.1713C31.6123 48.4453 32.7794 47.2786 32.784 45.838V15.437C32.7794 13.9964 31.6123 12.8297 30.1713 12.825Z" fill="black"/>\n<path opacity="0.2" d="M30.1713 12.825H14.2539V45.6H30.1713C31.6123 45.5953 32.7794 44.4286 32.784 42.988V15.437C32.7794 13.9964 31.6123 12.8297 30.1713 12.825Z" fill="black"/>\n<path opacity="0.2" d="M28.7459 12.825H14.2539V45.6H28.7459C30.1869 45.5953 31.354 44.4286 31.3587 42.988V15.437C31.354 13.9964 30.1869 12.8297 28.7459 12.825Z" fill="black"/>\n<path d="M2.61274 12.825H28.7459C30.1889 12.825 31.3587 13.9944 31.3587 15.437V41.5629C31.3587 43.0055 30.1889 44.175 28.7459 44.175H2.61274C1.16976 44.175 0 43.0055 0 41.563V15.437C0 13.9944 1.16976 12.825 2.61274 12.825Z" fill="url(#paint0_linear_1279178)"/>\n<path d="M8.09192 36.9902L13.5882 28.4758L8.55233 20.0084H12.6033L15.3515 25.4234C15.6052 25.9378 15.7791 26.3197 15.8732 26.5719H15.9088C16.0893 26.1615 16.2794 25.763 16.4789 25.3764L19.4167 20.0113H23.1355L17.9713 28.4288L23.2667 36.9901H19.3098L16.1354 31.0465C15.9859 30.7936 15.859 30.528 15.7563 30.2528H15.7093C15.6163 30.5224 15.4929 30.7805 15.3415 31.0223L12.0731 36.9902H8.09192Z" fill="white"/>\n<path d="M58.6793 0H38.4857V14.25H61.292V2.61202C61.292 1.16944 60.1223 0 58.6793 0Z" fill="#33C481"/>\n<path d="M38.4857 28.5H61.292V42.75H38.4857V28.5Z" fill="#107C41"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279178" x1="5.44764" y1="10.784" x2="25.9026" y2="46.2209" gradientUnits="userSpaceOnUse">\n<stop stop-color="#18884F"/>\n<stop offset="0.5" stop-color="#117E43"/>\n<stop offset="1" stop-color="#0B6631"/>\n</linearGradient>\n<clipPath id="clip0_1279178">\n<rect width="61.292" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279178)">\n<path d="M38.4856 27.075L14.2539 22.8V54.388C14.2539 55.8306 15.4237 57 16.8667 57H58.6792C60.1222 57 61.292 55.8306 61.292 54.388V42.75L38.4856 27.075Z" fill="#185C37"/>\n<path d="M38.4856 0H16.8667C15.4237 0 14.2539 1.16944 14.2539 2.61202V14.25L38.4856 28.5L51.3142 32.775L61.292 28.5V14.25L38.4856 0Z" fill="#21A366"/>\n<path d="M14.2539 14.25H38.4856V28.5H14.2539V14.25Z" fill="#107C41"/>\n<path opacity="0.1" d="M31.5967 11.4H14.2539V47.025H31.5967C33.0377 47.0203 34.2048 45.8536 34.2094 44.4129V14.012C34.2048 12.5714 33.0377 11.4046 31.5967 11.4Z" fill="black"/>\n<path opacity="0.2" d="M30.1713 12.825H14.2539V48.45H30.1713C31.6123 48.4453 32.7794 47.2786 32.784 45.838V15.437C32.7794 13.9964 31.6123 12.8297 30.1713 12.825Z" fill="black"/>\n<path opacity="0.2" d="M30.1713 12.825H14.2539V45.6H30.1713C31.6123 45.5953 32.7794 44.4286 32.784 42.988V15.437C32.7794 13.9964 31.6123 12.8297 30.1713 12.825Z" fill="black"/>\n<path opacity="0.2" d="M28.7459 12.825H14.2539V45.6H28.7459C30.1869 45.5953 31.354 44.4286 31.3587 42.988V15.437C31.354 13.9964 30.1869 12.8297 28.7459 12.825Z" fill="black"/>\n<path d="M2.61274 12.825H28.7459C30.1889 12.825 31.3587 13.9944 31.3587 15.437V41.5629C31.3587 43.0055 30.1889 44.175 28.7459 44.175H2.61274C1.16976 44.175 0 43.0055 0 41.563V15.437C0 13.9944 1.16976 12.825 2.61274 12.825Z" fill="url(#paint0_linear_1279178)"/>\n<path d="M8.09192 36.9902L13.5882 28.4758L8.55233 20.0084H12.6033L15.3515 25.4234C15.6052 25.9378 15.7791 26.3197 15.8732 26.5719H15.9088C16.0893 26.1615 16.2794 25.763 16.4789 25.3764L19.4167 20.0113H23.1355L17.9713 28.4288L23.2667 36.9901H19.3098L16.1354 31.0465C15.9859 30.7936 15.859 30.528 15.7563 30.2528H15.7093C15.6163 30.5224 15.4929 30.7805 15.3415 31.0223L12.0731 36.9902H8.09192Z" fill="white"/>\n<path d="M58.6793 0H38.4857V14.25H61.292V2.61202C61.292 1.16944 60.1223 0 58.6793 0Z" fill="#33C481"/>\n<path d="M38.4857 28.5H61.292V42.75H38.4857V28.5Z" fill="#107C41"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279178" x1="5.44764" y1="10.784" x2="25.9026" y2="46.2209" gradientUnits="userSpaceOnUse">\n<stop stop-color="#18884F"/>\n<stop offset="0.5" stop-color="#117E43"/>\n<stop offset="1" stop-color="#0B6631"/>\n</linearGradient>\n<clipPath id="clip0_1279178">\n<rect width="61.292" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      'This Integration allows users to read and modify Excel workbooks, and easily work with objects\nsuch as tables, ranges, and charts. ',
    outOfPlan: true,
    tags: {
      catalog: 'Spreadsheets,Office',
    },
    configuration: {},
  },
  {
    id: 'microsoft-onedrive-planned',
    name: 'Microsoft OneDrive',
    smallIcon:
      '<svg width="89" height="57" viewBox="0 0 89 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279223)">\n<path d="M53.7498 38.4655L72.114 20.9034C68.2994 6.02923 53.1491 -2.93637 38.2749 0.87824C31.5766 2.59604 25.7588 6.74838 21.957 12.5246C22.2413 12.5175 53.7498 38.4655 53.7498 38.4655Z" fill="#0364B8"/>\n<path d="M33.9256 15.8308L33.9247 15.8339C30.4157 13.6605 26.3688 12.5117 22.2412 12.5174C22.1458 12.5174 22.0521 12.5234 21.9569 12.5245C9.67941 12.6766 -0.150278 22.7528 0.00173973 35.0304C0.0568462 39.484 1.44842 43.8183 3.99601 47.4716L31.5085 44.0258L52.6018 27.0175L33.9256 15.8308Z" fill="#0078D4"/>\n<path d="M72.114 20.9035C71.7103 20.8765 71.3046 20.8579 70.8942 20.8579C68.4305 20.8555 65.9925 21.3587 63.7312 22.3364L63.7307 22.3345L52.6019 27.0176L64.8706 42.1724L86.8038 47.5041C91.537 38.7171 88.2507 27.7569 79.4638 23.0237C77.1933 21.8007 74.6872 21.0778 72.1141 20.9036V20.9035H72.114Z" fill="#1490DF"/>\n<path d="M3.99597 47.4717C8.15012 53.4443 14.966 57.0038 22.2412 57H70.894C77.5401 57.0019 83.6506 53.3549 86.8036 47.5043L52.6017 27.0176L3.99597 47.4717Z" fill="#28A8EA"/>\n</g>\n<defs>\n<clipPath id="clip0_1279223">\n<rect width="88.9685" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="89" height="57" viewBox="0 0 89 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279223)">\n<path d="M53.7498 38.4655L72.114 20.9034C68.2994 6.02923 53.1491 -2.93637 38.2749 0.87824C31.5766 2.59604 25.7588 6.74838 21.957 12.5246C22.2413 12.5175 53.7498 38.4655 53.7498 38.4655Z" fill="#0364B8"/>\n<path d="M33.9256 15.8308L33.9247 15.8339C30.4157 13.6605 26.3688 12.5117 22.2412 12.5174C22.1458 12.5174 22.0521 12.5234 21.9569 12.5245C9.67941 12.6766 -0.150278 22.7528 0.00173973 35.0304C0.0568462 39.484 1.44842 43.8183 3.99601 47.4716L31.5085 44.0258L52.6018 27.0175L33.9256 15.8308Z" fill="#0078D4"/>\n<path d="M72.114 20.9035C71.7103 20.8765 71.3046 20.8579 70.8942 20.8579C68.4305 20.8555 65.9925 21.3587 63.7312 22.3364L63.7307 22.3345L52.6019 27.0176L64.8706 42.1724L86.8038 47.5041C91.537 38.7171 88.2507 27.7569 79.4638 23.0237C77.1933 21.8007 74.6872 21.0778 72.1141 20.9036V20.9035H72.114Z" fill="#1490DF"/>\n<path d="M3.99597 47.4717C8.15012 53.4443 14.966 57.0038 22.2412 57H70.894C77.5401 57.0019 83.6506 53.3549 86.8036 47.5043L52.6017 27.0176L3.99597 47.4717Z" fill="#28A8EA"/>\n</g>\n<defs>\n<clipPath id="clip0_1279223">\n<rect width="88.9685" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      'This Integration allows you to build a variety of experiences with files stored in OneDrive, from \nsimply storing user documents to complex file-sharing scenarios.',
    outOfPlan: true,
    tags: {
      catalog: 'Storage,Office',
    },
    configuration: {},
  },
  {
    id: 'microsoft-outlook-planned',
    name: 'Microsoft Outlook',
    smallIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279153)">\n<path d="M61.275 29.925C61.2784 29.4459 61.0308 28.9999 60.6224 28.7494H60.6152L60.5896 28.7351L39.3571 16.1666C39.2654 16.1047 39.1702 16.0481 39.0721 15.9971C38.2523 15.5741 37.2784 15.5741 36.4586 15.9971C36.3604 16.0481 36.2653 16.1047 36.1736 16.1666L14.9411 28.7351L14.9155 28.7494C14.2666 29.1529 14.0676 30.0061 14.4712 30.6551C14.5901 30.8463 14.7538 31.0056 14.9483 31.1191L36.1808 43.6876C36.2728 43.7491 36.3679 43.8057 36.4658 43.8572C37.2856 44.2802 38.2594 44.2802 39.0793 43.8572C39.1771 43.8057 39.2722 43.7491 39.3643 43.6876L60.5968 31.1191C61.0209 30.8718 61.2799 30.416 61.275 29.925Z" fill="#0A2767"/>\n<path d="M17.4163 21.5332H31.3499V34.3054H17.4163V21.5332ZM58.425 8.54999V2.70749C58.4584 1.24673 57.3022 0.0350031 55.8415 0H19.6835C18.2227 0.0350031 17.0665 1.24673 17.1 2.70749V8.54999L38.475 14.25L58.425 8.54999Z" fill="#0364B8"/>\n<path d="M17.1 8.54999H31.35V21.375H17.1V8.54999Z" fill="#0078D4"/>\n<path d="M45.6 8.54999H31.35V21.375L45.6 34.2H58.4249V21.375L45.6 8.54999Z" fill="#28A8EA"/>\n<path d="M31.35 21.375H45.5999V34.2H31.35V21.375Z" fill="#0078D4"/>\n<path d="M31.35 34.2H45.5999V47.0249H31.35V34.2Z" fill="#0364B8"/>\n<path d="M17.4163 34.3054H31.35V45.9163H17.4163V34.3054Z" fill="#14447D"/>\n<path d="M45.6 34.2H58.425V47.0249H45.6V34.2Z" fill="#0078D4"/>\n<path d="M60.6223 31.0407L60.5952 31.055L39.3628 42.9964C39.2701 43.0534 39.1761 43.1076 39.0777 43.156C38.7171 43.3278 38.3254 43.4247 37.9263 43.441L36.7664 42.7627C36.6684 42.7135 36.5732 42.6588 36.4814 42.5989L14.9639 30.3183H14.9539L14.25 29.925V54.0986C14.261 55.7114 15.5769 57.0101 17.1898 56.9999H58.3808C58.405 56.9999 58.4264 56.9885 58.452 56.9885C58.7927 56.9667 59.1285 56.8966 59.4495 56.7804C59.5882 56.7217 59.7221 56.6521 59.8499 56.5724C59.9454 56.5182 60.1093 56.4 60.1093 56.4C60.8393 55.8598 61.2713 55.0067 61.2749 54.0986V29.925C61.2745 30.3873 61.0251 30.8137 60.6223 31.0407Z" fill="url(#paint0_linear_1279153)"/>\n<path opacity="0.5" d="M60.1349 29.8295V31.3115L37.9334 46.5974L14.9482 30.3282C14.9482 30.3204 14.9418 30.314 14.9339 30.314L12.825 29.0457V27.977L13.6942 27.9627L15.5324 29.0172L15.5752 29.0315L15.7319 29.1312C15.7319 29.1312 37.3349 41.4575 37.3919 41.486L38.2184 41.9704C38.2896 41.9419 38.3609 41.9134 38.4464 41.8849C38.4891 41.8564 59.8926 29.8152 59.8926 29.8152L60.1349 29.8295Z" fill="#0A2767"/>\n<path d="M60.6223 31.0407L60.5952 31.0564L39.3627 42.9979C39.2701 43.0549 39.1761 43.109 39.0777 43.1575C38.2531 43.5603 37.2888 43.5603 36.4642 43.1575C36.3666 43.1091 36.2715 43.0558 36.1792 42.9979L14.9468 31.0564L14.9212 31.0407C14.5113 30.8185 14.2542 30.3912 14.25 29.925V54.0986C14.2602 55.7112 15.5757 57.0101 17.1882 57C17.1883 57 17.1883 57 17.1884 57H58.3366C59.9492 57.0102 61.2647 55.7113 61.275 54.0988C61.275 54.0987 61.275 54.0987 61.275 54.0986V29.925C61.2744 30.3873 61.025 30.8137 60.6223 31.0407Z" fill="#1490DF"/>\n<path opacity="0.1" d="M39.6719 42.8212L39.3541 42.9993C39.262 43.058 39.1669 43.1117 39.0691 43.1604C38.719 43.3322 38.3383 43.4329 37.9491 43.4567L46.0274 53.0099L60.1192 56.4057C60.5054 56.114 60.8125 55.7305 61.0127 55.2899L39.6719 42.8212Z" fill="black"/>\n<path opacity="0.05" d="M41.1112 42.0118L39.3541 42.9993C39.262 43.058 39.1669 43.1117 39.0691 43.1604C38.719 43.3322 38.3383 43.4329 37.9491 43.4567L41.7339 53.892L60.1235 56.4014C60.848 55.8575 61.2744 55.0046 61.2749 54.0986V53.7865L41.1112 42.0118Z" fill="black"/>\n<path d="M17.2282 57H58.3323C58.9648 57.0032 59.5817 56.8034 60.0922 56.43L36.765 42.7657C36.6669 42.7165 36.5718 42.6618 36.4799 42.6018L14.9625 30.3211H14.9525L14.25 29.925V54.016C14.2484 55.6625 15.5818 56.9984 17.2282 57C17.2282 57 17.2282 57 17.2282 57Z" fill="#28A8EA"/>\n<path opacity="0.1" d="M34.2 14.012V44.4072C34.1974 45.4729 33.5495 46.4308 32.5612 46.8298C32.2551 46.9613 31.9254 47.0292 31.5922 47.0293H14.25V12.825H17.1V11.4H31.5923C33.0318 11.4054 34.1969 12.5724 34.2 14.012Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.437V45.8321C32.7786 46.1764 32.7057 46.5171 32.5613 46.8296C32.1656 47.8051 31.22 48.445 30.1673 48.4498H14.25V12.825H30.1673C30.5808 12.8208 30.9883 12.924 31.35 13.1242C32.2236 13.5643 32.7747 14.4589 32.7751 15.437Z" fill="black"/>\n<path opacity="0.2" d="M32.775 15.437V42.9822C32.768 44.4212 31.6062 45.5875 30.1673 45.5999H14.25V12.825H30.1672C30.5807 12.8208 30.9882 12.924 31.35 13.1242C32.2235 13.5643 32.7747 14.4589 32.775 15.437Z" fill="black"/>\n<path opacity="0.2" d="M31.35 15.437V42.9822C31.3485 44.4234 30.1835 45.5929 28.7423 45.5999H14.25V12.825H28.7423C30.1833 12.8258 31.3508 13.9946 31.35 15.4356C31.35 15.4361 31.35 15.4365 31.35 15.437Z" fill="black"/>\n<path d="M2.61202 12.825H28.738C30.1806 12.825 31.35 13.9944 31.35 15.437V41.5629C31.35 43.0055 30.1806 44.1749 28.738 44.1749H2.61202C1.16943 44.1749 0 43.0055 0 41.5629V15.437C0 13.9944 1.16946 12.825 2.61202 12.825Z" fill="url(#paint1_linear_1279153)"/>\n<path d="M8.16379 23.7804C8.80757 22.4088 9.84668 21.2609 11.1478 20.4844C12.5886 19.6594 14.2291 19.2482 15.8887 19.2959C17.4269 19.2625 18.9447 19.6525 20.2763 20.4231C21.5283 21.1697 22.5367 22.2637 23.179 23.5723C23.8785 25.0143 24.2272 26.6012 24.1965 28.2036C24.2304 29.8782 23.8717 31.5375 23.1491 33.0486C22.4915 34.404 21.4511 35.537 20.1566 36.3076C18.7736 37.1018 17.1995 37.502 15.6052 37.4647C14.0341 37.5026 12.4829 37.1082 11.1207 36.3247C9.85783 35.577 8.83682 34.4818 8.17949 33.1697C7.47581 31.7486 7.12304 30.1795 7.15064 28.594C7.12133 26.9336 7.46768 25.2881 8.16379 23.7804ZM11.3444 31.5181C11.6876 32.3853 12.2697 33.1373 13.023 33.687C13.7904 34.2233 14.7092 34.5 15.645 34.4764C16.6417 34.5159 17.6241 34.2298 18.4437 33.6613C19.1875 33.1134 19.7543 32.3593 20.0739 31.4925C20.4312 30.5244 20.6075 29.499 20.594 28.4672C20.6051 27.4256 20.4393 26.3896 20.1038 25.4035C19.8075 24.5131 19.259 23.728 18.5249 23.1434C17.7258 22.5481 16.7461 22.2461 15.7505 22.2884C14.7943 22.2636 13.8549 22.5425 13.0672 23.085C12.3011 23.637 11.708 24.3957 11.3572 25.2723C10.579 27.2818 10.575 29.5087 11.3458 31.521L11.3444 31.5181Z" fill="white"/>\n<path d="M45.6 8.54999H58.425V21.375H45.6V8.54999Z" fill="#50D9FF"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279153" x1="37.7625" y1="29.925" x2="37.7625" y2="56.9999" gradientUnits="userSpaceOnUse">\n<stop stop-color="#35B8F1"/>\n<stop offset="1" stop-color="#28A8EA"/>\n</linearGradient>\n<linearGradient id="paint1_linear_1279153" x1="5.44613" y1="10.784" x2="25.9038" y2="46.216" gradientUnits="userSpaceOnUse">\n<stop stop-color="#1784D9"/>\n<stop offset="0.5" stop-color="#107AD5"/>\n<stop offset="1" stop-color="#0A63C9"/>\n</linearGradient>\n<clipPath id="clip0_1279153">\n<rect width="61.275" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279153)">\n<path d="M61.275 29.925C61.2784 29.4459 61.0308 28.9999 60.6224 28.7494H60.6152L60.5896 28.7351L39.3571 16.1666C39.2654 16.1047 39.1702 16.0481 39.0721 15.9971C38.2523 15.5741 37.2784 15.5741 36.4586 15.9971C36.3604 16.0481 36.2653 16.1047 36.1736 16.1666L14.9411 28.7351L14.9155 28.7494C14.2666 29.1529 14.0676 30.0061 14.4712 30.6551C14.5901 30.8463 14.7538 31.0056 14.9483 31.1191L36.1808 43.6876C36.2728 43.7491 36.3679 43.8057 36.4658 43.8572C37.2856 44.2802 38.2594 44.2802 39.0793 43.8572C39.1771 43.8057 39.2722 43.7491 39.3643 43.6876L60.5968 31.1191C61.0209 30.8718 61.2799 30.416 61.275 29.925Z" fill="#0A2767"/>\n<path d="M17.4163 21.5332H31.3499V34.3054H17.4163V21.5332ZM58.425 8.54999V2.70749C58.4584 1.24673 57.3022 0.0350031 55.8415 0H19.6835C18.2227 0.0350031 17.0665 1.24673 17.1 2.70749V8.54999L38.475 14.25L58.425 8.54999Z" fill="#0364B8"/>\n<path d="M17.1 8.54999H31.35V21.375H17.1V8.54999Z" fill="#0078D4"/>\n<path d="M45.6 8.54999H31.35V21.375L45.6 34.2H58.4249V21.375L45.6 8.54999Z" fill="#28A8EA"/>\n<path d="M31.35 21.375H45.5999V34.2H31.35V21.375Z" fill="#0078D4"/>\n<path d="M31.35 34.2H45.5999V47.0249H31.35V34.2Z" fill="#0364B8"/>\n<path d="M17.4163 34.3054H31.35V45.9163H17.4163V34.3054Z" fill="#14447D"/>\n<path d="M45.6 34.2H58.425V47.0249H45.6V34.2Z" fill="#0078D4"/>\n<path d="M60.6223 31.0407L60.5952 31.055L39.3628 42.9964C39.2701 43.0534 39.1761 43.1076 39.0777 43.156C38.7171 43.3278 38.3254 43.4247 37.9263 43.441L36.7664 42.7627C36.6684 42.7135 36.5732 42.6588 36.4814 42.5989L14.9639 30.3183H14.9539L14.25 29.925V54.0986C14.261 55.7114 15.5769 57.0101 17.1898 56.9999H58.3808C58.405 56.9999 58.4264 56.9885 58.452 56.9885C58.7927 56.9667 59.1285 56.8966 59.4495 56.7804C59.5882 56.7217 59.7221 56.6521 59.8499 56.5724C59.9454 56.5182 60.1093 56.4 60.1093 56.4C60.8393 55.8598 61.2713 55.0067 61.2749 54.0986V29.925C61.2745 30.3873 61.0251 30.8137 60.6223 31.0407Z" fill="url(#paint0_linear_1279153)"/>\n<path opacity="0.5" d="M60.1349 29.8295V31.3115L37.9334 46.5974L14.9482 30.3282C14.9482 30.3204 14.9418 30.314 14.9339 30.314L12.825 29.0457V27.977L13.6942 27.9627L15.5324 29.0172L15.5752 29.0315L15.7319 29.1312C15.7319 29.1312 37.3349 41.4575 37.3919 41.486L38.2184 41.9704C38.2896 41.9419 38.3609 41.9134 38.4464 41.8849C38.4891 41.8564 59.8926 29.8152 59.8926 29.8152L60.1349 29.8295Z" fill="#0A2767"/>\n<path d="M60.6223 31.0407L60.5952 31.0564L39.3627 42.9979C39.2701 43.0549 39.1761 43.109 39.0777 43.1575C38.2531 43.5603 37.2888 43.5603 36.4642 43.1575C36.3666 43.1091 36.2715 43.0558 36.1792 42.9979L14.9468 31.0564L14.9212 31.0407C14.5113 30.8185 14.2542 30.3912 14.25 29.925V54.0986C14.2602 55.7112 15.5757 57.0101 17.1882 57C17.1883 57 17.1883 57 17.1884 57H58.3366C59.9492 57.0102 61.2647 55.7113 61.275 54.0988C61.275 54.0987 61.275 54.0987 61.275 54.0986V29.925C61.2744 30.3873 61.025 30.8137 60.6223 31.0407Z" fill="#1490DF"/>\n<path opacity="0.1" d="M39.6719 42.8212L39.3541 42.9993C39.262 43.058 39.1669 43.1117 39.0691 43.1604C38.719 43.3322 38.3383 43.4329 37.9491 43.4567L46.0274 53.0099L60.1192 56.4057C60.5054 56.114 60.8125 55.7305 61.0127 55.2899L39.6719 42.8212Z" fill="black"/>\n<path opacity="0.05" d="M41.1112 42.0118L39.3541 42.9993C39.262 43.058 39.1669 43.1117 39.0691 43.1604C38.719 43.3322 38.3383 43.4329 37.9491 43.4567L41.7339 53.892L60.1235 56.4014C60.848 55.8575 61.2744 55.0046 61.2749 54.0986V53.7865L41.1112 42.0118Z" fill="black"/>\n<path d="M17.2282 57H58.3323C58.9648 57.0032 59.5817 56.8034 60.0922 56.43L36.765 42.7657C36.6669 42.7165 36.5718 42.6618 36.4799 42.6018L14.9625 30.3211H14.9525L14.25 29.925V54.016C14.2484 55.6625 15.5818 56.9984 17.2282 57C17.2282 57 17.2282 57 17.2282 57Z" fill="#28A8EA"/>\n<path opacity="0.1" d="M34.2 14.012V44.4072C34.1974 45.4729 33.5495 46.4308 32.5612 46.8298C32.2551 46.9613 31.9254 47.0292 31.5922 47.0293H14.25V12.825H17.1V11.4H31.5923C33.0318 11.4054 34.1969 12.5724 34.2 14.012Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.437V45.8321C32.7786 46.1764 32.7057 46.5171 32.5613 46.8296C32.1656 47.8051 31.22 48.445 30.1673 48.4498H14.25V12.825H30.1673C30.5808 12.8208 30.9883 12.924 31.35 13.1242C32.2236 13.5643 32.7747 14.4589 32.7751 15.437Z" fill="black"/>\n<path opacity="0.2" d="M32.775 15.437V42.9822C32.768 44.4212 31.6062 45.5875 30.1673 45.5999H14.25V12.825H30.1672C30.5807 12.8208 30.9882 12.924 31.35 13.1242C32.2235 13.5643 32.7747 14.4589 32.775 15.437Z" fill="black"/>\n<path opacity="0.2" d="M31.35 15.437V42.9822C31.3485 44.4234 30.1835 45.5929 28.7423 45.5999H14.25V12.825H28.7423C30.1833 12.8258 31.3508 13.9946 31.35 15.4356C31.35 15.4361 31.35 15.4365 31.35 15.437Z" fill="black"/>\n<path d="M2.61202 12.825H28.738C30.1806 12.825 31.35 13.9944 31.35 15.437V41.5629C31.35 43.0055 30.1806 44.1749 28.738 44.1749H2.61202C1.16943 44.1749 0 43.0055 0 41.5629V15.437C0 13.9944 1.16946 12.825 2.61202 12.825Z" fill="url(#paint1_linear_1279153)"/>\n<path d="M8.16379 23.7804C8.80757 22.4088 9.84668 21.2609 11.1478 20.4844C12.5886 19.6594 14.2291 19.2482 15.8887 19.2959C17.4269 19.2625 18.9447 19.6525 20.2763 20.4231C21.5283 21.1697 22.5367 22.2637 23.179 23.5723C23.8785 25.0143 24.2272 26.6012 24.1965 28.2036C24.2304 29.8782 23.8717 31.5375 23.1491 33.0486C22.4915 34.404 21.4511 35.537 20.1566 36.3076C18.7736 37.1018 17.1995 37.502 15.6052 37.4647C14.0341 37.5026 12.4829 37.1082 11.1207 36.3247C9.85783 35.577 8.83682 34.4818 8.17949 33.1697C7.47581 31.7486 7.12304 30.1795 7.15064 28.594C7.12133 26.9336 7.46768 25.2881 8.16379 23.7804ZM11.3444 31.5181C11.6876 32.3853 12.2697 33.1373 13.023 33.687C13.7904 34.2233 14.7092 34.5 15.645 34.4764C16.6417 34.5159 17.6241 34.2298 18.4437 33.6613C19.1875 33.1134 19.7543 32.3593 20.0739 31.4925C20.4312 30.5244 20.6075 29.499 20.594 28.4672C20.6051 27.4256 20.4393 26.3896 20.1038 25.4035C19.8075 24.5131 19.259 23.728 18.5249 23.1434C17.7258 22.5481 16.7461 22.2461 15.7505 22.2884C14.7943 22.2636 13.8549 22.5425 13.0672 23.085C12.3011 23.637 11.708 24.3957 11.3572 25.2723C10.579 27.2818 10.575 29.5087 11.3458 31.521L11.3444 31.5181Z" fill="white"/>\n<path d="M45.6 8.54999H58.425V21.375H45.6V8.54999Z" fill="#50D9FF"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279153" x1="37.7625" y1="29.925" x2="37.7625" y2="56.9999" gradientUnits="userSpaceOnUse">\n<stop stop-color="#35B8F1"/>\n<stop offset="1" stop-color="#28A8EA"/>\n</linearGradient>\n<linearGradient id="paint1_linear_1279153" x1="5.44613" y1="10.784" x2="25.9038" y2="46.216" gradientUnits="userSpaceOnUse">\n<stop stop-color="#1784D9"/>\n<stop offset="0.5" stop-color="#107AD5"/>\n<stop offset="1" stop-color="#0A63C9"/>\n</linearGradient>\n<clipPath id="clip0_1279153">\n<rect width="61.275" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      "This Integration allows you to access user's mail, calendar, and contacts data on Outlook.com or Office 365. ",
    outOfPlan: true,
    tags: {
      catalog: 'Email,Calendar,Office',
    },
    configuration: {},
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    smallIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279209)">\n<path d="M42.74 21.375H58.5675C60.0628 21.375 61.275 22.5872 61.275 24.0825V38.4992C61.275 43.9949 56.8199 48.45 51.3242 48.45H51.2772C45.7815 48.4508 41.3257 43.9963 41.325 38.5006C41.325 38.5002 41.325 38.4997 41.325 38.4992V22.79C41.325 22.0085 41.9585 21.375 42.74 21.375Z" fill="#5059C9"/>\n<path d="M53.4375 18.525C56.9791 18.525 59.85 15.654 59.85 12.1125C59.85 8.57096 56.9791 5.69998 53.4375 5.69998C49.896 5.69998 47.025 8.57096 47.025 12.1125C47.025 15.654 49.896 18.525 53.4375 18.525Z" fill="#5059C9"/>\n<path d="M33.4875 18.525C38.603 18.525 42.75 14.3781 42.75 9.26251C42.75 4.14697 38.603 0 33.4875 0C28.3719 0 24.225 4.14697 24.225 9.26251C24.225 14.3781 28.3719 18.525 33.4875 18.525Z" fill="#7B83EB"/>\n<path d="M45.838 21.375H19.712C18.2345 21.4116 17.0657 22.6377 17.1 24.1153V40.5584C16.8937 49.4251 23.9086 56.783 32.775 57C41.6415 56.783 48.6563 49.4251 48.45 40.5584V24.1153C48.4843 22.6377 47.3155 21.4116 45.838 21.375Z" fill="#7B83EB"/>\n<path opacity="0.1" d="M34.2 21.375V44.4173C34.1929 45.4739 33.5526 46.4232 32.5755 46.8255C32.2644 46.9571 31.9301 47.0249 31.5923 47.025H18.354C18.1688 46.5548 17.9978 46.0845 17.8552 45.6C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H34.2Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 21.375V45.8422C32.7751 46.18 32.7072 46.5144 32.5756 46.8255C32.1733 47.8026 31.224 48.4429 30.1674 48.45H19.0238C18.7815 47.9797 18.5535 47.5095 18.354 47.025C18.1545 46.5405 17.9978 46.0845 17.8552 45.6C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H32.7751Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 21.375V42.9923C32.7643 44.428 31.6031 45.5892 30.1673 45.6H17.8552C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H32.7751Z" fill="black"/>\n<path opacity="0.2" d="M31.35 21.375V42.9923C31.3391 44.428 30.1779 45.5892 28.7422 45.6H17.8552C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H31.35Z" fill="black"/>\n<path opacity="0.1" d="M34.2 14.0078V18.4966C33.9577 18.5108 33.7297 18.5251 33.4875 18.5251C33.2452 18.5251 33.0172 18.5108 32.7749 18.4966C32.2939 18.4646 31.8169 18.3883 31.35 18.2686C28.4643 17.5852 26.0803 15.5614 24.9375 12.8251C24.7408 12.3655 24.5881 11.8884 24.4814 11.4001H31.5922C33.0302 11.4055 34.1945 12.5698 34.2 14.0078Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.4328V18.4965C32.2941 18.4646 31.8171 18.3883 31.3501 18.2685C28.4644 17.5852 26.0804 15.5614 24.9375 12.8251H30.1673C31.6053 12.8305 32.7696 13.9948 32.7751 15.4328Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.4328V18.4965C32.2941 18.4646 31.8171 18.3883 31.3501 18.2685C28.4644 17.5852 26.0804 15.5614 24.9375 12.8251H30.1673C31.6053 12.8305 32.7696 13.9948 32.7751 15.4328Z" fill="black"/>\n<path opacity="0.2" d="M31.35 15.4328V18.2685C28.4644 17.5851 26.0804 15.5614 24.9375 12.825H28.7423C30.1802 12.8305 31.3445 13.9948 31.35 15.4328Z" fill="black"/>\n<path d="M2.61201 12.825H28.738C30.1805 12.825 31.35 13.9945 31.35 15.437V41.563C31.35 43.0056 30.1805 44.175 28.738 44.175H2.61201C1.16943 44.175 0 43.0055 0 41.563V15.437C0 13.9945 1.16945 12.825 2.61201 12.825Z" fill="url(#paint0_linear_1279209)"/>\n<path d="M22.5492 22.7686H17.3265V36.9902H13.9992V22.7686H8.80078V20.0098H22.5492V22.7686Z" fill="white"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279209" x1="5.44613" y1="10.784" x2="25.9039" y2="46.216" gradientUnits="userSpaceOnUse">\n<stop stop-color="#5A62C3"/>\n<stop offset="0.5" stop-color="#4D55BD"/>\n<stop offset="1" stop-color="#3940AB"/>\n</linearGradient>\n<clipPath id="clip0_1279209">\n<rect width="61.275" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1279209)">\n<path d="M42.74 21.375H58.5675C60.0628 21.375 61.275 22.5872 61.275 24.0825V38.4992C61.275 43.9949 56.8199 48.45 51.3242 48.45H51.2772C45.7815 48.4508 41.3257 43.9963 41.325 38.5006C41.325 38.5002 41.325 38.4997 41.325 38.4992V22.79C41.325 22.0085 41.9585 21.375 42.74 21.375Z" fill="#5059C9"/>\n<path d="M53.4375 18.525C56.9791 18.525 59.85 15.654 59.85 12.1125C59.85 8.57096 56.9791 5.69998 53.4375 5.69998C49.896 5.69998 47.025 8.57096 47.025 12.1125C47.025 15.654 49.896 18.525 53.4375 18.525Z" fill="#5059C9"/>\n<path d="M33.4875 18.525C38.603 18.525 42.75 14.3781 42.75 9.26251C42.75 4.14697 38.603 0 33.4875 0C28.3719 0 24.225 4.14697 24.225 9.26251C24.225 14.3781 28.3719 18.525 33.4875 18.525Z" fill="#7B83EB"/>\n<path d="M45.838 21.375H19.712C18.2345 21.4116 17.0657 22.6377 17.1 24.1153V40.5584C16.8937 49.4251 23.9086 56.783 32.775 57C41.6415 56.783 48.6563 49.4251 48.45 40.5584V24.1153C48.4843 22.6377 47.3155 21.4116 45.838 21.375Z" fill="#7B83EB"/>\n<path opacity="0.1" d="M34.2 21.375V44.4173C34.1929 45.4739 33.5526 46.4232 32.5755 46.8255C32.2644 46.9571 31.9301 47.0249 31.5923 47.025H18.354C18.1688 46.5548 17.9978 46.0845 17.8552 45.6C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H34.2Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 21.375V45.8422C32.7751 46.18 32.7072 46.5144 32.5756 46.8255C32.1733 47.8026 31.224 48.4429 30.1674 48.45H19.0238C18.7815 47.9797 18.5535 47.5095 18.354 47.025C18.1545 46.5405 17.9978 46.0845 17.8552 45.6C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H32.7751Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 21.375V42.9923C32.7643 44.428 31.6031 45.5892 30.1673 45.6H17.8552C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H32.7751Z" fill="black"/>\n<path opacity="0.2" d="M31.35 21.375V42.9923C31.3391 44.428 30.1779 45.5892 28.7422 45.6H17.8552C17.3564 43.9649 17.1019 42.265 17.1 40.5555V24.111C17.0657 22.6358 18.2326 21.4116 19.7077 21.375H31.35Z" fill="black"/>\n<path opacity="0.1" d="M34.2 14.0078V18.4966C33.9577 18.5108 33.7297 18.5251 33.4875 18.5251C33.2452 18.5251 33.0172 18.5108 32.7749 18.4966C32.2939 18.4646 31.8169 18.3883 31.35 18.2686C28.4643 17.5852 26.0803 15.5614 24.9375 12.8251C24.7408 12.3655 24.5881 11.8884 24.4814 11.4001H31.5922C33.0302 11.4055 34.1945 12.5698 34.2 14.0078Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.4328V18.4965C32.2941 18.4646 31.8171 18.3883 31.3501 18.2685C28.4644 17.5852 26.0804 15.5614 24.9375 12.8251H30.1673C31.6053 12.8305 32.7696 13.9948 32.7751 15.4328Z" fill="black"/>\n<path opacity="0.2" d="M32.7751 15.4328V18.4965C32.2941 18.4646 31.8171 18.3883 31.3501 18.2685C28.4644 17.5852 26.0804 15.5614 24.9375 12.8251H30.1673C31.6053 12.8305 32.7696 13.9948 32.7751 15.4328Z" fill="black"/>\n<path opacity="0.2" d="M31.35 15.4328V18.2685C28.4644 17.5851 26.0804 15.5614 24.9375 12.825H28.7423C30.1802 12.8305 31.3445 13.9948 31.35 15.4328Z" fill="black"/>\n<path d="M2.61201 12.825H28.738C30.1805 12.825 31.35 13.9945 31.35 15.437V41.563C31.35 43.0056 30.1805 44.175 28.738 44.175H2.61201C1.16943 44.175 0 43.0055 0 41.563V15.437C0 13.9945 1.16945 12.825 2.61201 12.825Z" fill="url(#paint0_linear_1279209)"/>\n<path d="M22.5492 22.7686H17.3265V36.9902H13.9992V22.7686H8.80078V20.0098H22.5492V22.7686Z" fill="white"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1279209" x1="5.44613" y1="10.784" x2="25.9039" y2="46.216" gradientUnits="userSpaceOnUse">\n<stop stop-color="#5A62C3"/>\n<stop offset="0.5" stop-color="#4D55BD"/>\n<stop offset="1" stop-color="#3940AB"/>\n</linearGradient>\n<clipPath id="clip0_1279209">\n<rect width="61.275" height="57" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      'Microsoft Teams is the ultimate hub for chat-based collaboration, meetings, calling, and enterprise voice features. \nThis integration allows you to easily build chat bots and messaging extensions for Teams.',
    tags: {
      catalog: 'Messaging,Office',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/microsoft-teams#creating-your-own-microsoft-teams-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          microsoftTeamsIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          microsoftBotFrameworkConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/microsoftTeamsIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/microsoftBotFrameworkConnector/properties/id',
            label: 'Microsoft Bot Framework Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        microsoftBotFrameworkConnector: {
          microsoftBotFrameworkName: 'microsoft-bot-framework-connector',
        },
      },
      entities: {
        microsoftBotFrameworkConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'https://api.botframework.com/.default',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              defaultEventHandler: '<% global.entities.microsoftTeamsIntegration.id %>',
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-microsoft-bot-framework-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/microsoft-bot-framework-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/microsoft-bot-framework-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Microsoft Bot Framework',
          },
        },
        microsoftTeamsIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-microsoft-teams-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/microsoft-bot-framework-provider":"7.41.2","botbuilder":"^4.14.1"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Microsoft Teams Integration\n//\n// Note, to be able to use the code provided by this integration template, you _must_\n// configure the Microsoft Bot Framework Connector with your own bot app credentials, and you _must_\n// configure the messaging endpoint of this app to point to the webhook url of the connector.\n//\n// Once you have that in place, you will be able to test this integration template as follows:\n//\n// 1. If you haven't already, install your bot application in a Microsoft Teams workspace.\n// 2. Send your bot application a message through that workspace.\n// 3. Hit the run button on Fusebit's dashboard to trigger a proactive message.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\nconst { MessageFactory, TurnContext } = require('botbuilder');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\n// This is the logic responsible for handling the incoming messages from a Microsoft Teams user.\nintegration.event.on('/:componentName/webhook/message', async (ctx) => {\n  const botFrameworkAdapter = await integration.service.getSdk(ctx, ctx.params.componentName);\n\n  await botFrameworkAdapter.processActivity(ctx.req, ctx.res, async (context) => {\n    const conversationReference = TurnContext.getConversationReference(context.activity);\n    const tenantId = 'user-1';\n    await integration.storage.setData(ctx, `/${tenantId}/teams-conversation-reference`, {\n      data: conversationReference,\n    });\n\n    const reply = MessageFactory.text(\n      \"Hi, friend. I'm saving a conversation reference so I can send you a proactive message later.\"\n    );\n    await context.sendActivity(reply);\n  });\n});\n\n// This is the logic that proactively sends a message to the user that previously initiated a conversation.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const botConnector = 'microsoftBotFrameworkConnector';\n  const botFrameworkAdapter = await integration.service.getSdk(ctx, botConnector);\n\n  const { tenantId } = ctx.params;\n  const { data: conversationReference } = await integration.storage.getData(\n    ctx,\n    `/${tenantId}/teams-conversation-reference`\n  );\n\n  if (!conversationReference) {\n    ctx.throw(`Unable to send a proactive message. Has ${tenantId} sent this bot a message yet?`);\n  }\n\n  await botFrameworkAdapter.continueConversation(conversationReference, async (context) => {\n    await context.sendActivity(\"Hi again, friend. This is a proactive message I'm sending you.\");\n  });\n\n  ctx.body = { message: `Successfully sent a proactive message to the Microsoft Teams user!` };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'microsoftBotFrameworkConnector',
                skip: true,
                provider: '@fusebit-int/microsoft-bot-framework-provider',
                entityId: '<% global.entities.microsoftBotFrameworkConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Microsoft Teams',
          },
        },
      },
    },
  },
  {
    id: 'netsuite-planned',
    name: 'NetSuite',
    smallIcon:
      '<svg width="339" height="114" viewBox="0 0 309 94" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M3.592 61.606h9.783L25.21 86.453V61.606h6.288v31.572h-9.303L9.967 66.977v26.201H3.592V61.606zm35.023 0H59.75v5.151H45.383v7.512h13.452v5.151H45.383v8.517h14.85v5.242H38.615V61.605zm34.623 5.239h-9.39v-5.238h25.593v5.238h-9.39v26.334h-6.813V66.845zm24.447 17.121c.087 2.184.348 6.243 7.6 6.243 6.548 0 7.38-4.059 7.38-5.634 0-3.537-2.839-4.236-7.249-5.325-4.806-1.182-6.945-1.707-8.559-2.796-2.577-1.749-3.276-4.107-3.276-6.2 0-6.42 6.07-9.217 12.01-9.217 2.093 0 6.332.351 8.864 3.102 1.746 1.92 1.833 4.06 1.92 5.373h-4.542c-.216-3.933-3.537-4.806-6.636-4.806-4.368 0-6.987 1.965-6.987 5.11 0 2.795 1.833 3.755 5.676 4.673 7.512 1.92 8.343 2.094 10.176 3.318 2.925 1.923 3.144 4.977 3.144 6.288 0 5.59-4.368 9.825-12.447 9.825-2.4 0-7.293-.39-9.78-3.579-1.794-2.313-1.836-4.848-1.836-6.375h4.542zm30.791-22.318v19.524c0 3.36.744 4.758 1.398 5.673 1.965 2.622 5.022 3.105 7.206 3.105 8.514 0 8.514-6.684 8.514-8.955V61.648h4.236v19.437c0 1.7-.042 5.238-2.577 8.382-3.099 3.885-7.902 4.368-10.173 4.368-2.97 0-8.21-.831-11.136-5.022-.963-1.398-1.836-3.231-1.836-7.95V61.648h4.368zm30.422 31.534V61.65h4.368v31.533h-4.368zm21.26-.002V65.361H169.59v-3.714h25.46v3.714h-10.568V93.18h-4.323zm20.076-31.532h19.782v3.71h-15.414v9.829h14.673v3.669h-14.673v10.479h15.762v3.846h-20.13V61.648z" fill="#000"/><path d="M303.954 4.095c.294 0 .603-.03.78-.312.13-.105.147-.246.147-.402 0-.27-.153-.48-.369-.594-.252-.099-.44-.099-.897-.099h-.252v1.407h.591m-.339-2.18c.645 0 .942.03 1.275.122.84.276.915 1.074.915 1.35 0 .063-.024.222-.05.396-.043.19-.142.582-.595.84-.057.033-.087.063-.186.111l1.107 1.998h-1.077l-.99-1.857h-.65v1.857h-.964V1.914h1.215m.414 6.846a4.271 4.271 0 004.284-4.284c0-2.379-1.91-4.323-4.284-4.323a4.31 4.31 0 00-4.31 4.323c0 2.38 1.91 4.284 4.31 4.284m-3.402-4.302a3.385 3.385 0 013.402-3.387 3.372 3.372 0 013.381 3.387 3.37 3.37 0 01-3.38 3.375 3.382 3.382 0 01-3.403-3.375m-29.87 27.462c-5.674 0-10.456-3.807-11.932-9.015h31.464l4.338-6.75h-35.802a12.382 12.382 0 0111.931-9.018h21.603L296.676.37h-26.412c-10.566 0-19.137 8.571-19.137 19.161 0 10.575 8.571 19.131 19.137 19.131h22.722l4.317-6.74h-26.547m-90.042 6.74h22.722l4.302-6.74h-26.52c-6.873 0-12.41-5.56-12.41-12.39 0-6.865 5.537-12.394 12.41-12.394h21.585L207.156.37h-26.442c-10.58 0-19.179 8.571-19.179 19.161 0 10.575 8.598 19.131 19.18 19.131m-139.813-6.74H19.644c-6.84 0-12.384-5.56-12.384-12.39 0-6.865 5.544-12.394 12.384-12.394h21.258A12.376 12.376 0 0153.304 19.53c0 6.831-5.538 12.39-12.402 12.39m-21.747 6.741h22.257c10.587 0 19.113-8.556 19.113-19.13C60.525 8.94 52 .368 41.412.368H19.155C8.58.37 0 8.94 0 19.53c0 10.575 8.58 19.131 19.155 19.131m77.511-12.399c7.167 0 12.933-5.802 12.933-12.95 0-7.15-5.766-12.943-12.933-12.943H64.452v38.292h7.362V7.137h24.363c3.417 0 6.19 2.76 6.19 6.174 0 3.411-2.773 6.22-6.19 6.22l-20.763-.019 21.99 19.15h10.683l-14.769-12.4h3.348m121.8 5.637V.37h-7.377V35c0 .941.4 1.868 1.09 2.537a3.728 3.728 0 002.684 1.125h33.543l4.371-6.762h-34.31m-90.118-6.74h19.641L137.613 8.411l-19.05 30.25h-8.7l23.19-36.3C134.043.891 135.744 0 137.601 0c1.815 0 3.486.861 4.476 2.295l23.262 36.366h-8.679l-4.089-6.762h-19.887l-4.335-6.74" fill="red"/></g></svg>',
    largeIcon:
      '<svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 652 652" style="enable-background:new 0 0 652 652;" xml:space="preserve">\r\n<style type="text/css">\r\n\t.st0{fill:#ED1C24;}\r\n</style>\r\n<g>\r\n\t<path class="st0" d="M167.5,331.8h21.7l-11.5-18.5l-21.1,33.4h-9.6l25.6-40.1c1.1-1.6,3-2.6,5-2.6c2,0,3.9,1,4.9,2.5l25.7,40.2\r\n\t\th-9.6l-4.5-7.5h-22L167.5,331.8 M267.1,339.3v-34.9H259v38.3c0,1,0.4,2.1,1.2,2.8c0.8,0.8,1.8,1.2,3,1.2h37.1l4.8-7.5L267.1,339.3\r\n\t\t M132.5,333c7.9,0,14.3-6.4,14.3-14.3c0-7.9-6.4-14.3-14.3-14.3H96.9v42.3h8.1v-34.8H132c3.8,0,6.8,3.1,6.8,6.8\r\n\t\tc0,3.8-3.1,6.9-6.8,6.9l-22.9,0l24.3,21.2h11.8L128.8,333H132.5 M46.8,346.8h24.6c11.7,0,21.1-9.5,21.1-21.1\r\n\t\tc0-11.7-9.4-21.2-21.1-21.2H46.8c-11.7,0-21.2,9.5-21.2,21.2C25.7,337.3,35.2,346.8,46.8,346.8 M70.9,339.3H47.4\r\n\t\tc-7.6,0-13.7-6.1-13.7-13.7c0-7.6,6.1-13.7,13.7-13.7h23.5c7.6,0,13.7,6.1,13.7,13.7C84.6,333.2,78.5,339.3,70.9,339.3\r\n\t\t M225.4,346.8h25.1l4.8-7.4H226c-7.6,0-13.7-6.1-13.7-13.7c0-7.6,6.1-13.7,13.7-13.7h23.9l4.8-7.5h-29.2\r\n\t\tc-11.7,0-21.2,9.5-21.2,21.2C204.2,337.3,213.7,346.8,225.4,346.8 M324.9,339.3c-6.3,0-11.6-4.2-13.2-10h34.8l4.8-7.5h-39.6\r\n\t\tc1.6-5.8,6.9-10,13.2-10h23.9l4.8-7.5h-29.2c-11.7,0-21.2,9.5-21.2,21.2c0,11.7,9.5,21.1,21.2,21.1h25.1l4.8-7.4L324.9,339.3\r\n\t\t M357.9,309c0-2.1,1.7-3.7,3.8-3.7c2.1,0,3.7,1.7,3.7,3.7c0,2.1-1.6,3.7-3.7,3.7C359.6,312.7,357.9,311,357.9,309 M361.7,313.7\r\n\t\tc2.6,0,4.7-2.1,4.7-4.7c0-2.6-2.1-4.8-4.7-4.8c-2.7,0-4.8,2.1-4.8,4.8C356.9,311.6,359.1,313.7,361.7,313.7 M361.2,306.1\r\n\t\tc0.7,0,1,0,1.4,0.1c0.9,0.3,1,1.2,1,1.5c0,0.1,0,0.2-0.1,0.4c0,0.2-0.2,0.6-0.7,0.9c-0.1,0-0.1,0.1-0.2,0.1l1.2,2.2h-1.2l-1.1-2.1\r\n\t\tH361v2.1h-1.1v-5.3H361.2 M361.6,308.6c0.3,0,0.7,0,0.9-0.3c0.1-0.1,0.2-0.3,0.2-0.4c0-0.3-0.2-0.5-0.4-0.7c-0.3-0.1-0.5-0.1-1-0.1\r\n\t\tH361v1.6L361.6,308.6"/>\r\n\t<g>\r\n\t\t<polygon points="409.8,338.6 397,311.8 397,311.7 385.9,311.7 385.9,346.9 393.3,346.9 393.3,318.5 406.5,346.8 406.5,346.9 \r\n\t\t\t417.1,346.9 417.1,311.7 409.8,311.7 \t\t"/>\r\n\t\t<polygon points="432.4,331.7 447.3,331.7 447.3,325.7 432.4,325.7 432.4,317.7 448.3,317.7 448.3,311.7 424.6,311.7 424.6,346.9 \r\n\t\t\t448.8,346.9 448.8,340.8 432.4,340.8 \t\t"/>\r\n\t\t<polygon points="452.5,311.7 452.5,317.8 462.9,317.8 462.9,346.9 470.7,346.9 470.7,317.8 481.1,317.8 481.1,311.7 \t\t"/>\r\n\t\t<g>\r\n\t\t\t<path d="M490.1,336.6c0.1,2.4,0.4,6.9,8.4,6.9c7.2,0,8.2-4.5,8.2-6.2c0-3.9-3.1-4.7-8-5.9c-5.3-1.3-7.7-1.9-9.5-3.1\r\n\t\t\t\tc-2.8-1.9-3.6-4.5-3.6-6.9c0-7.1,6.7-10.2,13.3-10.2c2.3,0,7,0.4,9.8,3.4c1.9,2.1,2,4.5,2.1,5.9h-5c-0.2-4.3-3.9-5.3-7.3-5.3\r\n\t\t\t\tc-4.8,0-7.7,2.2-7.7,5.6c0,3.1,2,4.2,6.3,5.2c8.3,2.1,9.2,2.3,11.3,3.7c3.2,2.1,3.5,5.5,3.5,6.9c0,6.2-4.8,10.9-13.8,10.9\r\n\t\t\t\tc-2.7,0-8.1-0.4-10.8-4c-2-2.6-2-5.4-2-7H490.1L490.1,336.6z"/>\r\n\t\t\t<path d="M524.1,311.9v21.6c0,3.7,0.8,5.3,1.5,6.3c2.2,2.9,5.5,3.4,8,3.4c9.4,0,9.4-7.4,9.4-9.9v-21.4h4.7v21.5\r\n\t\t\t\tc0,1.9,0,5.8-2.9,9.3c-3.4,4.3-8.7,4.8-11.2,4.8c-3.3,0-9.1-0.9-12.3-5.6c-1.1-1.5-2-3.6-2-8.8v-21.2H524.1z"/>\r\n\t\t\t<path d="M557.7,311.9h4.8v34.8h-4.8V311.9z"/>\r\n\t\t\t<path d="M581.2,346.8V316h-11.7v-4.1h28.1v4.1H586v30.7H581.2z"/>\r\n\t\t\t<path d="M603.4,311.9h21.9v4.1h-17v10.9h16.2v4.1h-16.2v11.6h17.4v4.2h-22.3V311.9z"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>\r\n',
    version: '5.2.0',
    description:
      'Our Oracle NetSuite connector allows your application to access, including Chart of Accounts, Profit and Loss, and Journal Entries.\n',
    outOfPlan: true,
    tags: {
      catalog: 'Accounting',
    },
    configuration: {},
  },
  {
    id: 'pagerduty',
    name: 'PagerDuty',
    smallIcon:
      '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 73.3671H30.6481V100H16V73.3671ZM71.168 4.88269C63.305 0.697527 57.8516 0 44.9791 0H16V60.6214H44.8523C56.3297 60.6214 64.8903 59.9239 72.4363 54.9144C80.6798 49.461 84.9283 40.3932 84.9283 29.9302C84.9283 18.5796 79.6652 9.51173 71.168 4.88269V4.88269ZM48.2131 47.9391H30.6481V12.9994L47.1985 12.8725C62.2904 12.6823 69.8364 18.0089 69.8364 30.0571C69.8364 42.993 60.5149 47.9391 48.2131 47.9391V47.9391Z" fill="#06AC38"/>\n</svg>\n\n',
    largeIcon:
      '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 974.8 200" style="enable-background:new 0 0 974.8 200;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#06AC38;}\n</style>\n<g>\n\t<path class="st0" d="M950.5,41.9l-22,62.4c-4,11.2-6,17.6-9.7,28.4h-0.4c-2.9-9.3-5.5-16.8-9.3-27.8l-21.4-63.1h-25.6l44.3,115.8\n\t\tc-1,2.5-2,5.1-3.1,7.8c-3.7,9-12.5,14.9-22.2,14.9l-11,0V200h11.3c18.3,0,34.8-11.1,41.6-28.2c14.1-35.3,38.1-95.4,51.8-129.9\n\t\tH950.5z"/>\n\t<path class="st0" d="M336.2,135.4c0,41.9-19.2,64.6-58,64.6c-28.9,0-46.3-15.2-52.5-38.1h23.4c4,10.6,12.3,20.1,29.5,20.1\n\t\tc26.5,0,35.9-16.5,35.9-47.9c-0.2,0-0.2-0.2-0.4-0.2c-5.7,9.9-18.5,18.7-38.8,18.7c-32.6,0-53.4-23.6-53.4-56.7\n\t\tc0-34.4,22.5-57.6,53.6-57.6c20.1,0,32.2,8.6,38.8,18.1c-0.2-2.4-0.2-4.9-0.2-7.3v-7.3h22.1V135.4z M246.2,95.7\n\t\tc0,22.5,12.6,38.6,34.2,38.6c19.4,0,34.4-13.7,34.4-39.3c0-22.7-13.2-37.9-34.4-37.9S246.2,72.3,246.2,95.7z"/>\n\t<path class="st0" d="M372.7,105.6c0.9,20.3,13.9,36.4,36.4,36.4c15.9,0,23.6-7.5,29.5-17.4h22.3c-6.6,20.9-24.9,35.9-52.7,35.9\n\t\tc-35.7,0-58-24-58-60.2c0-36.2,23.2-61.7,58-61.7c37.7,0,55.1,28.7,55.1,59.8v7.3H372.7z M440.1,88c-2-18.3-13.5-31.3-32.4-31.3\n\t\tc-18.1,0-32,11.9-34.2,31.3H440.1z"/>\n\t<path class="st0" d="M499,41.9v14.8c3.7-10.8,15-17.6,28-17.6c2.9,0,4.2,0.2,5.7,0.4v20.3c-2-0.4-5.3-0.7-7.7-0.7\n\t\tc-20.9,0-24.9,15.4-24.9,38.6v60h-22.3v-95c0-7.3,0-13.7-0.2-20.7H499z"/>\n\t<path class="st0" d="M761.7,141.1c-6,9.9-17.2,19.4-36.8,19.4c-26.9,0-40.1-16.5-40.1-46.5V41.9H707v63.7\n\t\tc0,22.7,7.5,36.4,25.6,36.4c23.8,0,28-21.6,28-47V41.9h22.3v98.3c0,6,0,11.7,0.2,17.4h-21.4V141.1z"/>\n\t<path class="st0" d="M833,41.9h21.6v17.2H833v69.5c0,11,5.5,14.3,14.1,14.3c1.5,0,4.2-0.2,5.5-0.4V159c-3.3,0.4-5.7,0.9-8.6,0.9\n\t\tc-20.5,0-33.5-6.8-33.5-30V59.1h-17.4V41.9h17.4V10.6H833V41.9z"/>\n\t<g>\n\t\t<rect y="115.6" class="st0" width="23.1" height="42"/>\n\t\t<path class="st0" d="M87,7.7C74.6,1.1,66,0,45.7,0H0v95.6h23.1h3h19.4c18.1,0,31.6-1.1,43.5-9c13-8.6,19.7-22.9,19.7-39.4\n\t\t\tC108.7,29.3,100.4,15,87,7.7z M50.8,75.6H23.1V20.5l26.1-0.2C73,20,84.9,28.4,84.9,47.4C84.9,67.8,70.2,75.6,50.8,75.6z"/>\n\t</g>\n\t<path class="st0" d="M546.3,0h38.6c57.8,0.4,85.6,28.6,85.8,79.2c0.2,43.1-22.1,77.9-82,78.5l-42.3,0V0z M569.7,138l13.5,0\n\t\tc41.9,0,63.8-16,63.8-58.9c-0.1-37.7-21.8-59.3-61.6-59.3c-7.7,0-15.7,0.2-15.7,0.2V138z"/>\n\t<path class="st0" d="M189.7,157.7c-0.7-4.6-0.7-7.5-1.1-15.9c-8.8,12.6-20.5,18.1-39,18.1c-24.3,0-41.9-11.9-41.9-33.5\n\t\tc0-24.9,23.8-33.1,54.7-37.3c7.7-1.1,16.3-2,23.8-2.6c0-22.9-12.7-29.8-26-29.8s-23,9.3-23,21.5h-21.6c0-23.5,18.5-39.3,45.1-39.3\n\t\ts47.1,11,47.1,53.4v22.5c0,18.7,0.9,32.4,2.9,43H189.7z M131.7,126.1c0,10.8,8.8,17.6,22.9,17.6c20.7,0,31.8-12.6,31.8-35.1\n\t\tc0-2.9,0-4.9,0.2-6.2C148.9,106.3,131.7,110,131.7,126.1z"/>\n</g>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with PagerDuty is easy with Fusebit! This example lets you list incidents in your customer's PagerDuty instance.\n\n[Learn more](https://developer.fusebit.io/docs/pagerduty)!\n",
    tags: {
      catalog: 'Dev Tools,Operations',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/pagerduty#creating-your-own-pagerduty-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: "Oops! Something went wrong and we couldn't retrieve your incedents from PagerDuty",
          itemName: 'Incedent',
          properties: [
            {
              name: 'incedentTitle',
              label: 'Title',
            },
            {
              name: 'affectedService',
              label: 'Affected Service',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          pagerdutyIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          pagerdutyConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/pagerdutyIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/pagerdutyConnector/properties/id',
            label: 'PagerDuty Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        pagerdutyConnector: {
          pagerdutyName: 'pagerduty-connector',
        },
      },
      entities: {
        pagerdutyConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: '',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-pagerduty-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/pagerduty-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/pagerduty-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'PagerDuty',
          },
        },
        pagerdutyIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-pagerduty-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/pagerduty-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit PagerDuty Integration\n//\n// This simple PagerDuty integration allows you to call PagerDuty APIs on behalf of the tenants of your\n// application. Fusebit manages the PagerDuty authorization process and maps tenants of your application\n// to their PagerDuty credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from witin your application.\nconst router = integration.router;\n\nconst connectorName = 'pagerdutyConnector';\n\n// The sample test endpoint of this integration gets all incidents stored in the PagerDuty account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a PagerDuty client pre-configured with credentials necessary to communicate with your tenant's PagerDuty account.\n  // For the PagerDuty SDK documentation, see https://developer.pagerduty.com/api-reference/ZG9jOjUxNzk5-changelog.\n  const pagerdutyClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const services = await pagerdutyClient.get('/services');\n\n  ctx.body = {\n    message: `Identified ${services.data.services.length} services in PagerDuty.`,\n  };\n});\n\n// Retrieve Incedent Title and URL from PagerDuty\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const pagerdutyClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const incidents = await pagerdutyClient.get('/incidents');\n\n  const incidentList = incidents.resource.map((incident) => ({\n    incedentTitle: incident.title,\n    affectedService: incident.service.summary,\n  }));\n\n  ctx.body = incidentList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'pagerdutyConnector',
                skip: false,
                provider: '@fusebit-int/pagerduty-provider',
                entityId: '<% global.entities.pagerdutyConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'PagerDuty',
          },
        },
      },
    },
  },
  {
    id: 'pipedrive-planned',
    name: 'Pipedrive',
    smallIcon:
      '<svg width="46" height="57" viewBox="0 0 46 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.2555 0C20.8404 0 17.1421 2.87454 15.3718 4.78505C15.1439 3.06734 14.0221 0.91144 9.60517 0.91144H0V10.8146H3.9262C4.57472 10.8146 4.78506 11.0074 4.78506 11.6734V57H16.178V38.7537C17.9659 40.3838 21.3487 42.5923 26.6771 42.5923C37.7897 42.5923 45.607 33.8985 45.607 21.3137C45.6596 8.58856 38.2279 0 27.2555 0ZM24.9419 32.7768C18.8072 32.7768 16.0378 26.9576 16.0378 21.524C16.0378 13.0055 20.7177 9.99078 25.1172 9.99078C30.4982 9.99078 34.1439 14.548 34.1439 21.4364C34.0913 29.3063 29.464 32.7592 24.9419 32.7768Z" fill="#203232"/>\n</svg>\n',
    largeIcon:
      '<svg width="46" height="57" viewBox="0 0 46 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.2555 0C20.8404 0 17.1421 2.87454 15.3718 4.78505C15.1439 3.06734 14.0221 0.91144 9.60517 0.91144H0V10.8146H3.9262C4.57472 10.8146 4.78506 11.0074 4.78506 11.6734V57H16.178V38.7537C17.9659 40.3838 21.3487 42.5923 26.6771 42.5923C37.7897 42.5923 45.607 33.8985 45.607 21.3137C45.6596 8.58856 38.2279 0 27.2555 0ZM24.9419 32.7768C18.8072 32.7768 16.0378 26.9576 16.0378 21.524C16.0378 13.0055 20.7177 9.99078 25.1172 9.99078C30.4982 9.99078 34.1439 14.548 34.1439 21.4364C34.0913 29.3063 29.464 32.7592 24.9419 32.7768Z" fill="#203232"/>\n</svg>\n',
    version: '5.2.0',
    description: 'Easily work with Pipedrive Persons, Organizations, Leads, and Deals to build powerful integrations. ',
    outOfPlan: true,
    tags: {
      catalog: 'CRM,Sales Automation',
    },
    configuration: {},
  },
  {
    id: 'quickbooks-online',
    name: 'QuickBooks Online',
    smallIcon:
      '<svg viewBox="141.137 302.931 505.589 505.597" width="505.589" height="505.597" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <clipPath clipPathUnits="userSpaceOnUse" id="clipPath18">\n      <path d="M 0,858.897 H 612.288 V 0 H 0 Z" id="path16"/>\n    </clipPath>\n  </defs>\n  <g id="g10" transform="matrix(1.333333, 0, 0, -1.333333, 0, 1145.196045)">\n    <g id="g12">\n      <g id="g14" clip-path="url(#clipPath18)">\n        <g id="g20" transform="translate(105.853,442.0996)">\n          <path d="m 0,0 c 0,104.714 84.894,189.599 189.599,189.599 104.714,0 189.593,-84.885 189.593,-189.599 0,-104.708 -84.879,-189.599 -189.593,-189.599 C 84.894,-189.599 0,-104.708 0,0" style="fill:#2ca44a;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path22"/>\n        </g>\n        <g id="g24" transform="translate(158.498,442.1055)">\n          <path d="m 0,0 c 0,-40.724 33.012,-73.725 73.736,-73.725 h 10.532 v 27.376 H 73.736 c -25.553,0 -46.349,20.793 -46.349,46.349 0,25.553 20.796,46.349 46.349,46.349 H 99.048 V -96.905 c 0,-15.127 12.255,-27.381 27.388,-27.381 V 73.73 h -52.7 C 33.012,73.73 0,40.724 0,0 M 200.172,73.719 H 189.637 V 46.334 h 10.535 c 25.557,0 46.349,-20.792 46.349,-46.346 0,-25.555 -20.792,-46.348 -46.349,-46.348 H 174.863 V 96.89 c 0,15.128 -12.269,27.39 -27.391,27.39 V -73.735 h 52.7 c 40.719,0 73.736,33.003 73.736,73.723 0,40.724 -33.017,73.731 -73.736,73.731" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path26"/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',
    largeIcon:
      '<svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n     viewBox="0 0 609.2 373.5" style="enable-background:new 0 0 609.2 373.5;" xml:space="preserve">\n<style type="text/css">\n    .st0{fill:#2CA01C;}\n    .st1{fill:#FFFFFF;}\n</style>\n<path d="M565.6,213c0-1-1-1.4-1.9-1.4H562v5h0.9v-2h0.7l1.1,2h1.1l-1.3-2.2c0.6-0.1,1.1-0.7,1.1-1.3V213z M562.9,213.8v-1.4h0.8\n    c0.5,0,1,0.1,1,0.7c0,0.6-0.6,0.7-1.1,0.7L562.9,213.8z M563.7,209.8c-2.4,0.1-4.4,2.1-4.3,4.5s2.1,4.4,4.5,4.3\n    c2.4-0.1,4.4-2.1,4.3-4.5c0-2.4-2-4.4-4.4-4.4C563.8,209.7,563.7,209.7,563.7,209.8L563.7,209.8z M563.7,217.8\n    c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0.1,0,0.1c0,2.1-1.7,3.8-3.8,3.8V217.8z M277.7,210.5\n    c-6.5,0-9.8-5.9-9.8-11.5s3.6-11.2,9.5-11.2c2.8,0,6.3,1.4,7.7,3.4l6.8-6.9c-3.9-3.7-9.1-5.8-14.5-5.6c-12,0-20.7,8.6-20.7,20.4\n    c0,12,8.6,20.5,21,20.5c5.8,0,11.2-1.7,14.4-5.2l-6.7-7.2C283.4,209.3,280.6,210.5,277.7,210.5z M239.2,218.5H250v-38.7h-10.7\n    L239.2,218.5z M219.7,201c0,4.5-3,9.4-8.4,9.4c-4.3,0-6.6-3-6.6-9.3v-21.2H194v24c0,8,4,15.8,14.7,15.8c5,0,9.2-4,11.3-7h0.2v5.9\n    h10.2v-38.8h-10.7V201z M174.7,184.7h-0.2c-1.5-1.7-5.6-6-12.2-6c-10.9,0-19.3,8.5-19.3,20.3c0,12,7.8,20.6,18.8,20.6\n    c4.8-0.1,9.2-2.2,12.4-5.8h0.2v23.7H185v-57.7h-10.2L174.7,184.7z M164.4,210.5c-6.6,0-10.4-5.8-10.4-11.5c0-5.5,3.4-11.3,10.4-11.3\n    c6.3,0,10.2,6,10.2,11.4C174.6,204.5,170.8,210.5,164.4,210.5z M407.7,178.7c-12.1,0-21,8.5-21,20.3c0,12.2,9,20.7,21,20.7\n    s21-8.6,21-20.7C428.7,187.2,419.9,178.7,407.7,178.7z M407.7,210.5c-7,0-10.1-6-10.1-11.5s3.2-11.3,10.1-11.3S418,193.5,418,199\n    S414.8,210.5,407.7,210.5L407.7,210.5z M541.3,194.7c-5.5-1.3-7.5-2-7.5-4.3c0-3,4-3.7,5.7-3.7c3.3,0,7,2,8.5,3.8l6.3-6\n    c-3-3.6-8.7-5.7-14.7-5.7c-7.8,0-15.9,3.9-15.9,12.5c0,7.5,5.9,9.7,11.6,11.1c6,1.4,8.2,2.4,8.2,4.9c0,3.5-4,4.1-5.5,4.1\n    c-3.7-0.2-7.2-1.8-9.7-4.6l-6.5,6.6c3.5,4,9.6,6.3,15.8,6.3c10.5,0,16.7-5,16.7-13.2C554.3,198.7,546.7,196,541.3,194.7L541.3,194.7\n    z M521,179.8h-13.8l-13.8,16h-0.2v-37.3h-10.7v60h10.7v-19h0.2l14.3,19h14l-16.6-21.1L521,179.8z M362.6,178.8c-5,0-8.5,2-12,5.2\n    h-0.1v-25.5h-10.7v60H350V213h0.2c2.7,4.1,7.2,6.5,12.1,6.5c11,0,19.4-8.6,19.4-20.5c0-11.8-8.2-20.3-19.1-20.3V178.8z M360.5,210.5\n    c-6.5,0-10.3-5.8-10.3-11.4c0-5.6,4-11.4,10.3-11.4c6.9,0,10.3,5.8,10.3,11.3C370.8,204.7,367.1,210.5,360.5,210.5z M335.8,179.8\n    H322l-13.8,16H308v-37.3h-10.7v60H308v-19h0.2l14.3,19h14L320,197.4L335.8,179.8z M454.6,178.8c-12.2,0-21,8.5-21,20.2\n    c0,12.2,9,20.7,21,20.7s21-8.6,21-20.7c0-11.8-8.9-20.3-21-20.3V178.8z M454.6,210.5c-7,0-10.2-6-10.2-11.5s3.2-11.3,10.2-11.3\n    s10.1,5.8,10.1,11.3S461.5,210.5,454.6,210.5z"/>\n<circle class="st0" cx="86" cy="181" r="45"/>\n<path class="st1" d="M53.5,181c0,9.7,7.8,17.5,17.5,17.5h2.5V192H71c-6.1,0-11-4.9-11-11s4.9-11,11-11h6v34c0,3.6,2.9,6.5,6.5,6.5\n    l0,0v-47H71C61.3,163.5,53.5,171.3,53.5,181z M101,163.5h-2.5v6.5h2.5c6.1,0,11,4.9,11,11s-4.9,11-11,11h-6v-34\n    c0-3.6-2.9-6.5-6.5-6.5v47H101c9.7,0,17.5-7.8,17.5-17.5S110.7,163.5,101,163.5z"/>\n<path d="M187,146.3c1.7,0,3-1.3,3-3c0-1.7-1.3-3-3-3s-3,1.3-3,3C184,145,185.3,146.3,187,146.3z M169.3,148.3c-2.5,0-4.9,1.4-6,3.7\n    h-0.2v-3.2h-4.6v19.7h4.9v-10.8c0-2.6,1.5-5.3,4.6-5.3c3.1,0,3.7,2.9,3.7,5.2v11h4.9v-12.5c0-4-2.1-8-7.3-8V148.3z M148.5,168.5h5\n    v-19.7h-5V168.5z M238,146.2c1.7,0,3-1.3,3-3c0-1.7-1.3-3-3-3s-3,1.3-3,3C235,144.9,236.3,146.2,238,146.2z M230,148.8v4.4h5.5v15.3\n    h5v-15.3h5.5v-4.4H230z M221.6,168.5h5v-19.7h-5V168.5z M179.1,153.2h5.5v15.3h5v-15.3h5.5v-4.4h-16V153.2z M211.7,159.7\n    c0,2.6-1.5,5.3-4.6,5.3s-3.7-3-3.7-5.3v-10.9h-5v12.3c0,4,2.2,8,7.3,8c2.6,0,4.9-1.4,6.1-3.7h0.1v3.2h4.7v-19.8h-5L211.7,159.7\n    L211.7,159.7z"/>\n</svg>\n\n',
    version: '5.2.0',
    description:
      'Integrating with QuickBooks Online is easy with Fusebit! This example lets you easily access invoices and transactions in your customer&#39;s account through their QuickBooks Online API.\n\n[Learn more](https://developer.fusebit.io/docs/quickbooks-online)!\n',
    tags: {
      catalog: 'Accounting',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/quickbooks-online#creating-your-own-quickbooks-online-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: true,
        terms: {
          postSuccess: 'Your customer was successfully added to QuickBooks!',
          postFail: "Oops! Something went wrong and we couldn't add your customers.",
          getFail: "Oops! Something went wrong and we couldn't retrieve your customers.",
          itemName: 'Customer',
          properties: [
            {
              name: 'GivenName',
              label: 'First Name',
            },
            {
              name: 'FamilyName',
              label: 'Last Name',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          quickbooksIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          quickbooksConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/quickbooksIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/quickbooksConnector/properties/id',
            label: 'QuickBooks Online Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        quickbooksConnector: {
          quickbooksName: 'quickbooks-connector',
        },
      },
      entities: {
        quickbooksConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'com.intuit.quickbooks.accounting',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-quickbooks-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/quickbooks-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/quickbooks-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'QuickBooks Online',
          },
        },
        quickbooksIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-quickbooks-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/quickbooks-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit QuickBooks Online Integration\n//\n// This simple QuickBooks Online integration allows you to call QuickBooks Online APIs on behalf of the tenants of your\n// application. Fusebit manages the QuickBooks Online authorization process and maps tenants of your application\n// to their QuickBooks Online credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Remove this line when using production credentials for QuickBooks.  This flag enables using the\n// sandbox (https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes) endpoints when\n// using credentials registered with this integration.\nprocess.env.QUICKBOOKS_USE_SANDBOX = '1';\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'quickbooksConnector';\n\n// The sample test endpoint of this integration gets all Accounts.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a QuickBooks Online client pre-configured with credentials necessary to communicate with your tenant's QuickBooks Online account.\n  // For the QuickBooks Online SDK documentation, see https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account\n  // and https://www.npmjs.com/package/node-quickbooks.\n  const sdk = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const accounts = await sdk.findAccounts();\n\n  ctx.body = { message: `Account total: ${accounts.QueryResponse.Account.length}` };\n});\n\n// Used by the sample application to get customers in the account.\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const sdk = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const customers = await sdk.findCustomers({ fetchAll: true });\n  const customersList = customers.QueryResponse.Customer.map((customers) => ({\n    GivenName: customers.GivenName,\n    FamilyName: customers.FamilyName,\n  }));\n\n  ctx.body = customersList;\n});\n\n// Used by the sample application to add customers to the account.\nrouter.post('/api/tenant/:tenantId/item', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const sdk = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const customer = await sdk.createCustomer(ctx.req.body);\n\n  ctx.body = customer;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'quickbooksConnector',
                skip: false,
                provider: '@fusebit-int/quickbooks-provider',
                entityId: '<% global.entities.quickbooksConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'quickbooks-online',
          },
        },
      },
    },
  },
  {
    id: 'reddit',
    name: 'Reddit',
    smallIcon:
      '<svg width="172px" height="172px" viewBox="0 0 172 172" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Reddit_Mark_OnWhite" transform="translate(-85.000000, -85.000000)">\n            <g id="Artwork" transform="translate(85.000000, 85.000000)">\n                <g id="Group">\n                    <circle id="Oval" fill="#FF4500" cx="85.9" cy="85.9" r="85.5"></circle>\n                    <path d="M142.9,85.9 C142.9,79 137.3,73.4 130.4,73.4 C127,73.4 124,74.7 121.8,76.9 C113.3,70.8 101.5,66.8 88.5,66.3 L94.2,39.6 L112.7,43.5 C112.9,48.2 116.8,52 121.6,52 C126.5,52 130.5,48 130.5,43.1 C130.5,38.2 126.5,34.2 121.6,34.2 C118.1,34.2 115.1,36.2 113.7,39.2 L93,34.8 C92.4,34.7 91.8,34.8 91.3,35.1 C90.8,35.4 90.5,35.9 90.3,36.5 L84,66.3 C70.7,66.7 58.8,70.6 50.2,76.9 C48,74.8 44.9,73.4 41.6,73.4 C34.7,73.4 29.1,79 29.1,85.9 C29.1,91 32.1,95.3 36.5,97.3 C36.3,98.5 36.2,99.8 36.2,101.1 C36.2,120.3 58.5,135.8 86.1,135.8 C113.7,135.8 136,120.3 136,101.1 C136,99.8 135.9,98.6 135.7,97.4 C139.8,95.4 142.9,91 142.9,85.9 Z M57.4,94.8 C57.4,89.9 61.4,85.9 66.3,85.9 C71.2,85.9 75.2,89.9 75.2,94.8 C75.2,99.7 71.2,103.7 66.3,103.7 C61.4,103.7 57.4,99.7 57.4,94.8 Z M107.1,118.3 C101,124.4 89.4,124.8 86,124.8 C82.6,124.8 70.9,124.3 64.9,118.3 C64,117.4 64,115.9 64.9,115 C65.8,114.1 67.3,114.1 68.2,115 C72,118.8 80.2,120.2 86.1,120.2 C92,120.2 100.1,118.8 104,115 C104.9,114.1 106.4,114.1 107.3,115 C108,116 108,117.4 107.1,118.3 Z M105.5,103.7 C100.6,103.7 96.6,99.7 96.6,94.8 C96.6,89.9 100.6,85.9 105.5,85.9 C110.4,85.9 114.4,89.9 114.4,94.8 C114.4,99.7 110.4,103.7 105.5,103.7 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>\n',
    largeIcon:
      '<svg width="172px" height="172px" viewBox="0 0 172 172" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Reddit_Mark_OnWhite" transform="translate(-85.000000, -85.000000)">\n            <g id="Artwork" transform="translate(85.000000, 85.000000)">\n                <g id="Group">\n                    <circle id="Oval" fill="#FF4500" cx="85.9" cy="85.9" r="85.5"></circle>\n                    <path d="M142.9,85.9 C142.9,79 137.3,73.4 130.4,73.4 C127,73.4 124,74.7 121.8,76.9 C113.3,70.8 101.5,66.8 88.5,66.3 L94.2,39.6 L112.7,43.5 C112.9,48.2 116.8,52 121.6,52 C126.5,52 130.5,48 130.5,43.1 C130.5,38.2 126.5,34.2 121.6,34.2 C118.1,34.2 115.1,36.2 113.7,39.2 L93,34.8 C92.4,34.7 91.8,34.8 91.3,35.1 C90.8,35.4 90.5,35.9 90.3,36.5 L84,66.3 C70.7,66.7 58.8,70.6 50.2,76.9 C48,74.8 44.9,73.4 41.6,73.4 C34.7,73.4 29.1,79 29.1,85.9 C29.1,91 32.1,95.3 36.5,97.3 C36.3,98.5 36.2,99.8 36.2,101.1 C36.2,120.3 58.5,135.8 86.1,135.8 C113.7,135.8 136,120.3 136,101.1 C136,99.8 135.9,98.6 135.7,97.4 C139.8,95.4 142.9,91 142.9,85.9 Z M57.4,94.8 C57.4,89.9 61.4,85.9 66.3,85.9 C71.2,85.9 75.2,89.9 75.2,94.8 C75.2,99.7 71.2,103.7 66.3,103.7 C61.4,103.7 57.4,99.7 57.4,94.8 Z M107.1,118.3 C101,124.4 89.4,124.8 86,124.8 C82.6,124.8 70.9,124.3 64.9,118.3 C64,117.4 64,115.9 64.9,115 C65.8,114.1 67.3,114.1 68.2,115 C72,118.8 80.2,120.2 86.1,120.2 C92,120.2 100.1,118.8 104,115 C104.9,114.1 106.4,114.1 107.3,115 C108,116 108,117.4 107.1,118.3 Z M105.5,103.7 C100.6,103.7 96.6,99.7 96.6,94.8 C96.6,89.9 100.6,85.9 105.5,85.9 C110.4,85.9 114.4,89.9 114.4,94.8 C114.4,99.7 110.4,103.7 105.5,103.7 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with Reddit is easy with Fusebit! This example lets you list the accessible resources in your customer's Reddit account.\n\n[Learn more](https://developer.fusebit.io/docs/reddit)!\n",
    tags: {
      catalog: 'Social,Community',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/reddit#creating-your-own-reddit-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          redditIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          redditConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/redditIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/redditConnector/properties/id',
            label: 'Reddit Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        redditConnector: {
          redditName: 'reddit-connector',
        },
      },
      entities: {
        redditConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'identity read',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-reddit-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/reddit-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/reddit-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Reddit',
          },
        },
        redditIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-reddit-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/reddit-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Reddit Integration\n//\n// This simple Reddit integration allows you to call Reddit APIs on behalf of the tenants of your\n// application. Fusebit manages the Reddit authorization process and maps tenants of your application\n// to their Reddit credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from witin your application.\nconst router = integration.router;\n\nconst connectorName = 'redditConnector';\n\n// This sample test endpoint provides the reddit karma held by the tenant\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const redditClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const me = await redditClient.getMe();\n  const { link_karma, comment_karma } = me;\n  ctx.body = {\n    message: `This tenant has ${link_karma} karma from submitted posts and ${comment_karma} karma from comments.`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'redditConnector',
                skip: false,
                provider: '@fusebit-int/reddit-provider',
                entityId: '<% global.entities.redditConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Reddit',
          },
        },
      },
    },
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1750" viewBox="0.5 0.5 999 699.242"><path fill="#00A1E0" d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"/><path fill="#FFF" d="M145.196 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.707 3.444 10.189 5.407 19.81 6.986 29.871 6.986 20.492 0 33.214-10.9 33.214-28.447v-.341c0-16.224-14.358-22.115-27.835-26.37l-1.75-.569c-10.161-3.302-18.927-6.147-18.927-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.042 6.66 0 0 1.978 1.281 2.704-.64.398-1.025 3.814-10.218 4.17-11.214.384-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.049.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.358 5.635 18.358 12.58v.342c0 6.347-5.521 11.071-14.43 11.071-3.458 0-14.487-.071-26.398-7.6-1.438-.84-2.277-1.451-3.387-2.12-.583-.37-2.049-1.011-2.689.925l-4.045 11.215zM445.194 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.706 3.444 10.189 5.407 19.811 6.986 29.871 6.986 20.492 0 33.215-10.9 33.215-28.447v-.341c0-16.224-14.359-22.115-27.836-26.37l-1.75-.569c-10.161-3.302-18.928-6.147-18.928-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.043 6.66 0 0 1.978 1.281 2.703-.64.398-1.025 3.814-10.218 4.17-11.214.385-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.05.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.373 5.635 18.373 12.58v.342c0 6.347-5.536 11.071-14.445 11.071-3.457 0-14.486-.071-26.397-7.6-1.438-.84-2.291-1.423-3.372-2.12-.371-.242-2.107-.911-2.705.925l-4.042 11.215zM649.995 328.74c0 9.919-1.85 17.731-5.493 23.253-3.601 5.465-9.051 8.126-16.649 8.126-7.613 0-13.035-2.647-16.579-8.126-3.587-5.507-5.407-13.334-5.407-23.253 0-9.904 1.82-17.703 5.407-23.168 3.544-5.407 8.966-8.04 16.579-8.04 7.599 0 13.049 2.633 16.664 8.04 3.629 5.464 5.478 13.263 5.478 23.168m17.106-18.386c-1.68-5.679-4.298-10.688-7.784-14.857-3.487-4.184-7.898-7.542-13.136-9.99-5.223-2.433-11.398-3.671-18.328-3.671-6.945 0-13.121 1.238-18.344 3.671-5.237 2.448-9.648 5.807-13.149 9.99-3.472 4.184-6.091 9.193-7.784 14.857-1.665 5.649-2.505 11.825-2.505 18.386s.84 12.751 2.505 18.386c1.693 5.664 4.298 10.674 7.799 14.857 3.486 4.184 7.912 7.528 13.135 9.904 5.236 2.377 11.398 3.586 18.344 3.586 6.93 0 13.092-1.209 18.328-3.586 5.223-2.376 9.648-5.721 13.136-9.904 3.486-4.17 6.104-9.179 7.784-14.857 1.68-5.649 2.519-11.84 2.519-18.386s-.841-12.737-2.52-18.386M807.568 357.47c-.569-1.665-2.177-1.039-2.177-1.039-2.49.954-5.138 1.836-7.955 2.277-2.861.44-6.006.669-9.379.669-8.281 0-14.856-2.462-19.566-7.329-4.725-4.867-7.372-12.736-7.344-23.381.029-9.691 2.362-16.978 6.561-22.527 4.17-5.521 10.517-8.354 18.984-8.354 7.059 0 12.438.811 18.072 2.59 0 0 1.352.583 1.992-1.181 1.494-4.156 2.604-7.13 4.198-11.698.456-1.295-.654-1.85-1.053-2.007-2.22-.868-7.457-2.276-11.413-2.874-3.7-.569-8.026-.868-12.836-.868-7.188 0-13.591 1.224-19.069 3.672-5.465 2.433-10.104 5.791-13.775 9.976-3.672 4.184-6.461 9.192-8.325 14.856-1.85 5.649-2.789 11.854-2.789 18.415 0 14.188 3.828 25.657 11.385 34.054 7.57 8.425 18.941 12.708 33.77 12.708 8.766 0 17.76-1.778 24.221-4.326 0 0 1.238-.598.697-2.034l-4.199-11.599zM837.497 319.238c.811-5.507 2.334-10.09 4.682-13.661 3.544-5.422 8.951-8.396 16.551-8.396s12.623 2.988 16.223 8.396c2.391 3.571 3.43 8.354 3.843 13.661h-41.299zm57.592-12.111c-1.451-5.479-5.052-11.015-7.414-13.548-3.729-4.013-7.371-6.816-10.986-8.382-4.725-2.021-10.389-3.358-16.593-3.358-7.229 0-13.79 1.21-19.112 3.714-5.336 2.505-9.818 5.921-13.334 10.176-3.516 4.24-6.162 9.292-7.842 15.027-1.693 5.707-2.547 11.926-2.547 18.485 0 6.675.883 12.894 2.633 18.486 1.765 5.636 4.582 10.602 8.396 14.714 3.799 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.894 3.416 21.019 3.401 16.722-.057 25.53-3.785 29.159-5.792.641-.355 1.253-.981.483-2.774l-3.785-10.603c-.568-1.579-2.177-.996-2.177-.996-4.142 1.537-10.032 4.298-23.766 4.27-8.979-.014-15.64-2.661-19.81-6.803-4.283-4.24-6.375-10.474-6.745-19.268l57.905.057s1.522-.028 1.68-1.509c.057-.624 1.993-11.895-1.722-24.945M373.762 319.238c.825-5.507 2.334-10.09 4.682-13.661 3.543-5.422 8.951-8.396 16.55-8.396s12.623 2.988 16.237 8.396c2.376 3.571 3.415 8.354 3.828 13.661h-41.297zm57.577-12.111c-1.451-5.479-5.037-11.015-7.399-13.548-3.729-4.013-7.372-6.816-10.986-8.382-4.725-2.021-10.388-3.358-16.593-3.358-7.215 0-13.79 1.21-19.112 3.714-5.336 2.505-9.819 5.921-13.334 10.176-3.515 4.24-6.162 9.292-7.841 15.027-1.679 5.707-2.547 11.926-2.547 18.485 0 6.675.882 12.894 2.633 18.486 1.765 5.636 4.583 10.602 8.396 14.714 3.8 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.893 3.416 21.019 3.401 16.721-.057 25.53-3.785 29.159-5.792.641-.355 1.252-.981.484-2.774l-3.771-10.603c-.584-1.579-2.191-.996-2.191-.996-4.141 1.537-10.019 4.298-23.78 4.27-8.965-.014-15.625-2.661-19.795-6.803-4.284-4.24-6.375-10.474-6.746-19.268l57.905.057s1.522-.028 1.679-1.509c.055-.624 1.99-11.895-1.738-24.945M248.601 357.153c-2.263-1.808-2.576-2.263-3.344-3.43-1.139-1.779-1.722-4.312-1.722-7.528 0-5.095 1.679-8.752 5.166-11.214-.042.015 4.981-4.34 16.792-4.184 8.296.114 15.71 1.338 15.71 1.338v26.327h.014s-7.357 1.579-15.639 2.077c-11.783.712-17.02-3.4-16.977-3.386m23.039-40.686c-2.348-.171-5.394-.271-9.037-.271-4.966 0-9.762.626-14.259 1.836-4.525 1.209-8.595 3.103-12.096 5.606a27.927 27.927 0 0 0-8.396 9.549c-2.049 3.814-3.088 8.311-3.088 13.349 0 5.123.882 9.577 2.647 13.221 1.765 3.657 4.312 6.702 7.556 9.051 3.216 2.348 7.187 4.069 11.797 5.108 4.54 1.039 9.691 1.565 15.327 1.565 5.934 0 11.854-.483 17.589-1.466 5.678-.968 12.651-2.377 14.586-2.817a146.25 146.25 0 0 0 4.056-1.039c1.438-.355 1.324-1.893 1.324-1.893l-.029-52.952c0-11.613-3.102-20.223-9.207-25.559-6.077-5.322-15.028-8.013-26.597-8.013-4.341 0-11.328.599-15.512 1.438 0 0-12.651 2.448-17.86 6.518 0 0-1.138.712-.512 2.306l4.099 11.015c.512 1.423 1.893.939 1.893.939s.441-.171.954-.47c11.143-6.062 25.231-5.877 25.231-5.877 6.262 0 11.072 1.252 14.316 3.742 3.159 2.419 4.767 6.076 4.767 13.789v2.448c-4.981-.711-9.549-1.123-9.549-1.123M738.669 286.631c.44-1.31-.484-1.936-.869-2.078-.981-.384-5.905-1.423-9.705-1.665-7.271-.441-11.312.783-14.928 2.405-3.586 1.622-7.57 4.24-9.791 7.215v-7.044c0-.982-.697-1.765-1.665-1.765h-14.843c-.967 0-1.664.782-1.664 1.765v86.366c0 .968.797 1.765 1.764 1.765h15.213a1.76 1.76 0 0 0 1.75-1.765v-43.147c0-5.792.641-11.569 1.922-15.198 1.252-3.587 2.96-6.461 5.066-8.525 2.12-2.049 4.525-3.486 7.158-4.297 2.689-.826 5.663-1.096 7.77-1.096 3.031 0 6.361.782 6.361.782 1.109.128 1.736-.555 2.105-1.565.997-2.647 3.815-10.574 4.356-12.153"/><path fill="#FFF" d="M595.874 246.603c-1.85-.569-3.529-.954-5.721-1.366-2.221-.398-4.867-.598-7.869-.598-10.475 0-18.729 2.96-24.52 8.794-5.764 5.807-9.678 14.644-11.642 26.271l-.712 3.913h-13.148s-1.594-.057-1.936 1.68l-2.148 12.053c-.157 1.139.342 1.864 1.878 1.864h12.794l-12.979 72.463c-1.011 5.835-2.178 10.631-3.473 14.273-1.267 3.587-2.504 6.276-4.041 8.24-1.48 1.879-2.875 3.273-5.295 4.084-1.992.669-4.297.982-6.816.982-1.395 0-3.258-.229-4.639-.513-1.366-.271-2.092-.569-3.131-1.011 0 0-1.494-.568-2.092.926-.47 1.238-3.885 10.615-4.298 11.769-.398 1.152.171 2.049.896 2.319 1.708.598 2.974.996 5.294 1.551 3.217.755 5.934.797 8.481.797 5.322 0 10.189-.754 14.217-2.205 4.042-1.466 7.57-4.014 10.701-7.457 3.373-3.729 5.493-7.628 7.515-12.964 2.006-5.266 3.729-11.812 5.094-19.439l13.05-73.815h19.069s1.607.057 1.936-1.693l2.162-12.039c.143-1.152-.341-1.864-1.893-1.864h-18.514c.1-.412.939-6.931 3.06-13.063.911-2.604 2.618-4.725 4.056-6.177 1.424-1.423 3.06-2.433 4.854-3.017 1.835-.598 3.928-.882 6.219-.882 1.736 0 3.457.199 4.752.469 1.793.385 2.49.584 2.961.727 1.893.569 2.148.014 2.519-.896l4.426-12.153c.455-1.312-.669-1.867-1.067-2.023M337.194 371.834c0 .968-.697 1.751-1.665 1.751h-15.355c-.968 0-1.651-.783-1.651-1.751v-123.58c0-.967.683-1.75 1.651-1.75h15.355c.968 0 1.665.783 1.665 1.75v123.58z"/></svg>',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1750" viewBox="0.5 0.5 999 699.242"><path fill="#00A1E0" d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"/><path fill="#FFF" d="M145.196 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.707 3.444 10.189 5.407 19.81 6.986 29.871 6.986 20.492 0 33.214-10.9 33.214-28.447v-.341c0-16.224-14.358-22.115-27.835-26.37l-1.75-.569c-10.161-3.302-18.927-6.147-18.927-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.042 6.66 0 0 1.978 1.281 2.704-.64.398-1.025 3.814-10.218 4.17-11.214.384-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.049.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.358 5.635 18.358 12.58v.342c0 6.347-5.521 11.071-14.43 11.071-3.458 0-14.487-.071-26.398-7.6-1.438-.84-2.277-1.451-3.387-2.12-.583-.37-2.049-1.011-2.689.925l-4.045 11.215zM445.194 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.706 3.444 10.189 5.407 19.811 6.986 29.871 6.986 20.492 0 33.215-10.9 33.215-28.447v-.341c0-16.224-14.359-22.115-27.836-26.37l-1.75-.569c-10.161-3.302-18.928-6.147-18.928-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.043 6.66 0 0 1.978 1.281 2.703-.64.398-1.025 3.814-10.218 4.17-11.214.385-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.05.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.373 5.635 18.373 12.58v.342c0 6.347-5.536 11.071-14.445 11.071-3.457 0-14.486-.071-26.397-7.6-1.438-.84-2.291-1.423-3.372-2.12-.371-.242-2.107-.911-2.705.925l-4.042 11.215zM649.995 328.74c0 9.919-1.85 17.731-5.493 23.253-3.601 5.465-9.051 8.126-16.649 8.126-7.613 0-13.035-2.647-16.579-8.126-3.587-5.507-5.407-13.334-5.407-23.253 0-9.904 1.82-17.703 5.407-23.168 3.544-5.407 8.966-8.04 16.579-8.04 7.599 0 13.049 2.633 16.664 8.04 3.629 5.464 5.478 13.263 5.478 23.168m17.106-18.386c-1.68-5.679-4.298-10.688-7.784-14.857-3.487-4.184-7.898-7.542-13.136-9.99-5.223-2.433-11.398-3.671-18.328-3.671-6.945 0-13.121 1.238-18.344 3.671-5.237 2.448-9.648 5.807-13.149 9.99-3.472 4.184-6.091 9.193-7.784 14.857-1.665 5.649-2.505 11.825-2.505 18.386s.84 12.751 2.505 18.386c1.693 5.664 4.298 10.674 7.799 14.857 3.486 4.184 7.912 7.528 13.135 9.904 5.236 2.377 11.398 3.586 18.344 3.586 6.93 0 13.092-1.209 18.328-3.586 5.223-2.376 9.648-5.721 13.136-9.904 3.486-4.17 6.104-9.179 7.784-14.857 1.68-5.649 2.519-11.84 2.519-18.386s-.841-12.737-2.52-18.386M807.568 357.47c-.569-1.665-2.177-1.039-2.177-1.039-2.49.954-5.138 1.836-7.955 2.277-2.861.44-6.006.669-9.379.669-8.281 0-14.856-2.462-19.566-7.329-4.725-4.867-7.372-12.736-7.344-23.381.029-9.691 2.362-16.978 6.561-22.527 4.17-5.521 10.517-8.354 18.984-8.354 7.059 0 12.438.811 18.072 2.59 0 0 1.352.583 1.992-1.181 1.494-4.156 2.604-7.13 4.198-11.698.456-1.295-.654-1.85-1.053-2.007-2.22-.868-7.457-2.276-11.413-2.874-3.7-.569-8.026-.868-12.836-.868-7.188 0-13.591 1.224-19.069 3.672-5.465 2.433-10.104 5.791-13.775 9.976-3.672 4.184-6.461 9.192-8.325 14.856-1.85 5.649-2.789 11.854-2.789 18.415 0 14.188 3.828 25.657 11.385 34.054 7.57 8.425 18.941 12.708 33.77 12.708 8.766 0 17.76-1.778 24.221-4.326 0 0 1.238-.598.697-2.034l-4.199-11.599zM837.497 319.238c.811-5.507 2.334-10.09 4.682-13.661 3.544-5.422 8.951-8.396 16.551-8.396s12.623 2.988 16.223 8.396c2.391 3.571 3.43 8.354 3.843 13.661h-41.299zm57.592-12.111c-1.451-5.479-5.052-11.015-7.414-13.548-3.729-4.013-7.371-6.816-10.986-8.382-4.725-2.021-10.389-3.358-16.593-3.358-7.229 0-13.79 1.21-19.112 3.714-5.336 2.505-9.818 5.921-13.334 10.176-3.516 4.24-6.162 9.292-7.842 15.027-1.693 5.707-2.547 11.926-2.547 18.485 0 6.675.883 12.894 2.633 18.486 1.765 5.636 4.582 10.602 8.396 14.714 3.799 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.894 3.416 21.019 3.401 16.722-.057 25.53-3.785 29.159-5.792.641-.355 1.253-.981.483-2.774l-3.785-10.603c-.568-1.579-2.177-.996-2.177-.996-4.142 1.537-10.032 4.298-23.766 4.27-8.979-.014-15.64-2.661-19.81-6.803-4.283-4.24-6.375-10.474-6.745-19.268l57.905.057s1.522-.028 1.68-1.509c.057-.624 1.993-11.895-1.722-24.945M373.762 319.238c.825-5.507 2.334-10.09 4.682-13.661 3.543-5.422 8.951-8.396 16.55-8.396s12.623 2.988 16.237 8.396c2.376 3.571 3.415 8.354 3.828 13.661h-41.297zm57.577-12.111c-1.451-5.479-5.037-11.015-7.399-13.548-3.729-4.013-7.372-6.816-10.986-8.382-4.725-2.021-10.388-3.358-16.593-3.358-7.215 0-13.79 1.21-19.112 3.714-5.336 2.505-9.819 5.921-13.334 10.176-3.515 4.24-6.162 9.292-7.841 15.027-1.679 5.707-2.547 11.926-2.547 18.485 0 6.675.882 12.894 2.633 18.486 1.765 5.636 4.583 10.602 8.396 14.714 3.8 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.893 3.416 21.019 3.401 16.721-.057 25.53-3.785 29.159-5.792.641-.355 1.252-.981.484-2.774l-3.771-10.603c-.584-1.579-2.191-.996-2.191-.996-4.141 1.537-10.019 4.298-23.78 4.27-8.965-.014-15.625-2.661-19.795-6.803-4.284-4.24-6.375-10.474-6.746-19.268l57.905.057s1.522-.028 1.679-1.509c.055-.624 1.99-11.895-1.738-24.945M248.601 357.153c-2.263-1.808-2.576-2.263-3.344-3.43-1.139-1.779-1.722-4.312-1.722-7.528 0-5.095 1.679-8.752 5.166-11.214-.042.015 4.981-4.34 16.792-4.184 8.296.114 15.71 1.338 15.71 1.338v26.327h.014s-7.357 1.579-15.639 2.077c-11.783.712-17.02-3.4-16.977-3.386m23.039-40.686c-2.348-.171-5.394-.271-9.037-.271-4.966 0-9.762.626-14.259 1.836-4.525 1.209-8.595 3.103-12.096 5.606a27.927 27.927 0 0 0-8.396 9.549c-2.049 3.814-3.088 8.311-3.088 13.349 0 5.123.882 9.577 2.647 13.221 1.765 3.657 4.312 6.702 7.556 9.051 3.216 2.348 7.187 4.069 11.797 5.108 4.54 1.039 9.691 1.565 15.327 1.565 5.934 0 11.854-.483 17.589-1.466 5.678-.968 12.651-2.377 14.586-2.817a146.25 146.25 0 0 0 4.056-1.039c1.438-.355 1.324-1.893 1.324-1.893l-.029-52.952c0-11.613-3.102-20.223-9.207-25.559-6.077-5.322-15.028-8.013-26.597-8.013-4.341 0-11.328.599-15.512 1.438 0 0-12.651 2.448-17.86 6.518 0 0-1.138.712-.512 2.306l4.099 11.015c.512 1.423 1.893.939 1.893.939s.441-.171.954-.47c11.143-6.062 25.231-5.877 25.231-5.877 6.262 0 11.072 1.252 14.316 3.742 3.159 2.419 4.767 6.076 4.767 13.789v2.448c-4.981-.711-9.549-1.123-9.549-1.123M738.669 286.631c.44-1.31-.484-1.936-.869-2.078-.981-.384-5.905-1.423-9.705-1.665-7.271-.441-11.312.783-14.928 2.405-3.586 1.622-7.57 4.24-9.791 7.215v-7.044c0-.982-.697-1.765-1.665-1.765h-14.843c-.967 0-1.664.782-1.664 1.765v86.366c0 .968.797 1.765 1.764 1.765h15.213a1.76 1.76 0 0 0 1.75-1.765v-43.147c0-5.792.641-11.569 1.922-15.198 1.252-3.587 2.96-6.461 5.066-8.525 2.12-2.049 4.525-3.486 7.158-4.297 2.689-.826 5.663-1.096 7.77-1.096 3.031 0 6.361.782 6.361.782 1.109.128 1.736-.555 2.105-1.565.997-2.647 3.815-10.574 4.356-12.153"/><path fill="#FFF" d="M595.874 246.603c-1.85-.569-3.529-.954-5.721-1.366-2.221-.398-4.867-.598-7.869-.598-10.475 0-18.729 2.96-24.52 8.794-5.764 5.807-9.678 14.644-11.642 26.271l-.712 3.913h-13.148s-1.594-.057-1.936 1.68l-2.148 12.053c-.157 1.139.342 1.864 1.878 1.864h12.794l-12.979 72.463c-1.011 5.835-2.178 10.631-3.473 14.273-1.267 3.587-2.504 6.276-4.041 8.24-1.48 1.879-2.875 3.273-5.295 4.084-1.992.669-4.297.982-6.816.982-1.395 0-3.258-.229-4.639-.513-1.366-.271-2.092-.569-3.131-1.011 0 0-1.494-.568-2.092.926-.47 1.238-3.885 10.615-4.298 11.769-.398 1.152.171 2.049.896 2.319 1.708.598 2.974.996 5.294 1.551 3.217.755 5.934.797 8.481.797 5.322 0 10.189-.754 14.217-2.205 4.042-1.466 7.57-4.014 10.701-7.457 3.373-3.729 5.493-7.628 7.515-12.964 2.006-5.266 3.729-11.812 5.094-19.439l13.05-73.815h19.069s1.607.057 1.936-1.693l2.162-12.039c.143-1.152-.341-1.864-1.893-1.864h-18.514c.1-.412.939-6.931 3.06-13.063.911-2.604 2.618-4.725 4.056-6.177 1.424-1.423 3.06-2.433 4.854-3.017 1.835-.598 3.928-.882 6.219-.882 1.736 0 3.457.199 4.752.469 1.793.385 2.49.584 2.961.727 1.893.569 2.148.014 2.519-.896l4.426-12.153c.455-1.312-.669-1.867-1.067-2.023M337.194 371.834c0 .968-.697 1.751-1.665 1.751h-15.355c-.968 0-1.651-.783-1.651-1.751v-123.58c0-.967.683-1.75 1.651-1.75h15.355c.968 0 1.665.783 1.665 1.75v123.58z"/></svg>',
    version: '5.2.0',
    description:
      "Integrating with Salesforce is easy with Fusebit! This example lets you list Contacts in your customer's Salesforce instance.\n\n[Learn more](https://developer.fusebit.io/docs/salesforce)!\n",
    tags: {
      catalog: 'CRM',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/salesforce#creating-your-own-salesforce-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: "Oops! Something went wrong and we couldn't retrieve your contacts from Salesforce",
          itemName: 'Contact',
          properties: [
            {
              name: 'contactName',
              label: 'Name',
            },
            {
              name: 'contactEmail',
              label: 'Email',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          salesforceIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          salesforceConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/salesforceIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/salesforceConnector/properties/id',
            label: 'Salesforce Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        salesforceConnector: {
          salesforceName: 'salesforce-connector',
        },
      },
      entities: {
        salesforceConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'api offline_access',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-salesforce-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/salesforce-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/salesforce-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Salesforce',
          },
        },
        salesforceIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-salesforce-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/salesforce-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Salesforce Integration\n//\n// This simple Salesforce integration allows you to call Salesforce APIs on behalf of the tenants of your\n// application. Fusebit manages the Salesforce authorization process and maps tenants of your application\n// to their Salesforce credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'salesforceConnector';\n\n// The sample test endpoint of this integration gets all contacts stored in the Salesforce account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Salesforce client pre-configured with credentials necessary to communicate with your tenant's Salesforce account.\n  // For the Salesforce SDK documentation, see https://jsforce.github.io/.\n  const salesforceClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const contacts = await salesforceClient.query('SELECT count() FROM Contact');\n\n  ctx.body = {\n    message: `Successfully loaded ${contacts.totalSize} contacts from SFDC`,\n  };\n});\n\n// Retrieve Name and Email from Salesforce\n// Note: This endpoint is also used by the sample app\nrouter.get('/api/tenant/:tenantId/items', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const salesforceClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const contacts = await salesforceClient.query('SELECT name, email FROM Contact');\n\n  const contactsList = contacts.records.map((contact) => ({\n    contactName: contact.Name,\n    contactEmail: contact.Email,\n  }));\n\n  ctx.body = contactsList;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'salesforceConnector',
                skip: false,
                provider: '@fusebit-int/salesforce-provider',
                entityId: '<% global.entities.salesforceConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Salesforce',
          },
        },
      },
    },
  },
  {
    id: 'sentry-ph',
    name: 'Sentry',
    smallIcon:
      '<svg class="css-15xgryy e10nushx5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 44" width="400" height="352"><path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z" fill="#362d59"></path></svg>\n\n',
    largeIcon:
      '<svg class="css-15xgryy e10nushx5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 44" width="400" height="88"><path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" fill="#362d59"></path></svg>',
    version: '5.2.0',
    description:
      'Export, import, and submit events for your customers Sentry deployments, as well as integrating with other services on Fusebit.\n',
    outOfPlan: true,
    tags: {
      catalog: 'Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/sentry#creating-your-own-sentry-app',
    },
    configuration: {},
  },
  {
    id: 'slack-bot',
    name: 'Slack Bot',
    smallIcon:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.31825 0C6.21488 0.000815494 5.32192 0.896228 5.32273 1.99959C5.32192 3.10296 6.2157 3.99837 7.31906 3.99918H9.31539V2.00041C9.31621 0.897044 8.42243 0.00163099 7.31825 0C7.31906 0 7.31906 0 7.31825 0V0ZM7.31825 5.33333H1.99633C0.892969 5.33415 -0.000813266 6.22956 2.22865e-06 7.33293C-0.00162876 8.43629 0.892153 9.3317 1.99552 9.33333H7.31825C8.42161 9.33252 9.31539 8.4371 9.31458 7.33374C9.31539 6.22956 8.42161 5.33415 7.31825 5.33333Z" fill="#36C5F0"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.96 7.33293C19.9608 6.22956 19.0671 5.33415 17.9637 5.33333C16.8603 5.33415 15.9665 6.22956 15.9674 7.33293V9.33333H17.9637C19.0671 9.33252 19.9608 8.4371 19.96 7.33293ZM14.6373 7.33293V1.99959C14.6381 0.897044 13.7451 0.00163099 12.6418 0C11.5384 0.000815494 10.6446 0.896228 10.6454 1.99959V7.33293C10.6438 8.43629 11.5376 9.3317 12.641 9.33333C13.7443 9.33252 14.6381 8.4371 14.6373 7.33293Z" fill="#2EB67D"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6411 20C13.7444 19.9992 14.6382 19.1038 14.6374 18.0005C14.6382 16.8971 13.7444 16.0017 12.6411 16.0009H10.6447V18.0005C10.6439 19.103 11.5377 19.9984 12.6411 20ZM12.6411 14.6659H17.9638C19.0672 14.6651 19.961 13.7697 19.9602 12.6663C19.9618 11.5629 19.068 10.6675 17.9646 10.6659H12.6419C11.5385 10.6667 10.6447 11.5621 10.6455 12.6655C10.6447 13.7697 11.5377 14.6651 12.6411 14.6659Z" fill="#ECB22E"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.15928e-05 12.6662C-0.000753902 13.7696 0.893028 14.665 1.99639 14.6658C3.09976 14.665 3.99354 13.7696 3.99272 12.6662V10.6666H1.99639C0.893028 10.6674 -0.000753902 11.5629 6.15928e-05 12.6662ZM5.32279 12.6662V17.9996C5.32116 19.103 6.21494 19.9984 7.31831 20C8.42167 19.9992 9.31545 19.1038 9.31464 18.0004V12.6679C9.31627 11.5645 8.42249 10.6691 7.31912 10.6674C6.21494 10.6674 5.32198 11.5629 5.32279 12.6662C5.32279 12.6662 5.32279 12.667 5.32279 12.6662Z" fill="#E01E5A"/>\n</svg>\n',
    largeIcon:
      '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 622.3 254.4" style="enable-background:new 0 0 622.3 254.4;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#E01E5A;}\n\t.st1{fill:#36C5F0;}\n\t.st2{fill:#2EB67D;}\n\t.st3{fill:#ECB22E;}\n</style>\n<g>\n\t<g>\n\t\t<path d="M221.5,161.5l6.2-14.4c6.7,5,15.6,7.6,24.4,7.6c6.5,0,10.6-2.5,10.6-6.3c-0.1-10.6-38.9-2.3-39.2-28.9\n\t\t\tc-0.1-13.5,11.9-23.9,28.9-23.9c10.1,0,20.2,2.5,27.4,8.2l-5.8,14.7c-6.6-4.2-14.8-7.2-22.6-7.2c-5.3,0-8.8,2.5-8.8,5.7\n\t\t\tc0.1,10.4,39.2,4.7,39.6,30.1c0,13.8-11.7,23.5-28.5,23.5C241.4,170.6,230.1,167.7,221.5,161.5"/>\n\t\t<path d="M459.4,141.9c-3.1,5.4-8.9,9.1-15.6,9.1c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c6.7,0,12.5,3.7,15.6,9.1l17.1-9.5\n\t\t\tc-6.4-11.4-18.7-19.2-32.7-19.2c-20.7,0-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5c14.1,0,26.3-7.7,32.7-19.2L459.4,141.9z"\n\t\t\t/>\n\t\t<rect x="290.8" y="64.5" width="21.4" height="104.7"/>\n\t\t<polygon points="484.9,64.5 484.9,169.2 506.3,169.2 506.3,137.8 531.7,169.2 559.1,169.2 526.8,131.9 556.7,97.1 530.5,97.1 \n\t\t\t506.3,126 506.3,64.5 \t\t"/>\n\t\t<path d="M375.8,142.1c-3.1,5.1-9.5,8.9-16.7,8.9c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c7.2,0,13.6,4,16.7,9.2V142.1z\n\t\t\t M375.8,97.1v8.5c-3.5-5.9-12.2-10-21.3-10c-18.8,0-33.6,16.6-33.6,37.4c0,20.8,14.8,37.6,33.6,37.6c9.1,0,17.8-4.1,21.3-10v8.5\n\t\t\th21.4v-72H375.8z"/>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path class="st0" d="M89.2,142c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h13.2V142z"/>\n\t\t\t<path class="st0" d="M95.8,142c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V175c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2\n\t\t\t\tV142z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st1" d="M109,89c-7.3,0-13.2-5.9-13.2-13.2c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V89H109z"/>\n\t\t\t<path class="st1" d="M109,95.7c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2H75.9c-7.3,0-13.2-5.9-13.2-13.2\n\t\t\t\tc0-7.3,5.9-13.2,13.2-13.2H109z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st2" d="M161.9,108.9c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2h-13.2V108.9z"/>\n\t\t\t<path class="st2" d="M155.3,108.9c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2V75.8c0-7.3,5.9-13.2,13.2-13.2\n\t\t\t\ts13.2,5.9,13.2,13.2V108.9z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st3" d="M142.1,161.8c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2v-13.2H142.1z"/>\n\t\t\t<path class="st3" d="M142.1,155.2c-7.3,0-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h33.1c7.3,0,13.2,5.9,13.2,13.2\n\t\t\t\ts-5.9,13.2-13.2,13.2H142.1z"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n',
    version: '5.2.0',
    description:
      "Building a simple Slack bot is easy with Fusebit! This example lets you send messages from your system to a channel in your customer's Slack instance.\n\n[Learn more](https://developer.fusebit.io/docs/slack)!\n",
    tags: {
      catalog: 'Messaging',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/slack#creating-your-own-slack-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: false,
        isPostEnabled: true,
        terms: {
          postSuccess: 'Your message was successfully sent to Slack',
          postFail: "Oops! Something went wrong and we couldn't send your message",
          itemName: 'Task',
          properties: [
            {
              name: 'taskName',
              label: 'Task Name',
            },
            {
              name: 'taskDetail',
              label: 'Task Detail',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          slackIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          slackConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/slackIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/slackConnector/properties/id',
            label: 'Slack Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        slackConnector: {
          slackName: 'slack-connector',
        },
      },
      entities: {
        slackConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'chat:write users:read channels:read channels:join chat:write.public',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-slack-bot-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/slack-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/slack-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Slack',
          },
        },
        slackIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-slack-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/slack-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Slack Integration\n//\n// This simple Slack integration allows you to call Slack APIs on behalf of the tenants of your\n// application. Fusebit manages the Slack authorization process and maps tenants of your application\n// to their Slack credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\n\nconst connectorName = 'slackConnector';\n\n// The sample test endpoint of this integration sends a Direct Message to the Slack user associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Slack client pre-configured with credentials necessary to communicate with your tenant's Slack workspace.\n  // For the Slack SDK documentation, see https://slack.dev/node-slack-sdk/web-api.\n  const slackClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  // Get the Slack user ID associated with your tenant\n  const slackUserId = slackClient.fusebit.credentials.authed_user.id;\n\n  // Send a Direct Message to the Slack user\n  const result = await slackClient.chat.postMessage({\n    text: 'Hello world from Fusebit!',\n    channel: slackUserId,\n  });\n\n  ctx.body = { message: `Successfully sent a message to Slack user ${slackUserId}!` };\n});\n\n// Send a message to Slack\n// Note: This endpoint is also used by the sample app\nrouter.post('/api/tenant/:tenantId/item', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const slackClient = await integration.tenant.getSdkByTenant(ctx, 'slackConnector', ctx.params.tenantId);\n  const slackUserId = slackClient.fusebit.credentials.authed_user.id;\n\n  const taskMessage = `New Task Added! \\nTask Name: ${ctx.req.body.taskName} \\nTask Detail: ${ctx.req.body.taskDetail}`;\n\n  const result = await slackClient.chat.postMessage({\n    text: taskMessage,\n    channel: slackUserId,\n  });\n\n  ctx.body = { message: `Successfully sent a message to Slack user ${slackUserId}!` };\n});\n\n// This endpoint lists Slack users of the workspace associated with your tenant.\nrouter.get('/api/tenant/:tenantId/users', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const slackClient = await integration.tenant.getSdkByTenant(ctx, 'slackConnector', ctx.params.tenantId);\n\n  const result = await slackClient.users.list();\n\n  ctx.body = result;\n});\n\n// This event handler responds to messages in channels that the bot has access to\nintegration.event.on('/:componentName/webhook/event_callback', async (ctx) => {\n  const slackClient = await integration.service.getSdk(ctx, ctx.params.componentName, ctx.req.body.installIds[0]);\n\n  const messagingUser = ctx.req.body.data.event.user;\n  const authorizedListeningUser = ctx.req.body.data.authorizations[0].user_id;\n\n  if (messagingUser === authorizedListeningUser) {\n    console.log('Skipping to avoid recursive response (i.e., infinite loop).');\n    return;\n  }\n\n  const text = ctx.req.body.data.event.text;\n  await slackClient.chat.postMessage({\n    text: `I'm responding via a webhook.  I was alerted when <@${messagingUser}> sent the message: \\n\\n \"${text}\"`,\n    channel: ctx.req.body.data.event.channel,\n  });\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'slackConnector',
                skip: false,
                provider: '@fusebit-int/slack-provider',
                entityId: '<% global.entities.slackConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Slack',
          },
        },
      },
    },
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon iconLogoGlyphMd native" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path></svg>\n\n',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="622" height="124" viewBox="0 0 622 124">\n  <g fill="none" fill-rule="evenodd">\n    <path fill="#1E1B1D" fill-rule="nonzero" d="M142.7,76.742 L135.526,76.107 C129.895,75.654 127.716,73.383 127.716,69.568 C127.716,65.028 131.167,62.211 137.706,62.211 C142.338,62.211 146.424,63.302 149.606,65.754 L153.875,61.485 C149.875,58.216 144.156,56.673 137.8,56.673 C128.264,56.673 121.361,61.573 121.361,69.75 C121.361,77.106 125.994,81.011 134.712,81.738 L142.068,82.373 C147.244,82.828 149.515,85.007 149.515,88.912 C149.515,94.18 144.974,96.812 137.615,96.812 C132.074,96.812 127.261,95.359 123.715,91.635 L119.355,95.995 C124.26,100.717 130.163,102.443 137.701,102.443 C148.508,102.443 155.865,97.443 155.865,88.821 C155.865,80.463 150.506,77.468 142.695,76.74 L142.7,76.742 Z M198.613,56.671 C191.444,56.671 186.928,58.084 182.971,63.094 C182.917,63.163 187.261,67.386 187.261,67.386 C189.894,63.663 192.8,62.302 198.521,62.302 C206.695,62.302 209.965,65.571 209.965,72.109 L209.965,76.377 L196.527,76.377 C186.537,76.377 181.089,81.464 181.089,89.277 C180.984058,92.6262953 182.189462,95.884474 184.449,98.359 C187.265,101.266 190.897,102.446 197.072,102.446 C203.066,102.446 206.336,101.266 209.972,97.632 L209.972,101.9 L216.511,101.9 L216.511,71.565 C216.511,61.848 210.611,56.673 198.62,56.673 L198.613,56.671 Z M209.969,86.1 C209.969,89.825 209.242,92.368 207.698,93.82 C204.883,96.545 201.523,96.82 197.709,96.82 C190.625,96.82 187.445,94.367 187.445,89.19 C187.445,84.013 190.715,81.29 197.437,81.29 L209.969,81.29 L209.969,86.1 Z M242.118,62.489 C246.386,62.489 249.018,63.76 252.38,67.483 C252.38,67.483 256.758,63.228 256.722,63.19 C252.137,58.285 248.245,56.677 242.122,56.677 C230.86,56.677 222.322,64.305 222.322,79.562 C222.322,94.819 230.858,102.449 242.122,102.449 C248.297,102.449 252.202,100.813 256.834,95.819 L252.384,91.55 C249.024,95.274 246.39,96.636 242.122,96.636 C238.033212,96.7993765 234.138626,94.8861276 231.769,91.55 C229.68,88.644 228.863,85.193 228.863,79.562 C228.863,73.931 229.68,70.48 231.769,67.574 C234.138117,64.2373869 238.033165,62.3242873 242.122,62.489 L242.118,62.489 Z M298.122,57.155 L289.97,57.155 L269.71,76.875 L269.741,37.236 L263.2,37.236 L263.2,101.9 L269.74,101.9 L269.709,85.591 L277.64,77.632 L292.628,101.9 L300.71,101.9 L282.17,73.1 L298.122,57.155 Z M328.335,56.055 C321.635,56.055 317.108,58.666 314.322,61.625 C310.231,65.89 309.187,71.025 309.187,79.207 C309.187,87.475 310.231,92.607 314.322,96.876 C317.108,99.835 321.633,102.447 328.335,102.447 C335.037,102.447 339.651,99.835 342.435,96.876 C346.526,92.611 347.571,87.476 347.571,79.207 C347.571,71.026 346.526,65.89 342.435,61.625 C339.651,58.666 335.035,56.055 328.335,56.055 Z M333.645,90.261 C332.226419,91.6312106 330.305034,92.3548961 328.335,92.261 C326.391065,92.355011 324.496795,91.6295149 323.113,90.261 C320.762,87.911 320.502,83.908 320.502,79.207 C320.502,74.506 320.762,70.591 323.113,68.241 C324.49659,66.8721679 326.391005,66.1466163 328.335,66.241 C330.30511,66.1466229 332.226679,66.8703779 333.645,68.241 C335.994,70.591 336.256,74.507 336.256,79.207 C336.256,83.907 335.994,87.907 333.645,90.261 Z M377.7,56.575 L368.562,84.6 L359.336,56.573 L347.41,56.573 L364.123,101.92 L373,101.92 L389.623,56.573 L377.7,56.575 Z M408.873,56.053 C397.124,56.053 389.116,64.408 389.116,79.205 C389.116,97.571 399.387,102.445 410.092,102.445 C418.274,102.445 422.714,99.92 427.326,95.306 L420.451,88.606 C417.578,91.479 415.14,92.871 410.179,92.871 C403.825,92.871 400.257,88.606 400.257,82.771 L428.631,82.771 L428.631,77.726 C428.631,65.279 421.494,56.053 408.873,56.053 Z M400.257,75.027 C400.273614,73.3485451 400.629053,71.6907352 401.302,70.153 C402.728026,67.2748247 405.662422,65.4538855 408.8745,65.4538855 C412.086578,65.4538855 415.020974,67.2748247 416.447,70.153 C417.117747,71.6914042 417.472764,73.3488292 417.491,75.027 L400.257,75.027 Z M445.322,60.927 L445.322,56.575 L434.267,56.575 L434.267,101.922 L445.582,101.922 L445.582,74.593 C445.582,68.848 449.412,66.236 452.894,66.236 C455.1886,66.1567159 457.391459,67.1404382 458.864,68.902 L467.43,60.318 C464.296,57.184 461.163,56.053 456.724,56.053 C452.407599,56.0018792 448.269295,57.7711856 445.324,60.927 L445.322,60.927 Z M470.941,51.848 L470.941,101.876 L482.255,101.876 L482.255,66.122 L490.611,66.122 L490.611,57.506 L482.255,57.506 L482.255,52.545 C482.255,49.934 483.562,48.454 486.255,48.454 L490.607,48.454 L490.607,38.881 L484.167,38.881 C474.939,38.881 470.937,45.408 470.937,51.848 L470.941,51.848 Z M537.191,56.048 C530.491,56.048 525.963,58.659 523.178,61.618 C519.088,65.883 518.043,71.018 518.043,79.2 C518.043,87.468 519.088,92.6 523.178,96.869 C525.963,99.828 530.489,102.44 537.191,102.44 C543.893,102.44 548.507,99.828 551.291,96.869 C555.381,92.604 556.426,87.469 556.426,79.2 C556.426,71.019 555.381,65.883 551.291,61.618 C548.506,58.659 543.891,56.048 537.191,56.048 Z M542.501,90.254 C541.082419,91.6242106 539.161034,92.3478961 537.191,92.254 C535.247065,92.348011 533.352795,91.6225149 531.969,90.254 C529.619,87.904 529.358,83.901 529.358,79.2 C529.358,74.499 529.619,70.584 531.969,68.234 C533.35259,66.8651679 535.247005,66.1396163 537.191,66.234 C539.16111,66.1396229 541.082679,66.8633779 542.501,68.234 C544.85,70.584 545.112,74.5 545.112,79.2 C545.112,83.9 544.85,87.9 542.501,90.254 Z M609.883,56.57 L602.573,84.6 L593.26,56.575 L584.993,56.575 L575.765,84.6 L568.455,56.573 L556.444,56.573 L570.37,101.92 L579.683,101.92 L589.17,73.46 L598.657,101.92 L607.97,101.92 L621.809,56.573 L609.883,56.57 Z M507.3,88.257 L507.3,38.881 L495.989,38.881 L495.989,88.953 C495.989,95.394 499.907,101.922 509.219,101.922 L515.659,101.922 L515.659,92.347 L511.308,92.347 C508.436,92.347 507.308,90.955 507.308,88.257 L507.3,88.257 Z M174,64.246 L180.046,58.2 L167.666,58.2 L167.666,43.5 L161.127,43.5 L161.127,89.912 C161.127,96.541 164.941,101.9 172.57,101.9 L177.2,101.9 L177.2,96.269 L173.75,96.269 C169.573,96.269 167.666,93.816 167.666,89.73 L167.666,64.246 L174,64.246 Z"/>\n    <polygon fill="#BBBBBB" points="88 80 99 80 99 124 0 124 0 80 11 80 11 113 88 113"/>\n    <path fill="#F58025" fill-rule="nonzero" d="M22.9878906,76.73 L77.0128906,88.085 L79.2838906,77.285 L25.2588906,65.925 L22.9878906,76.73 Z M30.1368906,50.861 L80.1828906,74.169 L84.8448906,64.16 L34.7978906,40.852 L30.1368906,50.861 Z M43.9848906,26.308 L86.4128906,61.639 L93.4788906,53.154 L51.0508906,17.824 L43.9848906,26.308 Z M71.3718906,0.192 L62.5118906,6.782 L95.4598906,51.082 L104.319891,44.493 L71.3718906,0.192 Z M22,102 L77,102 L77,91 L22,91 L22,102 Z"/>\n  </g>\n</svg>\n',
    version: '5.2.0',
    description:
      'Integrating with Stack Overflow is easy with Fusebit! This example lets you list your users reputation points.\n\n[Learn more](https://developer.fusebit.io/docs/stackoverflow)!\n',
    tags: {
      catalog: 'Social,Community,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/stackoverflow#creating-your-own-stackoverflow-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          stackoverflowIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          stackoverflowConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/stackoverflowIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/stackoverflowConnector/properties/id',
            label: 'Stack Overflow Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        stackoverflowConnector: {
          stackoverflowName: 'stackoverflow-connector',
        },
      },
      entities: {
        stackoverflowConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read_inbox private_info no_expiry',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-stackoverflow-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/stackoverflow-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/stackoverflow-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'stackoverflow',
          },
        },
        stackoverflowIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-stackoverflow-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/stackoverflow-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Stack Overflow Integration\n//\n// This simple Stack Overflow integration allows you to call Stack Overflow APIs on behalf of the tenants of your\n// application. Fusebit manages the Stack Overflow authorization process and maps tenants of your application\n// to their Stack Overflow credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'stackoverflowConnector';\n\n// The sample test endpoint of this integration gets all contacts stored in the Stack Overflow account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Stack Overflow client pre-configured with credentials necessary to communicate with your tenant's Stack Overflow account.\n  // For the Stack Overflow SDK documentation, see https://api.stackexchange.com/docs.\n  const stackoverflowClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const user = (await stackoverflowClient.site('stackoverflow').get('/me')).items[0];\n\n  ctx.body = {\n    message: `You have ${user.reputation} reputation points with Stack Overflow`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'stackoverflowConnector',
                skip: false,
                provider: '@fusebit-int/stackoverflow-provider',
                entityId: '<% global.entities.stackoverflowConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'stackoverflow',
          },
        },
      },
    },
  },
  {
    id: 'trello-planned',
    name: 'Trello',
    smallIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M51.4336 0H5.56641C2.49217 0 0 2.49217 0 5.56641V51.4336C0 54.5078 2.49217 57 5.56641 57H51.4336C54.5078 57 57 54.5078 57 51.4336V5.56641C57 2.49217 54.5078 0 51.4336 0Z" fill="url(#paint0_linear_133399)"/>\n<path d="M46.918 7.40997H34.8767C33.4011 7.40997 32.2048 8.60621 32.2048 10.0818V29.6756C32.2048 31.1512 33.4011 32.3475 34.8767 32.3475H46.918C48.3936 32.3475 49.5898 31.1512 49.5898 29.6756V10.0818C49.5898 8.60621 48.3936 7.40997 46.918 7.40997Z" fill="white"/>\n<path d="M22.1233 7.40997H10.082C8.6064 7.40997 7.41016 8.60621 7.41016 10.0818V43.9256C7.41016 45.4012 8.6064 46.5975 10.082 46.5975H22.1233C23.5989 46.5975 24.7952 45.4012 24.7952 43.9256V10.0818C24.7952 8.60621 23.5989 7.40997 22.1233 7.40997Z" fill="white"/>\n<defs>\n<linearGradient id="paint0_linear_133399" x1="28.5" y1="0" x2="28.5" y2="57" gradientUnits="userSpaceOnUse">\n<stop stop-color="#0091E6"/>\n<stop offset="1" stop-color="#0079BF"/>\n</linearGradient>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M51.4336 0H5.56641C2.49217 0 0 2.49217 0 5.56641V51.4336C0 54.5078 2.49217 57 5.56641 57H51.4336C54.5078 57 57 54.5078 57 51.4336V5.56641C57 2.49217 54.5078 0 51.4336 0Z" fill="url(#paint0_linear_133399)"/>\n<path d="M46.918 7.40997H34.8767C33.4011 7.40997 32.2048 8.60621 32.2048 10.0818V29.6756C32.2048 31.1512 33.4011 32.3475 34.8767 32.3475H46.918C48.3936 32.3475 49.5898 31.1512 49.5898 29.6756V10.0818C49.5898 8.60621 48.3936 7.40997 46.918 7.40997Z" fill="white"/>\n<path d="M22.1233 7.40997H10.082C8.6064 7.40997 7.41016 8.60621 7.41016 10.0818V43.9256C7.41016 45.4012 8.6064 46.5975 10.082 46.5975H22.1233C23.5989 46.5975 24.7952 45.4012 24.7952 43.9256V10.0818C24.7952 8.60621 23.5989 7.40997 22.1233 7.40997Z" fill="white"/>\n<defs>\n<linearGradient id="paint0_linear_133399" x1="28.5" y1="0" x2="28.5" y2="57" gradientUnits="userSpaceOnUse">\n<stop stop-color="#0091E6"/>\n<stop offset="1" stop-color="#0079BF"/>\n</linearGradient>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      'The Trello Integration is extremely powerful and fun to use. Work with Boards, Lists, Cards, Actions to easily \nconnect Trello with your solution. ',
    outOfPlan: true,
    tags: {
      catalog: 'Project Management',
    },
    configuration: {},
  },
  {
    id: 'twitter',
    name: 'Twitter',
    smallIcon:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#1B9DF0;}\n\t.st1{fill:#FFFFFF;}\n</style>\n<g id="Dark_Blue">\n\t<circle class="st0" cx="200" cy="200" r="200"/>\n</g>\n<g id="Logo__x2014__FIXED">\n\t<path class="st1" d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25\n\t\tc-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2\n\t\tc-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2\n\t\tc0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7\n\t\tc-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7\n\t\tC110.8,297.5,136.2,305.5,163.4,305.5"/>\n</g>\n</svg>\n',
    largeIcon:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#1B9DF0;}\n\t.st1{fill:#FFFFFF;}\n</style>\n<g id="Dark_Blue">\n\t<circle class="st0" cx="200" cy="200" r="200"/>\n</g>\n<g id="Logo__x2014__FIXED">\n\t<path class="st1" d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25\n\t\tc-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2\n\t\tc-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2\n\t\tc0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7\n\t\tc-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7\n\t\tC110.8,297.5,136.2,305.5,163.4,305.5"/>\n</g>\n</svg>\n',
    version: '5.2.0',
    description:
      "Integrating with Twitter is easy with Fusebit! This example lets you list the accessible resources in your customer's Twitter account.\n\n[Learn more](https://developer.fusebit.io/docs/twitter)!\n",
    tags: {
      catalog: 'Social,Community',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/twitter#creating-your-own-twitter-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          twitterIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          twitterConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/twitterIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/twitterConnector/properties/id',
            label: 'Twitter Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        twitterConnector: {
          twitterName: 'twitter-connector',
        },
      },
      entities: {
        twitterConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'users.read tweet.read offline.access',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              codeChallenge: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-twitter-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/twitter-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/twitter-connector',
          },
          id: 'twitter-connector',
          tags: {
            'fusebit.service': 'twitter',
          },
        },
        twitterIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-twitter-bot-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/twitter-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Twitter Integration\n//\n// This simple Twitter integration allows you to call Twitter APIs on behalf of the tenants of your\n// application. Fusebit manages the Twitter authorization process and maps tenants of your application\n// to their Twitter credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from witin your application.\nconst router = integration.router;\n\nconst connectorName = 'twitterConnector';\n\n// This sample test endpoint provides the logged in user's most recent tweet\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  const twitterClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const me = await twitterClient.v2.me();\n  const tweets = await twitterClient.v2.userTimeline(me.data.id);\n  ctx.body = `${me.data.name}'s most recent tweet was: \"${tweets.data.data?.[0].text}\"`;\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'twitterConnector',
                skip: false,
                provider: '@fusebit-int/twitter-provider',
                entityId: '<% global.entities.twitterConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'twitter',
          },
        },
      },
    },
  },
  {
    id: 'xero-planned',
    name: 'Xero',
    smallIcon:
      '<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   width="786.81995"\n   height="786.81995"\n   viewBox="0 0 208.17944 208.17944"\n   version="1.1"\n   id="svg4443"\n   inkscape:version="0.92.0 r15299"\n   sodipodi:docname="xero.svg">\n  <defs\n     id="defs4437">\n    <inkscape:perspective\n       id="perspective87"\n       inkscape:persp3d-origin="372.04723 : 350.78736 : 1"\n       inkscape:vp_z="744.09449 : 526.18106 : 1"\n       inkscape:vp_y="0 : 999.99994 : 0"\n       inkscape:vp_x="0 : 526.18106 : 1"\n       sodipodi:type="inkscape:persp3d" />\n    <font\n       font-weight="700"\n       font-style="normal"\n       font-variant="normal"\n       id="FontID0"\n       horiz-origin-x="0"\n       horiz-origin-y="0"\n       horiz-adv-x="90"\n       vert-origin-x="45"\n       vert-origin-y="90"\n       vert-adv-y="90"\n       style="font-style:normal;font-variant:normal;font-weight:700">\n\t<font-face\n   id="font-face7"\n   font-family="Arial Narrow">\n\t</font-face>\n\n   <missing-glyph\n   id="missing-glyph9">\n  <path\n     id="path11"\n     d="M0 0z" />\n</missing-glyph>\n\n   <glyph\n   id="glyph13"\n   horiz-adv-x="228"\n   unicode=" " />\n\n   <glyph\n   id="glyph15"\n   horiz-adv-x="500"\n   unicode="L">\n  <path\n     id="path17"\n     d="M62.9955 0l0 710 118.173 0 0 -589.33 294.829 0 0 -120.669 -413.002 0z" />\n</glyph>\n\n   <glyph\n   id="glyph19"\n   horiz-adv-x="774"\n   unicode="W">\n  <path\n     id="path21"\n     d="M142.504 0l-140.007 715.836 121.501 0 87.8301 -491.667 107.507 491.667 141.168 0 102.996 -500 90.3377 500 119.158 0 -142.657 -715.836 -126.002 0 -117.165 535.171 -116.169 -535.171 -128.499 0z" />\n</glyph>\n\n   <glyph\n   id="glyph23"\n   horiz-adv-x="456"\n   unicode="k">\n  <path\n     id="path25"\n     d="M55.1662 0l0 715.836 112.829 0 0 -379.834 131.335 182.493 138.671 0 -145.504 -189.326 155.666 -329.169 -120.998 0 -107.496 232.83 -51.6732 -66.828 0 -166.002 -112.829 0z" />\n</glyph>\n\n   <glyph\n   id="glyph27"\n   horiz-adv-x="456"\n   unicode="e">\n  <path\n     id="path29"\n     d="M305.67 164.995l111.833 -22.8308c-15.0015,-52.1659 -38.336,-90.8304 -69.8393,-115.994 -31.6675,-25.3384 -69.9926,-37.8323 -115.161,-37.8323 -62.8312,0 -111.34,20.9912 -145.668,62.9955 -40.3289,48.8371 -60.4989,117.165 -60.4989,204.995 0,86.6694 20.3342,156.005 61.0026,208.007 34.4926,43.9972 79.1577,65.9958 133.831,65.9958 60.8274,0 108.668,-22.5023 143.161,-67.4959 39.6719,-51.3337 59.5024,-127.174 59.5024,-227.498l-0.503701 -15.6695 -281.657 0c0.657001,-40.9969 9.83312,-72.6644 27.4955,-95.1667 17.8376,-22.5023 39.1682,-33.6713 64.1671,-33.6713 36.1679,0 60.3346,24.6704 72.3359,74.1645zm6.32911 138.671c-0.996452,40.3289 -9.66887,70.8357 -25.8311,91.1699 -16.3374,20.3342 -35.6642,30.4958 -58.1665,30.4958 -23.663,0 -43.8329,-10.6653 -60.0061,-31.8317 -16.6659,-21.4949 -24.8237,-51.3337 -24.4952,-89.834l168.499 0z" />\n</glyph>\n\n   <glyph\n   id="glyph31"\n   horiz-adv-x="500"\n   unicode="o">\n  <path\n     id="path33"\n     d="M32.6639 266.666c0,50.6658 10.1726,96.9953 30.3316,138.671 20.1699,41.6648 46.5048,72.8286 79.1687,93.6665 32.4997,20.8269 69.1713,31.328 109.84,31.328 68.3282,0 121.994,-26.8276 161.162,-80.3294 39.004,-53.6661 58.495,-116.169 58.495,-187.837 0,-53.3376 -10.1616,-101.496 -30.4958,-144.497 -20.3342,-43.0007 -46.9975,-75.3362 -80.0009,-96.8311 -33.1676,-21.6701 -69.3356,-32.4997 -108.668,-32.4997 -63.1597,0 -115.665,23.9915 -157.33,72.1607 -41.6648,48.1692 -62.5027,116.837 -62.5027,206.167zm115.337 -7.33652c0,-52.4944 10.1616,-92.1664 30.671,-118.994 20.4984,-26.8385 45.3331,-40.1647 74.3288,-40.1647 28.3277,0 52.4944,13.4904 72.6644,40.4932 20.1699,27.0028 30.3316,66.8389 30.3316,119.673 0,51.3337 -10.3259,90.5019 -30.8243,117.658 -20.5094,27.0028 -45.0046,40.5041 -73.6718,40.5041 -28.3387,0 -52.6696,-13.5014 -73.0038,-40.5041 -20.3342,-27.1561 -30.4958,-66.6637 -30.4958,-118.665z" />\n</glyph>\n\n   <glyph\n   id="glyph35"\n   horiz-adv-x="456"\n   unicode="c">\n  <path\n     id="path37"\n     d="M429.668 365.161l-110.836 -24.331c-8.16872,54.334 -33.6604,81.501 -76.6611,81.501 -27.6707,0 -50.0088,-11.6618 -66.8389,-35.1605 -16.9944,-23.3345 -25.5026,-63.0064 -25.5026,-118.676 0,-61.4953 8.50817,-105 25.5026,-130.327 16.8302,-25.3384 39.4967,-37.9966 67.8354,-37.9966 21.1664,0 38.5003,7.16132 52.1659,21.6591 13.8299,14.5088 23.4988,40.1647 29.3351,76.8363l110.836 -22.8308c-22.6665,-125.005 -88.3338,-187.497 -196.673,-187.497 -69.3356,0 -120.834,26.3239 -154.33,78.9935 -33.4961,52.8339 -50.3373,116.333 -50.3373,190.498 0,88.8375 18.9983,156.509 56.8306,202.838 38.0075,46.3296 87.6768,69.6641 149.172,69.6641 49.8336,0 90.5019,-13.1619 121.83,-39.661 31.5032,-26.3348 54.0055,-68.1748 67.6711,-125.509z" />\n</glyph>\n\n   <glyph\n   id="glyph39"\n   horiz-adv-x="228"\n   unicode="i">\n  <path\n     id="path41"\n     d="M59.163 588.838l0 126.998 112.676 0 0 -126.998 -112.676 0zm0 -588.838l0 518.495 112.676 0 0 -518.495 -112.676 0z" />\n</glyph>\n\n   <glyph\n   id="glyph43"\n   horiz-adv-x="500"\n   unicode="n">\n  <path\n     id="path45"\n     d="M445.83 0l-112.829 0 0 264.662c0,53.0091 -2.1681,88.3338 -6.32911,106.007 -4.17196,17.4981 -12.1764,30.9995 -23.674,40.4932 -11.4975,9.34037 -24.6595,14.1693 -39.3325,14.1693 -18.834,0 -36.0037,-6.16486 -51.3337,-18.3303 -15.1658,-12.1655 -25.9954,-29.0066 -32.1602,-50.5015 -6.17581,-21.4949 -9.34037,-61.999 -9.34037,-121.666l0 -234.834 -112.665 0 0 518.495 104.496 0 0 -76.1574c18.5055,29.3242 39.3325,51.3337 62.667,65.9958 23.3345,14.6621 49.0014,21.9986 77.34,21.9986 32.9924,0 60.6631,-8.66147 83.3297,-25.6669 22.6665,-17.1696 38.1718,-39.1682 46.8333,-65.9958 8.67242,-26.8385 12.9977,-65.6673 12.9977,-116.333l0 -322.336z" />\n</glyph>\n\n   <glyph\n   id="glyph47"\n   horiz-adv-x="456"\n   unicode="a">\n  <path\n     id="path49"\n     d="M142.996 360.332l-101.999 22.5023c12.3407,52.3302 32.8391,89.9982 61.3311,112.993 28.5029,23.006 69.3356,34.5035 122.837,34.5035 47.5012,0 83.8334,-6.66856 108.832,-19.9947 24.9989,-13.5014 43.0007,-31.5032 53.6661,-54.4983 10.8405,-23.006 16.1732,-64.6708 16.1732,-125.334l-1.0074 -160.166c0,-44.8403 1.8396,-78.3365 5.33266,-100.335 3.66826,-21.8343 10.3368,-45.3331 20.0057,-70.0035l-111.34 0 -14.6621 56.6664c-19.1625,-22.8308 -39.661,-39.8362 -61.6705,-51.3337 -21.9986,-11.3333 -45.3331,-16.9944 -70.1568,-16.9944 -41.3363,0 -75.1719,13.8299 -101.507,41.6648 -26.3348,27.835 -39.4967,64.8351 -39.4967,111.165 0,29.1709 5.33266,54.8377 15.998,76.6611 10.8296,21.8343 25.9954,39.1682 45.4974,52.1659 19.502,13.0086 50.841,24.6704 93.6665,34.6678 52.1659,12.0012 88.4981,23.3345 109.007,33.6713 0,28.6672 -2.00385,47.5012 -6.17581,56.5021 -3.99676,8.82572 -11.4975,16.1622 -22.4913,21.8343 -10.8405,5.82541 -26.1706,8.66147 -46.0011,8.66147 -20.3342,0 -36.1679,-4.66471 -47.6655,-13.6656 -11.5085,-9.16517 -21.0021,-26.1706 -28.1744,-51.3337zm150.508 -111.329c-14.3336,-5.83636 -36.6716,-12.6692 -67.0032,-20.4984 -34.832,-9.17612 -57.4986,-19.1735 -68.3391,-30.3425 -10.6653,-10.9938 -15.998,-25.3274 -15.998,-42.8255 0,-19.8414 5.83636,-36.6716 17.6733,-50.173 12.0012,-13.5014 26.8276,-20.159 44.8294,-20.159 15.8337,0 31.6675,5.33266 47.337,16.3265 15.4943,10.8405 26.3348,23.8382 32.4997,38.8397 6.00061,14.9906 9.00092,42.1576 9.00092,81.4901l0 27.3422z" />\n</glyph>\n\n   <glyph\n   id="glyph51"\n   horiz-adv-x="500"\n   unicode="d">\n  <path\n     id="path53"\n     d="M449.17 0l-105 0 0 76.1684c-17.1696,-29.3351 -37.5038,-51.3337 -61.0026,-65.8315 -23.3345,-14.673 -47.5012,-21.9986 -72.1716,-21.9986 -47.6655,0 -88.9908,23.663 -124.327,71 -35.3357,47.326 -52.9981,114.997 -52.9981,202.827 0,88.6733 17.3339,155.337 51.8265,200.506 34.5035,44.9936 77.0006,67.6602 127.338,67.6602 23.8273,0 46.0011,-6.00061 66.6637,-18.1661 20.6627,-12.0012 39.6719,-30.0031 57.0058,-54.1698l0 257.84 112.665 0 0 -715.836zm-300.173 270.498c0,-46.8333 3.83251,-81.8295 11.837,-104.66 8.00447,-23.006 19.502,-40.3399 34.1641,-51.8374 14.8373,-11.4975 31.5032,-17.3339 50.173,-17.3339 24.6595,0 46.1653,13.3371 64.3314,40.0004 18.3303,26.6633 27.3313,67.0032 27.3313,120.669 0,59.4915 -8.83667,102.492 -26.4991,128.663 -17.8376,26.1706 -40.3399,39.3325 -67.6711,39.3325 -25.9954,0 -48.1582,-12.8334 -66.3352,-38.6645 -18.3303,-25.6669 -27.3313,-64.3314 -27.3313,-116.169z" />\n</glyph>\n\n   <glyph\n   id="glyph55"\n   horiz-adv-x="318"\n   unicode="r">\n  <path\n     id="path57"\n     d="M166.999 0l-112.829 0 0 518.495 104.496 0 0 -73.6608c18.0018,34.5035 33.9998,57.3343 48.1692,68.6676 14.1693,11.169 30.4958,16.8302 49.0014,16.8302 25.6669,0 50.3263,-8.66147 73.8251,-25.9954l-35.1605 -119.498c-18.6698,14.8263 -36.1679,22.3271 -52.8339,22.3271 -15.6695,0 -29.3351,-5.66116 -41.1721,-17.3339 -11.9903,-11.4975 -20.4984,-32.3354 -25.6669,-62.667 -5.15746,-30.3316 -7.82927,-86.0015 -7.82927,-166.999l0 -160.166z" />\n</glyph>\n\n   <glyph\n   id="glyph59"\n   horiz-adv-x="272"\n   unicode="t">\n  <path\n     id="path61"\n     d="M253.504 518.495l0 -109.325 -76.6721 0 0 -209.003c0,-45.1688 0.996452,-71.5037 3.33976,-78.5007 4.48951,-13.1619 13.8299,-19.6662 27.824,-19.6662 10.5011,0 25.3384,4.50046 45.0046,13.1619l9.66887 -106.325c-26.0063,-13.6656 -55.5057,-20.4984 -88.3338,-20.4984 -28.6672,0 -51.6732,6.83282 -68.8319,20.4984 -17.3339,13.6656 -28.8314,33.3319 -34.6678,58.9987 -4.66471,18.9983 -6.83282,57.3343 -6.83282,115.337l0 225.998 -51.8374 0 0 109.325 51.8374 0 0 103.171 112.829 80.0009 0 -183.172 76.6721 0z" />\n</glyph>\n\n   <glyph\n   id="glyph63"\n   horiz-adv-x="638"\n   unicode="w">\n  <path\n     id="path65"\n     d="M138.671 0l-134.839 518.495 109.5 0 79.4972 -339.823 73.3323 339.823 108.34 0 70.8357 -339.823 81.501 339.823 110.825 0 -136.667 -518.495 -108 0 -73.1681 333.505 -72.3249 -333.505 -108.832 0z" />\n</glyph>\n\n   <glyph\n   id="glyph67"\n   horiz-adv-x="456"\n   unicode="y">\n  <path\n     id="path69"\n     d="M5.33266 518.495l120.166 0 101.003 -368.162 99.6671 368.162 116.169 0 -149.84 -498.993 -28.8314 -97.1705c-12.6692,-36.4964 -25.3274,-63.1597 -37.8323,-80.0009 -12.5049,-16.9944 -28.5029,-29.9921 -47.8297,-39.1682 -19.3377,-9.00092 -43.165,-13.6656 -71.5037,-13.6656 -21.8343,0 -43.165,2.83606 -64.0029,8.33297l-9.83312 107.507c17.6733,-4.33621 33.3319,-6.34006 47.337,-6.34006 21.4949,0 39.1682,7.17227 52.9981,21.3416 13.8299,14.3226 25.1632,40.4932 33.9998,78.1613l-161.666 519.995z" />\n</glyph>\n\n  </font>\n    <style\n       id="style71"\n       type="text/css">\n   \n    @font-face { font-family:&quot;Arial Narrow&quot;;src:url(&quot;#FontID0&quot;) format(svg)}\n    .fil0 {fill:#28166F}\n    .fnt0 {font-weight:bold;font-size:9.1324;font-family:\'Arial Narrow\'}\n   \n  </style>\n    <clipPath\n       clipPathUnits="userSpaceOnUse"\n       id="clipPath18">\n      <path\n         d="M 0,850.394 H 850.394 V 0 H 0 Z"\n         id="path16"\n         inkscape:connector-curvature="0" />\n    </clipPath>\n  </defs>\n  <sodipodi:namedview\n     id="base"\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1.0"\n     inkscape:pageopacity="0.0"\n     inkscape:pageshadow="2"\n     inkscape:zoom="0.68000308"\n     inkscape:cx="391.90999"\n     inkscape:cy="391.90999"\n     inkscape:document-units="mm"\n     inkscape:current-layer="layer1"\n     showgrid="false"\n     fit-margin-top="0"\n     fit-margin-left="0"\n     fit-margin-right="0"\n     fit-margin-bottom="0"\n     units="px"\n     inkscape:window-width="1280"\n     inkscape:window-height="744"\n     inkscape:window-x="-4"\n     inkscape:window-y="-4"\n     inkscape:window-maximized="1" />\n  <metadata\n     id="metadata4440">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     inkscape:label="Layer 1"\n     inkscape:groupmode="layer"\n     id="layer1"\n     transform="translate(-5.8874759,-271.69643)">\n    <g\n       id="g10"\n       transform="matrix(0.35277777,0,0,-0.35277777,-39.929542,525.63751)">\n      <g\n         id="g12">\n        <g\n           id="g14"\n           clip-path="url(#clipPath18)">\n          <path\n             d="m 424.933,130.843 c 162.335,0 293.932,131.597 293.932,293.933 0,162.334 -131.597,293.932 -293.932,293.932 C 262.598,718.708 131,587.11 131,424.776 131,262.44 262.598,130.843 424.933,130.843"\n             style="fill:#1ab4d7;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path20"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 271.701,425.625 50.162,50.286 c 1.663,1.695 2.591,3.939 2.591,6.319 0,4.96 -4.032,8.988 -8.992,8.988 -2.416,0 -4.681,-0.947 -6.389,-2.676 -0.005,-0.01 -50.117,-50.093 -50.117,-50.093 l -50.341,50.168 c -1.701,1.677 -3.955,2.601 -6.345,2.601 -4.954,0 -8.987,-4.026 -8.987,-8.981 0,-2.417 0.965,-4.685 2.697,-6.394 l 50.155,-50.148 -50.129,-50.223 c -1.762,-1.735 -2.723,-4.008 -2.723,-6.436 0,-4.959 4.033,-8.982 8.987,-8.982 2.394,0 4.65,0.929 6.345,2.625 l 50.263,50.195 50.072,-50.012 c 1.776,-1.836 4.067,-2.814 6.512,-2.814 4.955,0 8.987,4.029 8.987,8.988 0,2.393 -0.927,4.641 -2.614,6.336 z"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path22"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 569.906,425.64 c 0,-9.006 7.323,-16.332 16.34,-16.332 8.996,0 16.322,7.326 16.322,16.332 0,9.008 -7.326,16.333 -16.322,16.333 -9.017,0 -16.34,-7.325 -16.34,-16.333"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path24"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 538.93,425.632 c 0,26.08 21.216,47.3 47.299,47.3 26.07,0 47.291,-21.22 47.291,-47.3 0,-26.074 -21.221,-47.285 -47.291,-47.285 -26.083,0 -47.299,21.211 -47.299,47.285 m -18.606,0 c 0,-36.334 29.565,-65.895 65.905,-65.895 36.339,0 65.919,29.561 65.919,65.895 0,36.339 -29.58,65.908 -65.919,65.908 -36.34,0 -65.905,-29.569 -65.905,-65.908"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path26"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 515.646,490.413 -2.765,0.008 c -8.301,0 -16.307,-2.618 -22.994,-7.771 -0.881,4.032 -4.485,7.066 -8.778,7.066 -4.941,0 -8.9,-3.959 -8.912,-8.91 0,-0.018 0.03,-111 0.03,-111 0.013,-4.942 4.044,-8.959 8.988,-8.959 4.943,0 8.973,4.017 8.986,8.97 0,0.022 0.004,68.251 0.004,68.251 0,22.748 2.08,31.935 21.566,34.37 1.801,0.224 3.76,0.189 3.768,0.189 5.332,0.183 9.121,3.847 9.121,8.799 0,4.955 -4.045,8.987 -9.014,8.987"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path28"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 343.072,436.482 c 0,0.246 0.019,0.502 0.031,0.755 5.218,20.627 23.899,35.891 46.147,35.891 22.517,0 41.369,-15.639 46.32,-36.646 z m 110.903,1.697 c -3.873,18.337 -13.912,33.399 -29.199,43.072 -22.346,14.187 -51.854,13.402 -73.438,-1.947 -17.606,-12.525 -27.769,-33.014 -27.769,-54.12 0,-5.292 0.638,-10.634 1.966,-15.892 6.648,-26.152 29.13,-45.949 55.934,-49.23 7.954,-0.963 15.696,-0.502 23.713,1.574 6.889,1.676 13.555,4.47 19.697,8.406 6.375,4.098 11.701,9.502 16.859,15.971 0.104,0.119 0.209,0.224 0.313,0.349 3.58,4.44 2.916,10.754 -1.018,13.768 -3.318,2.543 -8.888,3.574 -13.271,-2.039 -0.942,-1.342 -1.993,-2.723 -3.15,-4.104 -3.485,-3.851 -7.809,-7.582 -12.99,-10.476 -6.593,-3.522 -14.106,-5.535 -22.093,-5.58 -26.142,0.291 -40.131,18.539 -45.107,31.564 -0.869,2.432 -1.539,4.955 -2.006,7.553 -0.061,0.486 -0.106,0.955 -0.124,1.387 5.405,0 93.812,0.015 93.812,0.015 12.861,0.27 19.783,9.348 17.871,19.729"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path30"\n             inkscape:connector-curvature="0" />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',
    largeIcon:
      '<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   width="786.81995"\n   height="786.81995"\n   viewBox="0 0 208.17944 208.17944"\n   version="1.1"\n   id="svg4443"\n   inkscape:version="0.92.0 r15299"\n   sodipodi:docname="xero.svg">\n  <defs\n     id="defs4437">\n    <inkscape:perspective\n       id="perspective87"\n       inkscape:persp3d-origin="372.04723 : 350.78736 : 1"\n       inkscape:vp_z="744.09449 : 526.18106 : 1"\n       inkscape:vp_y="0 : 999.99994 : 0"\n       inkscape:vp_x="0 : 526.18106 : 1"\n       sodipodi:type="inkscape:persp3d" />\n    <font\n       font-weight="700"\n       font-style="normal"\n       font-variant="normal"\n       id="FontID0"\n       horiz-origin-x="0"\n       horiz-origin-y="0"\n       horiz-adv-x="90"\n       vert-origin-x="45"\n       vert-origin-y="90"\n       vert-adv-y="90"\n       style="font-style:normal;font-variant:normal;font-weight:700">\n\t<font-face\n   id="font-face7"\n   font-family="Arial Narrow">\n\t</font-face>\n\n   <missing-glyph\n   id="missing-glyph9">\n  <path\n     id="path11"\n     d="M0 0z" />\n</missing-glyph>\n\n   <glyph\n   id="glyph13"\n   horiz-adv-x="228"\n   unicode=" " />\n\n   <glyph\n   id="glyph15"\n   horiz-adv-x="500"\n   unicode="L">\n  <path\n     id="path17"\n     d="M62.9955 0l0 710 118.173 0 0 -589.33 294.829 0 0 -120.669 -413.002 0z" />\n</glyph>\n\n   <glyph\n   id="glyph19"\n   horiz-adv-x="774"\n   unicode="W">\n  <path\n     id="path21"\n     d="M142.504 0l-140.007 715.836 121.501 0 87.8301 -491.667 107.507 491.667 141.168 0 102.996 -500 90.3377 500 119.158 0 -142.657 -715.836 -126.002 0 -117.165 535.171 -116.169 -535.171 -128.499 0z" />\n</glyph>\n\n   <glyph\n   id="glyph23"\n   horiz-adv-x="456"\n   unicode="k">\n  <path\n     id="path25"\n     d="M55.1662 0l0 715.836 112.829 0 0 -379.834 131.335 182.493 138.671 0 -145.504 -189.326 155.666 -329.169 -120.998 0 -107.496 232.83 -51.6732 -66.828 0 -166.002 -112.829 0z" />\n</glyph>\n\n   <glyph\n   id="glyph27"\n   horiz-adv-x="456"\n   unicode="e">\n  <path\n     id="path29"\n     d="M305.67 164.995l111.833 -22.8308c-15.0015,-52.1659 -38.336,-90.8304 -69.8393,-115.994 -31.6675,-25.3384 -69.9926,-37.8323 -115.161,-37.8323 -62.8312,0 -111.34,20.9912 -145.668,62.9955 -40.3289,48.8371 -60.4989,117.165 -60.4989,204.995 0,86.6694 20.3342,156.005 61.0026,208.007 34.4926,43.9972 79.1577,65.9958 133.831,65.9958 60.8274,0 108.668,-22.5023 143.161,-67.4959 39.6719,-51.3337 59.5024,-127.174 59.5024,-227.498l-0.503701 -15.6695 -281.657 0c0.657001,-40.9969 9.83312,-72.6644 27.4955,-95.1667 17.8376,-22.5023 39.1682,-33.6713 64.1671,-33.6713 36.1679,0 60.3346,24.6704 72.3359,74.1645zm6.32911 138.671c-0.996452,40.3289 -9.66887,70.8357 -25.8311,91.1699 -16.3374,20.3342 -35.6642,30.4958 -58.1665,30.4958 -23.663,0 -43.8329,-10.6653 -60.0061,-31.8317 -16.6659,-21.4949 -24.8237,-51.3337 -24.4952,-89.834l168.499 0z" />\n</glyph>\n\n   <glyph\n   id="glyph31"\n   horiz-adv-x="500"\n   unicode="o">\n  <path\n     id="path33"\n     d="M32.6639 266.666c0,50.6658 10.1726,96.9953 30.3316,138.671 20.1699,41.6648 46.5048,72.8286 79.1687,93.6665 32.4997,20.8269 69.1713,31.328 109.84,31.328 68.3282,0 121.994,-26.8276 161.162,-80.3294 39.004,-53.6661 58.495,-116.169 58.495,-187.837 0,-53.3376 -10.1616,-101.496 -30.4958,-144.497 -20.3342,-43.0007 -46.9975,-75.3362 -80.0009,-96.8311 -33.1676,-21.6701 -69.3356,-32.4997 -108.668,-32.4997 -63.1597,0 -115.665,23.9915 -157.33,72.1607 -41.6648,48.1692 -62.5027,116.837 -62.5027,206.167zm115.337 -7.33652c0,-52.4944 10.1616,-92.1664 30.671,-118.994 20.4984,-26.8385 45.3331,-40.1647 74.3288,-40.1647 28.3277,0 52.4944,13.4904 72.6644,40.4932 20.1699,27.0028 30.3316,66.8389 30.3316,119.673 0,51.3337 -10.3259,90.5019 -30.8243,117.658 -20.5094,27.0028 -45.0046,40.5041 -73.6718,40.5041 -28.3387,0 -52.6696,-13.5014 -73.0038,-40.5041 -20.3342,-27.1561 -30.4958,-66.6637 -30.4958,-118.665z" />\n</glyph>\n\n   <glyph\n   id="glyph35"\n   horiz-adv-x="456"\n   unicode="c">\n  <path\n     id="path37"\n     d="M429.668 365.161l-110.836 -24.331c-8.16872,54.334 -33.6604,81.501 -76.6611,81.501 -27.6707,0 -50.0088,-11.6618 -66.8389,-35.1605 -16.9944,-23.3345 -25.5026,-63.0064 -25.5026,-118.676 0,-61.4953 8.50817,-105 25.5026,-130.327 16.8302,-25.3384 39.4967,-37.9966 67.8354,-37.9966 21.1664,0 38.5003,7.16132 52.1659,21.6591 13.8299,14.5088 23.4988,40.1647 29.3351,76.8363l110.836 -22.8308c-22.6665,-125.005 -88.3338,-187.497 -196.673,-187.497 -69.3356,0 -120.834,26.3239 -154.33,78.9935 -33.4961,52.8339 -50.3373,116.333 -50.3373,190.498 0,88.8375 18.9983,156.509 56.8306,202.838 38.0075,46.3296 87.6768,69.6641 149.172,69.6641 49.8336,0 90.5019,-13.1619 121.83,-39.661 31.5032,-26.3348 54.0055,-68.1748 67.6711,-125.509z" />\n</glyph>\n\n   <glyph\n   id="glyph39"\n   horiz-adv-x="228"\n   unicode="i">\n  <path\n     id="path41"\n     d="M59.163 588.838l0 126.998 112.676 0 0 -126.998 -112.676 0zm0 -588.838l0 518.495 112.676 0 0 -518.495 -112.676 0z" />\n</glyph>\n\n   <glyph\n   id="glyph43"\n   horiz-adv-x="500"\n   unicode="n">\n  <path\n     id="path45"\n     d="M445.83 0l-112.829 0 0 264.662c0,53.0091 -2.1681,88.3338 -6.32911,106.007 -4.17196,17.4981 -12.1764,30.9995 -23.674,40.4932 -11.4975,9.34037 -24.6595,14.1693 -39.3325,14.1693 -18.834,0 -36.0037,-6.16486 -51.3337,-18.3303 -15.1658,-12.1655 -25.9954,-29.0066 -32.1602,-50.5015 -6.17581,-21.4949 -9.34037,-61.999 -9.34037,-121.666l0 -234.834 -112.665 0 0 518.495 104.496 0 0 -76.1574c18.5055,29.3242 39.3325,51.3337 62.667,65.9958 23.3345,14.6621 49.0014,21.9986 77.34,21.9986 32.9924,0 60.6631,-8.66147 83.3297,-25.6669 22.6665,-17.1696 38.1718,-39.1682 46.8333,-65.9958 8.67242,-26.8385 12.9977,-65.6673 12.9977,-116.333l0 -322.336z" />\n</glyph>\n\n   <glyph\n   id="glyph47"\n   horiz-adv-x="456"\n   unicode="a">\n  <path\n     id="path49"\n     d="M142.996 360.332l-101.999 22.5023c12.3407,52.3302 32.8391,89.9982 61.3311,112.993 28.5029,23.006 69.3356,34.5035 122.837,34.5035 47.5012,0 83.8334,-6.66856 108.832,-19.9947 24.9989,-13.5014 43.0007,-31.5032 53.6661,-54.4983 10.8405,-23.006 16.1732,-64.6708 16.1732,-125.334l-1.0074 -160.166c0,-44.8403 1.8396,-78.3365 5.33266,-100.335 3.66826,-21.8343 10.3368,-45.3331 20.0057,-70.0035l-111.34 0 -14.6621 56.6664c-19.1625,-22.8308 -39.661,-39.8362 -61.6705,-51.3337 -21.9986,-11.3333 -45.3331,-16.9944 -70.1568,-16.9944 -41.3363,0 -75.1719,13.8299 -101.507,41.6648 -26.3348,27.835 -39.4967,64.8351 -39.4967,111.165 0,29.1709 5.33266,54.8377 15.998,76.6611 10.8296,21.8343 25.9954,39.1682 45.4974,52.1659 19.502,13.0086 50.841,24.6704 93.6665,34.6678 52.1659,12.0012 88.4981,23.3345 109.007,33.6713 0,28.6672 -2.00385,47.5012 -6.17581,56.5021 -3.99676,8.82572 -11.4975,16.1622 -22.4913,21.8343 -10.8405,5.82541 -26.1706,8.66147 -46.0011,8.66147 -20.3342,0 -36.1679,-4.66471 -47.6655,-13.6656 -11.5085,-9.16517 -21.0021,-26.1706 -28.1744,-51.3337zm150.508 -111.329c-14.3336,-5.83636 -36.6716,-12.6692 -67.0032,-20.4984 -34.832,-9.17612 -57.4986,-19.1735 -68.3391,-30.3425 -10.6653,-10.9938 -15.998,-25.3274 -15.998,-42.8255 0,-19.8414 5.83636,-36.6716 17.6733,-50.173 12.0012,-13.5014 26.8276,-20.159 44.8294,-20.159 15.8337,0 31.6675,5.33266 47.337,16.3265 15.4943,10.8405 26.3348,23.8382 32.4997,38.8397 6.00061,14.9906 9.00092,42.1576 9.00092,81.4901l0 27.3422z" />\n</glyph>\n\n   <glyph\n   id="glyph51"\n   horiz-adv-x="500"\n   unicode="d">\n  <path\n     id="path53"\n     d="M449.17 0l-105 0 0 76.1684c-17.1696,-29.3351 -37.5038,-51.3337 -61.0026,-65.8315 -23.3345,-14.673 -47.5012,-21.9986 -72.1716,-21.9986 -47.6655,0 -88.9908,23.663 -124.327,71 -35.3357,47.326 -52.9981,114.997 -52.9981,202.827 0,88.6733 17.3339,155.337 51.8265,200.506 34.5035,44.9936 77.0006,67.6602 127.338,67.6602 23.8273,0 46.0011,-6.00061 66.6637,-18.1661 20.6627,-12.0012 39.6719,-30.0031 57.0058,-54.1698l0 257.84 112.665 0 0 -715.836zm-300.173 270.498c0,-46.8333 3.83251,-81.8295 11.837,-104.66 8.00447,-23.006 19.502,-40.3399 34.1641,-51.8374 14.8373,-11.4975 31.5032,-17.3339 50.173,-17.3339 24.6595,0 46.1653,13.3371 64.3314,40.0004 18.3303,26.6633 27.3313,67.0032 27.3313,120.669 0,59.4915 -8.83667,102.492 -26.4991,128.663 -17.8376,26.1706 -40.3399,39.3325 -67.6711,39.3325 -25.9954,0 -48.1582,-12.8334 -66.3352,-38.6645 -18.3303,-25.6669 -27.3313,-64.3314 -27.3313,-116.169z" />\n</glyph>\n\n   <glyph\n   id="glyph55"\n   horiz-adv-x="318"\n   unicode="r">\n  <path\n     id="path57"\n     d="M166.999 0l-112.829 0 0 518.495 104.496 0 0 -73.6608c18.0018,34.5035 33.9998,57.3343 48.1692,68.6676 14.1693,11.169 30.4958,16.8302 49.0014,16.8302 25.6669,0 50.3263,-8.66147 73.8251,-25.9954l-35.1605 -119.498c-18.6698,14.8263 -36.1679,22.3271 -52.8339,22.3271 -15.6695,0 -29.3351,-5.66116 -41.1721,-17.3339 -11.9903,-11.4975 -20.4984,-32.3354 -25.6669,-62.667 -5.15746,-30.3316 -7.82927,-86.0015 -7.82927,-166.999l0 -160.166z" />\n</glyph>\n\n   <glyph\n   id="glyph59"\n   horiz-adv-x="272"\n   unicode="t">\n  <path\n     id="path61"\n     d="M253.504 518.495l0 -109.325 -76.6721 0 0 -209.003c0,-45.1688 0.996452,-71.5037 3.33976,-78.5007 4.48951,-13.1619 13.8299,-19.6662 27.824,-19.6662 10.5011,0 25.3384,4.50046 45.0046,13.1619l9.66887 -106.325c-26.0063,-13.6656 -55.5057,-20.4984 -88.3338,-20.4984 -28.6672,0 -51.6732,6.83282 -68.8319,20.4984 -17.3339,13.6656 -28.8314,33.3319 -34.6678,58.9987 -4.66471,18.9983 -6.83282,57.3343 -6.83282,115.337l0 225.998 -51.8374 0 0 109.325 51.8374 0 0 103.171 112.829 80.0009 0 -183.172 76.6721 0z" />\n</glyph>\n\n   <glyph\n   id="glyph63"\n   horiz-adv-x="638"\n   unicode="w">\n  <path\n     id="path65"\n     d="M138.671 0l-134.839 518.495 109.5 0 79.4972 -339.823 73.3323 339.823 108.34 0 70.8357 -339.823 81.501 339.823 110.825 0 -136.667 -518.495 -108 0 -73.1681 333.505 -72.3249 -333.505 -108.832 0z" />\n</glyph>\n\n   <glyph\n   id="glyph67"\n   horiz-adv-x="456"\n   unicode="y">\n  <path\n     id="path69"\n     d="M5.33266 518.495l120.166 0 101.003 -368.162 99.6671 368.162 116.169 0 -149.84 -498.993 -28.8314 -97.1705c-12.6692,-36.4964 -25.3274,-63.1597 -37.8323,-80.0009 -12.5049,-16.9944 -28.5029,-29.9921 -47.8297,-39.1682 -19.3377,-9.00092 -43.165,-13.6656 -71.5037,-13.6656 -21.8343,0 -43.165,2.83606 -64.0029,8.33297l-9.83312 107.507c17.6733,-4.33621 33.3319,-6.34006 47.337,-6.34006 21.4949,0 39.1682,7.17227 52.9981,21.3416 13.8299,14.3226 25.1632,40.4932 33.9998,78.1613l-161.666 519.995z" />\n</glyph>\n\n  </font>\n    <style\n       id="style71"\n       type="text/css">\n   \n    @font-face { font-family:&quot;Arial Narrow&quot;;src:url(&quot;#FontID0&quot;) format(svg)}\n    .fil0 {fill:#28166F}\n    .fnt0 {font-weight:bold;font-size:9.1324;font-family:\'Arial Narrow\'}\n   \n  </style>\n    <clipPath\n       clipPathUnits="userSpaceOnUse"\n       id="clipPath18">\n      <path\n         d="M 0,850.394 H 850.394 V 0 H 0 Z"\n         id="path16"\n         inkscape:connector-curvature="0" />\n    </clipPath>\n  </defs>\n  <sodipodi:namedview\n     id="base"\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1.0"\n     inkscape:pageopacity="0.0"\n     inkscape:pageshadow="2"\n     inkscape:zoom="0.68000308"\n     inkscape:cx="391.90999"\n     inkscape:cy="391.90999"\n     inkscape:document-units="mm"\n     inkscape:current-layer="layer1"\n     showgrid="false"\n     fit-margin-top="0"\n     fit-margin-left="0"\n     fit-margin-right="0"\n     fit-margin-bottom="0"\n     units="px"\n     inkscape:window-width="1280"\n     inkscape:window-height="744"\n     inkscape:window-x="-4"\n     inkscape:window-y="-4"\n     inkscape:window-maximized="1" />\n  <metadata\n     id="metadata4440">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     inkscape:label="Layer 1"\n     inkscape:groupmode="layer"\n     id="layer1"\n     transform="translate(-5.8874759,-271.69643)">\n    <g\n       id="g10"\n       transform="matrix(0.35277777,0,0,-0.35277777,-39.929542,525.63751)">\n      <g\n         id="g12">\n        <g\n           id="g14"\n           clip-path="url(#clipPath18)">\n          <path\n             d="m 424.933,130.843 c 162.335,0 293.932,131.597 293.932,293.933 0,162.334 -131.597,293.932 -293.932,293.932 C 262.598,718.708 131,587.11 131,424.776 131,262.44 262.598,130.843 424.933,130.843"\n             style="fill:#1ab4d7;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path20"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 271.701,425.625 50.162,50.286 c 1.663,1.695 2.591,3.939 2.591,6.319 0,4.96 -4.032,8.988 -8.992,8.988 -2.416,0 -4.681,-0.947 -6.389,-2.676 -0.005,-0.01 -50.117,-50.093 -50.117,-50.093 l -50.341,50.168 c -1.701,1.677 -3.955,2.601 -6.345,2.601 -4.954,0 -8.987,-4.026 -8.987,-8.981 0,-2.417 0.965,-4.685 2.697,-6.394 l 50.155,-50.148 -50.129,-50.223 c -1.762,-1.735 -2.723,-4.008 -2.723,-6.436 0,-4.959 4.033,-8.982 8.987,-8.982 2.394,0 4.65,0.929 6.345,2.625 l 50.263,50.195 50.072,-50.012 c 1.776,-1.836 4.067,-2.814 6.512,-2.814 4.955,0 8.987,4.029 8.987,8.988 0,2.393 -0.927,4.641 -2.614,6.336 z"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path22"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 569.906,425.64 c 0,-9.006 7.323,-16.332 16.34,-16.332 8.996,0 16.322,7.326 16.322,16.332 0,9.008 -7.326,16.333 -16.322,16.333 -9.017,0 -16.34,-7.325 -16.34,-16.333"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path24"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 538.93,425.632 c 0,26.08 21.216,47.3 47.299,47.3 26.07,0 47.291,-21.22 47.291,-47.3 0,-26.074 -21.221,-47.285 -47.291,-47.285 -26.083,0 -47.299,21.211 -47.299,47.285 m -18.606,0 c 0,-36.334 29.565,-65.895 65.905,-65.895 36.339,0 65.919,29.561 65.919,65.895 0,36.339 -29.58,65.908 -65.919,65.908 -36.34,0 -65.905,-29.569 -65.905,-65.908"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path26"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 515.646,490.413 -2.765,0.008 c -8.301,0 -16.307,-2.618 -22.994,-7.771 -0.881,4.032 -4.485,7.066 -8.778,7.066 -4.941,0 -8.9,-3.959 -8.912,-8.91 0,-0.018 0.03,-111 0.03,-111 0.013,-4.942 4.044,-8.959 8.988,-8.959 4.943,0 8.973,4.017 8.986,8.97 0,0.022 0.004,68.251 0.004,68.251 0,22.748 2.08,31.935 21.566,34.37 1.801,0.224 3.76,0.189 3.768,0.189 5.332,0.183 9.121,3.847 9.121,8.799 0,4.955 -4.045,8.987 -9.014,8.987"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path28"\n             inkscape:connector-curvature="0" />\n          <path\n             d="m 343.072,436.482 c 0,0.246 0.019,0.502 0.031,0.755 5.218,20.627 23.899,35.891 46.147,35.891 22.517,0 41.369,-15.639 46.32,-36.646 z m 110.903,1.697 c -3.873,18.337 -13.912,33.399 -29.199,43.072 -22.346,14.187 -51.854,13.402 -73.438,-1.947 -17.606,-12.525 -27.769,-33.014 -27.769,-54.12 0,-5.292 0.638,-10.634 1.966,-15.892 6.648,-26.152 29.13,-45.949 55.934,-49.23 7.954,-0.963 15.696,-0.502 23.713,1.574 6.889,1.676 13.555,4.47 19.697,8.406 6.375,4.098 11.701,9.502 16.859,15.971 0.104,0.119 0.209,0.224 0.313,0.349 3.58,4.44 2.916,10.754 -1.018,13.768 -3.318,2.543 -8.888,3.574 -13.271,-2.039 -0.942,-1.342 -1.993,-2.723 -3.15,-4.104 -3.485,-3.851 -7.809,-7.582 -12.99,-10.476 -6.593,-3.522 -14.106,-5.535 -22.093,-5.58 -26.142,0.291 -40.131,18.539 -45.107,31.564 -0.869,2.432 -1.539,4.955 -2.006,7.553 -0.061,0.486 -0.106,0.955 -0.124,1.387 5.405,0 93.812,0.015 93.812,0.015 12.861,0.27 19.783,9.348 17.871,19.729"\n             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"\n             id="path30"\n             inkscape:connector-curvature="0" />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',
    version: '5.2.0',
    description:
      'Our Xero integration exposes accounting and related functions and can be used for a variety of purposes, from creating transactions like invoices and credit notes, to extracting accounting data.',
    outOfPlan: true,
    tags: {
      catalog: 'Accounting',
    },
    configuration: {},
  },
  {
    id: 'google-youtube',
    name: 'YouTube',
    smallIcon:
      '<svg width="159" height="110" xmlns="http://www.w3.org/2000/svg"><path d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z" fill="#f00"/><path d="m105 55-40.8-23.4v46.8z" fill="#fff"/></svg>\n\n',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 492 110" xmlns:v="https://vecta.io/nano"><path d="M154.3 17.5a19.6 19.6 0 0 0-13.8-13.8C128.4.4 79.7.4 79.7.4S31 .5 18.9 3.8A19.6 19.6 0 0 0 5.1 17.6C1.44 39.1.02 71.86 5.2 92.5A19.6 19.6 0 0 0 19 106.3c12.1 3.3 60.8 3.3 60.8 3.3s48.7 0 60.8-3.3a19.6 19.6 0 0 0 13.8-13.8c3.86-21.53 5.05-54.27-.1-75z" fill="red"/><path fill="#fff" d="M64.2 78.4L104.6 55 64.2 31.6z"/><g fill="#282828"><path d="M227.9 99.7c-3.1-2.1-5.3-5.3-6.6-9.7s-1.9-10.2-1.9-17.5v-9.9c0-7.3.7-13.3 2.2-17.7 1.5-4.5 3.8-7.7 7-9.7s7.3-3.1 12.4-3.1c5 0 9.1 1 12.1 3.1s5.3 5.3 6.7 9.7 2.1 10.3 2.1 17.6v9.9c0 7.3-.7 13.1-2.1 17.5s-3.6 7.6-6.7 9.7c-3.1 2-7.3 3.1-12.5 3.1-5.4.1-9.6-1-12.7-3zM245.2 89c.9-2.2 1.3-5.9 1.3-10.9V56.8c0-4.9-.4-8.5-1.3-10.7-.9-2.3-2.4-3.4-4.5-3.4s-3.5 1.1-4.4 3.4-1.3 5.8-1.3 10.7v21.3c0 5 .4 8.7 1.2 10.9s2.3 3.3 4.5 3.3c2.1 0 3.6-1.1 4.5-3.3zm219.2-16.3v3.5l.4 9.9c.3 2.2.8 3.8 1.6 4.8s2.1 1.5 3.8 1.5c2.3 0 3.9-.9 4.7-2.7.9-1.8 1.3-4.8 1.4-8.9l13.3.8c.1.6.1 1.4.1 2.4 0 6.3-1.7 11-5.2 14.1s-8.3 4.7-14.6 4.7c-7.6 0-12.9-2.4-15.9-7.1s-4.6-12.1-4.6-22V61.6c.34-17 3.33-29.45 20.9-29.5 5.3 0 9.3 1 12.1 2.9s4.8 4.9 6 9 1.7 9.7 1.7 16.9v11.7h-25.7zm2-28.8c-.8 1-1.3 2.5-1.6 4.7s-.4 10-.4 10v4.9h11.2v-4.9c0 4.9-.1-7.7-.4-10s-.8-3.9-1.6-4.8-2-1.4-3.6-1.4c-1.7.1-2.9.6-3.6 1.5zM190.5 71.4L173 8.2h15.3s7.15 31.7 9.6 46.6h.4c2.78-15.82 9.8-46.6 9.8-46.6h15.3l-17.7 63.1v30.3h-15.1V71.4z"/><path id="A" d="M311.5 33.4v68.3h-12l-1.3-8.4h-.3c-3.3 6.3-8.2 9.5-14.7 9.5-11.77-.03-13.08-10-13.2-18.4v-51h15.4v50.1c0 3 .3 5.2 1 6.5 1.42 2.78 5.1 2.07 7.1.7a8 8 0 0 0 2.7-3.1V33.4z" fill="#282828"/><path d="M353.3 20.6H338v81.1h-15V20.6h-15.3V8.2h45.5v12.4zm87.9 23.7c-.9-4.3-2.4-7.4-4.5-9.4-2.1-1.9-4.9-2.9-8.6-2.9a14.1 14.1 0 0 0-7.9 2.4c-2.5 1.6-4.3 3.7-5.7 6.3h-.1v-36h-14.8v96.9h12.7l1.6-6.5h.3a14 14 0 0 0 5.3 5.5c2.4 1.3 5 2 7.9 2 5.2 0 9-2.4 11.5-7.2 2.4-4.8 3.7-12.3 3.7-22.4V62.2c0-7.6-.5-13.6-1.4-17.9zm-14.1 27.9c0 5-.2 8.9-.6 11.7s-1.1 4.8-2.1 6-2.3 1.8-3.9 1.8c-3.1-.1-4.86-1.5-6.1-3.6V49.3c.5-1.9 1.4-3.4 2.7-4.6 2.2-2.47 5.96-2.5 7.7 0 .9 1.2 1.4 3.3 1.8 6.2.3 2.9.5 7 .5 12.4z"/></g><use xlink:href="#A" x="78.9"/></svg>\n\n',
    version: '5.2.0',
    description:
      'This YouTube integration allows you to upload videos, manage playlists and subscriptions, update channel settings, and more.\n\n[Learn more](https://developer.fusebit.io/docs/youtube)!\n',
    tags: {
      catalog: 'Video',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/youtube#creating-your-own-youtube-app',
      sampleConfig: {
        isEnabled: true,
        isGetEnabled: true,
        isPostEnabled: false,
        terms: {
          getFail: 'YouTube GET failed',
          itemName: 'Video',
          properties: [
            {
              name: 'name',
              label: 'Name',
            },
            {
              name: 'link',
              label: 'Link',
            },
          ],
        },
      },
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          youtubeIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          youtubeConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/youtubeIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/youtubeConnector/properties/id',
            label: 'YouTube Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        youtubeConnector: {
          youtubeName: 'youtube-connector',
        },
      },
      entities: {
        youtubeConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: true,
              },
              scope:
                'openid profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
              clientId: '',
              clientSecret: '',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-youtube-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/google-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google',
          },
        },
        youtubeIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-youtube-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/google-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit YouTube Integration\n//\n// This simple YouTube integration allows you to call YouTube APIs on behalf of the tenants of your\n// application. Fusebit manages the YouTube authorization process and maps tenants of your application\n// to their YouTube credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'googleConnector';\n\n// The sample test endpoint of this integration searchs for videos on YouTube with the Fusebit keyword.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a YouTube client pre-configured with credentials necessary to communicate with your tenant's YouTube account.\n  // For the YouTube SDK documentation, see https://developers.google.com/youtube/v3/docs/ and\n  // https://googleapis.dev/nodejs/googleapis/latest/youtube/.\n  const google = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const youtube = google.youtube('v3');\n\n  const res = await youtube.search.list({\n    part: 'id,snippet',\n    q: 'Fusebit',\n  });\n\n  ctx.body = {\n    message: `Found ${res.data.items.length} matching videos.`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'googleConnector',
                skip: false,
                provider: '@fusebit-int/google-provider',
                entityId: '<% global.entities.youtubeConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'YouTube',
          },
        },
      },
    },
  },
  {
    id: 'zendesk-planned',
    name: 'Zendesk',
    smallIcon:
      '<svg width="76" height="57" viewBox="0 0 76 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M34.884 0C34.884 9.633 27.075 17.385 17.442 17.385H17.385C7.809 17.328 0.057 9.576 0 0H34.884ZM40.641 57C40.926 47.367 48.963 39.786 58.596 40.071C67.83 40.356 75.297 47.766 75.525 57H40.641ZM34.884 15.048V57H0L34.884 15.048ZM40.641 0V41.952L75.525 0H40.641Z" fill="#02363D"/>\n</svg>\n',
    largeIcon:
      '<svg width="76" height="57" viewBox="0 0 76 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M34.884 0C34.884 9.633 27.075 17.385 17.442 17.385H17.385C7.809 17.328 0.057 9.576 0 0H34.884ZM40.641 57C40.926 47.367 48.963 39.786 58.596 40.071C67.83 40.356 75.297 47.766 75.525 57H40.641ZM34.884 15.048V57H0L34.884 15.048ZM40.641 0V41.952L75.525 0H40.641Z" fill="#02363D"/>\n</svg>\n',
    version: '5.2.0',
    description:
      'Build powerful Zendesk Integrations with this connector. Work with tickets, users and organizations \nand manage ticket workflows. Manage Help Center, Knowledge base and Community. Integrate \nlive chat,  messaging, and call center capabilities with your solution.',
    outOfPlan: true,
    tags: {
      catalog: 'Support',
    },
    configuration: {},
  },
  {
    id: 'zoom',
    name: 'Zoom',
    smallIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M57.0017 28.5009C57.0017 12.7597 44.2411 0 28.5009 0C12.7606 0 0 12.7597 0 28.5009C0 44.2403 12.7606 57 28.5009 57C44.2411 57 57.0017 44.2403 57.0017 28.5009Z" fill="#008DFF"/>\n<path d="M10.0698 18.119H31.0608C31.0608 18.119 36.1808 18.631 36.3509 22.727V38.598H16.0428C16.0428 38.598 10.2408 39.281 10.0698 33.308" fill="white"/>\n<path d="M46.5909 18.119V38.622L37.5459 32.625V24.263L46.5909 18.119Z" fill="white"/>\n</svg>\n',
    largeIcon:
      '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"\n   sodipodi:docname="Zoom_2011.svg"\n   id="svg835"\n   version="1.1"\n   height="224.72337"\n   width="1000">\n  <metadata\n     id="metadata841">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id="defs839" />\n  <sodipodi:namedview\n     inkscape:current-layer="svg835"\n     inkscape:window-maximized="1"\n     inkscape:window-y="-8"\n     inkscape:window-x="1912"\n     inkscape:cy="-314.24417"\n     inkscape:cx="948.1979"\n     inkscape:zoom="0.49497475"\n     showgrid="false"\n     id="namedview837"\n     inkscape:window-height="1017"\n     inkscape:window-width="1920"\n     inkscape:pageshadow="2"\n     inkscape:pageopacity="0"\n     guidetolerance="10"\n     gridtolerance="10"\n     objecttolerance="10"\n     borderopacity="1"\n     inkscape:document-rotation="0"\n     bordercolor="#666666"\n     pagecolor="#ffffff"\n     fit-margin-top="0"\n     fit-margin-left="0"\n     fit-margin-right="0"\n     fit-margin-bottom="0" />\n  <path\n     inkscape:connector-curvature="0"\n     id="path833"\n     d="m 814.1856,67.388717 c 3.82247,6.59494 5.07303,14.0983 5.48595,22.53368 l 0.5427,11.243253 v 78.62013 l 0.55449,11.25504 c 1.10899,18.38088 14.66459,31.97188 33.18704,33.12806 l 11.19606,0.55449 V 101.16565 l 0.55449,-11.243253 c 0.46011,-8.341 1.69888,-15.98593 5.58033,-22.62806 a 44.902197,44.902197 0 0 1 77.74711,0.14157 c 3.82246,6.59494 5.01403,14.23987 5.47415,22.48649 l 0.55449,11.207863 v 78.65552 l 0.55449,11.25504 c 1.15618,18.47526 14.60561,32.06626 33.18705,33.12806 L 1000,224.72337 V 89.922397 A 89.898775,89.898775 0 0 0 910.13662,0.02362708 89.662821,89.662821 0 0 0 842.71254,30.473587 89.780798,89.780798 0 0 0 775.28845,0.01182708 c -18.66402,0 -35.9831,5.66292002 -50.32915,15.44323992 C 716.20538,5.6865371 696.62113,0.01182708 685.37788,0.01182708 V 224.72337 l 11.24325,-0.55449 c 18.80559,-1.23877 32.39659,-14.46403 33.12805,-33.12806 l 0.60168,-11.25504 v -78.62013 l 0.5545,-11.243253 c 0.47191,-8.48257 1.65168,-15.93874 5.48595,-22.58087 a 45.020174,45.020174 0 0 1 38.89714,-22.39211 44.949388,44.949388 0 0 1 38.89715,22.4393 z M 44.93759,224.18067 l 11.243246,0.5427 H 224.71155 l -0.5545,-11.20785 c -1.52191,-18.47526 -14.6056,-31.97188 -33.13985,-33.17525 l -11.24324,-0.55449 H 78.667327 L 213.4683,44.937617 212.91381,33.741567 C 212.04077,15.077537 198.40259,1.5927271 179.77396,0.56631708 l -11.24325,-0.5073 L 0,0.01182708 0.55449376,11.255077 C 2.0292112,29.553367 15.301668,43.333127 33.682546,44.394927 l 11.255044,0.55449 H 146.04422 L 11.243246,179.79758 11.79774,191.04082 c 1.108987,18.52245 14.475826,31.93648 33.13985,33.12806 z M 641.26613,32.903927 a 112.34987,112.34987 0 0 1 0,158.903753 112.43246,112.43246 0 0 1 -158.93914,0 c -43.8758,-43.8758 -43.8758,-115.027963 0,-158.903753 A 112.29089,112.29089 0 0 1 561.72577,2.7082708e-5 112.37347,112.37347 0 0 1 641.26613,32.915727 Z m -31.7949,31.8185 a 67.447677,67.447677 0 0 1 0,95.349333 67.447677,67.447677 0 0 1 -95.34934,0 67.447677,67.447677 0 0 1 0,-95.349333 67.447677,67.447677 0 0 1 95.34934,0 z M 325.91256,2.7082708e-5 A 112.29089,112.29089 0 0 1 405.31134,32.915727 c 43.88759,43.86399 43.88759,115.027953 0,158.891953 a 112.43246,112.43246 0 0 1 -158.93914,0 c -43.8758,-43.8758 -43.8758,-115.027963 0,-158.903753 A 112.29089,112.29089 0 0 1 325.77098,2.7082708e-5 Z M 373.51643,64.698837 a 67.447677,67.447677 0 0 1 0,95.361123 67.447677,67.447677 0 0 1 -95.34933,0 67.447677,67.447677 0 0 1 0,-95.349333 67.447677,67.447677 0 0 1 95.34933,0 z"\n     style="fill:#2d8cff;fill-rule:evenodd;stroke-width:11.79773998" />\n</svg>\n',
    version: '5.2.0',
    description:
      'This Integration allows you to access user details, meeting reports, dashboard data, as well as perform actions on the Zoom platform on a user’s behalf, for example, creating a new user or deleting meeting recordings.\n\n[Learn more](https://developer.fusebit.io/docs/zoom)!\n',
    tags: {
      catalog: 'Video Conferencing',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/zoom#creating-your-own-zoom-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          zoomIntegration: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          zoomConnector: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                minLength: 3,
              },
            },
          },
          ui: {
            type: 'object',
            properties: {
              toggle: {
                type: 'boolean',
                description: 'The "toggle" option renders boolean values as a toggle.',
              },
            },
          },
        },
      },
      uischema: {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/zoomIntegration/properties/id',
            label: 'Name',
          },
          {
            type: 'Control',
            label: 'Customize',
            scope: '#/properties/ui/properties/toggle',
            options: {
              toggle: true,
            },
          },
          {
            type: 'Control',
            scope: '#/properties/zoomConnector/properties/id',
            label: 'Zoom Connector name',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/ui/properties/toggle',
                schema: {
                  const: true,
                },
              },
            },
          },
        ],
      },
      data: {
        zoomConnector: {
          zoomName: 'zoom-connector',
        },
      },
      entities: {
        zoomConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: '',
              clientId: '<% global.consts.random %>',
              clientSecret: '<% global.consts.random %>',
              refreshErrorLimit: 100000,
              refreshInitialBackoff: 100000,
              refreshWaitCountLimit: 100000,
              refreshBackoffIncrement: 100000,
              accessTokenExpirationBuffer: 500,
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-zoom-connector","version":"7.41.2","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/zoom-connector":"7.41.2"}}',
            },
            handler: '@fusebit-int/zoom-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Zoom',
          },
        },
        zoomIntegration: {
          entityType: 'integration',
          data: {
            configuration: {},
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-integration-zoom-integration","version":"7.41.2","private":true,"scripts":{"deploy":"fuse integration deploy <% this.id %> -d .","get":"fuse integration get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.2","@fusebit-int/zoom-provider":"7.41.2"},"files":["./integration.js","README.md"]}',
              './integration.js':
                "// Fusebit Zoom Integration\n//\n// This simple Zoom integration allows you to call Zoom APIs on behalf of the tenants of your\n// application. Fusebit manages the Zoom authorization process and maps tenants of your application\n// to their Zoom credentials, so that you can focus on implementing the integration logic.\n//\n// A Fusebit integration is a microservice running on the Fusebit platform.\n// You control the endpoints exposed from the microservice. You call those endpoints from your application\n// to perform specific tasks on behalf of the tenants of your app.\n//\n// Learn more about Fusebit Integrations at: https://developer.fusebit.io/docs/integration-programming-model\n\nconst { Integration } = require('@fusebit-int/framework');\n\nconst integration = new Integration();\n\n// Fusebit uses the KoaJS (https://koajs.com/) router to allow you to add custom HTTP endpoints\n// to the integration, which you can then call from within your application.\nconst router = integration.router;\nconst connectorName = 'zoomConnector';\n\n// The sample test endpoint of this integration gets all contacts stored in the Zoom account associated with your tenant.\nrouter.post('/api/tenant/:tenantId/test', integration.middleware.authorizeUser('install:get'), async (ctx) => {\n  // Create a Zoom client pre-configured with credentials necessary to communicate with your tenant's Zoom account.\n  const zoomClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n\n  const me = await zoomClient.get('/users/me');\n  const meetings = await zoomClient.get('/users/me/meetings');\n\n  ctx.body = {\n    message: `${me.first_name} ${me.last_name} has ${meetings.total_records} meetings scheduled.`,\n  };\n});\n\nmodule.exports = integration;\n",
              'README.md':
                "Thanks for trying out Fusebit and downloading your <% global.consts.feed.name %> Integration code.\n\nUse your favorite tools to make any changes to the code in this folder.\n\n\n# Editing Integration code\n\n1. Ensure you have a recent version of [Node.js](https://nodejs.org) on your system and then run\n\n`npm i -g @fusebit/cli`\n\n2. After the Fusebit CLI is installed, run the following command. This command will trigger an \nauthentication process where you will need to log in with the same account you used for the Fusebit \nManagement Portal.\n\n`fuse init`\n\n3. You can now download the code for an integration.\n\n`fuse integration get <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n4. You can now explore the code in the given directory and make any changes with your favorite editor or IDE. At present, the code cannot be executed locally, so running `npm install` is not necessary. \n\n5. After making local changes to the code, you can push the updates to Fusebit's cloud by running\n\n`fuse integration deploy <% global.consts.integrationId %> -d <% global.consts.integrationId %>`\n\n\n# Running your Integration\n\nTo run the Integration and test as you make changes, follow these steps:\n\n1. (Development-time only) The integration needs to know the Identity of the user on whose behalf to execute. In production, this will be handled by your application, but for test purposes, you can log in as yourself manually.Open the test application for the '<% global.consts.integrationId %>' integration in the browser with:\n\n`fuse integration test <% global.consts.integrationId %>`\n\n2. You will be asked to log in, and the integration will act on your behalf going forward.\n\n3. Note the `curl` command and JavaScript example displayed by the test application in the previous step and use that to invoke the integration. If your token expires, you can always obtain a new one by opening up the test application again with `fuse integration test <% global.consts.integrationId %>`, or by generating a new access token directly with `fuse token -o raw`.\n\n\n# Debugging your Integration\n\nAfter you make a code change and run the Integration, you can inspect `console`\noutput and any errors by running:\n\n`fuse integration log <% global.consts.integrationId %>`\n\n",
            },
            handler: './integration',
            components: [
              {
                name: 'zoomConnector',
                skip: false,
                provider: '@fusebit-int/zoom-provider',
                entityId: '<% global.entities.zoomConnector.id %>',
                dependsOn: [],
                entityType: 'connector',
              },
            ],
            componentTags: {},
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Zoom',
          },
        },
      },
    },
  },
];
