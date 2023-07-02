import React from 'react'

const CommentList = ({ comments }) => {
    const listOfComments = comments.map((comment) => {
        let content
        let color = 'blue'
        if (comment.status === 'approved') {
            content = comment.content
        }
        if (comment.status === 'pending') {
            content = 'This comment is awaiting Moderation'
            color = 'yellow'
        }
        if (comment.status === 'rejected') {
            content = 'This comment has been rejected'
            color = 'red'
        }
        return (
            <div key={comment.id}>
                <li style={{ margin: '5px', padding: '2px',color }}>
                    {content}
                </li>
            </div>
        )
    })
    return <div>{listOfComments}</div>
}

export default CommentList
