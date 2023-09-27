import {NextResponse} from "next/server";
import {productService} from "@/services";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";


export async function GET(req:Request, { params }: { params: { id: string } }) {
    console.log('params', params)
    try {
        const id = params.id;
        const item = await productService.getItem(id);
        return NextResponse.json(item);
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}
