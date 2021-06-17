# Story tellers
Here you can write your own blog, edit/ delete your blog . You can also read everyone's blog.

# HOW TO RUN
    Clone this repository
    Run npm install

Run Using Docker
    In terminal of root directory
    Run 'docker-compose up --build'

Run Using NPM

    Go to backend directory and write 'npm start' in terminal
    Go to frontend directory and write 'npm start' in terminal



# Technologies Used
   Backend : Express js
   Database : MySql
   ORM : Sequelize
   Frontend : React
   Design : html, CSS, Material UI
    

# API Documentation
Send requests body in Raw JSON format
1. Create user:

POST http://localhost:3001/users

    {
    "uid":"azrin.nahar308@gkjnnhbjb",
    "password":"1234"
    }

2. Login 

POST http://localhost:5000/api/login

    {
    "uid":"azrin.nahar308@gkjnnhbjb",
    "password":"1234"
    }

Cookies and headers for authorization will be sent with response.

3. Read all Stories

GET http://localhost:3001/posts

4. Read Story by ID

GET http://localhost:3001/posts/:pid

5. Create Story

POST http://localhost:3001/posts


    {   
    "title":"Day Off",
    "story":"I can imagine Moira’s reply: You’re not on track with your calcium and folic acid targets today..."
    }

    
headers : token in received after sign up/sign in.

    {
    "Authorization":"Token" 
    }

6. Update Story
PUT http://localhost:3001/posts/:pid


    {   
    "title":"new Day Off",
    "story":"I can imagine Moira’s reply: You’re not on track with your calcium and folic acid targets today..."
    }



headers : token in received after sign up/sign in.

    {
    "Authorization":"Token" 
    }

    
5. Delete Story

DELETE http://localhost:3001/posts/:pid

# FRONTEND

1. Register

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/signup.png)

2. Log in

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/signin.png)

3. Read all stories

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/storyall.png)

4. Read one story

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/storyone.png)

5. Reading own story gives options to edit/delete

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/storyauth.png)

6. Edit your story

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/storyedit.png)

7. Delete your story

![alt text](https://github.com/anika308142/blog-dockerized/tree/75df1e544aa5ebf867b1cc8159c6a82918935aea/screenshots/storydelete.png)