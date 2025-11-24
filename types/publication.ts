export interface Publication {
  id: string;
  title: string;
  price: string;
  description: string;
  author: string;
  introduction: string;
  specifications: {
    cover: string;
    dimensions: string;
  };
  isbn: string;
  designer: string;
  edition: string;
  images: string[];
}