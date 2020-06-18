import React from 'react';

import Page from './Page';


class App extends React.Component {

  render = () => {
      return (
        <div>
            <Page/>
            <a href="#" className="scroll top" ><i className="fa fa-angle-double-up" ></i></a>
        </div>
    );	
  }
}

export default App;
