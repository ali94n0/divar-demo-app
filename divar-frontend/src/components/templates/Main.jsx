import usePostsList from "hooks/usePostsList";
import PostCard from "components/modules/postCard";
import styles from "components/templates/Main.module.css"
import Loader from "components/modules/Loader";


const Main = () => {
    const {isLoading, posts}=usePostsList()
    
    return (
        <>
        { isLoading ?<Loader/> : <div>
            <div className={styles.mainContainer}>
            {posts.map(post => <PostCard key={post._id} post={post}/>)}
        </div>
    </div>
}
        </>
       
    );
};

export default Main;