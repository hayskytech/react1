import React, { useEffect, useState } from 'react'


export default function RandomJoke() {
	const [joke, setJoke] = useState({})
	const [refresh, setRefresh] = useState(true)

	useEffect(() => {
		async function getJoke() {
			const response = await fetch('https://official-joke-api.appspot.com/random_joke')
			const jsonData = await response.json()
			setJoke(jsonData)
		}
		getJoke()
	}, [refresh])

	return (
		<div>
			<button onClick={setRefresh}>Refresh</button>
			<p>{joke.setup}</p>
			<p>{joke.punchline}</p>
		</div>
	)
}
