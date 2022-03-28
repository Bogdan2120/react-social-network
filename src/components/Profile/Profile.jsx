import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import BackgroundAvatar from "./BbackgroundAvatar/BackgroundAvatar";
import Avatar from "./Avatar/Avatar";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
    return (
        <div>
            <BackgroundAvatar />
            <Avatar />
            <ProfileDescription />
            <MyPost />
        </div>
    );
}

export default Profile;