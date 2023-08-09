import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function GetPosts() {

	const [list, setList] = useState([])
	useEffect(() => {
		async function loadposts() {
			const response = await fetch('http://qhaysky.com/wp-json/wp/v2/posts?_fields=title')
			const jsonData = await response.json()
			setList(jsonData)
		}
		loadposts()
	}, [])


	return (
		<div>
			{
				list.map((item, index) => {
					return (<p key={index}>{index + 1}) {item.title.rendered}</p>)
				})
			}
		</div>
	)
}
