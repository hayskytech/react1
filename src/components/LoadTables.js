import React from 'react'
import Table from './Table'

function LoadTables() {
	let tables = []

	for (let a = 1; a <= 10; a++) {
		tables.push(<Table n={a} />)
	}

	return (
		<div>
			{tables}
		</div>
	)
}

export default LoadTables
