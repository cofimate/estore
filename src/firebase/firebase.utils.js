import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { isCompositeComponent } from 'react-dom/test-utils';


const config = 
{
    apiKey: "AIzaSyDsjoXI_Z2qaMYycttaxdaOqTMsTmdWm-w",
    authDomain: "estore-793e1.firebaseapp.com",
    projectId: "estore-793e1",
    storageBucket: "estore-793e1.appspot.com",
    messagingSenderId: "1081469408485",
    appId: "1:1081469408485:web:291929f79f79209ac3700c",
    measurementId: "G-N46C0BYJ3H"
};
firebase.initializeApp(config);

//firebase.firestore.collections('/users');
//firebase.firestore.doc('/users/:userId');
export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if ( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName , email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    //console.log("USER LOGIN");
    //console.log(firestore.doc('users/as12321dsa'));

    return userRef;
} 


export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach( obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
        
};


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();
    
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;