import React from "react";

import { Container,Wrapper,LinkedinIcon,SearchInput,HomeIcon,NotificationsIcon,ProfileCircle, CaretDownIcon} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Inicio</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
                <ProfileCircle src="https://github.com/pierresouza.png" />
            <span>
                Eu <CaretDownIcon/>
            </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
