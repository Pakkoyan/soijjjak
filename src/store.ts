import { writable } from 'svelte/store';

export const userNameStore  = writable('');
export const correctAnswersStore = writable(0);