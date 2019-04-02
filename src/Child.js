import React from 'react'
const Child = (props) =>{
	return(
		<div>
	       	<img src={props.image} />
			<h4>{props.title}</h4>
			<h4>{props.description}</h4>
			<button onClick={
			props.Delete 
		    }>Delete</button>
			Title:<input type="text"  onChange={props.handleTitle}/>  
			Image:<input type="text"  onChange={props.handleImage}/>  
			Description:<input type="text"  onChange={props.handleDescription}/>  
			<button onClick={
				props.Add
			 }>Add</button>      
		</div>

	);
}
export default Child;