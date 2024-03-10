import styles from "components/modules/Category.module.css"

const Category = ({ category,deleteHandler ,isDeleting}) => {

    return (
        <div className={styles.category}>
            <div>
                <img src={`${category.icon}.svg`} />
                <p>{category.name}</p>
            </div>
            <div>
                <p>تگ: {category.slug}</p>
                <button disabled={isDeleting} onClick={()=>deleteHandler(category._id)}>حذف</button>
            </div>
        </div>
    );
};

export default Category;