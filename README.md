# Tollverine AI  Tollbooth Automation

[![Website](https://img.shields.io/badge/Website-Live-brightgreen?style=for-the-badge&logo=vercel)](https://tollverine.vercel.app/)
[![Backend Status](https://img.shields.io/badge/Backend-Live-blue?style=for-the-badge&logo=huggingface)](https://akashrajl2104-tollverine-backend.hf.space)

**Tollverine** is a full-stack AI-powered application designed to revolutionize toll collection by creating a seamless, automated, and intelligent tolling experience. The system uses a multi-layered AI pipeline to detect and classify vehicles, recognize license plates, and process payments automatically, with a special focus on granting immediate priority access to emergency vehicles.

### 📺 Live Demo

- **Frontend Website:** [**https://tollverine.vercel.app/**](https://tollverine.vercel.app/)
- **Backend API (Hugging Face):** [**https://akashrajl2104-tollverine-backend.hf.space**](https://akashrajl2104-tollverine-backend.hf.space)
- **YouTube Demo Video:** [**https://youtu.be/yuAsU5qke2I**](https://youtu.be/yuAsU5qke2I)

---

## ✨ Key Features

- **AI Vehicle Detection & Classification**: Utilizes a YOLOv8 model to instantly detect vehicle types (car, bus, truck, bike, ambulance, etc.) and classify them into wheeler categories (2W, 3W, 4W+).
- **Automated Number Plate Recognition (ANPR)**: Employs a second YOLOv8 model and EasyOCR to accurately extract text from license plates, even in challenging conditions.
- **Emergency Vehicle Priority**: Automatically identifies ambulances, fire trucks, and police vehicles, granting them a "FREE TOLL!!" pass without delay.
- **Stolen Vehicle Detection**: Cross-references recognized license plates with a Supabase cloud database to identify stolen vehicles and send an alert.
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

---

## 🚀 Getting Started

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
3.  **Create a `.env.local` file** in the root of the frontend folder and add your Firebase and Supabase public keys:
    ```
    # Firebase (for login/signup)
    NEXT_PUBLIC_FIREBASE_API_KEY="..."
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
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
3.  **Create a `.env` file** in the root of the backend folder and add your secret keys:
    ```
    # Supabase
    SUPABASE_URL="..."
    SUPABASE_KEY="..."

    # Formspree (for alerts)
    FORMSPREE_ALERT_URL="..."
    ```
4.  **Download AI Models**: Place your `vehicle_model.pt` and `license_plate_model.pt` files inside a `models/` folder.
5.  **Run the FastAPI server:**
    ```bash
    uvicorn app:app --reload --port 5001
    ```
    The backend will be running at [http://127.0.0.1:5001](http://127.0.0.1:5001).

---

## 📄 IEEE Research Paper

The foundational research for this project, titled **"Human-Less Toll Plaza Vehicle Recognition Using Deep Learning,"** was accepted for presentation at the IEEE Global Interdisciplinary Conference (GITCON) 2025.

- **Visit the conference site:** [https://gitcon.in/](https://gitcon.in/)
- **View on IEEE Xplore:** [https://ieeexplore.ieee.org/](https://ieeexplore.ieee.org/)

---

## 👨‍💻 Meet the Team

| Name | Role |
| :--- | :--- |
| **Akash Raj L** | Founder & AI Architect |
| **Sangeethkumar M**| Lead Developer |
| **Rahul M** | System Integration |
