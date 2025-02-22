// import Link from "next/link";

// const LogoHeader = () => {
//   return (
//     <Link href="/">
//       <div className="flex h-full w-40 flex-col items-start justify-center -space-y-3 pl-3">
//         <span className="sombra text-xl font-semibold text-escura">
//           Anderson
//         </span>
//         <span className="sombra text-3xl font-bold text-principal">DEV</span>
//       </div>
//     </Link>
//   );
// };

// export default LogoHeader;

import Link from "next/link";

const LogoHeader = () => {
  return (
    <Link href="/">
      <div className="flex h-full w-40 flex-col items-start justify-center -space-y-2 pl-3">
        <span className="text-xl font-semibold text-white">Anderson</span>
        <span className="text-3xl font-bold text-principal">DEV</span>
      </div>
    </Link>
  );
};

export default LogoHeader;
