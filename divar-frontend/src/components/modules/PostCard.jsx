import { sp } from "utils/customNumber";
import styles from "components/modules/PostCard.module.css"


const PostCard = ({post:{options,amount,images}}) => {
    return (
        <div className={styles.card}>
            <div className={styles.desc}>
                <p>{options.title}</p>
                <div>
                    <span>{sp(amount)}</span>
                    <span>{options.city}</span>
                </div>
            </div>
            <img src={`${import.meta.env.VITE_BASE_URL}${images[0]}`}/>
        </div>
    );
};

export default PostCard;