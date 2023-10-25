import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../FireBase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const auth = getAuth(app);
const Login = () => {
  const { user, loading } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [sucess, setSucess] = useState("");
  const emailRef = useRef(null);

  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the loginPage", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginError("");
    setSucess("");
    console.log(email, password);
    if (loading) {
      <progress className="progress w-56"></progress>;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user;
        console.log(user);
        // navigation
        navigate(location?.state ? location.state : "/");
        if (user) {
          setSucess(" Your Account Login SuccessFully ");
          Swal("Login successful", "success");

          return;
        } else {
          setLoginError("Email or Password doesn't match ");
          return;
        }
      })
      .catch((error) => {
        setLoginError("Email or Password doesn't match");
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;

        // Create an object to send to your server
        const userData = {
          name: user.displayName,
          email: user.email,
        };

        // Make a POST request to your server
        fetch(
          "https://fashion-and-apparel-shop-server-6ol0g5b2m-israt-jahans-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              // Using Swal to show a success message
              Swal.fire({
                title: "Thank You!",
                text: "Login Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="form-control mt-2 mx-8">
              <button onClick={handleGoogleLogin} className="btn bg-sky-500">
                Login with Google
              </button>
            </div>
            <div className="mx-auto">
              {sucess && <p className="text-blue-400  mb-6">{sucess}</p>}
              {loginError && <p className="text-red-400  mb-6">{loginError}</p>}
            </div>
            <p className="p-4">
              New to this website?{" "}
              <Link className="underline" to={"/registration"}>
                Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
