import AuthGate from "../components/AuthGate";

export default function LoginPage() {
  return (
    <AuthGate
      heading="로그인"
      description="구글 계정으로 로그인하고 우리 동네 이야기에 참여해보세요."
    />
  );
}
