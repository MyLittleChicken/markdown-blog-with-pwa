export const prerender = true;
export const ssr = true;

export async function load({ fetch }) {
	const res = await fetch('/api/alarm');
	const data = await res.json();

	console.log('서버에서 가져온 데이터:', data);

	return data;
}