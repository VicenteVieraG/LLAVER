import React from 'react'
import Icono from "../img/ICONO.png"

const Logo = ({roundedCenter, roudedCorner, full}) => {
  return (
    //Revisamos que opcion se selecciona y en base a eso se reenderiza segun lo
    //especificado
    <div class="flow-root"> 
        {roundedCenter ? (
            <div class="bg-[#BF5DEE] w-1/2 h-28 mx-auto rounded-b-3xl flex justify-start xtraSm:justify-center">
                <div class="flex-none w-24">
                {/*Logo Icono*/}
                    <img
                        class="object-contain"
                        src={Icono}
                    />
                </div>
                {/*Barra del logo*/}
                <div class="h-24 w-0 my-auto border-4 border-black"></div>
                {/*Nombre de la empresa y slogan*/}  
                <div class="basis-full xtraSm:w-0 xtraSm:basis-0">
                    <p 
                        class="font-josefin text-white text-7xl text-center xtraSm:invisible tighterT:tracking-widest mw:tracking-wide_putin"
                        >LLAVER
                    </p>
                    <p 
                        class="font-josefin text-[#FFDE59] ml-3 xtraSm:invisible"
                        >Geriatric Solutions
                    </p>
                </div>
            </div>)
            : roudedCorner ? (
                <div class="bg-[#BF5DEE] w-96 h-20 float-right rounded-bl-3xl flex justify-start">
                    <div class="flex-none w-20">
                    {/*Logo Icono*/}
                        <img
                            class="object-contain"
                            src={Icono}
                        />
                    </div>
                    {/*Barra del logo*/}
                    <div class="h-16 w-0 my-auto border-4 border-black"></div>
                    {/*Nombre de la empresa y slogan*/}  
                    <div class="basis-full">
                        <p 
                            class="font-josefin text-white text-6xl text-center tracking-rtLogo"
                            >LLAVER
                        </p>
                        <p 
                            class="font-josefin text-[#FFDE59] ml-3 mb-5"
                            >Geriatric Solutions
                        </p>
                    </div>  

                </div>)
                : full ? (
                    <div class="bg-[#BF5DEE] h-32 flex flex-row justify-start fullLogoSmall:justify-center">
                        <div class="flex-none w-28">
                        {/*Logo Icono*/}
                        <img
                            class="object-contain"
                            src={Icono}
                        />
                    </div>
                    <div class="h-28 w-0 my-auto border-4 border-black "></div>
                    <div class="basis-full fullLogoSmall:w-0 fullLogoSmall:basis-0">
                        <p 
                            class="font-josefin text-white text-6xl tracking-widest mt-5 ml-5 fullLogoSmall:invisible tighterT:tracking-rtLogo"
                            >LLAVER
                        </p>
                        <p 
                            class="font-josefin text-[#FFDE59] ml-5 mb-5 fullLogoSmall:invisible"
                            >Geriatric Solutions
                        </p>
                    </div> 
                        
                    </div>)
                        : false}
    </div>
  )
}

export default Logo