import { db } from "../../firebase/FirebaseConfig"; // Assuming you have Firebase configuration imported as 'db'
import { getDocs, collection } from "firebase/firestore"; // Importing Firestore methods

// Function to get health parameters data from Firestore
export const getHealthParametersFromFirestore = async () => {
  try {
    const healthParamsCollectionRef = collection(db, "HealthParameters"); // Reference to the health parameters collection in Firestore
    const healthParamsCollectionSnapshot = await getDocs(
      healthParamsCollectionRef
    ); // Get the health parameters collection snapshot

    // Extract data from snapshot
    const healthParamsData = [];
    healthParamsCollectionSnapshot.forEach((doc) => {
      healthParamsData.push(doc.data());
    });

    return healthParamsData;
  } catch (error) {
    console.error(
      "Error fetching health parameters data from Firestore:",
      error
    );
    throw error;
  }
};
