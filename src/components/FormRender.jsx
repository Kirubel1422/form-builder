import { Form } from "@formio/react";
import PropTypes from "prop-types";

const FormRender = ({ formSchema }) => {
  return (
    <div className="container">
      <div className=" d-flex  align-items-center justify-content-center mt-md-4 mt-sm-2 mt-1">
        <img src="/src/assets/react.svg" />
      </div>
      <div className="mx-auto mt-md-4 mt-2 w-100 w-md-50">
        <Form onSubmit={(value) => console.log(value)} form={formSchema} />
      </div>
    </div>
  );
};

FormRender.propTypes = {
  formSchema: PropTypes.object,
};

export default FormRender;
