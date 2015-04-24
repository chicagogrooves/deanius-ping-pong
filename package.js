Package.describe({
  name: "deanius:ping-pong",
  summary: "Example project for http://package-kitchen.meteor.com",
  version: "0.1.0",
  git: "https://github.com/chicagogrooves/meteor-ping-pong"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor", "ddp", "jquery"]);
  
  api.addFiles("shared/index.js", ["client", "server"]);

  api.export("ping");
});



  
    
    
    Package.onTest(function (api) {
  api.use("tinytest");
  api.use("deanius:ping-pong");
  
  api.addFiles("tests/shared/index.js", ["client", "server"]);

});    
  
  