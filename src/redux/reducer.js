import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEW_STAFF:
            return {...state, staffs: [...state.staffs, action.payload] }
            
        default:
            return state;
    }
};