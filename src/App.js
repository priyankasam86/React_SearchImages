import React, {Component} from 'react';
import "./Component/search";
import Search from './Component/search';
import './App.css';

class App extends Component{

  render(){

    return(

      <div className="container" style={{backgroundColor:"teal", color:"white"}}>
        <div className="row">
          <div className="col-md-12">
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;