import React /*{Component} //dont need it when using function*/ from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
//classes are cleaner to use

function Photo(props){
    const post = props.post
    return  <figure className="figure">
                <Link to = {`/single/${post.id}`}><img className="photo" src={post.imageLink} alt= {post.description}/></Link>
                
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className="button-container">
                <button onClick={() => {
/*                     props.onRemovedPhoto(post)
*/                   props.startRemovingPost(props.index, post.id) 
                    props.history.push('/')
                }}> Remove </button>
                <Link className="button" to = {`/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0 }
                    </div>
                </Link>
                </div>
                </figure>
}

/*class Photo extends Component { //That is another way by class instead of function!
    render(){
       
    }
}*/

Photo.propTypes ={
    post: PropTypes.object.isRequired,
}

export default Photo;