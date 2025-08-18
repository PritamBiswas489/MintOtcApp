import {english, israel, slider, slider1, slider2, slider3} from './images';
import {
  SliderContentItemType,
  CountryDataItemType,
  SlidesDtataItemType,
} from '../screens/intro/introSlider/types/types';

export const languages: CountryDataItemType[] = [
  {
    name: 'English',
    country: english,
    code: 'en',
  },
  {
    name: 'Hebrew',
    country: israel,
    code: 'he',
  },
];
export const Slides: SlidesDtataItemType[] = [
  {
    image: slider,
  },
  {
    image: slider1,
  },
  {
    image: slider2,
  },
  // {
  //   image: slider3,
  // },
];

export const sliderContent: Array<SliderContentItemType> = [
  {
    id: 0,
    title: 'introSlider.sliderHeadingTitle',
    subTitle: 'introSlider.sliderHeading',
    content: 'introSlider.sliderContent',
  },
  {
    id: 1,
    title: 'introSlider.slider1HeadingTitle',
    subTitle: 'introSlider.sliderHeading',
    content: 'introSlider.slider1Content',
  },
  {
    id: 2,
    title: 'introSlider.slider2HeadingTitle',
    subTitle: 'introSlider.sliderHeading',
    content: 'introSlider.slider2Content',
  },
  // {
  //   id: 3,
  //   title: 'introSlider.slider3Heading',
  //   content: 'introSlider.slider3Content',
  // },
];
