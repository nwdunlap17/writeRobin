import React, {Component} from 'react'
import Canon from '../components/Canon'
import SubmissionContainer from './SubmissionContainer'
import StorySocket from '../components/StorySocket'

//Takes in storyID as a prop
export default class StoryContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            story: null,
            loaded: false
        }
    }

    componentWillMount(){
        console.log('brackend', this.props)
        fetch(`${this.props.backendURL}/view-story/${this.props.storyId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('story',json);
            this.setState({story: json, loaded:true});})
        // .then(() => console.log('s2',this.state.story))
        
    }

    updateStoryFromSocket = updatedStory => {
        console.log('updating story from socket', updatedStory)
        this.setState({story: updatedStory})
    }

    render(){
        return(
        <div>

            {this.state.loaded? <div>
                <h3>{this.state.story.title}</h3>
                <Canon story={this.state.story}/>
                {/* <VoteButtons/> */}
                <h6>Pending</h6>
                <SubmissionContainer backendURL={this.props.backendURL} story={this.state.story}/>
                <StorySocket data-cableApp={this.props['data-cableApp']} updateStory={this.updateStoryFromSocket}/>
            </div>                
            : null}
        </div>)
    }
}