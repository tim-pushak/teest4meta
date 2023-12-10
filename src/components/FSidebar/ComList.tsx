import React from "react";
import { Link } from "react-router-dom";
import companiesData from "../../db.json";
import styles from "./ComList.module.css";

export function ComList() {
  return (
    <div>
      <div className={styles.scroll}>
        <ul>
          {companiesData.companies.map((company) => (
            <li key={company.id}>
              <Link to={`/company/${company.id}`}>{company.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
