import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.text} likeCount={post.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;