import React, { Component } from 'react';
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";
// import "./UserProfile.css";
import "../../pages/App.css";


// import axios for http request handling
import axios from 'axios';
var crypto=require('crypto');

class App extends Component {
    render() {
      return (
        <Register />
      );
    }
  }
  
  
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        NIC:null,
        Position:null,
        Manager:null,
        Phone_number:null,
        Name: null,
        DOB:null,
        Last_name : null,
        Address: null,
        Status:null,
        username:null,
        Password:null,

        value: '',
        errors: {
          NIC:'',
        Manager:'',
        Phone_number:'',
        Name: '',
        Position:'',
        DOB:'',
        Last_name : '',
        Address: '',
        Status:'',
        username:'',
        Password:'',

          }
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      
      this.setState({errors, [name]: value}); 
    }
  
    
    handleBack = () => {
      window.location.replace("/Admin/Clerk");
    
    }
    handleSubmit = (event) => {

      const{NIC,Name,Phone_number,DOB,Address,Password} = this.state

      if(NIC == null || Name == null || Phone_number == null || DOB==null || Address == null || Password == null)

      {
          alert("complete the details correctlly")

      }
          else{

          

       var hashPassword=crypto.createHash('md5').update(this.state.password).digest('hex');

      axios({ 
        method: 'post',
        url: 'http://localhost:8000/api/clerk/insert',
        data: {

          clerkNIC: this.state.NIC,
          clerkPosition:"clerk",
          clerkName: this.state.Name,
          clerkMobile: this.state.Phone_number,
          clerkDOB:this.state.DOB,
          clerkAddress: this.state.Address,
          clerkStatus: 'Active',
          clerkUsername:'clerk@gmail.com',
          clerkPassword:hashPassword,
          
        }
  
       
      }).then(function (response) {
        console.log(response)
        alert(response.data);
      }).catch(function (error) {
        console.log(error)
        alert("Clerk insertion failed" + "\n"+ error);
      });
    } 
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
        
        <h2 className="heading">Add Clerk</h2>
        
        <form name="myForm" >
        
        <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.NIC}
              name="NIC"
              className="input"
              type="text"
              onChange={(event) => this.setState({ NIC: event.target.value })}
              placeholder="NIC" required/>
               {errors.NIC.length > 0 &&  
                 <span className='error'>{errors.NIC}</span>} 
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
               {errors.Name.length > 0 &&  
                 <span className='error'>{errors.Name}</span>} 
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
               {errors.Address.length > 0 &&  
                 <span className='error'>{errors.Address}</span>} 
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.DOB}
              name="DOB"
              className="input"
              type="text"
              onChange={(event) => this.setState({ DOB: event.target.value })}
              placeholder="DOB" required/>
               {errors.DOB.length > 0 &&  
                 <span className='error'>{errors.DOB}</span>} 
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
               {errors.Phone_number.length > 0 &&  
                 <span className='error'>{errors.Phone_number}</span>} 
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.password}
              name="password"
              className="input"
              type="text"
              onChange={(event) => this.setState({ password: event.target.value })}
              placeholder="password" required/>
              
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