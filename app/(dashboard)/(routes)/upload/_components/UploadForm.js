  
import React,{useState} from 'react'

function UploadForm() {

    const [file, setFile] = useState(null)
    const onFileChange = (file) => { 
        console.log(file);
        if (file && file.size > 2000000) {
            alert("File is too big!");
            return;
        }
        setFile(file);
    }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full xl:w-2/3 h-64 md:h-[20rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-900   hover:bg-blue-900/90"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-lg text-gray-100 ">
              <span class="font-semibold">Click to upload</span>
            </p>
            <p class="text-md text-gray-100 ">PDF, PNG, JPG, GIF</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" onChange={(e) => onFileChange(e.target.files[0]) }/>
        </label>
      </div>

      <button
        disabled={!file}
        className="p-2 font-medium text-white bg-primary rounded-md disabled:bg-gray-300/70 disabled:text-black"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm