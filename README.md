# Quiz App Documentation

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Libraries Used](#libraries-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a Quiz App implemented in React, using React Router, Recoil for state management, and styled with Tailwind CSS. The app consists of a timer, a set of questions with options, and the ability for users to submit their answers.

## Features
- Countdown timer for the quiz.
- Dynamic rendering of quiz questions and options.
- Real-time tracking of selected answers using Recoil state.
- Red border highlighting for selected options.
- Automatic navigation to the next page after the quiz timer runs out or when the user submits their answers.

## Project Structure
The project structure is organized into components, atoms, and pages.

- **Components:** 
  - `QuestionTemplate`: Renders the quiz questions and handles user interactions.
  - `Timer`: Displays and manages the countdown timer.

- **Atoms:**
  - `answerAtom`: Recoil atom to store selected answers.
  - `timeTakenAtom`: Recoil atom to store the time taken for the quiz.

- **Pages:**
  - Currently, there's a placeholder page "page3" that the user is navigated to after completing the quiz.

## Libraries Used
- React: JavaScript library for building user interfaces.
- React Router: Declarative routing for React.js applications.
- Recoil: State management library for React.
- Tailwind CSS: Utility-first CSS framework.

## Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.

## Usage
1. Run `npm start` to start the development server.
2. Open your browser and go to `http://localhost:3000`.
3. Explore the quiz app and submit answers.

## Customization
Feel free to customize the styling, add more questions, or extend the functionality as needed. You can modify the components, atoms, and pages to suit your requirements.

## Contributing
If you'd like to contribute to the project, please follow the standard GitHub Fork and Pull Request workflow. Contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).
