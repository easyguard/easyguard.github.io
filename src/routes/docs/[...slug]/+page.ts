import type { EntryGenerator } from "./$types";

export async function load({ params }) {
	console.log("Loading " + params.slug)
	const slashes = params.slug.split('/');
	let post;
	if(slashes.length === 1) {
		post = await import(`$lib/docs/${params.slug}.svx`);
	} else if(slashes.length === 2) {
		post = await import(`$lib/docs/${slashes[0]}/${slashes[1]}.svx`);
	} else {
		post = await import(`$lib/docs/${slashes[0]}/${slashes[1]}/${slashes[2]}.svx`);
	}
	const { title } = post.metadata;
	const content = post.default;

	return {
		content,
		title
	};
}
