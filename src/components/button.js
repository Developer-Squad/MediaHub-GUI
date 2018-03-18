import React from 'react';


export class Button extends React.Component {
    
    render() {  
        return(    
            <button className="searchbutton" > {this.props.value} </button>
        );
    }
}
