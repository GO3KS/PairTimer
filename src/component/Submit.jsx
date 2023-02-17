import React from "react"
import { Button, Modal } from "react-bootstrap"
import '../style/Submit.css'
import { useShow, useSetShow } from "../context/GlobalContext"
import { getDatabase, ref, push } from '@firebase/database'
import { useTime } from "../context/GlobalContext"

const Submit = () => {

    const show = useShow()
    const setShow = useSetShow()
    const time = useTime()

    const handleClose = () => setShow(false)

    const writeUserData = () => {
        const db = getDatabase()
        const reference = ref(db, 'scores/')
        push(reference, {
            addThis: time
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={writeUserData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Submit