import axios from "axios";

export const getDiseases = async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/diseases/")
    .then((res) => res.data);
};

export const addDisease = async (disease) => {
  return await axios
    .post("http://127.0.0.1:8000/api/diseases/", {
      id: null,
      name: disease.name.value,
      local_names: disease.local_names.value,
      other_livestock_affected: disease.other_livestock_affected.value,
      transmission: disease.transmission.value,
      number_affected_in_herd: disease.number_affected_in_herd.value,
      death_rate: disease.death_rate.value,
      predisposing_factors: disease.predisposing_factors.value,
      key_signs_of_the_disease: disease.key_signs_of_the_disease.value,
      other_signs: disease.other_signs.value,
      prevention: disease.prevention.value,
    })
    .then((res) => res.data);
};
