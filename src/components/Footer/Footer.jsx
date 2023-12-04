import myImag from '../../../src/assets/company/jewel2.jpg'
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
      <div   className={`xl:mt-12`}>
        <div className="flex justify-between p-10 bg-neutral text-neutral-content">
          <div>
          <img className='footer-img mb-8' src={myImag} alt="" />
            <p>
             www.programming-hero.com
              <br />
              <span>Course from Programming Hero in 2022</span>
            </p>
          </div>
          <div>
            <span className=" font-bold text-2xl  text-white">Social</span>
            <div className="grid grid-flow-col gap-4">
            
            <div className="card-actions justify-start mt-8">
                    <div className="flex gap-10">
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://www.facebook.com/"
                      >
                        {" "}
                        <FaFacebook />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://github.com/mdjewel999"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://www.linkedin.com/in/md-jewel-954986250/"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div> 
            
            </div>
          </div>
        </div>
        <div className="text-center p-4 bg-neutral text-base-content">
          <div>
            <p className="text-white">Copyright © 2023 - All right reserved</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  