import { Link, useNavigate } from 'react-router-dom';
import styles from "components/templates/Header.module.css";
import { useState } from 'react';

const Header = ({ data: user }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate=useNavigate()

    const logoutHandler = () => {
        document.cookie = "accessToken" + '=; Max-Age=0';
        document.cookie = "refreshToken" + '=; Max-Age=0'

        navigate("/", { replace: true })
        navigate(0)
    }

    return (
        <header className={styles.header}>
            
            <div>
                <Link to="/">
                <img src='divar.svg' alt='divar-app' className={styles.logo}/>
                </Link>
                <span>
                    <img src='location.svg' alt='divar-location'  />
                    <p>شیراز</p>
                </span>
            </div>
            <div>
                {user ? (<div onClick={()=>setIsOpen(prev=>!prev)} className={styles.mydivar}>
                    <img src='profile.svg' alt='divar-profile' />
                    {user ? <p>
                        دیوار من
                    </p> : <p>ورود</p>}
                    <div className={isOpen ? styles.open : styles.close}>
                        <ul>
                            <li>
                                <Link to="/dashboard">پنل کاربری</Link>
                            </li>
                            {(user?.role === "ADMIN") && <li>
                                <Link to="/admin">پنل ادمین</Link>
                            </li> }
                            <li onClick={logoutHandler}>
                                <p className={styles.logout}>خروج</p>
                            </li>
                        </ul>
                    </div>
                </div>) : (
                        <Link to="/auth" >
                    <img src='profile.svg' alt='divar-profile' />
                    {user ? <p>
                        دیوار من
                    </p> : <p>ورود</p>} </Link>
                    ) }
                
                <Link to="dashboard" className={styles.btn}>
                    ثبت اگهی
                </Link>

            </div>
        </header>
    );
};

export default Header;