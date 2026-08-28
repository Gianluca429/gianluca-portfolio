export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface ProjectGallery {
  main: ProjectGalleryImage;

  secondary: [ProjectGalleryImage, ProjectGalleryImage];

  mobile: ProjectGalleryImage;

  mobileText: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;

  description: string;

  image: string;
  imageAlt: string;

  technologies: string[];

  year: string;
  role: string;
  projectType: string;

  overview: string;
  challenge: string;
  approach: string;

  highlights: string[];

  gallery: ProjectGallery;

  demoUrl: string;
}
