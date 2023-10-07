import React, {Component} from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall (props){
return  <div>
                <Link className="addicon" onClick = {props.onNavigate} to = "/AddPhoto"> </Link>
                {/*<button onClick = {props.onNavigate} className="addicon">  </button>*/}
                <div className="photo-grid">
                    {props.posts
                    .sort(function(x,y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key = {index} post = {post} {...props} index={index} /* onRemovedPhoto = {props.onRemovedPhoto} *//>)}
                </div>
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, 
    onRemovedPhoto: PropTypes.func.isRequired
}

export default PhotoWall