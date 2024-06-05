import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-900 text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex  items-center h-[93.5vh]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Upload, Save &
            <span className="sm:block"> Easily Share your files. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl w-[85%] text-sm lg:text-xl/relaxed">
            Wanna share files with your friends and family? Fileshare is the
            best way to do it. It's fast, secure and easy to use.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-3/4 rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/files"
            >
              Get Started
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero