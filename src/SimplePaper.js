import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    
  },
  Paper:{
      height:480,
      width:450,
      margin:'0 auto',
      marginTop:100,
      textAlign:'center',
      backgroundColor:'lightBlue'
      
      
  },
  input:{
      width:400,
      marginLeft:20,
      marginTop:20
  },
  login:{
      color:'DarkBlue'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();      

  return (
    <div className={classes.root}>
      
      <Paper elevation={3} className={classes.Paper}>
      <h1 className={classes.login}>Login</h1>
       <form className={classes.root} noValidate autoComplete="off">  
            <TextField  label="Name" variant="outlined" className={classes.input}/>
            <TextField  label="E-mail" variant="outlined" className={classes.input}/>
            <TextField  label="Password" variant="outlined" className={classes.input}/>
        </form><br/>
        <Button variant="contained" color="primary">
            Login
        </Button>
      </Paper>
     
    </div>
  );
}
