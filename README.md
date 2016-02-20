# hackillinois-webapp
This program just realized the login page for the Climate Corp Website, you could ask the mentor in the second floor to finally get the map vision.

And for questions like scala, and flask, please feel free to use the amazing tools offered by HackIllinois:
https://mentor.hackillinois.org/

Homepage for the API:
https://climate.com/static/dev-portal/#item=home&view=markdown

Here we need to install sbt for MacOS:
http://www.scala-sbt.org/0.13/docs/Installing-sbt-on-Mac.html
and vagrant to run scala:
https://www.vagrantup.com/docs/installation/

And for the map, we could perhaps use the recommended one: http://leafletjs.com/

You also might need Flask to hook up with the frontend and the backend:
http://flask.pocoo.org/docs/0.10/installation/

Tutorial below:
http://flask.pocoo.org/docs/0.10/tutorial/


### Quick Start

```
git clone https://github.com/TheClimateCorporation/hackillinois-webapp.git
cd hackillinois-webapp
# edit src/main/scala/Login, add clientId and clientSecret
# You can make a developer account and create app credentials on our dev
# portal here: https://climate.com/static/dev-portal/index.html#item=home&view=markdown
vagrant up
vagrant ssh
cd dev/login
sbt run
open 'http://localhost:18888'
```




