# Project Setup Guide

Follow these steps to set up and run the project:

## 1. Install Dependencies

```
npm install
```

## 2. Configure Environment Variables

Copy the sample environment file and update it with your own values:

```
cp .env.sample .env
```

Edit the `.env` file and enter the required environment variables.

## 3. Migrate Database Schema

Push the database schema to your RAW Postgres database using Drizzle Kit:

```
npx drizzle-kit migrate
```

## 4. Run the Project

Start the application:

```
npm start
```

---

For more details, refer to the documentation or contact the project maintainer.
