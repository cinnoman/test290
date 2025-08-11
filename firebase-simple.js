// Simple Firebase replacement for PHP APIs
// This file replaces your PHP backend calls with direct Firebase calls

// Firebase configuration - replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyCdw3Z1RQz1JYoCeM2Dlq9NsJpqjD_78v0",
  authDomain: "diu-forum-ae2e8.firebaseapp.com",
  projectId: "diu-forum-ae2e8",
  storageBucket: "diu-forum-ae2e8.firebasestorage.app",
  messagingSenderId: "465236075636",
  appId: "1:465236075636:web:b561a5bbfa1377d857dd21",
  measurementId: "G-EQ0VZ7XPJJ"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Replace PHP API calls with Firebase calls
window.FirebaseAPI = {
    
    // Replace: api/jobs/create.php
    async createJob(jobData) {
        try {
            const docRef = await addDoc(collection(db, 'jobs'), {
                ...jobData,
                posted_at: serverTimestamp() // Use snake_case to match your existing code
            });
            
            return {
                ok: true,
                json: () => Promise.resolve({ status: 'success', id: docRef.id })
            };
        } catch (error) {
            console.error('Error creating job:', error);
            return {
                ok: false,
                json: () => Promise.resolve({ error: error.message })
            };
        }
    },

    // Replace: api/jobs/get.php  
    async getJobs() {
        try {
            const jobsQuery = query(collection(db, 'jobs'), orderBy('posted_at', 'desc'));
            const querySnapshot = await getDocs(jobsQuery);
            
            const jobs = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                jobs.push({
                    id: doc.id,
                    ...data,
                    // Convert Firestore timestamp to match your existing format
                    posted_at: data.posted_at?.toDate()?.toISOString() || new Date().toISOString()
                });
            });
            
            return {
                ok: true,
                json: () => Promise.resolve(jobs)
            };
        } catch (error) {
            console.error('Error getting jobs:', error);
            return {
                ok: false,
                json: () => Promise.resolve({ error: error.message })
            };
        }
    },

    // Replace: api/education/create.php
    async createEducationOpportunity(opportunityData) {
        try {
            const docRef = await addDoc(collection(db, 'education_opportunities'), {
                ...opportunityData,
                posted_at: serverTimestamp() // Use snake_case to match your existing code
            });
            
            return {
                status: 'success',
                id: docRef.id
            };
        } catch (error) {
            console.error('Error creating education opportunity:', error);
            throw new Error(error.message);
        }
    },

    // Replace: api/education/get.php  
    async getEducationOpportunities() {
        try {
            const opportunitiesQuery = query(collection(db, 'education_opportunities'), orderBy('posted_at', 'desc'));
            const querySnapshot = await getDocs(opportunitiesQuery);
            
            const opportunities = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                opportunities.push({
                    id: doc.id,
                    ...data,
                    // Convert Firestore timestamp to match your existing format
                    posted_at: data.posted_at?.toDate()?.toISOString() || new Date().toISOString()
                });
            });
            
            return opportunities;
        } catch (error) {
            console.error('Error getting education opportunities:', error);
            throw new Error(error.message);
        }
    }
};

console.log('Firebase API ready - PHP replacement loaded');
