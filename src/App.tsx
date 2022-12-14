import React from 'react';
import './App.css'
import DocsBody from './components/content/DocsBody';

import { TradingDocsContext } from './components/hooks/context/TradingDocsProvider';
import { useTradingDocs } from './components/hooks/useTradingDocs';
import Nav from './components/nav/Nav';
import NavMenu from './components/nav/NavMenu';

function App() {
  const state = useTradingDocs();
  return (<TradingDocsContext.Provider value={state}>
    <Nav />
    <NavMenu/>
    <DocsBody />
  </TradingDocsContext.Provider>
  );
}

export default App;
