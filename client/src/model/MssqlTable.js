/**
 * dataintegrationapi
 * Easily and directly query database backup files, convert into other file formats.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveDataintegrationApiClient) {
      root.CloudmersiveDataintegrationApiClient = {};
    }
    root.CloudmersiveDataintegrationApiClient.MssqlTable = factory(root.CloudmersiveDataintegrationApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MssqlTable model module.
   * @module model/MssqlTable
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>MssqlTable</code>.
   * Details about a SQL Server Table
   * @alias module:model/MssqlTable
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MssqlTable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MssqlTable} obj Optional instance to populate.
   * @return {module:model/MssqlTable} The populated <code>MssqlTable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('schemaName')) {
        obj['schemaName'] = ApiClient.convertToType(data['schemaName'], 'String');
      }
      if (data.hasOwnProperty('tableName')) {
        obj['tableName'] = ApiClient.convertToType(data['tableName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the schema containing the table
   * @member {String} schemaName
   */
  exports.prototype['schemaName'] = undefined;
  /**
   * Name of the table
   * @member {String} tableName
   */
  exports.prototype['tableName'] = undefined;



  return exports;
}));


