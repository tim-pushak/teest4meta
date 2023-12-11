import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";
import companiesData from "../../../db.json";

type Company = {
  id: string;
  title: string;
  email: string;
  description: string;
};

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add event listener to close suggestions when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredCompanies = companiesData.companies.filter((company) =>
      company.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredCompanies);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions} ref={suggestionsRef}>
          <ul>
            {suggestions.map((company) => (
              <li key={company.id}>{company.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
