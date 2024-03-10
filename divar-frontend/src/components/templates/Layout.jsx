import React from 'react';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import useUser from 'hooks/useUser';
import styles from "components/templates/Layout.module.css"

const Layout = ({ children }) => {
    const {  user } = useUser()
    

    return (
        <div className={styles.container}>
            <Header data={user} />
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;