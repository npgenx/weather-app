import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const debounce = <T extends (...args: never[]) => unknown>(
    func: T,
    delay: number
): T => {
    let timeoutId: NodeJS.Timeout;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    } as T;
};
