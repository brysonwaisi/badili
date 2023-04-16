import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDisease } from "../../service/DiseaseService";
import "./diseaseform.css";
import { useTranslation } from "react-i18next";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const DiseaseForm = (props) => {
  const { t, i18n } = useTranslation(["form"]);
  const [formData, setFormData] = useState({
    name: "",
    local_names: "",
    other_livestock_affected: "",
    transmission: "",
    number_affected: "",
    death_rate: "",
    predisposing_factors: "",
    key_signs: "",
    other_signs: "",
    prevention: "",
    language: "English",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addDisease(event.target).then(
      (res) => {
        props.setUpdated(true);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{t("name")}:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="local_names">{t("local names")}:</label>
          <input
            type="text"
            id="local_names"
            name="local_names"
            value={formData.local_names}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="other_livestock_affected">
            {t("other livestock affected")}:
          </label>
          <input
            type="text"
            id="other_livestock_affected"
            name="other_livestock_affected"
            value={formData.other_livestock_affected}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="transmission">{t("transmission")}:</label>
          <input
            type="text"
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number_affected">{t("number affected")}:</label>
          <input
            type="number"
            id="number_affected"
            name="number_affected"
            value={formData.number_affected}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="death_rate">{t("death rate")}:</label>
          <input
            type="text"
            id="death_rate"
            name="death_rate"
            value={formData.death_rate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="predisposing_factors">
            {t("predisposing factors")}:
          </label>
          <ReactQuill
            theme="snow"
            id="predisposing_factors"
            name="predisposing_factors"
            value={formData.predisposing_factors}
            modules={modules}
            onChange={(value) =>
              handleFormChange(value, "predisposing_factors")
            }
          />
        </div>
        <div>
          <label htmlFor="key_signs">{t("key signs of the disease")}:</label>
          <ReactQuill
            theme="snow"
            id="key_signs"
            name="key_signs"
            value={formData.key_signs}
            modules={modules}
            onChange={(value) => handleFormChange(value, "key_signs")}
          />
        </div>
        <div>
          <label htmlFor="other_signs">{t("other signs")}:</label>
          <ReactQuill
            theme="snow"
            id="other_signs"
            name="other_signs"
            value={formData.other_signs}
            modules={modules}
            onChange={(value) => handleFormChange(value, "other_signs")}
          />
        </div>
        <div>
          <label htmlFor="prevention">{t("prevention")}:</label>
          <ReactQuill
            theme="snow"
            id="prevention"
            name="prevention"
            value={formData.prevention}
            modules={modules}
            onChange={(value) => handleFormChange(value, "prevention")}
          />
        </div>
        <div>
          <label htmlFor="language">{t("language")}:</label>
          <select
            id="language"
            name="language"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiseaseForm;
