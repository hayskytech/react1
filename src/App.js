import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'

import GetPosts from './myapi/GetPosts'
import GetCats from './myapi/GetCats'

export default function App() {

	return (
		<div>
			<GetCats />
		</div>
	)
}
