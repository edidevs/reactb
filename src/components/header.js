import React, { Component} from 'react';

import classes from '../css/styles.css';

// const getYear = () => {

//     const newDate = new Date();
//     return newDate.getFullYear();
// };

const user = {

    name: 'Francis',
    lastname: 'Jones',
    age: 16

}; 


const Header = (props) => {

    // state = {
       
    //    keywords: ''
    // }; 

    

    // inputChangeHandler(event){
       
    //     this.setState({
            
    //         keywords: event.target.value
    //     });
    // }

    

   
        
        
        return (
            <header  >
                <div className={classes.logo}
                    onClick = { ()=> {
                        console.log("I was clicked");
                    }}
                
                >Logo</div>
                <input type="text" onChange={ 
                    props.keywords
                 }
                 />
                 
                 
            </header>
        )
    }





export default Header; 