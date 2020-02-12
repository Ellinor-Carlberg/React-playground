import * as React from "react";
import Navbar from './navbar'
export default function Layout() {
    return(
        <h1 style={style}> hej
        <Navbar />
     </h1>
            
    );
}



const centeredContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
    };

    const theme: React.CSSProperties = {
        color: 'green'
    }

    const style = { ...centeredContent, ...theme }
    
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