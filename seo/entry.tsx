import React from 'react';import {renderToString} from 'react-dom/server';import {StaticRouter} from 'react-router-dom';
import {App} from '../src/App';const page=()=> <App router={({children})=><>{children}</>}/>;
export const render=(path)=>renderToString(<StaticRouter location={path}>{page(path)}</StaticRouter>);
