import React from 'react'
import Menu from "./components/Menu";
import Footer from './components/Footer';
import Student from './components/Student';

function App() {

	const x = 5
	const y = 6
	var fname = "Raju"

	const data = [
		{ name: "apple", phone: "123", town: "NDK" },
		{ name: "bat", phone: "456", town: "NDK" }
	]



	return (
		<>

			<Menu />

			<h1>Hello world</h1>
			<p>sakdg oasihasd7</p>

			<Student name="Ramesh" phone="8498000172" town="NDK" />
			<Student name="Suresh" phone="2134567890" town="Bollavaram" />

			{
				data.map((item) => (
					<Student key={item.name} name={item.name} phone={item.phone} town={item.town} />
				))
			}

			<h2>{x + y}</h2>

			<h1>{fname}</h1>
			<p>lorem100</p>
			<hr />

			<Footer />
		</>

	);
}

export default App;
