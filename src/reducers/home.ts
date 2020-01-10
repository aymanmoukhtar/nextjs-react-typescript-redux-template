import { AnyAction, isType } from "typescript-fsa";

import { THomeState } from "../types/home";
import { changeTitleAction, getDataAction } from "../actions/home";

const initialState: THomeState = {
    title: 'This is home page title',
    data: []
};

const homeReducer = (state: THomeState = initialState, action: AnyAction): THomeState => {
    
    if (isType(action, changeTitleAction)) {
        return {
            ...state,
            title: action.payload
        };
    }

    if (isType(action, getDataAction.started)) {
        // Do data loading ui work if needed.
        return {
            ...state
        };
    }

    if (isType(action, getDataAction.done)) {
        return {
            ...state,
            data: action.payload.result
        };
    }

    if (isType(action, getDataAction.failed)) {
        // Do error handling work if needed
        return {
            ...state
        };
    }

    return state;
};

export {
    homeReducer
};