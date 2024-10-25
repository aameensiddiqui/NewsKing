# NewsKing

- NewsKing is a live news web application built using React that fetches the latest news from [NewsAPI](https://newsapi.org). 
- It allows users to browse various news categories.

## Features

- Fetches live news data from the ```NewsAPI```.
- Categories include: ```Business```, ```Entertainment```, ```Health```, ```Science```, ```Sports```, ```Technology```, and ```General```.
- Simple and clean user interface.
- Responsive design for desktop and mobile devices.

## Technologies Used

- **```React```**: Frontend library for building the UI.
- **```React Router```**: For client-side routing.
- **```Bootstrap```**: For responsive design and layout.
- **```NewsAPI```**: To fetch live news data.

## Screenshots

<div style="display: flex; gap: 15px;">
    <img src="https://github.com/user-attachments/assets/a530841d-b48a-4da8-9b6e-ef7bab9b182a" alt="lightMode 1" width="45%" width="48%"  />
    <img src="https://github.com/user-attachments/assets/d14227e6-dd0c-43cf-b76c-c471beb07b72" alt="lightMode 2" width="45%" width="48%"  />
</div>

<div style="display: flex; gap: 15px;">
    <img src="https://github.com/user-attachments/assets/43870f8f-de79-4dfe-a794-2db901320ecf" alt="lightMode 3" width="45%" width="48%"  />
    <img src="https://github.com/user-attachments/assets/cd9d7e31-4c90-457a-bd85-6bb975abdbcd" alt="lightMode 4" width="45%" width="48%"  />
</div>

<div style="display: flex; gap: 15px;">
    <img src="https://github.com/user-attachments/assets/f01524bc-e783-4208-832f-8bf112a1223e" alt="lightMode 5" width="45%" width="48%"  />
    <img src="https://github.com/user-attachments/assets/502e1475-087a-4163-9d66-cc400f6d31d8" alt="darkMode 5" width="45%" width="48%"  />
</div>

<div style="display: flex; gap: 15px;">
    <img src="https://github.com/user-attachments/assets/f9ffcb6c-4676-401b-8978-7983a6b2f2ab" alt="darkMode 2" width="45%" width="48%"  />
    <img src="https://github.com/user-attachments/assets/043cde4a-7fa5-4f47-8bff-303185aa2a23" alt="darkMode 3" width="45%" width="48%"  />
</div>

<div style="display: flex; gap: 15px;">
    <img src="https://github.com/user-attachments/assets/5d0421d9-3403-4f1b-b921-02fe0b783e75" alt="darkMode 1" width="45%" width="48%"  />
    <img src="https://github.com/user-attachments/assets/db55cd68-fe23-4c9c-86e1-482c42130882" alt="darkMode 4" width="45%" width="48%"  />
</div>



## How to Run Locally

To run this project locally on your machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/NewsKing.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NewsKing
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Generate your API key from [NewsAPI](https://newsapi.org). Replace my API key with yours in  ```.env.public``` file:

    ```bash
   REACT_APP_NEWS_API="......Paste your API key here......"
    ```

5. Start the application:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Folder Structure

```bash
NewsKing/
├── public/
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── NewsItem.js
│   │   ├── News.js
│   │   ├── LoadingGif.js
│   ├── App.js
│   └── index.js
├── package.json
├── .env.public
└── README.md
```
