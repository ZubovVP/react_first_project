import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, text: 'Hi. how are you?', likesCount: 10},
        {id: 2, text: 'It\'s my first post', likesCount: 15},
    ];

    let postsElements = posts.map(post => <Post message={post.text} likeCount={post.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;