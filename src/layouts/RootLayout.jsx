import Sidebar from "./sidebar";
import Navbar from "./Navbar/Navbar";

function RootLayout({ children }) {
  return (
    // <div className="flex gap-5">
    //   <Sidebar />
    //   <Navbar/>
    //   <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    // </div>

    // <div className="grid grid-rows-3 grid-flow-col gap-0">
    //   <div className="row-span-3 ">
    //     <Sidebar />
    //   </div>
    //   <div className="col-span-2">
    //     <Navbar/>
    //   </div>
    //   <div className="row-span-2 col-span-2">
    //     <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    //   </div>
    // </div>

    // <>
    //   <div className="fixed bottom-0 left-0">
    //     <Sidebar />
    //   </div>
    //   <div className="absolute top-0 right-0">
    //     <Navbar/>
    //   </div>
    //   <div className="absolute top-20 left-[300px]">
    //     <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    //   </div>
    //   </>

    <>
      <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
      </div>
    </div>
    </>
  );
}

export default RootLayout;
