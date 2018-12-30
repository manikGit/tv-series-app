import React, { Component } from 'react';
import Main from '../../components/Main'
import './App.css';
import 'whatwg-fetch';


class App extends Component {
 

  // componentDidMount(){
  //   const series = ["Salman","Shahrukh","Amir"];
  //   setTimeout(() => {
  //     // this.setState({ series: series })
  //     this.setState({ series })
  //   }, 2000);
  // }

 
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">
            TV-series
          </h2>
        </header>
        
         <Main />
      </div>
    );
  }
}

export default App;
