export const feed = [
  {
    id: 'asana',
    name: 'Asana',
    smallIcon:
      '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.2389 10.2084C12.8996 10.2084 11.0035 12.1045 11.0035 14.4435C11.0035 16.7827 12.8996 18.6791 15.2389 18.6791C17.5779 18.6791 19.474 16.7827 19.474 14.4435C19.474 12.1045 17.5779 10.2084 15.2389 10.2084ZM4.23526 10.2087C1.89628 10.2089 0 12.1045 0 14.4437C0 16.7827 1.89628 18.6789 4.23526 18.6789C6.57442 18.6789 8.47072 16.7827 8.47072 14.4437C8.47072 12.1045 6.57442 10.2087 4.23505 10.2087H4.23526ZM13.9723 4.91438C13.9723 7.25335 12.0762 9.15004 9.73721 9.15004C7.39784 9.15004 5.50174 7.25335 5.50174 4.91438C5.50174 2.57541 7.39784 0.679138 9.73719 0.679138C12.0762 0.679138 13.9721 2.57541 13.9721 4.91438H13.9723Z" fill="url(#paint0_radial)"/>\n<defs>\n<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.73963 10.5277) scale(12.9113 11.934)">\n<stop stop-color="#FFB900"/>\n<stop offset="0.6" stop-color="#F95D8F"/>\n<stop offset="0.999" stop-color="#F95353"/>\n</radialGradient>\n</defs>\n</svg>\n',
    largeIcon:
      '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.2389 10.2084C12.8996 10.2084 11.0035 12.1045 11.0035 14.4435C11.0035 16.7827 12.8996 18.6791 15.2389 18.6791C17.5779 18.6791 19.474 16.7827 19.474 14.4435C19.474 12.1045 17.5779 10.2084 15.2389 10.2084ZM4.23526 10.2087C1.89628 10.2089 0 12.1045 0 14.4437C0 16.7827 1.89628 18.6789 4.23526 18.6789C6.57442 18.6789 8.47072 16.7827 8.47072 14.4437C8.47072 12.1045 6.57442 10.2087 4.23505 10.2087H4.23526ZM13.9723 4.91438C13.9723 7.25335 12.0762 9.15004 9.73721 9.15004C7.39784 9.15004 5.50174 7.25335 5.50174 4.91438C5.50174 2.57541 7.39784 0.679138 9.73719 0.679138C12.0762 0.679138 13.9721 2.57541 13.9721 4.91438H13.9723Z" fill="url(#paint0_radial)"/>\n<defs>\n<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.73963 10.5277) scale(12.9113 11.934)">\n<stop stop-color="#FFB900"/>\n<stop offset="0.6" stop-color="#F95D8F"/>\n<stop offset="0.999" stop-color="#F95353"/>\n</radialGradient>\n</defs>\n</svg>\n',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Asana on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/asana)!\n',
    tags: {
      catalog: 'Project Management,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/asana#creating-your-own-asana-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          asanaConnector: {
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
            scope: '#/properties/asanaConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-asana-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/asana-connector":"7.41.0","@fusebit-int/framework":"7.41.0"}}',
            },
            handler: '@fusebit-int/asana-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Asana',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/asana-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Create a new task',
        description: 'Create a new Asana task.',
        code:
          "\n/**\n * Create a new Asana task. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param name {string} Task name\n * @param notes {string} Task notes\n * @param otherProperties {object} [undefined] Optinal additional properties of the task, including \"workspace\".\n * @returns {object} Newly created task.\n */\nasync function asanaCreateTask(ctx, name, notes, otherProperties) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  data = data || {};\n  if (!data.workspace) {\n    // Default to the first workspace of the logged in user\n    const me = await asanaClient.users.me();\n    data.workspace = me.workspaces[0].gid;\n  }\n  const task = await asanaClient.tasks.createTask(\n    { name, notes, ...otherProperties },\n    { headers: { 'Asana-Enable': 'new_user_task_lists' } }\n  );\n  return task;\n}\n",
        id: 'create-task',
      },
      {
        name: 'Delete task',
        description: 'Delete an existing Asana task.',
        code:
          "\n/**\n * Delete an existing Asana task. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param taskGid {string} Task Id. \n * @param workspace {steing} [undefined] Optional workspace Id. Defaults to first workspace of authorized user if not specified. \n */\nasync function asanaDeleteTask(ctx, taskGid, workspace) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  if (!workspace) {\n    // Default to the first workspace of the logged in user\n    const me = await asanaClient.users.me();\n    workspace = me.workspaces[0].gid;\n  }\n  await asanaClient.tasks.deleteTask(taskGid, { workspace });\n}\n",
        id: 'delete-task',
      },
      {
        name: 'Get all tasks',
        description: 'Get all Asana tasks matching the search critera.',
        code:
          "\n/**\n * Get all Asana tasks matching the search criteria. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param includeDetails {boolean} If set to true, all tasks details are included in the response. \n * @param workspace {string} [undefined] Optional workspace Id to search in. Defaults to the first workspace of the logged in user. \n * @param assignee {string} [undefined] Optional assignee Id to return tasks for. Defaults to the logged in user. \n * @param otherProperties {object} [undefined] Optional additional criteria for matching tasks.\n * @returns {Array} Array of all tasks matching the search criteria\n */\nasync function asanaGetAllTasks(ctx, includeDetails, workspace, assignee, otherProperties) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  if (!workspace || !assignee) {\n    // Default to listing issues assigned to the logged in user in the their first workspace\n    const me = await asanaClient.users.me();\n    workspace = workspace || me.workspaces[0].gid;\n    assignee = assignee || me.gid;\n  }\n  // Page through to collect all tasks\n  let tasks = [];\n  let response;\n  do {\n    response = await asanaClient.tasks.getTasks({\n      assignee,\n      workspace,\n      offset: response && response._response && response._response.next_page && response._response.next_page.offset,\n      ...otherProperties,\n    });\n    if (response.data && includeDetails) {\n      for (let i = 0; i < response.data.length; i++) {\n        response.data[i] = await asanaClient.tasks.getTask(response.data[i].gid, undefined, {\n          headers: { 'Asana-Enable': 'new_user_task_lists' },\n        });\n      }\n    }\n    tasks = tasks.concat(response.data);\n  } while (response && response._response && response._response.next_page);\n  return tasks;\n}\n",
        id: 'get-all-tasks',
      },
      {
        name: 'Get authorized user',
        description: 'Get authorized Asana user.',
        code:
          "\n/**\n * Get details of authorized user. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {object} Authorized Asana user.\n */\nasync function asanaGetMe(ctx) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await asanaClient.users.me();\n}\n",
        id: 'get-me',
      },
      {
        name: 'Get task details',
        description: 'Get Asana task details.',
        code:
          "\n/**\n * Get Asana task details. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param taskGid {string} Task Id. \n * @param fields {Array} [undefined] Optional list of fields to return.\n * @returns {object} Asana task.\n */\nasync function asanaGetTask(ctx, taskGid, fields) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const task = await asanaClient.tasks.getTask(taskGid, fields && { optFields: fields }, {\n    headers: { 'Asana-Enable': 'new_user_task_lists' },\n  });\n  return task;\n}\n",
        id: 'get-task',
      },
      {
        name: 'Update an existing task',
        description: 'Update an existing Asana task.',
        code:
          "\n/**\n * Update an existing Asana task. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param taskGid {string} Task Id\n * @param propertiesToUpdate {object} Properties of the task to update\n * @returns {object} Updated task.\n */\nasync function asanaUpdateTask(ctx, taskGid, propertiesToUpdate) {\n  // For the Asana SDK documentation, see https://github.com/Asana/node-asana\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  data = data || {};\n  if (!data.workspace) {\n    // Default to the first workspace of the logged in user\n    const me = await asanaClient.users.me();\n    data.workspace = me.workspaces[0].gid;\n  }\n  const task = await asanaClient.tasks.updateTask(taskGid, propertiesToUpdate, {\n    headers: { 'Asana-Enable': 'new_user_task_lists' },\n  });\n  return task;\n}\n",
        id: 'update-task',
      },
    ],
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    smallIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8994 26.3434C16.6377 26.0018 16.2513 25.7777 15.8248 25.7203C15.3984 25.6628 14.9665 25.7766 14.6237 26.0369C14.4221 26.1959 14.2594 26.3989 14.1482 26.6303L0.176088 54.5824C-0.0218045 54.9785 -0.054309 55.437 0.0857189 55.8571C0.225747 56.2771 0.526848 56.6244 0.922838 56.8226C1.1543 56.9397 1.4102 57.0003 1.66959 56.9995H21.1362C21.448 57.0074 21.7553 56.9243 22.0206 56.7603C22.2859 56.5962 22.4975 56.3584 22.6297 56.0759C26.8311 47.3978 24.2843 34.2039 16.8994 26.3434Z" fill="url(#paint0_linear_251_473)"/> <path d="M27.1691 0.90701C23.686 6.2669 21.6561 12.4402 21.2785 18.8213C20.9009 25.2023 22.1886 31.5719 25.0153 37.3052L34.4008 56.0761C34.5395 56.3535 34.7526 56.5869 35.0164 56.75C35.2802 56.9131 35.5842 56.9996 35.8943 56.9997H55.357C55.5765 57.0003 55.794 56.9574 55.9969 56.8736C56.1998 56.7899 56.3841 56.6669 56.5393 56.5117C56.6945 56.3564 56.8176 56.1721 56.9013 55.9692C56.9851 55.7663 57.0279 55.5489 57.0274 55.3294C57.0276 55.0705 56.9684 54.8151 56.8545 54.5826L30.0107 0.899149C29.8833 0.630147 29.6821 0.402843 29.4306 0.243671C29.1791 0.0844994 28.8876 0 28.5899 0C28.2923 0 28.0007 0.0844994 27.7492 0.243671C27.4977 0.402843 27.2965 0.630147 27.1691 0.899149V0.90701Z" fill="#2684FF"/> <defs> <linearGradient id="paint0_linear_251_473" x1="24.5909" y1="30.6156" x2="9.83668" y2="56.1702" gradientUnits="userSpaceOnUse"> <stop stop-color="#0052CC"/> <stop offset="0.92" stop-color="#2684FF"/> </linearGradient> </defs> </svg>\n',
    largeIcon:
      '<svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8994 26.3434C16.6377 26.0018 16.2513 25.7777 15.8248 25.7203C15.3984 25.6628 14.9665 25.7766 14.6237 26.0369C14.4221 26.1959 14.2594 26.3989 14.1482 26.6303L0.176088 54.5824C-0.0218045 54.9785 -0.054309 55.437 0.0857189 55.8571C0.225747 56.2771 0.526848 56.6244 0.922838 56.8226C1.1543 56.9397 1.4102 57.0003 1.66959 56.9995H21.1362C21.448 57.0074 21.7553 56.9243 22.0206 56.7603C22.2859 56.5962 22.4975 56.3584 22.6297 56.0759C26.8311 47.3978 24.2843 34.2039 16.8994 26.3434Z" fill="url(#paint0_linear_251_473)"/> <path d="M27.1691 0.90701C23.686 6.2669 21.6561 12.4402 21.2785 18.8213C20.9009 25.2023 22.1886 31.5719 25.0153 37.3052L34.4008 56.0761C34.5395 56.3535 34.7526 56.5869 35.0164 56.75C35.2802 56.9131 35.5842 56.9996 35.8943 56.9997H55.357C55.5765 57.0003 55.794 56.9574 55.9969 56.8736C56.1998 56.7899 56.3841 56.6669 56.5393 56.5117C56.6945 56.3564 56.8176 56.1721 56.9013 55.9692C56.9851 55.7663 57.0279 55.5489 57.0274 55.3294C57.0276 55.0705 56.9684 54.8151 56.8545 54.5826L30.0107 0.899149C29.8833 0.630147 29.6821 0.402843 29.4306 0.243671C29.1791 0.0844994 28.8876 0 28.5899 0C28.2923 0 28.0007 0.0844994 27.7492 0.243671C27.4977 0.402843 27.2965 0.630147 27.1691 0.899149V0.90701Z" fill="#2684FF"/> <defs> <linearGradient id="paint0_linear_251_473" x1="24.5909" y1="30.6156" x2="9.83668" y2="56.1702" gradientUnits="userSpaceOnUse"> <stop stop-color="#0052CC"/> <stop offset="0.92" stop-color="#2684FF"/> </linearGradient> </defs> </svg>\n',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Atlassian on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/atlassian)!\n',
    tags: {
      catalog: 'Project Management,Dev Tools',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/atlassian#creating-your-own-atlassian-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          atlassianConnector: {
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
            scope: '#/properties/atlassianConnector/properties/id',
            label: 'Name',
          },
        ],
      },
      data: {
        atlassianConnector: {
          atlassianName: 'atlassian-connector',
        },
      },
      entities: {
        atlassianConnector: {
          entityType: 'connector',
          data: {
            configuration: {
              mode: {
                useProduction: false,
              },
              scope: 'read:jira-user read:jira-work manage:jira-webhook search:confluence read:me',
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
                '{"name":"@fusebit-int/catalog-feed-connector-atlassian-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/atlassian-connector":"7.41.0","@fusebit-int/framework":"7.41.0"}}',
            },
            handler: '@fusebit-int/atlassian-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Atlassian',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/atlassian-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Get Jira issues',
        description: 'Get Jira issues matching the JQL search criteria.',
        code:
          "\n/**\n * Get Jira issues matching the JQL search criteria. If no JQL is specified, all issues are returned.\n * For JQL syntax, see https://support.atlassian.com/jira-software-cloud/docs/what-is-advanced-searching-in-jira-cloud/.\n * Use 'params' to specify resourceId, maxResults, startAt, and other parameters specified at \n * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get.\n * If 'params.resourceId' is not specified, the first Jira resource of the Atlassian account is used.\n * \n * @example await atlassianJiraGetIssues(ctx);\n * @example await atlassianJiraGetIssues(ctx, \"project = 'DEMO'\", { maxResults: 5 });\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param jql {string} Optional JQL query to narrow down the search results\n * @param params {object} \n * @returns {object} Atlassian Jira resources\n */\nasync function atlassianJiraGetIssues(ctx, jql, params) {\n  // For the Atlassian SDK documentation, see https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/.\n  const atlassianClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  params = params || {};\n  if (jql) {\n    params.jql = jql;\n  }\n  let resourceId = params.resourceId;\n  delete params.resourceId;\n  if (!resourceId) {\n    const resources = await atlassianClient.getAccessibleResources('jira');\n    if (resources.length === 0) {\n      ctx.throw(404, 'No Jira resources are available in the Atlassian account.');\n    }\n    resourceId = resources[0].id;\n  }\n  const issues = await atlassianClient.jira(resourceId).get(\n    `/search?${Object.keys(params)\n      .map((k) => `${k}=${encodeURIComponent(params[k])}`)\n      .join('&')}`\n  );\n  return issues;\n}\n",
        id: 'jira-get-issues',
      },
      {
        name: 'Get Jira resources',
        description: 'Get Jira resources available on the Atlassian account.',
        code:
          "\n/**\n * Get Jira resources available on the Atlassian account.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {object} Atlassian Jira resources\n */\nasync function atlassianJiraGetResources(ctx) {\n  // For the Atlassian SDK documentation, see https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/.\n  const atlassianClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await atlassianClient.getAccessibleResources('jira');\n}\n",
        id: 'jira-get-resources',
      },
    ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Discord on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/discord)!\n',
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
          discordConnector: {
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
            scope: '#/properties/discordConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-discord-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/discord-connector":"7.41.0","@fusebit-int/framework":"7.41.0"}}',
            },
            handler: '@fusebit-int/discord-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Discord',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/discord-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Find channel by name',
        description: 'Find a Discord channel by name.',
        code:
          "\n/**\n * Find a Discord channel by name. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param guildId {string} Guild Id\n * @param channelName {string} Channel name\n * @returns {object|undefined} Discord channel if found\n */\nasync function discordGetChannelByName(ctx, guildId, channelName) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const channels = await discordClient.bot.get(`guilds/${guildId}/channels`);\n  const channel = channels.find((c) => c.name === channelName);\n  return channel;\n}\n",
        id: 'get-channel-by-name',
      },
      {
        name: 'Get channels',
        description: 'Get the Discord channels in a guild.',
        code:
          "\n/**\n * Get the Discord channels in a guild. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param guildId {string} Guild Id\n * @returns {Array} Discord channels\n */\nasync function discordGetChannels(ctx, guildId) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const channels = await discordClient.bot.get(`guilds/${guildId}/channels`);\n  return channels;\n}\n",
        id: 'get-channels',
      },
      {
        name: 'Get guilds',
        description: 'Get the Discord guilds the bot is a member of.',
        code:
          "\n/**\n * Get the Discord guilds the bot is a member of. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {Array} Discord guilds\n */\nasync function discordGetGuilds(ctx) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const guilds = await discordClient.bot.get('users/@me/guilds');\n  return guilds;\n}\n",
        id: 'get-guilds',
      },
      {
        name: 'Get bot user',
        description: 'Get details of the Discord bot user.',
        code:
          "\n/**\n * Get details of the Discord bot user. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {object} Discord bot user\n */\nasync function discordGetMe(ctx) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const me = await discordClient.bot.get('users/@me');\n  return me;\n}\n",
        id: 'get-me',
      },
      {
        name: 'Send a message to channel Id',
        description: 'Send a message to a Discord channel identified with an Id.',
        code:
          "\n/**\n * Send a message to a Discord channel identified with an Id. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param channelId {string} Channel Id\n * @param content {string} Message content\n * @returns {object} Discord response\n */\nasync function discordSendMessageToChannelId(ctx, channelId, content) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await discordClient.bot.post(`channels/${channelId}/messages`, { content });\n}\n",
        id: 'send-message-to-channel-id',
      },
      {
        name: 'Send a message to a named channel',
        description: 'Send a message to a Discord channel identified by name.',
        code:
          "\n/**\n * Send a message to a Discord channel identified by name. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param guildId {string} Guild Id\n * @param channelName {string} Channel name\n * @param content {string} Message content\n * @returns {object} Discord response\n */\nasync function discordSendMessageToChannelName(ctx, guildId, channelName, content) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const channels = await discordClient.bot.get(`guilds/${guildId}/channels`);\n  const channel = channels.find((c) => c.name === channelName);\n  if (!channel) {\n    ctx.throw(404, `Channel '${channelName}' not found`);\n  }\n  return await discordClient.bot.post(`channels/${channel.id}/messages`, { content });\n}\n",
        id: 'send-message-to-channel-name',
      },
      {
        name: 'Send a message to the default channel',
        description: 'Send a message to the default webhook channel on Discord.',
        code:
          "\n/**\n * Send a message to the default webhook channel on Discord. This function requires a custom Discord app with send message \n * bot permission, see https://developer.fusebit.io/docs/discord#creating-your-own-discord-app.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param content {string} Message content\n * @returns {object} Discord response\n */\nasync function discordSendMessage(ctx, content) {\n  // For the Discord API documentation, see https://discord.com/developers/docs/reference.\n  const discordClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  // By default send message to the webhook channel selected during installation\n  const channelId = discordClient?.fusebit?.credentials?.webhook?.channel_id;\n  if (!channelId) {\n    ctx.throw(404, `The installation does not have a default webhook channel.`);\n  }\n  return await discordClient.bot.post(`channels/${channelId}/messages`, { content });\n}\n",
        id: 'send-message',
      },
    ],
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
              scope: 'user repo',
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
                '{"name":"@fusebit-int/catalog-feed-connector-githubapp-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/githubapp-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/githubapp-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHubApp',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/githubapp-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
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
      "Integrating with GitHub is easy with Fusebit!\n\nAn OAuth App acts as a GitHub user.\n\nThis Integration enables you to connect to GitHub's source control, issue tracking, and CI/CD to build awesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull requests, and team management functionality, among others.\n\n[Learn more](https://developer.fusebit.io/docs/githuboauth)!\n",
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
          githuboauthConnector: {
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
            scope: '#/properties/githuboauthConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-githuboauth-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/githuboauth-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/githuboauth-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitHubOAuth',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/githuboauth-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Close an existing issue',
        description: 'Close an existing Github issue.',
        code:
          "\n/**\n * Close an existing Github issue. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param owner {string} Repository owner. \n * @param repo {string} Repository name.\n * @param issueNumber {number} Issue number.\n * @returns {object} Closed issue.\n */\nasync function githubCloseIssue(ctx, owner, repo, issueNumber) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const githubClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const { data } = await githubClient.rest.issues.update({\n    owner,\n    repo,\n    issue_number: issueNumber,\n    state: 'closed',\n  });\n  return data;\n}\n",
        id: 'close-issue',
      },
      {
        name: 'Create a new issue',
        description: 'Create a new Github issue.',
        code:
          "\n/**\n * Create a new Github issue. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param owner {string} Repository owner. \n * @param repo {string} Repository name.\n * @param title {string} New issue title.\n * @param otherProperties {object} [undefined] Optional additional issue properties. \n * @returns {object} Newly created issue.\n */\nasync function githubCreateIssue(ctx, owner, repo, title, otherProperties) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const githubClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const { data } = await githubClient.rest.issues.create({\n    owner,\n    repo,\n    title,\n    ...otherProperties,\n  });\n  return data;\n}\n",
        id: 'create-issue',
      },
      {
        name: 'Get all issues',
        description: 'Get all Github issues matching the search criteria.',
        code:
          "\n/**\n * Get all Github issues matching the search criteria. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param ownerOrOrg {string} Repository owner or organization name\n * @param repo {string} [undefined] Optional Repository name. \n * @param otherProperties {object} [undefined] Optional additional criteria for matching issues. \n * @returns {Array} Array of all issues matching the search criteria\n */\nasync function githubGetAllIssues(ctx, ownerOrOrg, repo, otherProperties) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const githubClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const orgLevel = typeof repo !== 'string';\n  otherProperties = orgLevel\n    ? {\n        per_page: 100,\n        org: ownerOrOrg,\n        ...repo,\n      }\n    : {\n        per_page: 100,\n        owner: ownerOrOrg,\n        repo,\n        ...otherProperties,\n      };\n\n  const iterator = githubClient.paginate.iterator(\n    orgLevel ? githubClient.rest.issues.listForOrg : githubClient.rest.issues.listForRepo,\n    otherProperties\n  );\n\n  const issuesList = [];\n  for await (const { data: issues } of iterator) {\n    for (const issue of issues) {\n      issuesList.push(issue);\n    }\n  }\n\n  return issuesList;\n}\n",
        id: 'get-all-issues',
      },
      {
        name: 'Get issue details',
        description: 'Get Github issue details.',
        code:
          "\n/**\n * Get Github issue details. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param owner {string} Repository owner. \n * @param repo {string} Repository name.\n * @param issueNumber {number} Issue number.\n * @returns {object} Github issue.\n */\nasync function githubGetIssue(ctx, owner, repo, issueNumber) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const asanaClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  const githubClient = await integration.tenant.getSdkByTenant(ctx, connectorName, ctx.params.tenantId);\n  const { data } = await githubClient.rest.issues.get({ owner, repo, issue_number: issueNumber });\n  return data;\n}\n",
        id: 'get-issue',
      },
      {
        name: 'Get authenticated user',
        description: 'Get details of the authenticated Github user.',
        code:
          "\n/**\n * Get details of the authenticated Github user. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {object} Github user\n */\nasync function githubGetMe(ctx) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const githubClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const { data } = await githubClient.rest.users.getAuthenticated();\n  return data;\n}\n",
        id: 'get-me',
      },
      {
        name: 'Update an existing issue',
        description: 'Update an existing Github issue.',
        code:
          "\n/**\n * Update an existing Github issue. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param owner {string} Repository owner. \n * @param repo {string} Repository name.\n * @param issueNumber {number} Issue number.\n * @param properties {object} Issue properties to update, e.g. 'title' or 'state'.\n * @returns {object} Updated issue.\n */\nasync function githubUpdateIssue(ctx, owner, repo, issueNumber, properties) {\n  // For the Github API documentation, see https://github.com/octokit/octokit.js.\n  const githubClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  const { data } = await githubClient.rest.issues.update({\n    owner,\n    repo,\n    issue_number: issueNumber,\n    ...properties,\n  });\n  return data;\n}\n",
        id: 'update-issue',
      },
    ],
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
      "Integrating with GitLab is easy with Fusebit!\n\nCreate user owned, group owned and instance-wide GitLab applications.\n\nThis Integration enables you to connect to GitLab's source control, issue tracking, and CI/CD to build awesome end-to-end experiences. Easily work with repositories, issues, packages, projects, pull requests, and team management functionality, among others.\n\n[Learn more](https://developer.fusebit.io/docs/gitlab)!\n",
    tags: {
      catalog: 'Dev Tools,Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/gitlab#creating-your-own-gitlab-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          gitlabConnector: {
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
            scope: '#/properties/gitlabConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-gitlab-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/gitlab-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/gitlab-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'GitLab',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/gitlab-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Google on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/google)!\n',
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
          googleConnector: {
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
            scope: '#/properties/googleConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-google-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/google-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/google-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Google',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/google-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    smallIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 13.107 13.099" preserveAspectRatio="xMidYMid"><path d="M12.027 6.222a3.33 3.33 0 0 0-1.209-1.201c-.382-.222-.777-.363-1.223-.424V3a1.17 1.17 0 0 0 .722-1.097 1.2 1.2 0 0 0-1.2-1.206 1.21 1.21 0 0 0-1.21 1.206c0 .49.26.908.707 1.097v1.588a3.49 3.49 0 0 0-1.064.334L3.275 1.685c.03-.113.056-.23.056-.353 0-.738-.598-1.336-1.336-1.336S.66.594.66 1.332s.598 1.336 1.336 1.336c.252 0 .485-.074.686-.195l.28.212L6.797 5.45c-.203.186-.392.398-.543.636-.306.485-.493 1.018-.493 1.6v.12a3.35 3.35 0 0 0 .21 1.156c.116.316.286.604.497.864l-1.274 1.277c-.377-.14-.8-.047-1.085.238-.194.193-.303.456-.302.73s.108.535.303.73.456.303.73.303.537-.108.73-.303.303-.456.302-.73a1.03 1.03 0 0 0-.048-.31l1.316-1.316c.18.125.375.23.585.32a3.42 3.42 0 0 0 1.369.288h.09c.552 0 1.073-.13 1.562-.395a3.23 3.23 0 0 0 1.224-1.153c.307-.49.475-1.033.475-1.63v-.03c0-.587-.136-1.128-.42-1.624zM10.42 8.984c-.357.397-.768.642-1.232.642H9.1c-.265 0-.525-.073-.778-.207a1.8 1.8 0 0 1-.682-.621c-.184-.26-.284-.544-.284-.845v-.09c0-.296.057-.577.2-.842.153-.3.36-.515.635-.694s.558-.265.88-.265h.03c.29 0 .567.057.827.19a1.75 1.75 0 0 1 .65.591 1.88 1.88 0 0 1 .291.83l.007.187c0 .407-.156.784-.467 1.126z" fill="#f8761f"/></svg>',
    largeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 13.107 13.099" preserveAspectRatio="xMidYMid"><path d="M12.027 6.222a3.33 3.33 0 0 0-1.209-1.201c-.382-.222-.777-.363-1.223-.424V3a1.17 1.17 0 0 0 .722-1.097 1.2 1.2 0 0 0-1.2-1.206 1.21 1.21 0 0 0-1.21 1.206c0 .49.26.908.707 1.097v1.588a3.49 3.49 0 0 0-1.064.334L3.275 1.685c.03-.113.056-.23.056-.353 0-.738-.598-1.336-1.336-1.336S.66.594.66 1.332s.598 1.336 1.336 1.336c.252 0 .485-.074.686-.195l.28.212L6.797 5.45c-.203.186-.392.398-.543.636-.306.485-.493 1.018-.493 1.6v.12a3.35 3.35 0 0 0 .21 1.156c.116.316.286.604.497.864l-1.274 1.277c-.377-.14-.8-.047-1.085.238-.194.193-.303.456-.302.73s.108.535.303.73.456.303.73.303.537-.108.73-.303.303-.456.302-.73a1.03 1.03 0 0 0-.048-.31l1.316-1.316c.18.125.375.23.585.32a3.42 3.42 0 0 0 1.369.288h.09c.552 0 1.073-.13 1.562-.395a3.23 3.23 0 0 0 1.224-1.153c.307-.49.475-1.033.475-1.63v-.03c0-.587-.136-1.128-.42-1.624zM10.42 8.984c-.357.397-.768.642-1.232.642H9.1c-.265 0-.525-.073-.778-.207a1.8 1.8 0 0 1-.682-.621c-.184-.26-.284-.544-.284-.845v-.09c0-.296.057-.577.2-.842.153-.3.36-.515.635-.694s.558-.265.88-.265h.03c.29 0 .567.057.827.19a1.75 1.75 0 0 1 .65.591 1.88 1.88 0 0 1 .291.83l.007.187c0 .407-.156.784-.467 1.126z" fill="#f8761f"/></svg>',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and HubSpot on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/hubspot)!\n',
    tags: {
      catalog: 'CRM',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/hubspot#creating-your-own-hubspot-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          hubspotConnector: {
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
            scope: '#/properties/hubspotConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-hubspot-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/hubspot-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/hubspot-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'HubSpot',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/hubspot-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Create, get, update, or delete companies',
        description: 'Perform basic operations on HubSpot companies.',
        code:
          "\n/**\n * Get all HubSpot companies.\n *\n * @param ctx {FusebitContext} Fusebit Context\n */\nasync function hubspotGetCompanies(ctx) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.companies.getAll();\n}\n\n/**\n * Get HubSpot company by ID.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot company ID\n */\nasync function hubspotGetCompany(ctx, id) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.companies.basicApi.getById(id);\n}\n\n/** Update properties of a HubSpot company.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot company ID\n * @param properties {object} Company properties to add or modify\n */\nasync function hubspotUpdateCompany(ctx, id, properties) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.companies.basicApi.update(id, { properties });\n}\n\n/** Create a new HubSpot company.\n *\n * @param ctx {FusebitContext} Fusebit Context\n * @param properties {object} Properties of the new company\n */\nasync function hubspotCreateCompany(ctx, properties) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.companies.basicApi.create({ properties });\n}\n\n/** Archive a HubSpot company.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot company ID\n */\nasync function hubspotArchiveCompany(ctx, id) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.companies.basicApi.archive(id);\n}\n",
        id: 'crud-companies',
      },
      {
        name: 'Create, get, update, or delete contacts',
        description: 'Perform basic operations on HubSpot contacts.',
        code:
          "\n/**\n * Get all HubSpot contacts.\n *\n * @param ctx {FusebitContext} Fusebit Context\n */\nasync function hubspotGetContacts(ctx) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.contacts.getAll();\n}\n\n/**\n * Get HubSpot contact by ID.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot contact ID\n */\nasync function hubspotGetContact(ctx, id) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.contacts.basicApi.getById(id);\n}\n\n/** Update properties of a HubSpot contact.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot contact ID\n * @param properties {object} Contact properties to add or modify\n */\nasync function hubspotUpdateContact(ctx, id, properties) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.contacts.basicApi.update(id, { properties });\n}\n\n/** Create a new HubSpot contact.\n *\n * @param ctx {FusebitContext} Fusebit Context\n * @param properties {object} Properties of the new contact\n */\nasync function hubspotCreateContact(ctx, properties) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.contacts.basicApi.create({ properties });\n}\n\n/** Archive a HubSpot contact.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param id {string|number} HubSpot contact ID\n */\nasync function hubspotArchiveContact(ctx, id) {\n  // For the HubSpot SDK documentation, see https://github.com/HubSpot/hubspot-api-nodejs.\n  const hubspotClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return hubspotClient.crm.contacts.basicApi.archive(id);\n}\n",
        id: 'crud-contacts',
      },
    ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Linear on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/linear)!\n',
    tags: {
      catalog: 'Project Management',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/linear#creating-your-own-linear-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          linearConnector: {
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
            scope: '#/properties/linearConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-linear-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/linear-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/linear-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Linear',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/linear-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Archive issue',
        description: 'Archive Linear issue by Id.',
        code:
          "\n/**\n * Archive Linear issue.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param id {string} Issue Id\n * @returns {object} Archived Linear issue\n */\nasync function linearArchiveIssue(ctx, id) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await linearClient.issueArchive(id);\n}\n",
        id: 'archive-issue',
      },
      {
        name: 'Create a new issue',
        description: 'Create a new Linear issue.',
        code:
          "\n/**\n * Create a new Linear issue.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param data {object} Properties of the new issue\n * @returns {object} Newly ceated issue\n */\nasync function linearCreateIssue(ctx, data) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  data = data || {};\n  if (!data.teamId) {\n    // Default to the first team\n    const teams = await linearClient.teams();\n    data.teamId = teams.nodes[0].id;\n  }\n  return await linearClient.issueCreate(data);\n}\n",
        id: 'create-issue',
      },
      {
        name: 'Get issue',
        description: 'Get Linear issue by Id.',
        code:
          "\n/**\n * Get Linear issue by Id.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param id {string} Issue Id\n * @returns {object} Linear issue\n */\nasync function linearGetIssue(ctx, id) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await linearClient.issue(id);\n}\n",
        id: 'get-issue',
      },
      {
        name: 'Get issues',
        description: 'Get Linear issues matching the search criteria.',
        code:
          "\n/**\n * Get up to 250 Linear issues matching the search criteria. You can fetch additional pages \n * by calling `await result.fetchNext()`. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param assigneeOrVariables {string|object} Assignee Id as string or Linear API search variables\n * @returns {object} Up to 250 matching Linear issues\n */\nasync function linearGetIssues(ctx, assigneeOrVariables) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  if (typeof assigneeOrVariables === 'string') {\n    assigneeOrVariables = { filter: { assignee: { id: { eq: assigneeOrVariables } } } };\n  }\n  assigneeOrVariables = {\n    first: 250,\n    ...assigneeOrVariables,\n  };\n  return await linearClient.issues(assigneeOrVariables);\n}\n",
        id: 'get-issues',
      },
      {
        name: 'Get authorized user',
        description: 'Get authorized Linear user.',
        code:
          "\n/**\n * Get details of authorized user. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @returns {object} Authorized Linear user.\n */\nasync function linearGetMe(ctx) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await linearClient.viewer;\n}\n",
        id: 'get-me',
      },
      {
        name: 'Update an existing issue',
        description: 'Update an existing Linear issue.',
        code:
          "\n/**\n * Update an existing Linear issue.\n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param data {id} Issue Id\n * @param data {object} Properties to be updated\n * @returns {object} Updated issue\n */\nasync function linearUpdateIssue(ctx, id, data) {\n  // For the Linear SDK documentation, see https://developers.linear.app/docs/sdk/getting-started\n  const linearClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n  return await linearClient.issueUpdate(id, data);\n}\n",
        id: 'update-issue',
      },
    ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and LinkedIn on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/linkedin)!\n',
    tags: {
      catalog: '',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/linkedin#creating-your-own-linkedin-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          linkedinConnector: {
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
            scope: '#/properties/linkedinConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-linkedin-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/linkedin-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/linkedin-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'LinkedIn',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/linkedin-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
  },
  {
    id: 'microsoft-bot-framework',
    name: 'Microsoft Bot Framework',
    smallIcon:
      '<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   id="svg4147"\n   version="1.1"\n   inkscape:version="0.91 r13725"\n   width="468.75"\n   height="468.75"\n   viewBox="0 0 468.75 468.75"\n   sodipodi:docname="Botframework.svg">\n  <metadata\n     id="metadata4153">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id="defs4151" />\n  <sodipodi:namedview\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1"\n     objecttolerance="10"\n     gridtolerance="10"\n     guidetolerance="10"\n     inkscape:pageopacity="0"\n     inkscape:pageshadow="2"\n     inkscape:window-width="1920"\n     inkscape:window-height="1017"\n     id="namedview4149"\n     showgrid="false"\n     inkscape:zoom="2.0138667"\n     inkscape:cx="191.09731"\n     inkscape:cy="247.82706"\n     inkscape:window-x="2552"\n     inkscape:window-y="-8"\n     inkscape:window-maximized="1"\n     inkscape:current-layer="svg4147" />\n  <path\n     style="fill:#000000"\n     d="M 216.5347,469.08448 C 145.70076,464.23864 78.819385,425.1909 38.743431,365.28359 24.50351,343.99713 11.390428,313.95597 5.6118204,289.38139 -1.4961986,259.15324 -2.3548676,221.40756 3.3831074,191.41083 17.064182,119.8895 64.097051,57.978775 129.44469,25.472338 160.23048,10.158296 190.04759,2.6198409 224.9722,1.3207699 c 40.59674,-1.51005298 75.32693,5.818102 111.5625,23.5399611 25.88303,12.658703 46.81807,27.885343 66.30952,48.228749 52.6012,54.90037 75.15271,130.69308 61.19359,205.66366 -16.12879,86.62322 -81.01168,157.74925 -165.95374,181.9221 -25.51204,7.26023 -54.56006,10.25561 -81.54937,8.40924 z M 206.27832,297.10713 c 2.80507,-2.65292 5.10013,-5.50321 5.10013,-6.33399 0,-0.83076 -12.65625,-14.16147 -28.125,-29.62377 -15.46875,-15.4623 -28.125,-28.75136 -28.125,-29.53125 0,-0.77989 12.65625,-14.06895 28.125,-29.53125 15.46875,-15.4623 28.125,-28.73546 28.125,-29.49591 0,-1.65892 -9.30223,-11.28534 -10.90528,-11.28534 -1.59447,0 -65.32331,65.17765 -66.33877,67.84691 -0.46079,1.21125 -0.56491,3.21074 -0.23135,4.44331 0.59549,2.20055 65.02965,68.42681 66.51589,68.3659 0.41759,-0.0171 3.0543,-2.2017 5.85938,-4.85461 z m 91.207,-29.73118 c 28.84847,-29.52311 32.01813,-33.07017 32.01813,-35.83034 0,-2.6759 -1.68786,-4.79231 -13.34226,-16.72984 -31.5721,-32.33914 -52.79897,-53.51015 -53.65133,-53.51015 -1.50572,0 -10.81891,9.66176 -10.81891,11.22383 0,0.79428 12.65625,14.09512 28.125,29.55742 15.46875,15.4623 28.125,28.75136 28.125,29.53125 0,0.77989 -12.65625,14.06895 -28.125,29.53125 -15.46875,15.4623 -28.125,28.79301 -28.125,29.62377 0,0.83078 2.31421,3.69918 5.14268,6.37423 4.24129,4.01124 5.44862,4.70001 6.88812,3.92961 0.95999,-0.51377 16.15359,-15.67923 33.76357,-33.70103 z m -79.31,-29.15223 c 4.24751,-4.75337 3.08425,-12.82613 -2.24534,-15.58216 -8.60151,-4.44802 -17.67774,2.76742 -14.94681,11.88244 2.3044,7.69142 11.79941,9.73472 17.19215,3.69972 z m 39.79269,1.87323 c 5.96413,-3.63656 6.22447,-12.44592 0.50086,-16.9481 -4.37649,-3.44256 -12.32206,-1.84441 -14.81698,2.98024 -5.0784,9.82055 4.99651,19.65039 14.31612,13.96786 z"\n     id="path4753"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#3a96dd;fill-opacity:1"\n     d="M 218.59319,469.01214 C 150.66946,464.50971 87.952209,430.42635 46.255053,375.3559 31.891279,356.38531 19.412109,332.18057 11.077585,307.12528 4.3563499,286.91986 1.4311301,270.64877 0.14187655,246.29702 -1.3694321,217.75104 2.42568,188.83066 11.138807,162.4957 39.156195,77.814645 113.91566,15.229464 201.02845,3.5288374 c 16.27381,-2.1858291 41.73722,-2.68876965 57.1086,-1.12798 27.13426,2.7551785 51.61772,9.8303996 77.4792,22.3899076 25.38539,12.328296 43.89703,25.468673 63.30518,44.936801 17.83511,17.890221 30.17079,34.503674 42.06395,56.650894 18.92358,35.23913 28.74371,79.61182 26.52908,119.87289 -2.38277,43.31794 -14.70213,81.46446 -37.68833,116.70076 -37.44119,57.39482 -98.25515,95.74963 -165.37973,104.30351 -14.32566,1.82555 -33.64625,2.56568 -45.85321,1.75652 z m -16.2373,-168.18019 c 3.02995,-2.43538 7.40601,-6.84603 8.4421,-8.50882 l 1.02399,-1.64338 -1.17373,-1.33596 c -3.31017,-3.76767 -9.40019,-10.10173 -27.78162,-28.89489 -21.59194,-22.07558 -27.27316,-28.08368 -27.27316,-28.84234 0,-0.90982 7.11681,-8.37291 34.759,-36.4503 9.14907,-9.29311 17.725,-18.18148 19.05762,-19.75194 l 2.42295,-2.85537 -1.37043,-1.97752 c -1.88834,-2.72488 -8.99306,-9.43397 -9.99028,-9.43397 -1.35896,0 -57.74969,57.27979 -64.94107,65.96495 -1.50205,1.81405 -1.78631,2.536 -1.78631,4.53681 0,2.347 0.0801,2.46661 5.86799,8.76691 14.45513,15.73476 59.64667,61.75358 60.64344,61.75358 0.24618,0 1.19096,-0.5975 2.09951,-1.32776 z m 66.63429,-4.58859 c 8.51074,-8.34305 34.38066,-34.48521 44.26663,-44.73249 10.77198,-11.16566 15.46434,-16.60599 16.17398,-18.75214 0.93946,-2.8412 -0.71511,-5.16429 -12.21963,-17.15685 -15.69882,-16.36478 -54.0385,-54.46442 -54.80757,-54.46442 -0.86472,0 -8.75264,7.69458 -10.06541,9.81869 l -1.00681,1.62905 2.40747,2.83789 c 1.3241,1.56085 8.65929,9.20798 16.30041,16.99363 31.18806,31.77795 37.50072,38.37412 37.50072,39.18488 0,0.6859 -8.28299,9.40192 -29.11149,30.6334 -21.14059,21.54962 -26.99947,27.7929 -26.99947,28.77089 0,0.82655 6.25075,7.52083 8.64012,9.25318 1.06512,0.77224 2.26413,1.40408 2.66445,1.40408 0.40033,0 3.2158,-2.43891 6.2566,-5.41979 z m -55.61995,-54.7041 c 2.97574,-0.82627 6.14405,-4.05936 7.05762,-7.20191 2.17467,-7.48061 -3.07188,-13.66694 -11.03098,-13.00691 -8.57104,0.71078 -12.11723,11.31276 -5.87265,17.55735 2.79708,2.79706 6.10934,3.68904 9.84601,2.65147 z m 44.18639,-1.07645 c 1.11182,-0.61467 2.70176,-2.0865 3.53321,-3.27073 1.32221,-1.88323 1.51172,-2.57284 1.51172,-5.50107 0,-2.85437 -0.21961,-3.70252 -1.48967,-5.75322 -2.17764,-3.51612 -4.93471,-4.87188 -9.30992,-4.57807 -6.07214,0.40776 -9.51438,4.04038 -9.51438,10.04058 0,8.28531 8.04166,13.05821 15.26904,9.06251 z"\n     id="path4755"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 207.4837,240.97317 c -2.68866,-0.95326 -4.32926,-2.48982 -5.5835,-5.22943 -2.2327,-4.87686 -1.00448,-9.36111 3.48128,-12.71022 1.68639,-1.25907 6.23341,-1.66847 8.86928,-0.79855 2.5002,0.82514 5.18054,3.78043 5.92027,6.52757 2.0053,7.44713 -5.56715,14.73506 -12.68733,12.21063 z"\n     id="path4759"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 248.64579,240.63222 c -5.43477,-2.46813 -7.576,-8.44021 -4.92189,-13.72757 1.53328,-3.05452 3.95547,-4.76242 7.19573,-5.07377 3.65194,-0.3509 5.81103,0.24071 7.95835,2.18069 5.34692,4.83062 4.30437,13.09872 -2.05099,16.26573 -3.07172,1.5307 -5.37236,1.63051 -8.1812,0.35492 z"\n     id="path4761"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d=""\n     id="path4763"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 180.20198,281.73577 c -17.56235,-17.71511 -39.71922,-40.76493 -44.51591,-46.30997 -2.09203,-2.41841 -2.20365,-4.92849 -0.32778,-7.37086 4.38108,-5.70412 64.02428,-66.4477 65.22593,-66.42932 0.87398,0.0134 6.91128,5.76016 8.90583,8.47729 l 1.81917,2.4782 -4.39555,4.80569 c -2.41755,2.64313 -12.33351,12.86086 -22.03546,22.70608 -22.42451,22.75562 -29.7813,30.52422 -29.7813,31.44837 0,1.07116 6.23827,7.71241 28.39674,30.23117 10.83884,11.01508 21.51417,22.043 23.72296,24.50649 3.66207,4.08436 3.96395,4.57631 3.42554,5.58234 -0.70204,1.31177 -8.1941,8.67847 -9.58108,9.42076 -0.85494,0.45755 -3.28876,-1.82308 -20.85909,-19.54624 z"\n     id="path4765"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 260.31741,299.7575 c -2.56089,-1.86332 -8.14356,-7.87335 -8.14356,-8.76695 0,-1.03198 8.74262,-10.32309 31.44652,-33.41939 11.08643,-11.27804 21.19843,-21.72436 22.47111,-23.21405 l 2.31397,-2.70853 -2.41897,-2.83598 c -1.33043,-1.55978 -12.37792,-13.01163 -24.54998,-25.44855 -24.5675,-25.10207 -29.26265,-30.0752 -29.26265,-30.99516 0,-1.21326 9.02583,-10.73487 10.17592,-10.73487 1.18829,0 60.80911,60.19496 64.60024,65.22233 3.07466,4.07727 2.98878,5.23149 -0.73308,9.85248 -5.65266,7.01823 -62.07938,64.45776 -63.32121,64.45776 -0.35295,0 -1.51319,-0.63409 -2.57831,-1.40909 z"\n     id="path4138"\n     inkscape:connector-curvature="0" />\n</svg>\n',
    largeIcon:
      '<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   id="svg4147"\n   version="1.1"\n   inkscape:version="0.91 r13725"\n   width="468.75"\n   height="468.75"\n   viewBox="0 0 468.75 468.75"\n   sodipodi:docname="Botframework.svg">\n  <metadata\n     id="metadata4153">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id="defs4151" />\n  <sodipodi:namedview\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1"\n     objecttolerance="10"\n     gridtolerance="10"\n     guidetolerance="10"\n     inkscape:pageopacity="0"\n     inkscape:pageshadow="2"\n     inkscape:window-width="1920"\n     inkscape:window-height="1017"\n     id="namedview4149"\n     showgrid="false"\n     inkscape:zoom="2.0138667"\n     inkscape:cx="191.09731"\n     inkscape:cy="247.82706"\n     inkscape:window-x="2552"\n     inkscape:window-y="-8"\n     inkscape:window-maximized="1"\n     inkscape:current-layer="svg4147" />\n  <path\n     style="fill:#000000"\n     d="M 216.5347,469.08448 C 145.70076,464.23864 78.819385,425.1909 38.743431,365.28359 24.50351,343.99713 11.390428,313.95597 5.6118204,289.38139 -1.4961986,259.15324 -2.3548676,221.40756 3.3831074,191.41083 17.064182,119.8895 64.097051,57.978775 129.44469,25.472338 160.23048,10.158296 190.04759,2.6198409 224.9722,1.3207699 c 40.59674,-1.51005298 75.32693,5.818102 111.5625,23.5399611 25.88303,12.658703 46.81807,27.885343 66.30952,48.228749 52.6012,54.90037 75.15271,130.69308 61.19359,205.66366 -16.12879,86.62322 -81.01168,157.74925 -165.95374,181.9221 -25.51204,7.26023 -54.56006,10.25561 -81.54937,8.40924 z M 206.27832,297.10713 c 2.80507,-2.65292 5.10013,-5.50321 5.10013,-6.33399 0,-0.83076 -12.65625,-14.16147 -28.125,-29.62377 -15.46875,-15.4623 -28.125,-28.75136 -28.125,-29.53125 0,-0.77989 12.65625,-14.06895 28.125,-29.53125 15.46875,-15.4623 28.125,-28.73546 28.125,-29.49591 0,-1.65892 -9.30223,-11.28534 -10.90528,-11.28534 -1.59447,0 -65.32331,65.17765 -66.33877,67.84691 -0.46079,1.21125 -0.56491,3.21074 -0.23135,4.44331 0.59549,2.20055 65.02965,68.42681 66.51589,68.3659 0.41759,-0.0171 3.0543,-2.2017 5.85938,-4.85461 z m 91.207,-29.73118 c 28.84847,-29.52311 32.01813,-33.07017 32.01813,-35.83034 0,-2.6759 -1.68786,-4.79231 -13.34226,-16.72984 -31.5721,-32.33914 -52.79897,-53.51015 -53.65133,-53.51015 -1.50572,0 -10.81891,9.66176 -10.81891,11.22383 0,0.79428 12.65625,14.09512 28.125,29.55742 15.46875,15.4623 28.125,28.75136 28.125,29.53125 0,0.77989 -12.65625,14.06895 -28.125,29.53125 -15.46875,15.4623 -28.125,28.79301 -28.125,29.62377 0,0.83078 2.31421,3.69918 5.14268,6.37423 4.24129,4.01124 5.44862,4.70001 6.88812,3.92961 0.95999,-0.51377 16.15359,-15.67923 33.76357,-33.70103 z m -79.31,-29.15223 c 4.24751,-4.75337 3.08425,-12.82613 -2.24534,-15.58216 -8.60151,-4.44802 -17.67774,2.76742 -14.94681,11.88244 2.3044,7.69142 11.79941,9.73472 17.19215,3.69972 z m 39.79269,1.87323 c 5.96413,-3.63656 6.22447,-12.44592 0.50086,-16.9481 -4.37649,-3.44256 -12.32206,-1.84441 -14.81698,2.98024 -5.0784,9.82055 4.99651,19.65039 14.31612,13.96786 z"\n     id="path4753"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#3a96dd;fill-opacity:1"\n     d="M 218.59319,469.01214 C 150.66946,464.50971 87.952209,430.42635 46.255053,375.3559 31.891279,356.38531 19.412109,332.18057 11.077585,307.12528 4.3563499,286.91986 1.4311301,270.64877 0.14187655,246.29702 -1.3694321,217.75104 2.42568,188.83066 11.138807,162.4957 39.156195,77.814645 113.91566,15.229464 201.02845,3.5288374 c 16.27381,-2.1858291 41.73722,-2.68876965 57.1086,-1.12798 27.13426,2.7551785 51.61772,9.8303996 77.4792,22.3899076 25.38539,12.328296 43.89703,25.468673 63.30518,44.936801 17.83511,17.890221 30.17079,34.503674 42.06395,56.650894 18.92358,35.23913 28.74371,79.61182 26.52908,119.87289 -2.38277,43.31794 -14.70213,81.46446 -37.68833,116.70076 -37.44119,57.39482 -98.25515,95.74963 -165.37973,104.30351 -14.32566,1.82555 -33.64625,2.56568 -45.85321,1.75652 z m -16.2373,-168.18019 c 3.02995,-2.43538 7.40601,-6.84603 8.4421,-8.50882 l 1.02399,-1.64338 -1.17373,-1.33596 c -3.31017,-3.76767 -9.40019,-10.10173 -27.78162,-28.89489 -21.59194,-22.07558 -27.27316,-28.08368 -27.27316,-28.84234 0,-0.90982 7.11681,-8.37291 34.759,-36.4503 9.14907,-9.29311 17.725,-18.18148 19.05762,-19.75194 l 2.42295,-2.85537 -1.37043,-1.97752 c -1.88834,-2.72488 -8.99306,-9.43397 -9.99028,-9.43397 -1.35896,0 -57.74969,57.27979 -64.94107,65.96495 -1.50205,1.81405 -1.78631,2.536 -1.78631,4.53681 0,2.347 0.0801,2.46661 5.86799,8.76691 14.45513,15.73476 59.64667,61.75358 60.64344,61.75358 0.24618,0 1.19096,-0.5975 2.09951,-1.32776 z m 66.63429,-4.58859 c 8.51074,-8.34305 34.38066,-34.48521 44.26663,-44.73249 10.77198,-11.16566 15.46434,-16.60599 16.17398,-18.75214 0.93946,-2.8412 -0.71511,-5.16429 -12.21963,-17.15685 -15.69882,-16.36478 -54.0385,-54.46442 -54.80757,-54.46442 -0.86472,0 -8.75264,7.69458 -10.06541,9.81869 l -1.00681,1.62905 2.40747,2.83789 c 1.3241,1.56085 8.65929,9.20798 16.30041,16.99363 31.18806,31.77795 37.50072,38.37412 37.50072,39.18488 0,0.6859 -8.28299,9.40192 -29.11149,30.6334 -21.14059,21.54962 -26.99947,27.7929 -26.99947,28.77089 0,0.82655 6.25075,7.52083 8.64012,9.25318 1.06512,0.77224 2.26413,1.40408 2.66445,1.40408 0.40033,0 3.2158,-2.43891 6.2566,-5.41979 z m -55.61995,-54.7041 c 2.97574,-0.82627 6.14405,-4.05936 7.05762,-7.20191 2.17467,-7.48061 -3.07188,-13.66694 -11.03098,-13.00691 -8.57104,0.71078 -12.11723,11.31276 -5.87265,17.55735 2.79708,2.79706 6.10934,3.68904 9.84601,2.65147 z m 44.18639,-1.07645 c 1.11182,-0.61467 2.70176,-2.0865 3.53321,-3.27073 1.32221,-1.88323 1.51172,-2.57284 1.51172,-5.50107 0,-2.85437 -0.21961,-3.70252 -1.48967,-5.75322 -2.17764,-3.51612 -4.93471,-4.87188 -9.30992,-4.57807 -6.07214,0.40776 -9.51438,4.04038 -9.51438,10.04058 0,8.28531 8.04166,13.05821 15.26904,9.06251 z"\n     id="path4755"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 207.4837,240.97317 c -2.68866,-0.95326 -4.32926,-2.48982 -5.5835,-5.22943 -2.2327,-4.87686 -1.00448,-9.36111 3.48128,-12.71022 1.68639,-1.25907 6.23341,-1.66847 8.86928,-0.79855 2.5002,0.82514 5.18054,3.78043 5.92027,6.52757 2.0053,7.44713 -5.56715,14.73506 -12.68733,12.21063 z"\n     id="path4759"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 248.64579,240.63222 c -5.43477,-2.46813 -7.576,-8.44021 -4.92189,-13.72757 1.53328,-3.05452 3.95547,-4.76242 7.19573,-5.07377 3.65194,-0.3509 5.81103,0.24071 7.95835,2.18069 5.34692,4.83062 4.30437,13.09872 -2.05099,16.26573 -3.07172,1.5307 -5.37236,1.63051 -8.1812,0.35492 z"\n     id="path4761"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d=""\n     id="path4763"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 180.20198,281.73577 c -17.56235,-17.71511 -39.71922,-40.76493 -44.51591,-46.30997 -2.09203,-2.41841 -2.20365,-4.92849 -0.32778,-7.37086 4.38108,-5.70412 64.02428,-66.4477 65.22593,-66.42932 0.87398,0.0134 6.91128,5.76016 8.90583,8.47729 l 1.81917,2.4782 -4.39555,4.80569 c -2.41755,2.64313 -12.33351,12.86086 -22.03546,22.70608 -22.42451,22.75562 -29.7813,30.52422 -29.7813,31.44837 0,1.07116 6.23827,7.71241 28.39674,30.23117 10.83884,11.01508 21.51417,22.043 23.72296,24.50649 3.66207,4.08436 3.96395,4.57631 3.42554,5.58234 -0.70204,1.31177 -8.1941,8.67847 -9.58108,9.42076 -0.85494,0.45755 -3.28876,-1.82308 -20.85909,-19.54624 z"\n     id="path4765"\n     inkscape:connector-curvature="0" />\n  <path\n     style="opacity:1;fill:#ffffff;fill-opacity:1"\n     d="m 260.31741,299.7575 c -2.56089,-1.86332 -8.14356,-7.87335 -8.14356,-8.76695 0,-1.03198 8.74262,-10.32309 31.44652,-33.41939 11.08643,-11.27804 21.19843,-21.72436 22.47111,-23.21405 l 2.31397,-2.70853 -2.41897,-2.83598 c -1.33043,-1.55978 -12.37792,-13.01163 -24.54998,-25.44855 -24.5675,-25.10207 -29.26265,-30.0752 -29.26265,-30.99516 0,-1.21326 9.02583,-10.73487 10.17592,-10.73487 1.18829,0 60.80911,60.19496 64.60024,65.22233 3.07466,4.07727 2.98878,5.23149 -0.73308,9.85248 -5.65266,7.01823 -62.07938,64.45776 -63.32121,64.45776 -0.35295,0 -1.51319,-0.63409 -2.57831,-1.40909 z"\n     id="path4138"\n     inkscape:connector-curvature="0" />\n</svg>\n',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Microsoft Bot Framework.\n\n[Learn more](https://developer.fusebit.io/docs/microsoft-bot-framework)!\n',
    tags: {
      catalog: 'Messaging',
    },
    resources: {
      configureAppDocUrl:
        'https://developer.fusebit.io/docs/microsoft-bot-framework#creating-your-own-microsoft-bot-framework-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          microsoftBotFrameworkConnector: {
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
            scope: '#/properties/microsoftBotFrameworkConnector/properties/id',
            label: 'Name',
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
            },
            files: {
              'package.json':
                '{"name":"@fusebit-int/catalog-feed-connector-microsoft-bot-framework-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.name %> && yarn deploy","deploy":"fuse connector deploy <% this.name %> -d .","get":"fuse connector get <% this.name %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/microsoft-bot-framework-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/microsoft-bot-framework-connector',
          },
          id: '<%this.id%>',
          tags: {
            'fusebit.service': 'Microsoft Bot Framework',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/microsoft-bot-framework-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
  },
  {
    id: 'pagerduty',
    name: 'PagerDuty',
    smallIcon:
      '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 73.3671H30.6481V100H16V73.3671ZM71.168 4.88269C63.305 0.697527 57.8516 0 44.9791 0H16V60.6214H44.8523C56.3297 60.6214 64.8903 59.9239 72.4363 54.9144C80.6798 49.461 84.9283 40.3932 84.9283 29.9302C84.9283 18.5796 79.6652 9.51173 71.168 4.88269V4.88269ZM48.2131 47.9391H30.6481V12.9994L47.1985 12.8725C62.2904 12.6823 69.8364 18.0089 69.8364 30.0571C69.8364 42.993 60.5149 47.9391 48.2131 47.9391V47.9391Z" fill="#06AC38"/>\n</svg>\n\n',
    largeIcon:
      '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 73.3671H30.6481V100H16V73.3671ZM71.168 4.88269C63.305 0.697527 57.8516 0 44.9791 0H16V60.6214H44.8523C56.3297 60.6214 64.8903 59.9239 72.4363 54.9144C80.6798 49.461 84.9283 40.3932 84.9283 29.9302C84.9283 18.5796 79.6652 9.51173 71.168 4.88269V4.88269ZM48.2131 47.9391H30.6481V12.9994L47.1985 12.8725C62.2904 12.6823 69.8364 18.0089 69.8364 30.0571C69.8364 42.993 60.5149 47.9391 48.2131 47.9391V47.9391Z" fill="#06AC38"/>\n</svg>\n\n',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and PagerDuty on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/pagerduty)!\n',
    tags: {
      catalog: 'Dev Tools,Operations',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/pagerduty#creating-your-own-pagerduty-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          pagerdutyConnector: {
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
            scope: '#/properties/pagerdutyConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-pagerduty-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/pagerduty-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/pagerduty-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'PagerDuty',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/pagerduty-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and QuickBooks Online on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/quickbooks-online)!\n',
    tags: {
      catalog: '',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/quickbooks-online#creating-your-own-quickbooks-online-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          quickbooksConnector: {
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
            scope: '#/properties/quickbooksConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-quickbooks-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/quickbooks-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/quickbooks-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'quickbooks-online',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/quickbooks-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Reddit on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/reddit)!\n',
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
          redditConnector: {
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
            scope: '#/properties/redditConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-reddit-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/reddit-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/reddit-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Reddit',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/reddit-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
  },
  {
    id: 'sfdc',
    name: 'Salesforce',
    smallIcon: 'https://cdn.fusebit.io/assets/images/salesforce.svg',
    largeIcon: 'https://cdn.fusebit.io/assets/images/salesforce.svg',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Salesforce on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/salesforce)!\n',
    tags: {
      catalog: 'CRM',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/salesforce#creating-your-own-salesforce-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          salesforceConnector: {
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
            scope: '#/properties/salesforceConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-salesforce-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/salesforce-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/salesforce-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'salesforce',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/salesforce-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'Run SOQL query',
        description: 'Run a SOQL query in Salesforce.',
        code:
          "\n/**\n * Run Salesforce SOQL query.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param soql {string} Salesforce SOQL query\n */\nasync function sfdcRunQuery(ctx, soql) {\n  // For the Salesforce SDK documentation, see https://jsforce.github.io/.\n  const sfdcClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  return await sfdcClient.query(soql || 'SELECT count() FROM Contact');\n}\n\n/**\n * Get more results for a previously ran Salesforce SOQL query.\n * \n * @param ctx {FusebitContext} Fusebit Context\n * @param nextRecordsUrl {string} The nextRecordsUrl returned from previous, partial query result.\n */\nasync function sfdcRunQueryMore(ctx, nextRecordsUrl) {\n  // For the Salesforce SDK documentation, see https://jsforce.github.io/.\n  const sfdcClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  return await sfdcClient.queryMore(nextRecordsUrl);\n}\n",
        id: 'run-query',
      },
    ],
  },
  {
    id: 'slack',
    name: 'Slack',
    smallIcon:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.31825 0C6.21488 0.000815494 5.32192 0.896228 5.32273 1.99959C5.32192 3.10296 6.2157 3.99837 7.31906 3.99918H9.31539V2.00041C9.31621 0.897044 8.42243 0.00163099 7.31825 0C7.31906 0 7.31906 0 7.31825 0V0ZM7.31825 5.33333H1.99633C0.892969 5.33415 -0.000813266 6.22956 2.22865e-06 7.33293C-0.00162876 8.43629 0.892153 9.3317 1.99552 9.33333H7.31825C8.42161 9.33252 9.31539 8.4371 9.31458 7.33374C9.31539 6.22956 8.42161 5.33415 7.31825 5.33333Z" fill="#36C5F0"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.96 7.33293C19.9608 6.22956 19.0671 5.33415 17.9637 5.33333C16.8603 5.33415 15.9665 6.22956 15.9674 7.33293V9.33333H17.9637C19.0671 9.33252 19.9608 8.4371 19.96 7.33293ZM14.6373 7.33293V1.99959C14.6381 0.897044 13.7451 0.00163099 12.6418 0C11.5384 0.000815494 10.6446 0.896228 10.6454 1.99959V7.33293C10.6438 8.43629 11.5376 9.3317 12.641 9.33333C13.7443 9.33252 14.6381 8.4371 14.6373 7.33293Z" fill="#2EB67D"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6411 20C13.7444 19.9992 14.6382 19.1038 14.6374 18.0005C14.6382 16.8971 13.7444 16.0017 12.6411 16.0009H10.6447V18.0005C10.6439 19.103 11.5377 19.9984 12.6411 20ZM12.6411 14.6659H17.9638C19.0672 14.6651 19.961 13.7697 19.9602 12.6663C19.9618 11.5629 19.068 10.6675 17.9646 10.6659H12.6419C11.5385 10.6667 10.6447 11.5621 10.6455 12.6655C10.6447 13.7697 11.5377 14.6651 12.6411 14.6659Z" fill="#ECB22E"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.15928e-05 12.6662C-0.000753902 13.7696 0.893028 14.665 1.99639 14.6658C3.09976 14.665 3.99354 13.7696 3.99272 12.6662V10.6666H1.99639C0.893028 10.6674 -0.000753902 11.5629 6.15928e-05 12.6662ZM5.32279 12.6662V17.9996C5.32116 19.103 6.21494 19.9984 7.31831 20C8.42167 19.9992 9.31545 19.1038 9.31464 18.0004V12.6679C9.31627 11.5645 8.42249 10.6691 7.31912 10.6674C6.21494 10.6674 5.32198 11.5629 5.32279 12.6662C5.32279 12.6662 5.32279 12.667 5.32279 12.6662Z" fill="#E01E5A"/>\n</svg>\n',
    largeIcon:
      '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 622.3 254.4" style="enable-background:new 0 0 622.3 254.4;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#E01E5A;}\n\t.st1{fill:#36C5F0;}\n\t.st2{fill:#2EB67D;}\n\t.st3{fill:#ECB22E;}\n</style>\n<g>\n\t<g>\n\t\t<path d="M221.5,161.5l6.2-14.4c6.7,5,15.6,7.6,24.4,7.6c6.5,0,10.6-2.5,10.6-6.3c-0.1-10.6-38.9-2.3-39.2-28.9\n\t\t\tc-0.1-13.5,11.9-23.9,28.9-23.9c10.1,0,20.2,2.5,27.4,8.2l-5.8,14.7c-6.6-4.2-14.8-7.2-22.6-7.2c-5.3,0-8.8,2.5-8.8,5.7\n\t\t\tc0.1,10.4,39.2,4.7,39.6,30.1c0,13.8-11.7,23.5-28.5,23.5C241.4,170.6,230.1,167.7,221.5,161.5"/>\n\t\t<path d="M459.4,141.9c-3.1,5.4-8.9,9.1-15.6,9.1c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c6.7,0,12.5,3.7,15.6,9.1l17.1-9.5\n\t\t\tc-6.4-11.4-18.7-19.2-32.7-19.2c-20.7,0-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5c14.1,0,26.3-7.7,32.7-19.2L459.4,141.9z"\n\t\t\t/>\n\t\t<rect x="290.8" y="64.5" width="21.4" height="104.7"/>\n\t\t<polygon points="484.9,64.5 484.9,169.2 506.3,169.2 506.3,137.8 531.7,169.2 559.1,169.2 526.8,131.9 556.7,97.1 530.5,97.1 \n\t\t\t506.3,126 506.3,64.5 \t\t"/>\n\t\t<path d="M375.8,142.1c-3.1,5.1-9.5,8.9-16.7,8.9c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c7.2,0,13.6,4,16.7,9.2V142.1z\n\t\t\t M375.8,97.1v8.5c-3.5-5.9-12.2-10-21.3-10c-18.8,0-33.6,16.6-33.6,37.4c0,20.8,14.8,37.6,33.6,37.6c9.1,0,17.8-4.1,21.3-10v8.5\n\t\t\th21.4v-72H375.8z"/>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path class="st0" d="M89.2,142c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h13.2V142z"/>\n\t\t\t<path class="st0" d="M95.8,142c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V175c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2\n\t\t\t\tV142z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st1" d="M109,89c-7.3,0-13.2-5.9-13.2-13.2c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V89H109z"/>\n\t\t\t<path class="st1" d="M109,95.7c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2H75.9c-7.3,0-13.2-5.9-13.2-13.2\n\t\t\t\tc0-7.3,5.9-13.2,13.2-13.2H109z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st2" d="M161.9,108.9c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2h-13.2V108.9z"/>\n\t\t\t<path class="st2" d="M155.3,108.9c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2V75.8c0-7.3,5.9-13.2,13.2-13.2\n\t\t\t\ts13.2,5.9,13.2,13.2V108.9z"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path class="st3" d="M142.1,161.8c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2v-13.2H142.1z"/>\n\t\t\t<path class="st3" d="M142.1,155.2c-7.3,0-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h33.1c7.3,0,13.2,5.9,13.2,13.2\n\t\t\t\ts-5.9,13.2-13.2,13.2H142.1z"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n',
    version: '5.2.0',
    description:
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Slack on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/slack)!\n',
    tags: {
      catalog: 'Messaging',
    },
    resources: {
      configureAppDocUrl: 'https://developer.fusebit.io/docs/slack#creating-your-own-slack-app',
    },
    configuration: {
      schema: {
        type: 'object',
        properties: {
          slackConnector: {
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
            scope: '#/properties/slackConnector/properties/id',
            label: 'Name',
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
              scope: 'chat:write users:read channels:read channels:join chat:write.public files:write',
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
                '{"name":"@fusebit-int/catalog-feed-connector-slack-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/slack-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/slack-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Slack',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/slack-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
    snippets: [
      {
        name: 'List workspace users',
        description: 'List users of the Slack workspace',
        code:
          "\n/**\n * List users of the Slack workspace. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n */\nasync function slackListUsers(ctx) {\n  // For the Slack SDK documentation, see https://slack.dev/node-slack-sdk/web-api.\n  const slackClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  return slackClient.users.list();\n}\n",
        id: 'list-users',
      },
      {
        name: 'Send a message to a channel',
        description: 'Send a message to a Slack channel.',
        code:
          "\n/**\n * Sends a message to a Slack channel. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param message {string|object} The message (in Slack markdown) to send, or the postMessage payload (advanced).\n * @param {channel} [undefined] Optional Slack channel ID or channel name to send the message to. If not specified, a DM is sent.\n */\nasync function slackSendMessage(ctx, message, channel) {\n  // For the Slack SDK documentation, see https://slack.dev/node-slack-sdk/web-api.\n  const slackClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  if (!channel) {\n    // Use the Slack user ID of the authorized user as the channel ID to send a Direct Message\n    channel = slackClient.fusebit.credentials.authed_user.id;\n  }\n\n  return typeof message === 'object'\n    ? slackClient.chat.postMessage({\n        channel,\n        ...message,\n      })\n    : slackClient.chat.postMessage({\n        channel,\n        text: message || 'Hello world from Fusebit!',\n      });\n}\n",
        id: 'send-message',
      },
      {
        name: 'Upload a file to a channel',
        description: 'Upload a file to a Slack channel.',
        code:
          "\n/**\n * Upload a file to a Slack channel. \n * \n * @param ctx {FusebitContext} Fusebit Context of the request\n * @param message {payload} The file upload payload.\n */\nasync function slackUploadFile(ctx, payload) {\n  // For the Slack SDK documentation, see https://slack.dev/node-slack-sdk/web-api.\n  const slackClient = await integration.tenant.getSdkByTenant(\n    ctx,\n    '<% connectorName %>',\n    ctx.params.tenantId || '<% defaultTenantId %>'\n  );\n\n  if (!payload?.channels) {\n    // Use the Slack user ID of the authorized user as the channel ID to send a Direct Message\n    payload.channels = slackClient.fusebit.credentials.authed_user.id;\n  }\n\n  return slackClient.files.upload(payload);\n}\n",
        id: 'upload-file',
      },
    ],
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
      'This Connector facilitates authentication, authorization, and API calls between Fusebit and Stack Overflow on your behalf.\n\n[Learn more](https://developer.fusebit.io/docs/stackoverflow)!\n',
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
          stackoverflowConnector: {
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
            scope: '#/properties/stackoverflowConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-stackoverflow-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/stackoverflow-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/stackoverflow-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'stackoverflow',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/stackoverflow-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
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
          zoomConnector: {
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
            scope: '#/properties/zoomConnector/properties/id',
            label: 'Name',
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
                '{"name":"@fusebit-int/catalog-feed-connector-zoom-connector","version":"7.41.0","private":true,"scripts":{"redeploy":"fuse connector rm <% this.id %> && yarn deploy","deploy":"fuse connector deploy <% this.id %> -d .","get":"fuse connector get <% this.id %> -d ."},"dependencies":{"@fusebit-int/framework":"7.41.0","@fusebit-int/zoom-connector":"7.41.0"}}',
            },
            handler: '@fusebit-int/zoom-connector',
          },
          id: '<% this.id %>',
          tags: {
            'fusebit.service': 'Zoom',
          },
        },
      },
      components: [
        {
          name: '<% this.id %>',
          skip: false,
          provider: '@fusebit-int/zoom-provider',
          entityId: '<% this.id %>',
          dependsOn: [],
          entityType: 'connector',
        },
      ],
    },
  },
];
