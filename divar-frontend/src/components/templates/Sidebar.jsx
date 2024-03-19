import styles from "components/templates/Sidebar.module.css"

import { useSearchParams } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";


const Sidebar = ({ categories }) => {
    const[searchParams,setSearchParams]=useSearchParams()
    
    const clickHandler = (slug) => {
        
        searchParams.set("category", slug)
        setSearchParams(searchParams)
    }
    return (
        <aside >
            <div className={styles.sidebarContainer}>
                <p>دسته‌بندی ها</p>
                <ul>
                    <li onClick={() => clickHandler("")} >
                        <HiOutlineViewGrid className={styles.icon} />
                    <p>همه</p>
                    </li>
                {categories.map(category => <li onClick={()=>clickHandler(category.slug)}   key={category._id}>
                    <img src={`${category.icon}.svg`} />
                    <p>{category.name}</p>
                </li>)}
            </ul>
            </div>
        </aside>
    );
};

export default Sidebar;