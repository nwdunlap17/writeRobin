import React, {Component} from 'react'

export default class SubmissionView extends Component{


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
        return (
            <li class='submssion-list-item'>
            <div class='card submission list-group-item'>
                <div>{this.props.submission.content}</div>
                <div class='addendum'>
                    {this.props.submission.author} {this.renderVoteButtons(this.props.submission)}
                </div>
            </div>
            </li>
        )
    }
}