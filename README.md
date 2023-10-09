# Blog Web Application

## Introduction
This repository contains code for a simple web application built using Node.js and Express.js. The application allows users to create and view blog posts. It includes features such as composing new posts, viewing a list of existing posts, and reading individual blog posts.

## Getting Started
To run this application, follow these steps:

1. Clone this repository to your local machine.

2. Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

3. Open a terminal or command prompt and navigate to the project directory.

4. Install the required dependencies by running the following command:

5. Start the application by running:


6. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage
The application has the following main features:

### Home Page
- The home page provides a brief introduction and a call-to-action button to compose new blog posts.
- Existing blog posts are displayed with truncated content and a "Read More" link.

### Compose Page
- Users can navigate to the "Compose" page by clicking the "Compose" button on the home page.
- On this page, users can create a new blog post by providing a title and content.
- After composing a post, clicking the "Publish" button will add the post to the home page.

### Post Page
- Users can click the "Read More" link on the home page to view the full content of an individual blog post.

### About Page
- The "About" page provides information about the purpose and goals of the website.

### Contact Page
- The "Contact" page provides contact information and a form for users to get in touch with the website's support team.

## Project Structure
The project consists of the following files and directories:

- `app.js`: The main application file that sets up the server, routes, and handles requests.

- `views` directory: Contains the EJS templates for rendering HTML pages.
- `home.ejs`: Template for the home page.
- `compose.ejs`: Template for the compose page.
- `post.ejs`: Template for individual blog posts.
- `about.ejs`: Template for the about page.
- `contact.ejs`: Template for the contact page.

- `public` directory: Contains static assets such as CSS files.

- `partials` directory: Contains header and footer partial templates used in multiple pages.

## Dependencies
- Express.js: Web application framework.
- Body-parser: Middleware for parsing request bodies.
- EJS: Templating engine for rendering HTML.
- lodash: Utility library for working with strings (used for case-insensitive comparisons).
