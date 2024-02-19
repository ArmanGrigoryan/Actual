export const DisplaySize = {
    NotSupported: 0,
    MobileS: 320,
    MobileM: 375,
    MobileL: 425,
    Tablet: 768,
    ComputerXS: 1024,
    ComputerS: 1100,
    ComputerM: 1440,
};

export const determineDisplaySize = (width) => {
  if (width >= DisplaySize.Tablet) {
    if (width >= DisplaySize.ComputerM) {
        return DisplaySize.ComputerM;
    } else if (width >= DisplaySize.ComputerS) {
      return DisplaySize.ComputerS;
    } else if (width >= DisplaySize.ComputerXS) {
      return DisplaySize.ComputerXS;
    } else {
      return DisplaySize.Tablet;
    }
  } else if (width >= DisplaySize.MobileL) {
      return DisplaySize.MobileM;
  } else {
    return DisplaySize.MobileS;
  }
}

export const ArchiveImages = [
    {
        url: 'media/archive/1.jpg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/2.jpg',
        hasDarkCloseIcon: true,
    },
    {
        url: 'media/archive/15.jpeg',
        hasDarkCloseIcon: true,
    },
    {
        url: 'media/archive/6.jpg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/4.jpg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/12.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/11.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/16.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/3.jpg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/8.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/13.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/10.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/20.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/5.jpg',
        hasDarkCloseIcon: true,
    },
    {
        url: 'media/archive/9.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/18.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/19.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/14.jpeg',
        hasDarkCloseIcon: false,
    },
    {
        url: 'media/archive/21.jpeg',
        hasDarkCloseIcon: true,
    },
    {
        url: 'media/archive/17.jpeg',
        hasDarkCloseIcon: false,
    },
]

export const CourseReviewsSliderSettings = {
  dots: true,
  centerMode: false,
  infinite: true,
  arrows: true,
  lazyLoad: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      }
  ]
};

export const SlideShowSliderSettings = {
  dots: false,
  centerMode: true,
  infinite: true,
  arrows: true,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slides',
};

export const WithLoveNewsSliderSettings = {
  dots: true,
  centerMode: false,
  infinite: true,
  arrows: true,
  loop: true,
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 12000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 575,
          settings: {
              slidesToShow: 1,
              dots: false,
          }
      },
      {
          breakpoint: 1100,
          settings: {
              slidesToShow: 2,
          }
      }
  ]
};

export const TeamSliderSettings = {
    dots: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    arrows: false,
    lazyLoad: true,
    className: "active",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

export const AnimationInterval = 300;
export const HeightScrollAnimationInterval = 2000;
export const HeightScrollAnimationParams = {
    duration: HeightScrollAnimationInterval,
    iterations: 1,
    fill: "forwards"
};
export const FadeAnimationItems = [
  { opacity: 0 },
  { opacity: 1 },
];
export const ForwardAnimationParams = {
  duration: AnimationInterval,
  iterations: 1,
  fill: "forwards",
};
export const FadeAnimationItemsReversed = FadeAnimationItems.slice().reverse();

export class Storage {
  static set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static get = (key) => JSON.parse(localStorage.getItem(key));

  static remove = (key) => localStorage.removeItem(key);

  static clear = () => localStorage.clear();
}
