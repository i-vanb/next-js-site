import {NextResponse} from "next/server";

export async function POST(request:Request) {
    try {
        const {token} = await request.json();
        return NextResponse.json(token)
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}