
import React, { useState } from "react";
import logo from "./assets/target-energy-logo.jpg";
import certificate from "./assets/certificate.jpg";
export default function Verification() {
  const [openModal, setOpenModal] = useState(false);
const [internId, setInternId] = useState("");
const [verifiedUser, setVerifiedUser] = useState(null);

const internsData = {
  "TE101": {
    name: "Laxman Prajapat",
    role: "Data Analysis Executive Intern",
    project: "Solar Energy Dashboard",
    duration: "1 Month",
    skills: "React, Excel, SQL, Power BI",
    status: "Verified",
  },

  "TE102": {
    name: "Lokendra Singh",
    role: "Data Analysis Executive Intern",
    project: "Solar Energy Dashboard",
    duration: "1 Month",
    skills: "React, Excel, SQL, Power BI",
    status: "Verified",
  },
};

const handleVerification = () => {
  const user = internsData[internId];

  if (user) {
    setVerifiedUser(user);
  } else {
    alert("Invalid Intern ID");
    setVerifiedUser(null);
  }
};
  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="w-full bg-white border-b shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Left Section */}
    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
      
      {/* Clickable Logo */}
      <a
        href="https://www.targetsolarenergy.in/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <img
          src={logo}
          alt="TARGET Energy"
          className="w-28 sm:w-32 md:w-36 h-auto object-contain hover:scale-105 transition duration-300"
        />
      </a>

      {/* Text */}
      <div className="space-y-1">
        

        <p className="text-sm sm:text-base text-gray-600 font-medium">
          Reduce Bills • Save Energy • Go Solar
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="text-center md:text-right">
      <p className="text-sm sm:text-base text-gray-500">
        Smart Energy Solutions for a Sustainable Future
      </p>
    </div>

  </div>
</header>

      {/* Top Info Section */}
      <section className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col xl:flex-row justify-between gap-8">
          
          {/* Left */}
          <div className="text-center xl:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              Verify the Certificate
            </h2>
          </div>

          {/* Center */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl">
              👤
            </div>

            <div>
              <p className="text-gray-500 text-base sm:text-lg">
                Certificate for
              </p>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
                Mr.  Lokendra Singh
              </h3>
            </div>
          </div>

          {/* Right Verification Box */}
          <div className="bg-white rounded-2xl shadow-md p-5 w-full xl:w-[450px]">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 text-xl sm:text-2xl">
                    ✔
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-semibold">
                    Verified
                  </h3>
                </div>

                <p className="text-gray-700 text-sm sm:text-base">
                  This is a Valid Certificate on Polygon Blockchain
                </p>
              </div>

          <button
  onClick={() => setOpenModal(true)}
  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-medium transition"
>
  Verify Again
</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Certificate Section */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          <div className="border rounded-lg overflow-hidden relative">
            <img
              src={certificate}
              alt="Certificate"
              className="w-full object-cover"
            />

            {/* Expand Button */}
            <button className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-lg">
              ⤢
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 text-sm sm:text-lg text-gray-500">
            <button className="hover:text-black">
              Previous
            </button>

            <p className="font-medium text-black">
              Page 1 of 1
            </p>

            <button className="hover:text-black">
              Next
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-8">
          <div className="space-y-8">
            
            {/* Organization */}
            <div>
              <p className="text-gray-500 text-lg sm:text-2xl mb-2">
                Organization Name
              </p>

              <h3 className="text-2xl sm:text-3xl font-medium uppercase break-words">
                TARGET Energy
              </h3>
            </div>

            {/* Inter ID */}
            <div>
              <p className="text-gray-500 text-lg sm:text-2xl mb-2">
                Employee / Intern ID


              </p>

              <h3 className="text-2xl sm:text-3xl font-medium uppercase break-words">
                TE102
              </h3>
            </div>

            {/* Program */}
            <div>
              <p className="text-gray-500 text-lg sm:text-2xl mb-2">
                Program Name
              </p>

              <h3 className="text-xl sm:text-3xl font-medium break-words">
                Data Analysis Executive Intern Program
              </h3>
            </div>

            {/* Stream */}
            <div>
              <p className="text-gray-500 text-lg sm:text-2xl mb-2">
                Stream Name
              </p>

              <h3 className="text-xl sm:text-3xl font-medium">
                IT
              </h3>
            </div>

            {/* Bottom Card */}
            <div className="bg-gray-100 rounded-2xl p-5 sm:p-8 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-lg sm:text-2xl">
                
                <p className="text-gray-700">Grade</p>
                <p className="font-medium">A</p>

                <p className="text-gray-700">Issued On</p>
                <p className="font-medium">
                  26-February-2026
                </p>

                <p className="text-gray-700">Valid Till</p>
                <p className="font-medium">
                  LIFETIME
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      {/* Verification Modal */}
{openModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    
    <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative">
      
      {/* Close Button */}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Verify Employee / Intern
      </h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter Intern ID"
        value={internId}
        onChange={(e) => setInternId(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* Verify Button */}
      <button
        onClick={handleVerification}
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Verify
      </button>

      {/* Result */}
      {verifiedUser && (
        <div className="mt-6 bg-gray-100 rounded-2xl p-5 space-y-4">
          
          <div>
            <p className="text-gray-500">Employee Name</p>
            <h3 className="text-xl font-semibold">
              {verifiedUser.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Role</p>
            <h3 className="text-lg font-medium">
              {verifiedUser.role}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Project Worked On</p>
            <h3 className="text-lg font-medium">
              {verifiedUser.project}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Duration</p>
            <h3 className="text-lg font-medium">
              {verifiedUser.duration}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Skills</p>
            <h3 className="text-lg font-medium">
              {verifiedUser.skills}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Verification Status</p>

            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {verifiedUser.status}
            </span>
          </div>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
}