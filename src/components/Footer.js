import React from "react";

export default function Footer() {
    return (
        <div className="self-stretch justify-center items-start inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch grow shrink basis-0 px-5 py-10 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-40 flex-col justify-start items-center inline-flex">
                      <div className="self-stretch text-center text-[#637c87] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Terms of Service
                      </div>
                    </div>
                    <div className="w-40 flex-col justify-start items-center inline-flex">
                      <div className="self-stretch text-center text-[#637c87] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Privacy Policy
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-6 flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-[#637c87] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                      WeatherApp @ 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}