import { NextResponse } from 'next/server'
import {authService, tokenService} from "@/services";
import {TokenPair} from "@/interfaces/token";

export async function POST(request: Request) {
    try {
        const {login} = await request.json();
        const tokens:TokenPair = await tokenService.createPair({login});
        authService.saveAccessToken(tokens.accessToken);
        return NextResponse.json(tokens.refreshToken);
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500})
    }
}
