import * as React from "react";
import SectionItem from './sectionItem';

export default function Content() {
    return(
        <main style= {flexContainer}> 
        <SectionItem mainImg="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" mainTitle='FOREST' />
        <SectionItem mainImg="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" mainTitle='SKY' />
        <SectionItem mainImg="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80" mainTitle='DESERT'/>
    </main>
    );
}

const flexContainer: React.CSSProperties = {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
width: '100%',
height: '10%'
}



/*  gridcontainer  är denna diven*/