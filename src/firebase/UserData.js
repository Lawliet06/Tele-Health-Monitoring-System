import { db } from './FirebaseConfig'; // Assuming you have Firebase configuration imported as 'db'
import { doc, getDoc } from 'firebase/firestore'; // Importing Firestore methods

// Function to get user data from Firestore based on user ID
export const getUserDataFromFirestore = async (userId) => {
  try {
    const userDocRef = doc(db, 'users', userId); // Reference to the user document in Firestore
    const userDocSnapshot = await getDoc(userDocRef); // Get the user document snapshot

    if (userDocSnapshot.exists()) {
      // User document exists, return its data
      return userDocSnapshot.data();
    } else {
      // User document does not exist
      console.error('User document does not exist');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data from Firestore:', error);
    throw error;
  }
};
