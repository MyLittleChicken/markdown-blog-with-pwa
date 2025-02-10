<script>
	import { Button, Input, Label } from 'flowbite-svelte';
	let account = '';
	let password = '';
	let nickname = '';
	let email = '';

	// 회원가입 버튼 클릭 시 처리할 함수
	function handleSignup() {
		// 회원가입 처리 로직 작성
		console.log("Signing up with:", account, password, nickname, email);
	}
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100 mb-16">
	<div class="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg flex flex-col justify-between">
		<h2 class="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

		<!-- 아이디 입력 필드 -->
		<div>
			<Label for="account" class="block text-sm font-medium text-gray-700">Account</Label>
			<Input
				id="account"
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

		<!-- 닉네임 입력 필드 -->
		<div>
			<Label for="nickname" class="block text-sm font-medium text-gray-700">NickName</Label>
			<Input
				id="nickname"
				type="text"
				bind:value={nickname}
				placeholder="NickName"
				class="mt-1"
			/>
		</div>

		<!-- 회원가입 버튼 -->
		<Button on:click={handleSignup} class="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white">
			Sign Up
		</Button>

		<!-- 로그인 링크 -->
		<div class="text-center mt-4">
      <span class="text-sm text-gray-600">
        Already have an account?
        <a href="/signin" class="text-primary-500 hover:text-primary-600">Sign In</a>
      </span>
		</div>
	</div>
</div>

