import { useState, useEffect } from "react";

const DiseaseList = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    getDiseases();
  }, []);

  let getDiseases = async () => {
    let res = await fetch("http://127.0.0.1:8000/api/diseases/");
    let data = await res.json();
    console.log(data);
    setDiseases(data);
  };

  return (
    <div>
      <div className="disease-list">
        {diseases.map((disease, index) => (
          <h3 key={index}>{disease.death_rate}</h3>
        ))}
      </div>
    </div>
  );
};

export default DiseaseList;
