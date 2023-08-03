import React from 'react'

function Student(p) {

	const x = {
		backgroundColor: 'skyblue',
		margin: 5,
		padding: 10,
		borderColor: 'black',
		borderWidth: 2,
		borderStyle: 'solid',
		display: 'inline-block'
	}



	return (
		<div style={x}>
			<h1> {p.name} </h1>
			<h3>Class --</h3>
		</div>
	)
}





export default Student
