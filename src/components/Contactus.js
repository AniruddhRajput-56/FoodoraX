import React, { useState } from "react";

const Contactus = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${name}! Your message has been received.`);
    setName("");
    setMessage("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-400 p-2 rounded flex-1"
          required
        />
        <button
          type="submit"
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
