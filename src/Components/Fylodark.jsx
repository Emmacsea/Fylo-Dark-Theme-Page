import { useState } from "react";
import logo from "../assets/images/logo.svg";
import intro from "../assets/images/illustration-intro.png";
import access from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collabo from "../assets/images/icon-collaboration.svg";
import storage from "../assets/images/icon-any-file.svg";
import prod from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import mail from "../assets/images/icon-email.svg";
import fb from "../assets/images/icon-facebook.svg";
import twit from "../assets/images/icon-twitter.svg";
import PropTypes from "prop-types";

export const Fylo = ({ email, onChangeEmail, onSubmitDetails }) => {
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (!email) newError.email = `Please enter a valid email address`;

    setError(newError);

    if (Object.keys(newError).length === 0) {
      onSubmitDetails();
    }
  };

  return (
    <div className="bg-primary-darkbluembg h-full w-full">
      <header className="flex justify-between items-center py-12 px-28">
        <div>
          <img className="w-24" src={logo} alt="Fylo Logo" />
        </div>

        <nav>
          <ul className="flex space-x-6 items-center">
            <li className="list">
              <a href="">Features</a>
            </li>
            <li className="list">
              <a href="">Team</a>
            </li>
            <li className="list">
              <button>Sign in</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pb-40">
        <section className="flex flex-col justify-center items-center pt-9 px-72">
          <div>
            <img className="w-80" src={intro} alt="" />
          </div>

          <div className="text-center space-y-4">
            <h4 className="text-neutral-white text-3xl font-semibold">
              All your files in one secure location, accessible anywhere.
            </h4>
            <p className="text-neutral-300 text-sm font-light">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <button className=" bg-gradient-to-r from-accent-cyan to-accent-blue text-neutral-white tex-base font-medium rounded-full py-2 px-12 text-center b">
              Get Started
            </button>
          </div>
        </section>

        <section className="px-64 pt-16 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-x-28 gap-y-20">
            <div className="flex flex-col justify-center items-center text-center">
              <div>
                <img src={access} alt="" />
              </div>
              <div>
                <h3 className="text-neutral-white font-bold text-2xl">
                  Access your files, anywhere
                </h3>
                <p className="text-neutral-white text-base font-thin">
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <div>
                <img src={security} alt="" />
              </div>
              <div>
                <h3 className="text-neutral-white font-bold text-2xl">
                  Security you can trust
                </h3>
                <p className="text-neutral-white text-base font-thin">
                  2-factor authentication and user-controlled encryption are
                  just a couple of the security featurs we allow to help secure
                  your files.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <div>
                <img src={collabo} alt="" />
              </div>
              <div>
                <h3 className="text-neutral-white font-bold text-2xl">
                  Real-time collaboration
                </h3>
                <p className="text-neutral-white text-base font-thin">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <div>
                <img src={storage} alt="" />
              </div>
              <div>
                <h3 className="text-neutral-white font-bold text-2xl">
                  Store any type of file
                </h3>
                <p className="text-neutral-white text-base font-thin">
                  Whether you&apos;re sharing holidays photos or work documents,
                  Fylo has you covered allowing for all file types to be
                  securely stored and shared.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-between items-center gap-56 px-28 pt-16">
          <div>
            <img src={prod} alt="" />
          </div>

          <div className="space-y-3">
            <h4 className="text-neutral-white text-3xl font-bold">
              Stay productive, whervere you are
            </h4>
            <p className="text-neutral-white text-sm font-extralight">
              Never let location be an issue when accesing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-neutral-white text-sm font-extralight">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="text-accent-cyan text-base font-medium flex gap-3 items-center border-b-accent-cyan border-b-2 w-44">
              <p>See how Fylo works </p>
              <img className="w-4 h-4" src={arrow} alt="" />
            </div>
          </div>
        </section>

        <section className="flex justify-between items-center gap-6 px-28 pt-16 ">
          <div className="bg-primary-darkbluetbg py-5 px-7 rounded-md h-52">
            <p className="text-neutral-white text-base font-light">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>

            <div className="flex gap-3 items-start pt-5">
              <div>
                <img className="w-12 h-12 rounded-full" src={profile1} alt="" />
              </div>
              <div className="text-neutral-white space-y-1">
                <h3 className="text-base font-bold">Satish Patel</h3>
                <p className="text-sm font-extralight">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-darkbluetbg py-5 px-7 rounded-md h-52">
            <p className="text-neutral-white text-base font-light">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>

            <div className="flex gap-3 items-start pt-5">
              <div>
                <img className="w-12 h-12 rounded-full" src={profile2} alt="" />
              </div>
              <div className="text-neutral-white space-y-1">
                <h3 className="text-base font-bold">Bruce McKenzie</h3>
                <p className="text-sm font-extralight">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-darkbluetbg py-5 px-7 rounded-md h-52">
            <p className="text-neutral-white text-base font-light">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>

            <div className="flex gap-3 items-start pt-5">
              <div>
                <img className="w-12 h-12 rounded-full" src={profile3} alt="" />
              </div>
              <div className="text-neutral-white space-y-1">
                <h3 className="text-base font-bold">Iva Boyd</h3>
                <p className="text-sm font-extralight">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative">
        <div className="flex flex-col justify-center items-center bg-primary-darkbluetbg space-y-4 h-auto px-10 py-6 text-center z-10 absolute  -top-24 left-0 right-0 mb-20 rounded-md mx-72 ">
          <h3 className="text-neutral-white text-lg font-bold ">
            Get early access today
          </h3>
          <p className="text-neutral-white text-sm font-light">
            It only takes a minute to Sign up and our free starter tier is
            extremely generous. IF you have any questions, our support team
            would be happy to help you.
          </p>
          <div>
            <form action="" className="w-full" onSubmit={handleSubmit}>
              <div className="flex gap-5 justify-start items-start w-full">
                <div className="flex flex-col w-full">
                  <input
                    className="text-accent-blue  py-2 px-6 rounded-full text-sm font-light placeholder:text-xs focus:outline focus:border-0"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="email@example.com"
                  />
                  {error.email && (
                    <p className="text-accent-lightred pl-5 text-xs font-light">
                      {error.email}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="text-neutral-white w-full text-nowrap bg-gradient-to-r from-accent-cyan to-accent-blue text-sm font-medium rounded-full py-2 px-7 b"
                >
                  Get Started For Free
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-primary-darkbluefbg px-28 pt-40 pb-14 space-y-7">
          <div>
            <img className="w-24" src={logo} alt="Fylo Logo" />
          </div>

          <div className="flex justify-between items-start ">
            <div className="flex w-80 gap-4 items-start">
              <div>
              <img className="w-9" src={location} alt="" />
              </div>
              <div>
              <p className="text-neutral-white font-light text-sm">
                Lorem losum dolor sit amet, consectetur adispiscing elit, sed do
                elusmed tempor incididunt ut labore et dolore magna aliqua
              </p>
              </div>
            </div>

            <div>
              <nav>
                <ul>
                  <li className="list flex gap-4 items-center">
                    <img className="w-3" src={phone} alt="" />
                    <a href="">+1-543-123-4567</a>
                  </li>
                  <li className="list flex gap-4 items-center">
                    <img className="w-3" src={mail} alt="" />
                    <a href="">example@fylo.com</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <nav>
                <ul>
                  <li className="list">                    
                    <a href="">About us</a>
                  </li>
                  <li className="list">                    
                    <a href="">Jobs</a>
                  </li>
                  <li className="list">                    
                    <a href="">Press</a>
                  </li>
                  <li className="list">                    
                    <a href="">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <nav>
                <ul>
                  <li className="list">                    
                    <a href="">Contact us</a>
                  </li>
                  <li className="list">                    
                    <a href="">Terms</a>
                  </li>
                  <li className="list">                    
                    <a href="">Privacy</a>
                  </li>                  
                </ul>
              </nav>
            </div>

            <div className="flex gap-4 items-center">
               <div><img className="w-3" src={fb} alt="" /></div>
               <div><img className="w-3" src={twit} alt="" /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Fylo.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmitDetails: PropTypes.func.isRequired,
};
