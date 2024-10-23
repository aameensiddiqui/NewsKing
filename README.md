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

4. Generate your API key from [NewsAPI](https://newsapi.org). Replace my API key with yours:

    ```News.js```
    ```bash
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=1&pageSize=${this.props.pageSize}`;
    ```
    ```Replace the apikey```
    ```bash
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=...........&page=1&pageSize=${this.props.pageSize}`;
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
|   |   ├── NewsItem.js
│   │   ├── News.js
|   |   ├── LoadingGif.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
