<script>
	import '../app.css';
	import BottomNavi from '../component/common/BottomNavigator.svelte';
</script>

<!-- app.html %sveltekit.head%에 해당하는 위치에 삽입될 태그 -->
<svelte:head>
	<!-- 모든 페이지의 타이틀은 고정할 것임으로 /src/routes/+layout.svelte 에 작성 -->
	<!-- 이곳에 작성된 내용은 모든 하위 페이지들에 공통 적용 -->
	<title>
	  Undertopia.com
	</title>
</svelte:head>

<div>
	<slot/>
	<BottomNavi/>
</div>