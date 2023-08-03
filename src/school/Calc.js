import React, { useState } from 'react'

export default function Calc() {
	const [x, setx] = useState(25)
	const [y, sety] = useState(5)

	function run1(e) {
		const p = parseInt(e.target.value)
		setx(p)
	}
	function run2(e) {
		const p = parseInt(e.target.value)
		sety(p)
	}



	return (
		<div>
			<h2>Calculator</h2>

			X : <input type="number" value={x} onChange={run1} />
			Y : <input type="number" value={y} onChange={run2} />

			<p>Addition:  {x + y}</p>
			<p>Sub: 			{x - y}</p>
			<p>Mult: 			{x * y}</p>
			<p>Division:  {x / y}</p>


		</div>
	)
}
