import './App.css';
import Switcher from "./Switcher"
import Firstcard from './Components/Firstcard';
import './i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


//Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import CountertopsIcon from '@mui/icons-material/Countertops';
// import HotelIcon from '@mui/icons-material/Hotel';
// import WeekendIcon from '@mui/icons-material/Weekend';
// import CheckroomIcon from '@mui/icons-material/Checkroom';


//Pictures
import mebel from "./Pictures/LOGO.png"
import image1 from "./Pictures/image1.png"
import image2 from "./Pictures/image2.png"
import image3 from "./Pictures/image3.png"
import image4 from "./Pictures/image4.png"
import image5 from "./Pictures/image5.png"
import image6 from "./Pictures/image6.png"
import image7 from "./Pictures/image7.png"
import image8 from "./Pictures/image8.png"
import image9 from "./Pictures/image9.png"
import image10 from "./Pictures/image10.png"
import image11 from "./Pictures/image11.png"
import image12 from "./Pictures/image12.png"
import image13 from "./Pictures/image13.png"
import image14 from "./Pictures/image14.png"
import image15 from "./Pictures/image15.png"
import image16 from "./Pictures/image16.png"

function App() {

  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="App">
    <div className="container">
      
       <div className="gray-div bg-[#313131] w-[100%] h-[auto]">
        <div className="gray-navbar flex justify-evenly pt-[20px] pb-[10px] gap-[120px]">
          <div className="gray-left">
            <ul className='flex justify-center gap-[20px] text-lg text-[white]'>
              <li>{t("text1")}</li>
              <li>{t("text2")}</li>
              <li>{t("text3")}</li>
            </ul>
          </div>

          <div className="gray-right flex justify-center gap-[20px] text-lg">
            <div className="right-first text-[white] flex justify-center gap-[5px]">
              <p><LocalPhoneIcon/></p>
              <p>8 (964) 89 99 119</p>
            </div>

            <div className="right-first text-[white] flex justify-center gap-[5px]">
              <p><AirportShuttleIcon/></p>
              <p>{t("text4")}</p>
            </div>
            
          </div>

          <div className="gray-middle flex justify-center">
            <p><Switcher/></p>
          </div>

          <div className="gray-medium flex justify-center">
            <select value={lng} onChange={handleChange} className='w-[45px] h-[30px] rounded-xl' >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="tj">TJ</option>
            </select>
          </div>

        </div>

       </div>

        <div className="white flex justify-evenly pt-[20px] dark:bg-[#313131]">
          <div className="white-left pt-[10px]"><img src={mebel} alt="" /></div>
          <div className="white-middle flex justify-center gap-[10px] "><p className='text-[gray] pt-[8px] '><SearchIcon/></p><input className='w-[800px] h-[40px] dark:bg-[#313131]' type="text" placeholder={t("text5")}/></div>
          <div className="white-right flex justify-center gap-5 pt-[6px]">
            <p className='dark:text-[white]'><FavoriteBorderIcon/></p>
            <p className='dark:text-[white]' ><LockIcon/></p>
            <p className='dark:text-[white]' ><PersonOutlineIcon/></p>
          </div>
        </div>


         <div className="all dark:bg-[#313131]">
         <div className="LoftMebel pl-[150px] pt-[150px] ">
          <div className="mebel-text flex justify-start"><h1 className='text-[#3C3C3C] text-7xl font-medium w-[200px]'>{t("text6")}</h1></div>
          <div className="mebel-title flex justify-start"><p className='text-[#3C3C3C] text-xl pt-[10px]'>{t("text7")}</p></div>
          <div className="mebel-button flex justify-start pt-[20px]"><button className='text-[#3C3C3C] bg-[white] w-[180px] h-[40px]'>{t("text8")}</button></div>
        </div>
         </div>
        

        <div className="text flex justify-start pl-[67px] pt-[20px] dark:bg-[#313131]"><h1 className='text-[#3C3C3C] text-xl dark:text-[white]'>{t("text9")}</h1></div>
         

         <div className="Firstcard flex justify-center flex-wrap gap-[60px] pt-[50px] dark:bg-[#313131]">
          <Firstcard img={image1} text={t("text10")} title={t("text11")} mine="2 300₽"/>
          <Firstcard img={image2} text={t("text12")} title={t("text11")} mine="4 690₽"/>
          <Firstcard img={image3} text={t("text13")} title={t("text14")} mine="28 490₽"/>
          <Firstcard img={image4} text={t("text15")} title={t("text14")} mine="2 300₽"/>
          <Firstcard img={image5} text={t("text16")} title={t("text17")} mine="21 990₽"/>
          <Firstcard img={image6} text={t("text18")} title={t("text19")} mine="18 990₽"/>
          <Firstcard img={image7} text={t("text20")} title={t("text21")} mine="8 990₽"/>
          <Firstcard img={image8} text={t("text22")} title={t("text21")} mine="14 990₽"/>
          <Firstcard img={image9} text={t("text23")} title={t("text24")} mine="7 290₽"/>
          <Firstcard img={image10} text={t("text25")} title={t("text26")} mine="10 990₽"/>
          <Firstcard img={image11} text={t("text27")} title={t("text28")} mine="19 990₽"/>
          <Firstcard img={image12} text={t("text29")} title={t("text28")} mine="27 290₽"/>
          <Firstcard img={image13} text={t("text30")} title={t("text31")} mine="21 990₽"/>
          <Firstcard img={image14} text={t("text32")} title={t("text35")} mine="25 990₽"/>
          <Firstcard img={image15} text={t("text34")} title={t("text35")} mine="10 990₽"/>
          <Firstcard img={image16} text={t("text34")} title={t("text35")} mine="19 990₽"/>
          <Firstcard img={image5} text={t("text16")} title={t("text17")} mine="21 990₽"/>
          <Firstcard img={image6} text={t("text18")} title={t("text19")} mine="18 990₽"/>
          <Firstcard img={image7} text={t("text20")} title={t("text21")} mine="8 990₽"/>
          <Firstcard img={image8} text={t("text22")} title={t("text21")} mine="14 990₽"/>
          <Firstcard img={image9} text={t("text23")} title={t("text24")} mine="7 290₽"/>
          <Firstcard img={image10} text={t("text25")} title={t("text26")} mine="10 990₽"/>
          <Firstcard img={image11} text={t("text27")} title={t("text28")} mine="19 990₽"/>
          <Firstcard img={image12} text={t("text29")} title={t("text28")} mine="27 290₽"/>
          <Firstcard img={image13} text={t("text30")} title={t("text31")} mine="21 990₽"/>
          <Firstcard img={image14} text={t("text32")} title={t("text35")} mine="25 990₽"/>
          <Firstcard img={image15} text={t("text34")} title={t("text35")} mine="10 990₽"/>
          <Firstcard img={image16} text={t("text34")} title={t("text35")} mine="19 990₽"/>
         </div>

         <div className="gray-one dark:bg-[#313131] pt-[50px]"><div className="gary w-[100%] h-[1px] bg-[gray]"></div></div>

          <div className="footer dark:bg-[#313131]">
            <div className="new flex justify-between pl-[90px] pr-[90px] pt-[30px]">
              <div className="new-left flex justify-center"><h1 className='text-[black] font-medium text-lg dark:text-[white]'>{t("text36")}</h1></div>
              <div className="new-right flex justify-center"><h1 className='text-[black] font-bold text-4xl dark:text-[white]'>LM</h1></div>
            </div>
         
             <div className="finish flex justify-evenly gap-[480px] pt-[20px] pb-[20px]">
              <div className="finish-left flex justify-center flex-wrap gap-[50px]">
                <div className="finish-one dark:text-[white]">
                 <p>{t("text37")}</p>
                 <p>{t("text38")}</p>
                 <p>{t("text39")}</p>
                </div>


                <div className="finish-one dark:text-[white]">
                 <p>{t("text40")}</p>
                 <p>{t("text41")}</p>
                 <p>{t("text42")}</p>
                </div>



                <div className="finish-one dark:text-[white]">
                 <p>{t("text43")}</p>
                 <p>{t("text44")}</p>
                 <p>{t("text45")}</p>
                </div>


              </div>

              <div className="finish-right flex justify-center pt-[30px] ">
                <p className='w-[200px] dark:text-[white]'>{t("text46")}</p>
              </div>
             </div>



          </div>









    </div>
    </div>
  );
}

export default App;
