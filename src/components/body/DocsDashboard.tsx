import React, { FC } from 'react';
import Nav from "../nav/Nav"
import { DocsBody } from './DocsBoday';

export const DocsDashboard: FC = () => {
    return <>
        <Nav />
        <DocsBody />
    </>
}