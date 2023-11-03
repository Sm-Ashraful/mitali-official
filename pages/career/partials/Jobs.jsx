import React from "react";
import { IoMdWarning } from "react-icons/io";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import Link from "next/link";

import { JobInfo } from "@/utils/jobapi";

const Jobs = ({ data }) => {
  return (
    <div className="w-full md:py-10 h-auto ">
      <h3 className="text-[24px] md:text-[36px] font-bold text-center">Jobs</h3>
      {data.map((job, idx) => {
        return (
          <div
            key={idx}
            className="relative bg-[#fafafa] py-5 px-2 md:px-16 cursor-pointer "
          >
            <Link href={`/career/${job.jobName}`}>
              <h4 className="relative font-bold font-Rubik text-[18px] md:text-[22px]">
                {job.jobName}
                <span className="text-[12px] md:text-normal bg-blue-600 text-white px-2 py-1">
                  Open
                </span>
              </h4>
              <p className="font-semibold font-Work">
                <span>Job type:</span> <span>{job.jobType}</span>
              </p>
              <p className="font-semibold font-Work">
                No of Vacancy: {job.vacancy}
              </p>
              <p className="font-semibold font-Work">
                Location: {job.location}
              </p>
              {job.deadline ? (
                <p className="font-semibold font-Work">
                  Deadline:{job.deadline}
                </p>
              ) : (
                <>
                  <div className="w-full bg-blue-700 flex text-white py-2 items-center pl-10 text-[16px] md:text-[18px] gap-x-2">
                    <IoMdWarning />
                    <p>There is no deadline</p>
                  </div>
                </>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
