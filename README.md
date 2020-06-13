# TabSpot
TabSpot is a web application that provides musicians links to guitar, bass, and drum tablature and suggests similar artists based on search criteria to help musicians expand their repetoire. The application currently utilizes the Songsterr API to obtain direct links to tablature on the Songsterr website, and uses the TasteDive API to obtain a list of similar artists based on the user's search criteria.

My goals for this small project were to connect at least 2 APIs through a single application, demonstrate my abilities with React and Javascript, and learn and implement a technology I had not used before (Next.js). The MVP features I implemented for this project are listed below in User Stories, and the features I would like to implement next are listed below in Next Steps. Additionally, I would like to continue to review and refactor the existing codebase to maintain and improve readability, conciseness, and performance.  I would also be interested in refactoring the front end to be more mobile-friendly.

## Demo
[Imgur](https://i.imgur.com/sVO0Rsc.gif)

## User Stories
- As a user, I want to be able to enter an artist's name as search criteria
- As a user, I want to be able to view the search results (tablature links) in a list
- As a user, I want to click on a search result and have it directly link to the tablature on Songsterr's website
- As a user, I want to view suggested artists in a list
- As a user, I want to be able to click on a suggested artist's name and have the app provide me a new list of search results for that artist and a new list of suggested artists

### Next Steps
- As a user, I want to be able to save tablature links as favorites
- As a user, I want to be able view my favorites list
- As a user, I want to be able to choose/filter tablature by instrument
- As a user, I want to be able to preview and/or listen to a song within the app

- - - -
## Resources  
 Songsterr API, TasteDive API
## Tech Stack
<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">HTTP Client</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"></td>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"></td>
    <td align="center"><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"></td>
  </tr>
  <tr>
    <td align="center"><img src="https://camo.githubusercontent.com/3125421b59f34245dbc184aa00ce8491938631d3/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7a6569742d696e632f696d6167652f75706c6f61642f66726f6e742f6c6f676f732f6e6578742d626c61636b2e706e67" alt="nextjs" title="nextjs" width="90px"></td>
    <td align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="75px" height="20px"></td>
  </tr>
</table>
