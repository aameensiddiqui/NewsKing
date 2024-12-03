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
![lightMode 9](https://github.com/user-attachments/assets/1e37ef0c-cf46-40e4-8b33-2f7314a0f792)
![lightMode 8](https://github.com/user-attachments/assets/a89ff665-d89a-415a-8d04-06c88bc94a4e)
![lightMode 7](https://github.com/user-attachments/assets/1125292c-ef8d-458f-8bbd-3b7939078a49)
![darkMode 7](https://github.com/user-attachments/assets/e6d23d17-b2e7-49fa-9a17-42105bc404f5)
![darkMode 9](https://github.com/user-attachments/assets/c1c74302-e438-4871-adcb-61b8a615e160)
![darkMode 8](https://github.com/user-attachments/assets/5e57aee5-9e86-4ba2-b474-b5eba368083c)



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
├── .env.local
└── README.md
```
