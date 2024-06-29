"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";

function Upload() {
  return (
    <div className="p-6 md:px-28">
      <h2 className="text-[1.8rem] md:text-[3rem] text-center m-7">
        Start <strong className="text-blue-700">Uploading</strong> File &{" "}
        <strong className="text-blue-700">Share</strong>
      </h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
