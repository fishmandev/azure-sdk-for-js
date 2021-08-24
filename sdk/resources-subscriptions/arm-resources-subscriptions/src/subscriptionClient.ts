/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { SubscriptionsImpl, TenantsImpl } from "./operations";
import { Subscriptions, Tenants } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { SubscriptionClientContext } from "./subscriptionClientContext";
import {
  SubscriptionClientOptionalParams,
  SubscriptionClientCheckResourceNameOptionalParams,
  SubscriptionClientCheckResourceNameResponse
} from "./models";

export class SubscriptionClient extends SubscriptionClientContext {
  /**
   * Initializes a new instance of the SubscriptionClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: SubscriptionClientOptionalParams
  ) {
    super(credentials, options);
    this.subscriptions = new SubscriptionsImpl(this);
    this.tenants = new TenantsImpl(this);
  }

  /**
   * A resource name is valid if it is not a reserved word, does not contains a reserved word and does
   * not start with a reserved word
   * @param options The options parameters.
   */
  checkResourceName(
    options?: SubscriptionClientCheckResourceNameOptionalParams
  ): Promise<SubscriptionClientCheckResourceNameResponse> {
    return this.sendOperationRequest(
      { options },
      checkResourceNameOperationSpec
    );
  }

  subscriptions: Subscriptions;
  tenants: Tenants;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkResourceNameOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/checkResourceName",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckResourceNameResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.resourceNameDefinition,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};