---

# Backend Learning Roadmap (Python, Django, SQL, Express)

## Overview
This guide provides a **detailed breakdown** of each topic for learning **backend development** with **Python (Django)**, **SQL**, and **Express**. The goal is to help you understand each concept clearly with practical examples and explanations.

---

## Week 1: Python & Django Fundamentals

### 1. What is Django? Why Django?
- **Django** is a **high-level Python web framework** designed to make web development easier by providing pre-built modules and an integrated development environment.
- Key Features:
  - **MVC Architecture** (Model-View-Controller), though in Django it’s called **MTV** (Model-Template-View).
  - **Automatic Admin Panel** for managing models and users.
  - **ORM (Object-Relational Mapping)** to interact with databases using Python objects.
  - **Built-in Authentication** and **Session Management**.
  
#### Why use Django?
- Fast to set up and scale.
- Follows the **DRY principle** (Don’t Repeat Yourself) to encourage reusable code.
- Extensive documentation and active community.

---

### 2. Setting Up Django
**Django Setup Steps**:
1. **Create a Virtual Environment**: This isolates your dependencies from the global Python environment.
   ```sh
   python -m venv myenv
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate
   ```

2. **Install Django**:
   ```sh
   pip install django
   ```

3. **Create a New Django Project**:
   ```sh
   django-admin startproject myproject
   cd myproject
   ```

4. **Run the Development Server**:
   ```sh
   python manage.py runserver
   ```

Now, you can visit `http://127.0.0.1:8000/` in your browser and see the default Django page.

---

### 3. Django App Structure
- **Project**: A container for your entire Django application (can contain multiple apps).
- **App**: A component of a Django project that handles specific functionality (e.g., blog, authentication).
- **Migrations**: Django automatically manages database schema changes and records these changes.
  
#### Structure Example:
```
myproject/
    ├── myapp/
    │   ├── __init__.py
    │   ├── models.py
    │   ├── views.py
    │   ├── urls.py
    │   ├── admin.py
    ├── myproject/
    │   ├── settings.py
    │   ├── urls.py
    │   ├── wsgi.py
    ├── manage.py
```

---

### 4. Models and Migrations
**Models** define the structure of the database tables in Django. The **Django ORM** automatically generates SQL queries based on these models.

#### Example Model:
```python
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
```

- **Migration**: To apply the model changes to the database:
  ```sh
  python manage.py makemigrations
  python manage.py migrate
  ```

This creates a database table for the `Post` model.

---

### **Project/Assignment for Week 1:**
- **Build a Blog App**: Create a simple Django project with a `Post` model that allows users to create, read, update, and delete posts. Implement the admin panel to manage posts.
- **Assignment**: Set up the project structure, implement models and migrations, and explore Django’s admin panel for managing your models.

---

## Week 2: Django Views, Templates & Routing

### 1. Views
A **view** is a function that receives web requests and returns web responses. Views can return simple HTTP responses, or they can return rendered templates (HTML).

#### Example View:
```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")
```

- Views can be used to render templates (HTML files):
  ```python
  from django.shortcuts import render

  def home(request):
      context = {'user': request.user}
      return render(request, 'home.html', context)
  ```

### 2. URL Routing
Django uses a **URLconf** to map URLs to views. The **urls.py** file is where you define these mappings.

#### Example URL Mapping:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
```

### 3. Templates
Django templates allow you to separate the HTML structure from the Python logic.

#### Example Template (home.html):
```html
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
    <h1>Welcome {{ user.username }}</h1>
    <p>Today is {{ today }}</p>
</body>
</html>
```

- **Passing context to templates**:
  ```python
  def home(request):
      context = {
          'user': request.user,
          'today': datetime.date.today()
      }
      return render(request, 'home.html', context)
  ```

---

### **Project/Assignment for Week 2:**
- **Build a Dynamic Homepage**: Modify the blog app to display posts on the homepage. Create a template and pass data to it.
- **Assignment**: Implement routing and views for CRUD operations on posts and create dynamic templates that render post data.

---

## Week 3: Database Operations with Django ORM

### 1. Querying Data with ORM
Django provides an ORM to query the database using Python objects instead of raw SQL.

#### Retrieve all records:
```python
posts = Post.objects.all()
```

#### Retrieve a single record:
```python
post = Post.objects.get(id=1)
```

#### Filtering records:
```python
posts = Post.objects.filter(title__contains='Django')
```

### 2. Relationships in Django Models
Django supports various types of relationships between models.

#### Foreign Key Relationship:
```python
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
```

- **One-to-many relationship**: One `Post` can have multiple `Comments`.

### 3. Aggregation and Ordering
Django ORM also allows for **aggregation** and **ordering** of data.

```python
from django.db.models import Count

# Get the count of comments for each post
posts = Post.objects.annotate(num_comments=Count('comment'))

# Order posts by created date
posts = Post.objects.order_by('-created_at')
```

---

### **Project/Assignment for Week 3:**
- **Build a Comment System**: Add a `Comment` model that is related to the `Post` model. Create views to add, view, and list comments for each post.
- **Assignment**: Implement the ability to add comments to posts and display them with post data on the homepage.

---

## Week 4: SQL Basics & Advanced Querying

### 1. SQL Basics
SQL is the language used to manage data in a relational database. The most common operations include **SELECT**, **INSERT**, **UPDATE**, and **DELETE**.

#### Example SQL Commands:
```sql
SELECT * FROM posts WHERE title='Django Basics';
INSERT INTO posts (title, content) VALUES ('New Post', 'Content of the post');
UPDATE posts SET content='Updated content' WHERE id=1;
DELETE FROM posts WHERE id=1;
```

### 2. Joins
**Joins** are used to combine rows from two or more tables based on a related column.

#### INNER JOIN:
```sql
SELECT posts.title, comments.content
FROM posts
INNER JOIN comments ON posts.id = comments.post_id;
```

#### LEFT JOIN (All posts, even those with no comments):
```sql
SELECT posts.title, comments.content
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id;
```

### 3. Subqueries and Grouping
**Subqueries** allow you to nest queries within other queries.

#### Example Subquery:
```sql
SELECT title
FROM posts
WHERE id IN (SELECT post_id FROM comments WHERE content='Great post');
```

---

### **Project/Assignment for Week 4:**
- **Create a Reporting System**: Use SQL queries to generate reports, such as total comments per post or the most recent posts.
- **Assignment**: Practice writing SQL queries to join tables and filter results using conditions.

---

## Week 5: Express.js Fundamentals & Routing

### 1. What is Express.js? Why Express?
**Express.js** is a **minimalist web framework for Node.js** that simplifies routing, middleware integration, and HTTP request handling.

- **Fast** and **lightweight**.
- Perfect for **RESTful APIs** and **single-page applications**.

### 2. Setting Up Express
**Install Express**:
```sh
npm init -y
npm install express
```

#### Create a basic server (app.js):
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### 3. Routing in Express
Express allows you to define **GET**, **POST**, **PUT**, and **DELETE** routes.

#### Example Routes:
```js
app.get('/posts', (req, res) => {
  res.json({ message: 'Fetching all posts' });
});

app.post('/posts', (req, res) => {
  res.json({ message: 'Creating a new post' });
});
```

---

### **Project/Assignment for Week 5:**
- **Create a REST API**: Develop an API with CRUD operations for a `Post` model similar to your Django blog app, using Express.
- **Assignment**: Set up routing for API endpoints, and practice handling GET, POST, PUT, and DELETE requests.

---

## Week 6: Authentication, API Development & Deployment

### 1. Authentication with JWT (JSON Web Token)
**JWT** allows you to authenticate users in a stateless manner.

#### Generate a JWT:
```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
```

#### Protect Routes Using JWT:
```js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  
  try {
    jwt.verify(token, 'secretkey');
    res.send('Protected data');
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
});
```

### 2. Building RESTful APIs with Express
A **RESTful API** is a way to expose application data to other applications over HTTP, following REST principles.

#### Example Routes for an API:
```js
app.get('/api/posts', (req, res) => {
  // Fetch posts from database and send response
});

app.post('/api/posts', (req, res) => {
  // Create a new post and save to the database
});
```

### 3. Deployment
**Heroku Deployment**:
1. **Create a Procfile**: This tells Heroku how to run your app.
   ```txt
   web: node app.js
   ```

2. **Push to Heroku**:
   ```sh
   git init
   git add .
   git commit -m "First commit"
   heroku create
   git push heroku master
   ```

---

### **Project/Assignment for Week 6:**
- **Create a User Authentication System**: Implement JWT-based authentication and create protected API routes.
- **Assignment**: Deploy the Express app to Heroku and practice managing deployment pipelines.

--