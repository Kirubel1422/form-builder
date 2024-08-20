import { useNavigate } from "react-router-dom";
import FormRender from "../components/FormRender";

const Preview = () => {
  const navigate = useNavigate();
  // Parse the stored formSchema from localStorage
  const formSchema = JSON.parse(localStorage.getItem("formSchema"));

  // If there is no schema created return
  if (!formSchema) navigate("/");

  return (
    <div>
      <FormRender formSchema={formSchema} />
    </div>
  );
};

export default Preview;
