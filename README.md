# Prueba técnica Frontend - Hawkers

<iframe src="https://giphy.com/embed/D16XHdsB1PBxm" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/80s-1980s-tom-cruise-D16XHdsB1PBxm">via GIPHY</a></p>

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


## Project setup
- The base project is created with Angular.
- The local Git repository is initialized.
- The remote GitHub repository is created.
- The initial project setup is pushed for the first time.


## ***PR-1***

- The local startup of the Angular project is verified.
- Angular CLI is configured for local development.
- Tailwind CSS is installed in the project.
- Tailwind is integrated through PostCSS.
- Global styles are prepared to begin the layout implementation.

## ***PR-2***

- The default Angular template is removed.
- The application structure is organized by feature.
- The main homepage components are created.
- A base homepage composition is implemented.
- The product model is prepared for later data integration.

## ***PR-3***

- Added a real local video to the hero section
- Implemented the promotional banner composition
- Adjusted the top layout proportions to better match the provided design

## ***PR-4***

- The product section is connected to the real JSON dataset.
- The product cards are redesigned to better match the provided layout.
- A temporary limit of 6 rendered products is applied for the current visual phase.

## ***PR-5***

- Added a product modal opened from the product listing
- Implemented product detail rendering inside the modal
- Added a simple zoom interaction for the product image
- Added close interactions through button, overlay click, and Escape key
- Added local fallback images to handle failures from the external image server

## ***PR-6***

- Implemented incremental product loading in blocks of 10 while scrolling to the end of the listing
- Stabilized the infinite scroll observer behavior to avoid chained over-loading
- Configured Open Sans as the global application font

## ***PR-7***

- Refined responsive layout for the hero, promotional grid, product listing, and product modal (breakpoints, spacing, and modal scroll on small viewports).
- Added a scroll-to-top floating control with smooth scrolling and different scroll thresholds for mobile, tablet, and desktop.
- Introduced a shared UI layer with a reusable Spinner component.

- Improved hover and focus-visible states on product cards, the scroll-to-top button, and modal controls for clearer keyboard and pointer feedback.
- Adjusted the product modal so long titles no longer collide with the close button (extra padding and break-words on desktop layouts).
