import Link from "next/link";
import styles from "./login.module.css";

export default function LoginComponent() {
    return (
        <div>
            <h2>Login to your account</h2>
         <p>
            In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account.
             If you do not have an account, registering for an account is free and simple.<Link href="login"> Click here</Link> to get started.
            </p>
            <p>If you signed up but didn't get your verification email, <Link href="/login">click here</Link> to have it resent.</p>
    <form>
        <div className={styles.labelContainer}>
            <label>Username </label>
        </div>
        <div className={styles.inputContainer}>
            <input type="text" name="username" />
        </div>
        <div className={styles.labelContainer}>
            <label>Password</label>
        </div>
        <div className={styles.inputContainer}>
            <input type="password" name="password" />
        </div>
        <div className={styles.buttonContainer}>
            <button type="submit">Login</button>
            <Link href="/login">Reset Password</Link>
        </div>
    </form>
            </div>
    )
}