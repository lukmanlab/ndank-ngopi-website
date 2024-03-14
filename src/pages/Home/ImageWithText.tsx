import { ReactElement } from 'react';
import { Button, Typography } from '@material-tailwind/react';

export type textProps = {
  imgUrl: string;
  // eslint-disable-next-line react/require-default-props
  title?: string;
  description: string;
  // eslint-disable-next-line react/require-default-props
  textButton?: string;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  urlButton?: string;
};

export function ImageWithText({
  imgUrl,
  title,
  description,
  // eslint-disable-next-line comma-dangle
  textButton,
  // eslint-disable-next-line comma-dangle
  urlButton,
}: textProps): ReactElement {
  return (
    <div className="relative w-full">
      <img src={imgUrl} alt="1" className="w-full h-[500px] object-cover" />
      <div className="absolute inset-0 grid w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-3/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            placeholder={undefined}
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
            placeholder={undefined}
          >
            {description}
          </Typography>
          {textButton && (
            <a href={urlButton}>
              <Button size="lg" color="white" placeholder={undefined}>
                {textButton}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
