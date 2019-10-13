import React, {PureComponent} from 'react'

export default class StorySocket extends PureComponent{

    componentDidMount() {
        let id = window.location.href.match(/\d+$/)[0]
        this.props['data-cableApp'].story = this.props['data-cableApp'].cable.subscriptions.create({channel: "StoryChannel", id: id},{
            received: (broadcast) => {
                console.log('received broadcast',broadcast)

                switch (broadcast.message) {
                    case 'submission':
                        this.props.addSubmission(broadcast.submission)
                    break;
                    case 'audience':
                        this.props.updateAudience(broadcast.count)
                    break;
                    
                    default:
                        this.props.updateStory(broadcast.story)
                }
            }
        })
    }

    render(){
        return (<div/>)
    }
}