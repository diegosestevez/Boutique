# Boutique
Boutique is an online clothing store created with the MERN stack + Redux and powered by the stripe API. This project is comprised of two web applications and one API. 

<span>
<img width="300" height='120' alt="image" src="https://user-images.githubusercontent.com/33880938/155863430-2325af2e-a5b9-4e6a-a946-5b4b33a28316.png">
<img width="300" height='120' alt="image" src="https://user-images.githubusercontent.com/33880938/155863490-6a5419a8-139d-458d-a5fe-15959ca3a2bf.png">
<img width="300" height='120' alt="image" src="https://user-images.githubusercontent.com/33880938/155863493-6004b5ef-a97a-4c86-b8f7-179c138d21bc.png">
</span>


## Boutique Store
The first application is an online store that users see on the client-side. Here users can view items and make purchases which are facilitated by STRIPE. This application contains:
- Simple search engine by which to find products
- Cart that users can use to dynamically add, remove or finalize purchases from
- Filter functionality by which users can filter items according to their Sizes, Colors or Price
- Signup page that allows users to leave their name, phone and email and subscribe to a monthly Newletter 


<img width="700px" alt="image" src="https://user-images.githubusercontent.com/33880938/155863200-d5e0330a-c050-44fc-8c66-a7df08f5bab5.png">


[STORE DEMO](https://boutiqueclient.netlify.app)

## Boutique Admin
The second application is a CMS that administrators can use to perform CRUD operations which affect the store application. Administrators can authenticate to the CMS using their username and password which is handled by JWT on the server. Once authenticated administrators can view statistics concerning monthly newsletter subscriptions or products purchased by users. They can also create, update or delete any users or products that appear on the store application. This application contains:
- Login page using JWT authentication
- Statistics for monthly and annual revenue earned from purchases made by users store side
- Page which lists data on all of the products seen by users store side
- Page which lists all of the Newsletter subscribed users and their data
- Pages which all admins can use to create, update or delete users and or products

<img width="700" alt="image" src="https://user-images.githubusercontent.com/33880938/155863265-0b62c910-da1e-4cb9-8500-56fc193cca7b.png">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/33880938/155863276-a7bd8c7d-2cc1-496c-8311-9214e9cf451e.png">


**Please note that all CRUD operations on the demo have been purposefully disabled**

[ADMIN DEMO](https://boutiqueadmin.netlify.app)

## Boutique API
The API is responsible for handing requests that come from each application. This includes transactional data made to STRIPE or calls made to this project’s MongoDB Atlus cluster to retrieve or change data. 

## Running this project locally
### Before you can run this project locally you will require the following:
- Your own MongoDB cluster and password
- Your own STRIPE account along with your own public key and secret keys from STRIPE

### Create a .env file inside the server folder and assign values for the following environment variables:
- DB
- PORT
- PASS_SECRET
- JWT_SECRET
- STRIPE_SECRET_KEY

### Create a .env file inside the client folder and assign a value for the following environment variable (stripe public key):
- REACT_APP_STRIPE

### Once you have everything in place you can do the following:
1. Clone the repository
2. Open up your terminal and then `cd` into the `client`, `admin` and `server` folders respectively
3. Run `npm install` to install all the project dependencies
4. Use `npm start` to run each application on a different port on localhost

 **Please note that admin and client are each their separate react applications. You may wish to edit the package.json files of each application in order so that you can view them simultaneously on different ports**
