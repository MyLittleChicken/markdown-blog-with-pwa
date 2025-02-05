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
			boards: [
				{
					id: 1,
					title
						:
						'SvelteKit SSR 테스트',
					content
						:
						'이것은 **서버 사이드 렌더링** 테스트입니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 2,
					title
						:
						'Flowbite-Svelte 활용',
					content
						:
						'Flowbite-Svelte를 사용하여 UI를 쉽게 제작해보세요.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 3,
					title
						:
						'SvelteKit 시작하기',
					content
						:
						'SvelteKit을 사용하여 빠르게 웹 애플리케이션을 개발해보세요.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 4,
					title
						:
						'Svelte의 장점',
					content
						:
						'Svelte는 **컴파일 단계**에서 많은 최적화를 수행합니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 5,
					title
						:
						'SvelteKit과 SEO',
					content
						:
						'SvelteKit을 사용하면 **SEO** 최적화가 용이합니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 6,
					title
						:
						'SvelteKit의 라우팅',
					content
						:
						'SvelteKit은 파일 기반 라우팅을 지원합니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 7,
					title
						:
						'SvelteKit의 데이터 페칭',
					content
						:
						'SvelteKit에서는 **load** 함수를 사용하여 데이터를 페칭할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 8,
					title
						:
						'SvelteKit의 프리렌더링',
					content
						:
						'SvelteKit은 **프리렌더링**을 지원하여 정적 사이트를 생성할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 9,
					title
						:
						'SvelteKit의 어댑터',
					content
						:
						'SvelteKit은 다양한 **어댑터**를 통해 여러 플랫폼에 배포할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 10,
					title
						:
						'SvelteKit의 폼 핸들링',
					content
						:
						'SvelteKit에서는 **폼 핸들링**이 매우 간단합니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 11,
					title
						:
						'SvelteKit의 상태 관리',
					content
						:
						'SvelteKit에서는 **상태 관리**가 매우 직관적입니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 12,
					title
						:
						'SvelteKit의 애니메이션',
					content
						:
						'SvelteKit은 **애니메이션**을 쉽게 구현할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 13,
					title
						:
						'SvelteKit의 폼 유효성 검사',
					content
						:
						'SvelteKit에서는 **폼 유효성 검사**를 쉽게 처리할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 14,
					title
						:
						'SvelteKit의 서버 사이드 데이터',
					content
						:
						'SvelteKit은 **서버 사이드 데이터**를 쉽게 가져올 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 15,
					title
						:
						'SvelteKit의 클라이언트 사이드 데이터',
					content
						:
						'SvelteKit은 **클라이언트 사이드 데이터**를 쉽게 관리할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 16,
					title
						:
						'SvelteKit의 SEO 최적화',
					content
						:
						'SvelteKit은 **SEO 최적화**를 쉽게 할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 17,
					title
						:
						'SvelteKit의 성능 최적화',
					content
						:
						'SvelteKit은 **성능 최적화**를 쉽게 할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 18,
					title
						:
						'SvelteKit의 보안',
					content
						:
						'SvelteKit은 **보안**을 쉽게 관리할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 19,
					title
						:
						'SvelteKit의 테스트',
					content
						:
						'SvelteKit은 **테스트**를 쉽게 작성할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
				,
				{
					id: 20,
					title
						:
						'SvelteKit의 배포',
					content
						:
						'SvelteKit은 **배포를 쉽게 할 수 있습니다.',
					image
						:
						'/images/image@default.jpg'
				}
			],
			page: {
				total_page: 10,
				has_next: true,
				has_prev: false
			}
}),
		{
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		}
	);
}