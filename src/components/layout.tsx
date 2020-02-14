import * as React from "react";
import Navbar from './navbar';
import Content from './content'

export default function Layout() {
    return(
        
        <div>
        <Navbar />
        <Content />
         </div>     
    );
}




   /* lägg in style och grid eller flex */
    /* import React, { CSSProperties } from 'react';

/**React function component */ 
/* export deafult function Header() {

return (
    <div style={header}>
    <h1 style={headerItem}>React Playground</h1>
    </div>
);
}

const header: CSSProperties = {
height: '4rem',
background: 'black',
color: '#E1E1E1',
display: 'flex',
alignItems: 'stretch',
padding: '0 1rem'
};

const headerItem: CSSProperties = {
    fontSize: '1.7rem',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}; */ 