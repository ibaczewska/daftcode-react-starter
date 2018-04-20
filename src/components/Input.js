import React from 'react';

class Input extends React.Component {
    constructor(){
        super();
       
    }
      render() {
       
            const { inputLabelText, inputFunction, inputPlaceholder, inputValue  } = this.props;

            return (
                <div className="col-xs-12 col-md-offset-4 col-md-4">
                    <label>{inputLabelText}</label>
                    <input type="number" 
                        min="0"
                        className="form-control" 
                        placeholder={inputPlaceholder}
                        value={inputValue}
                        onChange={inputFunction} />
                </div>
                
              );
      }  
}

export default Input;