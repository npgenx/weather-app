'use client';
import {ReactNode} from 'react';
import { useMounted } from '@/hooks/useMounted';

interface Props {
    children: ReactNode;
}

export const NoSsr= ({ children}: Props) =>  {
    const mounted = useMounted();
    if (!mounted) return null;
    return <>{children}</>;
}
