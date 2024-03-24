import axios from 'axios';

export interface Board {
    _id: string,
    title: string,
    orgId: string,
    authorId: string,
    imageUrl: string,
    createdAt?: Date,
    isFavorite?: boolean,
}

export async function getAllBoards(orgId: string): Promise<Board[]> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/boards/${orgId}`);
    return res.data ? res.data : undefined;
}


export async function getBoardById(boardId: string): Promise<Board> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/boards/id/${boardId}`);
    return res.data ? res.data : undefined;
}

export async function createBoard(userId: string, orgId: string) {
    const boards = await getAllBoards(orgId);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/boards`, {
        title: "Untitle-" + boards.length,
        orgId: orgId,
        authorId: userId,
        imageUrl: `/placeholders/${Math.floor(Math.random() * 10) + 1}.svg`,
    });
    return response;
}

// export async function setFavorite(id: string, isFavorite: boolean) {
//     return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/boards/favorite/${id}`, {
//         isFavorite : isFavorite
//     });
// }

export async function renameBoard(id: string, title: string) {
    return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/boards/title/${id}`, {
        title: title
    })
}

export async function deleteBoard(id: string) {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/boards/${id}`);
}