<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { Spinner } from 'flowbite-svelte';

	export let data;

	let loading = writable(false);

	onMount(async () => {
		console.log("Alarm page mounted");
	});

	function handleClick(board_id) {
		loading.set(true);
		setTimeout(() => {
			loading.set(false);
		}, 500); // 0.5초 후에 로딩 상태 해제

		// board.id를 이용해 상세 페이지로 이동
		goto(`/post/${board_id}`);
	}
</script>

{#if $loading}
	<div class="loading-overlay">
		<Spinner class="text-white" />
	</div>
{/if}

<div class="page-container bg-white shadow-md mx-auto p-6 max-w-3xl mb-16">
	<div class="text-center mb-4">
		<h1 class="text-2xl font-bold text-gray-800">Alarm</h1>
		<hr class="mt-4">
	</div>

	<div class="rounded-lg p-6 mt-6">
		{#if data != null && data.alarm.length > 0}
			{#each data.alarm as alarm}
				<button
					type="button"
					class="relative bg-gray-100 shadow rounded-lg p-4 mb-4 border-l-4 border-gray-600 text-left w-full"
					on:click={() => handleClick(alarm)}
				>
					{#if !alarm.is_read}
						<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
							NEW
						</span>
					{/if}

					<p class="text-xs text-gray-500 font-bold">
						{alarm.create_date ?? '날짜 정보 없음'}
					</p>

					<h2 class="text-lg font-semibold text-gray-900 mt-1">
						{alarm.title ?? '기본 메시지'}
					</h2>

					<p class="text-gray-600 mt-1">
						{alarm.content ?? '기본 내용'}
					</p>
				</button>
			{/each}
		{:else}
			<p class="text-center text-gray-500">알람이 없습니다.</p>
		{/if}
	</div>
</div>