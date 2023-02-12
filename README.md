# Todo app

## Introduction
   This is a todo app that users can login and add, check, and translate their todo tasks.
   The website has been hosted on Google Cloud Plate Platform (GCP), you can either directly access the website via https://smooth-graph-377023.ts.r.appspot.com, or clone the Github repository and run it on your own computer.
   Because the website connects with the server using HTTPS protocol, and the server lacks authentication from a trusted third party, the data requests from the website might be banned by your browser. To fix this issue before the project is officially deployed with trusted authentication, you need to delete domain security policies on your browser. Taking Chrome as an example,
   1. visit chrome://net-internals/#hsts
   2. delete domain: 34.151.70.45


There are two types of users: normal users and admin

## Normal users
   #### Registation
   As a new user, the user should register by clicking register now, you need to input a username that you like and input your password twice to make sure each time you input the same password. And then, finish the registration by clicking the 'sign up' button. Please note that if a username is already existed, registration process can't finish, every username is unique.
   
   #### Login to your account
   Input your registered username and password, and then click login. Now you are able to access and manage your todo list. You can check all your todo tasks, update the status of each todo, and translate any todo item into another language. You can also add a new todo by inputting your new todo task and corresponding deadline, and then clicking 'Add' button. You can leave the page by clicking 'Log out' button.

___

## Admin
   There is only one default admin account. You can access the admin account (username: admin, password: admin123) via the login page. Once you login to the admin account, all of the current users are listed on this admin page, you can check the username, password, and how many times each user used the translation function, you can also check users' login records by clicking 'login info'

