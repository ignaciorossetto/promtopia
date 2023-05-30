import mongoose from "mongoose";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@utils/database";
import UserModel from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {

        async session({session}) {
            const sessionUser = await UserModel.findOne({email: session.user.email})
            session.user.id = sessionUser._id.toString()
            return session
        },
        async signIn({profile}){
            try {
                await connectToDB()
                const user = await UserModel.findOne({email: profile.email})
                if(!user){
                    await UserModel.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                
                return true
                
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
})

export {handler as GET, handler as POST}