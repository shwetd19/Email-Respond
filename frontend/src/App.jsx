import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value); 
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before making the POST request
    validateEmail();

    if (isValidEmail) {
      try {
        // Make a POST request to the backend with userEmail
        const response = await axios.post("/api/email", {
          userEmail: email,
        });

        // Handle the response as needed (e.g., show a success message)
        console.log(response.data);
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Unlock Your
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
          Code Potential
        </h1>
        <p className="text-base md:text-lg lg:text-2xl mb-8">
          Where Developers Rule and Code Thrives
        </p>
        <form method="post" id="revue-form" name="revue-form" target="_blank">
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="text-2xl placeholder:text-gray-400 placeholder-italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full outline-none mb-4 md:mb-0 border-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              className={`text-2xl placeholder:text-gray-400 placeholder-italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0 ${
                isValidEmail ? "border-gray-300" : "border-red-500"
              }`}
              placeholder="Enter your email"
              required
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 md:text-xl">
            Built with 💖 by Shwetas Dhake{" "}
          </p>

          <div className="flex -mx-6">
            <a
              href="https://www.linkedin.com/in/shwetas-dhake/"
              className="mx-3 hover:opacity-80 duration-150"
            >
              Linkedin
            </a>{" "}
            |
            <a
              href="https://github.com/shwetd19"
              className="mx-3 hover:opacity-80 duration-150"
            >
              Github
            </a>{" "}
            |
            <a
              href="https://shwetd19.github.io/"
              className="mx-3 hover:opacity-80 duration-150"
            >
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
