import { Liveblocks } from '@liveblocks/node'
import { auth, currentUser } from '@clerk/nextjs';
import { getBoardById } from '@/actions/board';

const liveblocks = new Liveblocks({
    secret: "sk_dev_zjWHCJKY5Jslbn6v6ffgzlpKJiAXZnSalqUe2JrxGLA8j3pbkzJ2YViGheCe6NAR",
})

export async function POST(request: Request) {
    const authorization = auth();
    const user = await currentUser();
    
    if (!authorization || !user) {
        return new Response("Unauthorized", { status: 403 })
    }

    const { room } = await request.json();
    const board = await getBoardById(room);

    // if (board?.orgId !== authorization.orgId){
    //     return new Response("Unauthorized");
    // }

    const userInfo = {
        name: user.firstName || "Teammate",
        picture: user.imageUrl,
    };

    const session = liveblocks.prepareSession(
        user.id,
        { userInfo }
    )

    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    return new Response(body, { status });
}