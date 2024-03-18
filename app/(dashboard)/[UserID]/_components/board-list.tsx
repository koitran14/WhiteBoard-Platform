"use client"

//import useQuery and api from convex here

import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NewBoardButton } from "./new-board-button";

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
    const data = [
        {
            id:"123123123",
            title:"huy",
            imageUrl:"/public/logo.svg",
            authorId:"Huy123",
            authorName:"HuyQQ",
            createdAt: new Date(2014, 1, 11),
            orgId:"Org123",
            isFavorite: true,
        }
    ]; //TODO: Change to API Call; apply function useQuery also "api" here

    if(data===undefined) {
        return (
            <div>
                {/* <h2 className="text-3xl">
                    {query.favorites ? "Favorites sketchas" : "Team sketchas"}
                </h2>
                <div className="grdi grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton
                        orgId={orgId}
                        disabled
                    />
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                </div> */}
                Loading...
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
            <div className="grdi grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                {/* <NewBoardButton
                    orgId={orgId}
                /> */}
                {data?.map((board) => (
                    <BoardCard
                        key={board.id}
                        id={board.id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board.createdAt}
                        orgId={board.orgId}
                        isFavorite={false}
                    />
                ))} 
                {/* BoardCard!! */}
            </div>
        </div>
    );
};