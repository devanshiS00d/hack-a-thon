import svgPaths from "./svg-vo5yvelow0";
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p22a78d00} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip p-[10px] relative shrink-0 w-[40px]" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Slot01() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[48px]" data-name="Slot 01">
      <Content1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pea70b80} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Slot02() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0 w-[48px]" data-name="Slot 02">
      <Content2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p16f45de0} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Slot03() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0 w-[48px]" data-name="Slot 03">
      <Content3 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-[#f3edf7] box-border content-stretch flex gap-[4px] h-[64px] items-center justify-center left-[910px] px-[8px] py-[12px] rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[650px] w-[263px]" data-name="Toolbar">
      <Slot01 />
      <Slot02 />
      <Slot03 />
    </div>
  );
}

export default function MacBookAir16() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 16">
      <div className="absolute h-[91px] left-[59px] top-[153px] w-[87px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <GenericAvatar />
      <ToggleButtonOutline />
      <div className="absolute flex flex-col font-['Roboto:Medium',_sans-serif] font-medium h-[52px] justify-center leading-[20px] left-[179px] text-[14px] text-black top-[62px] tracking-[0.1px] translate-y-[-50%] w-[141px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`logo `}</p>
        <p>and side bar ?</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9999935030937195)+(var(--transform-inner-height)*0.0036009482573717833)))] items-center justify-center left-[0.19px] top-[743.92px] w-[calc(1px*((var(--transform-inner-height)*0.9999935030937195)+(var(--transform-inner-width)*0.0036009482573717833)))]" style={{ "--transform-inner-width": "124.65625", "--transform-inner-height": "1287.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[269.794deg]">
          <div className="bg-[#d9d9d9] h-[1287.15px] w-[124.664px]" />
        </div>
      </div>
      <div className="absolute left-[19px] size-[7px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[39px] size-[7px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[59px] size-[7px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, black)" id="Ellipse 1" r="3.5" />
        </svg>
      </div>
      <div className="absolute font-['Manrope:SemiBold',_sans-serif] font-semibold h-[68px] leading-[normal] left-[164px] text-[24px] text-black top-[165px] tracking-[0.1px] w-[371px]">
        <p className="mb-0">Hello !</p>
        <p>What can I help you with today</p>
      </div>
      <p className="absolute font-['Manrope:Bold',_sans-serif] font-bold h-[16px] leading-[normal] left-[159px] text-[#726c6c] text-[13px] top-[137px] tracking-[0.1px] w-[83px]">iki</p>
      <p className="absolute font-['Manrope:Bold',_sans-serif] font-bold h-[16px] leading-[normal] left-[1098px] text-[#726c6c] text-[13px] top-[298px] tracking-[0.1px] w-[33px]">{`user `}</p>
      <Toolbar />
      <div className="absolute font-['Manrope:SemiBold',_sans-serif] font-semibold h-[170px] leading-[normal] left-[647px] text-[24px] text-black top-[331px] tracking-[0.1px] w-[510px]">
        <p className="mb-0">{`I'm interested in product management. But `}</p>
        <p>I have never had any experience in Product Management :(</p>
      </div>
    </div>
  );
}