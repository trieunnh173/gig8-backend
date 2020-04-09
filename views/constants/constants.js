import tutorial1 from '../assets/images/tutorial/group-6.png';
import tutorial2 from '../assets/images/tutorial/group-9.png';
import tutorial3 from '../assets/images/tutorial/group-10.png';
import tutorial4 from '../assets/images/tutorial/group-12.png';
import tutorial5 from '../assets/images/tutorial/group-11.png';
import relatedStyle1 from '../assets/images/related/rectangle1.png';
import relatedStyle2 from '../assets/images/related/rectangle2.png';
import relatedStyle3 from '../assets/images/related/rectangle3.png';
import relatedStyle4 from '../assets/images/related/rectangle4.png';
import relatedStyle5 from '../assets/images/related/rectangle5.png';
import relatedStyle from '../assets/images/related/rectangle.png';

export const TABLET_MIN_WIDTH = 768;
export const DESKTOP_MIN_WIDTH = 1024;
export const SETTING_CAROUSEL_PRODUCTS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: DESKTOP_MIN_WIDTH,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1
      }
    },
    {
      breakpoint: TABLET_MIN_WIDTH,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }
  ]
};
export const SETTING_CAROUSEL_MOST_VIEW = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: DESKTOP_MIN_WIDTH,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1
      }
    },
    {
      breakpoint: TABLET_MIN_WIDTH,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }
  ]
};
export const SETTING_CAROUSEL_INTERVIEW = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  arrows: true,
}
export const SETTING_CAROUSEL_TOPIC = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: DESKTOP_MIN_WIDTH,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1
      }
    },
    {
      breakpoint: TABLET_MIN_WIDTH,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }
  ]
};
export const TUTORIAL_STEP = [
  {
    image: tutorial1,
    title: "Step1: Searching Job",
    description: "When you've got a project, you can searching it with keyword related project, this is help you approach some idea, trend and awesome project provided by our freelancer"
  },
  {
    image: tutorial2,
    title: "Step2: Choose Candidate",
    description: "Choose a style to do your job, the selected candidate will have many options on how to work as well as the price available, you don't need to negotiate just ?pick a offer you want and typing some of the request. Our Freelancer will handle that request."
  },
  {
    image: tutorial3,
    title: "Step3: Pick a Job",
    description: "Looking at dozens of offers, you have finally selected an appropriate offer, you can see about the details of the offer  and review of other customers."
  },
  {
    image: tutorial4,
    title: "Step4: Offer Payment",
    description: "Outsourcing increases the undesirable risk we often see is that the bad freelancer has the purpose of cheating to steal money from good customers. At Gigs we guarantee successful transactions, Payment is released to the freelancer once you pleased and approve the work you get."
  },
  {
    image: tutorial5,
    title: "Step5: Job Delivery",
    description: "Completed work will be notified by email attached to the work file, if you are not satisfied with the what freelancer maked , you can still reject their work, typing your feedback and they will provide another good solution for you."
  }
]
export const RELATED_STYLE = [
  {
    image: relatedStyle,
    title: "3D rendering and perspective",
  },
  {
    image: relatedStyle1,
    title: "Interior design of houses and apartments",
  },
  {
    image: relatedStyle2,
    title: "Exterior design"
  },
  {
    image: relatedStyle3,
    title: "House construction design",
  },
  {
    image: relatedStyle4,
    title: "Virtual Staging",
  },
  {
    image: relatedStyle5,
    title: "Planning & Design",
  }
]


