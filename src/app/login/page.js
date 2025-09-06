import Link from "next/link";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import LoginComponent from "../component/registration/login/login";
import styles from "../component/registration/login/login.module.css";

export default function Login() {
    return (
        <div>
            <Navbar />
            <div className={styles.loginContainer}>
                <LoginComponent />
            </div>
            <Footer />
        </div>
    )
}