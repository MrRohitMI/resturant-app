const Contact = () => {
  return (
    <>
      <h1>ContactUs</h1>
      <div>
        <input type="text" placeholder="Enter Name" className="border border-black p-2 m-2" />
        <input type="text" placeholder="Enter Description" className="border border-black p-2 m-2"/>
        <button className="border border-gray-500 bg-gray-300 rounded p-2 m-2">Submit</button>
      </div>
    </>
  );
};

export default Contact;