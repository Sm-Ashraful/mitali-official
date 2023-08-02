import React from "react";
import StepCard from "./StepCard";

const HowService = () => {
  return (
    <div className="px-2 md:px-16 mt-20">
      <h2 className="text-[28px] md:text-[38px] leading-9 text-[#464855] text-center font-[800] mb-[20px]">
        Empowering Success: Excellence at Every Step
      </h2>
      <div className="grid md:grid-cols-4 gap-2 md:gap-4 pt-5 md:pt-10">
        <StepCard
          link={"/Image/step/images (9).jpg"}
          title={"Training and Development"}
          des={
            "Invest in continuous training programs for our agents to improve their communication skills, product knowledge, and problem-solving abilities."
          }
        />
        <StepCard
          link={"/Image/step/Implementing Advanced Technology.png"}
          title={"Implementing Advanced Technology"}
          des={
            "Invest in continuous training programs for our agents to improve their communication skills, product knowledge, and problem-solving abilities."
          }
        />
        <StepCard
          link={"/Image/step/Monitoring and Quality Assurance.png"}
          title={"Monitoring and Quality Assurance"}
          des={
            " Regularly monitor calls and interactions to maintain service quality and identify areas for improvement."
          }
        />
        <StepCard
          link={"/Image/step/Personalization.png"}
          title={"Personalization"}
          des={
            "Tailor interactions to meet individual customer needs, providing a more personalized and engaging experience."
          }
        />
        <StepCard
          link={"/Image/step/images.png"}
          title={"Reducing Response Times"}
          des={
            "Work on reducing call waiting times and response times to ensure quick and efficient customer support."
          }
        />
        <StepCard
          link={"/Image/step/Feedback and Customer Surveys.png"}
          title={"Feedback and Customer Surveys"}
          des={
            "Gather feedback from customers through surveys and feedback forms to gain insights into their satisfaction levels and identify areas for improvement."
          }
        />
        <StepCard
          link={"/Image/step/Employee Engagement.png"}
          title={"Employee Engagement"}
          des={
            "Focus on fostering a positive work environment, promoting employee satisfaction, and recognizing and rewarding exceptional performance."
          }
        />
        <StepCard
          link={"/Image/step/proactive issue resolution.png"}
          title={"Proactive Issue Resolution"}
          des={
            "Anticipate potential issues and address them proactively to prevent customer dissatisfaction."
          }
        />
      </div>
    </div>
  );
};

export default HowService;
