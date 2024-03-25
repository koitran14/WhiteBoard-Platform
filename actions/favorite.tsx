import axios from "axios";

export interface Favorite {
<<<<<<< HEAD
    userId: string,
    boardId: string,
    isFavorite: boolean,
}

// export async function removeFavorite(userId: string, boardId: string){
//     return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/favorites/remove/${userId}/${boardId}`)
// }

// export async function checkedIfFavoriteorNot(userId: string, boardId: string): Promise<boolean> {
//     try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites/check/${userId}/${boardId}`);
//         return res.data.exists; 
//     } catch (error) {
//         console.error("Error checking if favorite:", error);
//         return false; 
//     }
// }

export async function setFavorite(userId: string, boardId: string, isFavorite: boolean){
        return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`,{ 
            isFavorite : isFavorite
        });
        
=======
   isFavorite: boolean
}

export async function checkedIfFavoriteorNot(userId: string, boardId: string): Promise<boolean> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites/check/${userId}/${boardId}`)
    return response.data.isFavorite;
}

export async function setFavorite(userId: string, boardId: string) {
    let checked = await checkedIfFavoriteorNot(userId, boardId);
    const response = checked ? removeFavorite(userId, boardId) : addFavorite(userId, boardId);
    return response;
>>>>>>> 545acffb82184ec95455af22a5e59c1cca8699a1
}

const addFavorite = async(userId: string, boardId:string) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`);
}

const removeFavorite = async(userId: string, boardId:string) => {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/favorites/remove/${userId}/${boardId}`);
}