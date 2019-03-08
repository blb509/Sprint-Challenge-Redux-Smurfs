/*
  Be sure to import in all of the action types from `../actions`
*/
import {
   FETCHING,
   FETCHING_FAILURE,
   FETCHING_SUCCESS,
   MAKING_SMURF,
   MADE_SMURF,
   MAKING_ERROR } from "../actions";


//  Your initial/default state for this project could *Although does not have to* look a lot like this
  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { 
        ...state,
        fetchingSmurfs: true };

    case FETCHING_FAILURE:
      return { 
        ...state, 
        fetchingSmurfs: false, 
        error: action.payload };

    case FETCHING_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false };

    case MAKING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      };

    case MADE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      };

    case MAKING_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }

    default:
      return state;
  }
};