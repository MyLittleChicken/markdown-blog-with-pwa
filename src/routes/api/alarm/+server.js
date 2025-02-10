export async function GET() {
	/**
	 * 서버측 코드가 작성되는 부분
	 * 현재는 목데이터로 작성되어있음
	 * 실제 서버에 배포된 환경에서는 실제 Nginx를 통해 SpringBoot로 구현된 WAS로 요청을 리버스 프록시하여
	 * 백엔드 개발자가 구현한 API와 연동하여 데이터를 가져올 수 있음
	 * 이를 토대로 프론트엔드 개발자는 규약된 API 스펙을 통해 목데이터를 작성, 화면 개발을 이어나갈 수 있으며
	 * 백엔드 개발자는 프론트엔드 개발자와 작업공간을 분리하여 언어, 프레임워크의 제약없이 개발을 진행할 수 있을 것으로 예상됨
	 */
	return new Response(
		JSON.stringify({
			alarm: [
				{id: 15, title: "알람15", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 14, title: "알람14", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 13, title: "알람13", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 12, title: "알람12", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 11, title: "알람11", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 10, title: "알람10", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 9, title: "알람9", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 8, title: "알람8", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 7, title: "알람7", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 6, title: "알람6", content: "내용", is_read: false, create_date: "2025-02-10 11:59"},
				{id: 5, title: "알람5", content: "내용", is_read: false, create_date: "2025-02-10 11:01"},
				{id: 4, title: "알람4", content: "내용", is_read: false, create_date: "2025-02-10 10:59"},
				{id: 3, title: "알람3", content: "내용", is_read: true, create_date: "2025-02-10 10:39"},
				{id: 2, title: "알람2", content: "내용", is_read: true, create_date: "2025-02-10 10:20"},
				{id: 1, title: "알람1", content: "내용", is_read: false, create_date: "2025-02-10 10:01"},
			]
}),
		{
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		}
	);
}