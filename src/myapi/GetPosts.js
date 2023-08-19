import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import AddPost from './AddPost'

export default function GetPosts() {

	const [list, setList] = useState([])
	const [box, setbox] = useState(false);
	const [refresh, setrefresh] = useState(false)
	const emptypost = { id: '', title: { rendered: '' }, content: '' }
	const [postdata, setpostdata] = useState(emptypost)
	const [del, setdel] = useState(false)

	function handleClose() {
		setpostdata(emptypost)
		setbox(false);
	}
	function handleShow() {
		setbox(true)
	}

	useEffect(() => {
		async function loadposts() {
			const response = await fetch('https://telugudunia-in.stackstaging.com/wp-json/wp/v2/posts?_fields=id,title,content')
			const jsonData = await response.json()
			setList(jsonData)
		}
		loadposts()
		setrefresh(false)
	}, [refresh])

	function handleEdit(item) {
		setpostdata(item)
		setbox(true)
	}
	function handleDelete(item) {
		setpostdata(item)
		setdel(true)
		setbox(true)
	}


	return (
		<div>

			<Button variant="primary" onClick={handleShow}>
				Add Post
			</Button>


			<Modal show={box} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{Boolean(postdata.id) ? 'Edit' : 'Add'} new post</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<AddPost
						setrefresh={setrefresh}
						setbox={setbox}
						postdata={postdata}
						setpostdata={setpostdata}
						del={del}
						setdel={setdel}
					/>


				</Modal.Body>
			</Modal>


			<ol style={{ margin: 10, fontSize: 20 }}>
				{
					list.map((item, index) => {
						return (
							<li key={index}>
								<button onClick={() => { handleEdit(item) }}>Edit</button>
								<button onClick={() => { handleDelete(item) }}>Delete</button>
								{item.title.rendered}
							</li>)
					})
				}
			</ol>
		</div>
	)
}
