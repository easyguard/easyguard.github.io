<script lang="ts">
	import { cn } from "$lib/utils.js";
	import CheckIcon from "lucide-svelte/icons/check";
	import CopyIcon from "lucide-svelte/icons/copy";

	export let copied = false;
	export let copyCode = () => {};
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<button
	class={cn(
		"focus-visible:ring-ring absolute right-4 top-4 z-10 inline-flex h-6 w-6 items-center justify-center rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
		className
	)}
	on:click={copyCode}
	{...$$restProps}
>
	<span class="sr-only">Copy</span>
	{#if copied}
		<CheckIcon class="h-3 w-3" tabindex={-1} />
	{:else}
		<CopyIcon class="h-3 w-3" tabindex={-1} />
	{/if}
</button>