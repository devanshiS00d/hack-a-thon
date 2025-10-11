import imgRectangle from "figma:asset/0523a33c88a0694c15d8a7dd2964919dd4481b7d.png";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#49454f] text-[14px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`sign out `}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cac4d0] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ToggleButtonOutline() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[1081px] top-[36px]" data-name="Toggle button - outline">
      <Content />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[7px] left-[11px] top-[11px] w-[46px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 7">
        <g id="Frame 2">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
          <circle cx="23" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 2" r="3.5" />
          <circle cx="42.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 3" r="3.5" />
        </g>
      </svg>
    </div>
  );
}

export default function MacBookAir13() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 13">
      <div className="absolute h-[516px] left-[436px] top-[118px] w-[491px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <ToggleButtonOutline />
      <div className="absolute flex flex-col font-['Manrope:SemiBold',_sans-serif] font-semibold h-[34px] justify-center leading-[0] left-[643px] text-[#524444] text-[15px] top-[651px] tracking-[0.1px] translate-y-[-50%] w-[77px]">
        <p className="leading-[20px]">{`thinking `}</p>
      </div>
      <div className="absolute bg-white h-[832px] left-0 top-0 w-[157px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
      <Frame2 />
      <div className="absolute h-0 left-[79px] top-px w-[5px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[78px] top-[832px] w-[6px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <line id="Line 5" stroke="var(--stroke-0, #0A0A0A)" x2="6" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',_sans-serif] font-medium h-[40px] justify-center leading-[0] left-[596px] text-[32px] text-black top-[64px] tracking-[0.1px] translate-y-[-50%] w-[197px]">
        <p className="leading-[20px]">{`ikiguider `}</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',_sans-serif] font-medium h-[27px] justify-center leading-[0] left-[649px] text-[14px] text-black text-center top-[112.5px] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%] w-[466px]">
        <p className="leading-[20px]">Find work that fuels your soul</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium h-[28px] justify-center leading-[0] left-[23px] text-[14px] text-black top-[164px] tracking-[0.1px] translate-y-[-50%] w-[118px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`chat `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-[18px] text-[14px] text-black text-nowrap top-[100px] tracking-[0.1px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">home</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-[19px] text-[14px] text-black text-nowrap top-[216px] tracking-[0.1px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`roadmap `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-[21px] text-[14px] text-black text-nowrap top-[276px] tracking-[0.1px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`explore `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[20px] left-[27px] text-[14px] text-black text-nowrap top-[730px] tracking-[0.1px] translate-y-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`settings `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>mission</p>
      </div>
    </div>
  );
}