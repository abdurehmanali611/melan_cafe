import { Schema, model, models } from "mongoose";

interface Service {
    name: string
    type: string
    price: number
    image: string
    description: string
    nutrient: string[]
    popular: boolean
    New: boolean
    title: string
}

const serviceSchema = new Schema<Service>({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    nutrient: { type: [String], required: true },
    popular: { type: Boolean, required: true },
    New: { type: Boolean, required: true },
    title: { type: String, required: true }
},
{
    timestamps: true
})

export const Service = models.Service || model<Service>("Service", serviceSchema)