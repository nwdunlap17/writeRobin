import React, {Component} from 'react'
import HomeButton from '../components/HomeButton'
import LoginButton from '../components/LoginButton'
import ProfileButton from '../components/ProfileButton'

export default class NavBar extends Component {


    render(){ 
        return(
        <div>
            <HomeButton/>
            <LoginButton/>
            {/* <ProfileButton/> */}
        </div>)
    }
}