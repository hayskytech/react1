import React, { useEffect, useState } from 'react'
import './News.css'
export default function News() {


	const [list, setList] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=id,title,jetpack_featured_media_url&per_page=10');
			const jsonData = await response.json();

			setList(jsonData);
		};

		fetchData();
	})

	return (
		<div>
			{
				list.map((item) => {
					return (
						<div id='newsitem'>
							<img src={item.jetpack_featured_media_url} />
							<p>{item.title.rendered}</p>
						</div>
					)
				})
			}
		</div>
	)
}
