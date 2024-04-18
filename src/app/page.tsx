import Image from "next/image";
import logo from '@/assets/logo.svg'
import hammer from '@/assets/hammer.svg'
import twitter from '@/assets/twitter.svg'
import instagram from '@/assets/instagram.svg'
import tiktok from '@/assets/tiktok.svg'
import telegram from '@/assets/telegram.svg'
import whatsapp from '@/assets/whatsapp.svg'

export default function Home() {
  return (
    <header className="bg-[url('https://r2.easyimg.io/hkcax6rj7/pattern.png')] w-screen h-screen">
      <main className="w-screen h-screen bg-gradient-to-b from-[#FF89AC] via-[#ff89accb] to-[#ff89ac00]">

        {/* LOGO */}
        <div className="flex justify-center pt-10">
          <Image
              alt="Logo do Sáficas.com.br"
              src={logo}
              width={400}
          />
        </div>
        
        {/* construção */}
        <div className="flex justify-center pt-10">
          <div className="bg-[#EDEDED] py-1 px-6 border-2 border-stone-900 rounded-3xl">
            <p className="text-[#181818] text-4xl font-glass text-center p-1">nosso site está<br/>em construção!</p>
          </div>
          <style>
            {`
              @keyframes hammerAnimation {
                0% {
                  transform: rotate(0deg);
                }
                20% {
                  transform: rotate(10deg);
                }
                50% {
                  transform: rotate(0deg);
                }
                80% {
                  transform: rotate(-10deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            
              .hammer-svg {
                animation: hammerAnimation 1s linear infinite;
                transform-origin: bottom center;
            `}
          </style>
          <Image
            alt="Martelo"
            src={hammer}
            width={100}
            className="hammer-svg absolute ml-56 mt-16"
          />
        </div> 

        {/* redes */}
        <div className="flex justify-center pt-20">
          <div className="bg-[#EDEDED] xl:py-1 xl:px-6 mx-2 border-2 border-stone-900 rounded-3xl">
            <p className="text-[#181818] text-4xl p-1 font-glass text-center">enquanto isso, nos acompanhe nas redes sociais</p>
          </div>
        </div>
        <div className="flex justify-center pt-5 gap-2">
          <a href="https://twitter.com/saficascombr" target="_blank" className="bg-[#EDEDED] rounded-full h-50 w-50 text-black p-3 border-2 border-stone-900 place-content-center">
            <Image
              alt="Twitter"
              src={twitter}
              width={50}
              height={50}
              className="p-1"
            />
          </a>
          <a href="https://instagram.com/saficas.com.br" target="_blank" className="bg-[#EDEDED] rounded-full h-50 w-50 text-black p-3 border-2 border-stone-900 place-content-center">
            <Image
              alt="Instagram"
              src={instagram}
              width={50}
              height={50}
              className="p-1"
            />
          </a>
          <a href="https://www.tiktok.com/@saficas.com.br?_t=8ldfvWX9fK1&_r=1" target="_blank" className="bg-[#EDEDED] rounded-full h-50 w-50 text-black p-3 border-2 border-stone-900 place-content-center">
            <Image
              alt="Tiktok"
              src={tiktok}
              width={50}
              height={50}
              className="p-1"
            />
          </a>
          <a href="https://t.me/saficascombr" target="_blank" className="bg-[#EDEDED] rounded-full h-50 w-50 text-black p-3 border-2 border-stone-900 place-content-center">
            <Image
              alt="Telegram"
              src={telegram}
              width={50}
              height={50}
              className="p-1"
            />
          </a>
          <a href="https://whatsapp.com/channel/0029VaWM1RWDZ4LcdMrrM23Z" target="_blank" className="bg-[#EDEDED] rounded-full h-50 w-50 text-black p-3 border-2 border-stone-900 place-content-center">
            <Image
              alt="Whatsapp"
              src={whatsapp}
              width={50}
              height={50}
              className="p-1"
            />
          </a>
        </div>
        

      </main>
    </header>
  );
}
