import request from 'supertest';
import app from '../app';

describe('Post Controller', () => {
    it('should return all posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).toBe(200);
        expect(response.body.totalCount).toBe(100);
    });

    it('should filter posts based on search query', async () => {
        const response = await request(app).get('/posts?query=Dynamic');
        expect(response.status).toBe(200);
        expect(response.body.results[0].name).toBe('Dynamic Infrastructure Designer, Dynamic Identity Specialist, Dynamic Metrics Designer, Dynamic Marketing Consultant, Dynamic Security Director, Dynamic Interactions Supervisor, Dynamic Division Strategist, Dynamic Marketing Orchestrator');
    });

    it('should filter posts based on exact match search query', async () => {
        const response = await request(app).get('/posts?query="Dynamic Identity Specialist"');
        expect(response.status).toBe(200);
        expect(response.body.results[0].name).toBe('Dynamic Identity Specialist');
    });

    it('should sort posts by name', async () => {
        const response = await request(app).get('/posts?sortBy=name');
        expect(response.status).toBe(200);
        expect(response.body.results[0].name).toBe('Central Creative Producer');
    });

    it('should sort posts by dateLastEdited', async () => {
        const response = await request(app).get('/posts?sortBy=dateLastEdited');
        expect(response.status).toBe(200);
        expect(response.body.results[0].name).toBe('Regional Marketing Developer');
    });

    it('should paginate results', async () => {
        const pageSize = 2;
        const response = await request(app).get(`/posts?page=1&pageSize=${pageSize}`);
        expect(response.status).toBe(200);
        expect(response.body.results.length).toBe(pageSize);
    });
});
