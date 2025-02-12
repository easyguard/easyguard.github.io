export const docsItems: SidebarNavItem[] = [
	{
		title: "Docs",
		items: [
			{
				title: "Getting Started",
				href: "/docs/getting-started",
				items: []
			},
			{
				title: "Alpine Repository",
				href: "/docs/repo",
				items: []
			},
			{
				title: "Development",
				href: "/docs/development",
				items: []
			}
		]
	},
	{
		title: "netd",
		label: "0.5.0",
		items: [
			{
				title: "Introduction to netd",
				href: "/docs/netd",
				items: []
			},
			{
				title: "Failover",
				href: "/docs/netd/failover",
				items: []
			},
			{
				title: "Renames",
				href: "/docs/netd/renames",
				items: []
			},
			{
				title: "Hooks",
				href: "/docs/netd/hooks",
				items: []
			},
			{
				title: "Interfaces",
				href: "/docs/netd/interfaces",
				items: []
			},
			{
				title: "Ethernet Interfaces",
				href: "/docs/netd/interfaces/ethernet",
				items: []
			},
			{
				title: "Bridge Interfaces",
				href: "/docs/netd/interfaces/bridge",
				items: []
			}
		]
	},
	{
		title: "limes",
		label: "0.6.0",
		items: [
			{
				title: "Introduction to limes",
				href: "/docs/limes",
				items: []
			},
			{
				title: "Firewall Rules",
				href: "/docs/limes/rules",
				items: []
			},
			{
				title: "Hooks",
				href: "/docs/limes/hooks",
				items: []
			}
		]
	},
	{
		title: "Web Interface",
		label: "0.3.0",
		items: [
			{
				title: "Introduction to the Web-IF",
				href: "/docs/web-interface",
				items: []
			},
			{
				title: "Home Page",
				href: "/docs/web-interface/home",
				items: []
			},
			{
				title: "Managing Networks",
				href: "/docs/web-interface/networks",
				items: []
			},
			{
				title: "Managing the Firewall",
				href: "/docs/web-interface/firewall",
				items: []
			},
			{
				title: "Managing DNS",
				href: "/docs/web-interface/dns",
				items: []
			},
			{
				title: "Managing VPNs",
				// href: "/docs/web-interface/vpn",
				items: [],
				disabled: true
			},
			{
				title: "Diagnostic Tools",
				href: "/docs/web-interface/diagnostics",
				items: []
			}
		]
	},
	{
		title: "Display",
		label: "0.1.0",
		items: [
			{
				title: "Introduction to the Display",
				href: "/docs/display",
				items: []
			},
			{
				title: "Configuration",
				href: "/docs/display/configuration",
				items: []
			}
		]
	},
	{
		title: "Check Engine",
		label: "0.2.0",
		items: [
			{
				title: "Introduction to Check Engine",
				href: "/docs/check-engine",
				items: []
			},
			{
				title: "Built-in Checks",
				href: "/docs/check-engine/built-in",
				items: []
			},
			{
				title: "Custom Checks",
				href: "/docs/check-engine/custom",
				items: []
			}
		]
	}
]