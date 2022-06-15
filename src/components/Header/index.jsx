import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";

import { HeaderMenu, Img } from "./style";

export default function Header() {
  const { userInfo } = useContext(UserContext);
  const [logoutMenu, setLogoutMenu] = useState(false);

  return (
    <HeaderMenu>
      <h2>linkr</h2>
      <IconContext.Provider value={{ color: "white", size: 30 }}>
        <div>
          <IoIosArrowDown />
          <Img url={userInfo.img} />
        </div>
      </IconContext.Provider>
    </HeaderMenu>
  );
}
