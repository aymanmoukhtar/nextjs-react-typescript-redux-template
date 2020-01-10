import { useDispatch, useSelector } from "react-redux"

import { THomeState } from "../../types/home";
import { TGlobalState } from "../Layout";
import { changeTitleAction, getDataAsync } from "../../actions/home";

const useHomeState = () => {
    const state = useSelector<TGlobalState, THomeState>(({ home }) => home);
    const dispatch = useDispatch();

    return {
        ...state,
        changeTitle: (newTitle: string) => dispatch(changeTitleAction(newTitle)),
        getData: () => getDataAsync(dispatch)
    };
};

export {
    useHomeState
};