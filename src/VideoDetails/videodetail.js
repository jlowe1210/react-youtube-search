import React from 'react';


export default function VideoDetail(props){

    const divStyle = {
            'marginTop': '10px',
            'padding': '10px',
            'border': '1px solid #dddddd',
            'borderRadius': '5px'
        }
    const h3Style = {
        'fontSize': '18px',
        'fontWeight': 'bold',
        'marginBottom': '10px'
    }
    
    return (
        <div style={divStyle}>
            <div style={h3Style}>{props.title}</div>
            <div>{props.description}</div>
        </div>
    )
}