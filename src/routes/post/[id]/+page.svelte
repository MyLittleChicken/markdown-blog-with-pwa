<script>
	import { onMount } from 'svelte';
	import Markdoc from '@markdoc/markdoc';
	import DOMPurify from 'dompurify';
	export let data; // 상세보기 데이터

	let purifyHtml = '';

	onMount(() => {
		const ast = Markdoc.parse(data.content);
		const content = Markdoc.transform(ast);
		const html = Markdoc.renderers.html(content);
		purifyHtml = DOMPurify.sanitize(html);
	});
</script>

<svelte:head>
	<meta name="id" content="post-{data.id}">
	<meta name="description" content="{data.content}" />
</svelte:head>

<div class="page-container mx-auto p-6 max-w-3xl mb-16">
	<div class="bg-white shadow-md rounded-lg overflow-y-auto h-full flex flex-col">
		<img class="w-full h-60 object-cover" src={data.image_src} alt="Post" />
		<div class="p-6 flex-1 flex flex-col">
			<h1 class="text-3xl font-bold mt-6">{data.title}</h1>
			<div class="prose mt-6 text-lg text-gray-700 leading-relaxed overflow-y-auto flex-1">
				{@html purifyHtml}
			</div>
		</div>
	</div>
</div>
