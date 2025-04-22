import React, { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") {
      toast.error("Enter text to search for image!");
      return;
    }

    onSubmit(trimmedValue);
    setInputValue("");
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
          className={s.inputText}
        />
        <button className={s.searchBtn} type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
