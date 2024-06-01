import e from "express";
import { Post } from "../models/post";

export function searchPosts(posts: Post[], query: string): Post[] {
    if(!query) {
        return posts;
    }

    const exactMatch = query.startsWith('"') && query.endsWith('"');
    const trimmedQuery = query.replace(/"/g, '').toLowerCase();

    return posts.filter(post => {
        const nameMatch = exactMatch ? post.name.toLowerCase() === trimmedQuery : post.name.toLowerCase().includes(trimmedQuery);
        const descMatch = exactMatch ? post.description.toLowerCase() === trimmedQuery : post.description.toLowerCase().includes(trimmedQuery);

        return nameMatch || descMatch;
    });
}

export function sortPosts(posts: Post[], sortBy: 'name' | 'dateLastEdited'): Post[] {
    return posts.sort((a, b) => {
        if(sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return new Date(b.dateLastEdited).getTime() - new Date(a.dateLastEdited).getTime();
        }
    });
}

export function paginatePosts(posts: Post[], page: number, pageSize: number): {total: number, posts: Post[]} {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
        total: posts.length,
        posts: posts.slice(start, end),
    };
}