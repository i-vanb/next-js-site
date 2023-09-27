import {Gallery} from "@/layouts/gallery";
import {productService} from "@/services";

export default async function Page() {
    const list = await productService.getList();

    return <Gallery list={list} />
}