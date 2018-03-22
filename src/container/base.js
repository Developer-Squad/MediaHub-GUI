import React from 'react';

export class Base extends React.Component {
    render() {
        return(
            <div className="aa">
                {this.props.children}
            </div>
        );
    }
}