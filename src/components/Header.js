import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div className="self-stretch px-10 py-3 border-b border-[#e5e8ea] justify-between items-center inline-flex">
      <div className="justify-start items-center gap-4 flex">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="w-4 h-4 relative">
            <div className="w-[13px] h-[13px] left-0 top-0 absolute" />
          </div>
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-[#111616] text-lg font-bold font-['Plus Jakarta Sans'] leading-[23px]">
            CPAN144 Weather App
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        {location.pathname === '/' ? (
          <div className="text-green-500 text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
            Homepage
          </div>
        ) : (
          <Link to="/">
            <div className="text-[#111616] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] hover:text-[#454545d2]">
              Homepage
            </div>
          </Link>
        )}
        {location.pathname === '/about' ? (
          <div className="text-green-500 text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
            About
          </div>
        ) : (
          <Link to="/about">
            <div className="text-[#111616] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] hover:text-[#454545d2]">
              About
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
