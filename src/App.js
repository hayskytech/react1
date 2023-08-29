import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';
import TodoListLocal from './pages/TodoListLocal';
import Inpatients from './hospital/Inpatients';

export default function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="hospital" element={<Inpatients />} />
						<Route path="todo" element={<TodoListLocal />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

function Layout() {
	return (
		<div>
			<Menu compact inverted fluid icon='labeled' widths={5}>
				<Menu.Item>
					<Icon name='home' />
					<Link to="/">Home</Link>
				</Menu.Item>

				<Menu.Item>
					<Icon name='user' />
					<Link to="/about">About</Link>
				</Menu.Item>

				<Menu.Item>
					<Icon name='handshake' />
					<Link to="/contact">Contact</Link>
				</Menu.Item>

				<Menu.Item>
					<Icon name='building' />
					<Link to="/hospital">Hospital</Link>
				</Menu.Item>

				<Menu.Item>
					<Icon name='list' />
					<Link to="/todo">Todo List</Link>
				</Menu.Item>
			</Menu>

			<Outlet />
		</div>
	)
}