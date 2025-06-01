import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

const Home = () => {
    const provider = new GoogleAuthProvider();
    const [person,setPerson] = useState()
    const handlegogglesingIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result) =>{
            console.log(result.user);
            setPerson(result.user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    const gOut = ()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result)
            setPerson(null)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    const gitProvider = new GithubAuthProvider();
    const gitSign = ()=>{
        signInWithPopup(auth, gitProvider)
        .then((result)=>{
            console.log(result.user)
            setPerson(result.user)
        })
        .catch(error=>{
            console.log(error)
            setPerson(null)
        })
    }
    return (
        <>
            {/* <button onClick={handlegogglesingIn}>Google Sing In</button>
            <button onClick={gOut}>Google SignOut</button>  //simple way  */}
            {
                person ? <button onClick={gOut}>Google SignOut</button>: <>
                    <button onClick={handlegogglesingIn}>Google Sing In</button> <button onClick={gitSign}>Git signIn</button> 
                </>
            }
           {
            person && <div>
                 <h3>{person.displayName}</h3>
                 <p>{person.email}</p>
                 <img src={person.photoURL} alt="" srcset="" />
            </div>
           }
        </>
       
    );
};

export default Home;