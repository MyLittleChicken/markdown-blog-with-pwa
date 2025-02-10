<script>
	import { onMount } from 'svelte';
	import { Spinner } from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { ArrowUpOutline } from 'flowbite-svelte-icons';

	export let data;

	let loading = writable(false);
	let showScrollButton = writable(true); // 상단 이동 버튼 표시 여부

	onMount(() => {
		console.log('클라이언트에서 받은 데이터:', data);
	});

	function handleClick(board_id) {
		loading.set(true);
		setTimeout(() => {
			loading.set(false);
		}, 500); // 0.5초 후에 로딩 상태 해제

		goto(`/post/${board_id}`);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<style>
    .grid-container {
        display: flex;
        justify-content: center;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1.5rem;
    }
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .scroll-top-btn {
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: #ff5733;
        color: white;
        padding: 12px;
        border-radius: 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
    }
    .scroll-top-btn:hover {
        transform: scale(1.1);
        opacity: 1;
    }
    @media (min-width: 640px) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style>

{#if $loading}
	<div class="loading-overlay">
		<Spinner class="text-white" />
	</div>
{/if}

<div class="page-container mx-auto px-4 py-8 overscroll-none mb-16">
	<div class="grid-container">
		<div class="grid">
			{#each data.boards as board}
				<button class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-95 active:scale-90" on:click={() => handleClick(board.id)}>
					<img class="w-full h-48 object-cover" src={board.image} alt={board.title} />
					<div class="p-4">
						<h3 class="font-bold text-lg truncate min-h-[24px] pb-2">{board.title}</h3>
						<p class="text-gray-600 text-sm line-clamp-2 min-h-[40px]">{board.content}</p>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- 상단 이동 버튼 -->
{#if $showScrollButton}
	<button class="scroll-top-btn" on:click={scrollToTop}>
		<ArrowUpOutline/>
	</button>
{/if}
