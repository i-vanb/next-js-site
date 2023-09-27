import {NextResponse} from "next/server";
import {authService} from "@/services";

export async function POST(request:Request) {
    try {
        const {login, password} = await request.json();
        const token = await authService.login({login, password});
        if(!token) return new Response('Login or password are invalid', {status: 403});
        return NextResponse.json(token);
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}