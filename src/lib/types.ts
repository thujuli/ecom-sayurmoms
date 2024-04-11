export type Category = {
  id: number;
  name: string;
  description?: string;
  acf: {
    image: string;
  };
};

export type Carousel = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    image: string;
    link: string;
  };
};
