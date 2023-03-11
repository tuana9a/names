/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		// let len = 10
		// for (const p of new URLSearchParams(new URL(request.url).searchParams)) {
		//   if (p[0] === 'len') {
		//     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		//     len = parseInt(p[1]) || 10
		//   }
		// }
		const text = await fetch("https://raw.githubusercontent.com/tuana9a/names/main/names.txt").then(res => res.text());
		return new Response(text, {
			headers: {
				"Content-Type": "text/plain; charset=utf8"
			}
		})
	}
}
