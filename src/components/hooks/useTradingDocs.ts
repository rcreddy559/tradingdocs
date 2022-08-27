import { useReducer } from "react";
import { TradingDocsScheme } from "../typings/TradingDocsScheme";
import { TradingDocsState } from "../typings/TradingDocsState";
import { HOME_PAGE, SET_CURRENT_PAGE } from "../util/Constants";
import { TradingDocsReducer } from "./reducer/TradingDocsReducer";

const initialState: TradingDocsState = {
    currentPage: HOME_PAGE,
    message: ""
}

export function useTradingDocs(): TradingDocsScheme {
    const [state, dispatch] = useReducer(TradingDocsReducer, initialState);

     return {
        ...state,
        SetCurrentPage(page: string) {
            dispatch({type: SET_CURRENT_PAGE, page})
        },
     }
}