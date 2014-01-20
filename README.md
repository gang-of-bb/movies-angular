movies-angular
==============

Single Page Application using [gangofbb-rest-api](http://gangofbb.bhtz.fr/) and AngularJS.



README
======

AngularJS POC that using [http://gangofbb.bhtz.fr/](http://gangofbb.bhtz.fr/) rest api.

Illustrate how to build AngularJS single page application with requirejs.
Grunt tasks can build production application with one index.js file.

You have to create account and signIn in same browser.

Requirements
------------

	node.js >= 0.8
	grunt-cli
	npm
	stylus
	bower
	git

Installation
------------

Run the following commands:

	git clone https://github.com/gang-of-bb/movies-angular.git
	bower install
	npm install
	grunt debug

Grunt commands
--------------

	grunt move
Move files in ./www folder like assets, bower components and sources code.

	grunt build
Clean ./www folder, execute "move" task, compile stylus (development mode) and concat requirejs, require-config and kernel file to index.js.

	grunt debug
Execute "build" task, run connect http server and watch for stylus, assets or sources file modifications (compile if file change).

	grunt production
Compile all files and execute r.js minifier to concat and uglify all application dependencies in one file.
The result is a ready to use production application that can be found in ./build folder.

Usefull link
------------

* [http://gangofbb.bhtz.fr/](http://gangofbb.bhtz.fr/) -- Application REST WEB Service.
* [http://angularjs.org/](http://angularjs.org/) -- AngularJS documentation (SPA JavaScript Framework).
* [http://gruntjs.com/](http://gruntjs.com/) -- GruntJS documentation (Task runnner).
* [http://bower.io/](http://bower.io/) -- Bower documentation (frontend package manager).
* [http://learnboost.github.io/stylus/](http://learnboost.github.io/stylus/) -- Stylus documentation (CSS preprocessor).
* [http://nodejs.org/](http://nodejs.org/) -- NodeJS documentation.
* [http://git-scm.com/](http://git-scm.com/) -- Git documentation (distributed version control system).

Licence
-------

movies-angular is released under the MIT license.