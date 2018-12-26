import React, { Component} from 'react';

import '../css/styles.css';

// const getYear = () => {

//     const newDate = new Date();
//     return newDate.getFullYear();
// };

const user = {

    name: 'Francis',
    lastname: 'Jones',
    age: 16

}; 


class Header extends Component{

    state = {
       
       keywords: ''
    }; 

    

    inputChangeHandler(event){
       
        this.setState({
            
            keywords: event.target.value
        });
    }

    

    render(){
        
        
        return (
            <header  >
                <div className="logo"
                    onClick = { ()=> {
                        console.log("I was clicked");
                    }}
                
                >Logo</div>
                <input type="text" onChange={ 
                    this.inputChangeHandler.bind(this)
                 }
                 />
                 
                 
            </header>
        )
    }

}



export default Header; 