
# Ecommerce Backend Project

This is a backend project for an ecommerce website built using Node.js, Nest.js, and PostgreSQL.

## Installation

1.  Clone the repository: `git clone https://github.com/s04v/ecommerce-backend.git`
2.  Install the dependencies: `npm install`
3.  Set up your environment variables: create a `.env` file and set the following variables:
    -   `DB_URL`: the URI for your PostgreSQL database
    -   `JWT_SECRET`: a secret key for JSON Web Tokens
    -   `ADMIN_LOGIN`: a login for admin account
    -   `ADMIN_PASSWORD`: a password for admin account
4.  Start the server: `npm start`

## API Routes

### Authentication Routes

-   POST `/auth`: Login for a admin and get a JSON Web Token

### Product Routes

-   GET `/products`: Get a list of all products
-   GET `/products/:id`: Get a specific product by ID
-   POST `/products`: Create a new product (requires authentication)
-   PATCH `/products/:id`: Update a product by ID (requires authentication)
-   DELETE `/products/:id`: Delete a product by ID (requires authentication)

### Review Routes

-   GET `/products/:productId/reviews`: Get a list of all reviews for a specific product
-   POST `/products/:productId/reviews`: Create a new review for a specific product

### Order Routes
-   GET `/orders`: Get a list of all orders (requires authentication)
-   GET `/orders/:id`: Get a specific order by ID (requires authentication)
-   POST `/orders`: Create a new order 
-   GET `/orders/statistics`: Get statistics for all orders (requires authentication)
-   PATCH `/orders/:id`: Update a specific order by ID (requires authentication)
-   DELETE `/orders/:id`: Delete a specific order by ID (requires authentication)