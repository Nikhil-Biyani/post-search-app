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
export const searchPostService = ({query = '', sortBy = 'name', page = 1, pageSize = 10}: SearchParams) => {
    let results = mockData;
    if(query) {
        results = searchPosts(results, query);
    }

    results = sortPosts(results, sortBy);

    const totalCount = results.length;
    const {posts: paginatedResults} = paginatePosts(results, page, pageSize);

    return {totalCount, results: paginatedResults};
}

