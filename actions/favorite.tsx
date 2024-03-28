import axios from "axios";

export interface Favorite {
    userId: string,
    boardId: string,
    isFavorite: boolean,
}

// export async function setFavorite(userId: string, boardId: string, isFavorite: boolean){
//     return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`,{ 
//         isFavorite : isFavorite
//     });
// }

export async function checkedIfFavoriteorNot(userId: string, boardId: string): Promise<boolean> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites/check/${userId}/${boardId}`)
    return response.data.isFavorite;
}

export async function setFavorite(userId: string, boardId: string) {
    let checked = await checkedIfFavoriteorNot(userId, boardId);
    const response = checked ? removeFavorite(userId, boardId) : addFavorite(userId, boardId);
    return response;
}

const addFavorite = async(userId: string, boardId:string) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`);
}

const removeFavorite = async(userId: string, boardId:string) => {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/favorites/remove/${userId}/${boardId}`);
}