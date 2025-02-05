<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			const response = await fetch('/api/post');
			const data = await response.json();
			console.log('응답 데이터:', data);
		} catch (error) {
			console.error('데이터 가져오기 실패:', error);
		}
	});
</script>
