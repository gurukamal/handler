import React, { Component } from 'react';
import Child from './Child';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
       "product" :[
            {"image":"https://michaelkors.scene7.com/is/image/MichaelKors/CS85GN64HA-2648_2?$categoryMediumNew$",
            "title": "Michael Kors Mens", 
            "description":"Jersey polo shirt"
            },
            {
            "image" :"https://michaelkors.scene7.com/is/image/MichaelKors/CR86KN64KV-0436_2?$categoryMediumNew$",
            "title": "Michael Kors Mens", 
            "description":"Cotton pique t-shirt"
            },
            {"image" :"https://michaelkors.scene7.com/is/image/MichaelKors/CS95H81679-2415_2?$categoryMediumNew$" ,
            "title": "Michael Kors Mens", 
            "description":"Logo cotton-jersey t-shirt"
            },
            {
            "image" : "https://michaelkors.scene7.com/is/image/MichaelKors/CS95HEG4GE-0436_2?$categoryMediumNew$",
            "title": "Michael Kors Mens", 
            "description":"Camouflage Aviator-Print Concert T-Shirt"
            }
        ],
        "Data":[
        
      ]
      }
  }
  Delete=()=>{
    let tempItem = this.state.product;
    tempItem.splice(this.state.index,1);
    
    this.setState({product:tempItem});
    }

    handleImage =(event)=>{
      console.log(event.target.value)

    }

     handleTitle =(event)=>{
      console.log(event.target.value)
      this.setState({title:event.target.value})
      console.log(this.state.title)
    }

     handleDescription =(event)=>{
      console.log(event.target.value)
      this.setState({description:event.target.value})
    }

   Add = () =>{
    console.log('add');
    const image = this.state.image;
    const title = this.state.title;
    const description = this.state.description;
    const myItem = this.state.product;
    myItem.concat({image,title,description});
    
    this.setState({product:myItem});
   }

  render() {
    console.log(this.state.product)
    return(
      <div> { 
              this.state.product.map((product,index) => {
                  return (<Child 
                       image={product.image} 
                       title={product.title}
                       description={product.description}
                       Delete={this.Delete}
                       Add={this.Add}
                       handleTitle={this.handleTitle}
                       handleImage={this.handleImage}
                       handleDescription={this.handleDescription}
                      />)
                  }         
                )
          }
      </div>
    );
  }
}
export default App;