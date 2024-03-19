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
            id:"1",
            title:"huy",
            imageUrl:"/placeholders/1.svg",
            authorId:"Huy1",
            authorName:"HuyQQ1",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org1",
            isFavorite: true,
        },
        {
            id:"2",
            title:"Koi",
            imageUrl:"/placeholders/2.svg",
            authorId:"Huy2",
            authorName:"HuyQQ2",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org2",
            isFavorite: true,
        }
        ,
        {
            id:"3",
            title:"Koi",
            imageUrl:"/placeholders/3.svg",
            authorId:"Huy3",
            authorName:"HuyQQ3",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org3",
            isFavorite: true,
        }
        ,
        {
            id:"4",
            title:"Koi",
            imageUrl:"/placeholders/4.svg",
            authorId:"Huy4",
            authorName:"HuyQQ4",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org4",
            isFavorite: true,
        }
        ,
        {
            id:"5",
            title:"Koi",
            imageUrl:"/placeholders/5.svg",
            authorId:"Huy5",
            authorName:"HuyQQ5",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org5",
            isFavorite: true,
        }
        ,
        {
            id:"6",
            title:"Koi",
            imageUrl:"/placeholders/6.svg",
            authorId:"Huy6",
            authorName:"HuyQQ6",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org6",
            isFavorite: true,
        }
        ,
        {
            id:"7",
            title:"Koi",
            imageUrl:"/placeholders/7.svg",
            authorId:"Huy7",
            authorName:"HuyQQ7",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org7",
            isFavorite: true,
        }
        ,
        {
            id:"8",
            title:"Koi",
            imageUrl:"/placeholders/8.svg",
            authorId:"Huy8",
            authorName:"HuyQQ8",
            createdAt: new Date(2024, 11, 11),
            orgId:"Org8",
            isFavorite: true,
        }
        
    ]; //TODO: Change to API Call; apply function useQuery also "api" here

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
            </div>
        </div>
    );
};