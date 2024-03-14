import { ReactElement } from 'react';
import { Carousel } from '@material-tailwind/react';
import { ImageWithText } from './ImageWithText';
import { data } from './data';
import Kopi from '../../assets/kopi.jpeg';

function CarouselTransition(): ReactElement {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <Carousel
        className="md:w-full sm:w-full h-1/2 sm:h-1/3"
        placeholder="test"
        autoplay
        loop
        transition={{ duration: 2 }}
      >
        {data.map((element) => (
          <ImageWithText
            key={element.description}
            imgUrl={element.imgUrl as string}
            title={element.title}
            description={element.description}
            textButton={element.textButton}
            urlButton={element.urlButton}
          />
        ))}
      </Carousel>
    </div>
  );
}
export function Body(): ReactElement {
  return (
    <div>
      <CarouselTransition />
      <div className="w-full flex place-content-center">
        <div className="h-1 w-28 bg-black mt-6" />
      </div>
      <div className="w-full flex my-6 place-content-center p-1">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <img
            // src="https://kurio-img.kurioapps.com/21/02/24/4f99af33-b3c1-47cd-a219-f1a5289f8b29.jpe"
            src={Kopi}
            alt=""
            className="h-50 w-full max-w-full rounded-2xl object-cover object-center"
          />
          <img
            src="https://images.unsplash.com/photo-1620370219275-65b5d008f41a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-50 w-full max-w-full rounded-2xl object-cover object-center"
          />
          <img
            src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/05/23/Q8sdPPq/5-cara-masak-ayam-penyet-yang-enak-lengkap-dengan-resepnya83.jpg"
            alt=""
            className="h-50 w-full max-w-full rounded-2xl object-cover object-center"
          />
          <img
            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-50 w-full max-w-full rounded-2xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
