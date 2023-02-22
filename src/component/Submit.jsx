import React, { useState } from 'react'
import '../style/Submit.css'
import { useShow, useSetShow } from '../context/GlobalContext'
import { useTime } from '../context/GlobalContext'
import { Button, Modal } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/connection'
import { useUserId } from '../context/GlobalContext'
import { useCookies } from 'react-cookie'
import { isNil } from 'lodash'

const Submit = () => {
	const show = useShow()
	const setShow = useSetShow()
	const time = useTime()
	const userId = useUserId()

	const [participant, setParticipant] = useState('')
	const [project, setProject] = useState('')
	const handleClose = () => setShow(false)

	const [cookies, setCookie] = useCookies()

	const writeUserData = async () => {
		await addDoc(collection(db, 'times'), { user_id: cookies.userId ? cookies.userId : userId, time: time, participant: participant, project: project })
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Save Session</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ textAlign: 'center' }}>
					<TextField label="Participant name" onChange={(e) => setParticipant(e.target.value)}></TextField>
					<TextField label="Project name" onChange={(e) => setProject(e.target.value)}></TextField>
				</Modal.Body>
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
