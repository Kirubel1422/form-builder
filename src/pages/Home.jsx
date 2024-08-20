import { useState } from "react";
import { FormBuilder } from "@formio/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  const [formSchema, setFormSchema] = useState({});

  const handleFormChange = (schema) => {
    setFormSchema(schema);
  };

  return (
    <div className={"overflow-y-auto"}>
      <FormBuilder
        form={formSchema}
        onChange={(schema) => handleFormChange(schema)}
      />
      <button
        onClick={() => {
          if (!formSchema.components.length) {
            // Alert error
            setAlert(true);
            return;
          }

          // Stringify formSchema
          const stringified = JSON.stringify(formSchema);

          // Store the stringified json object to localstorage to retrieve later
          localStorage.setItem("formSchema", stringified);

          // Navigate to preview page
          navigate("/preview");
        }}
        className="btn btn-primary mt-5"
      >
        Save Form
      </button>
      <hr />

      {alert && (
        <div className="alert alert-danger" role="alert">
          Choose components first
        </div>
      )}
    </div>
  );
};

export default Home;
