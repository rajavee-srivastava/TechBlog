import React from "react";
import subsStyles from "./SubsCard.module.css";

const SubsCard = () => {
  return (
    <>
      <div className={subsStyles.rect}>
      <div className={subsStyles.text}>
        <h4>Got a project? Lets Collaborate!</h4>
        <p>
          Think our creative energies can cook up something mind-blowing? Don’t
          be shy—reach out and let’s make some digital magic happen.
        </p>
        <button className={subsStyles.subsBttn}>Contact Me!</button>
      </div>
      </div>
    </>
  );
};

export default SubsCard;
