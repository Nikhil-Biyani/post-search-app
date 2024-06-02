import { Post } from "../models/post";
import * as fs from "fs";
import { searchPosts, sortPosts, paginatePosts } from "../utils/searchUtils";

const mockData: Post[] = JSON.parse(fs.readFileSync('src/mock_data.json', "utf8"));

interface SearchParams {
    query?: string;
    sortBy?: 'name' | 'dateLastEdited';
    page?: number;
    pageSize?: number;
}

// To ensure that the pagination functionality works even if the client doesn't provide these values. This means that by default, the first page with 10 posts will be returned if the client does not specify any pagination parameters.
export const searchPostService = ({query, sortBy, page, pageSize}: SearchParams) => {
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

