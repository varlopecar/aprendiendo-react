Task Description:

You are tasked with building a React application that displays a list of users and their details. You will use two APIs:

API for User List:

Endpoint: https://jsonplaceholder.typicode.com/users
This API will provide a list of users in JSON format.
API for User Details:

Endpoint: https://jsonplaceholder.typicode.com/users/{userId}
Replace {userId} with the selected user's ID from the list.
This API will provide details about a specific user based on the ID.
Requirements:

Create a React application that displays a list of users fetched from the first API.

Use React state to manage the list of users and the selected user's details.

When a user clicks on a user's name in the list, fetch and display the details of that user from the second API.

Display the following user details:

Name
Username
Email
Phone
Website
Company Name
Implement error handling for API requests. Display an error message if the API request fails.

Use TypeScript for type checking.

Bonus:

Implement loading indicators while data is being fetched.
Tips:

You can use the fetch API or a library like Axios to make API requests.

Organize your code into components (e.g., UserList, UserDetails) for better maintainability.

Use functional components and hooks for managing state and side effects.

Don't forget to handle edge cases, such as when the user list is empty or when an invalid user ID is selected.

This coding test will assess the candidate's ability to work with React, TypeScript, API integration, and state management. It also evaluates their understanding of error handling and user interface design.
