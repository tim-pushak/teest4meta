import React from "react";
import { useParams } from "react-router-dom";
import companiesData from "../../../db.json";
import { ComList } from "../FSidebar";
import styles from "./ComDetails.module.css";

export function ComDetails() {
  const { companyId } = useParams<{ companyId: string }>();
  const company = companiesData.companies.find(
    (c) => c.id.toString() === companyId
  );

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className={styles.scroll__wrapper}>
      <ComList />
      <div>
        <h2>{company.title}</h2>
        <p>
          <a href="mailto:devprogartt@gmail.com?">{company.email}</a>
        </p>
        <p>{company.description}</p>
      </div>
    </div>
  );
}
