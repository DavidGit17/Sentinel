export const WhySentinel = () => {
  return (
    <div className="">
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="px-[142px] bg-white h-fit py-14"
      >
        <p className="text-black text-[34px] font-bold ">FAQ</p>
        <h2
          id="accordion-collapse-heading-1 bg-[#F8F8F8] mr-2 w-fit"
          className=""
        >
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span className="font-bold">What is a Bug bounty program?</span>
            <p className="border border-black h-7 w-7 rounded-full bg-black text-white">
              +
            </p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b ">
            <p class="mb-2 text-black dark:text-gray-400">
              A bug bounty program is a crowdsourced initiative that rewards
              individuals for discovering and reporting security vulnerabilities
              in a company's software or website.
            </p>
          </div>
        </div>


        <h2 id="accordion-collapse-heading-2 bg-[#F8F8F8] mr-2 w-fit">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Why should I participate in a bug bounty program?</span>
            <p className="border border-black h-7 w-7 rounded-full bg-black text-white">
              +
            </p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-black dark:text-gray-400">
              Participating in a bug bounty program allows you to contribute to
              the security of a company's software or website while also earning
              rewards for your findings. It is a great way to showcase your
              skills and gain recognition in the cybersecurity community.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>How do bug bounty programs work?</span>
            <p className="border border-black h-7 w-7 rounded-full bg-black text-white">
              +
            </p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-black dark:text-gray-400">
              Bug bounty programs typically have a set of rules and guidelines
              that participants must follow. Participants search for
              vulnerabilities in the company's software or website and report
              them to the program organizers. If the vulnerability is valid and
              meets the program's criteria, the participant is rewarded with a
              bounty.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <span>
              What kind of vulnerabilities are eligible for bug bounties?
            </span>
            <p className="border border-black h-7 w-7 rounded-full bg-black text-white">
              +
            </p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-black dark:text-gray-400">
              Bug bounties are typically rewarded with monetary compensation,
              but some programs may also offer other incentives such as swag or
              recognition in their hall of fame. The amount of the bounty
              depends on the severity of the vulnerability and the company's
              reward structure.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-5 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <span>How are bug bounties rewarded?</span>
            <p className="border border-black h-7 w-7 rounded-full bg-black text-white">
              +
            </p>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-black dark:text-gray-400">
              Bug bounties are typically rewarded with monetary compensation,
              but some programs may also offer other incentives such as swag or
              recognition in their hall of fame. The amount of the bounty
              depends on the severity of the vulnerability and the company's
              reward structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
