import React, { useState } from 'react';

const initialPostValue = {
    title: '',
    content: "",
    amount: '',
    city: '',
    category: null,
    image:null

}

const AddNewPost = () => {
    const [postData, setPostData] = useState(initialPostValue)
    
    const changeHandler = (e) => {
        if (e.target.name !== "image") {
            setPostData({...postData,[e.target.name]:e.target.value})
        }
    }
console.log(postData);
    return (
        <div>
            <h3>ثبت اگهی جدید</h3>
            <form>
                <div>
                    <label htmlFor='title'>عنوان</label>
                    <input type='text' id='title' name='title' value={postData.title} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='content'>توضیحات</label>
                    <textarea type='text' id='content' name='content' value={postData.content} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='amount'>قیمت</label>
                    <input type='number' id='amount' name='amount' value={postData.amount} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='city'>شهر</label>
                    <input type='text' id='city' name='city' value={postData.city} onChange={changeHandler}/>
                </div>
            </form>
        </div>
    );
};

export default AddNewPost;