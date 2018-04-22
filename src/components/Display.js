import React from 'react';

class Display extends React.Component {
    constructor(){
        super();
    }
    render() {

        const { timerDisplay, message } = this.props;


        return (
           
                <div className="row">
                    <div style={{width: 'auto', padding: '20px',fontSize: '40px', textAlign: 'center'}}>{timerDisplay}</div>
                    <p style={{fontSize: '50px', textAlign: 'center'}}>{message}</p>
                </div>
           
        )
    }

}

export default Display;