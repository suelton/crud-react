import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;

        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        });

        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    
    render(){
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <input required type="text" placeholder="Enter Post title" ref={(input) => this.getTitle = input}/> <br/><br/>
                    <textarea required rows="5" cols="28" placeholder="Enter post" ref={(input) => this.getMessage = input}/> <br/><br/>
                    <button>Post</button>                    
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state
    }
}
export default connect(mapStateToProps)(PostForm);