import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Remove any non-digit characters
    const phoneNumber = input.replace(/\D/g, "");
    // Limit to 10 digits
    if (phoneNumber.length <= 10) {
      // Update the userData state with the formatted phone number
      setUserData({ ...userData, phone: phoneNumber });
    }
  };

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, feedback } = userData;
    if (name && email && phone && feedback) {
      try {
        setLoading(true); // Set loading to true when submitting
        const res= await fetch(
          "https://amsusantportfolio-default-rtdb.firebaseio.com/UserFeedBack.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        if (res.ok) {
          toast.success("Thanks for your feedback!", {
            position: 'top-right',
            autoClose: 3000 // Specify the time in milliseconds (e.g., 3000ms = 3 seconds)
          });
          setUserData({
            name: "",
            email: "",
            phone: "",
            feedback: "",
          }); // Clear input fields
        } else {
          throw new Error("Failed to submit feedback");
        }
      } catch (error) {
        console.error("Error submitting feedback:", error);
        toast.error("Failed to submit feedback. Please try again later.", {
          position: 'top-right',
          autoClose: 3000 // Specify the time in milliseconds (e.g., 3000ms = 3 seconds)
        });
      }finally {
        setLoading(false); // Set loading back to false after submission
      }
    }
  };

  return (
    <div className="flex justify-center items-center text-white">
       <ToastContainer className="md:w-1/2" />
      <form className="max-w-md w-full" onSubmit={submitData}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          className="bg-gray-800 w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={postUserData}
          required
        />

        <label htmlFor="phone">Phone No:</label>
        <br />
        <input
          className="bg-gray-800 w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500"
          type="tel"
          id="phone"
          name="phone"
          onChange={handlePhoneChange}
          value={userData.phone}
          maxLength="10"
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 hover:border-red-500"
          type="email"
          id="email"
          value={userData.email}
          onChange={postUserData}
          placeholder="example@gmail.com"
          name="email"
          required
        />
        <br />

        <label htmlFor="feedback">Feedback:</label>
        <br />
        <textarea
          className="bg-gray-800 w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500"
          id="feedback"
          name="feedback"
          rows="5"
          cols="30"
          value={userData.feedback}
          onChange={postUserData}
          required
        ></textarea>
        <br />

        {/* <div className="flex justify-center items-center">
          <button
            className="bg-red-700 px-4 py-2 rounded-md text-white hover:bg-red-800 focus:outline-none focus:bg-red-800"
            type="submit"
          >
            Submit
          </button>
        </div> */}
         {/* Loader */}
         {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            className="bg-red-700 px-4 py-2 rounded-md text-white hover:bg-red-800 focus:outline-none focus:bg-red-800"
            type="submit"
          >
            Submit
          </button>
          </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

