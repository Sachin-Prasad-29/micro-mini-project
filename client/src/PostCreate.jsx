import axios from 'axios'
import React, { useState } from 'react'

const PostCreate = () => {
    const [title, setTitle] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()

        await axios.post('http://posts.com/posts/create', {
            title,
        })

        setTitle('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor=''>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        className='form-control mt-3'
                    />
                </div>
                <button className='btn mt-3 btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
