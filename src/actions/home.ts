import actionCreatorFactory from 'typescript-fsa';

import { homeApi } from '../api/home';
import { async } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const changeTitleAction = actionCreator<string>(actionIds.APP_CHANGE_TITLE);

const getDataAction = actionCreator.async<undefined, string[], any>(actionIds.APP_GET_DATA);

const getDataAsync = async(
    getDataAction,
    homeApi.getData
);

export {
    changeTitleAction,
    getDataAction,
    getDataAsync
};