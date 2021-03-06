import React from "react";
import "./Dash.css";
//import firebase from "../../config/Fire";
import PropTypes from "prop-types";
// react plugin for creating charts
import {Link, withRouter} from 'react-router-dom';
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Tasks from "../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Danger from "../../components/Typography/Danger.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import WorkAssign from "../../pages/work_assignmt.js";
import WorkDone from "../../pages/work_done.js";
import carfix from "./s.jpg";
import { bugs, website, server } from "../../variables/general.jsx";
import axios from 'axios';
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      div1:0,
      div2:0,
      div3:0,
      tableDiv1Data:[],
      tableDiv2Data:[],
      tableDiv3Data:[],
      counter: 0,
      fieldSum:0,
      today:'' ,
      yesterday:""
    };
    //this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount = async() =>{
  
   this.setFieldData();
    //this.todayDate();
   // this.addDataTo7Day();
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  

  setFieldData = async() => {
     var uid=localStorage.getItem('currentUserDivision');
    console.log(uid);


    axios.get('http://localhost:8000/dailySummary/get-allSum').then(response=>{
      this.setState({div1:response.data[0]['yeild']});
      console.log(response.data[0]['yeild']);
      
    }).catch(function(error){
      console.log(error);
    });
    axios.get('http://localhost:8000/dailySummary/get-allSum').then(response=>{
      this.setState({div2:response.data[1]['yeild']});
      console.log(response.data[0]['yeild']);
      
    }).catch(function(error){
      console.log(error);
    });

    axios.get('http://localhost:8000/dailySummary/get-allSum').then(response=>{
      this.setState({div3:response.data[2]['yeild']});
      console.log(response.data[0]['yeild']);
      
    }).catch(function(error){
      console.log(error);
    });


    // axios.get('http://localhost:8000/dailySummary/get-all/div1').then(response=>{
    //   console.log(response.data[0]['yeild']);
       
    //  }).catch(function(error){
    //    console.log(error);
    //  });
if(uid=='div1'){
  axios.get('http://localhost:8000/dailySummary/get-all/div1').then(response=>{
    var data=[];
    console.log(response.data);
    var i=0;
    while(response.data[i]){
      data[i]=[response.data[i]['field'],response.data[i]['yeild'],response.data[i]['count']]
      i+=1;
      console.log("DATA"+data[i]);
    }
    console.log("DATA"+data);
    this.setState({tableDiv1Data:data});
  }).catch(function(error){
    console.log(error);
  });


}
else if(uid=='div2'){
  axios.get('http://localhost:8000/dailySummary/get-all/div2').then(response=>{
    var data=[];
    var i=0;
    while(response.data[i]){
      data[i]=[response.data[i]['field'],response.data[i]['yeild'],response.data[i]['count']]
      i+=1;
    }
    console.log("DATA"+data);
    this.setState({tableDiv1Data:data});
  }).catch(function(error){
    console.log(error);
  });
}
else{
  axios.get('http://localhost:8000/dailySummary/get-all/div3').then(response=>{
    var data=[];
    var i=0;
    while(response.data[i]){
      data[i]=[response.data[i]['field'],response.data[i]['yeild'],response.data[i]['count']]
      i+=1;
    }
    console.log("DATA"+data);
    this.setState({tableDiv1Data:data});
  }).catch(function(error){
    console.log(error);
  });
}
   


    


  }
  render() {
    const { classes } = this.props;
    return (
      <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.0)),url(${carfix})`
      }}>
         <div className="wrappe">
      <div>
        <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
            <Card>
            <Link to ={"/work_assignmt"}>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                <i class="material-icons">assignment_ind</i>
                </CardIcon>
                <p className={classes.cardCategory}>Work Assignment</p>
                <h3 className={classes.cardTitle}></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <Card>
            <Link to ={"/work_done"}>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Work Done</p>
                <h3 className={classes.cardTitle}></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
                </Link>
               
            </Card>
          </GridItem>

          

          <GridItem xs={12} sm={3} md={3}>
            <Card>
            <Link to ="/weather">
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                <i class="material-icons">&#xe3dd;</i>
                </CardIcon>
                <p className={classes.cardCategory}>Weather</p>
                <h3 className={classes.cardTitle}></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
                </Link>
               
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={3} md={3}>
            <Card>
            <Link to ="/factory">
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                <i class="material-icons">house</i>
                </CardIcon>
                <p className={classes.cardCategory}>Factory</p>
                <h3 className={classes.cardTitle}></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
              </Link>
            </Card>
          </GridItem>
         
        </GridContainer>

        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={{
                    labels: [
                      "Division 1",
                      "Division 2",
                      "Division 3"
                    ],
                    series: [[this.state.div1,this.state.div2, this.state.div3]]
                  }}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Yesterday Field Summary</h4>
                <p className={classes.cardCategory}>
                  Crop Yeild
                </p>
              </CardBody>
            </Card>
          </GridItem>
         
        </GridContainer>
       
        
      </div>
      </div>
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Division Summary:"
              headerColor="primary"
              tabs={[
                {
                  tabName:localStorage.getItem('currentUserDivision'),
                  tabIcon: BugReport,
                  tabContent: (
                    <Table
                  tableHeaderColor="primary"
                  tableHead={[ "Field#", "Yeild(kg)","# of Laborers at work"]}
                  tableData={this.state.tableDiv1Data}
                />
                  )
                }
                
              ]}
            />
          </GridItem>
          
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
