import React, { useState } from "react";
import { useRouter } from "next/router";
import { JobInfo } from "@/utils/jobapi";
import ApplyForm from "@/components/applyForm";

const JobDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const targetJobName = router.query.jobName;
  // Use the 'find' method to find the job with the matching 'jobName'
  const matchingJob = JobInfo.find((job) => job.jobName === targetJobName);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative top-[6rem] mb-10   px-2 md:px-16">
      <div className="font-Allerta">
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Job Title
          </p>
          <p>{matchingJob.jobName}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Category
          </p>
          <p>{matchingJob.category}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Vacancy
          </p>
          <p>{matchingJob.vacancy}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Job Location
          </p>
          <p>{matchingJob.location}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Experience
          </p>
          <p>{matchingJob.experience || 0}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Job Context
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.jobContext.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Job Responsibilities
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.jobResponsibilities.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Employment Status
          </p>
          <p>{matchingJob.jobType}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Educational Requirements:
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.education.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">
            Additional Requirements
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.additionalRequirement.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">Work Place</p>
          <p>{matchingJob.workPlace}</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">Salary</p>
          <ul className="list-disc ml-5">
            {matchingJob.salary.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">
            Compensation & other benefits
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.other.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">How to apply</p>
          <p>{matchingJob.howTo}</p>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-sky-700 text-white px-6 py-2 font-semibold rounded-md"
      >
        Apply Now
      </button>
      <ApplyForm isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default JobDetails;
