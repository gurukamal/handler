import React from 'react'
const Child = (props) =>{
	return(
		<div>
		<div className="get">
	       	<img src={props.image} />
			<h4>{props.title}</h4>
			<h4>{props.description}</h4>
			</div>
			<div className="in">
			Title:<input type="text"  onChange={props.handleTitle}/><br />  
			Image:<input type="text"  onChange={props.handleImage}/><br />  
			Description:<input type="text"  onChange={props.handleDescription}/> <br /> 
			
			<button className="click" onClick={
				props.Add
			 }>Add</button> 
			 <button className="click" onClick={
			props.Delete 
		    }>Delete</button> 
		    </div>    
		</div>

	);
}
export default Child;