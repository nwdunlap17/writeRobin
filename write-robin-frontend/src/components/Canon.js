import React, {PureComponent} from 'react'

export default class Canon extends PureComponent {

    renderCanonSubmissions = () => {
        let submissions = this.props.story.submissions.filter( submission => {
            return submission.canon
        })
        submissions = submissions.sort(function(a,b){
            return a.position - b.position
        })
        debugger
        return submissions.map(submission => {
            return(<div class='list-group-item canon'>
                <div>{submission.content}</div>
                <div class='addendum'>{submission.author}</div>
            
            </div>)
        })
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