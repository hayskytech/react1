import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddPost from './myapi/AddPost'
import GetPosts from './myapi/GetPosts'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './Layout'
import CatFacts from './tools/CatFacts'

export default function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="catfacts" element={<CatFacts />} />
						{/* <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
