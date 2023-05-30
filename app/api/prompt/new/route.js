import { connectToDB } from "@utils/database"
import PromptModel from "@models/prompt"

export const POST = async (req,res) => {
    const {userId, prompt, tag} = await req.json()

    try {
        await connectToDB()
        const newPrompt = PromptModel.create({
            creator: userId,
            prompt,
            tag
        })
        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response('Failed to create a new prompt.', {status: 500})
    }

}