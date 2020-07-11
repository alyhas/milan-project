import '../Header/css/style.css'
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Yaward from '../../images/download_app.svg';
import fb from '../../images/Socials/FB.svg';
import IG from '../../images/Socials/IG.svg';
import Twitter from '../../images/Socials/twitter.svg';
import SnapChat from '../../images/Socials/snapchat.svg';
import Youtube from '../../images/Socials/youtube.svg'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 230,
    color: "#ffff",
    fontSize: 18,
    
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: '0',
    backgroundColor:"#BA1F6A",
    fontFamily: "El Messiri"
  },
  demo: {
    backgroundColor: "#BA1F6A",
    fontFamily: "El Messiri"
    
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    fontSize: 16,
    fontWeight: "bold",
    
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={classes.root}>
        <footer  className={classes.footer}>
      <CssBaseline />
     
     
        

   <div >
    



<div class= 'container-fluid my-component'>
 
  <div class="row">
    <div class="col">
    <table width="100%" >
  <tr>
    <th>Yaward</th>
    <th>Support</th>
    <th>Shops</th>
  
  </tr>
  <tr>
    <td>About us</td>
    <td>Privacy Policy</td>
    <td>Add your Shop</td>
  </tr>
  <tr>
    
    <td>Contact Us</td>
    <td>Terms of use</td>
    <td>Become a Rider</td>
  </tr>
  <tr>
   
    <td>Career</td>
     <td>FAQs</td>
    <td>How To Use</td>
  </tr>
</table>
    </div>
    <div class="col-md-auto">
    <div style={{alignSelf:'left'}}>  <h6 >Follow Us</h6></div>
      <img src={fb} Class='socials' alt="" width="32" height="32" title="Bootstrap"/>
      <img src={IG} alt="" Class='socials' width="32" height="32" title="Bootstrap"/>
      <img src={Twitter} alt="" Class='socials' width="32" height="32" title="Bootstrap"/>
      <img src={SnapChat} alt="" Class='socials' width="32" height="32" title="Bootstrap"/>
      <img src={Youtube} alt="" Class='socials' width="32" height="32" title="Bootstrap"/>
    </div>
    <div class="col-3">
    <h6>Download App</h6>
    <div Container><img style={{width:350, padding:20}} src={Yaward}/></div>
    </div>
  </div>
</div>



</div>
      </footer>
    </div>
  );
}