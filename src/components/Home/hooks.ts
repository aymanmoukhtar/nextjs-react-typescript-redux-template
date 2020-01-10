import { useDispatch, useSelector } from "react-redux"

import { THomeState } from "../../types";
import { changeTitleAction, getDataAsync } from "../../actions";
import { TGlobalState } from "../../../pages/_app";

const useHome = () => {
    const state = useSelector<TGlobalState, THomeState>(({ home }) => home);
    const dispatch = useDispatch();

    return {
        ...state,
        changeTitle: (newTitle: string) => dispatch(changeTitleAction(newTitle)),
        getData: () => getDataAsync(dispatch)
    };
};

export {
    useHome
};