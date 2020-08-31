# Sticky-Notes


Haven't you always wanted to keep track of what to do throught the day or want to do something later but too lazy to set a remainder for it or too lazy to get up from in front of your laptop? Well here's Sticky Notes!

Sticky Notes is a progressive web app that uses HTML5, CSS, and JavaScript to enable the user to store their notes on the app. 

In the repo, two files, manifest.json and service-worker.js are included but it would be better if the user were to create their own if they wish to edit the code. 


The manifest file can look like this:
```
{
  "name": "Sticky Notes",
  "short_name": "Sticky Notes",
  "start_url": "index.html",
  "scope": "./",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "theme_color": "#929292",
  "background_color": "#929292",
  "display": "standalone"
}
```
You can use the [favicon generator site](https://realfavicongenerator.net/) to create your own icons for the app. A new icon can be added to the manifest file as such:

```
{
      "src": "android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
```


Make sure that this line of code is present in the <head> tag of your index.html file:
```
  <link rel="manifest" href="manifest.json" />
```
  
  
To create your own service-worker.js, you need to have [npm](https://www.npmjs.com/get-npm) installed and once you have it installed, run this line of code in the root directory of the application:

```
 $ npm install --global sw-precache
```

And run this line of code in the root directory of the application once the package is installed:
```
$ sw-precache
```


This line of code in the scripts.js file will now work once the above line is executed:
```
if ('serviceWorker' in navigator) {
  // register service worker
  navigator.serviceWorker.register('service-worker.js');
}
```


Things left to do (ironic I know) :

- [ ] Change the tilt of the notes.
- [ ] Fix the randid bug.
- [ ] Host the app on either netify or heroku.
- [ ] Add icons for apple and andriod devices as well as include icons for smaller screens.
- [ ] Add buttons to allow users to change colors according to their choice.
- [ ] Enable sign up and login
- [ ] Store user's credentials and their notes in a database (preferably MongoDB)
