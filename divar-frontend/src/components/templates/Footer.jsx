import { Link } from 'react-router-dom';
import styles from "components/templates/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>developed&nbsp;by&nbsp;<Link to={"https://github.com/ali94n0"}>ali94n0</Link>&nbsp;with&nbsp;💜
            </span>
        </footer>
    );
};

export default Footer;