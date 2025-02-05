<script>
	import { onMount } from 'svelte';
	import { Avatar } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { isOk } from '../stores.js';

	onMount(async () => {
		if ($isOk) {
			console.log('로그인 상태입니다.');
		} else {
			// Alert 를 띄워 로그인 창으로 이동
			alert('로그인이 필요한 서비스입니다.');
			await goto('/signin');
		}
	});
</script>

<div class="page-container mx-auto p-6 max-w-3xl mb-16">
	<div class="text-center mb-4">
		<h1>Profile</h1>
		<hr class="mt-4">
	</div>
	<div class="flex space-x-10 rtl:space-x-reverse place-content-center">
		<Avatar dot={{ placement: 'bottom-right', color: 'green' }} size="lg"></Avatar>
		<div class="space-y-1 font-medium dark:text-white">
			<div class="text-sm mt-2 mb-4">Lee Sungil</div>
			<div class="text-xl text-gray-500 dark:text-gray-400">Now Working!!</div>
		</div>
	</div>
	<div class="flex  flex-col bg-white shadow-md rounded-lg overflow-y-auto h-full">
	</div>
</div>