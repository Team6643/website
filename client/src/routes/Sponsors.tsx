
import baxterLogo from "../assets/baxter.svg";
import dpiLogo from "../assets/dpi.svg";
import educatorsLogo from "../assets/educators.svg";


const Sponsors = () => {
    return (
        <>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 px-5">
                <div class="flex flex-col items-center max-w-5xl text-center gap-4">
                <h1 class="text-4xl font-bold">Sponsors</h1>
                <p>
                    Our team is extremely grateful for the support of our sponsors. We are proud to be sponsored by the following people and organizations.
                </p>
                <p>
                    If you are interested in sponsoring our team, please contact us at <a class="text-[#4b3995] underline" href="mailto:contact@team6643.org">contact@team6643.org</a>.
                </p>
                <p>
                    Alternatively, you can donate to our team by visiting the <a class="text-[#4b3995] underline" href="https://racine.revtrak.net/donations/rusd-financial-donations/">Racine Unified School District financial donations page</a> and typing "Walden III High School Robotics" in the "Organization" field.
                </p></div>
            </div>

            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#afdfff]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Platinum Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p class="text-center">
                            None yet! Be the first to sponsor us at the Platinum Bolt level.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#fff7af]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Zirconium Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p>
                            
                            <a href="https://www.baxter.com/"><img src={baxterLogo} alt="baxter logo" class="w-[418px] h-[72px]" /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#929292]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Titanium Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p>
                            <a href="https://dpi.wi.gov/stem/grants/robotic-league"><img src={dpiLogo} alt="dpi logo" class="w-[571px] h-[138px]" /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#d8d8d8]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Silver Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p>
                            <a href="https://www.ecu.com/"><img src={educatorsLogo} alt="ecu logo" class="h-[72px]" /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#eeeeee]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Chromium Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p class="text-center">
                            TODO
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#ffffff]">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Iron Bolt
                    </p>
                    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                        
                        <p>
                            TODO
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsors;