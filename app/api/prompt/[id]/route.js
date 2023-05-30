import { connectToDB } from "@utils/database"
import PromptModel from "@models/prompt"

export const GET = async(request, {params}) => {
    
    try {
        await connectToDB()
        const response = await PromptModel.findById(params.id).populate('creator')
        if (!response) {
            return new Response("Prompt not found", {status: 404})
        }
        return new Response(JSON.stringify(response), {status: 200})
    } catch (error) {
        return new Response('Failed to fetch prompts.', {status: 500})
    } 
}
export const PATCH = async(request, {params}) => {
    const {prompt, tag} = await request.json()
    try {
        await connectToDB()
        const post = await PromptModel.findById(params.id).populate('creator')
        if (!post) {
            return new Response("Prompt not found", {status: 404})
        }
        post.tag = tag || post.tag
        post.prompt = prompt || post.prompt
        const response = await PromptModel.findByIdAndUpdate(params.id, post)
        return new Response(JSON.stringify(response), {status: 200})
    } catch (error) {
        return new Response('Failed to fetch prompts.', {status: 500})
    } 
}
export const DELETE = async(request, {params}) => {
    
    try {
        await connectToDB()
        const response = await PromptModel.findByIdAndDelete(params.id)
        return new Response(JSON.stringify(response), {status: 200})
    } catch (error) {
        return new Response('Failed to fetch prompts.', {status: 500})
    } 
}