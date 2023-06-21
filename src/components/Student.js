import React from 'react'

function Student(props) {
	return (
		<div style={{'border':'2px solid black','display':'inline-block','margin':'10px', 'padding':'10px'}}>

			<h2> {props.name} </h2>
			
			<h3>Phone: {props.phone}</h3>

			<h3>Town: {props.town}</h3>

		</div>
	)
}

export default Student
