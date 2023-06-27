import React from 'react'
import Row from './Row'

const tablecss = {
	border: '1px solid black',
	padding: '10px',
	margin: '10px',
	display: "inline-block"
}

function Table(props) {
	let rows = []
	for (let a = 1; a <= 10; a++) {
		rows.push( <Row n={props.n} i={a} /> )
	}

	return (
		<table style={tablecss}>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

export default Table
