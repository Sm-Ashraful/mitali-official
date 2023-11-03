import React, { useState } from "react";
import { useRouter } from "next/router";

import ApplyForm from "@/components/applyForm";

import { useData } from "../../utils/fetchData";

const JobDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data, loading, error } = useData("/get-active-job");

  console.log("Data from job page: ", data);

  if (loading) {
    // Router is not ready yet, you can show a loading indicator here
    return (
      <div className="h-screen w-full flex items-center justify-center text-[22px] md:text-[32px] ">
        Loading...
      </div>
    );
  }

  const targetJobName = router.query.jobName;
  if (!targetJobName) {
    // Handle the case where jobName is not available (e.g., display an error message)
    return <div>Job not found</div>;
  }
  // Use the 'find' method to find the job with the matching 'jobName'
  const matchingJob = data.find((job) => job.jobName === targetJobName);
  if (!matchingJob) {
    // Handle the case where no matching job is found (e.g., display an error message)
    return <div>Job not found</div>;
  }
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
          <p>Uttara(west), Dhaka</p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Experience
          </p>
          <ul className="list-disc ml-5">
            {matchingJob.experience.map((context, idx) => {
              return <li key={idx}>{context}</li>;
            })}
          </ul>
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
          <p className="text-[20px] md:text-[28px] font-bold font-Work">
            Job Deadline
          </p>
          <p>
            {matchingJob.deadline
              ? matchingJob.deadline
              : "No deadline for this job. We are continuously hiring"}
          </p>
        </div>
        <div className="mb-3">
          <p className="text-[20px] md:text-[28px] font-bold">How to apply</p>
          <p>
            Please click the apply form and send us your information with your
            Resume. Resume must contain photography
          </p>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-sky-700 text-white px-6 py-2 font-semibold rounded-md"
      >
        Apply Now
      </button>
      <ApplyForm
        isOpen={isOpen}
        onClose={onClose}
        jobTitle={matchingJob.jobName}
      />
    </div>
  );
};

export default JobDetails;
