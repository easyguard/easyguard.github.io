<script lang="ts">
	import SidebarNavItems from "./SidebarNavItems.svelte";
	import { cn } from "$lib/utils.js";

	export let items: SidebarNavItem[] = [];
</script>

{#if items.length}
	<div class="w-full">
		{#each items as item, index (index)}
			<div class={cn("pb-4")}>
				<h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
					{item.title}
					{#if item.label}
						<span
							class="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
						>
							{item.label}
						</span>
					{/if}
				</h4>
				{#if item?.items}
					{#if item?.items?.length}
						<SidebarNavItems items={item.items} />
					{/if}
				{/if}
			</div>
		{/each}
	</div>
{/if}