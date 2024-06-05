import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="logo"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl flex flex-col gap-5 justify-center items-center">
            <Image src="./logo.svg" alt="logo" width={80} height={80} />

            <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl ">
              Welcome to FileShare
            </h1>

            <p className=" leading-relaxed text-gray-500 w-[80%] mb-10 text-center">
              Wanna share files with your friends and family? Fileshare is the
              best way to do it. It's fast, secure and easy to use.
            </p>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
