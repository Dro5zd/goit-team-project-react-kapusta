
export const device = {
  mobile: `480px`,
  tablet: `768px`,
  desktop: `1280px`,
};

export const device123 = {
  mobile: `@media screen and (min-width: 480px) {
    @content;
  }`,
  tablet: `@media screen and (min-width: 768px) {
    @content;
  }`,
  desktop: `@media screen and (min-width: 1280px) {
    @content;
  }`,
};

// export const mobile = `
//   @media screen and (min-width: 480px) {
//     @content;
//   }
// `
//
// export const tablet = `
//   @media screen and (min-width: 768px) {
//     @content;
//   }
// `
//
// export const desktop = `
//   @media screen and (min-width: 1280px) {
//     @content;
//   }
// `

// @mixin media-min($query) {
//   @media screen  and (min-width: #{$query}) {
//     @content;
//   }
// }
//
// @mixin media-max($query) {
//   @media screen  and (max-width: #{$query}) {
//     @content;
//   }
// }
//
// @mixin retina {
//   @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     @content;
//   }
// }
