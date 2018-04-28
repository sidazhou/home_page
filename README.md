== GETTING STARTED

`bundle install`

`rake db:create db:migrate`

`npm install`

`rails s`

visit `localhost:3000`

== deploying to heroku
# Verify new remote
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


== issues
sidenavbar active state not working
implement paperclip
apify projects (grape api returns title, thumbnail, and pure html with links working)
vertical alignment of brand logo? i didnt think so either
