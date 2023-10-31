import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TitleWBack = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3">
      <Icons.FaArrowLeft
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default TitleWBack;
