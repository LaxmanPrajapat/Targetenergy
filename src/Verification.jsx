
import React from "react";
import logo from "./assets/target-energy-logo.jpg";

export default function Verification() {
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

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-medium transition">
                Verify again
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
              src="/certificate.png"
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
    </div>
  );
}