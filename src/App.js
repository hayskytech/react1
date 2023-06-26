import React, { useState } from 'react'
import Calculator from './components/Calculator';
import Student from './components/Student';
import Table from './components/Table';

function App() {

	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	

	
	return (
		<>
			<h1>Tables</h1>
			
			
			{
				data.map((item) => (
					<Table key={item} n={item} />
				))
			}
		</>
	)
}

export default App;
