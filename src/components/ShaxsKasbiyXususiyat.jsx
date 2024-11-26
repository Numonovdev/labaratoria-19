import React from "react";
import grf2 from "../images/grf2.png";
const ShaxsKasbiyXususiyat = () => {
  const result1 = 90;
  const result2 = 95;
  const result3 = 75;
  const result4 = 86;
  const result5 = 95;
  const result6 = 75;
  const result7 = 86;
  const result8 = 86;

  return (
    <section className="py-10">
      <div className="container flex flex-col gap-5">
        <div className="flex items-center gap-2 w-full">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl md:text-[36px] font-semibold">
            Шахсий ва касбий хусусиятлар
          </h1>
          <div className="h-1 flex-1 bg-[#DEE2E6]"></div>
        </div>

        <div className="flex items-center justify-between gap-7">
          <div className="flex w-2/5 flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Максадга интилувчанлик</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result1}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result1}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Эмоционал интеллект</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result2}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result2}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Креативлик</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result3}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result3}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Ходимларга йуналганлик</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result4}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result4}%</p>
            </div>
          </div>
          <div className="w-1/5">
            <img src={grf2} loading="lazy" alt="" />
          </div>
          <div className="flex w-2/5 flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Топширикларга йуналганлик</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result5}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result5}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Фаол ижтимоий муносабатлар</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result6}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result6}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Уз устида ишлаш</p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result7}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result7}%</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-left flex-1 flex flex-col gap-2">
                <p className="text-base">Муаммоли вазиятга йуналганлик </p>

                <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
                  <div
                    className="bg-[#0956AF] h-full flex items-center justify-center"
                    style={{ width: `${result8}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium">{result8}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShaxsKasbiyXususiyat;
