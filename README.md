# 🖥️ WhiteBoard Platform (Client-Side)

![GitHub repo size](https://img.shields.io/github/repo-size/koitran14/WhiteBoard-Platform)
![GitHub contributors](https://img.shields.io/github/contributors/koitran14/WhiteBoard-Platform)
![GitHub stars](https://img.shields.io/github/stars/koitran14/WhiteBoard-Platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/koitran14/WhiteBoard-Platform?style=social)
![GitHub issues](https://img.shields.io/github/issues/koitran14/WhiteBoard-Platform)

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Relative Documentation](#relative-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Team](#team)

## 📝 Introduction

Welcome to the WhiteBoard Platform repository! This project aims to provide an interactive whiteboard for collaborative work and educational purposes. Users can draw, annotate, and share their boards in real-time, making it an ideal tool for remote learning, brainstorming sessions, and team collaborations.

**Note:** This repository contains the client-side code for the WhiteBoard Platform. For the server-side code, please refer to the [WhiteBoard-Server repository](https://github.com/koitran14/WhiteBoard-Server).

## ✨ Features

- **Real-time Collaboration**: Work together with others in real-time.
- **Drawing Tools**: Access a variety of drawing tools to annotate and highlight.
- **Save and Load Boards**: Save your boards and load them later.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.

## 🚀 Installation

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/koitran14/WhiteBoard-Platform.git
    cd WhiteBoard-Platform
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dWx0aW1hdGUtYW50ZWxvcGUtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA
    CLERK_SECRET_KEY=sk_test_8igoqMArm6k6oPgsUXGrMtRVtwRpJ60I13s1oRREfN
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_API_URL='http://localhost:8080'
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

    The application will be running on `http://localhost:3000`.

## 📖 Usage

1. **Register/Login**: Create an account or log in using your credentials.
2. **Create a Board**: Start a new board by clicking on the "Create Board" button.
3. **Collaborate**: Invite others to your board using a shareable link.
4. **Draw and Annotate**: Use the drawing tools to create and edit your board.
5. **Save and Load**: Save your board for later use and load previously saved boards.

## 📚 Relative Documentation

- To get the server-side code, access this [WhiteBoard-Server repository](https://github.com/koitran14/WhiteBoard-Server).
- Get our report [HERE](https://github.com/koitran14/WhiteBoard-Platform/blob/main/Final%20Report%20-%20Group%20Upin%26Ipin.pdf).
- Access our slide for presentation [HERE](https://www.canva.com/design/DAGIH0bpqp0/d5g7_Gf8aCOMUQ-QjNwDYg/edit?utm_content=DAGIH0bpqp0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please make sure to update tests as appropriate and adhere to the code style guidelines.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/koitran14/WhiteBoard-Platform/blob/main/LICENSE) file for details.

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub Issues**: [Submit an issue](https://github.com/koitran14/WhiteBoard-Platform/issues)
- **Email**: [tndkhoi.work@gmail.com](tndkhoi.work@gmail.com)

## 👥 Team

| Full Name                                 | Student ID    |
|-------------------------------------------|---------------|
| [Trần Ngọc Đăng Khôi](https://github.com/koitran14) | ITCSIU21197   |
| [Trần Phương Quang Huy](https://github.com/KengG1M)                     | ITCSIU21071   |

---

Thank you for using WhiteBoard Platform! Happy collaborating! 🎨
