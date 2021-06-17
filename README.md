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

![signup](https://user-images.githubusercontent.com/42313074/122336259-5da67e80-cf5e-11eb-817f-a84fb73a86f7.PNG)

2. Log in


![signin](https://user-images.githubusercontent.com/42313074/122336435-af4f0900-cf5e-11eb-9e20-386a1dc4ccaa.PNG)

3. Read all stories

![storyall](https://user-images.githubusercontent.com/42313074/122336496-c7bf2380-cf5e-11eb-8a54-6a6422bb9aac.PNG)


4. Read one story

![storyone](https://user-images.githubusercontent.com/42313074/122336566-e1f90180-cf5e-11eb-86ca-ce8c8ff6b433.PNG)


5. Reading own story gives options to edit/delete

![storyauth](https://user-images.githubusercontent.com/42313074/122336610-efae8700-cf5e-11eb-83fb-7a9ced7e8818.PNG)


6. Edit your story

![storyedit](https://user-images.githubusercontent.com/42313074/122336661-02c15700-cf5f-11eb-9122-5e126198528e.PNG)


7. Delete your story

![storydelete](https://user-images.githubusercontent.com/42313074/122336713-166cbd80-cf5f-11eb-8da2-991ee86a7698.PNG)
