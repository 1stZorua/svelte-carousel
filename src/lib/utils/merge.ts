import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function merge(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}