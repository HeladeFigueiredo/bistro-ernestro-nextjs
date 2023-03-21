import { IconContext } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";

import styles from './UserIcon.module.css';

const UserIcon = () => {
  return (
    <IconContext.Provider value={{size: 20}}>
      <div className={styles.icon}>
        <BsFillPersonFill />
      </div>
    </IconContext.Provider>
  );
};

export default UserIcon;

//criar folha de css
// module
// estilizar navbar
