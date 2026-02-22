import svgPaths from "./svg-4hnpfs7fhb";
import imgSlideItem4 from "figma:asset/c6e23dedf7395ed8e4fe15c2e6771eeb39892ea4.png";
import imgSlideItem5 from "figma:asset/0cfb18d36ac0940a4cc72c6ba6b1a5bf721f893a.png";
import imgSlideItem1 from "figma:asset/dcc55873d01a51d48044cf7a5283563f4c513428.png";
import imgBackground from "figma:asset/99564e2dc18d4793b30a7fa270cbba8cfbb17db1.png";
import { imgSlideList } from "./svg-ihec5";

function SlideList() {
  return (
    <div className="absolute inset-[0_40px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.52%_-14%] mask-size-[117.05%_138.25%]" data-name="Slide List" style={{ maskImage: `url('${imgSlideList}')` }}>
      <button className="absolute bg-white block cursor-pointer inset-[80px_740px_80px_0] overflow-clip rounded-[40px]" data-name="Slide Item — 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideItem4} />
      </button>
      <button className="absolute bg-white block cursor-pointer inset-[80px_0_80px_740px] overflow-clip rounded-[40px]" data-name="Slide Item — 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideItem4} />
      </button>
      <button className="absolute bg-white block cursor-pointer inset-[40px_516px_40px_64px] overflow-clip rounded-[40px]" data-name="Slide Item — 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideItem5} />
      </button>
      <button className="absolute bg-white block cursor-pointer inset-[40px_64px_40px_516px] overflow-clip rounded-[40px]" data-name="Slide Item — 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideItem5} />
      </button>
      <div className="absolute bg-white inset-[0_220px_0_200px] overflow-clip rounded-[40px]" data-name="Slide Item — 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideItem1} />
      </div>
    </div>
  );
}

function SlidesBox() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Slides Box">
      <SlideList />
    </div>
  );
}

function ClickArea() {
  return (
    <button className="content-stretch cursor-pointer flex items-start p-[8px] relative shrink-0" data-name="Click Area">
      <div className="relative shrink-0 size-[24px]" data-name="Arrow Left">
        <div className="absolute inset-[14.33%_12.5%_14.33%_9.91%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 17.1213">
            <path clipRule="evenodd" d={svgPaths.p1257d050} fill="var(--fill-0, #999999)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function SlideIndicator() {
  return (
    <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0" data-name="Slide indicator">
      <div className="relative shrink-0 size-[16px]" data-name="Dot indictaor — 1">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #7B61FF)" id="Dot indictaor" r="8" />
        </svg>
      </div>
      <button className="block cursor-pointer opacity-50 relative shrink-0 size-[12px]" data-name="Dot indictaor — 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #999999)" id="Dot indictaor" r="6" />
        </svg>
      </button>
      <button className="block cursor-pointer opacity-50 relative shrink-0 size-[12px]" data-name="Dot indictaor — 3">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #999999)" id="Dot indictaor" r="6" />
        </svg>
      </button>
      <button className="block cursor-pointer opacity-50 relative shrink-0 size-[12px]" data-name="Dot indictaor — 4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #999999)" id="Dot indictaor" r="6" />
        </svg>
      </button>
      <button className="block cursor-pointer opacity-50 relative shrink-0 size-[12px]" data-name="Dot indictaor — 5">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #999999)" id="Dot indictaor" r="6" />
        </svg>
      </button>
    </div>
  );
}

function ClickArea1() {
  return (
    <button className="content-stretch cursor-pointer flex items-start p-[8px] relative shrink-0" data-name="Click Area">
      <div className="relative shrink-0 size-[24px]" data-name="Arrow Right">
        <div className="absolute inset-[12.98%_12.18%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1514 17.772">
            <path clipRule="evenodd" d={svgPaths.p1d9c4800} fill="var(--fill-0, #999999)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function SlidesNavigation() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative shrink-0" data-name="Slides navigation">
      <ClickArea />
      <SlideIndicator />
      <ClickArea1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[28.8px] left-[15px] right-[15px] top-[40px]" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold h-[29px] justify-center leading-[0] left-0 text-[#343a40] text-[24px] top-[13.5px] uppercase w-[241.21px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">Upcoming Events</p>
      </div>
      <div className="absolute bg-[#d2d2d2] h-[3px] left-[70%] right-0 top-[15px]" data-name="Background" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[110.39px] leading-[0] left-[15px] overflow-clip top-[92.8px] w-[350px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Medium',sans-serif] font-medium h-[28.8px] justify-center left-0 text-[#212529] text-[24px] top-[14.4px] w-[151.628px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">Coming Soon</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center left-0 text-[14px] text-black top-[63.7px] w-[111px]">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center left-0 text-[14px] text-black top-[101.7px] w-[111px]">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-[585px_131px_-735.91px_929px]" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#eee] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[227.65%]" src={imgBackground} />
        </div>
      </div>
      <Heading />
      <Container />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[14px] text-black top-[235.5px] w-[111px]">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[14px] text-black top-[276.5px] w-[111px]">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
    </div>
  );
}

function Image() {
  return <div className="h-[46px] rounded-[3px] w-[22px]" data-name="Image" />;
}

function Image1() {
  return <div className="h-[46px] rounded-[3px] shrink-0 w-[22px]" data-name="Image" />;
}

function Heading3Link() {
  return (
    <div className="font-['Libre_Franklin:Regular',sans-serif] font-normal h-[46.19px] relative shrink-0 w-[342.08px]" data-name="Heading 3 → Link">
      <div className="-translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-0 text-[#394f87] text-[18px] top-[10.5px] w-[310.991px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">Cricket, Politics and a Diplomatic Rift:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-0 text-[#394f87] text-[18px] top-[35.68px] w-[342.413px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">Bangladesh’s T20 World Cup Withdrawal</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#6c757d] text-[13px] top-[65px] w-[427.206px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">After Bangladesh refused to play its upcoming…</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[16px] justify-center relative shrink-0 text-[#212529] text-[13px] w-full">
        <p className="leading-[19.5px] whitespace-pre-wrap">Ronojoy Sen</p>
      </div>
      <div className="flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[31.81px] items-start leading-[0] relative shrink-0">
      <Heading3Link />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[35px] items-center relative shrink-0">
      <Image1 />
      <Frame2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#c9a961] items-center justify-center px-[20px] py-[6px] relative rounded-[16px] shrink-0 to-[#e4d2a7]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(201,169,97,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1a2332] text-[14px]">View All</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[66px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#343a40] text-[24px] uppercase w-[min-content]">
        <p className="leading-[28.8px] whitespace-pre-wrap">ISAS Papers</p>
      </div>
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(33,37,41,0.12)] border-solid inset-0 pointer-events-none shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),2px_7px_5px_0px_rgba(0,0,0,0.18)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[115.92px] items-center pb-[33.75px] pt-[36px] px-[12px] relative w-full">
          <div className="absolute flex h-[46px] items-center justify-center left-0 top-[64px] w-[22px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Image />
            </div>
          </div>
          <Frame3 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b col-2 content-stretch flex from-[#c9a961] items-center justify-center justify-self-start px-[20px] py-[6px] relative rounded-[16px] row-4 self-start shrink-0 to-[#e4d2a7]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(201,169,97,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1a2332] text-[14px]">View All</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-gradient-to-r from-[#1a2332] gap-x-[20px] gap-y-[10px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] inline-grid pl-[57px] pr-[30px] py-[30px] relative rounded-[8px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),2px_7px_5px_0px_rgba(0,0,0,0.18)] shrink-0 to-[#4f6a98]">
      <div className="col-1 flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] relative row-1 shrink-0 text-[18px] text-white w-[310.991px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">Cricket, Politics and a Diplomatic Rift:</p>
      </div>
      <div className="col-1 flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] relative row-2 shrink-0 text-[18px] text-white w-[342.413px]">
        <p className="leading-[21.6px] whitespace-pre-wrap">Bangladesh’s T20 World Cup Withdrawal</p>
      </div>
      <div className="col-1 flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative row-3 shrink-0 text-[13px] text-[rgba(248,249,250,0.7)] w-[427.206px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">{`After Bangladesh refused to play its  upcoming…`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative row-4 self-start shrink-0 text-[#e4d2a7] text-[14px] w-[111px]">
        <p className="leading-[16.8px] whitespace-pre-wrap">30 January 2026</p>
      </div>
      <div className="col-2 flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold h-[29px] justify-center leading-[0] relative row-1 shrink-0 text-[24px] text-white uppercase w-[205px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">ISAS Papers</p>
      </div>
      <Button1 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#212529] relative size-full to-[#f1f3f4] to-[52.795%] via-[#1a2332] via-[29.38%]" data-name="Hero">
      <div className="absolute flex h-[279px] items-center justify-center left-[-469px] top-[1063px] w-[386px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-35.86deg]">
          <div className="h-0 relative w-[476.274px]">
            <div className="absolute inset-[-18.41px_-0.52%_-18.41px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478.774 36.8198">
                <path d={svgPaths.p19411d00} fill="var(--stroke-0, #C30000)" id="Arrow 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[560px] items-center left-[6px] px-[64px] py-[40px] top-0 w-[1428px]" data-name="Carousel">
        <SlidesBox />
        <SlidesNavigation />
      </div>
      <Background />
      <div className="absolute content-stretch flex flex-col gap-[42px] items-end justify-center left-[81px] top-[585px] w-[762px]">
        <Frame />
        <Frame4 />
      </div>
    </div>
  );
}