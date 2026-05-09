# QuickTasks

QuickTasks is a beginner-friendly task management application built with Angular. It lets users add, sort, complete, and delete tasks, while also visualizing task progress with a dashboard chart powered by Highcharts.

## Features

- Add new tasks with title, priority, and due date
- Mark tasks as completed or pending
- Delete tasks with confirmation
- Sort tasks by newest, oldest, or priority
- View a dashboard summary of completed vs pending tasks
- Use a simple local JSON server as the backend data source

## Tech Stack

- Angular 19
- TypeScript
- HTML and CSS
- Highcharts
- JSON Server
- Node.js
- npm

## Angular Version

- Angular CLI: 19.2.19
- Angular packages: 19.2.x

## Project Structure

```text
quicktasks/
|-- public/
|-- src/
|   |-- app/
|   |   |-- dashboard/
|   |   |-- task-list/
|   |   `-- task.service.ts
|-- db.json
|-- angular.json
|-- package.json
`-- tsconfig.json
```

## Installation

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install dependencies:

```bash
npm install
```

## How to Run the Project

This project uses two local processes:

1. Start the mock backend:

```bash
npm run server
```

2. In a new terminal, start the Angular development server:

```bash
npm start
```

3. Open your browser and visit:

```text
http://localhost:4200
```

## Build Instructions

To create a production build:

```bash
npm run build
```

The build output will be generated in the `dist/` folder.

## Screenshots

Add screenshots here before or after uploading to GitHub.

- Home page screenshot
- Dashboard screenshot

## Future Improvements

- Add task editing support
- Add task filtering by completion status
- Add persistent cloud/database storage
- Improve form validation and user feedback
- Add authentication for multiple users

## Notes

- The project uses `db.json` as demo data for `json-server`.
- `node_modules/`, `dist/`, local caches, logs, editor folders, and environment files are excluded from Git tracking through `.gitignore`.
