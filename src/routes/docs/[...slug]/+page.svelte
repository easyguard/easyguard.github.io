<script>
	import { page } from '$app/state';
	import DocsPager from '$lib/components/DocsPager.svelte';
	import TableOfContentsPanel from '$lib/components/TableOfContentsPanel.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { docsItems } from '$lib/docs.js';
	import SidebarNav from '$lib/layout/SidebarNav.svelte';
	import "$lib/prism-atom-dark.css"

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} | EasyGuard</title>
	<meta name="description" content="A user friendly firewall" />

	<meta property="og:title" content="EasyGuard - Routing made simple!" />
	<meta property="og:description" content="A user friendly firewall" />
	<!-- <meta property="og:image" content={seo.image} /> -->
	<meta property="og:site_name" content="EasyGuard" />
	<!-- <meta property="og:url" content="" /> -->
</svelte:head>

<div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
	<aside class="-ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block top-14">
		<ScrollArea class="h-full py-6 pr-6 lg:py-8">
			<SidebarNav items={docsItems} />
		</ScrollArea>
	</aside>
	<div class="pt-6 lg:gap-10 lg:pt-8 xl:grid xl:grid-cols-[1fr_300px]">
		<div class="mx-auto w-full min-w-0">
			<article class="relative pb-6 lg:pb-8" id="markdown">
				<data.content />
				<DocsPager />
			</article>
		</div>
		<div class="hidden text-sm xl:block">
			<div class="sticky top-14 -mt-10 h-[calc(100vh-3.5rem)] pt-8">
				<ScrollArea class="h-full">
					{#key page.url.pathname}
						<TableOfContentsPanel />
					{/key}
				</ScrollArea>
			</div>
		</div>
	</div>
</div>

<style>
	/* div {
		display: grid;
		grid-template-columns: 250px 1fr;
	} */
</style>