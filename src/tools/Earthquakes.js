import React, { useEffect, useState } from 'react'

export default function Earthquakes() {
	const [list, setList] = useState([])
	useEffect(() => {
		async function getFacts() {
			const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02')
			const jsonData = await response.json()
			setList(jsonData.features)
		}
		getFacts()
	}, [])



	return (
		<div>
			{
				list.map((item) => <p>{item.properties.place}</p>)
			}
		</div>
	)
}
