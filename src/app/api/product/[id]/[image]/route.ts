import {productService} from "@/services";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";


export async function GET(req:Request, { params }: { params: { id: string, image: string } }) {
    const { searchParams } = new URL(req.url);

    const paramWidth = searchParams.get('width');
    const width = paramWidth ? parseInt(paramWidth) : undefined;

    try {
        const { image, id } = params;
        const file = await productService.getImage({image, id, width});

        const length = file.length.toString();
        return new Response( file, {
            status: 200,
            headers: {
                'Content-Type': 'image/webp',
                'Content-Length': length
            }
        })
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}