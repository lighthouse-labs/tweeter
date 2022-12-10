# Tweeter Project

Tweeter is a simplified, single-page Twitter clone where users can create short posts of up to 140 characters. This project serves as a hands-on opportunity to apply HTML, CSS, JavaScript, jQuery, and AJAX skills, combined with a pre-built backend using Node and Express.

## Project Description

The aim is to build a single-page application that primarily focuses on the client-side, showcasing dynamic content updates without page reload, asynchronous server requests, and front-end design and interactions.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser to start tweeting!

## Features

### External Fonts
- Utilizes Source Sans Pro and Bungee fonts.

### Navigation Bar
- Stylized navigation bar with specified dimensions and color scheme.
- Stays fixed on top during scrolling.

### Main Container
- Displays tweets in reverse chronological order.
- 90% width of parent element and centered alignment.

### Compose Tweet Form
- AJAXified form submission to `/tweets` endpoint using POST method.
- Dynamic form validation with jQuery.

### Dynamic Tweets
- New tweets are displayed at the top without needing to refresh the page.

### Character Counter
- Interactive character counter with color change beyond 140 characters.

### Responsive Design
- Flexbox and media queries for responsive layout adjustment.

### SASS
- Styling with SASS for cleaner and maintainable CSS.

## Learning Outcomes

- Building a single-page application.
- Client-side JavaScript and AJAX interactions.
- HTML/CSS with responsive web design.
- Problem-solving and debugging in web development.
- Integration with a pre-built backend.

## Submission

Ensure the following before submitting the project:

- All necessary dependencies are listed in `package.json`.
- Project is pushed to your GitHub repository.
- README is updated with instructions on how to run the project.
- Project runs without errors.

## Dependencies

- Express
- Node 5.10.x or above

## License

This project is open source and available under the [MIT License](LICENSE).
