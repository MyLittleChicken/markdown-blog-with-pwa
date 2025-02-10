<script>
	import { page } from '$app/stores';
	import { Button, Input, Label } from 'flowbite-svelte';
	import { setAuthState } from '../stores.js';
	import { goto } from '$app/navigation';
	let account = '';
	let password = '';

	// 로그인 버튼 클릭 시 처리할 함수
	function handleLogin() {
		// 로그인 처리 (여기서는 로그인 성공했다고 가정)
		setAuthState(true);

		// 쿼리파라미터 가져옴
		const urlParams = new URLSearchParams(window.location.search);
		const redirectTo = urlParams.get('redirect');

		console.log('redirect:', redirectTo);
		goto(redirectTo || '/post'); // 원래 페이지가 없으면 홈으로 이동
	}
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100 mb-16">
	<div class="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
		<h2 class="text-2xl font-bold text-center text-gray-800">Sign in</h2>

		<!-- 아이디 입력 필드 -->
		<div>
			<Label for="Account" class="block text-sm font-medium text-gray-700">Account</Label>
			<Input
				id="Account"
				type="text"
				bind:value={account}
				placeholder="Account"
				class="mt-1"
			/>
		</div>

		<!-- 비밀번호 입력 필드 -->
		<div>
			<Label for="password" class="block text-sm font-medium text-gray-700">Password</Label>
			<Input
				id="password"
				type="password"
				bind:value={password}
				placeholder="Password"
				class="mt-1"
			/>
		</div>

		<div class="hidden">
			<Label for="name" class="block text-sm font-medium text-gray-700">name</Label>
		</div>

		<!-- 로그인 버튼 -->
		<Button on:click={handleLogin} class="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white">
			Sign in
		</Button>

		<!-- 회원가입 링크 -->
		<div class="text-center mt-4">
      <span class="text-sm text-gray-600">
        Don't you have an account yet?
        <a href="/signup" class="text-primary-500 hover:text-primary-600"> SignUp</a>
      </span>
		</div>
	</div>
</div>