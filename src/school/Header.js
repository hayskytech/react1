import React from 'react'
import './header.css'
export default function Header() {
	
	const ss = {
		color: 'red',
		fontSize: 30,
		backgroundColor: 'pink'
	}

	return (
		<div>

			<h1 style={ss}>haysky tech</h1>
			
			<ul className='menu'>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Services</li>
			</ul>
		</div>
	)
}
