import React, {Component} from "react";
import {Link} from "react-router-dom";
class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.link.value
        const description = event.target.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            /* this.props.onAddPhoto(post) */
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
        }
    }
    
    render() {
        return (
    <div>
        {<h1> <Link to = '/'> Photowall</Link> </h1>}
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder = "Link" name="link"/>
                <input type="text" placeholder = "Description" name="description"/>
                <button> Post </button>
            </form>
        </div>
    </div>
    )
    }
}

export default AddPhoto;