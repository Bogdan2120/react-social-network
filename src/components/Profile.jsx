import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="" alt=""/></div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>

    );
}

export default Profile;