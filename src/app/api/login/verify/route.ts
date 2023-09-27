import {NextResponse} from "next/server";
import {authService} from "@/services";

export async function POST(request:Request) {
    try {
        const {token, code} = await request.json();
        const tokenPair = await authService.verify({token, code});
        if(!tokenPair) return new Response('Code is invalid or expired. Try again.', {status: 403});

        authService.saveAccessToken(tokenPair.accessToken);

        return NextResponse.json({refreshToken: tokenPair.refreshToken});
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}