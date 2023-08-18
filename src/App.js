import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import AddPost from './myapi/AddPost'
import GetPosts from './myapi/GetPosts'


export default function App() {

	return (
		<div>
			<GetPosts />
		</div>
	)
}
