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

