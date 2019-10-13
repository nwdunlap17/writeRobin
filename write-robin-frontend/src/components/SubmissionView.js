import React, {Component} from 'react'

export default class SubmissionView extends Component{

    submitVote = event => {
        fetch(`${this.props.backendURL}/submission-vote`,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                value: event.target.getAttribute('rating'),
                submission_id: this.props.submission.id
            })
        })
    }

    render(){
        return (
        <li>
            {this.props.submission.content}
            <button rating={1} onClick={this.submitVote}> + </button>
            <button rating={-1} onClick={this.submitVote}> - </button>
        </li>)
    }
}