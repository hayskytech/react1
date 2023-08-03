import React from 'react'
import Student from './Student'

export default function StudentList() {
	const list = ['apple', 'bat', 'cat', 'dog', 'elephant', 'frog']
	return (
		<div>
			<ol>
				{
					list.map((item) => {
						return (<Student name={item} />)
					})
				}
			</ol>
		</div>
	)
}
