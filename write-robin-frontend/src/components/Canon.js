import React, {PureComponent} from 'react'

export default class Canon extends PureComponent {

    renderCanonSubmissions = () => {
        let submissions = this.props.story.submissions.filter( submission => {
            return submission.canon
        })
        submissions = submissions.sort(function(a,b){
            return a.position - b.position
        })
        return submissions.map(submission => {
            return(<p>{submission.content}</p>)
        })
    }

    render(){
        return(
            <div>
                {this.renderCanonSubmissions()}
            </div>
        )
    }
}