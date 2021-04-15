import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorModal from "./Modal";
import './Post.css';

function Post({title, body, user}) {

    const [showModal, setShowModal] = useState(false);

    const onClickShowAuthorModal = () => {
        setShowModal(true)
    }

    const onClickCloseAuthorModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link onClick={onClickShowAuthorModal}>Author: {user.name}</Card.Link>
                </Card.Footer>
            </Card>
            <AuthorModal showModal={showModal} user={user} closeModal={onClickCloseAuthorModal}/>
        </>
    )
}

export default Post;