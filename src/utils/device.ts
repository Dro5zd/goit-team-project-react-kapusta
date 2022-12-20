const size = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
};

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};


// @mixin media-min($query) {
// @media screen  and (min-width: #{$query}) {
//     @content;
//     }
// }
//
// @mixin media-max($query) {
// @media screen  and (max-width: #{$query}) {
//     @content;
//     }
// }
//
// @mixin retina {
// @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     @content;
//     }
// }