import React, {Component} from 'react'
import ConnectionSocket from './ConnectionSocket'

export default class ConnectionTest extends Component{

    render() {
        return(
        <ConnectionSocket
         data-cableApp={this.props['data-cableApp']}
         data-updateApp={this.props['data-updateApp']}
         data-storyData={this.props['data-storyData']}
         data-getStoryData={this.props['data-getStoryData']}
       />
        )
    }    
}