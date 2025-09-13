<div align="center">

  # Tollverine: AI-Powered Tollbooth Automation
  
  **An intelligent, automated tolling system that uses AI to eliminate congestion, prioritize emergency vehicles, and create a seamless travel experience.**

  <p>
    <img src="https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/Backend-FastAPI-green?style=for-the-badge&logo=fastapi" alt="FastAPI">
    <img src="https://img.shields.io/badge/Database-Supabase-brightgreen?style=for-the-badge&logo=supabase" alt="Supabase">
    <img src="https://img.shields.io/badge/AI_Model-YOLOv8-blueviolet?style=for-the-badge" alt="YOLOv8">
    <img src="https://img.shields.io/badge/Deployment-Vercel_&_HuggingFace-orange?style=for-the-badge&logo=vercel" alt="Deployment">
    </p>
</div>

---

### 📖 Table of Contents
- [Description](#-description--overview)
- [Live Demo & Screenshots](#-live-demo--screenshots)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Installation & Setup](#-installation--setup)
- [Future Scope](#-future-scope)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

---

## 📜 Description / Overview

**Tollverine** is a full-stack AI application designed to modernize and automate toll collection. The project addresses critical inefficiencies in traditional tolling systems, such as traffic congestion and delays for emergency services.

By leveraging a powerful AI pipeline, Tollverine provides a comprehensive solution that includes:
- **Real-time vehicle detection** and classification.
- **Automated Number Plate Recognition (ANPR)** for seamless toll deduction.
- A failsafe system to grant **unconditional priority to emergency vehicles**.
- **Stolen vehicle detection** with an integrated alert system.

The entire system is built with a modern tech stack, featuring a Next.js frontend for a dynamic user experience and a high-performance FastAPI backend to handle the AI processing.

---

## 🚀 Live Demo & Screenshots

- **Live Website :** [**https://tollverine.vercel.app/**](https://tollverine.vercel.app/)
- **Live API (Backend):** [**https://akashrajl2104-tollverine-backend.hf.space**](https://akashrajl2104-tollverine-backend.hf.space)
- **YouTube Demo Video:** [**https://youtu.be/yuAsU5qke2I**](https://youtu.be/yuAsU5qke2I)

| Landing Page | Scanner Interface | Analysis Result |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a1c8536b-2280-4981-ad0b-9822d61b89d0" width="300" alt="Landing Page Screenshot" /> | <img src="https://github.com/user-attachments/assets/b6caa623-728a-4fd4-b466-9721c205a83f" width="300" alt="Scanner Page Screenshot" /> | <img src="https://github.com/user-attachments/assets/882d9202-e9aa-45c7-98d0-1ba715b6120f" width="300" alt="Result Page Screenshot" /> |

---

## ✨ Key Features

- **AI Vehicle Detection & Classification**: Utilizes a YOLOv8 model to instantly detect vehicle types (car, bus, truck, bike, ambulance, etc.) and classify them into wheeler categories (2W, 3W, 4W+).
- **Automated Number Plate Recognition (ANPR)**: Employs a second YOLOv8 model and EasyOCR to accurately extract text from license plates, even in challenging conditions.
- **Emergency Vehicle Priority**: Automatically identifies ambulances, fire trucks, and police vehicles, granting them a "FREE TOLL!!" pass without delay.
- **Stolen Vehicle Detection**: Cross-references recognized license plates with a Supabase cloud database to identify stolen vehicles and sends an alert via Formspree.
- **Automated UPI Payments**: For registered users, the system deducts the correct toll fee from a linked UPI account. For unknown vehicles, it sends a manual payment alert.
- **12-Hour Duplicate Prevention**: Intelligently logs each transit and prevents double-charging the same vehicle within a 12-hour window.
- **User Authentication**: A complete login/signup system built with Firebase Authentication, including Google Sign-In and email/password options.
- **Dynamic Frontend**: A fully responsive and interactive website built with Next.js, featuring a custom animated cursor and a live scanner interface.
- **Secure Cloud Database**: All user, vehicle, and transaction data is securely managed in a PostgreSQL database hosted on Supabase.

---

## 💻 Technology Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | Next.js, React, TypeScript, Framer Motion, CSS Modules |
| **Backend** | Python, FastAPI, YOLOv8, EasyOCR, OpenCV |
| **Database** | Supabase (PostgreSQL) |
| **Authentication**| Firebase Authentication (Google & Email/Password) |
| **Deployment** | Vercel (Frontend), Hugging Face Spaces (Backend - Docker) |
| **Alerts** | Formspree |

---

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/akashrajl/tollverine.git](https://github.com/akashrajl/tollverine.git)
    cd tollverine-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env.local` file** in the root of the frontend folder and add your Firebase and Supabase public keys:
    ```
    # Firebase (for login/signup)
    NEXT_PUBLIC_FIREBASE_API_KEY="..."
    # ... (add all other Firebase config keys)

    # Supabase (for the 'Add Vehicle' page)
    NEXT_PUBLIC_SUPABASE_URL="..."
    NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🤖 Backend API

The backend for this project is a separate, private repository deployed on Hugging Face Spaces. It is a FastAPI server that handles all AI processing and database interactions.

- **Live API Endpoint:** [**https://akashrajl2104-tollverine-backend.hf.space/analyze**](https://akashrajl2104-tollverine-backend.hf.space/analyze)

---

## 🚀 Future Scope

- **Real UPI Payment Integration**: Replace the simulated UPI deduction with a real payment gateway API (like Razorpay or Stripe).
- **User Dashboard**: Build a dashboard where logged-in users can register their vehicles, link their UPI IDs, and view their transaction history.
- **Live Feed Implementation**: Fully implement the "Live Feed" feature on the scanner page using `react-webcam`.

---

## 🙏 Acknowledgements

- **Ultralytics YOLOv8** for the powerful object detection models.
- **EasyOCR** for the robust text recognition library.
- **Supabase** for providing a generous and powerful free-tier database.
- **Vercel** and **Hugging Face** for the seamless deployment experience.

---

## 📞 Contact

- **Akash Raj L** - [LinkedIn](https://www.linkedin.com/in/akashrajl/) | [GitHub](https://github.com/akashrajl) | laakashraj2004@gmail.com
- **Sangeethkumar M** - [LinkedIn](https://www.linkedin.com/in/sangeethkumar-m-563924256) | [GitHub](https://github.com/Sangeethkumar-180504) | sangeeth97kumar@gmail.com
- **Rahul M** - [LinkedIn](https://www.linkedin.com/in/rahul-murali-8b5164258) | [GitHub](https://github.com/rahulmurali123) | millionairemindset1709@gmail.com

Project Link: [https://github.com/akashrajl/tollverine](https://github.com/akashrajl/tollverine)
