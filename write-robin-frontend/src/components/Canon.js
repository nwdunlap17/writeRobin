import React, {PureComponent} from 'react'

export default class Canon extends PureComponent {

    renderCanonSubmissions = () => {
        let submissions = this.props.story.submissions.filter( submission => {
            return submission.canon
        })
        submissions = submissions.sort(function(a,b){
            return a.position - b.position
        })
        // debugger
        return submissions.map(submission => {
            return(<div class='list-group-item submission'>
                <div>{submission.content}</div>
                <div class='addendum'>
                    {submission.author} {this.renderVoteButtons(submission)}
                </div>
            
            </div>)
        })
    }

    renderVoteButtons = (submission) => {
        let plus = <p class='vote-button' onClick={() => this.props.submitVote(submission.id,1)}>+</p>
        let minus = <p class='vote-button' onClick={() => this.props.submitVote(submission.id,-1)}>-</p>
        if (submission.vote === 1){
            plus = <p class='vote-button black' onClick={() => this.props.submitVote(submission.id,0)}>+</p>
        } else if (submission.vote === -1){
            minus = <p class='vote-button black' onClick={() => this.props.submitVote(submission.id,0)}>-</p>
        }
        return <div class='vote-button'>{plus} {minus}</div>
    }

    render(){
        return(
            <div class='card submission'>
                <ul class='list-group list-group-flush'>
                    {this.renderCanonSubmissions()}
                </ul>
            </div>
        )
    }
}