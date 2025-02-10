<script>
	import { onMount } from 'svelte';
	import { Toggle } from 'flowbite-svelte';
	import { initializeAuthState } from '../stores.js';

	onMount(() => {
		// 로그인 상태를 확인하고, 로그인상태가 아니라면 '/signin'으로 이동
		initializeAuthState();
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