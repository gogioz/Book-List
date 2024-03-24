import { arrowBackOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div className="  flex">
      <Link to="/" className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
        <IonIcon
          icon={arrowBackOutline}
          size="large"
          className=" cursor-pointer text-2xl "
        />
      </Link>
    </div>
  );
}

export default BackButton;
