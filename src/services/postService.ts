import { Post } from "../models/post";
import * as fs from "fs";
import { searchPosts, sortPosts, paginatePosts } from "../utils/searchUtils";

const mockData: Post[] = JSON.parse(fs.readFileSync('src/mock_data.json', "utf8"));

interface SearchParams {
    query?: string;
    sortBy?: string;
    page?: number;
    pageSize?: number;
}

export const searchPostsService = ({query, sortBy, page, pageSize}: SearchParams) => {
    let results = mockData;

    if (!query && !sortBy && !page && !pageSize) {
        return { totalCount: results.length, results };
    }

    if(query) {
        results = searchPosts(results, query);
    }

    if(sortBy) {
        results = sortPosts(results, sortBy);
    }

    const totalCount = results.length;

    if (page && pageSize) {
        const { posts: paginatedResults } = paginatePosts(results, page, pageSize);
        return { totalCount, results: paginatedResults };
    }

    return { totalCount, results };
}

