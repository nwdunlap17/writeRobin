import React, {Component} from 'react'

export default class ConnectionSocket extends Component{

componentDidMount() {
    let id = window.location.href.match(/\d+$/)[0]
    this.props['data-getStoryData'](id) 
    this.props['data-cableApp'].story = this.props['data-cableApp'].cable.subscriptions.create({channel: "StoryChannel", id: id},{
      received: (broadcast) => {
        console.log('received broadcast', broadcast)
        this.props['data-updateApp'](broadcast.story)
        }
    })
    }

    render() {
        return(
        <div/>
        )
    }    
}