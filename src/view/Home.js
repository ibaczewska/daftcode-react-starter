import React from 'react';
import PropTypes from 'prop-types';

import './Home.sass';




class Home extends React.Component {

  static propTypes = { 
    username: PropTypes.string.isRequired,
    }

    
  render() {
  
    const { username } = this.props;


    return (
      
        <div className="row">
          <h2 className="welcome" style={{marginBottom: '30px'}}>
            <span className="username">Hello {`${username}`}</span>
          </h2>
        </div>
     
    );
  }
}

export default Home;
