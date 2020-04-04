import React, { Component } from 'react';
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";

 import "../../pages/App.css";

 
// import axios for http request handling
import axios from 'axios';

class App extends Component {
    render() {
      return (
        <Register />
      );
    }
  }
  
  


class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nic:null,
        Phone_number:null,
        Name: null,
        dob : null,
        Address: null,
        Status:null,
        div:null,
        value: '',
        errors: {
        nic:'',
        Phone_number:'',
        Name: '',
        dob : '',
        Address: '',
        Status:'',
        div:'',
          }
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      
    }
  
    
    handleBack = () => {
      window.location.replace("/Admin/conductor");
    
    }
    handleSubmit = (event) => {
  const {nic,Name,Phone_number,dob,Address,div} = this.state;
      if(
        nic ==  null || nic .length != 10 ||
        Name == ""  ||
        Phone_number == ""  || Phone_number.length != 10 ||
        dob == ""  ||
        Name == ""  ||
        Address == ""  ||
        div == "" 

        )
        {
      
           alert("please complete details correctly");

        }

      
        else{

      axios({ 

        method: 'post',
        url: 'http://localhost:8000/api/conductor/insertConductor',
        data: {
           
           conductorNIC: this.state.nic,
           conductorPosition:'conductor',
           conductorName: this.state.Name,
           conductorMobile: this.state.Phone_number,
           conductorDOB:this.state.dob,
           conductorAddress: this.state.Address,
           conductorStatus: 'Active',
           conductorDivNo:this.state.div
           
        }

        
  
       
      }).then(function (response) {
        console.log(response)
        alert(response.data);
      }).catch(function (error) {
        console.log(error)
        alert("conductor insertion faild" + "\n"+ error);
      });

    }

     
   console.log(this.state.Name);
    
    }
    render() {
      const {errors} = this.state;
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
        
        <h2 className="heading">Add Conductor</h2>
        
        <form name="myForm" >
        
        <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.nic}
              name="nic"
              className="input"
              type="text"
              onChange={(event) => this.setState({ nic: event.target.value })}
              placeholder="NIC" required/>
               
          </div>
        </div>
      </div>
        <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Phone_number}
              name="Phone_number"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Phone_number: event.target.value })}
              placeholder="Phone_number" required/>
               
          </div>
        </div>
      </div>

          <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Name}
              name="Name"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Name: event.target.value })}
              placeholder="Name" required/>
               
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.dob}
              name="Last_name"
              className="input"
              type="date"
              onChange={(event) => this.setState({ dob: event.target.value })}
              placeholder="DOB" required/>
               
          </div>
        </div>
      </div>
      
      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Address}
              name="Address"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Address: event.target.value })}
              placeholder="Address" required/>
               
          </div>
        </div>
      </div>
      
      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.div}
              name="div"
              className="input"
              type="text"
              onChange={(event) => this.setState({ div: event.target.value })}
              placeholder="Division No" required/>
               
          </div>
        </div>
      </div>
      
      


         <div className='submit'>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
         
        </form>
        </div>>
        </div>
        
      );
    }
  }

  render(<App/>, document.getElementById('root'))
 export default App;