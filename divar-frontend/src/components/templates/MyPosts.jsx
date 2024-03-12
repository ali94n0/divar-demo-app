import useMyPosts from "src/hooks/useMyPosts";
import Loader from "../modules/Loader";
import Post from "../modules/Post";
import styles from "components/templates/MyPosts.module.css"


const MyPosts = () => {
    const { isLoading, posts } = useMyPosts()
    
    return (
        <div className={styles.myPostsContainer}>
            <h3>اگهی های من</h3>
            <div className={styles.postsList}>
                {isLoading ? (<Loader />) : (
                    posts.map(post => <Post key={post._id} post={post} />)
                )}
            </div>
        </div>
    );
};

export default MyPosts;