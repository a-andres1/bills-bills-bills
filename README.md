# bills-bills-bills
an offline app for tracking your bills

## Description
For this project, we created an offline application to track your expenditures.

![Opening app](./Assets/bills1.gif)  

  
This shows the offline functionality of the application. 

![Working DB entries after being offline](./Assets/bills2.gif)  

  
The most difficult part of this was getting the indexedb to show up. I had to make sure the indexedb was loaded before I added my service worker. Not really clear why the idb wouldn't work unless it was loaded first, but we eventually got there. 

I had to parse through a lot of the code we learned a few weeks ago to figure out what parts were needed for this particular app to work how we wanted.

Getting the service worker set up just right was a bit finicky, but we eventually got there. At first I wasn't sure if I needed the API route, but I added it anyway. The app worked after adding in the API route.

There's also some Heroku issues going on with the routing which I am trying to work out. The app is crashing because it can't get the home path. Unclear what's going on I'll keep trouble shooting. 

## Technologies Used
- IndexeDB  
- Heroku
- Javascript
- Mongoose
- MongoDB  

## Install

## Usage


## Credits
Thanks for your help, Deepali Gaarg!

## License Info 
[LICENSE](./License)

## Links
[Repo](https://github.com/a-andres1/bills-bills-bills)
[Heroku](https://shielded-shelf-11011.herokuapp.com/)

## Contact Info
[email me](mailto:alyssaandres1@gmail.com)  
[find me on github](https://github.com/a-andres1)
