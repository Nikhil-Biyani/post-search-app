# Post Search API

## Overview

This project is a RESTful API built with TypeScript and Node.js that allows searching, sorting, and paginating posts. It demonstrates best practices for writing clean, modular, testable, and well-tested code. 
The project uses mock_data.json for demonstration purposes.

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-name>
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

By default, the server will run on `http://localhost:3000`.

## Running Tests

To run the tests, use the following command:

```sh
npm test
```

## Deployment

The API is deployed on Render:
```sh
https://post-search-app.onrender.com/
```

# Postman Documentation
```
https://www.postman.com/nikhilbiyani0/workspace/post-search-app/collection/32932024-07a0c75c-0e39-4d01-bb2e-7407b48ba884?action=share&creator=35952343
```

## API Endpoints

### 1. Get All Posts

* **Method: GET**

* **URL: /posts**

* **Retrieve a list of all posts.**

### 2. Get Posts for Query "Dynamic"

* **Method: GET**

* **URL: /posts?query=Dynamic**

* **Retrieve posts that match the search term "Dynamic" in their name or description.**

### 3. Get Posts with Exact Match Query "Dynamic Web Applications"

* **Method: GET**

* **URL: /posts?query=Dynamic Infrastructure Designer"**

* **Retrieve posts that exactly match the search term "Dynamic Infrastructure Designer" in their name or description.**

### 4. Sort Posts By Name

* **Method: GET**

* **URL: /posts?sortBy=name**

* **Retrieve posts sorted by their name.**

### 5. Sort Posts By Date Last Edited

* **Method: GET**

* **URL: /posts?sortBy=dateLastEdited**

* **Retrieve posts sorted by their last edited date.**

### 6. Query and Paginate Results

* **Method: GET**

* **URL: /posts?page=1&pageSize=2**

* **Retrieve a paginated list of posts. This example retrieves the first page with a page size of 2.**


## Query Parameters

* **query**: Search term to filter posts by name or description. Use double quotes for an exact match.
* **sortBy**: Field to sort by (name or dateLastEdited). Defaults to sorting by name.
* **page**: Page number for pagination. Defaults to 1.
* **pageSize**: Number of posts per page. Defaults to 10.
