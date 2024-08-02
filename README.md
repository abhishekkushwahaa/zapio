# Zapio - A Zapier Clone

Zapio is a Zapier clone that allows users to create and manage Zaps. A Zap is a connection between two apps made of a trigger and an action. Whenever the trigger app event occurs, Zapio will automatically perform the action app event.

## Features

- User authentication
- Create, read, update, and delete Zaps
- Create, read, update, and delete triggers
- Create, read, update, and delete actions
- View all Zaps
- View all triggers
- View all actions
- View all users
- View all Zaps for a specific trigger
- View all Zaps for a specific action
- View all triggers for a specific Zap
- View all actions for a specific Zap
- View all Zaps for a specific user
- View all triggers for a specific user
- View all actions for a specific user

## Technologies

- React
- Node.js with Express and Bun
- PostgreSQL with Prisma
- TypeScript and JavaScript
- Tailwind CSS
- Shadcn UI for Components
- Next.js
- Authentication and Authorization
- Vercel for Deployment

## Installation

1. Clone the repository
2. Install the dependencies
3. Create a `.env` file in the root directory and add the following environment variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/zapio"
```

4. Run the migrations with the following command:

```bash
bunx prisma migrate dev --name init
```

5. Seed the database with the following command:

```bash
bunx prisma db push --preview-feature
```

6. Start the development server with the following command:

```bash
bun run dev
```
