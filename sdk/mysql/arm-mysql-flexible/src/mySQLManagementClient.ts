/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MySQLManagementClientContext } from "./mySQLManagementClientContext";


class MySQLManagementClient extends MySQLManagementClientContext {
  // Operation groups
  servers: operations.Servers;
  replicas: operations.Replicas;
  backups: operations.Backups;
  firewallRules: operations.FirewallRules;
  databases: operations.Databases;
  configurations: operations.Configurations;
  locationBasedCapabilities: operations.LocationBasedCapabilities;
  checkVirtualNetworkSubnetUsage: operations.CheckVirtualNetworkSubnetUsage;
  checkNameAvailability: operations.CheckNameAvailability;
  getPrivateDnsZoneSuffix: operations.GetPrivateDnsZoneSuffix;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the MySQLManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.MySQLManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.servers = new operations.Servers(this);
    this.replicas = new operations.Replicas(this);
    this.backups = new operations.Backups(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.databases = new operations.Databases(this);
    this.configurations = new operations.Configurations(this);
    this.locationBasedCapabilities = new operations.LocationBasedCapabilities(this);
    this.checkVirtualNetworkSubnetUsage = new operations.CheckVirtualNetworkSubnetUsage(this);
    this.checkNameAvailability = new operations.CheckNameAvailability(this);
    this.getPrivateDnsZoneSuffix = new operations.GetPrivateDnsZoneSuffix(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  MySQLManagementClient,
  MySQLManagementClientContext,
  Models as MySQLManagementModels,
  Mappers as MySQLManagementMappers
};
export * from "./operations";