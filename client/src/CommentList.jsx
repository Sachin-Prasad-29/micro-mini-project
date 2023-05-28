import React from 'react'

const CommentList = ({ comments }) => {
    const listOfComments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <li style={{ borderBottom: '1px solid lightgrey', margin: '5px', padding: '2px' }}>
                    {comment.content}
                </li>
            </div>
        )
    })
    return <div>{listOfComments}</div>
}

export default CommentList
