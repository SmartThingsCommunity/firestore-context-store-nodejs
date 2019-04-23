# firestore-context-store-nodejs

<p>
<a href="https://npmjs.org/package/@smartthings/firestore-context-store"><img src="https://badge.fury.io/js/@smartthings/firestore-context-store.svg"></a>
<a href="https://circleci.com/gh/SmartThingsCommunity/firestore-context-store-nodejs.svg?style=svg"><img src="https://circleci.com/gh/SmartThingsCommunity/firestore-context-store-nodejs.svg?style=svg"></a>
<a href="https://david-dm.org/SmartThingsCommunity/firestore-context-store-nodejs"><img src="https://david-dm.org/SmartThingsCommunity/firestore-context-store-nodejs.svg?theme=shields.io"></a>
<a href="https://codecov.io/gh/SmartThingsCommunity/firestore-context-store-nodejs"><img src="https://codecov.io/gh/SmartThingsCommunity/firestore-context-store-nodejs/branch/master/graph/badge.svg" /></a>
</p>

> Stores SmartApp configuration and auth tokens for use in app-initiated calls

Used by the [SmartApp SDK](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs) to store IDs and access tokens for an installed instance of a SmartApp
and retrieves that information for use in asynchronous API calls. The use of a context store
is only needed when SmartApps have to call the SmartThings API in response to external
events. SmartApps that only response to lifecycle events from the SmartThings platform
will automatically have the proper context without the app having to store it.

The context stored by this module consists of the following data elements:

- **installedAppId**: the UUID of the installed app instance. This is the primary key of the table.
- **locationId**: the UUID of the location in which the app is installed
- **authToken**: the access token used in calling the API
- **refreshToken**: the refresh token used in generating a new access token when one expires
- **clientId**: the SmartApp's client ID, used in generating a new access token
- **clientSecret**: the SmartApp's client secret, used in generating a new access token
- **config**: the current installed app instance configuration, i.e. selected devices, options, etc.v

## Installation

```shell
npm install @smartthings/firestore-context-store --save
```

## Usage

### A note about usage

This package currently targets initializing Cloud Firestore from your own server by using a Service Account. If you are hosted on something like [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) or [Google Cloud Platform](https://cloud.google.com/), we don't currently support those methodologies – feel free to contribute!

To use this module to add Firebase Cloud Firestore context storage to your SmartApp, you should:

1. **Generate a service account**. We use the Firebase Admin SDK. Go to IAM & admin > Service accounts in the Cloud Platform Console. Generate a new private key and save the JSON file. Then use the file to initialize the SDK in the next step.

1. **`require()` your Google Services service account JSON file.** Be certain that you don't ever commit this file to a public repository.

1. **Create a context store instance** with the service account object and the document collection name and pass it to the SmartApp SDK object. For example, the following code:

```javascript
const SmartApp = require('@smartthings/smartapp');
const FirestoreDBContextStore = require('@smartthings/firestore-context-store');
const serviceAccount = require('./googleservices-YOURAPPNAME-AND-ID.json')

const smartapp = new SmartApp()
  .contextStore(new FirestoreDBContextStore(serviceAccount, 'installedapps'))
```

This will use a document collection named `installedapps` to store documents as keyed by the `installedAppId` value.

### Firebase Console

From the Firebase Cloud Firestore console, you will see a new document collection with persisted contexts.

![img](docs/example_console.png)

## More about SmartThings

If you are not familiar with SmartThings, we have
[extensive on-line documentation](https://smartthings.developer.samsung.com/develop/index.html).

To create and manage your services and devices on SmartThings, create an account in the
[developer workspace](https://devworkspace.developer.samsung.com/).

The [SmartThings Community](https://community.smartthings.com/c/developers/) is a good place share and
ask questions.

There is also a [SmartThings reddit community](https://www.reddit.com/r/SmartThings/) where you
can read and share information.

## License and Copyright

Licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

Copyright 2019 SmartThings, Inc.