import React from 'react';
import ImageCaption from '.';

export default (
  <ImageCaption
    caption="My caption"
    sources={[
      { url: 'https://placehold.it/640x470', width: 640, height: 360, dppx: 1 },
      { url: 'https://placehold.it/1024x768', width: 512, height: 384, dppx: 2 },
      { url: 'https://placehold.it/512x384', width: 512, height: 384, dppx: 1 },
      { url: 'https://placehold.it/768x768', width: 384, height: 384, dppx: 2 },
      { url: 'https://placehold.it/384x288', width: 384, height: 384, dppx: 1 },
      { url: 'https://placehold.it/512x768', width: 256, height: 384, dppx: 2 },
      { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
    ]}
    alt="this is the image description"
  />
);
