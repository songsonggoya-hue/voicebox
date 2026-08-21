import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoogleIcon from "./GoogleIcon";
import styles from "./AuthGate.module.css";

export default function AuthGate({ heading, description }) {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [loading, user, navigate]);

  function handleClick() {
    const confirmed = window.confirm(
      "구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?",
    );
    if (!confirmed) return;
    signInWithGoogle();
  }

  if (loading || user) return null;

  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
        <button type="button" className={styles.googleButton} onClick={handleClick}>
          <GoogleIcon className={styles.googleIcon} />
          구글 계정으로 계속하기
        </button>
      </div>
    </div>
  );
}
