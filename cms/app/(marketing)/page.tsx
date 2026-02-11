import prisma from "@/lib/prisma";

export default async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
                fieldnotes
            </h1>
            <h2>
                a place for my ramblings on finds from the digital record bins
            </h2>

            <h3 className="text-3xl font-[family-name:var(--font-geist-sans)]">
                reviews
            </h3>
            <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
                {posts.map((post) => (
                    <li key={post.id}>
                        <span className="font-semibold">{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
