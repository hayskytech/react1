import React from 'react'
import Header from './school/Header'
import Footer from './school/Footer'
import StudentList from './student/StudentList'

export default function App() {

	return (
		<div>
			<Header />

			<StudentList />

			<Footer />
		</div>
	)
}
