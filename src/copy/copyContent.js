/*eslint-disable max-len*/

export default {
  about: {
    header: 'About Hugh',
    description1: `I am a software developer with a passion for creative solutions to
  complex problems. I look forward to innovative challenges, relish
  in the opportunity to learn something new, and love seeing those
  around me grow.`,
    description2: `My road to development started with an itch to create. Whether
  it's painting, drawing, sewing a bow tie, or making a button pixel
  perfect, I get lost building anything and everything. Software
  development satisfies this need and more, providing me with an
  endless ocean of new puzzles to solve.`,
    description3: `Reach me through any of the links below to collaborate, grab
  a coffee, or ponder life's biggest (and smallest) mysteries:`,
    question1: 'Is Mario a really good hero or a very bad plumber?',
    question2: 'If aliens invaded, would they think dogs owned us?',
    question3: 'Is it possible to get the perfect temperature on a Hot Pocket?',
    iconText1: 'Resume',
    iconText2: 'GitHub',
    iconText3: 'Email',
    iconText4: 'LinkedIn',
  },
  blogs: [
    {
      name: 'medium',
      image: 'open-source-blog-image',
      logo: 'medium-logo.png',
      title: 'Finding Solid Ground in the Open Source Jungle',
      description: `Having grappled with JavaScript for the past six months at break-neck speed, I can confidently say that I feel pretty comfortable with the language now. Even if something seems strange and unusual, after a little bit of tinkering, I can figure out what’s going on. With this swagger, I decided it was time to contribute to an open source project. My team and I picked a code base built using React, read all of the docs, sifted through the issues, and bookmarked a few that seemed doable.
  
      Then install happened…`,
      url: 'https://medium.com/@hartigan.hm/finding-solid-ground-in-the-open-source-jungle-dc7a220c6a25',
    },
  ],
  projects: [
    {
      name: 'fwd-component-library',
      image: 'fwd-component-library-screen-shot',
      logo: 'fwd-logo.png',
      title: 'FWD Component Library',
      description:
        'A component library built for and maintained by Featherweight Design in an effort to standardize and expedite the design and development process.',
      areaOfFocus: `The purpose of this component library was not only to expedite the development process, but to prioritize theming and branding, allowing developers to overwrite default SCSS variables which cascade through every component in the library.`,
      techStack: 'TypeScript, React, Storybook, Cypress, GitHub Actions',
      gitHub: 'https://github.com/featherweight-design/component-library',
      liveLink: 'https://featherweight-design.github.io/component-library/?path=/story/docs-intro--page'
    },
    {
      name: 'spirit',
      image: 'spirit-screen-shot',
      logo: 'spirit-white-logo.png',
      title: 'SpIRiT©',
      description: `The SpIRiT© of Occupational Therapy, a process developed by Stackhouse & Graf,  was set up as a clinical reasoning tool to help pediatric therapists 'connect the dots' between how the brain is working or not working in the ways that kids learn, play and develop. The application of the process itself originally involved connecting attributes on multiple pieces of paper using thread, establishing how different parts of the brain were connected. SpIRiT© has been taught to several occupational therapists all over the world, allowing them to establish a clearer picture of where a child may need help. Unfortunately, the way it was constructed forced therapists to rely on paper charts and tangled thread, all while observing children.`,
      description2: `My partner, Rob Morgan, and I saw this as an opportunity to take this incredibly valuable technique and modernize it, allowing therapists to have quicker access to the process itself, as well as making it more organized and easier to learn. Because of the immense amount of data, the process already involves, we opted to use Redux on the frontend and a Node.js server on the backend. The UI/UX is as clean and intuitive as possible, allowing the therapist to easily navigate through the treatment process, while still providing them help along the way. Definitions are provided for unfamiliar terms, printouts are available for completed sessions, graphs show progress from one session to the next, and the app conditionally highlights particular areas to simulate the 'thread connections' of the original process.`,
      areaOfFocus: `Our area of focus was to make this app as accessible as possible, while still maintaining the integrity of the process itself. Our client's, Tracy Stackhouse and Angela Graf, put an immense amount of time and effort into developing SpIRiT© in order to help children and we wanted to make sure that dedication wasn't lost in our application. Prior to and during development, we met with them several times to make sure each and every feature they wanted was accounted for and implemented accordingly.`,
      areaOfFocus2: `Management of state and data was also crucial, which is where keen attention toward the structure of our Redux store and Node.js schemas came into play. With over 150+ pieces of data to potentially account for in a single session, a consistent and predictable flow of data was incredibly important. We spent a large portion of our time making sure that every possible piece of data was trackable and had its place in our Redux store and back-end database.`,
      techStack: 'React, Redux, Router, Victory, Node.js, Knex, PostgreSQL',
      gitHub: 'https://github.com/rmorgan323/spirit-frontend',
      liveLink: 'https://spirit-fe.herokuapp.com/spirit/index',
    },
    {
      name: 'our-planet',
      image: 'our-planet-screen-shot',
      logo: 'our-planet-logo.png',
      title: 'Our Planet',
      description: `While researching for Our Planet it was evident that most information available online about endangered animals was well represented, but tucked away and hidden. Our Planet makes use of a wealth of stunning photos in order to resonate with users in a more immediate way. It is my hope that you walk away with a greater awareness of the impact we have, as humans, to the other species that call this planet home.`,
      areaOfFocus:
        'Our Planet is a web application built as part of the curriculum at Turing School of Software & Design. The project incorporates both a back-end database and a front-end user interface. The back-end repository was built using Node.js and Knex, while the front-end was constructed primarily through React and Redux. All styling was done through Sass and the testing suite runs through Enzyme and Jest.',
      techStack: 'React, Redux, Router, Node.js, Knex, PostgreSQL',
      gitHub: 'https://github.com/HartiganHM/our-planet',
      liveLink: 'http://hartiganhm.com/our-planet/',
    },
    {
      name: 'palette-picker',
      image: 'palette-picker-screen-shot',
      logo: 'palette-picker-logo.png',
      title: 'Palette Picker',
      description:
        'For the little scientist in all of us! Palette Picker is a progressive web app that allows users to save projects and palettes (read as: concoctions and goo) to a database for later access. The design concept is inspired by the immaginative doodles of children, using simple shapes and colors to bring the project to life. Built in jQuery, Node.js, and PostgreSQL.',
      areaOfFocus: `My area of focus for this project was on becoming more familiar with building schemas in Node.js, as well as more complex database endpoints and PostgreSQL commands. I also wanted to refresh my jQuery skills and become reacquainted with the library's unique DOM manipulation techniques. All of the graphics were specialy designed for this project as well, with inspiration coming from minimalist design that painted an imaginative picture with as little complexity as possible. The idea for a child's doodles came when I started to imagination the generation of colors as a mad scientist's experiment.`,
      techStack: 'jQuery, Node.js, Knex, PostgreSQL',
      gitHub: 'https://github.com/HartiganHM/pwa-palette-picker',
      liveLink: 'https://palettepickerpwa.herokuapp.com',
    },
    {
      name: 'swapi',
      image: 'swapi-box-screen-shot',
      logo: 'swapi-logo.png',
      title: 'SWAPI Box',
      description:
        'Built using the Star Wars API as a study in asynchronous JavaScript with nested API calls. Leverages ES6 and hones in on best practices for complex functionality testing.',
      areaOfFocus: `The area of focus for SWAPI Box was to navigate around asynchronous JavaScript that had long load times, while still providing a tangible user experience. Efforts were made to break complex fetch requests into smaller pieces allowing large sets of data to arrive individually and load faster if the completed sooner.`,
      techStack: 'React, SASS, Jest, Enzyme',
      gitHub: 'https://github.com/HartiganHM/swapibox',
      liveLink: 'http://hartiganhm.com/swapibox/',
    },
  ],
};
