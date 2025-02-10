<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { initializeAuthState, isOk } from './stores.js';
	import BottomNavi from '../component/common/BottomNavigator.svelte';

	onMount(() => {
		initializeAuthState(); // 페이지 로드 시 로그인 상태 초기화
		console.log('공통 레이아웃에서 찍은 로그인 상태:', $isOk);
	});
</script>

<!-- app.html %sveltekit.head%에 해당하는 위치에 삽입될 태그 -->
<svelte:head>
	<!-- 모든 페이지의 타이틀은 고정할 것임으로 /src/routes/+layout.svelte 에 작성 -->
	<!-- 이곳에 작성된 내용은 모든 하위 페이지들에 공통 적용 -->
	<title>
	  Undertopia.com
	</title>
	<link rel="manifest" href="manifest.json" />
</svelte:head>

<div>
	<slot/>
	<BottomNavi/>
</div>