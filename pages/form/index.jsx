import React from "react";
import styled from "styled-components";

import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { useCheckboxInput } from "react-google-forms-hooks";
import { useShortAnswerInput } from "react-google-forms-hooks";
import { useRadioInput } from "react-google-forms-hooks";

import form from "../../googleForm.json";

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

const ErrorLabel = styled.span`
  color: red;
  padding: 10px 0;
`;

function RadioInput({ id }) {
  const { options, customOption, error } = useRadioInput(id);

  return (
    <Container>
      {options.map((o) => (
        <CheckboxContainer key={o.id}>
          <input
            type="radio"
            id={o.id}
            {...o.registerOption()}
            className="pr-3"
          />
          <label htmlFor={o.id}>{o.label}</label>
        </CheckboxContainer>
      ))}
      {customOption && (
        <CheckboxContainer>
          <input
            type="radio"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label htmlFor={customOption.id}>Outra</label>
          <input
            type="text"
            placeholder="Resposta aqui"
            {...customOption.registerCustomInput()}
          />
        </CheckboxContainer>
      )}
      <ErrorLabel>{error && "This field is required"}</ErrorLabel>
    </Container>
  );
}

function ShortAnswerInput({ id }) {
  const { register } = useShortAnswerInput(id);

  return (
    <div>
      <input type="text" {...register()} className="w-full bg-black/10 py-2" />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  display: flex;

  & label {
    margin: 0 10px;
  }
`;

function CheckboxInput({ id }) {
  const { options, customOption } = useCheckboxInput(id);

  return (
    <Container>
      {options.map((o) => (
        <CheckboxContainer key={o.id}>
          <input
            type="checkbox"
            id={o.id}
            {...o.registerOption()}
            className="pr-3"
          />
          <label htmlFor={o.id}>{o.label}</label>
        </CheckboxContainer>
      ))}
      {customOption && (
        <CheckboxContainer>
          <input
            type="checkbox"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label htmlFor={customOption.id}>Outra</label>
          <input
            type="text"
            placeholder="Resposta aqui"
            {...customOption.registerCustomInput()}
          />
        </CheckboxContainer>
      )}
    </Container>
  );
}

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
  );
};

export default LeadForm;
