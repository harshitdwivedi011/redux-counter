import { useDispatch, useSelector } from "react-redux";
import { savePost, incrementLike } from "../redux/CounterSlice";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "./Tooltip";

const Post = () => {
    const Liked = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [resultPost, setResultPost] = useState([]);
    const handleSavePost = () => {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let content = document.querySelector('#content').value;
        const post = { title, author, content };
        setResultPost(prevResultPost => [...prevResultPost, post]);
        dispatch(savePost(post));
        clearFieldsByID(['#title', '#author', '#content']);
    };
    const clearFieldsByID = ([...ids]) => {
        for (let id of ids)
            document.querySelector(id).value = '';
    }
    return (
        <>
            <div className="container">
                <div className="formEntry" style={{ textAlign: 'center' }}>
                    <h1>Add a Post</h1>
                    <h3>Write a title</h3>
                    <input className="enterValue" id="title" placeholder="Enter title" />
                    <h3>Author Name</h3>
                    <input className="enterValue" id="author" placeholder="Enter Author" />
                    <h3>Add Content</h3>
                    <input className="enterValue" id="content" placeholder="Enter Content" />
                    <button onClick={handleSavePost}>Save Post</button>
                </div>
            </div>

            <div className="ResultContainer">
                {resultPost.map((post, index) => (
                    <div key={index} className="posts" id={`post-${index++}`}>
                        <h2>{post.title}</h2>
                        <i> {post.author}</i>
                        <p>{post.content}</p>
                        <div>
                            <button id="LikePost" onClick={() => dispatch(incrementLike())}><Tooltip text="Like"><FontAwesomeIcon icon={faThumbsUp} style={{ color: "#FFD43B" }} /></Tooltip></button>
                            <span>{Liked}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Post;