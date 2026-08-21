import { Link } from "react-router-dom";
import { ORG_NAME, ICON_PATH } from "../constants/brand";
import { useAuth } from "../context/AuthContext";
import styles from "./Header.module.css";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src={ICON_PATH} alt="" className={styles.icon} />
        <span className={styles.orgName}>{ORG_NAME}</span>
      </Link>

      <div className={styles.actions}>
        {user ? (
          <Link to="/mypage" className={styles.avatarLink} aria-label="마이페이지">
            <img
              src={user.user_metadata?.avatar_url}
              alt=""
              className={styles.avatar}
              referrerPolicy="no-referrer"
            />
          </Link>
        ) : (
          <>
            <Link to="/login" className={styles.loginButton}>
              로그인
            </Link>
            <Link to="/signup" className={styles.signupButton}>
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
