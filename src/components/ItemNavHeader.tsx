// import { ReactNode } from "react";

// interface ItemNavHeaderProps {
//   children: ReactNode;
//   contatos?: boolean;
// }

// const ItemNavHeader = ({ children, contatos }: ItemNavHeaderProps) => {
//   return (
//     <li className="flex">
//       <a
//         href="#"
//         className={`${contatos ? "custom-hover-btn sombra text-white" : "custom-ItemNavHeader sombra"} `}
//       >
//         {children}
//       </a>
//     </li>
//   );
// };

// export default ItemNavHeader;

import { ReactNode } from "react";

interface ItemNavHeaderProps {
  children: ReactNode;
  contatos?: boolean;
  link: string;
}

const ItemNavHeader = ({ children, contatos, link }: ItemNavHeaderProps) => {
  return (
    <li className="flex">
      <a
        href={`#${link}`}
        className={`${
          contatos
            ? "custom-hover-btn sombra text-white hover:bg-principal"
            : "custom-ItemNavHeader sombra text-gray-300"
        } transition-all duration-200 ease-in-out hover:text-white`}
      >
        {children}
      </a>
    </li>
  );
};

export default ItemNavHeader;
