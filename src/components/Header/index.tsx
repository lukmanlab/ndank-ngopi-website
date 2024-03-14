import { ReactElement } from 'react';
import { Button } from '@material-tailwind/react';
import CoffeIcon from '../../assets/logo.png';

function Header(): ReactElement {
  return (
    <div className="flex w-full bg-brown-700 text-white p-1">
      <span className="flex w-9" />
      <div
        id="logo-with-title"
        className="flex flex-col items-center p-1 w-full"
      >
        <img src={CoffeIcon} alt="" className="h-20 w-[85px] p-1" />
        {/* <span className="ml-1 font-bold">NDANK NGOPI</span> */}
      </div>
      <div className="flex w-full items-center justify-center">
        <a href="https://wa.me/6281326606878">
          <Button color="white" variant="outlined" placeholder="">
            Hubungi kami
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
