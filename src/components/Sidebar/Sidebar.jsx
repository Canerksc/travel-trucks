import { useState } from "react";
import styles from "./Sidebar.module.css";
import { CiMap } from "react-icons/ci";
import { BsWind, BsCupHot, BsTv, BsGrid, BsGridFill } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";

const Sidebar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const [vehicleType, setVehicleType] = useState("");

  const handleFilterChange = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  const handleTypeChange = (type) => {
    setVehicleType((prev) => (prev === type ? "" : type)); 
  };


  const handleSubmit = () => {
    const searchParams = {
      location: location.trim(),
      form: vehicleType,
      AC: filters.AC ? true : undefined,
      kitchen: filters.kitchen ? true : undefined,
      TV: filters.TV ? true : undefined,
      bathroom: filters.bathroom ? true : undefined,
      transmission: filters.transmission ? "automatic" : undefined,
    };

    const cleanParams = Object.fromEntries(
Object.entries(searchParams).filter(([, v]) => v !== undefined && v !== "")    );

    onSearch(cleanParams);
  };

  return (
    <aside className={styles.sidebar}>
      <label className={styles.label}>Location</label>
      <div className={styles.inputWrapper}>
        <CiMap size={20} color="#10182899" />
        <input
          type="text"
          placeholder="City"
          className={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <p className={styles.label}>Filters</p>

      {/* 2. Özellikler (Equipment) */}
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          {/* AC Butonu */}
          <div 
            className={`${styles.filterBox} ${filters.AC ? styles.active : ""}`}
            onClick={() => handleFilterChange("AC")}
          >
            <BsWind className={styles.icon} />
            <span className={styles.boxLabel}>AC</span>
          </div>

          {/* Automatic Butonu */}
          <div 
            className={`${styles.filterBox} ${filters.transmission ? styles.active : ""}`}
            onClick={() => handleFilterChange("transmission")}
          >
            <TbAutomaticGearbox className={styles.icon} />
            <span className={styles.boxLabel}>Automatic</span>
          </div>

          {/* Kitchen Butonu */}
          <div 
            className={`${styles.filterBox} ${filters.kitchen ? styles.active : ""}`}
            onClick={() => handleFilterChange("kitchen")}
          >
            <BsCupHot className={styles.icon} />
            <span className={styles.boxLabel}>Kitchen</span>
          </div>

          {/* TV Butonu */}
          <div 
            className={`${styles.filterBox} ${filters.TV ? styles.active : ""}`}
            onClick={() => handleFilterChange("TV")}
          >
            <BsTv className={styles.icon} />
            <span className={styles.boxLabel}>TV</span>
          </div>

          {/* Bathroom Butonu */}
          <div 
            className={`${styles.filterBox} ${filters.bathroom ? styles.active : ""}`}
            onClick={() => handleFilterChange("bathroom")}
          >
            <LuShowerHead className={styles.icon} />
            <span className={styles.boxLabel}>Bathroom</span>
          </div>
        </div>
      </div>

      {/* 3. Araç Tipi (Vehicle Type) */}
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Vehicle type</h3>
        <div className={styles.grid}>
          <div 
            className={`${styles.filterBox} ${vehicleType === "panelTruck" ? styles.active : ""}`}
            onClick={() => handleTypeChange("panelTruck")}
          >
            <BsGrid className={styles.icon} />
            <span className={styles.boxLabel}>Van</span>
          </div>

          <div 
            className={`${styles.filterBox} ${vehicleType === "fullyIntegrated" ? styles.active : ""}`}
            onClick={() => handleTypeChange("fullyIntegrated")}
          >
            <BsGridFill className={styles.icon} />
            <span className={styles.boxLabel}>Fully Integrated</span>
          </div>

          <div 
            className={`${styles.filterBox} ${vehicleType === "alcove" ? styles.active : ""}`}
            onClick={() => handleTypeChange("alcove")}
          >
            <BsGrid className={styles.icon} /> 
            <span className={styles.boxLabel}>Alcove</span>
          </div>
        </div>
      </div>

      <button className={styles.searchBtn} onClick={handleSubmit}>Search</button>
    </aside>
  );
};

export default Sidebar;