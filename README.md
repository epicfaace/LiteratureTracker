# Literature Tracker

A Single page web application to keep track of books/ articles you have read in the past, review and share them. I have used MEAN stack with Angular Material for fluid grid layout.

## Walkthrough

* Literature added to library can be a book, an article, a blog, or an academic paper. For simplicity, I have maintained only Book name and Author name for books, and Name and URL for the rest of the literature types.
* You can Review a book. A review is restricted to 500 characters. (There is a dummy link "FREE SAMPLE", which I plan to use in future updates to the application)
* You can Share or Explore a literature that has a URL. Clicking on Share would open a basic email template on your default email client. Clicking on Explore would open the link in a new tab.

## Technical Details

* I have used HTML5 form validation for validating user input.
* I have used Angular Material for fluid grid layout and form elements.
* The application runs on a NodeJs server with a MongoDB hosting the data. I use Mongoose ODM as an interface to access MongoDB from the server.

## Instructions to Run

* Clone or download the repository
* You need node, bower and MondoDB installed on your computer before you can run this application
* On the terminal run `npm install` to install all the node dependencies
* On the terminal run `bower install` to install all the front-end dependencies
* Make sure MongoDB server is running
* On the terminal run `node "bin\www"` to run the backend server
* The application will be running on port 3000. On the browser's address bar, type `localhost:3000`

## Future Enhancements

* Fetch data from public repositories like Google books or Good reads to fetch data regarding books and provide a list of books to choose from. This can also help get an image for the book cover.
* Provide image upload when an image is not available already.
* Provide safe file upload and enable sharing of free samples of books/ literature that interests the user.
* Expand the database to store Author information to easily fetch books related to user's interest.

## Live Application

The application is live on this URL: *To be updated*
