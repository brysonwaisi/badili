import { useState, useEffect } from "react";
import { getDiseases } from "../../service/DiseaseService";
import "./home.css";
import fig1 from "../../assets/fig1.png";
import fig2 from "../../assets/fig2.png";

const Home = () => {
  const [diseases, setDiseases] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getDiseases().then((data) => {
      if (diseases.length && !isUpdated) {
        return;
      }

      setDiseases(data);
    });
    setIsUpdated(false);
  }, [isUpdated, diseases]);

  return (
    <div>
      {diseases.map((disease) => (
        <div key={disease.id}>
          <h2>{disease.name}</h2>
          <h3>Local Names</h3>
          <p>{disease.local_names}</p>
          <h3>Other Livestock Affected</h3>
          <p>{disease.other_livestock_affected}</p>
          <h3>Transmission</h3>
          <p>{disease.transmission}</p>
          <figure>
            <img src={fig1} alt="Illustration of CBPP transmission" />
            <figcaption>Figure 1: Illustration of CBPP transmission</figcaption>
          </figure>
          <h3>Number Affected in a Herd</h3>
          <p>{disease.number_affected}</p>
          <h3>Death Rate</h3>
          <p>{disease.death_rate}</p>
          <h3>Predisposing Factors</h3>
          <ul>
            {disease.predisposing_factors &&
              disease.predisposing_factors
                .split("\n")
                .map((factor, index) => <li key={index}>{factor}</li>)}
          </ul>
          <figure>
            <img
              src={fig2}
              alt="A bull suffering laboured breathing because of CBPP"
            />
            <figcaption>
              Figure 2: A bull suffering laboured breathing because of CBPP
            </figcaption>
          </figure>
          <h3>Key Signs of the Disease</h3>
          <ul>
            {disease.key_signs &&
              disease.key_signs
                .split("\n")
                .map((sign, index) => <li key={index}>{sign}</li>)}
          </ul>
          <h3>Other Signs</h3>
          <ul>
            {disease.other_signs &&
              disease.other_signs
                .split("\n")
                .map((sign, index) => <li key={index}>{sign}</li>)}
          </ul>
          <h3>Prevention</h3>
          <ul>
            {disease.prevention &&
              disease.prevention
                .split("\n")
                .map((prevention, index) => <li key={index}>{prevention}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
