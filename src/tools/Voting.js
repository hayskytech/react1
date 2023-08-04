import React, { useState } from 'react'

export default function Voting() {

	const [age, setAge] = useState(0)
	const [msg, setMsg] = useState('')

	function run(e) {
		const x = e.target.value
		setAge(x)
		if (x >= 18) {
			setMsg('Eligible for voting')
		} else {
			setMsg('Not Eligible for voting')
		}
	}


	return (
		<div>
			<p>Enter you age:</p>
			<input type='number' onChange={run} value={age} />
			<p>{msg}</p>

		</div>
	)
}
