import { Request, Response } from "express";
import { searchPostsService } from "../services/postService";

export const getPosts = (req: Request, res: Response) => {
    const {query, sortBy, page, pageSize} = req.query;    
    const searchParams = {
        query: query as string,
        sortBy: sortBy as string,
        page: page ? parseInt(page as string, 1) : undefined, // default as 1 if it is passed in the url
        pageSize: pageSize ? parseInt(pageSize as string, 10) : undefined, // default as 10 if it is passed in the url
    }

    const result = searchPostsService(searchParams);
    return res.json(result);
};