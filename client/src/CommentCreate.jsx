import axios from 'axios'
import React, { useState } from 'react'

const CommentCreate = ({ id }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post(`http://localhost:4001/posts/${id}/comments`, {
            content,
        })
        setContent('')
    }

    return (
        <div>
            <h6>Create Comments</h6>
            <form onSubmit={onSubmit}>
                <input
                    className='form-control mt-2'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type='submit' className='btn btn-info mt-2'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default CommentCreate
