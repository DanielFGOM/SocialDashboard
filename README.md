# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# SocialDashboard
A multi-page web application with GitHub OAuth authentication that displays users, posts, and comments from the JSONPlaceholder API. Built with React + Vite and deployed on Cloudflare Workers.

## Live Demo: https://social-dashboard.danielfranciscogom.workers.dev
## Repository: https://github.com/DanielFGOM/SocialDashboard

Project Description
This project was developed as part of a junior developer challenge. The goal was to build a complete social dashboard with GitHub authentication, multi-page navigation, and consumption of a public REST API (JSONPlaceholder).

The application allows users to log in with their GitHub account via Auth0, browse a list of users from JSONPlaceholder, view their posts, and read the comments on each post, with seamless navigation between pages without reloading the browser.

Setup Instructions
Prerequisites

Node.js LTS installed — download from nodejs.org
Git installed
Auth0 account
GitHub account with an OAuth App created

1. Clone the repository
bashgit clone https://github.com/DanielFGOM/SocialDashboard.git
cd SocialDashboard/social-dashboard
2. Install dependencies
bashnpm install
3. Configure environment variables
Create the .env file in the social-dashboard root based on .env.example:
bashcp .env.example .env
Fill the variables with your Auth0 credentials:
envVITE_AUTH0_DOMAIN=your-domain.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
4. Configure Auth0

Create an account on auth0.com
Create a new application → Single Page Application
In Application Settings, add the following URLs:

Allowed Callback URLs:
http://localhost:5173, https://social-dashboard.danielfranciscogom.workers.dev

Allowed Logout URLs:
http://localhost:5173, https://social-dashboard.danielfranciscogom.workers.dev

Allowed Web Origins:
http://localhost:5173, https://social-dashboard.danielfranciscogom.workers.dev

In Authentication → Social connections, enable GitHub and paste the Client ID and Client Secret from your GitHub OAuth App
5. Configure GitHub OAuth App

Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
Configure the fields:

Homepage URL: https://social-dashboard.danielfranciscogom.workers.dev
Authorization callback URL: https://your-domain.us.auth0.com/login/callback

Copy the Client ID and Client Secret and paste them into Auth0 → Social connections → GitHub

6. Run in development
bashnpm run dev
The app will be available at http://localhost:5173
7. Build and deploy to production
bashnpm run build
npx wrangler deploy
8. Push changes to GitHub
bashgit add -A
git commit -m "change description"
git push origin main

Technical options
These are the Technologies I chose and the reason behind each decision:
React was the framework chosen to build the interface. It allows for the creation of reusable components and the clear and organized management of application state, making it easier to scale the project and keep the code clean.
Vite was used as the build tool and development server. Its fast startup and minimal configuration make it ideal for React projects. It generates a production-ready, optimized dist folder with a single command.
Tailwind CSS was used as the sole styling framework, as required by the challenge. Its utility classes allow for applying styles directly to the JSX without the need for separate CSS files, which speeds up development and keeps the code more organized.
React Router v6 was used for client-side routing. It allows for the creation of shareable URLs like /users, /posts, and /posts/:id without reloading the page, providing a smooth browsing experience.
Auth0 was chosen as the intermediary for GitHub OAuth authentication instead of implementing the OAuth flow directly. The reason is that the GitHub Client Secret cannot be in the frontend code because anyone could see it. Auth0 acts as a secure server that handles this exchange without exposing sensitive credentials. Cloudflare Workers was used for production deployment via wrangler deploy. Integration with Vite is straightforward, and deployment takes less than a minute once configured. JSONPlaceholder is the public REST API specified in the challenge. It provides user, post, and comment endpoints without requiring authentication, simplifying data consumption.

The challenge specified "Tailwind only" for styling, but allowed any framework or build tool. I interpreted the restriction as applying only to visual UI libraries like Bootstrap or Material UI. React Router and Auth0 are not styling libraries, so they fall within the rules.
Two separate OAuth applications were created for local development and production, as recommended in the challenge tips.

## My biggest mistake was not reading part of the instructions properly and confusing /photos with /posts. It took me hours to find a solution, and when I reread the instructions, it never asked for /photos.
React hook structure — Errors caused by declaring duplicate variables, incorrect state returns, or calling hooks outside the component.
Import paths — Vite couldn't import files outside its root folder; I had to reorganize the authentication files within src/components/.
Callback URLs — Setting up Auth0 and GitHub to work simultaneously locally and in production required understanding exactly which URL each service expected.
Git submodules — Two folders with their own .git files were causing conflicts. I resolved this by removing the .git file from the inner folder.
