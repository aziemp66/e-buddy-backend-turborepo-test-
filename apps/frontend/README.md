# **Frontend Repository**

This is the frontend application for managing user accounts and authentication. It is built using **Next.js** and integrates with **Firebase** for authentication and backend communication.

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (v16 or later)
- **pnpm** (v8 or later)

---

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/frontend-repo.git
   cd frontend-repo
   ```

2. **Install Dependencies**
   Use `pnpm` to install the project dependencies:
   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory with the following content:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001/<YOUR-PROJECT-ID>/us-central1/users
   NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR-FIREBASE-API-KEY>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR-FIREBASE-AUTH-DOMAIN>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR-FIREBASE-PROJECT-ID>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR-FIREBASE-STORAGE-BUCKET>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR-MESSAGING-SENDER-ID>
   NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR-APP-ID>
   ```

   Replace `<YOUR-PROJECT-ID>` and other placeholders with the actual values from your Firebase project settings.

4. **Start the Development Server**
   Run the development server:
   ```bash
   pnpm dev
   ```

   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Testing**

### **Run Linting**
To check for code issues, run:
```bash
pnpm lint
```

---

## **Deployment**

### **Build for Production**
To build the project for production, run:
```bash
   pnpm build
```

### **Start the Production Server**
After building, run the production server:
```bash
   pnpm start
```

---

## **Project Structure**
```plaintext
frontend-repo/
├── apis/            # API abstraction layer
├── components/      # React components
├── store/           # Redux state management
├── config/          # Configuration (including firebase config)
├── pages/           # Next.js pages
├── public/          # Static assets
├── .env.local       # Environment variables
├── next.config.js   # Next.js configuration
└── README.md        # Project documentation
```

---

## **Features**
- User login and authentication with Firebase.
- State management using Redux.
- Material-UI for modern and responsive UI.
- Integration with backend API for user profile management.

---

## **License**
This project is licensed under the MIT License.
