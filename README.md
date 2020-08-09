# cloudmersive-dataintegration-api-client

CloudmersiveDataintegrationApiClient - JavaScript client for cloudmersive-dataintegration-api-client
Easily and directly query database backup files, convert into other file formats.
[Cloudmersive Data Integration API](https://github.com/Cloudmersive/Cloudmersive.APIClient.NodeJS.DocumentAndDataConvert.git) - Easily and directly query database backup files, convert into other file formats.

- API version: v1
- Package version: 2.0.1


## Installation

### For the [Cloudmersive Data Integration API](https://cloudmersive.com/data-integration-api)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-dataintegration-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-dataintegration-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-dataintegration-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveDataintegrationApiClient = require('cloudmersive-dataintegration-api-client');

var defaultClient = CloudmersiveDataintegrationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveDataintegrationApiClient.BackupConvertApi()

var opts = { 
  'inputFile': "/path/to/file.txt" // {File} Input file to perform the operation on
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.dataintegrationBackupConvertMssqlBakGetTablesPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveDataintegrationApiClient.BackupConvertApi* | [**dataintegrationBackupConvertMssqlBakGetTablesPost**](docs/BackupConvertApi.md#dataintegrationBackupConvertMssqlBakGetTablesPost) | **POST** /dataintegration/backup/convert/mssql/bak/get/tables | Lists all tables stored in a SQL Server Backup (.BAK) file
*CloudmersiveDataintegrationApiClient.BackupConvertApi* | [**dataintegrationBackupConvertMssqlBakToCsvPost**](docs/BackupConvertApi.md#dataintegrationBackupConvertMssqlBakToCsvPost) | **POST** /dataintegration/backup/convert/mssql/bak/to/csv | Converts a SQL Server Backup (.BAK) file into CSV for a specified table


## Documentation for Models

 - [CloudmersiveDataintegrationApiClient.MssqlBakEnumerateTablesResult](docs/MssqlBakEnumerateTablesResult.md)
 - [CloudmersiveDataintegrationApiClient.MssqlTable](docs/MssqlTable.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

