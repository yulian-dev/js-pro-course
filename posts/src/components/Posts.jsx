import React, {useState, useEffect, useCallback} from 'react';
import Post from "./Post";
import './Posts.css';
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(data => data.json())
            .then(setPosts)
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(data => data.json())
            .then(setUsers)
    }, [])

    const onClickShowMore = useCallback(() => {
        setLimit(limit => limit + 5)
    }, [])

    const postItems = posts.slice(0, limit).map((post) => {
        post.user = users.find(user => user.id === post.userId)
        return (
            <Post key={post.id} {...post}/>
        )
    })

    return (
        posts.length && users.length ?
            <div className="Display">
                <div className="Posts">
                    {postItems}
                </div>
                <div className="Button">
                    <Button onClick={onClickShowMore} variant="primary">Show more</Button>
                </div>
            </div> :
            <div className="Loading">
                <Spinner animation="grow"/>
            </div>
    );
}

export default Posts;