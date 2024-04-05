const projects = [
  {
    title: 'Batatabit',
    content:
      'Building a website with a mobile-optimized design and development approach before tackling desktop versions using "Mobile first".',
    group: 'vanillajs',
    img: 'https://i.ibb.co/yn9tkbp/batatabit.png',
  },
  {
    title: 'Todo List',
    content:
      'I use React to create a responsive interface that allows adding tasks. I use React components and concepts to add, remove, and mark tasks as complete.',
    group: 'react',
    img: 'https://i.ibb.co/s27Qf36/todo-list.png',
  },
  {
    title: 'Rank Pelis',
    content:
      'Implementation of a movie site using HTML, CSS, and JavaScript that consume the API (themoviedb) and show the movies organized by category and popularity.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/6F32tkS/rank-pelis.png',
  },
  {
    title: 'Mood Tracker',
    content:
      'This application serves as a Mood Tracker, allowing you to log your emotions and diary entries. It also incorporates sentiment analysis through OpenAI  artificial intelligence API to determine if your written content aligns with the selected emotion.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/09MfM09/mood-track.png',
  },
  {
    title: 'Easy Sale Register',
    content:
      'is a web application designed to help you register the products you want to sell. The app allows you to enter product details such as title, product URL, price, sales price, description, and images. Data is stored in Firebase, and images are uploaded using the ImgBB',
    group: 'react',
    img: 'https://i.ibb.co/Lt7H2cC/easy-sale.png',
    code: 'https://github.com/joselacruz/easySaleRegister',
    live: 'https://easy-sale-register.netlify.app',
  },
  {
    title: 'Raking Radios',
    content:
      'Ranking Radios is a website that uses the Radio Info API  to display radio stations. It also uses Firebase to store user data, such as recently visited radio stations and those marked as favorites. It does not require authentication, since a unique ID is created using the UUID library and saved in the browsers LocalStorage.',
    group: 'react',
    img: 'https://i.ibb.co/0jJGpjL/radios.png',
    code: 'https://github.com/joselacruz/ranking-radios',
    live: 'https://ranking-radios.netlify.app',
  },
  {
    title: 'Rifa Live',
    content:
      'Rifa Live is a web application designed to help sell 200-number raffles. The application offers an interface to display the prize and the 200 available numbers. Users can view the availability of numbers and purchase one by clicking the corresponding button. Once a number is available, clicking on it will send a message to the raffle administrator via WhatsApp to complete the purchase',
    group: 'react',
    img: 'https://i.ibb.co/nnjsPmc/rifa-live.png',
    code: 'https://github.com/joselacruz/rifaLive',
    live: 'https://rifalive.netlify.app',
  },
  {
    title: 'Recipe Blog',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/zWMJXkP/recipe-blog.png',
  },
  {
    title: 'Checkout',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/ChBwfxg/ckeckout.png',
  },
  {
    title: 'Edie Homepage',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io.',
    group: 'vanillajs',
    img: 'https://i.ibb.co/zbN07Sy/eddie.png',
  },
  {
    title: 'Interior consultant',
    content:
      'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
    group: 'vanillajs',
    img: 'https://i.ibb.co/NYvXK6t/interior.png',
  },
];
export const getProject = {
  allProjects: () => projects,
};
