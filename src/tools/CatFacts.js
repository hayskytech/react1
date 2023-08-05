import React, { useEffect, useState } from 'react'

export default function CatFacts() {
	const [list, setList] = useState([])
	useEffect(() => {
		async function getFacts() {
			const response = await fetch('https://cat-fact.herokuapp.com/facts/')
			const jsonData = await response.json()
			setList(jsonData)
		}
		getFacts()
	}, [])
	return (
		<div>
			{
				list.map((item) =>
					<p>{item.text}</p>
				)
			}
		</div>
	)
}
