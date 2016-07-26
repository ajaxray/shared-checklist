Shared Checklist
====================

A sample application to show how [Firebase Realtime Database](https://firebase.google.com/docs/database) works.

Check the [live demo](https://fir-app-4125e.firebaseapp.com/) or [76 seconds screencast](https://youtu.be/buqgHLBe48A).

Planning to write a tutorial explaining basic ideas of Firebase Realtime Database using this app very soon... check back within a week if you are interested :)

### Setting up

1. Copy `/js/config.js.dist` to `/js/config.js`
2. Set values of `apiKey`, `authDomain` and `databaseURL` from your projects [firebase web setup](https://firebase.google.com/docs/web/setup) configuration
3. Install [Firebase CLI](https://firebase.google.com/docs/cli) and run `firebase serve` to run your project.


### External scripts used

* [Firebase SDK](https://firebase.google.com) - Realtime Database and Hosting
* [jQuery](https://jquery.com) - Manipulating DOM, managing Events etc. 
* [Initializr](http://www.initializr.com/) - The HTML5 boilerplate 
* [Gathering.js](https://gist.github.com/ajaxray/17d6ec5107d2f816cc8a284ce4d7242e) - Keep list (and count) of current viewers of a Checklist