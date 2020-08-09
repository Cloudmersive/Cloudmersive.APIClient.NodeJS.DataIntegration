# CloudmersiveDataintegrationApiClient.BackupConvertApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataintegrationBackupConvertMssqlBakGetTablesPost**](BackupConvertApi.md#dataintegrationBackupConvertMssqlBakGetTablesPost) | **POST** /dataintegration/backup/convert/mssql/bak/get/tables | Lists all tables stored in a SQL Server Backup (.BAK) file
[**dataintegrationBackupConvertMssqlBakToCsvPost**](BackupConvertApi.md#dataintegrationBackupConvertMssqlBakToCsvPost) | **POST** /dataintegration/backup/convert/mssql/bak/to/csv | Converts a SQL Server Backup (.BAK) file into CSV for a specified table


<a name="dataintegrationBackupConvertMssqlBakGetTablesPost"></a>
# **dataintegrationBackupConvertMssqlBakGetTablesPost**
> MssqlBakEnumerateTablesResult dataintegrationBackupConvertMssqlBakGetTablesPost(opts)

Lists all tables stored in a SQL Server Backup (.BAK) file

### Example
```javascript
var CloudmersiveDataintegrationApiClient = require('cloudmersive-dataintegration-api-client');
var defaultClient = CloudmersiveDataintegrationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveDataintegrationApiClient.BackupConvertApi();

var opts = { 
  'inputFile': "/path/to/file.txt" // File | Input file to perform the operation on
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataintegrationBackupConvertMssqlBakGetTablesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on | [optional] 

### Return type

[**MssqlBakEnumerateTablesResult**](MssqlBakEnumerateTablesResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="dataintegrationBackupConvertMssqlBakToCsvPost"></a>
# **dataintegrationBackupConvertMssqlBakToCsvPost**
> &#39;Blob&#39; dataintegrationBackupConvertMssqlBakToCsvPost(opts)

Converts a SQL Server Backup (.BAK) file into CSV for a specified table

Input the target table to extract the data as a CSV format file.  Supports a wide array of SQL Server .BAK files and SQL Server backup file versions.  Consumes 1 API call per MB of input data.

### Example
```javascript
var CloudmersiveDataintegrationApiClient = require('cloudmersive-dataintegration-api-client');
var defaultClient = CloudmersiveDataintegrationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveDataintegrationApiClient.BackupConvertApi();

var opts = { 
  'tableName': "tableName_example", // String | Name of the table to return
  'inputFile': "/path/to/file.txt" // File | Input file to perform the operation on
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataintegrationBackupConvertMssqlBakToCsvPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tableName** | **String**| Name of the table to return | [optional] 
 **inputFile** | **File**| Input file to perform the operation on | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/csv

