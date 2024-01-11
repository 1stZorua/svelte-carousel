import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

export function createStore<T>(initialValue: T): 
    { 
        store: Writable<T>; 
        updateOption: (name: keyof T, value: T[keyof T]) => void;
        reset: () => void;
    } 
{
    const store = writable(initialValue);

    const updateOption = (optionName: keyof T, value: T[keyof T]) => {
        store.update(curr => {
            return { ...curr, [optionName]: value };
        });
    };

    const reset = () => {
        store.set(initialValue);
    }

    return { 
        store, 
        updateOption,
        reset
    }
}

export function setCtx<T>(name: string, store: Writable<T>) {
    return setContext(name, store);
}

export function getCtx<T>(name: string) {
    return getContext<T>(name);
}