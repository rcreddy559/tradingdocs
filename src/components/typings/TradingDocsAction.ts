import {SET_CURRENT_PAGE} from '../util/Constants'

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE,
    page: string
}

export type TradingDocsAction = SetCurrentPage