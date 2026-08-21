import AuthGate from "../components/AuthGate";

export default function SignupPage() {
  return (
    <AuthGate
      heading="회원가입"
      description="구글 계정 하나로 간편하게 가입하고 바로 시작해보세요."
    />
  );
}
