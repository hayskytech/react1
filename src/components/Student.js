import React from 'react'

function Student(props) {
	const x = props.item
	return (
		<div style={{'border':'2px solid black','display':'inline-block','margin':'10px', 'padding':'10px'}}>

			<h2>Name: {x.name} </h2>
			
			<h3>Phone: {x.phone}</h3>

			<h3>Town: {x.town}</h3>

		</div>
	)
}

export default Student
