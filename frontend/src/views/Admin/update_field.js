import React, { Component } from 'react';
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";
// import "./UserProfile.css";
import "../../pages/App.css";
// import firebase from "../../config/firebase.js";
// import { firestore } from 'firebase';

import axios from 'axios';

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
        Division_no:null,
        field_id:null,
        // field_type:null,
        Acres:null,
        replantation_date:null,
        status:null,
       
       

        value: '',
        errors: {
        Division_no:'' ,   
        // Field:'',
        // search_Division_no:'',
        field_id:'',
        // search_field_no:'',
        // field_type:'',
        // crop_type:'',
        Acres:'',
        replantation_date:'',
        status:'',
          }
    };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      
  
      this.setState({errors, [name]: value});
    }
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
     
    handleBack = () => {
      window.location.replace("/Admin/Field");
    
    
    }
    
     handleLoad =  async (e)  =>{
     const{field_id} = this.state;

      if(field_id == null){
    
         alert("Complete details succesfully");
      }
      else{
      localStorage.setItem('fieldUpdate', this.state.field_id);
      
      console.log(localStorage.getItem('fieldUpdate'));
      this.setState({Ready:true});
      axios.get('http://localhost:8000/api/field/get/'+localStorage.getItem('fieldUpdate')).then(response=>{
        this.setState({field_id:response.data['fid']});
        this.setState({Acres:response.data['facres']});
        this.setState({Division_no:response.data['divno']});
        this.setState({replantation_date:response.data['replantation_date']});
        
         this.setState({Ready:true});
     console.log(this.state.field_id);
        console.log(response.data);
        console.log(this.state.Ready);
        //this.setNewEndDate();
       }).catch(function(error){
         console.log(error);
       });
   console.log(this.state.Ready);
      
      }
     }

    handleSubmit = () => {

      axios({
        method: 'post',
        url: 'http://localhost:8000/api/field/update',
        data: {
          fieldFID:this.state.field_id,
          fieldAcres:this.state.Acres,
          fieldDivNo:this.state.Division_no,
          replantation_date:this.state.replantation_date
          }
      }).then(function (response) {
        console.log(response)
        alert(response.data);
      }).catch(function (error) {
        console.log(error)
        alert("Data Updation failed" + "\n"+ error);
      });


    
    }
    render() {
      const {field_id,isInvalid,error,errors} = this.state;
      return (
        <div
        className="App"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.0)),url(${carfix})`
        }}>
            
        <div className="wrapper">
        
        <h2 className="heading">Update Field</h2>
        
         <form onSubmit={this.onSubmit} >
      {!this.state.Ready ?
      <div classname="input">


          <input className="input"
          name="field_id"
          value={field_id}
          onChange={this.onChange}
          type="text"
          placeholder="field_id"
        />
        </div>
          :null}
        {!this.state.Ready ?
        <div className = "submit"> 
        <button disabled={isInvalid} type="submit" onClick={this.handleLoad}>
          Load Data
        </button>
        </div>
        :null}

        {error && <p>{error.message}</p>}  

        {this.state.Ready ? 
          <div className="field">
            <p>FieldID</p>
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.field_id}
              name="field_id"
              className="input"
              type="text"
              onChange={(event) => this.setState({ field_id: event.target.value })}
              placeholder="field_id" required/>
               {errors.field_id.length > 0 &&  
                 <span className='error'>{errors.field_id}</span>} 
          </div>
        </div>
      </div>
     : null}  
        
       
      {this.state.Ready ? 
          <div className="field">
            <p>Acres</p>
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Acres}
              name="Acres"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Acres: event.target.value })}
              placeholder="Acres" required/>
               {errors.Acres.length > 0 &&  
                 <span className='error'>{errors.Acres}</span>} 
          </div>
        </div>
      </div>
     : null}  

     {this.state.Ready ? 
      <div className="field">
        <p>DivisionNO</p>
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.Division_no}
              name="Division_no"
              className="input"
              type="text"
              onChange={(event) => this.setState({ Division_no: event.target.value })}
              placeholder="Division_no" required/>
               {errors.Division_no.length > 0 &&  
                 <span className='error'>{errors.Division_no}</span>} 
          </div>
        </div>
      </div>
    : null}

{this.state.Ready ? 
   <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input value={this.state.replantation_date}
              name="Acres"
              className="input"
              type="text"
              onChange={(event) => this.setState({ replantation_date: event.target.value })}
              placeholder="replantation_date" required/>
               {errors.replantation_date.length > 0 &&  
                 <span className='error'>{errors.replantation_date}</span>} 
          </div>
        </div>
      </div>
    : null}

      

      {this.state.Ready ?
         <div className='submit'>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
      : null}

        </form>
        </div>>

        <div className='submit'>
              <button onClick={this.handleBack}>Back</button>
            </div>
        </div>
        
      );
    }
  }

  render(<App/>, document.getElementById('root'))
 export default App;