<script>
	import { Avatar, Toggle, Label, Input, Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { initializeAuthState, setAuthState, isOk } from '../stores.js';
	import { goto } from '$app/navigation';

	export let data;

	onMount(() => {
		// 로그인 상태 확인
		initializeAuthState();
		$isOk ? console.log('로그인 상태입니다.') : redirectToLogin();
	});

	function redirectToLogin() {
		alert('로그인이 필요한 서비스입니다.');
		const currentPath = window.location.pathname;
		goto(`/signin?redirect=${encodeURIComponent(currentPath)}`);
	}

	function logout() {
		$isOk = false;
		setAuthState(false);
		alert('로그아웃 되었습니다.');
		goto('/signin');
	}
</script>

<div class="bg-white shadow-md mx-auto p-6 max-w-3xl mb-16 rounded-lg">
	<div class="text-center mb-4">
		<h1>Profile</h1>
		<hr class="mt-4">
	</div>
	<div class="ml-6 flex space-x-10 rtl:space-x-reverse">
		<Avatar dot={{ placement: 'bottom-right', color: 'green' }} size="lg"></Avatar>
		<div class="space-y-1 font-medium dark:text-white">
			<div class="text-sm mt-2 mb-4">{data.profile.nickname}</div>
			<div class="text-xl text-gray-500 dark:text-gray-400">{data.profile.status}</div>
		</div>
	</div>

	<!-- 프로필 정보 -->
	<div class="rounded-lg p-6 mt-6">
		<h1 class="text-xl font-bold text-gray-800 mb-4">Details</h1>
		<form>
			<div class="mb-6">
				<Label for="account" class="mb-2">Account</Label>
				<Input type="text" id="account" value={data.profile.account} required disabled />
			</div>
			<div class="mb-6">
				<Label for="password" class="mb-2">Password</Label>
				<Input type="password" id="password" placeholder="•••••••••" required disabled />
			</div>
			<hr class="my-4"/>
			<div class="bg-white shadow-md rounded-lg h-full flex flex-col mb-6">
				<Toggle class="m-2" checked={data.profile.push_notification}>Push Notification</Toggle>
				<Toggle class="m-2" checked={data.profile.dark_mode}>Dark Mode</Toggle>
			</div>
		</form>

		<!-- 로그아웃 버튼 (프로필 내부, 우측 정렬) -->
		<div class="flex justify-end mt-6">
			<Button on:click={logout} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
				Logout
			</Button>
		</div>
	</div>
</div>
