import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from '../hello';
import GoodbyeWorld from '../goodbye';
import PrivateRoute from '../auth/privateRoute';
import Login from '../auth/login';
import Logout from '../auth/logout';
import AuthButton from '../auth/authButton';
import styles from "./ProfileCard.scss";
import ProfilePic from './ProfilePic';
import ProfileNav from './ProfileNav';
import ProfileViewPort from './ProfileViewPort'
class Profile extends Component {

    render() {
        return (
                    <div className={styles.linkContainer}>
                        <h1>Vidya</h1>
                        
                        
                        
                        <ProfilePic />
                        
                        
                        
                    </div>

         
        )
    }
}

export default Profile;