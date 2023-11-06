import React from "react";

const Template1 = () => {
  return (
    <div className="bg-[#ebecf0] py-5">
      <div className="mx-96 w-[50rem] h-[67rem] bg-white text-[#464a4e]">
        {/* Header */}
        <div className="h-14 bg-[#f0cfc3]"></div>
        <div className="flex gap-16 pl-16 pt-8">
          <div className="w-[9.5rem] flex justify-center mr-9">
            <img
              src="/img/profile5.jpg"
              alt="Profile"
              className="h-[8.5rem] w-[8.5rem] object-cover rounded-full flex justify-center items-center"
            />
          </div>
          <div className="flex flex-col justify-center w-[28.5rem] gap-1 text-[#4a454b]">
            <h1 className="text-4xl font-semibold tracking-wider font-header">
              JULIANA SILVA
            </h1>
            <h3 className="tracking-widest text-lg">Art Director</h3>
            <div className="border border-[#464a4e] my-3 w-[28rem]"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col pl-16 py-9 w-full mr-7">
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <i class="fa-solid fa-phone" style={{ color: "#241d19" }}></i>
                &emsp;+123-456-7890
              </p>
              <a
                href="mailto:hello@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-sm flex items-center"
              >
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "#241d19" }}
                ></i>
                <span>&emsp;hello@gmail.com</span>
              </a>
              <a
                href="https://www.julianasilva.com"
                className="text-sm"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-globe" style={{ color: "#241d19" }}></i>
                <span>&emsp;www.julianasilva.com</span>
              </a>
              <p className="text-sm">
                <i
                  class="fa-solid fa-location-dot"
                  style={{ color: "#241d19" }}
                ></i>
                &emsp;123 Anywhere St., Any City, ST 12345
              </p>
            </div>

            {/* Education */}
            <div>
              <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
                EDUCATION
              </h1>
              <div className="pb-2">
                <h2 className="text-lg font-semibold text-[#464a4e]">
                  Bachelor of Design
                </h2>
                <h3 className="font-medium text-[#464a4e]">
                  Wardiere University
                </h3>
                <p className="text-[#464a4e]">2006 - 2008</p>
              </div>
              <div className="">
                <h2 className="text-lg font-semibold text-[#464a4e]">
                  Bachelor of Design
                </h2>
                <h3 className="font-medium text-[#464a4e]">
                  Wardiere University
                </h3>
                <p className="text-[#464a4e]">2006 - 2008</p>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
                EXPERTISE
              </h1>
              <ul className="flex flex-col gap-4">
                <li>Web Design</li>
                <li>Branding</li>
                <li>Graphic Design</li>
                <li>SEO</li>
                <li>Marketing</li>
              </ul>
            </div>

            {/* Language */}
            <div>
              <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
                LANGUAGE
              </h1>
              <ul className="flex flex-col gap-1">
                <li>English</li>
                <li>French</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col pl-16 pr-8">
            {/* About */}
            <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
              ABOUT ME
            </h1>
            <p className="text-sm text-[#737373]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pharetra in lorem at laoreet. Donec hendrerit libero eget est
              tempor, quis tempus arcu elementum. In elementum elit at dui
              tristique feugiat. Mauris convallis, mi at mattis malesuada, neque
              nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Est
              tempor, quis tempus arcu.
            </p>

            {/* Experience */}
            <div>
              <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
                WORK EXPERIENCE
              </h1>
              <div className="border-l border-l-black">
                <div className="pb-5">
                  <div className="flex relative items-center">
                    <div className="w-[10px] h-[10px] bg-white -mx-[0.32rem] border-2 absolute border-black rounded-full"></div>
                    <p className="text-[#737373] pl-4">Jan 2022-Present</p>
                  </div>
                  <p className="text-[#737373] pl-4">
                    Company Name | 123, New York City
                  </p>
                  <h1 className="text-lg text-[#414042] pl-4">
                    Digital Marketing Manager
                  </h1>
                  <p className="text-sm text-[#737373] pl-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pharetra in lorem at laoreet.
                  </p>
                </div>
                <div className="pb-5">
                  <div className="flex relative items-center">
                    <div className="w-[10px] h-[10px] bg-white -mx-[0.32rem] border-2 absolute border-black rounded-full"></div>
                    <p className="text-[#737373] pl-4">2017-2019</p>
                  </div>
                  <p className="text-[#737373] pl-4">
                    Company Name | 123, New York City
                  </p>
                  <h1 className="text-lg text-[#414042] pl-4">
                    Social Media Manager
                  </h1>
                  <p className="text-sm text-[#737373] pl-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pharetra in lorem at laoreet.
                  </p>
                </div>
                <div className="">
                  <div className="flex relative items-center">
                    <div className="w-[10px] h-[10px] bg-white -mx-[0.32rem] border-2 absolute border-black rounded-full"></div>
                    <p className="text-[#737373] pl-4">2015-2017</p>
                  </div>
                  <p className="text-[#737373] pl-4">
                    Company Name | 123, New York City
                  </p>
                  <h1 className="text-lg text-[#414042] pl-4">
                    Social Media Manager
                  </h1>
                  <p className="text-sm text-[#737373] pl-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pharetra in lorem at laoreet.
                  </p>
                </div>
              </div>
            </div>

            {/* Reference */}
            <div>
              <h1 className="text-xl font-bold pt-8 pb-4 text-[#4a454b]">
                REFERENCE
              </h1>
              <div className="flex justify-between">
                <div>
                  <div>
                    <h1 className="text-lg font-semibold">Estelle Darcy</h1>
                    <p className="">Wardiere Inc. / CEO</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Phone: </span>
                    <a href="tel:+123-45-8790" className="text-xs">
                      +123-456-7890
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Email: </span>
                    <a
                      href="mailto:hello@reallygreatsite.com"
                      className="text-xs"
                    >
                      hello@reallygreatsite.com
                    </a>
                  </div>
                </div>

                <div>
                  <div>
                    <h1 className="text-lg font-semibold">Estelle Darcy</h1>
                    <p className="">Wardiere Inc. / CEO</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Phone: </span>
                    <a href="tel:+123-45-8790" className="text-xs">
                      +123-456-7890
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Email: </span>
                    <a
                      href="mailto:hello@reallygreatsite.com"
                      className="text-xs"
                    >
                      hello@reallygreatsite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;