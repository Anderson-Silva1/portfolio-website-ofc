// import ItemNavHeader from "./ItemNavHeader";

import ItemNavHeader from "./ItemNavHeader";

// const NavHeader = () => {
//   return (
//     <>
//       <nav className="flex flex-1">
//         <ul className="flex h-full flex-1 items-center justify-around gap-3">
//           <ItemNavHeader>Sobre</ItemNavHeader>
//           <ItemNavHeader>Blog</ItemNavHeader>
//           <ItemNavHeader>Ferramentas</ItemNavHeader>
//           <ItemNavHeader>Projetos</ItemNavHeader>
//           <ItemNavHeader contatos={true}>Contatos</ItemNavHeader>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default NavHeader;

// import ItemNavHeader from "./ItemNavHeader";

// const NavHeader = () => {
//   return (
//     <nav className="flex flex-1 items-center justify-center">
//       <ul className="flex flex-wrap justify-around gap-6 md:gap-12">
//         <ItemNavHeader>Sobre</ItemNavHeader>
//         <ItemNavHeader>Blog</ItemNavHeader>
//         <ItemNavHeader>Ferramentas</ItemNavHeader>
//         <ItemNavHeader>Projetos</ItemNavHeader>
//         <ItemNavHeader contatos={true}>Contatos</ItemNavHeader>
//       </ul>
//     </nav>
//   );
// };

// export default NavHeader;

interface NavHeaderProps {
  isMobile?: boolean; // Define a tipagem como opcional e booleana
}

const NavHeader: React.FC<NavHeaderProps> = ({ isMobile = false }) => {
  return (
    <nav
      className={`${
        isMobile
          ? "absolute left-0 top-20 w-full bg-gray-900 p-6 shadow-lg"
          : "flex flex-1 items-center justify-center"
      }`}
    >
      <ul
        className={`flex ${
          isMobile
            ? "flex-col items-center gap-4"
            : "flex-wrap justify-around gap-6 md:gap-12"
        }`}
      >
        <ItemNavHeader link="sobre">Sobre</ItemNavHeader>
        <ItemNavHeader link="blog">Blog</ItemNavHeader>
        <ItemNavHeader link="ferramentas">Ferramentas</ItemNavHeader>
        <ItemNavHeader link="projetos">Projetos</ItemNavHeader>
        <ItemNavHeader link="contatos" contatos={true}>
          Contatos
        </ItemNavHeader>
      </ul>
    </nav>
  );
};

export default NavHeader;
