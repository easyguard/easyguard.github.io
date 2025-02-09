// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type NavItem = {
		title: string;
		href?: string;
		disabled?: boolean;
		external?: boolean;
		icon?: keyof typeof Icons;
		label?: string;
	};
	
	type SidebarNavItem = NavItem & {
		items: SidebarNavItem[];
	};
	
	type NavItemWithChildren = NavItem & {
		items: NavItemWithChildren[];
	};

	type TableOfContentsItem = {
		title: string;
		url: string;
		items?: TableOfContentsItem[];
	};
	
	type TableOfContents = {
		items: TableOfContentsItem[];
	};
}

export {};
