import { sp } from "utils/customNumber";
import styles from "components/modules/Post.module.css"
import useRemovePost from "src/hooks/useRemovePost";


const Post = ({ post }) => {
    const {isDeleting,deleting}=useRemovePost()


    const removeHandler = async () => {
        await deleting(post._id)  
    }

    return (
        <div className={styles.postContainer}>
            <div className={styles.content}>
                <img src={`${import.meta.env.VITE_BASE_URL}${post?.images[0]}`} />
            <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
            </div>
            </div>
            <div className={styles.details}>
                <div >
                <p>{new Date(post.createdAt).toLocaleDateString("fa-ir")}</p>
                <span>{sp(post.amount)}&nbsp;تومان</span>
                </div>
                <button disabled={isDeleting} onClick={removeHandler}>حذف</button>
            </div>
            
        </div>
    );
};

export default Post;