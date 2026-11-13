# Social Network API

<p align="center">
  <img src="https://raw.githubusercontent.com/PHTMGatt/12-React-Portfolio/main/src/assets/photos/Social%20Network%20API.png" width="900" alt="Social Network API project artwork">
</p>

A REST API for a social network, written in TypeScript with Express, Mongoose and MongoDB: users, thoughts, reactions and friend lists.

Walkthrough video: https://youtu.be/FxbeWo6EThA

## What it does

- **Users:** create, read, update and delete users, each with a unique username and a validated email.
- **Friends:** add and remove friends; a virtual `friendCount` is returned with each user.
- **Thoughts:** post short thoughts (1 to 280 characters) that belong to a user; a virtual `reactionCount` is returned.
- **Reactions:** add and remove reactions on a thought (stored as subdocuments).
- **Cleanup:** deleting a user also deletes that user's thoughts.

## Tech stack

Node.js, Express 4, TypeScript, MongoDB with Mongoose 8. Tested by hand with Insomnia.

## Run it

Needs Node.js and a MongoDB instance. By default it connects to `mongodb://127.0.0.1:27017/socialNetworkDB`.

Optional environment variables: `MONGODB_URI`, `PORT` (defaults to 3001).

```bash
npm install
npm start        # compiles with tsc, then runs dist/server.js
npm run seed     # optional: wipes the database, then adds two users and one thought
```

There is no automated test suite (`npm test` is a placeholder). The API is not deployed.

## Endpoints

All routes are under `/api`.

| Resource | Routes |
|---|---|
| Users | `GET /users`, `POST /users`, `GET /users/:id`, `PUT /users/:id`, `DELETE /users/:id` |
| Friends | `POST /users/:userId/friends/:friendId`, `DELETE /users/:userId/friends/:friendId` |
| Thoughts | `GET /thoughts`, `POST /thoughts`, `GET /thoughts/:id`, `PUT /thoughts/:id`, `DELETE /thoughts/:id` |
| Reactions | `POST /thoughts/:thoughtId/reactions`, `DELETE /thoughts/:thoughtId/reactions/:reactionId` |

Sample requests (JSON body):

```
POST /api/users
{ "username": "alice", "email": "alice@example.com" }

POST /api/thoughts
{ "thoughtText": "Hello from Alice!", "username": "alice", "userId": "<alice's _id>" }

POST /api/thoughts/<thoughtId>/reactions
{ "reactionBody": "Nice one", "username": "bob" }
```

Unknown IDs return a 404 with a message; other failures return a 500.

## What I learned / built

- Modelling related data in MongoDB with Mongoose: references, a self-referencing friends list, subdocuments, virtuals and getters.
- Structuring an Express and TypeScript API into models, controllers and routes.
- Testing an API by hand with Insomnia. Automated route tests are the obvious next step.
