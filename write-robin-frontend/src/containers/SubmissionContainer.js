import React, {Component} from 'react'
import SubmissionView from '../components/SubmissionView'

export default class SubmissionContainer extends Component{
    constructor(props){
        super(props)
        this.state = {draft: ''}
    }

    renderPendingSubmissions = () => {
        let submissions = this.props.story.submissions.filter( submission => {
            return !submission.canon
        })
        return submissions.map(submission => {
            return(<SubmissionView submitVote={this.props.submitVote} submission={submission} backendURL={this.props.backendURL}/>)
        })
    }

    addSubmission = event => {
        event.preventDefault()
        fetch(this.props.backendURL+'/submissions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                submission: {
                    content: this.state.draft,
                    story_id: this.props.story.id
                }
            })
        })
        .then(()=>{this.setState({draft: ''})})
    }

    render(){
        return (
            <div>
                <ul class='pending-submission-list'>
                    {this.renderPendingSubmissions()}
                </ul>
                <form onSubmit={this.addSubmission}>
                    <input type='text-area' value={this.state.draft} onChange={event => this.setState({draft: event.target.value})}/>
                    <input type='submit'/>
                </form>
            </div>
            )
    }
}