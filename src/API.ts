import {Item} from "@/interfaces/item";

export const API = {
    product: {
        getList: async ():Promise<Array<Item>> => {
            const res = await fetch(`/api/product/list`);
            return await res.json();
        },
        getItem: async ({id}:ItemRequest):Promise<Item> => {
            const res = await fetch(`/api/product/${id}`);
            return await res.json();
        },
        getImage: async ({id, image, width}:ImageRequest):Promise<Blob> => {
            const res = await fetch(`/api/product/${id}/${image}?width=${width}`);
            return await res.blob();
        },
        getImageThumbnail: async ({id, image}:ImageRequest):Promise<Blob> => {
            const res = await fetch(`/api/product/${id}/thumbnails/${image}`);
            return await res.blob();
        },
    },
    auth: {
        refresh: async (refreshToken:string):Promise<string> => {
            const res = await fetch(`/api/token/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({refreshToken})
            });
            return await res.json();
        },
        login: async (login:string, password:string) => {
            const res = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            });

            if(!res.ok) return {error: 'invalid login or password'};

            return await res.json();
        },
        verify: async (code:string) => {
            const res = await fetch(`/api/login/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code, token: localStorage.getItem('temp')})
            });

            if(!res.ok) return {error: 'invalid code'};

            return await res.json();
        }
    }
}



interface ImageRequest {
    id: string
    image: string,
    width?: number
}

interface ItemRequest {
    id: string
}

interface CreateItemRequest {
    id?: string
    name: string
    desc: string
    height: number
}

type UpdateItemRequest = {
    id: string
} & Partial<Item>