import React from 'react';
import classes from '../css/styles.css'

const NewsItem = ({item})=> {

    return (
        <div className={classes.news_item}>
            <h3>{item.title}</h3>
            <h4>{item.feed}</h4> 
        </div>

    ); 


}

export default NewsItem; 