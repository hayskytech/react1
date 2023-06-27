import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import './Menu.css'
import LoadTables from '../components/LoadTables'
import Calculator2 from '../components/Calculator'

function ShowHide() {

	const [page,setPage] = useState("Home")
	
	function changePage(event){
		setPage(event.target.innerText)
	}

	return (
		<div>
			<div className="menu">

			<button onClick={changePage}>Home</button>
			<button onClick={changePage}>About</button>
			<button onClick={changePage}>Services</button>
			<button onClick={changePage}>Tables</button>
			<button onClick={changePage}>Calculator</button>
			</div>

			{page=="Home" && <Home/>}
			{page=="About" && <About/>}
			{page=="Services" && <Services/>}
			{page=="Tables" && <LoadTables/>   }
			{page=="Calculator" && <Calculator2/>   }
		</div>
	)
}

export default ShowHide
