 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD96C3vs-P1e8WX_KXoEuPoupUNN4wYcK0",
   authDomain: "primerproyectoviky.firebaseapp.com",
   projectId: "primerproyectoviky",
   storageBucket: "primerproyectoviky.firebasestorage.app",
   messagingSenderId: "1044518522477",
   appId: "1:1044518522477:web:410b1ba71458bb08ab3964"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 let conectar = document.querySelector('#conectar')
 console.log('firebase conctado correctamente')+app.name