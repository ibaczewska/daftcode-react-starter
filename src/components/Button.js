import React from 'react';

class Button extends React.Component {
    constructor() {
        super()
        
    }
    render() {
        const { buttonFunction, buttonClass, buttonText} = this.props;
    

        return (
            <div className="col-xs-6 col-md-4" >
                <button className={`btn btn-lg ${buttonClass}`} onClick={buttonFunction} >
                    {buttonText}
                </button>
            </div>
        )
    }

}

export default Button;