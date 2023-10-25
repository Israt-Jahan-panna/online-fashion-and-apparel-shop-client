import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import app from "../FireBase/firebase.config";
const auth = getAuth(app)

const Registrations = () => {
    const [registerError, setRegisterError] = useState('');
  const [sucess, setSucess] = useState('');
  const [passwordShow , setPasswordShow ] = useState(false)

    const {createUser} = useContext(AuthContext);
    const handelSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email, password , name);
    
        if(password.length <6 ){
            setRegisterError('Enter At Least 6 Character Password');
            return;
        }
        else if( !/[A-z]/ .test(password)){
            setRegisterError('you should enter a capital letter')
            return;
        }
        else if( !/[@$!%*?&]/ .test(password)){
            setRegisterError('you should enter a Special Charecter ')
            return;
        }
        
    
        setRegisterError('');
        setSucess('');
    
    
        //create user
        createUserWithEmailAndPassword(auth, email, password)
          .then((results) => {
            const user = results.user;
            setSucess(" Your Account Create SuccessFully ");
            Swal(
                "Registration  and Loginsuccessful ",
                "success"
              );
           const users = {email ,name};
           fetch('https://fashion-and-apparel-shop-server-iy9nm9vnj-israt-jahans-projects.vercel.app/user', {
            method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
           })
           .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Thank You!',
                text: 'User  Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
           
            console.log(user);
          })
      
      };
    return (
        <div>
            <div className="mx-auto mb-16 ">
      <div className="mx-auto md:w-1/2 mt-7 mb-2">
        <h3 className="text-3xl mb-4 pt-2 text-center text-red-300 font-bold">Please Register and Create Account</h3>
        <form onSubmit={handelSubmit}>
            <input
              className="mb-4 w-full  py-1 px-4"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
          <input
            className="mb-4 w-full  py-1 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <div className=" relative">
          <input
            className="mb-4 w-full py-1 px-4"
            // type={passwordShow ? "text" : "password"}
            name="password"
            id=""
            placeholder=" Password"
          />
          
          </div >
          
          <br />
        <button  className="mb-4 w-full bg-red-600  rounded-lg py-2  px-4"
            type="submit"
            value="Register">
            Registration </button>
        </form>
      </div>
      <div className="mx-auto w-1/4">
      {sucess && 
      <p className="text-blue-400  mb-6">{sucess}</p>}
      {registerError && (
        <p className="text-red-400  mb-6">{registerError}</p>
      )}
      <p>Already Have An Account ? <Link className="underline" to={'/login'}> Goto Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Registrations;