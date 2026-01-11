import styles from "./Categories.module.css";
import { BsPeople, BsWind, BsFuelPump, BsUiRadios, BsCupHot, BsTv } from "react-icons/bs";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";

const Categories = ({ camper }) => {
  if (!camper) return null;
  const features = [
    {
      id: "transmission",
      label: camper.transmission,
      icon: camper.transmission === 'automatic' ? <TbAutomaticGearbox className={styles.icon}/> : <TbManualGearbox className={styles.icon}/>,
      condition: true, 
    },
    {
      id: "engine",
      label: camper.engine,
      icon: <BsFuelPump className={styles.icon} />,
      condition: true, 
    },
   
    {
      id: "kitchen",
      label: "Kitchen",
      icon: <BsCupHot className={styles.icon} />,
      condition: camper.details?.kitchen || camper.kitchen,
    },
    {
      id: "AC",
      label: "AC",
      icon: <BsWind className={styles.icon} />,
      condition: camper.details?.airConditioner || camper.AC, 
    },
    {
      id: "TV",
      label: "TV",
      icon: <BsTv className={styles.icon} />, 
      condition: camper.details?.TV || camper.TV,
    },
    {
      id: "bathroom",
      label: "Bathroom",
      icon: <LuShowerHead className={styles.icon} />,
      condition: camper.details?.bathroom || camper.bathroom,
    },
    {
      id: "radio",
      label: "Radio",
      icon: <BsUiRadios className={styles.icon} />,
      condition: camper.details?.radio || camper.radio,
    }
  ];

  return (
    <ul className={styles.categories}>
      {features.map((feature) => (
        feature.condition ? (
          <li key={feature.id} className={styles.badge}>
            {feature.icon}
            <span>{feature.label}</span>
          </li>
        ) : null
      ))}
    </ul>
  );
};

export default Categories;