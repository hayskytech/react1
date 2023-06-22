import React, { useState } from 'react'
import Calculator from './components/Calculator';
import Student from './components/Student';

function App() {

	const data = [
		{ name: "Ramesh", phone: "1111", town: "NDK" },
		{ name: "Suresh", phone: "2222", town: "KNL" }
	]


	return (
		<>


			{data.map((item) => (
				<Student key={item.name} item={item} />
			))}


		</>

	);
}

export default App;
