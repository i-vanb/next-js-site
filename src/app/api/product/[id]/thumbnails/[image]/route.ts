import {productService} from "@/services";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";


export async function GET(req:Request, { params }: { params: { id: string, image: string } }) {
    try {
        const { image, id } = params;
        const file = await productService.getImageThumbnail({image, id});
        const length = file.length.toString();
        return new Response( file, {
            status: 200,
            headers: {
                'Content-Type': 'image/jpeg',
                'Content-Length': length
            }
        })
    } catch (error) {
        return new Response('oops, something went wrong', {status: 500});
    }
}