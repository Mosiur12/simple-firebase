import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function App() {
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  
  return (
    <div className="App">
      <button onClick={handleGoogleSignin}>Google signIn</button>
    </div>
  );
}

export default App;
