import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Han Yin</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Thanks for visiting my site!</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/HanzhangYin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub size={24}/>
            </a>
            <a
              href="https://www.linkedin.com/in/hanzhang-yin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Han Yin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
