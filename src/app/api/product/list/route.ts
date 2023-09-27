import { NextResponse } from 'next/server'
import {Item} from "@/interfaces/item";
import {productService} from "@/services";


export async function GET() {
    try {
        const list:Array<Item> = await productService.getList();
        return NextResponse.json(list);
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500})
    }
}

