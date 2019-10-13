import React, {Component} from 'react'
import StoryCard from '../components/StoryCard'

export default class HomeContainer extends Component{
    constructor(props){
         super(props)
         this.state = {
             stories: [],
             loaded: false
         }
    }

    componentDidMount(){
        fetch(`${this.props.backendURL}/home/stories`)
        .then(res => res.json())
        .then(json => this.setState({stories: json, loaded: true}))
    } 

    renderStoriesList = () => {
        return this.state.stories.map(story => {
            return <li><StoryCard story={story}/></li>
        })
    }

    render(){
        return(

            this.state.loaded? 

            <ul>
                {this.renderStoriesList()}
            </ul>
            : <p>Loading Stories</p> 

        )
    }

     
    
}