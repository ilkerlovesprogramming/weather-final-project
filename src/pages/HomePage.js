import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <>
      <div className="w-full max-w-[1280px] h-auto bg-white flex flex-col items-center mx-auto">
        <div className="self-stretch h-[800px] bg-white flex-col justify-start items-start flex">
          <div className="self-stretch h-[800px] flex-col justify-start items-start flex">
            <Header />
            <div className="self-stretch grow shrink basis-0 px-40 py-5 justify-center items-start inline-flex">
              <div className="grow shrink basis-0 h-[543px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-4 justify-between items-start inline-flex">
                  <div className="w-72 flex-col justify-start items-start inline-flex">
                    <div className="w-[509px] text-[#111616] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-10">
                      What is CPAN144 Weather App?
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[88px] px-4 pt-1 pb-3 flex-col justify-start items-start flex">
                  <div className="self-stretch text-[#111616] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                    This is a weather app that helps people plan their day. We
                    provide daily forecasts and alerts for precipitation, wind,
                    and temperature. We also offer a variety of premium
                    features, such as radar maps, hurricane tracking, and severe
                    weather notifications. Our goal is to help you stay safe and
                    comfortable in any weather condition.
                  </div>
                </div>
                <div className="self-stretch h-[60px] px-4 pt-5 pb-3 flex-col justify-start items-start flex">
                  <div className="self-stretch text-[#111616] text-[22px] font-bold font-['Plus Jakarta Sans'] leading-7">
                    Why use this app?
                  </div>
                </div>
                <div className="self-stretch p-4 flex gap-4 overflow-x-auto">
                  <div className="w-[301px] p-4 bg-white rounded-lg border border-[#dbe2e5] flex-col justify-start items-start gap-3 flex">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-cloud-sun text-[#111616] text-xl" />
                      <div className="text-[#111616] text-base font-bold font-['Plus Jakarta Sans'] leading-tight">
                        Avoid getting caught in the rain
                      </div>
                    </div>
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
                      Receive alerts when there's a high chance of precipitation
                    </div>
                  </div>

                  <div className="w-[301px] p-4 bg-white rounded-lg border border-[#dbe2e5] flex-col justify-start items-start gap-3 flex">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-thermometer-half text-[#111616] text-xl" />
                      <div className="text-[#111616] text-base font-bold font-['Plus Jakarta Sans'] leading-tight">
                        Dress appropriately for the temperature
                      </div>
                    </div>
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
                      Know if it will be hot or cold so you can prepare
                      accordingly
                    </div>
                  </div>

                  <div className="w-[301px] p-4 bg-white rounded-lg border border-[#dbe2e5] flex-col justify-start items-start gap-3 flex">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-wind text-[#111616] text-xl" />
                      <div className="text-[#111616] text-base font-bold font-['Plus Jakarta Sans'] leading-tight">
                        Plan outdoor activities around the wind
                      </div>
                    </div>
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
                      Find out if it will be windy so you can plan outdoor
                      events safely
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-3 justify-center items-start inline-flex">
                  <div className="px-4 bg-[#33b2e5] rounded-[20px] justify-center items-center flex">
                    <div className="flex-col justify-start items-center inline-flex">
                      <Link to="/dashboard">
                        <div className="self-stretch text-center text-white text-sm font-bold font-['Plus Jakarta Sans'] leading-[21px] py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
                          Let’s Dive Into App
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
