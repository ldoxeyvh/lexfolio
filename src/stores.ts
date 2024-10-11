import { writable } from 'svelte/store';

export const svgPosition = writable({ x: 200, y: 200 });
export const cursor = writable({ x: 0, y: 0 })
