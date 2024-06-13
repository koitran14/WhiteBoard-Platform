"use client";

import { useEffect, useState, useCallback } from "react";
import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NewBoardButton } from "./new-board-button";
import { Board, getAllBoards } from "@/actions/board";
import { useParams, useSearchParams } from "next/navigation";

interface BoardListProps {
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
    const [data, setData] = useState<Board[]>([]);
    const [filteredData, setFilteredData] = useState<Board[]>([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const searchParams = useSearchParams();

    const fetchBoards = useCallback(async (userId: string, orgId: string) => {
        try {
            setLoading(true);
            const boards = await getAllBoards(userId, orgId);
            setData(boards);
        } catch (error) {
            console.error("Error fetching boards:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBoards(params.UserID as string, orgId);
    }, [orgId, params.UserID, fetchBoards]);

    useEffect(() => {
        const searchQuery = searchParams.get('search')?.toLowerCase() || '';

        const filteredBoards = data.filter((board) => 
            board.title.toLowerCase().includes(searchQuery)
        );

        setFilteredData(filteredBoards);
    }, [data, searchParams]);

    if (loading) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favorites ? "Favorites sketchas" : "Team sketchas"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                </div>
            </div>
        );
    }

    if (!filteredData.length && query.search) {
        return <EmptySearch />;
    }

    if (!filteredData.length && query.favorites) {
        return <EmptyFavorites />;
    }

    if (!filteredData.length) {
        return <EmptyBoards />;
    }

    const boardsToRender = query.favorites 
        ? filteredData.filter(board => board.isFavorite)
        : filteredData;

    return (
        <div>
            <h2 className="text-3xl">
                {query.favorites ? "Favorites sketchas" : "Team sketchas"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId} />
                {boardsToRender.map(board => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        createdAt={new Date(board.createdAt || '')}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite || false}
                    />
                ))}
            </div>
        </div>
    );
};
