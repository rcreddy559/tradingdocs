import { SET_CURRENT_PAGE } from "../../util/Constants";
import { TradingDocsState } from '../../typings/TradingDocsState'
import { TradingDocsAction } from '../../typings/TradingDocsAction'

export function TradingDocsReducer(
  state: TradingDocsState,
  action: TradingDocsAction
): TradingDocsState {
  state = {
    ...state,
    message: "",
  };
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {...state, 
        currentPage: action.page
    }
    }

    default:
      return state;
  }
}
