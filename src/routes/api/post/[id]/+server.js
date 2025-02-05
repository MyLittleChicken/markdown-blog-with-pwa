export async function GET({ params }) {
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
			id: params.id,
			title: 'SvelteKit SSR 테스트' + params.id,
			content: '# header   \n**bold** _italic_ ~~strikethrough~~ [link](https://undertopia.com)   \n   ```\nhello world!\n``` \n   > quote \n\n\n `inline code!`    \n\n# header   \n**bold** _italic_ ~~strikethrough~~ [link](https://undertopia.com)   \n   ```\nhello world!\n``` \n   > quote \n\n\n `inline code!`',
			image_src: '/images/image@default.jpg',
			image_name: 'default-image'
		}),
		{
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		}
	);
}