import React, { useEffect, useState } from 'react'

export default function GetCats() {
	const [clist, setcList] = useState([])
	const [posts, setPosts] = useState([])
	const [cat, setCat] = useState(null)
	const [catloading, setcLoading] = useState(true)
	const [postloading, setpLoading] = useState(true)

	// we are fetching categories
	useEffect(() => {
		async function loadCat() {
			const res = await fetch('https://telugunewsadda.com/wp-json/wp/v2/categories?_fields=id,name')
			const jsonData = await res.json()
			setcList(jsonData)
			setcLoading(false)
			setpLoading(false)
		}
		loadCat()
	}, [])

	// we are fetching posts
	useEffect(() => {
		async function loadposts() {
			setpLoading(true)
			let URL = 'https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=title'
			if (cat) {
				URL += '&categories=' + cat
				const response = await fetch(URL)
				const jsonData = await response.json()
				setPosts(jsonData)
				setpLoading(false)
			}
		}
		loadposts()
	}, [cat])


	return (
		<div>
			{
				catloading ? "Loading categories..." :
					clist.map((item) => {
						return (<button onClick={() => { setCat(item.id) }}>{item.name} </button>)
					})
			}

			<hr />

			{
				postloading ? "Loading News articles..." :
					posts.map((item, index) => {
						return (<p key={index}>{index + 1}) {item.title.rendered}</p>)
					})
			}


		</div>
	)
}
