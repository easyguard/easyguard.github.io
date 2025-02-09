import { type ClassValue, clsx } from "clsx";
import { get, writable } from "svelte/store";
import { twMerge } from "tailwind-merge";

export const isBrowser = typeof document !== "undefined";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createCopyCodeButton() {
	const codeString = writable("");
	const copied = writable(false);
	let copyTimeout = 0;

	function copyCode() {
		if (!isBrowser) return;
		navigator.clipboard.writeText(get(codeString));
		copied.set(true);
		clearTimeout(copyTimeout);
		copyTimeout = window.setTimeout(() => {
			copied.set(false);
		}, 2500);
	}

	function setCodeString(node: HTMLElement) {
		codeString.set(node.innerText.trim() ?? "");
	}

	return {
		copied,
		copyCode,
		setCodeString,
		codeString,
	};
}
