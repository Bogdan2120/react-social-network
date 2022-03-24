import s from './Post.module.css'



const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://mpng.subpng.com/20180624/jbq/kisspng-computer-icons-avatar-icon-design-clip-art-5b2f2383a30ea9.6287245615298159396679.jpg"/>
            <span>Name: {props.name} </span>
            <span>Massage: {props.message} </span>
            <span>Like: {props.like} </span>
        </div>
    )
}

export default Post;