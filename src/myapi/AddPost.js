import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddPost(p) {
	const [text, settext] = useState('')
	const [text2, settext2] = useState('')
	const [loading, setloading] = useState('')


	async function handleSubmit(e) {
		e.preventDefault()
		let url = 'https://telugudunia-in.stackstaging.com/wp-json/wp/v2/posts/'
		let PostData = {
			status: 'publish',
			title: text,
			content: text2
		}
		const requestOptions = {
			method: 'POST',
			headers: {
				"Accept": "*/*",
				"Authorization": 'Basic ' + btoa('test:test@768'),
				"Content-Type": "application/json"
			},
			body: JSON.stringify(PostData)
		}
		setloading('Adding New Post...')
		const response = await fetch(url, requestOptions)
		const json = await response.json()
		setloading('Post added.')
		p.setrefresh(true)
		p.setbox(false)
		settext('')
		settext2('')
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>

				Title: <br />
				<input
					type="text"
					value={text}
					onChange={(e) => { settext(e.target.value) }}
				/>
				<br />
				Content: <br />
				<textarea
					value={text2}
					onChange={(e) => { settext2(e.target.value) }}
					cols="30" rows="5"></textarea>


				<div><Button variant='primary' onClick={handleSubmit}>ADD</Button></div>
			</form>

			{loading}

		</div>
	)
}


