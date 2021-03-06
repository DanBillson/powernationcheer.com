import Wiggle from '../assets/images/wiggle.svg';
import Apparel from '../assets/images/apparel.jpg';
import TShirt from '../assets/images/t-shirts.jpg';
import Spirit from '../assets/images/spirit.jpg';
import Practise from '../assets/images/practise.jpg';
import Baseball from '../assets/images/vest2.JPG';
import Hoodie from '../assets/images/hoodie.jpg';
import Sliders from '../assets/images/slider.jpg';

const overlay = `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)),`;

export const landing = {
    lineOne: 'Cheer',
    lineTwo: 'Apparel',
    pattern: `url(${ Wiggle })`,
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`
}

export const subNav = [{
    name: 't-shirts & vests',
    link: '/apparel/t-shirts'
}, {
    name: 'spirit jerseys',
    link: '#spirit-jerseys'
}, {
    name: 'practise wear',
    link: '#practise-wear'
}, {
    name: 'baseball jerseys',
    link: '#baseball-jerseys'
}, {
    name: 'hoodies & sweats',
    link: '#hoodies'
}, {
    name: 'backpacks & accessories',
    link: '#backpacks'
}];

export const blockOne = [{
    name: 't-shirts & vests',
    link: '/apparel/tshirts',
    image: `${ overlay } url(${ TShirt })`
},{
    name: 'spirit jerseys',
    link: '/apparel/spirit',
    image: `${ overlay } url(${ Spirit })`
},{
    name: 'practise wear',
    link: '/apparel/practise',
    image: `${ overlay } url(${ Practise })`
}];

export const blockTwo = [{
    name: 'baseball jerseys',
    link: '/apparel/baseball',
    image: `${ overlay } url(${ Baseball })`
},{
    name: 'hoodies & sweats',
    link: '/apparel/hoodies',
    image: `${ overlay } url(${ Hoodie })`
},{
    name: 'backpacks & accessories',
    link: '/apparel/backpacks',
    image: `${ overlay } url(${ Sliders })`
}];

export const tshirts = {
    id: 't-shirts',
    title: 'T-Shirts & Vests',
    text: `We specialise in creating team t-shirts & Vests designs for teams in the UK, Europe and even Worldwide. 
    Designs for t-shirts are free of charge when ordering through us! Designs as standard have 2 print colours but we can provide design that print up to 5 colours per side, we also offer glitter inks to add some extra sparkle to your designs.`,
    list: ['Free design', 'Large print area', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ TShirt })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=T-shirts enquiry`,
        text: 'Order Now'
    },
    reverse: false
};

export const spirit = {
    id: 'spirit-jerseys',
    title: 'Spirit Jerseys',
    text: `Spirit jerseys can range in designs using screen printing and vinyl to get the perfect look your team want.
    We offer spirit jersey in standards colours: Black, white, grey, pink, white with black stripes (on the sleeves) and Navy with white stripes (on the sleeves).`,
    list: ['2 print colours as standard', '10 working day turnaround*', 'High quality prints'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Spirit })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=Spirit jersey enquiry`,
        text: 'Order Now'
    },
    reverse: true
};

export const practise = {
    id: 'practise-wear',
    title: 'Practise Wear',
    text: `We offer a range of sublimated practice wear under this we cover sports bras, shorts, leggings, jackets, baseball jersey, basketball vest, vests and t-shirts. This can be completely customised to your teams needs, offering various styles, metallics and rhinestone detailing. 
    Designs for sublimated practice wear only cost £35, this does not give you the right to use the design elsewhere!`,
    list: ['No limit to colours', '6-8 working week turnaround*', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Practise })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=Practise wear enquiry`,
        text: 'Order Now'
    },
    reverse: false
};

export const baseball = {
    id: 'baseball-jerseys',
    title: 'Baseball Jerseys',
    text: `We specialise in creating products unique and personal to each customer, we offer a range of baseball jerseys from a variety of standard plain colours to sublimated full personalised jerseys. Designs for t-shirts are free of charge when ordering through us.
    Standard baseball jerseys have two colours as standard however there is no limit to what can be created, as we offer a range of glitter and plain vinyl colours.`,
    list: ['Free design', 'Plain and glitter colours available', 'High quality prints'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Baseball })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=Baseball jersey enquiry`,
        text: 'Order Now'
    },
    reverse: true
};

export const hoodies = {
    id: 'hoodies',
    title: 'Hoodies & Sweats',
    text: `We specialise in creating team hoodies and sweatshirt designs for teams in the UK, Europe and even Worldwide. Designs for hoodies and sweatshirts are free of charge when ordering through us! 
    Designs as standard have 2 print colours but we can provide design that print up to 5 colours per side, we also offer glitter inks to add some extra sparkle to your designs. We offer a variety of colours in all hoodies and sweatshirts. We also offer female cropped pull over and zipped hoodies.`,
    list: ['2 print colours as standard', '10 working day turnaround*', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Hoodie })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=Hoodies enquiry`,
        text: 'Order Now'
    },
    reverse: false
};

export const backpacks = {
    id: 'backpacks',
    title: 'Backpacks & Accessories',
    text: `All our backpacks can be customised to each team, we offer bags in a variety of colours and a range of sizes. 
    As well as our customised backpacks we offer accessories such as; personalised bum-bags, sliders, headbands and socks.`,
    list: ['Free design', '2 print colours as standard', 'Personalisation on all accessories'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Sliders })`,
    cta: {
        link: `mailto:info@powernationcheer.com?subject=Backpack enquiry`,
        text: 'Order Now'
    },
    reverse: true
};

