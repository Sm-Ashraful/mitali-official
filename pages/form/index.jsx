import React from "react";
import styled from "styled-components";

import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";

import form from "../../googleForm.json";

import CheckboxInput from "./components/CheckboxInput";
import RadioInput from "./components/RadioInput";
import ShortAnswerInput from "./components/ShortAnswerInput";
import DateTimeInput from "./components/DateTimeInput";

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`;

const QuestionHelp = styled.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;
`;

const Questions = () => {
  return (
    <div className="">
      {form.fields.map((field) => {
        const { id } = field;

        let questionInput = null;
        switch (field.type) {
          case "CHECKBOX":
            questionInput = <CheckboxInput id={id} type="CHECKBOX" />;
            break;
          case "RADIO":
            questionInput = <RadioInput id={id} type="RADIO" />;
            break;
          case "SHORT_ANSWER":
            questionInput = <ShortAnswerInput id={id} type="SHORT_ANSWER" />;
            break;
        }

        if (!questionInput) {
          return null;
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {questionInput}
            <QuestionHelp>{field.description}</QuestionHelp>
          </QuestionContainer>
        );
      })}
    </div>
  );
};

const LeadForm = () => {
  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    await methods
      .submitToGoogleForms(data)
      .then(() => {
        alert("Form submitted with success!");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
      });
  };
  return (
    <>
      <GoogleFormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="relative top-[6rem] my-0 mx-auto max-w-xl  px-5 pt-5 mb-10"
        >
          <div className="w-full">
            <img src="/rrr.png" alt="logo image" />
          </div>
          {form.title && (
            <div className="pb-5">
              <h1>{form.title}</h1>
              {form.description && (
                <p style={{ fontSize: ".8rem" }}>{form.description}</p>
              )}
            </div>
          )}
          <Questions />
          <button
            type="submit"
            className="mt-5 rounded-xl bg-[#052149] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
          >
            Submit
          </button>
        </form>
      </GoogleFormProvider>
    </>
  );
};

export default LeadForm;
