import React from "react";
import styles from "./Header.module.css";

import { Load } from "./Load";
import { Logo } from "./Logo";
import { Save } from "./Save";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <div className={styles.header}>
        <Logo />
        <SearchBar />
        <Load />
        <Save />
    </div>
  );
}
