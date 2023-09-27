import {Product} from "@/layouts/product";
import {productService} from "@/services";

type PageProps = {
    params: {
        id: string;
    };
};

export default async function ProductCard ({params}:PageProps) {
    const item = await productService.getItem(params.id);

    return <Product {...item} />
}
