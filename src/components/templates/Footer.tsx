// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 py-4 text-center text-white">
//       <p className="text-sm">
//         &copy; {new Date().getFullYear()} Todos os direitos reservados.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 py-6 text-white">
//       <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Todos os direitos reservados.
//         </p>

//         <div className="mt-4 flex space-x-4 md:mt-0">
// <a
//   href="https://api.whatsapp.com/send/?phone=5585989728040&text=Ol%C3%A1+Anderson%2C+gostaria+de+conhecer+um+pouco+mais+sobre+seu+trabalho.&type=phone_number&app_absent=0"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaWhatsapp className="text-2xl hover:text-gray-400" />
// </a>
// <a
//   href="https://github.com/Anderson-Silva1"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaGithub className="text-2xl hover:text-gray-400" />
// </a>
// <a
//   href="https://www.linkedin.com/in/anderson-silva-developer/"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaLinkedin className="text-2xl hover:text-gray-400" />
// </a>

// <a
//   href="https://www.instagram.com/anderson_silva_developer/"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaInstagram className="text-2xl hover:text-gray-400" />
// </a>

// <a
//   href="https://www.youtube.com/@Anderson-dev360"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaYoutube className="text-2xl hover:text-gray-400" />
// </a>

// <a href="/" target="_blank" rel="noopener noreferrer">
//   <FaDiscord className="text-2xl hover:text-gray-400" />
// </a>

// <a
//   href="mailto:anderson.developer360@gmail.com.br"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaEnvelope className="text-2xl hover:text-gray-400" />
// </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {/* Links de Navegação */}
        <div>
          <h3 className="text-lg font-semibold">Links Rápidos</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="" className="hover:text-gray-400">
                Início
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-gray-400">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold">Contato</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> anderson.developer360@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" /> +55 85 98972-8040
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold">Siga-nos</h3>
          <div className="mt-4 flex space-x-4">
            {/* <a
              href="https://api.whatsapp.com/send/?phone=5585989728040&text=Ol%C3%A1+Anderson%2C+gostaria+de+conhecer+um+pouco+mais+sobre+seu+trabalho.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl hover:text-gray-400" />
            </a> */}
            <a
              href="https://github.com/Anderson-Silva1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/anderson-silva-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </a>

            <a
              href="https://www.instagram.com/anderson_silva_developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>

            <a
              href="https://www.youtube.com/@Anderson-dev360"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-2xl hover:text-gray-400" />
            </a>

            {/* <a
              href="mailto:anderson.developer360@gmail.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-2xl hover:text-gray-400" />
            </a> */}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
