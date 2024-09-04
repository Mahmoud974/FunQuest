// "use client";
// import { Github, Mail } from "lucide-react";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { signIn, signOut } from "next-auth/react";
// import Navbar from "@/components/Navbar";

// export default function Account() {
//   const onLogin = (provider: string) => () => {
//     signIn(provider, { callbackUrl: "/" });
//   };

//   return (
//     <>

//       <section className=" mt-16 flex items-center flex-col max-w-72 space-y-4 justify-center mx-auto">
//         <Button onClick={onLogin("google")}>
//           <Mail /> Connect to Google
//         </Button>
//       </section>
//     </>
//   );
// }
