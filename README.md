# Alumni Platform - Firebase Edition

A modern alumni platform for job opportunities and education prospects, powered by Firebase for global accessibility.

## 🚀 Features

- **Job Board**: Post and browse job opportunities
- **Education Hub**: Share scholarships, PhD programs, and research positions
- **Google Authentication**: Secure login with Google accounts
- **Real-time Updates**: Firebase Firestore for instant data sync
- **Responsive Design**: Works on desktop and mobile devices
- **Global Access**: No local server required - access from anywhere

## 📁 Project Structure

```
├── login.html          # Authentication page
├── jobs.html           # Job opportunities board
├── education.html      # Education opportunities hub
├── firebase-simple.js  # Firebase backend API
├── job.js             # Job board logic
├── *.css              # Styling files
└── docs/              # Documentation
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase Firestore
- **Authentication**: Google OAuth 2.0
- **Hosting**: GitHub Pages ready

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/cinnoman/alumni-platform-firebase.git
   cd alumni-platform-firebase
   ```

2. **Configure Firebase**
   - Update `firebase-simple.js` with your Firebase project credentials
   - Enable Firestore and Authentication in Firebase Console
   - Add your domain to authorized domains

3. **Deploy**
   - Enable GitHub Pages in repository settings
   - Access your site at: `https://yourusername.github.io/alumni-platform-firebase`

## 📱 How to Use

1. Open `login.html` to sign in with Google
2. Navigate to `jobs.html` to browse/post job opportunities  
3. Visit `education.html` for education opportunities
4. All data is stored in Firebase Firestore

## 🔄 Migration Notes

This project was migrated from PHP/MySQL to Firebase for:
- ✅ Global accessibility (no local server needed)
- ✅ Real-time data synchronization
- ✅ Scalable cloud infrastructure
- ✅ Simplified deployment process

## 📚 Collections Structure

### Jobs Collection
```javascript
{
  company: "Company Name",
  title: "Job Title", 
  description: "Job description",
  firebase_uid: "user_google_id",
  poster_name: "User Name",
  posted_at: timestamp
}
```

### Education Opportunities Collection
```javascript
{
  title: "Opportunity Title",
  university: "Institution Name",
  country: "Country",
  opportunity_type: "phd|masters|research|scholarship",
  funding: "funding_type",
  deadline: "2024-12-31",
  description: "Opportunity description",
  requirements: "req1, req2, req3",
  application_url: "https://...",
  firebase_uid: "user_google_id",
  poster_name: "User Name",
  posted_at: timestamp
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the alumni community**
