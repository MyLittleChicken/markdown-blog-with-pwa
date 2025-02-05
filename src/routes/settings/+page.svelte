<script>
	import { onMount } from 'svelte';
	import { Toggle } from 'flowbite-svelte';
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
		<h1>Settings</h1>
		<hr class="mt-4">
	</div>
	<div class="bg-white shadow-md rounded-lg overflow-y-auto h-full flex flex-col">
		<Toggle class="m-2">Push Notification</Toggle>
		<Toggle class="m-2">Dark Mode</Toggle>
		<Toggle class="m-2" disabled>Disabled toggle</Toggle>
		<Toggle class="m-2" disabled checked>Disabled checked</Toggle>
	</div>
</div>