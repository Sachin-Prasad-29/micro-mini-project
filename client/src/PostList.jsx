import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const listOfPost = Object.values(posts).map((post) => {
        return (
            <div key={post.id}>
                <div style={{ border: '2px solid lightgrey', margin: '5px', padding: '10px' }}>
                    {post.title}
                    <CommentList comments={post.comments} />
                    <CommentCreate id={post.id} />
                </div>
            </div>
        )
    })
    return <div className='d-flex '>{listOfPost}</div>
}

export default PostList
