import { writable } from 'svelte/store';

// 로그인 상태 관리 (기본값: false)
export const isOk = writable(false);

// 로그인 상태를 localStorage에서 불러와 초기화하는 함수
export function initializeAuthState() {
	const storedStatus = sessionStorage.getItem('isOk');
	console.log('storedStatus ? ::: ', storedStatus);
	if (storedStatus === 'true') {
		isOk.set(true);
	}
}

// 로그인 상태를 변경하는 함수 (localStorage에도 저장)
export function setAuthState(status) {
	isOk.set(status);
	sessionStorage.setItem('isOk', status ? 'true' : 'false');
}
