import axios from "axios";

export interface Favorite {
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
        
}



// export async function getAllFavorites(userId: string, boardId: string): Promise<Favorite[]> {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`);
//     return res.data ? res.data : undefined;
// }

// export async function getFavoriteOnebyUserId(userId: string, boardId: string): Promise<Favorite[]> {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites/user/${userId}/${boardId}`);
//     return res.data ? res.data : undefined;
// }

// async function insertFavorite(userId: string, boardId: string): Promise<Favorite> {
//     try {
//         const res = await axios.post<Favorite>(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, { userId, boardId });
//         return res.data;
//     } catch (error) {
//         console.error("Error inserting favorite:", error);
//         throw error;
//     }
// }




// async function removeFavorite(userId: string, boardId: string): Promise<void> {
//     try {
//         await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}/${boardId}`);
//     } catch (error) {
//         console.error("Error removing favorite:", error);
//         throw error; 
//     }
// }




// export async function setFavorite(userId: string, boardId: string): Promise<Favorite[]> {
//     try {
//         const isFavorite = await checkedIfFavoriteorNot(userId, boardId);
//         if (isFavorite) {
//             await removeFavorite(userId, boardId);
//         } else {
//             await insertFavorite(userId, boardId);
//         }
//         // Optionally, you can return the list of favorites after the operation.
//         return await getFavoriteOnebyUserId(userId, boardId);
//     } catch (error) {
//         console.error("Error setting favorite:", error);
//         return []; // Return an empty array or handle the error as appropriate.
//     }
// }

