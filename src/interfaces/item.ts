
export interface Item {
    id: string,
    name: string,
    desc: string,
    avatar: string,
    height: string,
    images: Array<string>,
    thumbnails: Array<string>,
    recommendations?: Array<string>
}