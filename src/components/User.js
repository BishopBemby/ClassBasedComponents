import classes from './User.module.css';
import {Component} from 'react';

//Class based alternative to the below functional based components
class User extends Component {

  componentWillUnmount(){
    console.log('Unmount');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
