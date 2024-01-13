import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,UserCredential,updateProfile,GoogleAuthProvider,signInWithPopup ,sendPasswordResetEmail} from "firebase/auth";
import firebaseApp from "./config";
import { getFirestore, collection, doc, setDoc,getDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp);

export const signInWithEmail = async (email: string, password: string) => {
  let result: any | null = null,
    error: any = null;
  let result1:any|null =null
  try {
    // Sign in the user
    result = await signInWithEmailAndPassword(auth, email, password);

    if (result?.user) {
      // Fetch the user document from Firestore using the user's UID
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'users', result.user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // If the document exists, return it in JSON format
        result1  = userDocSnapshot.data();
        console.log(result1);
        
      } else {
        // If the document does not exist, return an error
        error = { code: 'User not found Please create new account' };
      }
    }
  } catch (e: any) {
    // Handle sign-in errors
    error = e;
  }

  return { result1, error };
};



export const signUpWithEmail = async (email: string, password: string, name: string, phone: string) => {
  let result: UserCredential | null = null,
    error: any = null;

  try {
    // Create user in Firebase Authentication
    result = await createUserWithEmailAndPassword(auth, email, password);

    if (result?.user) {
    
      // Add user information to Firestore
      const firestore = getFirestore();
      const usersCollection = collection(firestore, 'users');
      const userDoc = doc(usersCollection, result.user.uid);

      await setDoc(userDoc, {
        uid: result.user.uid,
        name: name,
        email: email,
        phone: phone,
      });
    }

    
    // Sign out after user creation and document update
    await auth.signOut();
  } catch (e: any) {
    error = e;
  }

  return { result, error };
};
  
  export const signInWithGoogle = async() => {
    let result: any | null = null,
  error: any = null; 
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt:'select_account'
    })
    try {
      result = await signInWithPopup(auth, provider)
    } catch (e:any) {
        error=e
    }
     
  

  return { result, error };

  };


  export const passwordReset = async (email:string)=>{
    let result: any | null = null,
    error: boolean = false; 
    try {
      result = await sendPasswordResetEmail(auth,email)
    } catch (e) {
        error =true
    }
    return {result,error}     
  }



  
  export const signOut = async() => {
     try {
           await auth.signOut()
     } catch (error) {
           console.log(error);
           
     }
  };