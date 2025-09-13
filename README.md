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
- [Project Structure](#-project-structure)
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

- **Live Website (Frontend):** [**https://tollverine.vercel.app/**](https://tollverine.vercel.app/)
- **Live API (Backend):** [**https://akashrajl2104-tollverine-backend.hf.space**](https://akashrajl2104-tollverine-backend.hf.space)
- **YouTube Demo Video:** [**https://youtu.be/yuAsU5qke2I**](https://youtu.be/yuAsU5qke2I)

| Landing Page | Scanner Interface | Analysis Result |
| :---: | :---: | :---: |
| *Screenshot of the landing page* | *Screenshot of the scanner page* | *Screenshot of the result page* |

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

## 📁 Project Structure

tollverine/
├── tollverine-frontend/   # The Next.js frontend application
│   ├── public/              # Static assets (images, logos, etc.)
│   ├── src/
│   │   ├── app/             # Main application pages and layouts
│   │   ├── components/      # Reusable React components
│   │   ├── context/         # Global state management (Auth, App, Theme)
│   │   └── lib/             # Firebase & Supabase client setup
│   └── next.config.js       # Next.js configuration
│
└── tollverine-backend/    # The FastAPI backend application
├── models/              # Pre-trained AI models (.pt files)
├── uploads/             # Temporary storage for uploaded files
├── logs/                # Backend log files
├── app.py               # The main FastAPI server and AI logic
├── Dockerfile           # Configuration for deployment on Hugging Face
├── requirements.txt     # Python dependencies
└── .env                 # Environment variables (API keys, etc.)


---

## 🛠️ Installation & Setup

To run this project locally, you will need to set up the frontend and backend separately.

### Frontend Setup (`tollverine-frontend`)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/akashrajl/tollverine.git](https://github.com/akashrajl/tollverine.git)
    cd tollverine-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env.local` file** and add your Firebase and Supabase public keys:
    ```
    # Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY="..."
    # ... (all other Firebase config keys)

    # Supabase
    NEXT_PUBLIC_SUPABASE_URL="..."
    NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

### Backend Setup (`tollverine-backend`)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/akashrajl/tollverine-backend.git](https://github.com/akashrajl/tollverine-backend.git)
    cd tollverine-backend
    ```
2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Create a `.env` file** and add your secret keys:
    ```
    # Supabase
    SUPABASE_URL="..."
    SUPABASE_KEY="..."

    # Formspree
    FORMSPREE_ALERT_URL="..."
    ```
4.  **Download AI Models**: Place your `vehicle_model.pt` and `license_plate_model.pt` files inside a `models/` folder.
5.  **Run the FastAPI server:**
    ```bash
    uvicorn app:app --reload --port 5001
    ```
    The backend will be running at [http://127.0.0.1:5001](http://127.0.0.1:5001).

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
- **Sangeethkumar M** - [LinkedIn](https://www.linkedin.com/in/sangeethkumar-m-563924256) | [GitHub](https://github.com/Sangeethkumar-180504)
- **Rahul M** - [LinkedIn](https://www.linkedin.com/in/rahul-murali-8b5164258) | [GitHub](https://github.com/rahulmurali123)

Project Link: [https://github.com/akashrajl/tollverine](https://github.com/akashrajl/tollverine)
