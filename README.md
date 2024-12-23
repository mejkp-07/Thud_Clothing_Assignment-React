
# How to Run this Project

### This Project is made using React. This project mainly focuses on designing beautiful frontend and error handling.


## Clone the Project
```bash
git clone https://github.com/mejkp-07/Thud_Clothing_Assignment-React.git
```
## Go inside this Project

```bash
cd Thud_Clothing_Assignment-React
```


 ## Install Packages

```bash
npm install
```
 
 ## Run the React

```bash
npm start
```
 ## View Project in Browser
```bash
http://localhost:3000
```
### Important Note

If you have any problem in running fronend (npm start) then there must be conflict between the packages you have installed. To resove it you can run:-
```bash
npm audit fix
```
```bash
npm audit fix --force
```

# Project Overview

This project is a web-based e-commerce application that allows users to log in, view a personalized list of products, and log out. The products are displayed with sorting based on their purchase history, and the user’s information is fetched from a CSV file. The data is processed and displayed using Material UI for a clean and responsive design.

---

## Implementation Details

### Approach:
The application is built with React and Material UI. It implements a basic login functionality and displays a personalized product list. The user data and product information are fetched from CSV files using the `PapaParse` library, which is used for parsing CSV data into JavaScript objects.

Key aspects of the implementation include:
- **Login Logic**: The user is authenticated by matching the username and password from the CSV file.
- **Personalized Product List**: Products are displayed based on purchase history, showing both new products (from categories not purchased) and already purchased ones.
- **CSV Data Handling**: The application loads data asynchronously from CSV files and stores it in state variables using React’s `useState` and `useEffect` hooks.

### Product Display Logic:
The logic to display personalized product recommendations is implemented as follows:
1. **Data Loading**:
   - User data, product data, and purchase history are fetched from respective CSV files.
   - Data is parsed into structured JavaScript objects using `PapaParse`.
   
2. **Categorization**:
   - **Purchased Categories**: Categories that the user has previously purchased from are identified using purchase history.
   - **Unpurchased Categories**: Categories not present in the user's purchase history are identified.

3. **Sorting**:
   - **Non-Purchased Products**: Products from categories the user hasn't purchased from are displayed first.
   - **Purchased Products**: Products from previously purchased categories are displayed afterward.
   - Each group is sorted alphabetically by product name.

4. **Filtering**:
   - The product list is dynamically filtered based on a case-insensitive search query entered by the user.

5. **Consistency**:
   - The ordering logic ensures consistency across users, displaying non-purchased products first, followed by purchased ones.

### Additional Features:
- **Search Bar**: A search bar allows users to filter products by name in real-time.
- **Logout Button**: Users can log out and return to the login screen. The login state is managed using React’s state management.
- **Responsive Design**: The layout is designed to adapt to different screen sizes using Material UI’s Grid system and custom CSS.
- **Material UI Styling**: The interface is styled using Material UI components like `AppBar`, `Button`, `TextField`, `Card`, and `Grid`.
- **Error Handling**:
   - Invalid credentials trigger an error message for the user.
   - CSV file loading errors (e.g., missing or malformed files) are logged with meaningful messages.
- **User Experience Improvements**:
   - Hover effects on product cards create an engaging interface.
   - Smooth animations enhance the visual appeal.
- **Reusability**:
   - The `loadCSV` utility function is reusable, handling data fetching and parsing with ease.



## Files Overview:

- **loadCSV.js**: A utility file for loading and parsing CSV files using `PapaParse`.
- **Login.js**: Contains the login form with username and password fields. It validates the credentials by comparing the input with data from the users CSV file.
- **ProductCard.js**: A simple card component that displays product details including image, name, category, and price.
- **ProductList.js**: Displays the product list with personalized sorting based on user purchase history. Includes a search bar and logout button.
- **App.js**: The root component that manages user state and conditionally renders the login page or product list based on the login state.
- **index.css**: Basic styling for the app with responsive adjustments for different screen sizes.

## Source Code
```bash
https://github.com/mejkp-07/Thud_Clothing_Assignment-React
```

