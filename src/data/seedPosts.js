// 확정된 홈 시안(home-시안.html)의 샘플 글 5건을 그대로 옮겼다.
// content는 카드 요약과 상세 본문에 공통으로 쓰는 단일 필드다(따로 지어낸 상세 본문 없음).
export const seedPosts = [
  {
    id: "seed-1",
    title: "골목 가로등이 며칠째 안 켜져요",
    content:
      "퇴근길에 지나는 골목 가로등이 일주일째 꺼져 있어서 밤에 너무 어둡습니다. 확인 부탁드려요.",
    status: "접수",
    field: "안전",
    author: "김민지",
    date: "2026.08.15",
    photo: null,
  },
  {
    id: "seed-2",
    title: "놀이터 그네가 삐걱거려요",
    content:
      "아이들이 타는 그네 체인에서 계속 삐걱대는 소리가 나요. 안전에도 문제가 있어 보입니다.",
    status: "처리중",
    field: "시설",
    author: "박준호",
    date: "2026.08.12",
    photo: null,
  },
  {
    id: "seed-3",
    title: "화단 옆 쓰레기가 계속 쌓여요",
    content:
      "화단 옆에 무단으로 버려지는 쓰레기가 많아 냄새도 나고 보기에도 좋지 않았는데 정리됐어요.",
    status: "완료",
    field: "환경",
    author: "이서연",
    date: "2026.08.05",
    photo: null,
  },
  {
    id: "seed-4",
    title: "버스 정류장 지붕이 부서졌어요",
    content:
      "지난 태풍 이후로 정류장 지붕 한쪽이 부서진 채로 방치되어 있어 비 오는 날 이용이 불편해요.",
    status: "처리중",
    field: "교통",
    author: "최우진",
    date: "2026.08.10",
    photo: null,
  },
  {
    id: "seed-5",
    title: "공원 벤치 페인트가 벗겨졌어요",
    content:
      "공원 벤치 페인트가 많이 벗겨져서 옷이 더러워질까 걱정했는데 깔끔하게 새로 칠해주셨네요.",
    status: "완료",
    field: "시설",
    author: "정하늘",
    date: "2026.07.28",
    photo: null,
  },
];
