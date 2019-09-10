import * as ActionType from "./ActionType";

import fetchClient from "../api/fetchClient";
import { ApiCallBeginAction, ApiCallErrorAction } from "./ApiAction";

export const getUsersResponse = users => ({
  type: ActionType.GET_USERS_RESPONSE,
  users
});

export function getUsersAction() {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .get("users")
      .then(response => {
        dispatch(getUsersResponse(response.data.result));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const addNewUserResponse = () => ({
  type: ActionType.ADD_NEW_USER_RESPONSE
});

export const updateExistingUserResponse = () => ({
  type: ActionType.UPDATE_EXISTING_USER_RESPONSE
});

export function saveUserAction(UserBeingAddedOrEdited) {
  return function(dispatch) {
    dispatch(ApiCallBeginAction());
    if (UserBeingAddedOrEdited.id) {
      return fetchClient
        .put("users/" + UserBeingAddedOrEdited.id, UserBeingAddedOrEdited)
        .then(() => {
          dispatch(updateExistingUserResponse());
        })
        .catch(error => {
          dispatch(ApiCallErrorAction());
          throw error;
        });
    } else {
      return fetchClient
        .post("Users", UserBeingAddedOrEdited)
        .then(() => {
          dispatch(addNewUserResponse());
        })
        .catch(error => {
          dispatch(ApiCallErrorAction());
          throw error;
        });
    }
  };
}

export const getUserResponse = user => ({
  type: ActionType.GET_USER_RESPONSE,
  user: user
});

export function getUserAction(id) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .get("users/" + id)
      .then(response => {
        dispatch(getUserResponse(response.data.result));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const deleteUserResponse = () => ({
  type: ActionType.DELETE_USER_RESPONSE
});

export function deleteUserAction(id) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return fetchClient
      .delete("users/" + id)
      .then(() => {
        dispatch(deleteUserResponse());
      })
      .then(() => {
        dispatch(getUsersAction());
      })
      .catch(error => {
        throw error;
      });
  };
}
