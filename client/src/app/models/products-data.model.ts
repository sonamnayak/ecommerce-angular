import { ObjectId } from "mongoose"

export class ProductsData{
    _id?: ObjectId
    img!: string
    cat!: string
    title!: string
    price!: number
    desc!: string
    colors!: Array<string>
    sizes!:  Array<string>
    bestseller!: boolean
}