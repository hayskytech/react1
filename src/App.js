import React from 'react'
import Menu from "./Menu";
import Footer from './Footer';

function App() {

	const x = 5
	const y = 6
	var fname = "Raju"

	return (
		<>

			<Menu />

			<h1>Hello world</h1>
			<p>sakdg oasihasd7</p>

			<h2>{x + y}</h2>

			<h1>{fname}</h1>
			<p>lorem100</p>
			<hr />

			<Footer/>
		</>

	);
}

export default App;
