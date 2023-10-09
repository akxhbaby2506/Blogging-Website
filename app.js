const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Hello User, I am your userfriendly Bot...I am here to help you to compose your activities along with your title, and descption of what you want to do today or you can write any of your favorite activity that you would like to do today in the compose button, I will definitely store and show you what you have composed. So what are you waiting for? just click to Compose your details and have fun 👇";
const aboutContent = "Welcome to ARTICLES...! We are a team of passionate writers and bloggers who are dedicated to providing high-quality content on a variety of topics. Our goal is to create a platform that inspires, educates, and entertains our readers.Our team consists of experts in various fields, including technology, health, lifestyle, finance, and more. We are committed to delivering content that is informative, engaging, and thought-provoking. Whether you are looking for practical tips, in-depth analysis, or just a good read, we have got you covered. At ARTICLES, we believe that everyone has a story to tell, and we strive to provide a platform where people can share their experiences, insights, and perspectives. We also value feedback from our readers and encourage you to share your thoughts, ideas, and suggestions with us. Thank you for visiting ARTICLES, and we hope you enjoy reading our content as much as we enjoy creating it. If you have any questions or comments, please feel free to reach out to us visit the CONTACT US page";
const contactContent = "We are here to support you, Please feel FREE to contact us on the below number. If you want us to contact you please fill your details below. It will be great help to us to be a improvized part in your life, And we assure you 100% best service! We are available 24x7 and our help care support is always ready at your service. So go on and make the best use of us so that you be comfortable with our website!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/",function(req, res){
  res.render("home",{homeContent: homeStartingContent, postsArray: posts});
});

app.get("/about",function(req,res){
  res.render("about",{aboutContent: aboutContent});
});

app.get("/contact",function(req,res){
  res.render("contact",{contactContent: contactContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){

  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);

  res.redirect("/");
});

app.get("/posts/:postName",function(req,res){
  let reqestedTitle = req.params.postName;
  reqestedTitle = _.lowerCase(reqestedTitle);

  posts.forEach(function(post){
    let storedTitle = post.title;
    storedTitle = _.lowerCase(storedTitle);

    if (reqestedTitle === storedTitle){
      res.render("post",{titlePoster: post.title, contentPoster: post.content});
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
