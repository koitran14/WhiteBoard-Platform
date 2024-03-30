"use client"

import { useEffect, useState } from "react";

import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NewBoardButton } from "./new-board-button";
import { Board, getAllBoards } from "@/actions/board";
// import { checkedIfFavoriteorNot } from "@/actions/favorite";
import { useParams, usePathname, useRouter } from "next/navigation";

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
    const router = useRouter();

    useEffect(() => {
        const fetchBoards = async (userId: string, orgId: string) => {
            try {
                const boards = await getAllBoards(userId, orgId);
                setData(boards);
            } catch (error) {
                console.error("Error fetching boards:", error);
            }
        };
    
        fetchBoards(params.UserID as string, orgId);
    },[orgId, params.UserID]);
    

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
                        isFavorite={board.isFavorite || false}
                    />
                ))} 
            </div>
        </div>
    );
};