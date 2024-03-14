import { ReactElement } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import WhatsappIcon from '../assets/whatsapp.png';

type Props = {
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
};

function Page({ header, body, footer }: Props): ReactElement {
  return (
    <HelmetProvider>
      <div className="flex flex-col">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            // eslint-disable-next-line
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Helmet>
        {header}
        {body}
        {footer}
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            window.location.href = 'https://wa.me/6281326606878';
          }}
          onClick={() => {
            window.location.href = 'https://wa.me/6281326606878';
          }}
          className="flex items-center justify-center fixed bottom-0 right-0 w-40 h-16 bg-yellow-900/60 rounded-2xl mb-10 mr-2"
        >
          <img src={WhatsappIcon} className="float-left w-16 h-16" alt="" />
          <div className="text-white font-bold px-1">Reservasi</div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Page;
