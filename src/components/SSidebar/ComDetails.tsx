import React from "react";
import { useParams } from "react-router-dom";
import companiesData from "../../db.json";

export function ComDetails() {
  const { companyId } = useParams<{ companyId: string }>();
  const company = companiesData.companies.find((c) => {
    console.log("c.id:", c.id);
    return c.id === companyId;
  });

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h2>{company.title}</h2>
      <p>Email: {company.email}</p>
      <p>Description: {company.description}</p>
    </div>
  );
}
