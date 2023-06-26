import React from 'react'
import Row from './Row'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tablecss = {
	border: '1px solid black',
	padding: '10px',
	margin: '10px',
	display: "inline-block"
}

function Table(props) {
	return (
		<table style={tablecss}>
			<tbody>

				{data.map((item) => (
					<Row key={item} n={props.n} i={item} />
				))}

			</tbody>
		</table>
	)
}

export default Table
