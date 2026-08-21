import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useToast } from "../context/ToastContext";
import styles from "./AuthCallbackPage.module.css";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [error, setError] = useState(null);
  const handledRef = useRef(false);

  useEffect(() => {
    function finish(user) {
      if (handledRef.current) return;
      handledRef.current = true;

      const createdAt = new Date(user.created_at).getTime();
      const lastSignInAt = new Date(user.last_sign_in_at).getTime();
      const isNewUser = lastSignInAt - createdAt < 10000;

      showToast(isNewUser ? "가입을 마쳤습니다. 환영해요!" : "로그인되었습니다.");
      navigate("/", { replace: true });
    }

    supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (sessionError) {
        setError(sessionError.message);
        return;
      }
      if (data.session) finish(data.session.user);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) finish(session.user);
    });

    return () => subscription.subscription.unsubscribe();
  }, [navigate, showToast]);

  return (
    <div className={styles.page}>
      {error ? `로그인에 실패했어요: ${error}` : "로그인 처리 중..."}
    </div>
  );
}
