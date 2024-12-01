import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

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



export const getLocalTime = (time: string): string => { 
    return dayjs(time).format('h:mm a');
}

export const getLocalDay = (time: string): string => {
    return dayjs(time).format('dddd');
};

export const getLocalDayDate = (time: string): string => {
    return dayjs(time).format('dddd (M/D)');
};