// "use client";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import ScrollToTop from "@/components/ScrollToTop";
// import { SessionProvider } from "next-auth/react";
// import { usePathname } from "next/navigation";
// import { Providers } from "./providers";
// import { AuthProvider } from "@/utils/AuthContext";
// import { useState } from "react";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const isViewSection = pathname.startsWith('/view');
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head>
//         <title>Whitebox-Learning</title>
//         <meta content="width=device-width, initial-scale=1" name="viewport" />
//         <meta
//           name="description"
//           content="A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers."
//         />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="canonical" href="https://whitebox-learning.com/" />
//       </head>
//       <body className="dark:bg-black">
//         <SessionProvider>
//           <AuthProvider>
//             <Providers>
//               {!isViewSection && <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />}
//               <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
//               <main className="w-full">
//                 {children}
//               </main>
//               {!isViewSection && <Footer />}
//               {!isViewSection && <ScrollToTop />}
//             </Providers>
//           </AuthProvider>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }


"use client";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { AuthProvider } from "@/utils/AuthContext";
import { useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isViewSection = pathname.startsWith('/view');
  const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };


  const toggleSidebar = () => {
    console.log('Toggle function called. Current state:', isOpen);
    setIsOpen(prevState => {
      const newState = !prevState;
      console.log('New state:', newState);
      return newState;
    });
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Whitebox-Learning</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://whitebox-learning.com/" />
      </head>
      <body className="dark:bg-black">
        <SessionProvider>
          <AuthProvider>
            <Providers>
              {!isViewSection && <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />}
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
              <main className="w-full">
                {children}
              </main>
              {!isViewSection && <Footer />}
              {!isViewSection && <ScrollToTop />}
            </Providers>
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}




// "use client";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import ScrollToTop from "@/components/ScrollToTop";
// import { SessionProvider } from "next-auth/react";
// import { usePathname } from "next/navigation";
// import { Providers } from "./providers";
// import { AuthProvider, useAuth } from "@/utils/AuthContext";
// import { useState, useEffect } from "react";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isViewSection = pathname.startsWith('/view');
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated } = useAuth();

//   const toggleSidebar = () => {
//     console.log('Toggle function called. Current state:', isOpen);
//     setIsOpen(prevState => {
//       const newState = !prevState;
//       console.log('New state:', newState);
//       return newState;
//     });
//   };

//   // Open sidebar on login
//   useEffect(() => {
//     if (isAuthenticated) {
//       console.log('User logged in. Opening sidebar.');
//       setIsOpen(true);
//     }
//   }, [isAuthenticated]);

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head>
//         <title>Whitebox-Learning</title>
//         <meta content="width=device-width, initial-scale=1" name="viewport" />
//         <meta
//           name="description"
//           content="A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers."
//         />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="canonical" href="https://whitebox-learning.com/" />
//       </head>
//       <body className="dark:bg-black">
//         <SessionProvider>
//           <AuthProvider>
//             <Providers>
//               {!isViewSection && <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />}
//               <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
//               <main className="w-full">
//                 {children}
//               </main>
//               {!isViewSection && <Footer />}
//               {!isViewSection && <ScrollToTop />}
//             </Providers>
//           </AuthProvider>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }
