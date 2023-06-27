import React, { useState } from 'react'

function Calculator2() {
	const [x, setx] = useState(15)
	const [y, sety] = useState(3)

	function handlex(event){
		const data = event.target.value
		setx(parseInt(data))
	}
	function handley(event){
		const data = event.target.value
		sety(parseInt(data))
	}

	return (
		<div>
			<input type="number" value={x} onChange={handlex}/>
			<input type="number" value={y} onChange={handley}/>
			<h3>Addition: {x} + {y} = {x+y}</h3>
			<h3>Subtraction: {x-y}</h3>
			<h3>Multiplication: {x*y}</h3>
			<h3>Division: {x/y}</h3>
			<h3>Remainder: {x%y}</h3>
		</div>
	)
}

export default Calculator2
