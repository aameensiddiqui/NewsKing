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
![lightMode 6](https://github.com/user-attachments/assets/37ac8171-ba3c-43d8-825b-e9c439e1c2d7)
![lightMode 1](https://github.com/user-attachments/assets/a530841d-b48a-4da8-9b6e-ef7bab9b182a)
![lightMode 2](https://github.com/user-attachments/assets/d14227e6-dd0c-43cf-b76c-c471beb07b72)
![lightMode 3](https://github.com/user-attachments/assets/43870f8f-de79-4dfe-a794-2db901320ecf)
![lightMode 5](https://github.com/user-attachments/assets/f01524bc-e783-4208-832f-8bf112a1223e)
![darkMode 5](https://github.com/user-attachments/assets/502e1475-087a-4163-9d66-cc400f6d31d8)
![darkMode 6](https://github.com/user-attachments/assets/df75610a-986b-4769-97b6-64691c24240c)
![darkMode 3](https://github.com/user-attachments/assets/043cde4a-7fa5-4f47-8bff-303185aa2a23)
![darkMode 1](https://github.com/user-attachments/assets/5d0421d9-3403-4f1b-b921-02fe0b783e75)
![darkMode 2](https://github.com/user-attachments/assets/f9ffcb6c-4676-401b-8978-7983a6b2f2ab)



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

4. Generate your API key from [NewsAPI](https://newsapi.org). Create a ```.env.public``` file outside src in project dir & replace my API key with yours:

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
