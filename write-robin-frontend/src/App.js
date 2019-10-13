import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './containers/NavBar'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import ConnectionTest from './components/ConnectionTest'
import './App.css';
import StoryContainer from './containers/StoryContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component{
    constructor(props){
    super(props)
    this.state = {
        append: '',
        auth: {
            isLoggedIn: false,
            user: ''
        },
        joinStory: {
            code: "",
            error: false,
            storyId: null,
            redirect: false
        },
        story: {
            content: '',
            message: ''
        }
        }
    }

    updateAppStateStory = (newStory) => {
        // debugger
        console.log('updateAppStateStory: ', this.state.story)
        this.setState({
        story: newStory
        })
    }


    getStoryData = (id) => {
        let storyId = id || this.state.joinStory.storyId
        fetch(`http://localhost:3000/stories/${storyId}`)
        .then(resp => resp.json())
        .then(json => {this.setState({story: json}); console.log('json', json)})
    }    

    appendButton = event => {
        let storyId = this.state.joinStory.storyId
        fetch(`http://localhost:3000/stories/1/append`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({ addend: this.state.addend })
        })
        .then(resp => resp.json())
        .then(json => console.log('button'))
    }

    render(){
        return (
        <div>
            <Router>
                <NavBar/>
                
                <Route path='/login'>
                    <SignInForm backendURL={this.props.backendURL}/>
                    <Link to='/signup'>Or Sign Up</Link>
                </Route>
                <Route path='/signup'>
                    <SignUpForm backendURL={this.props.backendURL}/>
                </Route>

                <Route path='/stories/'>
                    <p>StoryContainer</p>
                    <StoryContainer backendURL={this.props.backendURL} data-cableApp={this.props.cableApp}/> 
                </Route>

                <Route path='/home'>
                    <HomeContainer backendURL={this.props.backendURL}/>
                </Route>

                {/* <ConnectionTest
                    data-cableApp={this.props.cableApp}
                    data-updateApp={this.updateAppStateStory}
                    data-storyData={this.state.storyData}
                    data-getStoryData={this.getStoryData}
                    getStoryData={this.getStoryData}
                    storyData={this.state.story}
                    authData={this.state.auth}
                /> */}
                {/* <p>Story of ID: {this.state.story.id}</p>
                <p>{this.state.story.content}</p>
                <input type='text' value={this.state.addend} onChange={event=>{this.setState({addend: event.target.value})}}/>
                <button onClick={this.appendButton}>Add</button> */}
            </Router>
        </div>
    )   }
}

export default App;
