<script>
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import Logo from "./Logo.svelte";
	import Nav from "./Nav.svelte";
	import Search from "./Search.svelte";
</script>

<div class="border-b sticky top-0 bg-background z-50 bg-opacity-50 backdrop-blur-lg">
	<div class="flex h-16 items-center px-4 gap-5">
		<a href="/">
			<Logo />
		</a>
		<Separator orientation="vertical" />
		<Nav class="mx-2" />
		<!-- <div class="ml-auto flex items-center space-x-4">
			<Search />
		</div> -->
	</div>
</div>