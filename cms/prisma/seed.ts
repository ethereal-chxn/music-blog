import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import 'dotenv/config'

const prisma = new PrismaClient({accelerateUrl: process.env.DATABASE_URL}).$extends(withAccelerate())

const postData: Prisma.PostCreateInput[] = [
    {
        title: "hiiii ^-^",
        slug: "test-post",
        content: "this is a test post ^o^",
        artist: "Boards of Canada",
        release: "Magic Window",
        rating: 10
    }
]

export async function main() {
    for (const p of postData) {
        await prisma.post.create({data: p});
    }
}

main();