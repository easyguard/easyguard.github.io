<script>
	import BentoCard from "$lib/components/magic/bento-grid/BentoCard.svelte";
	import BentoGrid from "$lib/components/magic/bento-grid/BentoGrid.svelte";
	import MousePointerClickIcon from "lucide-svelte/icons/mouse-pointer-click";

	const features = [
		{
			Icon: MousePointerClickIcon,
			name: "User Friendly",
			description: "EasyGuard is designed to be user friendly and easy to use.",
			background: MousePointerClickIcon,
			href: "/docs",
			cta: "Get Started"
		}
	];
</script>

<div class="flex justify-center items-center">
	<BentoGrid>
    {#each features as item}
      <BentoCard {...item} />
    {/each}
	</BentoGrid>
</div>