import React, {Component} from 'react'

export default class SubmissionView extends Component{

    render(){
        return (<p>{this.props.submission.content}</p>)
    }
}