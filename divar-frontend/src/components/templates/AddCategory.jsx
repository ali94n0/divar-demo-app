import  { useState } from 'react';
import toast from 'react-hot-toast';
import useCreateCategory from 'hooks/useCreateCategory';
import styles from "components/templates/AddCategory.module.css"


const initialValue={
        name: '',
        slug: '',
        icon:''
    }
const AddCategory = () => {
    const [category, setCategory] = useState(initialValue)
    const{isCreating,creating}=useCreateCategory()
    const changeHandler = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await creating(category, {
                onSuccess: () => {
                   
                        setCategory(initialValue)
                    
                }
            })
        } catch (error) {
            toast.error("ثبت دسته‌بندی جدید با خطا مواجه شده است")
        }
    }



    return (
        <div className={styles.formContainer}>
            <h3>افزودن دسته‌بندی جدید</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>نام دسته‌بندی</label>
                    <input required type='text' name='name' id="name" value={category.name} onChange={(e)=>changeHandler(e)} />
                </div>
                <div>
                    <label htmlFor='slug'>تگ دسته‌بندی</label>
                    <input required type='text' name='slug' id="slug" value={category.slug} onChange={(e)=>changeHandler(e)} />
                </div>
                <div>
                    <label htmlFor='icon'>ایکون دسته‌بندی</label>
                    <input required type='text' name='icon' id="icon" value={category.icon} onChange={(e)=>changeHandler(e)} />
                </div>
                <button disabled={isCreating} type='submit'>ثبت</button>
            </form>
        </div>
    );
};

export default AddCategory;