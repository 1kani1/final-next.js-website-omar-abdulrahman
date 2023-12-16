import { useCallback } from "react";
import { useRouter } from "next/router";

const MainScreen = () => {
  const router = useRouter();

  const onEllipseClick = useCallback(() => {
    router.push("/user-screen");
  }, [router]);

  const onRectangle9Click = useCallback(() => {
    router.push("/courses");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[3769px] overflow-hidden text-left text-5xl text-white font-inter">
      <div className="absolute top-[2097px] left-[-19px] bg-black w-[1719px] h-[613px]" />
      <div className="absolute top-[2672px] left-[0px] bg-black w-[1700px] h-[1097px]" />
      <div className="absolute top-[2758px] left-[-19px] bg-gray-100 w-[1719px] h-[443px]" />
      <div className="absolute top-[1388px] left-[-19px] bg-black w-[1719px] h-[709px]" />
      <div className="absolute top-[778px] left-[-19px] bg-gray-200 w-[1719px] h-[617px]" />
      <div className="absolute top-[-18px] left-[-19px] bg-black w-[1719px] h-[796px]" />
      <div className="absolute top-[0px] left-[0px] bg-gainsboro box-border w-[1280px] h-[138px] hidden border-[1px] border-solid border-black" />
      <div className="absolute top-[48px] left-[517px] rounded-26xl bg-black box-border w-[631px] h-10 border-[1px] border-solid border-orange" />
      <div className="absolute top-[48px] left-[517px] rounded-48xl bg-orange box-border w-[84px] h-10 border-[1px] border-solid border-orange" />
      <div
        className="absolute top-[38px] left-[1422px] rounded-[50%] bg-black box-border w-[61px] h-[61px] cursor-pointer border-[1px] border-solid border-orange"
        onClick={onEllipseClick}
      />
      <div className="absolute top-[118px] left-[7px] text-xl text-center inline-block w-[145px] h-5">
        SafarArabic
      </div>
      <div className="absolute top-[58px] left-[509px] text-xl text-black text-center inline-block w-[101px] h-5">
        Home
      </div>
      <div className="absolute top-[57px] left-[648px] text-xl text-center inline-block w-[101px] h-5">
        About Us
      </div>
      <div className="absolute top-[57px] left-[769px] text-xl text-center inline-block w-[101px] h-5">
        Offers
      </div>
      <div className="absolute top-[57px] left-[902px] text-xl text-center inline-block w-[101px] h-5">
        Support
      </div>
      <div className="absolute top-[57px] left-[1022px] text-xl text-center inline-block w-[101px] h-5">
        More
      </div>
      <b className="absolute top-[296px] left-[511px] text-45xl hidden text-black w-[719px] h-[316px]">
        <p className="m-0">
          Unlock the Beauty of Arabic: Your Journey to Fluent Expression Begins
          Here!
        </p>
      </b>
      <div className="absolute top-[3605.5px] left-[-5.5px] box-border w-[1291px] h-[11px] border-t-[11px] border-solid border-black" />
      <img
        className="absolute top-[55.2px] left-[-77px] w-[594.1px] h-[904.5px] object-cover"
        alt=""
        src="/download--22-removebgpreview-1-2@2x.png"
      />
      <div
        className="absolute top-[682px] left-[129px] rounded-2xl bg-gray-400 box-border w-[260px] h-[206px] cursor-pointer border-[1px] border-solid border-white"
        onClick={onRectangle9Click}
      />
      <div className="absolute top-[769px] left-[130px] font-semibold text-center inline-block w-[259px] h-[66px]">
        Free Courses
      </div>
      <div className="absolute top-[635px] left-[314px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
      <b className="absolute top-[992px] left-[347px] inline-block text-center w-[1006px] h-[113px]">
        SafarArabic is an official Arabic learning Site that aims to help the
        youth improve their Arabic skills and challenges those who already have
        experience. Our main goal is to make the site appealing for the modern
        youth as much as possible while at the same time providing good teaching
        skills.
      </b>
      <b className="absolute top-[1486px] left-[152px] inline-block w-[390px] h-[93px]">
        Sponsored by the most Iconic Arabic only brands.
      </b>
      <b className="absolute top-[1875px] left-[152px] inline-block w-[390px] h-[45px]">
        Got a code to redeem?
      </b>
      <div className="absolute top-[1158px] left-[477px] text-xl font-semibold text-lightsteelblue text-center inline-block w-[760px] h-[85px]">
        Whether you’re a beginner or a professional in speaking or writing
        arabic, SafarArabic offers and ensures that all users will gain the
        experience they need in order to improvise their arabic skills.
      </div>
      <div className="absolute top-[1484px] left-[854px] text-sm font-semibold text-gainsboro inline-block w-[520px] h-[93px]">
        How we monetize our website? Very simple actually! This website is
        actually sponsored by several well known Arab brands. Not to mention if
        you completed our challenges, you could win a gift code for any of the
        brands provided.
      </div>
      <div className="absolute top-[2190px] left-[152px] font-semibold inline-block w-[520px] h-[114px]">
        Hear what our customers say :)
      </div>
      <div className="absolute top-[1579px] left-[650px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1577px] left-[1129px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1574px] left-[1380px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1961px] left-[152px] w-[942px] h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-82xl bg-black box-border w-[792px] h-[71px] border-[1px] border-solid border-white" />
        <div className="absolute top-[0px] left-[812px] rounded-82xl bg-orange box-border w-[130px] h-[71px] border-[1px] border-solid border-orange" />
        <div className="absolute top-[21px] left-[32px] inline-block w-[130px] h-[29px]">
          Code
        </div>
        <div className="absolute top-[21px] left-[830px] text-black text-center inline-block w-[94px] h-[29px]">
          Apply
        </div>
      </div>
      <div className="absolute top-[2822px] left-[263px] bg-orange box-border w-[1175px] h-[316px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2899px] left-[575px] text-xs font-semibold text-black text-center inline-block w-[520px] h-[37px]">
        Join now our program and gain an unforgettable journey in improvising
        and adapting to arabic.
      </div>
      <div className="absolute top-[2854px] left-[575px] font-semibold text-black text-center inline-block w-[520px] h-10">
        What are you waiting for?
      </div>
      <div className="absolute top-[2969px] left-[364px] rounded-82xl bg-white box-border w-[792px] h-[71px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2969px] left-[1176px] rounded-82xl bg-black box-border w-[130px] h-[71px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2990px] left-[396px] text-black inline-block w-[130px] h-[29px]">
        Email
      </div>
      <div className="absolute top-[3453px] left-[130px] inline-block w-[130px] h-[29px]">
        Company
      </div>
      <div className="absolute top-[3529px] left-[130px] text-mini inline-block w-[130px] h-[29px]">
        About us
      </div>
      <div className="absolute top-[3524px] left-[666px] text-mini inline-block w-[130px] h-[29px]">
        Offers
      </div>
      <div className="absolute top-[3525px] left-[1185px] text-mini inline-block w-[130px] h-[29px]">
        Instagram
      </div>
      <div className="absolute top-[3574px] left-[1185px] text-mini inline-block w-[130px] h-[29px]">
        Facebook
      </div>
      <div className="absolute top-[3574px] left-[666px] text-mini inline-block w-[130px] h-[29px]">
        Personality Test
      </div>
      <div className="absolute top-[3578px] left-[130px] text-mini inline-block w-[130px] h-[29px]">
        Support
      </div>
      <div className="absolute top-[3453px] left-[671px] inline-block w-[130px] h-[29px]">
        Services
      </div>
      <div className="absolute top-[3453px] left-[1185px] inline-block w-[130px] h-[29px]">
        Socials
      </div>
      <div className="absolute top-[2990px] left-[1194px] text-center inline-block w-[94px] h-[29px]">
        Apply
      </div>
      <div className="absolute top-[632px] left-[714px] w-[297px] h-[251px] text-center">
        <div className="absolute top-[45px] left-[0px] rounded-2xl bg-gray-400 box-border w-[260px] h-[206px] border-[1px] border-solid border-white" />
        <div className="absolute top-[132px] left-[21px] font-semibold inline-block w-[219px] h-[57px]">
          Visually Attractive UI
        </div>
        <div className="absolute top-[0px] left-[184px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
        <img
          className="absolute top-[16px] left-[201px] w-[78px] h-[78px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
      </div>
      <div className="absolute top-[630px] left-[1231px] w-[317px] h-[253px] text-center">
        <div className="absolute top-[47px] left-[0px] rounded-2xl bg-gray-400 box-border w-[260px] h-[206px] border-[1px] border-solid border-white" />
        <div className="absolute top-[134px] left-[0px] font-semibold inline-block w-[260px] h-[84px]">
          Social Activity / Status
        </div>
        <div className="absolute top-[0px] left-[204px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
        <img
          className="absolute top-[17px] left-[221px] w-[79px] h-[79px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
      </div>
      <img
        className="absolute top-[653px] left-[331px] w-[78px] h-[78px] overflow-hidden object-cover"
        alt=""
        src="/frame@2x.png"
      />
      <div className="absolute top-[1579px] left-[172px] w-[150px] h-[150px]">
        <div className="absolute top-[0px] left-[0px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
        <img
          className="absolute top-[25px] left-[25px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/2removebgpreview-1@2x.png"
        />
      </div>
      <div className="absolute top-[1579px] left-[430px] w-[150px] h-[150px]">
        <div className="absolute top-[0px] left-[0px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
        <img
          className="absolute top-[4px] left-[8px] w-[134px] h-[134px] object-cover"
          alt=""
          src="/download--3-removebgpreview-1@2x.png"
        />
      </div>
      <img
        className="absolute h-[3.45%] w-[8.29%] top-[42.05%] right-[53.18%] bottom-[54.5%] left-[38.53%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/download--1-removebgpreview-1@2x.png"
      />
      <div className="absolute top-[1577px] left-[850px] w-[250px] h-[150px]">
        <div className="absolute top-[0px] left-[50px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
        <img
          className="absolute top-[19px] left-[0px] w-[250px] h-28 object-cover"
          alt=""
          src="/screenshot--211-removebgpreview-1-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[1577px] left-[1128px] w-[153px] h-[153px] object-cover"
        alt=""
        src="/download--19-removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[1555px] left-[1361px] w-[188px] h-[188px] object-cover"
        alt=""
        src="/61457e92f8cc77657dfa2b46-artboard-16-copy-1@2x.png"
      />
      <div className="absolute top-[2353px] left-[152px] rounded bg-gray-300 box-border w-[377px] h-[173px] flex flex-col items-start justify-center p-6 text-base font-abhaya-libre-semibold border-[1px] border-solid border-lightsteelblue">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-381xl bg-[url('/frame@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[20px]">{`Patrick `}</div>
              </div>
              <div className="self-stretch relative leading-[20px] text-gray-500">
                Student
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-sm leading-[20px]">
            Learning arabic here is fun which is something I never expected for
            someone like me to admit. Learning Courses has been entertaining and
            making friends here helped me find my own community of people I
            could relate to!
          </div>
        </div>
      </div>
      <div className="absolute top-[2348px] left-[655px] rounded bg-gray-300 box-border w-[377px] h-[173px] flex flex-col items-start justify-center p-6 text-base font-abhaya-libre-semibold border-[1px] border-solid border-lightsteelblue">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-381xl bg-[url('/frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[20px]">{`Yahia `}</div>
              </div>
              <div className="self-stretch relative leading-[20px] text-gray-500">
                Student
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[20px]">
            Thanks to tests and lectures I took, I became able to speak arabic
            fluently, that doesn’t mean I’m done considering I’m aiming to
            perfect my arabic speaking skills, but I did find myself spendin
            more time here than the usual social media apps or platforms.
          </div>
        </div>
      </div>
      <div className="absolute top-[2348px] left-[1171px] rounded bg-gray-300 box-border w-[377px] h-[173px] flex flex-col items-start justify-center p-6 text-base font-abhaya-libre-semibold border-[1px] border-solid border-lightsteelblue">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-381xl bg-[url('/frame2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[20px]">{`Ali `}</div>
              </div>
              <div className="self-stretch relative leading-[20px] text-gray-500">
                Student
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-mini leading-[20px]">
            Always wanted to test how much do I know and how fluent I am in
            arabic, I got humbled pretty quickly but I do aim to perfectly
            achieve my skills!
          </div>
        </div>
      </div>
      <div className="absolute top-[310px] left-[517px] text-45xl leading-[80px] font-abhaya-libre-semibold inline-block w-[724px] mix-blend-normal">{`Unlock the beauty of Arabic: Your journey to fluent expression begins here! `}</div>
      <img
        className="absolute top-[51.1px] left-[-352.1px] w-[719px] h-[719.2px] object-cover"
        alt=""
        src="/download--23-removebgpreview-1-1@2x.png"
      />
      <img
        className="absolute top-[-120px] left-[1269px] w-[686.2px] h-[1044.8px] object-cover"
        alt=""
        src="/download--22-removebgpreview-1-1@2x.png"
      />
      <img
        className="absolute top-[28px] left-[37px] w-[84px] h-[120px] object-cover"
        alt=""
        src="/safarremovebgpreview-1@2x.png"
      />
    </div>
  );
};

export default MainScreen;
