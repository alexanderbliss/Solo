# Review Monster

This app’s main objective is to provide game reviewers with a constructive space in order to improve their skills as reviewers. The app also strives to create a more personal connection between reviewers and their audiences. 
The app allows the user to create a profile, log in, add reviews and view others’ reviews, leave constructive comments on the composition of the review, and also gives the user the ability to follow other reviewers to better connect with them. 

Veiw app. note that apps on heroku can take 10-15 seconds to load.

https://thawing-journey-23505.herokuapp.com/#/home

Testing Credentials

username : abliss01

password: test


## Technologies Used

Angular,
SQL, 
JavaScript,
HTML,
CSS,
Node.js, 
Angular Material,
Giant-Bomb API,
Passport,
Node Plug Ins: jk-stars-angular, ng-YouTube-embed, TextAngular, FontAwesome.

## Set up

1. Fork or clone this repository
2. Run npm install
3. Run npm start
4. Visit http://localhost:5000 in your browser

The app should now be live. afer registering you should be able to review games and see others reviews.

Optional: To set up database see Installation Below.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- postgresql
-postico

### Installing

Steps to get the development environment running.

```sql
CREATE TABLE "reviews" (
  "id" serial primary key,
  "user_id" varchar(80) not null,
  "game" varchar(40) not null,
  "title" varchar(40) ,
  "text" varchar(1000000) ,
  "link" varchar(100) 
);

CREATE TABLE "comments" (
  "id" serial primary key,
  "comment" varchar(500) not null,
  "review_id" varchar(1000) not null
);

CREATE TABLE "pictures" (
  "id" serial primary key,
  "user_id" varchar(80) not null,
  "game" varchar(40) not null,
  "title" varchar(40) ,
  "text" varchar(1000000) ,
  "link" varchar(100) 
);


CREATE TABLE "following" (
  "id" serial primary key,
  "user_id" varchar(80) not null,
  "reviewer_id" varchar(40) not null,
  "reviewer_name" varchar(40) not null
);

```

## Documentation

https://docs.google.com/document/d/1uVCvlGZ0_gXcgOk0NKlXkAkkaXClQqsu5jkaMbGWoSQ/edit?usp=sharing


Click the link below to see first steps in planning proccess.

https://twitter.com/AlexBliss93/status/932343267550777344

### Completed Features

High level list of items completed.

- [x] Created ability to Add reviews
- [x] Added GiantBomb API to search for games
- [x] Added Text Angular for better formating for reviews
- [x] Added jk-angular-stars to reviews
- [x] Allowed reviewers to include youtube videos
- [x] Delete reviews
- [x] Added Ability to comment on reviews
- [x] Changed register page to form that requires more information
- [x] Used angular matireal to help style website
- [x] Added ability to search for Reviewers
- [x] Added ability Edit user information


### Next Steps

- [ ] Complete Follow route to help reviewers track others content
- [ ] Clean up styleing
- [ ] Make mobile responisive
- [ ] Flesh out comment section more
- [ ] Create user experience for only veiwing reviews
- [ ] Add administration role to better curate content
notes about how to deploy this on a live system

## Authors

Alexander Bliss
