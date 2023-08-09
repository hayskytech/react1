import React, { useState } from 'react'

export default function TodoList() {
	const [list, setList] = useState([])
	const [item, setItem] = useState('')

	function handleItem(e) {
		setItem(e.target.value)
	}
	function addItem(e) {
		e.preventDefault()
		const newList = [...list]
		newList.push(item)
		setList(newList)
		setItem('')
	}

	return (
		<div>
			<h2>Todo List</h2>
			<form onSubmit={addItem}>
				<input type="text" value={item} onChange={handleItem} />
				<button>Add</button>
			</form>

			<ol>
				{
					list.map((item, index) => {
						return (<li>{item}</li>)
					})
				}
			</ol>
		</div>
	)
}
