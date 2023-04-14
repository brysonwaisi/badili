import { useState, useEffect } from "react";
import DiseaseForm from "../components/form/DiseaseForm";
import { getDiseases } from "../service/DiseaseService";

const DiseaseList = () => {
  const [diseases, setDiseases] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getDiseases().then((data) => {
      if (diseases.length && !isUpdated) {
        return;
      }
      console.log(data);
      setDiseases(data);
    });
    setIsUpdated(false);
  }, [isUpdated, diseases]);

  return (
    <div className="disease-list">
      {diseases.map((disease) => (
        <DiseaseForm key={disease.id} disease={disease} />
      ))}
    </div>
  );
};

export default DiseaseList;
