"use client"

import { useEffect, useState } from "react";

import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NewBoardButton } from "./new-board-button";
import { Board, getAllBoards } from "@/actions/board";
// import { checkedIfFavoriteorNot } from "@/actions/favorite";
import { useParams } from "next/navigation";

interface BoardListProps{
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const [data, setData] = useState<Board[]>();
    const params = useParams();

    useEffect(() => {
<<<<<<< HEAD
        const recheck = async (boards: Board[]) => {
            const modifiedData = await Promise.all(boards.map(async board => ({
                ...board,
                isFavorite: (await checkedIfFavoriteorNot(params.UserID as string, board._id)),
            })));
            console.log(modifiedData)
            return modifiedData;
        }

        const response = async () => {
            let boards = await getAllBoards(orgId);
            const recheckedData = await recheck(boards);
            setData(recheckedData);
        }

        response();
        }, [orgId, params.UserID]);

=======
       const fetch = async(userId: string, orgId: string) => {
            const getBoards = await getAllBoards(userId, orgId);
            setData(getBoards);
       }
       fetch(params.UserID as string, orgId);
    },[params.UserID, orgId])
>>>>>>> 7a62704ebcf2646f050e4bc7d0bf20b27298a285

    if(data===undefined) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favorites ? "Favorites sketchas" : "Team sketchas"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton
                        orgId={orgId}
                        disabled
                    />
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                </div>
            </div>
        )
    }

    if(!data?.length && query.search){
        return <EmptySearch/>;
    }

    if(!data?.length && query.favorites){
        return <EmptyFavorites/>
    }

    if(!data?.length){
        return <EmptyBoards/>
    }

    return(
        <div>
            <h2 className="text-3xl">
                {query.favorites ? "Favorites sketchas" : "Team sketchas"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton
                    orgId={orgId}
                />
                {data?.map(async (board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        createdAt={board.createdAt as Date}
                        orgId={board.orgId}
<<<<<<< HEAD
                        isFavorite={board.isFavorite !== undefined ? board.isFavorite : false}
=======
                        isFavorite={board.isFavorite || false}
>>>>>>> 7a62704ebcf2646f050e4bc7d0bf20b27298a285
                    />
                ))} 
            </div>
        </div>
    );
};