// Code EyesOnMe import React from 'react';
import React from 'react';

class EyesOnMe extends React.Component {

    blurIt = () => console.log('Hey! Eyes on me!')
    focusIt = () => console.log('Good!')

    render() {
        return (
            <button onBlur={this.blurIt} onFocus={this.focusIt}></button>
        )
    }
}

export default EyesOnMe;
