import React, {Component} from "react";
 import "./App.css";
import { render } from 'react-dom';
import carfix from "./SunrisePeekTeaEstate.jpg";

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
          phoneNo: '-',
          nic:'',
          name:'-',
          address:'-',
          username:'-',
          divNo:'-',
          Ready:false,
          error: null,
        };
      }
 
      handleBack = () => {
        window.location.replace("/Admin/conductor");
      
      }
    
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      handleLoad = async (e) => {
        localStorage.setItem('conductorUpdate', this.state.nic);
        console.log(localStorage.getItem('conductorUpdate'));
        this.setState({Ready:true});
        axios.get('http://localhost:8000/api/conductor/get/'+localStorage.getItem('conductorUpdate')).then(response=>{
          this.setState({nic:response.data['nic']});

          if(!response.data['nic']){
            alert("conductor doesn't exists");
          }

          else{

          this.setState({phoneNo:response.data['mobile']});
          this.setState({name:response.data['name']});
          this.setState({address:response.data['address']});
          // this.setState({username:response.data['username']});
          
       
          }
         
         }).catch(function(error){
           console.log(error);
         });
         
     
      }

      handleSubmit = () => {
        
        const{name,address,username,phoneNo,divNo,} = this.state;

        if(name == null || address == null || username == null || phoneNo == null || phoneNo.length != 10  ||divNo == null)
        {
          alert("please complete details correctly");
        }

        else{
        
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/conductor/update',
          data: {
            staffNIC:this.state.nic,
            staffName:this.state.name,
            staffAddress:this.state.address,
            staffMobileNo:this.state.phoneNo,  
            staffUsername:this.state.username,
            staffDiv:this.state.divNo
          }
        }).then(function (response) {
          console.log(response)
          alert(response.data);
        }).catch(function (error) {
          console.log(error)
          alert("Data Updation failed" + "\n"+ error);
        });
        //window.location.replace("/updateLaborer");
      }  console.log(username);

        

      };

      
     
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
  <h2 className="heading">Update Conductor</h2>

      <form onSubmit={this.onSubmit} >
      {!this.state.Ready ?
      <div classname="input">
          
          <input className="input"
          name="nic"
          value={nic}
          onChange={this.onChange}
          type="text"
          placeholder="NIC"
        />
        </div>
          :null}
        {!this.state.Ready ?
        <button disabled={isInvalid} type="submit" onClick={this.handleLoad}>
          Load Data
        </button>
        :null}

        {error && <p>{error.message}</p>}
      
     
      
     
      {this.state.Ready ?
    <div className="field">
        <p >NIC</p>
        <div className="field">
          <div className="control">
            <input value={this.state.nic}
              name="amount"
              className="input"
              type="text"
              onChange={(event) => this.setState({ nic: event.target.value })}
              placeholder={this.state.nic} required/>
              {/* {errors.amount.length > 0 && 
                <span className='error'>{errors.amount}</span>} */}
          </div>
        </div>
      </div>
      : null}
       {this.state.Ready ?
        <div className="field">
       <p >Mobile Number</p>
        <div className="field">
          <div className="control">
            <input value={this.state.phoneNo}
              name="amount"
              className="input"
              type="text"
              onChange={(event) => this.setState({ phoneNo: event.target.value })}
              placeholder={this.state.phoneNo} required/>
              {/* {errors.amount.length > 0 && 
                <span className='error'>{errors.amount}</span>} */}
          </div>
        </div>
      </div>
      : null}
       {this.state.Ready ?
        <div className="field">
        <p >Name</p>
        <div className="field">
          <div className="control">
            <input value={this.state.name}
              name="amount"
              className="input"
              type="text"
              onChange={(event) => this.setState({ name: event.target.value })}
              placeholder={this.state.name} required/>
              {/* {errors.amount.length > 0 && 
                <span className='error'>{errors.amount}</span>} */}
          </div>
        </div>
      </div>
      : null}
       {this.state.Ready ?
        <div className="field">
        <p >Address</p>
        <div className="field">
          <div className="control">
            <input value={this.state.address}
              name="amount"
              className="input"
              type="text"
              onChange={(event) => this.setState({ address: event.target.value })}
              placeholder={this.state.address} required/>
              {/* {errors.amount.length > 0 && 
                <span className='error'>{errors.amount}</span>} */}
          </div>
        </div>
      </div>
      : null}
       
       
      {this.state.Ready ?
        <button disabled={isInvalid} type="submit" onClick={this.handleSubmit}>
          Update
        </button>
        :null}
      </form>

      {/* <div className='submit'>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
  

      
      </form> */}
      
      </div>
    </div>
    
  );
}

}
render(<App />, document.getElementById('root'))
export default App;