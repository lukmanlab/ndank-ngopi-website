import { IconButton } from '@material-tailwind/react';
import { ReactElement } from 'react';

const medSos = [
  {
    type: 'fb',
    icon: 'fa-brands fa-facebook',
    // eslint-disable-next-line comma-dangle
    link: 'https://www.facebook.com/agus.lukmanto/',
  },
  {
    type: 'tiktok',
    icon: 'fa-brands fa-tiktok',
    // eslint-disable-next-line prettier/prettier
    link: 'https://www.tiktok.com/@ndankngopitempur'
  },
  {
    type: 'ig',
    icon: 'fa-brands fa-instagram',
    // eslint-disable-next-line prettier/prettier
    link: 'https://www.instagram.com/ndankngopitempur/'
  },
];

function Footer(): ReactElement {
  return (
    <div className="flex w-full bg-brown-700 text-white p-1 justify-between sm:flex-row">
      <div id="footer-left" className="flex flex-col p-2 w-full">
        <div className="flex flex-col relative p-2">
          <div className="font-bold items-start mr-2">Lokasi :</div>
          <div className="py-2">
            <div className="text-xs"> Desa Wisata Tempur, Keling, Jepara</div>
            <span className="text-xs">Map : </span>
            <a
              href="https://www.google.com/maps/dir//Kemiren,+RT.01%2FRW.01,+Kereng+Redo,+Tempur,+Kec.+Keling,+Kabupaten+Jepara,+Jawa+Tengah+59454,+Indonesia/@-6.590311,110.8197732,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e71270168bfc857:0x49478d5273775c0d!2m2!1d110.9021751!2d-6.5903178?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xs"
            >
              link.map
            </a>
          </div>
        </div>
        <div className="flex relative p-2 flex-col sm:flex-row">
          <div className="items-start mr-2 font-bold">Email :</div>
          <a
            href="mailto:lukmanto79@gmail.com"
            className="items-start text-sm text-orange-800"
          >
            lukmanto79@gmail.com
          </a>
        </div>
      </div>
      <div id="footer-right" className="flex flex-col p-4 items-center w-full">
        <div className="font-bold">Follow us:</div>
        <div className="flex gap-x-1 mt-2">
          {medSos.map((element) => (
            <IconButton key={element.type} placeholder={element.type} size="md">
              <i className={`${element.icon}`} />
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
