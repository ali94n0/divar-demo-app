import toast from 'react-hot-toast';

import useCategories from 'src/hooks/useCategories';
import Loader from 'components/modules/Loader';
import Category from 'components/modules/category';
import useRemoveCategory from 'src/hooks/useRemoveCategory';
import styles from "components/templates/CategoriesList.module.css"


const CategoriesList = () => {
    const { isLoading, categories } = useCategories()
    const{isDeleting,deleting}=useRemoveCategory()

    const deleteHandler = async (id) => {
        try {
            await deleting({id})
        } catch (error) {
            toast.error("حذف دسته‌بندی با خطا مواجه شد")
        }
    }
    
    if(isLoading)return <Loader/>
    return (
        <div className={styles.categoriesList}>
            <h3>لیست دسته‌بندی ها</h3>
            {categories.map(category => <Category key={category._id} category={category} deleteHandler={deleteHandler} isDeleting={isDeleting} />)}
        </div>
    );
};

export default CategoriesList;