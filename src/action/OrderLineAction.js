import * as ActionType from "./ActionType";

import fetchClient from "../api/fetchClient";
import { ApiCallBeginAction, ApiCallErrorAction } from "./ApiAction";

export const getOrderLinesResponse = orderLines => ({
  type: ActionType.GET_ORDERLINES_RESPONSE,
  orderLines
});

export function getOrderLinesAction() {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .get("OrderLines")
      .then(response => {
        dispatch(getOrderLinesResponse(response.data.result));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const addNewOrderLineResponse = () => ({
  type: ActionType.ADD_NEW_ORDERLINE_RESPONSE
});

export const updateExistingOrderLineResponse = () => ({
  type: ActionType.UPDATE_EXISTING_ORDERLINE_RESPONSE
});

export function saveOrderLineAction(OrderLineBeingAddedOrEdited) {
  return function(dispatch) {
    dispatch(ApiCallBeginAction());
    if (OrderLineBeingAddedOrEdited.id) {
      return fetchClient
        .put(
          "OrderLines/" + OrderLineBeingAddedOrEdited.id,
          OrderLineBeingAddedOrEdited
        )
        .then(() => {
          dispatch(updateExistingOrderLineResponse());
        })
        .catch(error => {
          dispatch(ApiCallErrorAction());
          throw error;
        });
    } else {
      return fetchClient
        .post("OrderLines", OrderLineBeingAddedOrEdited)
        .then(() => {
          dispatch(addNewOrderLineResponse());
        })
        .catch(error => {
          dispatch(ApiCallErrorAction());
          throw error;
        });
    }
  };
}

export const getOrderLineResponse = OrderLineFound => ({
  type: ActionType.GET_ORDERLINE_RESPONSE,
  OrderLine: OrderLineFound
});

export function getOrderLineAction(OrderLineId) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .get("OrderLines/" + OrderLineId)
      .then(response => {
        dispatch(getOrderLineResponse(response.data.result));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const deleteOrderLineResponse = () => ({
  type: ActionType.DELETE_ORDERLINE_RESPONSE
});

export function deleteOrderLineAction(OrderLineId) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .delete("OrderLines/" + OrderLineId)
      .then(() => {
        dispatch(deleteOrderLineResponse());
      })
      .then(() => {
        dispatch(getOrderLinesAction());
      })
      .catch(error => {
        throw error;
      });
  };
}
