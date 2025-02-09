<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>EasyGuard - Routing made simple!</title>
	<meta name="description" content="A user friendly firewall" />

	<meta property="og:title" content="EasyGuard - Routing made simple!" />
	<meta property="og:description" content="A user friendly firewall" />
	<!-- <meta property="og:image" content={seo.image} /> -->
	<meta property="og:site_name" content="EasyGuard" />
	<!-- <meta property="og:url" content="" /> -->
</svelte:head>

<div class="min-h-screen bg-background font-sans antialiased">
	<Header />
	<div class="mx-auto flex-1">
		{@render children()}
	</div>
	<Footer />
</div>
