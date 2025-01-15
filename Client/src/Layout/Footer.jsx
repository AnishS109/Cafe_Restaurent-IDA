import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import instagram from "../assets/Instagram.svg.webp";

const Footer = () => {
  const logo =
    'https://s3-alpha-sig.figma.com/img/4c51/56d3/dd3e2969a54beedf89709a0bad4afcf8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5DlRBNYQaPf6dtM5eXhRVBn2ZALM1ynsSS6p7ZlvKq4YQRx54H8rBGEcDwV-DYYFQWhkrj~D3MPtd1BCeHuC3JHKSQMo5xMmcThAzQX2IzSUksVKXyataTjToLth4P2SBafHYHV6E5Ay29pU4LLrSGNpjUM5-F9fUbVrOUQdQciYnr1BNaMGOYtHa8w-ULLb3KQgpmc7hevMj1pCqbd1jR3vLT3Bv5eoTGpdunCBmtfR2Hhe5XiLojf1CjmbOS3vd-cStiIpVKQYCtt1PQRQ6eIqsxqe9cis3UZ54wNChRsSogg65RGVfN7Ev1F47npgzQ7~TCuCYToiE1083mGzg__';

  const whatsApp = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png";
  const facebook = "https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg";

  return (
    <Box>
      <div className="bg-[#FE7700] w-full py-10 flex flex-col lg:flex-row justify-center items-center">
        {/* Text Content */}
        <div className="w-[90%] lg:w-[610px] text-center lg:text-left">
          <p className="text-[#FFFFFF] font-holtwood text-[30px] lg:text-[40px] mr-8 md:mr-0">
            <span className="text-[#FE7700]">ani</span>
            Discover the
          </p>
          <p className="text-[#FFFFFF] font-holtwood text-[30px] lg:text-[40px] mr-8 md:mr-0">
            <span className="text-[#FE7700]">ani</span>
            Reviews
          </p>
          <p className="text-[#FFFFFF] text-[20px] lg:text-[24px] font-[Cambay] mt-4">
            <span className="text-[#FFFFFF] font-holtwood text-[30px] lg:text-[40px]">"</span>
            A reviewer said that the cafe is a great place to pair a book with a cup of coffee. They also mentioned the excellent service and delicious food
            <span className="text-[#FFFFFF] font-holtwood text-[30px] lg:text-[40px]">"</span>
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="border-solid border-b-2 border-white w-[75px] mb-1"></span>
              <span className="ml-4 text-[20px] lg:text-[24px] font-[Cambay] text-[#FFFFFF]">
                John Bradely
              </span>
            </div>
            <p className="text-[20px] lg:text-[24px] font-[Cambay] text-[#FFFFFF]">
              <span className="text-[#FE7700]">anish</span> (Owner of ABC Cafe)
            </p>
          </div>
        </div>

        {/* Image Section (Logo on the right) */}
        <div className="h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] mt-6 lg:mt-0 lg:ml-14">
          <img className="rounded-[40px] w-full h-full object-cover" src={logo} alt="Reviewer" />
        </div>
      </div>

      {/* Decorative Text */}
      <div className="text-[#FFFFFF] text-[30px] lg:text-[40px] mt-[-55px] flex justify-center items-center">
        <span>. . .</span>
        <span className="text-[#FE7700] mx-2">a</span>
        <span>. . . .</span>
      </div>

      {/* Contact US */}
      <div className="flex flex-col lg:flex-row justify-around mt-[100px] px-4 lg:px-16">
        <div className="lg:w-[50%]">
          <p className="text-[#FE7700] font-holtwood text-[40px]">Contact us</p>
          <p className="font-cambay text-[#000000] text-[32px]">Listing your Cafe is easy</p>
          <p className="font-cambay text-[#000000] text-[32px]">Just fill the form</p>
          <p className="font-cambay text-[#000000] text-[32px]">and get connected to us</p>
          <br />
          <p className="font-cambay text-[#000000] text-[20px]">List your cafe with Cafe Dekho to get your cafe noticed by customers.</p>

          <div className="flex justify-between w-[300px] items-center mt-6">
            <img src={facebook} alt="facebook" className="h-[97px] w-[92px]" />
            <img src={instagram} alt="Instagram" className="h-[67px] w-[62px]" />
            <img src={whatsApp} alt="WhatsApp" className="h-[91px] w-[86px]" />
          </div>
        </div>

        <div className="lg:w-[50%] text-slate-950 mb-20 mt-6 lg:mt-0">
          <p className="text-[20px]">Owner Name</p>
          <TextField className="bg-white h-10 focus:bg-white mb-4 hover:bg-white hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black w-full" variant="filled" />

          <p className="text-[20px]">Cafe Name</p>
          <TextField className="bg-white h-10 focus:bg-white mb-4 hover:bg-white hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black w-full" variant="filled" />

          <p className="text-[20px]">Phone Number</p>
          <TextField className="bg-white h-10 focus:bg-white mb-4 hover:bg-white hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black w-full" variant="filled" />

          <p className="text-[20px]">Location</p>
          <TextField className="bg-white h-10 focus:bg-white mb-4 hover:bg-white hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black w-full" variant="filled" />

          <p className="text-[20px]">E-Mail</p>
          <TextField className="bg-white h-10 focus:bg-white mb-6 hover:bg-white hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black w-full" variant="filled" />

          <Button className="bg-[#FE7700] text-white w-[170px] h-[55px] rounded-none text-[27px] font-semibold italic normal-case hover:text-black transition-all duration-200 ease-in-out">
            Submit
          </Button>
        </div>
      </div>

      <div className="bg-[#FE7700] h-[397px] w-full"></div>
    </Box>
  );
};

export default Footer;
