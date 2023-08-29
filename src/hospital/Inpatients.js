import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Icon, List } from 'semantic-ui-react'

export default function Inpatients() {
	const [patients, setpatients] = useState([])
	const [refresh, setrefresh] = useState(true)

	let yourDate = new Date()
	const date = yourDate.toISOString().split('T')[0]

	const [fromdate, setfromdate] = useState(date)
	const [todate, settodate] = useState(date)

	useEffect(() => {
		async function getpatients() {
			let params = {
				_fields: 'id,title,acf,date',
				per_page: 100,
			}
			if (fromdate) {
				params.after = fromdate + 'T00:00:00Z'
				params.before = todate + 'T23:59:00Z'
			}
			const url = 'https://ahumch.com/wp-json/wp/v2/out-patient/?'
			const p = new URLSearchParams(params).toString()

			const res = await fetch(url + p)
			const jsonData = await res.json()
			console.log(jsonData);
			setpatients(jsonData)
			setrefresh(false)
		}
		getpatients()

	}, [refresh])


	function handleSubmit() {

		setrefresh(true)
	}
	return (
		<div>
			From: <input type="date" value={fromdate} onChange={(e) => { setfromdate(e.target.value) }} />
			To: <input type="date" value={todate} onChange={(e) => { settodate(e.target.value) }} />
			<Button color='blue' onClick={handleSubmit}>Submit</Button>

			<br />

			{refresh ?
				<p style={{ padding: 20 }}><Icon loading size='huge' color='blue' name='spinner' /></p>
				:

				<List divided size='large'>
					{
						patients.length ?
							patients.map((item, index) => {
								return (

									<List.Item style={{ padding: 10 }} key={item.id}>
										<List.Content>
											<List.Header as='h4'>{item.title.rendered}</List.Header>
											<List.Description>Age: {item.acf.age} ({item.acf.gender})</List.Description>
											<List.Description>Doc: <b>{item.acf.doctor}</b></List.Description>
										</List.Content>
									</List.Item>
								)
							})
							: 'No patients found'
					}
				</List>

			}
		</div>
	)
}
