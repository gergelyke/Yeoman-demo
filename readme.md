Getting started with Yeoman
=========
---
“Yeoman is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications.”

Setup the environment
----
* install yo globally
```sh
npm install -g yo
```
_this installs Bower and Grunt as well_

* install the basic generator-webapp
```sh
npm install -g generator-webapp
```

* install the Angular generator
```sh
npm install -g generator-angular
```

_we are good to go!_

Generate our first Angular skeleton
---
inside the folder you want your application to be, just enter this:
```sh
yo angular
```
And that's it!

Create a Hello World application with Yeoman
---

* create our Hello controller from the terminal
```sh
yo angular:controller hello
```
* modifiy our main view to this:
```html
<div ng-controller="HelloCtrl"> 
    Your name: <input type="text" ng-model="name" value="World"/> 
    <hr/> 
    Hello {{name}}! 
</div>
```
* modify our HelloCtrl.js
```js
angular.module('yeomanTutorialApp')
  .controller('HelloCtrl', function ($scope) {
    $scope.name = 'world';
  });
```

* simply run with
```sh
grunt server
```

A little about Bower
---
searching for libraries
```sh
bower search jquery
```
install libraries (notice the --save flag!, check bower.json after running it)
```sh
bower install jquery --save
```
next time you only have to run 
```sh
bower install
```
and Bower will know, what dependencies should it install
_See the magic happen! :)_
    
