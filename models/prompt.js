import mongoose from "mongoose";

const promptCollection = 'prompts'

const PromptSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.']
    },
    tag: {
        type: String,
        required: [true, 'Prompt is required.']
    }    
})

const PromptModel = mongoose.models.prompts || mongoose.model(promptCollection, PromptSchema)

export default PromptModel;