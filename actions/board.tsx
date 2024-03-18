import axios from 'axios';

export interface Board {
    title: string,
    orgId: string,
    authorId: string,
    imageUrl: string,
    createdAt?: Date,
    isFavorite?: boolean,
}

export async function getAllBoards(orgId: string): Promise<Board[]> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/boards/${orgId}`);
    return res.data;
}

export async function createBoard(board: Board) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/boards`, board);
    return response;
}
