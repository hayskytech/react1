import React, { useState } from 'react'

export default function CheckEqual() {

	const [x, setx] = useState('')
	const [y, sety] = useState('')
	const [msg, setmsg] = useState('')

	function handlex(e) {
		setx(e.target.value)
		check(e.target.value, y)
	}
	function handley(e) {
		sety(e.target.value)
		check(e.target.value, x)
	}
	function check(a, b) {
		if (a === b) {
			setmsg('Both are equal')
		} else {
			setmsg('Both are not equal')
		}
	}


	return (
		<div>
			X: <input type="number" onChange={handlex} />
			Y: <input type="number" onChange={handley} />
			<p>{msg}</p>


		</div>
	)
}
