== GETTING STARTED

`bundle install`

`rake db:create db:migrate` (make sure postgres is running)

`npm install`

`rails s`

visit `localhost:3000`


== deploying to heroku

`# Verify new remote`

`git remote -v`

`git remote add heroku git@heroku.com:sd-home-page-project.git`

`git remote add origin git@github.com:sidazhou/home_page.git`

`git add README.md`

`git commit -m "updated README.md"`

`git push heroku master`

`git push origin master`

== README

Rewrite of my homepage in react+rails.

Please see http://www.sidazhou.com

== DEVELOPMENT
For major changes (like changing react route)
stop `rails s`
`rake assets:clobber` (because of ruby+react setup)
`rails s`
reload `localhost:3000`

For minor text changes
just reload `localhost:3000`

For example, adding new project group Data Sci, following files need to be modified:
### On the routing side:
_react_router.js
SideNavBar.jsx
DatasciController.jsx

### On the content side:
data.js
public/images/*.png

### Finally update the about me:
+ AboutMe.jsx

### thumbnails
Use screenshot to create png, and ImageMagik for thumbnails (fixed height 125px):
`mkdir thumb`
`mogrify  -format png -path thumb -thumbnail x125 *.png`

== issues
sidenavbar active state not working
implement paperclip
apify projects (grape api returns title, thumbnail, and pure html with links working)
vertical alignment of brand logo? i didnt think so either
