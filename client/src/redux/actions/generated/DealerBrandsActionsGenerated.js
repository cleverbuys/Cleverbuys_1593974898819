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
 *  TO CUSTOMIZE FUNCTIONS IN DealerBrandsActionsGenerated.js PLEASE EDIT ../DealerBrandsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import DealerBrandsApi from "../../../api/DealerBrandsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create dealerbrands
  createDealerBrands: function(dealerbrands) {
    return function(dispatch) {
      return DealerBrandsApi
        .createDealerBrands(dealerbrands)
        .then(dealerbrands => {
          dispatch(actionsFunction.createDealerBrandsSuccess(dealerbrands));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createDealerBrandsSuccess: function(dealerbrands) {
    return { type: types.CREATE_DEALERBRANDS_SUCCESS, payload: dealerbrands };
  },


  // Delete dealerbrands
  deleteDealerBrands: function(id) {
    return function(dispatch) {
      return DealerBrandsApi
        .deleteDealerBrands(id)
        .then(dealerbrands => {
          dispatch(actionsFunction.deleteDealerBrandsSuccess(dealerbrands));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteDealerBrandsSuccess: function(dealerbrands) {
    return { type: types.DELETE_DEALERBRANDS_SUCCESS, payload: dealerbrands };
  },


  // Find by brandID
  findBybrandID: function(key) {
    return function(dispatch) {
      return DealerBrandsApi
        .findBybrandID(key)
        .then(item => {
          dispatch(actionsFunction.findBybrandIDSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBybrandIDSuccess: function(item) {
    return { type: types.FINDBYBRANDID_DEALERBRANDS_SUCCESS, payload: item };
  },


  // Get dealerbrands
  loadDealerBrands: function(id) {
    return function(dispatch) {
      return DealerBrandsApi
        .getOneDealerBrands(id)
        .then(dealerbrands => {
          dispatch(actionsFunction.loadDealerBrandsSuccess(dealerbrands));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDealerBrandsSuccess: function(dealerbrands) {
    return { type: types.GET_DEALERBRANDS_SUCCESS, payload: dealerbrands };
  },

  // Load  list
  loadDealerBrandsList: function() {
    return function(dispatch) {
      return DealerBrandsApi
        .getDealerBrandsList()
        .then(list => {
          dispatch(actionsFunction.loadDealerBrandsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDealerBrandsListSuccess: function(list) {
    return { type: types.LIST_DEALERBRANDS_SUCCESS, payload: list };
  },

	
  // Save dealerbrands
  saveDealerBrands: function(dealerbrands) {
    return function(dispatch) {
      return DealerBrandsApi
        .saveDealerBrands(dealerbrands)
        .then(dealerbrands => {
          dispatch(actionsFunction.saveDealerBrandsSuccess(dealerbrands));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveDealerBrandsSuccess: function(dealerbrands) {
    return { type: types.UPDATE_DEALERBRANDS_SUCCESS, payload: dealerbrands };
  },


};

export default actionsFunction;
