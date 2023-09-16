# BUilding a Quiz Component with React

This is a simple quiz application built using React. It allows users to answer quiz questions and provides feedback on their answers. As I go through the React Learning Program by Meta+Andela+Pluralsight.

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### Prerequisites

You will need the following software installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.

```
git clone <this_repository_url>
```

2. Navigate to the project directory.

```
cd <project-folder>
```

3. Install the project dependencies.

```
npm install
```

### Usage

To start the development server and view the app in your web browser, use the following command:

```
npm start
```

The app will be available at `http://localhost:3000`.

## Tasks

Here are the tasks that have been completed in this project:

1. **Create a new file in `src/` named `Quiz.js`.** This file serves as the main component for the quiz app.

2. **Import `React` and `Component` at the beginning of `Quiz.js`.** This allows us to use React features.

3. **Load quiz data from `quiz_data.json`.** The data is used to populate quiz questions and answer options.

4. **Create a `Quiz` class that extends `Component` and export it as the default component.** This class represents the main quiz component.

5. **Add a `render()` method to the `Quiz` class to display quiz content.** This method renders the quiz questions and answer options.

6. **Implement a constructor in the `Quiz` class to initialize state.** State is used to keep track of the current quiz question.

7. **Create a `QuizQuestion` component to display quiz questions and answer options.** This component handles individual quiz questions.

8. **Add a `QuizQuestionButton` component to display answer buttons.** These buttons allow users to select their answers.

9. **Implement logic to progress through quiz questions and display error messages.** The app tracks the current question and displays feedback based on user answers.

10. **Create a `QuizEnd` component to display a message and a "Reset Quiz" button at the end of the quiz.** This component appears when the quiz is completed.

11. **Add functionality to reset the quiz and start over.** Users can restart the quiz by clicking the "Reset Quiz" button.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
