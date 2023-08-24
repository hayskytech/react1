import React, { useEffect, useState } from 'react'

export default function TodoListLocal() {
	let olddata = []

	if (localStorage.getItem('list')) {
		olddata = JSON.parse(localStorage.getItem('list'))
	}

	const [list, setlist] = useState(olddata)
	const [item, setitem] = useState('')

	function addItem(e) {
		e.preventDefault()
		let newlist = [...list]
		newlist.push(item)
		setlist(newlist)
		localStorage.setItem('list', JSON.stringify(newlist))
		setitem('')
	}


	return (
		<div>
			<h3>Todo List</h3>
			<form onSubmit={addItem}>

				<input type="text" value={item}
					onChange={
						(e) => {
							setitem(e.target.value)
						}
					}
				/>
				<button>ADD</button>
			</form>

			<ol>
				{
					list.map((item) => {
						return (<li>{item}</li>)
					})
				}
			</ol>

		</div>
	)
}

