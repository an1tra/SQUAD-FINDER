# SQUAD-FINDER
SquadFinder is an application that captures event details and displays them for users to see. Google and Yelp API's are used to display information regarding event location.


<h2>Key Design Functions:</h2>
<ul>
  <li>Index page shows description of application and prompts user to create an account, or login with their credentials via Firebase.</li>
  <li>User will be able to view all current available squads/events going on, along with all of the event information.</li>
  <li>User can click on the name of the park which will automatically scroll down to the displayed Google Maps API.</li>
  <li>Google Maps API geolocates your position upon entering the application, it shows a marker for each park in your area, it allows user to search for parks, and it brings up park information via Yelp API</li>
  <li>Yelp API shows the park information such as address, contact information, open hours, park rating, and allows user to click on a link to the actual Yelp page for that chosen park.</li>
  <li>The user will also be able to create/host an event which will be displayed for other users to sign up for.</li>
</ul>

<h2>Rough Breakdown of Tasks:</h2>
Anitra: User Interface → HTML, CSS, Bootstrap
Chris: Javascript, UI, and Google API → locations, markers, search box, set activity radius.
Justin: Javascript, Firebase → authenticating users, matchmaking feature, displaying events, chatbox.
Lucas: Javascript, Yelp API → park reviews, pictures, hours of operation, links to Yelp.
