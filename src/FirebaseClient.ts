import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
const provider = new GoogleAuthProvider()
const firebaseConfig = {
    apiKey: "AIzaSyB5sRx87NujrzYKxUUaJrouxl6a76qvjr0",
    authDomain: "pubstuff-7d6d5.firebaseapp.com",
    projectId: "pubstuff-7d6d5",
    storageBucket: "pubstuff-7d6d5.appspot.com",
    messagingSenderId: "338032434228",
    appId: "1:338032434228:web:cbb52713da060c6968be61",
    measurementId: "G-CJBT3L6B1F"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

function authenticateWithGoogle(){
    signInWithPopup( auth, provider )
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
}


 async function basicAuth(params:IemailAndPasswordAuthData):Promise<[boolean, unknown]> {
    try {
         const result = await createUserWithEmailAndPassword(auth, params.email, params.password)
         return [true, result]
     } catch (err) {
         return [false, err]
     }
}

async function checkAuth(){

}

export {
    authenticateWithGoogle,
    basicAuth
}


interface IemailAndPasswordAuthData{
    email: string
    password: string
}