export const ssr = true;

export async function load({ fetch, params }) {
	const res = await fetch(`/api/post/${params.id}`);
	const data = await res.json();

	console.log('pathValue ::: ', params.id);
	console.log('서버에서 가져온 데이터:', data);

	return data;
}