
# YouTube to MP4 Converter

This project is a simple web app that allows users to convert YouTube videos into downloadable `.mp4` files. It is built using **JavaScript**, **Node.js**, **React**, **Web APIs**, and **Object-Oriented Programming (OOP)** principles. This app is intended for personal use and complies with YouTube's Terms of Service by restricting downloads to authorized or Creative Commons content.

---

## Features
- Enter a YouTube URL to download videos as `.mp4` files.
- User-friendly interface built with React.
- Backend powered by Node.js for processing video downloads.
- Real-time video downloading with a progress indicator.
- Lightweight and responsive design with CSS.

---

## Technologies Used

### Frontend:
- **React**: UI development
- **CSS**: Styling and layout

### Backend:
- **Node.js**: Backend runtime environment
- **Express.js**: API and server setup
- **youtube-dl-exec**: Library for downloading YouTube videos
- **CORS**: Enabling cross-origin requests

---

## Installation

### Prerequisites:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-to-mp4.git
   cd youtube-to-mp4
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Navigate to the `client` folder and install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `downloads/` folder in the project root to store temporary files:
   ```bash
   mkdir downloads
   ```

5. Start the backend server:
   ```bash
   node server.js
   ```

6. Start the React app:
   ```bash
   cd client
   npm start
   ```

---

## Usage
1. Open the app in your browser: `http://localhost:3000`.
2. Enter a valid YouTube URL in the input field.
3. Click the "Download" button.
4. The video will be processed and downloaded as an `.mp4` file.

---

## Project Structure
```
youtube-to-mp4/
├── client/               # React frontend
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   ├── App.css      # Styling
│   │   └── index.js     # React entry point
├── downloads/            # Temporary folder for storing files
├── server.js             # Backend server logic
├── package.json          # Backend dependencies
└── README.md             # Project documentation
```

---

## Future Enhancements
- Add support for multiple video formats (e.g., `.mp3`).
- Implement video resolution selection.
- Add file size estimation.
- Include download history.

---

## Disclaimer
This project is for **personal use only**. Ensure you comply with YouTube's Terms of Service and download only authorized or Creative Commons content. The developer is not responsible for any misuse of this app.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

