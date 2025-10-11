import svgPaths from "./svg-z7j6dv0xw";
import imgRectangle from "figma:asset/0523a33c88a0694c15d8a7dd2964919dd4481b7d.png";

function GenericAvatar() {
  return (
    <div className="absolute left-[1203px] size-[40px] top-[48px]" data-name="Generic avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Generic avatar">
          <rect fill="var(--fill-0, #EADDFF)" height="40" rx="20" width="40" />
          <g id="Avatar Placeholder">
            <path clipRule="evenodd" d={svgPaths.p16400780} fill="var(--fill-0, #4F378A)" fillRule="evenodd" />
            <path d={svgPaths.pfd6ae80} fill="var(--fill-0, #4F378A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

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
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[1089px] top-[48px]" data-name="Toggle button - outline">
      <Content />
    </div>
  );
}

export default function MacBookAir13() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 13">
      <div className="absolute h-[516px] left-[449px] top-[126px] w-[491px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <GenericAvatar />
      <ToggleButtonOutline />
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium h-[52px] justify-center leading-[20px] left-[179px] text-[14px] text-black top-[62px] tracking-[0.1px] translate-y-[-50%] w-[141px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`logo `}</p>
        <p>and side bar ?</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:SemiBold',_sans-serif] font-semibold h-[34px] justify-center leading-[0] left-[669px] text-[#524444] text-[15px] top-[659px] tracking-[0.1px] translate-y-[-50%] w-[77px]">
        <p className="leading-[20px]">{`thinking `}</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[832px] left-0 top-0 w-[145px]" />
      <div className="absolute left-[11px] size-[7px] top-[9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[21px] size-[7px] top-[9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[31px] size-[7px] top-[9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
    </div>
  );
}