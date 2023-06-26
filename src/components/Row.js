import React from 'react'

function Row(p) {
	return (
		<tr>
			<td>{p.n} x {p.i} = {p.n * p.i}</td>
		</tr>
	)
}

export default Row
