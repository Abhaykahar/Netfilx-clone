Netflix Clone
This project is a functional clone of Netflix, built using React and Firebase. It replicates some core features of Netflix, including user authentication (sign up, login, and logout), a responsive interface, and dynamic content filtering (e.g., movie search functionality). The project showcases the integration of Firebase for authentication and Firestore for database storage, along with React for a seamless user experience.

Features
1. User Authentication:
Sign Up: New users can create an account by providing their name, email, and password. The user details are stored securely using Firebase Authentication and Firestore.
Sign In: Existing users can log in with their email and password, allowing them to access the content.
Sign Out: Users can securely log out of their account.
Session Persistence: The app maintains user sessions, allowing users to remain logged in across page reloads or revisits, unless they explicitly log out.
2. Dynamic Movie Search:
Users can search for movies and TV shows using a search bar. The search functionality filters the displayed content based on the user's input, showing relevant results in real-time.
If no content matches the search query, a "No results found" message is displayed.
3. Scrollable Movie Cards:
Movies and shows are displayed as horizontal card lists. Users can scroll through the lists horizontally to explore the available content.
4. Responsive Navbar:
The Navbar includes links to various sections of the app (e.g., Home, TV Shows, Movies, New & Popular, etc.).
The search functionality in the Navbar allows users to toggle a search bar for finding content.
The Navbar dynamically changes its background color when scrolling for a more engaging user experience.
5. Firebase Integration:
Firebase Authentication: Used for user sign up, login, and session management.
Firestore Database: User information such as name, email, and unique user ID are stored in Firestore when a new account is created.
Technologies Used
React.js: Frontend framework for building the user interface.
Firebase Authentication: For secure user authentication and session management.
Firestore: NoSQL database for storing user data.
React Router: For routing between different pages in the app.
CSS: For styling the components and creating a responsive design.