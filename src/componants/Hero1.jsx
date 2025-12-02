import "./Hero1.css";

export default function Hero1() {
  return (
    <div className="bg-[#FFFFFF] big-1 relative overflow-hidden">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-full max-w-6xl px-6 lg:px-8">
          <div className="flex items-center h-full">
            <div className="main-title max-w-2xl space-y-6">
              <p className="inline-flex items-center justify-center bg-[#f2f3f5] text-black text-[12px] px-4 py-1 rounded-full font-semibold tracking-[0.2em]  shadow-sm">
                Hi, new friend!
              </p>

              <h1 className="text-[#171430] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                We do not cook,
                <br className="hidden md:block" />
                we create your emotions!
              </h1>

              <p className="text-[#6f6f87] text-[15px] max-w-md">
                Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
              </p>

              <div className="w-[340px] h-[52px] flex justify-between">
                <a
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-[#f5c332] px-6 py-3 rounded-full font-semibold text-[#171430] shadow-sm hover:brightness-95 transition"> 
                  <img className="w-[22px] h-[22px]" src="https://starbelly-react.vercel.app/img/ui/icons/menu.svg" alt="icon" />Our menu
                </a>
                <a
                  href="/menu"
                  className="inline-flex items-center gap-2  px-6 py-3  justify-between font-semibold text-[#171430] hover:brightness-95 transition"> 
                  <span className=" w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#eaeaea] hover:bg-[#f2f3f5] transition duration-300">
                    <img className="w-[22px] h-[22px]" src="https://starbelly-react.vercel.app/img/ui/icons/arrow.svg" alt="icon" />
                  </span>
                  About us
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
