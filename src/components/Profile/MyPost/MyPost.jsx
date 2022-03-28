import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post name="Anton" message='Hi, how are you?' like='15' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
            <Post name="Dima" message="It's my first post" like='20' />
        </div>
    )
}

export default MyPost;