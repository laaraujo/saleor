/* tslint:disable */
// This file was automatically generated and should not be edited.

import { OrderEventsEmails, OrderEvents, FulfillmentStatus, PaymentChargeStatusEnum, OrderStatus, OrderAction } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderMarkAsPaid
// ====================================================

export interface OrderMarkAsPaid_orderMarkAsPaid_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderMarkAsPaid_orderMarkAsPaid_order_billingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_events_user {
  __typename: "User";
  email: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_events {
  __typename: "OrderEvent";
  id: string;
  amount: number | null;
  date: any | null;
  email: string | null;
  emailType: OrderEventsEmails | null;
  message: string | null;
  quantity: number | null;
  type: OrderEvents | null;
  user: OrderMarkAsPaid_orderMarkAsPaid_order_events_user | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice_gross;
  net: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice_net;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine {
  __typename: "OrderLine";
  id: string;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitPrice: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine_unitPrice | null;
  thumbnailUrl: string | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  orderLine: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node_orderLine;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges {
  __typename: "FulfillmentLineCountableEdge";
  node: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges_node;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines {
  __typename: "FulfillmentLineCountableConnection";
  edges: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines_edges[];
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments {
  __typename: "Fulfillment";
  id: string;
  lines: OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments_lines | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice_gross;
  net: OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice_net;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_lines {
  __typename: "OrderLine";
  id: string;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitPrice: OrderMarkAsPaid_orderMarkAsPaid_order_lines_unitPrice | null;
  thumbnailUrl: string | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderMarkAsPaid_orderMarkAsPaid_order_shippingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_shippingPrice {
  __typename: "TaxedMoney";
  gross: OrderMarkAsPaid_orderMarkAsPaid_order_shippingPrice_gross;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_subtotal {
  __typename: "TaxedMoney";
  gross: OrderMarkAsPaid_orderMarkAsPaid_order_subtotal_gross;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_total_tax {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_total {
  __typename: "TaxedMoney";
  gross: OrderMarkAsPaid_orderMarkAsPaid_order_total_gross;
  tax: OrderMarkAsPaid_orderMarkAsPaid_order_total_tax;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_authorizedAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_capturedAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_availableShippingMethods_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: OrderMarkAsPaid_orderMarkAsPaid_order_availableShippingMethods_price | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid_order {
  __typename: "Order";
  id: string;
  billingAddress: OrderMarkAsPaid_orderMarkAsPaid_order_billingAddress | null;
  created: any;
  events: (OrderMarkAsPaid_orderMarkAsPaid_order_events | null)[] | null;
  fulfillments: (OrderMarkAsPaid_orderMarkAsPaid_order_fulfillments | null)[];
  lines: (OrderMarkAsPaid_orderMarkAsPaid_order_lines | null)[];
  number: string | null;
  paymentStatus: PaymentChargeStatusEnum | null;
  shippingAddress: OrderMarkAsPaid_orderMarkAsPaid_order_shippingAddress | null;
  shippingMethod: OrderMarkAsPaid_orderMarkAsPaid_order_shippingMethod | null;
  shippingMethodName: string | null;
  shippingPrice: OrderMarkAsPaid_orderMarkAsPaid_order_shippingPrice | null;
  status: OrderStatus;
  subtotal: OrderMarkAsPaid_orderMarkAsPaid_order_subtotal | null;
  total: OrderMarkAsPaid_orderMarkAsPaid_order_total | null;
  actions: (OrderAction | null)[];
  authorizedAmount: OrderMarkAsPaid_orderMarkAsPaid_order_authorizedAmount;
  capturedAmount: OrderMarkAsPaid_orderMarkAsPaid_order_capturedAmount;
  user: OrderMarkAsPaid_orderMarkAsPaid_order_user | null;
  userEmail: string | null;
  availableShippingMethods: (OrderMarkAsPaid_orderMarkAsPaid_order_availableShippingMethods | null)[] | null;
}

export interface OrderMarkAsPaid_orderMarkAsPaid {
  __typename: "OrderMarkAsPaid";
  errors: (OrderMarkAsPaid_orderMarkAsPaid_errors | null)[] | null;
  order: OrderMarkAsPaid_orderMarkAsPaid_order | null;
}

export interface OrderMarkAsPaid {
  orderMarkAsPaid: OrderMarkAsPaid_orderMarkAsPaid | null;
}

export interface OrderMarkAsPaidVariables {
  id: string;
}
