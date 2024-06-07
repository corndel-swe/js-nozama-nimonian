<p align="center">
  <img width="200px" src="assets/nozama-logo.png" />
</p>

# Nozama

Welcome to Nozama!

Nozama is a world-class e-commerce platform that allows users to browse and
purchase products from a wide range of categories. Users can also leave reviews
on products they have purchased, and view reviews left by other users.

This repo contains the source code for the Nozama backend, which is built using
Node.js, Express, and Knex. It is an API which allows developers to interact
with the Nozama database, so they can build their own applications on top of it.

Please note that this repo is for learning purposes. It contains plenty of bad
security practices, and should not be used in production.

## Getting started

1. Make sure your machine is set up according to the instructions with

   - [bash](https://tech-docs.corndel.com/bash/)

   - [vscode](https://tech-docs.corndel.com/vscode/)

   - [git](https://tech-docs.corndel.com/git/)

   - [node & npm](https://tech-docs.corndel.com/js/installation.html)

1. Clone the repository (i.e. download it), so you have a copy on your machine.

1. Once cloned, open a terminal in the project folder, and run

   ```bash
   npm install
   ```

   to install dependencies.

1. Run the command

   ```bash
   npm run dev
   ```

   and visit [http://localhost:5000/ping](http://localhost:5000/ping) in your
   browser. You should see `'pong'`.

## Deep dive

Take a look in the `exercises` directory for information on the deep dives. As
usual, Day 1 Exercise 1 is labeled `d1e1` and can be tested with
`npm run test:d1e1`.

You will find documentation URLs in the exercise files.

### Day 1

These exercises guide you through setting up the connection to the database, and
creating the first few model methods. Head to `exercises/d1e1.md` to get
started.

Once you have completed the exercises, you should be able to start working in
the `models` folder, so head to `CONTRIBUTING.md` for more information.

### Day 2

The exercises give you some practice creating and configuring an Express app.
Head to `exercises/d2e1.js` to get started.

Once you have finished, you should be able to start working on the API
endpoints, so head to `CONTRIBUTING.md` for more information.

### Day 3

The exercises will demonstrate some ways we can refactor our app to make it more
robust and better organised. Head to `exercises/d3e1.js` to get started.

When you're done, you are ready to refactor the Nozama app using routes and
error handling. Head to `CONTRIBUTING.md` for more information.
