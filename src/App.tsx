import React from 'react';
import './App.css'
import Nav from './components/nav/Nav';
import { TradingDocsContext } from './components/hooks/context/TradingDocsProvider';
import { useTradingDocs } from './components/hooks/useTradingDocs';
import { DocsDashboard } from './components/body/DocsDashboard';

function App() {
  const state = useTradingDocs();
  return (<TradingDocsContext.Provider value={state}>
          <DocsDashboard />
    </TradingDocsContext.Provider>
  );
}

export default App;
