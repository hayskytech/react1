import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddPost(p) {
	const [text, settext] = useState('')
	const [text2, settext2] = useState('')
	const [loading, setloading] = useState('')

	useEffect(() => {
		if (p.postdata) {
			settext(p.postdata.title.rendered)
			settext2(p.postdata.content.rendered)
		}
	}, [])


	async function handleSubmit(e) {
		e.preventDefault()
		let url = 'https://telugudunia-in.stackstaging.com/wp-json/wp/v2/posts/'
		if (p.postdata.id) {
			url = url + p.postdata.id
		}
		let PostData = {
			status: 'publish',
			title: text,
			content: text2
		}
		let requestOptions = {
			headers: {
				"Accept": "*/*",
				"Authorization": 'Basic ' + btoa('test:test@768'),
				"Content-Type": "application/json"
			},
			body: JSON.stringify(PostData)
		}
		if (p.del) {
			requestOptions.method = "DELETE"
		} else {
			requestOptions.method = "POST"
		}

		setloading('Loading...')
		const response = await fetch(url, requestOptions)
		const json = await response.json()
		setloading('Done')
		p.setrefresh(true)
		p.setbox(false)
		p.setdel(false)
		p.setpostdata({ id: '', title: { rendered: '' }, content: '' })
		settext('')
		settext2('')
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{p.del ?
					<div>Do you want to delete?<br /><br /></div>
					:
					<div>
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
					</div>
				}

				<div><Button variant='primary' onClick={handleSubmit}>
					{Boolean(p.postdata.id) ? 'Submit' : 'Add'}
				</Button></div>
			</form>

			{loading}

		</div>
	)
}


