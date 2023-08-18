import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import AddPost from './AddPost'

export default function GetPosts() {

	const [list, setList] = useState([])
	const [box, setbox] = useState(false);
	const [refresh, setrefresh] = useState(false)

	function handleClose() {
		setbox(false);
	}
	function handleShow() {
		setbox(true)
	}

	useEffect(() => {
		async function loadposts() {
			const response = await fetch('https://telugudunia-in.stackstaging.com/wp-json/wp/v2/posts?_fields=title')
			const jsonData = await response.json()
			setList(jsonData)
		}
		loadposts()
		setrefresh(false)
	}, [refresh])


	return (
		<div>

			<Button variant="primary" onClick={handleShow}>
				Add Post
			</Button>


			<Modal show={box} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add new post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddPost setrefresh={setrefresh} setbox={setbox} />
				</Modal.Body>
				{/* <Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Close</Button>
					<Button variant="primary" onClick={handleClose}>Save Changes</Button>
				</Modal.Footer> */}
			</Modal>


			<ol style={{ margin: 10, fontSize: 20 }}>
				{
					list.map((item, index) => {
						return (<li key={index}>{item.title.rendered}</li>)
					})
				}
			</ol>
		</div>
	)
}
