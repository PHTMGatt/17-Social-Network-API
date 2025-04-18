# Social Network API

## Description

This is a back-end API for a social network web application that allows users to create accounts, share thoughts, react to other users' thoughts, and manage friend lists. It uses MongoDB as the database, Mongoose for object data modeling, and Express.js for routing. The API handles unstructured data efficiently and is tested using Insomnia.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia (for API testing)

##### Installation

1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/social-network-api.git
   cd social-network-api

2. Install dependencies:
   npm install

3. Make sure MongoDB is running locally on your machine:
   mongod

4. Start the application:
   npm start

#### Usage

Once the server is running, use Insomnia (or another REST client) to test the API endpoints.

#### User Routes

- GET /api/users — Get all users
- GET /api/users/:id — Get a single user (with thoughts and friends populated)
- POST /api/users — Create a new user
- PUT /api/users/:id — Update a user by ID
- DELETE /api/users/:id — Delete a user and their associated thoughts
- POST /api/users/:userId/friends/:friendId — Add a friend
- DELETE /api/users/:userId/friends/:friendId — Remove a friend

#### Thought Routes

- GET /api/thoughts — Get all thoughts
- GET /api/thoughts/:id — Get a single thought
- POST /api/thoughts — Create a new thought
- PUT /api/thoughts/:id — Update a thought by ID
- DELETE /api/thoughts/:id — Delete a thought

#### Reaction Routes

- POST /api/thoughts/:thoughtId/reactions — Add a reaction to a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId — Remove a reaction

##### Models

##### User

- username (String, required, unique, trimmed)
- email (String, required, unique, must match valid email)
- thoughts (Array of ObjectId, references Thought)
- friends (Array of ObjectId, self-reference User)
- Virtual: friendCount — returns number of friends

##### Thought

- thoughtText (String, 1–280 chars, required)
- createdAt (Date, formatted with getter)
- username (String, required)
- reactions (Array of reaction subdocuments)
- Virtual: reactionCount — returns number of reactions

##### Reaction (Schema Only)

- reactionId (ObjectId, auto-generated)
- reactionBody (String, required, max 280 chars)
- username (String, required)
- createdAt (Date, formatted with getter)

## Walkthrough Video

📽️ Walkthrough Video: https://youtu.be/FxbeWo6EThA

#### Notes

- This API is not deployed and should be run locally.
- No seed data is provided — use Insomnia to manually test all routes.
- Deleting a user also deletes their associated thoughts (bonus functionality).

### License

© 2025 - For educational use only.
