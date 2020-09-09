import React, { Component } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import { callDummyAPI } from '../services/services';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import freda from '../assets/FredaButton.png';
import logo from '../assets/companyLogo.svg';
import Search from '../components/Search';
import EnhancedTable from '../components/EnhancedTable';



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    gridgap: '50px',
  },
  
  root1: {
    height:'150px',
    width:'300px',
    backgroundColor: '#hexcodehere'
  },
  title: {
    fontSize: 24,
    color:'#6D738B',
    textAlign:'center',
    alignItems:'top',
    justifyContent:'center',
  },
  title1: {
    fontSize: 40,
    color:'RED',
    textAlign:'center'
  },
  title3: {
    flexGrow: 1,
  },
  title4: {
    flexGrow: 1,
    textAlign:'right',
  },
  paper: {
    //padding: theme.spacing(2),
    height: '49%',
    width:'95%',
    backgroundColor:'#252C48',
    display:'flex',
    alignItems:'top',
    justifyContent:'center',
    flexDirection:'column',
    padding:'1px',
    alignSelf:'top',
    margin: '10px',
  },
 paper1: {
  textAlign: 'center',
  color: 'white',
  height: 80,
  margin: '10px',
  backgroundColor:'#252C48',
},
paper9: {
  textAlign: 'center',
  color: 'white',
  height: 200,
  width:250,
  margin: '20px',
  backgroundColor:'#252C48',
},


paper3: {
   color: '#3B617C',
   
 },
  textfield: {
    color: '#FFFFFFA6',
    fontSize: '1.5vw',
  },
  nameInput: {
    fontSize: '1vw',
    color: '#FFFFFF',
  },
  notchedOutline: { borderWidth: '1px', borderColor: '#5DAAE0 !important' },
  searchBtn: {
    marginTop: '8vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
  searchBtnDisabled: {
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    alignSelf: 'center',
    color: 'white !important',
    background: '#FFFFFFa5',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#FFFFFFa5',
    },
  },
});

class CollectorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      isloaded:false,
    
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleGetStarted = (e) => {
    callDummyAPI(this.state.name).then((response) => {
      console.log(response);
      this.setState({
        response: response.data.name,
        redirect: true,
        loading: false,
      });
    });
};

  componentDidMount() {
    
  }
  
  render() {
    
    const { classes, backgroundColor } = this.props;
    return (
      
      
      <Grid container className={classes.root} spacing={2} xs={12}>
         <Grid
          container
        style={{ height: '95vh' }}
          justify="center"
          alignItems="center"
          container spacing={5}
        >
          
          
          <AppBar position="static">
          <Toolbar variant="dense">
          
          <img alt="" src={logo} />
            <Typography variant="h5" color="inherit" className={classes.title3}>
              TWEETER
            </Typography>
            
          </Toolbar>
      </AppBar>
      <Grid container justify="center" spacing={3}>
       <Grid item xs>   
      <Card className={classes.root1}  style={{ backgroundColor:'#252C48' }}>
      <CardContent>
      <Typography className={classes.title} >
          Welcome to
        </Typography>
        <Typography className={classes.title1} >
          TWEETER
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
    <Grid item xs>
    <Card className={classes.root1} variant="outlined" style={{ backgroundColor:'#252C48' }}>
      <CardContent>
      <img alt="" src={logo} align='center'height='95vh' width='250vh' />

      </CardContent>
      
    </Card>
    </Grid>
    
    <Grid>
    <Card className={classes.root1} variant="outlined" style={{ backgroundColor:'#252C48' }}>
      <CardContent>
      <Typography className={classes.title} >
         HELLO!!!! 
        </Typography>
        <Typography className={classes.title1} >
         LETS TWEET
        </Typography>
      </CardContent>
      
    </Card>
    </Grid> 
   </Grid>
        <Grid container justify="center" spacing={8}>
        
      
        <Grid className='CollectorDashboard' item xs={9}
        style={{
          height: '50vh',
          width: '50vh',
          Color: '#252C48',
        }}
        >
         <Paper className={classes.paper1} style={{ backgroundColor:'#252C48' }}>
        <p >
        Type here to tweet...
        </p>
       <Search />
        </Paper>
        </Grid>
        <Grid className='CollectorDashboard' item xs={3}
        style={{
          height: '50vh',
          width: '30vh',
          Color: '#252C48',
        }}
        >
         <Paper className={classes.paper1} style={{ backgroundColor:'#252C48' }}>
           <p >
          <b>SELECT  DATE</b><br/>
          <b> YEAR  2020</b><br/>
          <b>    sept   </b><br/>
          </p>
          </Paper>
          <Paper className={classes.paper9} styles={{backgroundColor:'#252C48'}}>
            <p>
            <br/>1  2  3  4  5   6  7 8 <br/>
            <br/>9  10   11 12 13 14 15 16  <br/>
            <br/>17 18 19 20 21 22 23 24 <br/>
            <br/>25 26 27 28 29 30 31  <br/>
          </p>
       
               
           </Paper>
        </Grid>




        </Grid>
            
        </Grid>
        
        

        {this.state.redirect === true && (
          <Redirect
            to={{
              pathname: '/customer-details',
              state: { name: this.state.response },
            }}
          />
        )}
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CollectorDashboard);