import React, {useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AuthorModal({showModal, user, closeModal}) {
    return (
        <Modal show={showModal}>
            <Modal.Header closeButton onClick={closeModal}>
                <Modal.Title>{user.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Address: {user.address.city + ", " + user.address.street + ", " + user.address.suite}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AuthorModal;