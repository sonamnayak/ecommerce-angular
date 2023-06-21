import { ObjectId } from "mongodb"

export class Wishlist {
    _id?: ObjectId
    img!: string
    title!: string
    price!: number
    color!: string
    size!: string
    quantity!: number
}