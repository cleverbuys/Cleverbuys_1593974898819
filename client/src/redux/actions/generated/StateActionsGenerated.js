/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN StateActionsGenerated.js PLEASE EDIT ../StateActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import StateApi from "../../../api/StateApi";

let actionsFunction = {

  //CRUD METHODS

  // Create state
  createState: function(state) {
    return function(dispatch) {
      return StateApi
        .createState(state)
        .then(state => {
          dispatch(actionsFunction.createStateSuccess(state));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createStateSuccess: function(state) {
    return { type: types.CREATE_STATE_SUCCESS, payload: state };
  },


  // Delete state
  deleteState: function(id) {
    return function(dispatch) {
      return StateApi
        .deleteState(id)
        .then(state => {
          dispatch(actionsFunction.deleteStateSuccess(state));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteStateSuccess: function(state) {
    return { type: types.DELETE_STATE_SUCCESS, payload: state };
  },


  // Get state
  loadState: function(id) {
    return function(dispatch) {
      return StateApi
        .getOneState(id)
        .then(state => {
          dispatch(actionsFunction.loadStateSuccess(state));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStateSuccess: function(state) {
    return { type: types.GET_STATE_SUCCESS, payload: state };
  },

  // Load  list
  loadStateList: function() {
    return function(dispatch) {
      return StateApi
        .getStateList()
        .then(list => {
          dispatch(actionsFunction.loadStateListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStateListSuccess: function(list) {
    return { type: types.LIST_STATE_SUCCESS, payload: list };
  },

	
  // Save state
  saveState: function(state) {
    return function(dispatch) {
      return StateApi
        .saveState(state)
        .then(state => {
          dispatch(actionsFunction.saveStateSuccess(state));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveStateSuccess: function(state) {
    return { type: types.UPDATE_STATE_SUCCESS, payload: state };
  },


};

export default actionsFunction;
