<script>
	import SphereMask from "$lib/components/magic/SphereMask/SphereMask.svelte";
	import Bentos from "$lib/landing/Bentos.svelte";
	// import ClientSection from "$lib/landing/ClientSection.svelte";
	import HeroSection from "$lib/landing/HeroSection.svelte";
	// import PricingSection from "$lib/landing/PricingSection.svelte";
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

<div class="overflow-hidden">
	<HeroSection />
	<!-- <ClientSection /> -->
	<SphereMask />
	<!-- <PricingSection /> -->
	<!-- <Bentos /> -->
</div>