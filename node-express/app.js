const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')
const { render } = require('ejs')



const app = express()
const port = 3000

// connect to mongodb
const dbURI = 'mongodb+srv://a_vrv:xXZZrii7KS9RWxz@node-learn.4a0i0.mongodb.net/node-tuto?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => 
app.listen(port, () => console.log(`Example app listening on port ${port}!`)))
.catch((err) => console.log(err))

// register views 
app.set('view engine', 'ejs')
// app.set('views', 'name_of_folder')


// middlewares and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

// mongoose and mongodb sandbox
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about the new blog',
    body: 'more about the new blog'
  })

  blog.save().then((result) => {
    res.send(result)
  }).catch((err) => {
    console.log(err)
  })
})

app.get('/all-blogs', (req, res) => {
  Blog.find().then((result) => {
    res.send(result)
  }).catch(err => console.log(err))
})

app.get('/single-blog', (req, res) => {
  Blog.findById('625b006a0b5a3d2b53058355')
  .then((result) => {
      res.send(result)
  })
  .catch((err) => {
    console.log(err)
  })
})


// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  

  //Blog routes
app.use("/blogs", blogRoutes)
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
