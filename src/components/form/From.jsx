import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import InputText from "../ui/InputText";

const initialState = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: false,
};

const From = ({ initialValue, handleSubmit: handleValue, isReset = false }) => {
  const [inputValue, setInputValue] = useState(initialValue || initialState);
  const isAdd = useMatch("add");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setInputValue({ ...inputValue, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValue(inputValue);
    // if (isReset) setInputValue(initialState);
  };

  useEffect(() => {
    if (isReset) setInputValue(initialState);
  }, [isReset]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <InputText
        label="Book Name"
        type="text"
        name="name"
        required
        value={inputValue.name}
        onChange={handleInputChange}
      />
      <InputText
        label="Author"
        type="text"
        name="author"
        required
        value={inputValue.author}
        onChange={handleInputChange}
      />
      <InputText
        label="Image Url"
        type="text"
        name="thumbnail"
        required
        value={inputValue.thumbnail}
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-2 gap-8 pb-4">
        <InputText
          label="Price"
          type="number"
          name="price"
          required
          value={inputValue.price}
          onChange={handleInputChange}
        />
        <InputText
          label="Rating"
          type="number"
          name="rating"
          min="1"
          max="5"
          required
          value={inputValue.rating}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center">
        <InputText
          label="This is a featured book"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={inputValue.featured}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="submit" id="lws-submit">
        {isAdd ? "Add Book" : "Update Book"}
      </button>
    </form>
  );
};

export default From;
