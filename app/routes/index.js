var express = require('express');

module.exports = function(app){
  app.get("/", function(req,res){

      res.render("pages/welcome.ejs") ;
  });

  app.get("/index", function(req, res) {
    res.render("pages/index.ejs");
  });

  app.get("/toBe", function(req, res) {
    res.render("pages/tobevacant.ejs");
  });

  app.get("/blog", function(req, res) {
    res.render("pages/blog.ejs");
  });

  app.get("/contact", function(req, res) {
    res.render("pages/contact.ejs");
  })

  app.get("/admin", function(req, res) {
    res.render("admin/index.ejs");
  })

  app.get("/chart", function(req, res) {
    res.render("admin/chart.ejs");
  })

  app.get("/form", function(req, res) {
    res.render("admin/form.ejs");
  })
}
