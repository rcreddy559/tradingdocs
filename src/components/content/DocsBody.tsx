import React, { useContext } from 'react';
import { TradingDocsContext } from '../hooks/context/TradingDocsProvider';
import { HAMMER_PATTERN_PAGE } from '../util/Constants';
import { HammerPattern } from './candelsticks/patterns/hammer/HammerPattern';

function DocsBody() {
  const { SetCurrentPage, currentPage } = useContext(TradingDocsContext);
  return getCurrentPage(currentPage);
}

function getCurrentPage(currentPage: string) {
  if(currentPage === HAMMER_PATTERN_PAGE) {
    return <HammerPattern/>
  } else {
    return <h1>Welcome to Trading Docs</h1>
  }
}
export default DocsBody;
