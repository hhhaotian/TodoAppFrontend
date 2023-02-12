# Todo app

## Introduction
This is a todo app that users can login and add, check, and translate their todo tasks as demand.
The website has been hosted on Google Cloud Plate Platform (GCP), you can either directly access the website via https://smooth-graph-377023.ts.r.appspot.com, or clone the github repository and run it on your own computer.

Because the website connection with server using HTTPS protocol, and the server lacks of authentication from trusted third party, the data requests from the website might be banned by your browser. To fix this issue before the project being offically deloyed with trusted authentication, you need to delete domain security policies on your browser. Taking Chrome as an example, 

1. visit 'chrome://net-internals/#hsts'
2. delete domain: 34.151.70.45

___

### normal users

#### Register 
As a new user, user should register by clicking register now, you need to input a username that you like and input your password for twice to make sure each time you input the same password. And then, finsih the registration by clikcing 'sign up'

#### Login to your account
Input your registered username and password, and then click login. Now you are able to access and manage your todo list. You can check all your todo tasks, update the status of each todo, and translate any of todo item into other langurate. You can also add a new todo by inputing your new todo task and corresponding deadline, and then click 'Add' button. You can leave the page by clikcing 'Log out' button.

___

### Admin

There is only one default admin account. You can access the admin account (username: admin, password: admin123) via login page. Once you login to the admin account, all of current users are listed on this admin page, you can check username, password, and their how many times each user used the translation function, you can also check users' login records by clicking 'login info'


