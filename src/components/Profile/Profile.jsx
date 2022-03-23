import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="" alt=""/></div>
            <div>
                ava + description
            </div>
            <MyPost />
        </div>

    );
}

export default Profile;