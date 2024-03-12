import { useState } from 'react';

import useCategories from 'src/hooks/useCategories';
import Loader from '../modules/Loader';
import useCreateAd from 'src/hooks/useCreateAd';
import styles from "components/templates/AddNewPost.module.css"

const initialPostValue = {
    title: '',
    content: "",
    amount: '',
    city: '',
    category: "",
    image:""

}

const AddNewPost = () => {
    const [postData, setPostData] = useState(initialPostValue)
    const { isLoading, categories } = useCategories()
    const {isCreatingPost,creatingPost}=useCreateAd()
    
    const changeHandler = (e) => {
        if (e.target.name !== "image") {
            setPostData({...postData,[e.target.name]:e.target.value})
        } else {
            const formData = new FormData()
             formData.append(e.target.name, e.target.files[0])
            setPostData({...postData,[e.target.name]:formData})
        }
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        await creatingPost(postData, {
            onSuccess: (res) => {
                if (res) {
                    setPostData(initialPostValue)
                    
                }
        }
    })
}


    return (
        <div className={styles.newPostContainer}>
            <h3>ثبت اگهی جدید</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'>عنوان</label>
                    <input type='text' id='title' name='title' required value={postData.title} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='content'>توضیحات</label>
                    <textarea type='text' id='content' name='content' required value={postData.content} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='amount'>قیمت</label>
                    <input type='number' id='amount' name='amount' required value={postData.amount} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='city'>شهر</label>
                    <input type='text' id='city' name='city' required value={postData.city} onChange={changeHandler}/>
                </div>
                <div>
                    <label>دسته‌بندی</label>
                    {isLoading ? <Loader /> : <select name='category' required value={postData.category} onChange={changeHandler}>
                        {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
                    </select>}
                </div>
                <div>
                    <label htmlFor='image'>تصویر</label>
                    <input type='file' id='image' name='image' required onChange={changeHandler}/>
                </div>
                <button disabled={isCreatingPost} type='submit'>ثبت اگهی</button>

            </form>
        </div>
    );
};

export default AddNewPost;