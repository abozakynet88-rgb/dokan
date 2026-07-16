// =========================================================
// إعدادات Firebase الخاصة بموقع "دكان"
// =========================================================
// عشان الموقع يشتغل، لازم تعمل مشروع Firebase مجاني وتحط بياناته هنا.
// الخطوات مكتوبة بالتفصيل في ملف FIREBASE_SETUP.md اللي جنب الملفات دي.
//
// من Firebase Console:
// Project settings (⚙️) > عام (General) > قسم "SDK setup and configuration" > Config
// =========================================================

const firebaseConfig = {
  apiKey: "AIzaSyDh6MHqafp6XKGulevQFQlbgZWm_U-0YWg",
  authDomain: "dokan-64545.firebaseapp.com",
  projectId: "dokan-64545",
  storageBucket: "dokan-64545.firebasestorage.app",
  messagingSenderId: "969963973897",
  appId: "1:969963973897:web:a385138bbc177a396b77d8",
};

// =========================================================
// تحميل مكتبات Firebase (نسخة 10، عبر ES Modules من CDN جوجل)
// =========================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// ملاحظة: ملقيناش استيراد Firebase Storage هنا عن قصد.
// الموقع بقى بيخزّن صور المنتجات كـ base64 جوه مستند المنتج في Firestore
// نفسه (بعد تصغيرها وضغطها في المتصفح)، عشان نفضل على خطة Spark
// المجانية بالكامل من غير ما نحتاج نرقّي لخطة Blaze.

// =========================================================
// تهيئة التطبيق والخدمات، وتصديرها عشان أي صفحة تستوردها
// =========================================================
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export {
  // Auth
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  updateProfile,
  // Firestore
  doc,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
};
