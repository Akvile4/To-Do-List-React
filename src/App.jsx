import React, { useState } from "react"
import { CustomForm } from './components/CustomForm';
import {ItemsContainer} from './components/ItemsContainer';
import './App.css';


const App = () => {
		const [list,setList] = useState([])

		// const formos_handleris = (itemas) => {
		//   // setList([...list, { value: itemas, complete: false}])
		//   alert()
		//   console.log()
		// }

		const handleForm = (item) => {
			setList([...list, { value: item, complete: false}])
		}

		const handleRemove = (index) => {
			let temp = [...list]
			temp.splice(index, 1)
			setList(temp)
		}

		const handleComplete = (index) => {
			let temp = [...list]
			//  do any mutations...
			temp[index].complete= !temp[index].complete
			// set temp back to state
			setList(temp)
		}

		return (
				<div>
						<h1>My List</h1>
						{/* <CustomForm handleForm={formos_handleris} /> */}
						<div className="form">
							<CustomForm handleForm={handleForm} />
						</div>
						<ItemsContainer list={list} handleRemove={handleRemove} handleComplete={handleComplete} /> 
				</div>
		)
}

export default App;
