import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Lock from '@material-ui/icons/Lock';
import '../components/Button.css'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        <Grid container alignItems="flex-">
            <PermIdentity/>
            <TextField fullWidth id="input-with-icon-grd" label="Login: " />  
        </Grid>
        <Grid className="line">
          
        </Grid>
        
        <Grid container alignItems="flex-">
            <Lock/>
            <TextField 
            fullWidth 
            id="input-with-icon-grd" 
            label="Senha:"
            type="password" 
            />
        </Grid>
      </div>


    </div>
  );
}
