# Portfolio of Vitor Stähelin

This repository contains the source code for my personal portfolio, built with React, TypeScript, and Vite. The goal is to showcase my skills and projects in an organized and visually appealing way.

## Overview

The portfolio is a responsive website designed to be accessible on various devices. It uses a separate content management system (CMS), hosted on GitHub Pages ([https://vstahelin.github.io/cms-portfolio/](https://vstahelin.github.io/cms-portfolio/)), to separate the data from the interface code. This approach simplifies and streamlines content updates without requiring changes to the front-end code.

## Technologies Used

- **React**: JavaScript framework for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code maintainability and reliability.
- **Vite**: A web development tool that offers a fast development server and optimized build process.
- **Tailwind CSS**: Utility-first CSS framework that simplifies the styling process.
- **React Router**: Library for managing application routes.
- **React GA4**: To integrate Google Analytics 4 into the site.
- **React Icons**: For adding icons to the site.
- **GitHub Actions**: To automate tasks like `lint` and `deploy`.

## How the CMS Works

The CMS (Content Management System) is a separate repository hosted on GitHub Pages ([https://vstahelin.github.io/cms-portfolio/](https://vstahelin.github.io/cms-portfolio/)). It contains JSON files with portfolio data (about me, projects, experiences, etc.) and images. The React application in this repository fetches this data from the CMS and renders the website. Check the CMS repository README for more details about its structure and functionality.

## How to Run the Project

1. **Clone the repository:**

```bash
git clone https://github.com/VStahelin/portfolio.git
```

2. **Install the dependencies:**

```bash
npm install
``` 
or
```bash
yarn install
```

3. **Start the development server:**

```bash
npm run dev
``` 
or
```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to view the portfolio.

## Deployment

The deployment to GitHub Pages is automated using GitHub Actions. After a push to the `main` branch, the deployment workflow runs, building the application and publishing the files to the `gh-pages` branch.
