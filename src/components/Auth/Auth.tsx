'use client';
import { useRouter } from 'next/navigation'
import {useEffect} from "react";
import {API} from "@/API";

export const Auth = async () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token) {
            router.push('/login');
        }

        API.auth.refresh(token as string).then(token => {
            localStorage.setItem('token', token);
            router.replace('/admin') //('/admin');
        });

    }, []);

    return (
        <div>
            <h1>loading...</h1>
        </div>
    )
}