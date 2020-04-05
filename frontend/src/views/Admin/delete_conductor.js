import React, {Component} from "react";
import "./App.css";
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";
//import firebase from "../config/firebase.js";
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <Register />
      
    );
  }
}


class Register extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          nic: '',
          
          error: null,
        };
      }

     
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      handleSubmit = () => {
       
        const{nic} =this.state;
         
        if(nic == null || nic.length != 10){
          alert("please complete details correctly");       
         }  

        else{
         
        axios.post('http://localhost:8000/api/conductor/delete/'+this.state.nic
        ).then(function (response) {
          console.log(response)
          alert("Data deletion successfull");
        }).catch(function (error) {
          console.log(error)
          alert("Data Updation failed" + "\n"+ error);
        });
      };
    }

      handleBack = () => {
        window.location.replace("/Admin/conductor");
      
      }
     
  render() {
    const { nic, error } = this.state;
    const isInvalid =nic === '';
  return (
    
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.0)),url(${carfix})`
      }}>
    
    <div className='submit'>
              <button onClick={this.handleBack}>Back</button>
            </div>
      
    <div className="wrapper">
  <h2 className="heading">Delete Conductor</h2>

      <form onSubmit={this.onSubmit} >
      <div classname="input">
          
          <input className="input"
          name="nic"
          value={nic}
          onChange={this.onChange}
          type="text"
          placeholder="NIC"
        />
        </div>
      <div className = "submit">
        <button disabled={isInvalid} type="submit" onClick={this.handleSubmit}>
          Delete
        </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
     
      
     
      
      </div>
    </div>
    
  );
}

}
render(<App />, document.getElementById('root'))
export default App;