<script>
	import Logo from "./Logo.svelte";

	const footerNavs = [
		{
			label: "Source",
			items: [
				{
					href: "https://github.com/easyguard",
					name: "GitHub"
				},
			]
		}
	];
</script>

<footer>
	<div class="mx-auto w-full max-w-screen-xl xl:pb-2">
		<div class="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
			<div class="mb-12 flex flex-col gap-4">
				<a href="/" class="flex items-center gap-2">
					<Logo />
				</a>
				<p class="max-w-xs">Routing made simple!</p>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
				{#each footerNavs as nav}
					<div>
						<h2
							class="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white"
						>
							{nav.label}
						</h2>
						<ul class="grid gap-2">
							{#each nav.items as item}
								<li>
									<a
										href={item.href}
										class="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between"
		>
			<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				Copyleft 🄯
				{' '}
				{new Date().getFullYear()}
				{' '}
				<a href="/" class="cursor-pointer">EasyGuard</a>
				. All Rights Reversed.
			</span>
		</div>
	</div>
	<!-- Site Banner -->
</footer>