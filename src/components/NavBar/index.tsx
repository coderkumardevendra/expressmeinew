import {
  NavBarContainer,
  NavBarContent,
  NavBarContentMobile,
  NavBarDesktop,
  NavBarLink,
  NavBarLinkOpen,
  NavBarMobile,
} from "./styles";
import Logo from "@/assets/logo-no-rocket.svg";
import { useNavigate } from "react-router-dom";
import { Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <NavBarContainer>
      <NavBarContent className="container">
        <div className="logo">
          <img
            src={Logo}
            width={115}
            height={20}
            alt="Logo da empresa, um foguete escrito 'Express MEI' ao lado"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <NavBarDesktop>
            <li>
              <NavBarLink to="/alterar-mei">Alterar</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/cancelar-mei">Cancelar</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/declarar-mei">Declarar</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/parcelar-mei">Parcelamento</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/consultoria">Consultoria</NavBarLink>
            </li>
            <li>
              <NavBarLinkOpen to="/abrir-mei">Abrir MEI</NavBarLinkOpen>
            </li>
          </NavBarDesktop>
        </div>
      </NavBarContent>
      <NavBarMobile>
        <div>
          <div className="logo">
            <img
              src={Logo}
              width={140}
              height={24}
              alt="Logo da empresa, um foguete escrito 'Express MEI' ao lado"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Button onClick={toggleDrawer(true)}>
            <Menu />
          </Button>
        </div>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <NavBarContentMobile>
            <div className="logo">
              <img
                src={Logo}
                width={140}
                height={24}
                alt="Logo da empresa, um foguete escrito 'Express MEI' ao lado"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </div>

            <nav className="navigation">
              <NavBarLink to="/alterar-mei">Alterar</NavBarLink>
              <NavBarLink to="/cancelar-mei">Cancelar</NavBarLink>
              <NavBarLink to="/declarar-mei">Declarar</NavBarLink>
              <NavBarLink to="/parcelar-mei">Parcelamento</NavBarLink>
              <NavBarLink to="/consultoria">Consultoria</NavBarLink>
              <NavBarLink to="/abrir-mei">Abrir MEI</NavBarLink>
            </nav>

            <div>&copy; 2022 Express MEI</div>
          </NavBarContentMobile>
        </SwipeableDrawer>
      </NavBarMobile>
    </NavBarContainer>
  );
};

export default NavBar;