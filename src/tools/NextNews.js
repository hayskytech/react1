import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function NextNews() {
	const [list, setList] = useState([])
	const [offset, setOffset] = useState(0)

	function handleNext() {
		setOffset(offset + 5)
	}
	function handlePrev() {
		if (offset >= 5) {
			setOffset(offset - 5)
		}
	}

	useEffect(() => {
		async function loadNews() {
			const response = await fetch('https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=title&per_page=5&offset=' + offset)
			const jsonData = await response.json()
			setList(jsonData)
		}
		loadNews()

	}, [offset])
	return (
		<div>
			{Boolean(offset >= 5) && <button onClick={handlePrev}>Previous</button>}

			<button onClick={handleNext}>Next</button>
			{
				list.map((item) => <p>{item.title.rendered}</p>)
			}
		</div>
	)
}
