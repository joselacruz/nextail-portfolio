const projects = [
  {
    title: 'Rank Pelis',
    content:
      'Implementation of a movie site using HTML, CSS, and JavaScript that consume the API (themoviedb) and show the movies organized by category and popularity.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/6F32tkS/rank-pelis.png',
    code: 'https://github.com/joselacruz/Rank-pelis',
    live: 'https://joselacruz.github.io/Rank-pelis',
  },
  {
    title: 'Raking Radios',
    content:
      'Website that displays radio stations using the Radio Info API and saves user data to Firebase.',
    group: 'react',
    img: 'https://i.ibb.co/0jJGpjL/radios.png',
    code: 'https://github.com/joselacruz/ranking-radios',
    live: 'https://ranking-radios.netlify.app',
  },
  {
    title: 'Mood Tracker',
    content:
      'Emotional tracking application that includes sentiment analysis using the OpenAI artificial intelligence API.',
    group: 'react',
    img: 'https://i.ibb.co/09MfM09/mood-track.png',
    code: 'https://github.com/joselacruz/moodTracker',
    live: 'https://jocular-queijadas-9d022c.netlify.app',
  },
  {
    title: 'Easy Sale Register',
    content:
      'Web application to register products for sale with storage in Firebase and uploading images using ImgBB.',
    group: 'react',
    img: 'https://i.ibb.co/Lt7H2cC/easy-sale.png',
    code: 'https://github.com/joselacruz/easySaleRegister',
    live: 'https://easy-sale-register.netlify.app',
  },
  {
    title: 'Rifa Live',
    content:
      'Web application to sell raffles of 200 numbers with purchase function and notifications via WhatsApp.',
    group: 'react',
    img: 'https://i.ibb.co/nnjsPmc/rifa-live.png',
    code: 'https://github.com/joselacruz/rifaLive',
    live: 'https://rifalive.netlify.app',
  },
  {
    title: 'Todo List',
    content:
      'I use React to create a responsive interface that allows adding tasks. I use React components and concepts to add, remove, and mark tasks as complete.',
    group: 'react',
    img: 'https://i.ibb.co/s27Qf36/todo-list.png',
    code: 'https://github.com/joselacruz/Todo-list',
    live: 'https://joselacruz.github.io/Todo-list',
  },
  {
    title: 'Batatabit',
    content:
      'Building a website with a mobile-optimized design and development approach before tackling desktop versions using "Mobile first".',
    group: 'vanillajs',
    img: 'https://i.ibb.co/yn9tkbp/batatabit.png',

    code: 'https://github.com/joselacruz/mobile-frist',
    live: 'https://joselacruz.github.io/mobile-frist',
  },
  {
    title: 'Recipe Blog',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/zWMJXkP/recipe-blog.png',
    code: 'https://github.com/joselacruz/recipe-blog-mobile',
    live: 'https://joselacruz.github.io/recipe-blog-mobile/recipes.html',
  },
  {
    title: 'Checkout',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/ChBwfxg/ckeckout.png',
    code: 'https://github.com/joselacruz/checkout-responsive',
    live: 'https://joselacruz.github.io/checkout-responsive',
  },
  {
    title: 'Edie Homepage',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/zbN07Sy/eddie.png',
    code: 'https://github.com/joselacruz/Edie-homepage',
    live: 'https://joselacruz.github.io/Edie-homepage/',
  },
  {
    title: 'Interior consultant',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/NYvXK6t/interior.png',
    code: 'https://github.com/joselacruz/interior-consultant',
    live: 'https://joselacruz.github.io/interior-consultant/dev.html',
  },
  {
    title: 'Nextail Portfolio',
    content:
      'This is a portfolio created with Nextjs and styled using Tailwind CSS. The minimalist and modern design offers an attractive and responsive user experience.',
    group: 'nextjs',
    img: 'https://i.ibb.co/NmBXnQD/nextail.png',
    code: 'https://github.com/joselacruz/nextail-portfolio',
    live: 'https://nextail-portfolio.vercel.app',
  },
];
export const getProject = {
  allProjects: () => projects,
};
