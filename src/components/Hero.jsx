import { Link, useNavigate } from "react-router-dom";
import { SERVICE_NAME, SERVICE_TAGLINE } from "../constants/brand";
import { useAuth } from "../context/AuthContext";
import styles from "./Hero.module.css";

// 「의견 남기기」는 서비스 전체에서 유일한 글쓰기 진입점이다. 다른 화면에 복제하지 않는다.
export default function Hero() {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleClick(e) {
    if (!user) {
      e.preventDefault();
      navigate("/login");
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>{SERVICE_NAME}</div>
      <h1 className={styles.title}>{SERVICE_TAGLINE}</h1>
      <Link to="/write" className={styles.cta} onClick={handleClick}>
        의견 남기기
      </Link>
    </section>
  );
}
