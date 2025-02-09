<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "$lib/utils.js";

	let { class: className = undefined }: {
		class?: string;
	} = $props();
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
	<a href="/" class="hover:text-primary text-sm font-medium transition-colors {page.url.pathname == "/" ? "" : "text-muted-foreground"}">
		Home
	</a>

	<a
		href="/docs"
		class="hover:text-primary text-sm font-medium transition-colors {page.url.pathname.startsWith("/docs") ? "" : "text-muted-foreground"}"
	>
		Docs
	</a>
</nav>