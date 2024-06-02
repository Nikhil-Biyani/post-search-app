import { Request, Response } from "express";
import { searchPostService } from "../services/postService";

export const getPosts = (req: Request, res: Response) => {
    const {query, sortBy, page, pageSize} = req.query;    
    const searchParams = {
        query: query as string,
        sortBy: sortBy as string,
        page: page ? parseInt(page as string, 10) : undefined,
        pageSize: pageSize ? parseInt(pageSize as string, 10) : undefined,
    }

    const result = searchPostService(searchParams);
    return res.json(result);
};