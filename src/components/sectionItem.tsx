import * as React from "react";

interface Props { 
    mainImg: string; 
    mainTitle: string; 
}

function SectionItem(props: Props) {
    return(
        <div style={imgDiv}>
            <img style={image} src={props.mainImg} alt="nature image" />
            <h1 style={centerTitle}> {props.mainTitle} </h1>
        </div>
    )
}

const imgDiv: React.CSSProperties = {
    padding: '.5rem 1rem',
    flex: '1 1 33%'
}

const centerTitle: React.CSSProperties = {
   display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%,'

}

const image: React.CSSProperties = {
    /* boxSizing: 'border-box', */
    position: 'relative',
    /* objectFit: 'cover', */
    width: '100%'
    
}

export default SectionItem