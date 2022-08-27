import React, { FC, useContext } from 'react';
import { TradingDocsContext } from '../hooks/context/TradingDocsProvider';
import Nav from '../nav/Nav';

export const DocsBody: FC = () => {
    const { currentPage } = useContext(TradingDocsContext)
    return <>
        <Nav />
        <DocsBody />
    </>
}