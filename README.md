# Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements and implementation
### Requirements
As a user visits the root URL, the user can see a grid of images that fill the screen on load.
As the user scrolls the browser, more images are loaded dynamically. When the user clicks an image, it is removed from the list and disappears.
### Implementation
The infinite scroll is implemented with the help of react-intersection-observer, holding in the state of App component an array of photos fetched dynamically as the users scrolls down. 
The functionality for removing images on click is implemented with a function executed on click, which removes from the array of photos the clicked one.
