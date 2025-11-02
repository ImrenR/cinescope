
## CineScope 

A React movie application that lets users browse movies, view details, and manage their profiles using Firebase Authentication. The app supports Google sign-in and email/password login, with protected routes for authenticated users.



## Demo 

![CineScope Demo](./movie.gif)

## Tech Stack

**Frontend:** React

**State Management:** Context API, React Hooks (useState, useEffect, useContext)

**Styling:** TailwindCSS

**Routing:** React Router DOM

**HTTP Requests:** Axios

**Notifications / Alerts:** React-Toastify

**Authentication:** Firebase Authentication (Google & Email/Password)

**API:** The Movie Database (TMDb)

**Deployment:** Vercel

## Features

**Google Sign-In & Email/Password Authentication**
**Profile Update:** Add or update your display name
**Dynamic Navbar:** Shows your name when logged in
**Protected Routes:** Movie detail pages accessible only if logged in
**Movie Browsing:** Browse popular movies fetched from TMDb API
**Responsive Design:** Works on desktop and mobile

## How It Works

**Sign-In / Sign-Up:*
- Users can sign in using Google or email/password.
- After logging in, the display name is shown in the navbar.

*Protected Routes:*
- Movie detail pages are restricted; if the user logs out, they cannot access detail pages.

*Profile Update:*
- Users can update their display name after signing in.

*Movie Data:*
Movies are fetched from The Movie Database (TMDb) API.