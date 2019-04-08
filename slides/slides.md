<!-- .slide: id="custom" data-background="./assets/mountains.jpg" -->
## __Debugging JavaScript__
### _A Journey into the Unknown*_
<div style="text-align: right">_*hopefully_</div>
<div style="font-size: 9px; text-align: right;"><em>Photo: https://unsplash.com/@asoggetti</em></div>

Note:
Before you begin...
* Run `npm start` in a different terminal
* Clear all dev tool artifacts
* Make sure dev tools are ordered `elements`, `console` then `sources`
* Make sure `docker` is running
* Hide bookmarks bar in Chrome
* Start server from Terminal

----
![github](./assets/logo-github.png)

@stetsmando/debuggingjs

----
# Feedback?

@github/stetsmando/debuggingjs/issues

----
# Before We Begin
Note: 
* Why I created this talk
* What I hope you take away
* Assume you’ve written some amount of JavaScript
* Originally filled 90min, cut to 70, now to 50

----
![butts](./assets/butts.gif)

---
### About Me

* **@stetsmando** - Twitter, Github, etc.
* Software Architect **@Berkadia**
* Using JavaScript in some form since 2011
* Other Languages
  * C#
  * Java (Android)
  * Scripting things
  * Other Stuff
* Love JavaScript
* Hate Debugging JavaScript


---
## <img src="./assets/hand.svg" style="height: 70px; border: none; box-shadow: none; margin: 0;  transform: scaleX(-1);"> Show of Hands <img src="./assets/hand.svg" style="height: 70px; border: none; box-shadow: none; margin: 0">

```javascript
console.log('Something Useful')
```

----
# Pro Tips:
```javascript
// Pretty prints objects in console
console.log(JSON.stringify(someObj, null, 2))
```
&
```javascript
// Creates a breakpoint when debugger is connected
debugger
```

---
# Story Time

----
![ie9](./assets/ie9.jpg)
![horror](./assets/horror.gif)

----
![cpp](./assets/logo-cpp.png)

----
![app](./assets/mock-app01.png)

----
![app](./assets/mock-app02.png)

----
![app](./assets/mock-app03.png)

----
# ?

----
![app](./assets/mock-app04.png)

----
![dead](./assets/deadinside.gif)

---
![debugging](./assets/debugging-2019.png)

---
![console](./assets/mock-browser-console.png)

----
![node](./assets/logo-node.png)

----
![chrome](./assets/logo-chrome.png)

{ Dev Tools }

----
![sad firefox](./assets/logo-firefox-sad.png)

---
<img src="./assets/globe.svg" style="height: 400px">

Tour of DevTools

----
⌘ + ⌥ + J

⌃ + ↑ + J

----
### Demo App
![conference tracker](./assets/conference-tracker.png)

Note:
* The demo should give a quick walkthrough of the dev tools,
* Show off debugging `attending` not updating in UI
  * Show off the `mouse => click` Event Listener Breakpoints
  * Blackboxing scripts
  * Linking to local files
  * Show `debugger` statements

----

## You 👇

![pretty cool](./assets/pretty-cool.gif)

---
![node](./assets/logo-node.png)

----
<!-- .slide: id="custom" data-background="./assets/node-legacy.jpg" -->

----
<!-- .slide: id="custom" data-background="./assets/node-inspector.png" -->

Note:
Debug the server portion of the `attending` feature

----
![vim user](./assets/vim-user.gif)

----
![unamused](./assets/unamused-terminal.png)

----
![terminal inspector](./assets/terminal-inspector.png)

----
# --inspect

----
![terminal --inspector](./assets/terminal--inspector.png)

----
![thinking](./assets/emoji-thinking.png)

----
![chrome](./assets/logo-chrome.png)

----
![blessing](./assets/blessing.gif)

---
![chrome](./assets/logo-chrome-question.png)

----
![vscode](./assets/logo-vscode.png)

Note:
Show how to configure vscode to connect to node inspector

---
*Let's talk about the **whale** in the room*

----
![docker](./assets/logo-docker.png)

----
<!-- .slide: id="custom" data-background="./assets/docker-container.png" -->

----
![adventure](./assets/adventure.gif)

----
![map](./assets/map.png)

---
# Thank You

----
# Feedback?

@stetsmando/debuggingjs/issues

----
<!-- .slide: id="custom" data-background="./assets/questions.jpg" -->

# Questions?
<div style="font-size: 9px; text-align: right;"><em>Photo: https://unsplash.com/@evan__bray</em></div>
