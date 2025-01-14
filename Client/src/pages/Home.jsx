import React from 'react'
import Layout from '../Layout/Layout'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {

  const bgImage = "https://s3-alpha-sig.figma.com/img/66f7/52bc/4af7be52b1525386213b06ac055f5b82?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-5dHb9EgGlN82OjEhruRlHYKSaHeAZH-tIvgKQQ-TyGv4J3yNZowEAB3BdZwY3OrV4dmK-z52PCPKjzgSdOz6lHfm9IWpNlgqzAXfltHZ4leqzwedQ95g-0zpyga66IdN0cinvAOxXifCz9IVbp4YtvBijd9Rjmc1smakCsdTn7oGEEv3ZXX7n7M4vPsG1zuUkpNwmSLnuK1SUhMtYPISw82DqIetljEMDbocChwMHik285facAULgH8p6IPUxCHHyCohAbSZ3aBSAqUTa~rOVODtm0UiZIrvHeJBWcN234t-dRj97Z3cGyTX-nRjYvadRwMhH0ShT4T~fvVRzKTw__"

  return (
    <Layout>

      <div className="relative sm:h-[490px] h-[500px] w-full bg-cover bg-center pt-[50px] flex flex-col sm:flex-row">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] brightness-50"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        <div className='z-10 relative ml-[100px] sm:ml-[50px] sm:text-left sm:mr-0 mr-[50px]'>
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            SAVOR THE
          </p>
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            FLAVORS OF
          </p>
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            CAFES'S
          </p>
          <p className="font-cambay text-[17px] text-[#FFFFFF] sm:text-[20px] xs:text-[18px]">
            Explore the best cafe with delicious taste, high quality
          </p>
          <p className="font-cambay text-[17px] text-[#FFFFFF] sm:text-[20px] xs:text-[18px]">
            & amazing culinary........
          </p>

          <div className='w-full sm:w-[500px] mt-[40px] sm:flex justify-center sm:justify-start xs:flex-col'>
            <Button className='text-white bg-[#619BA7] rounded-[7px] font-cambay h-[40px] sm:w-[180px] w-[150px] mr-5 mb-5 sm:mb-0'>
              Cafe Ranking
            </Button>

            <div className='relative w-full '>
              <input
                type='text'
                className='bg-white rounded-[7px] h-[40px] font-cambay w-full pl-10 pr-4 focus:border-none focus:outline-none'
                placeholder="Search Cafes at Your Location....."
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
