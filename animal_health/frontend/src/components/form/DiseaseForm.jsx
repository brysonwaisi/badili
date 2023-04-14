import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDisease } from "../../service/DiseaseService";
import "./diseaseform.css";

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
        console.log(res);
        props.setUpdated(true);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const handleLanguageChange = (event) => {
    setFormData({
      ...formData,
      language: event.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="local_names">Local Names:</label>
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
            Other Livestock Affected:
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
          <label htmlFor="transmission">Transmission:</label>
          <input
            type="text"
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number_affected">Number Affected in a herd:</label>
          <input
            type="number"
            id="number_affected"
            name="number_affected"
            value={formData.number_affected}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="death_rate">Death Rate:</label>
          <input
            type="text"
            id="death_rate"
            name="death_rate"
            value={formData.death_rate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="predisposing_factors">Predisposing Factors:</label>
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
          <label htmlFor="key_signs">Key signs of the disease:</label>
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
          <label htmlFor="other_signs">Other signs:</label>
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
          <label htmlFor="prevention">Prevention:</label>
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
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Kiswahili">Kiswahili</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiseaseForm;
