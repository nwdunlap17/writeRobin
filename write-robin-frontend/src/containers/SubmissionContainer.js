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
            return(<SubmissionView submission={submission}/>)
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
    }

    render(){
        return (
            <div>
                {this.renderPendingSubmissions()}
                <form onSubmit={this.addSubmission}>
                    <input type='text-area' value={this.state.draft} onChange={event => this.setState({draft: event.target.value})}/>
                    <input type='submit'/>
                </form>
            </div>
            )
    }
}