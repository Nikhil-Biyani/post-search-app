import { searchPostsService } from '../services/postService';

describe('Post Service', () => {
    it('should return all posts when no search query is provided', () => {
        const result = searchPostsService({});
        expect(result.totalCount).toBe(100);
    });

    it('should filter posts based on search query', () => {
        const result = searchPostsService({ query: 'Dynamic' });
        expect(result.totalCount).toBe(8);
        expect(result.results[0].name).toBe('Dynamic Infrastructure Designer, Dynamic Identity Specialist, Dynamic Metrics Designer, Dynamic Marketing Consultant, Dynamic Security Director, Dynamic Interactions Supervisor, Dynamic Division Strategist, Dynamic Marketing Orchestrator');
    });

    it('should filter posts based on exact match search query', () => {
        const result = searchPostsService({ query: '"Dynamic Identity Specialist"' });
        expect(result.totalCount).toBe(1);
        expect(result.results[0].name).toBe('Dynamic Identity Specialist');
    });

    it('should sort posts by name', () => {
        const result = searchPostsService({ sortBy: 'name' });
        expect(result.results[0].name).toBe('Central Creative Producer');
    });

    it('should sort posts by dateLastEdited', () => {
        const result = searchPostsService({ sortBy: 'dateLastEdited' });
        expect(result.results[0].name).toBe('Regional Marketing Developer');
    });

    it('should paginate results', () => {
        const pageSize = 2;
        const page = 1;
        const result = searchPostsService({ page, pageSize });
        expect(result.results.length).toBe(pageSize);
    });
});
