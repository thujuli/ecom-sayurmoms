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

export type Banner = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    image: string;
  };
};

export type Product = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    category: {
      term_id: number;
      name: string;
      slug: string;
      term_group: number;
      term_taxonomy_id: number;
      taxonomy: string;
      description: string;
      parent: number;
      count: number;
      filter: string;
    };
    image: string;
    price: string;
    sold: string;
    rating: string;
    discount?: string;
  };
};
