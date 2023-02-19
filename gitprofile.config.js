// gitprofile.config.js

const config = {
  github: {
    username: 'tonyhollaar', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tony-hollaar-819a9bb8',
    twitter: 'TonyHollaar',
    medium: 'thollaar',
    website: 'https://www.tonyhollaar.com',
    email: 'thollaar@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'MySQL',
    'PostgreSQL',
	'VBA',
	'Tableau',
	'PowerBi',
	'Streamlit',
	'PySpark',
	'H20',
	'SPSS',
	'Stata',
	'MS Office'
  ],
  experiences: [
    {
      company: 'Conn\'s Homeplus',
      position: 'Manager Data Engineering',
      from: 'June 2023',
      to: 'November 2023',
      companyLink: 'https://www.conns.com',
    },
    {
      company: 'Broadridge Financial Solutions, Inc.',
      position: 'Team Lead/Support Analyst',
      from: 'September 2022',
      to: 'February 2021',
      companyLink: 'https://www.broadridge.com/',
    },
    {
      company: 'Fairfield University',
      position: 'Institutional Research Intern',
      from: 'December 2020',
      to: 'February 2021',
	  position: 'Python Fundamentals - Graduate Teaching Assistant',
      from: 'July 2020',
      to: 'August 2020',
	  position: 'Graduate Research Assistant',
      from: 'October 2019',
      to: 'August 2020',
      companyLink: 'https://www.fairfield.edu/',
    },
    {
      company: 'AP Support',
      position: 'Consultant',
      from: 'February 2016',
      to: 'September 2017',
      companyLink: 'https://apsupport.nl/',
    },
    {
      company: 'E.C. Ortiz & Co., LLP',
      position: 'Accounting and Auditing Intern',
      from: 'February 2016',
      to: 'September 2017',
      companyLink: 'https://rothcocpa.com/announcement/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Fairfield University',
      degree: 'MSc Business Analytics',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Utrecht University',
      degree: 'MSc International Economics and Business with the track: International Financial Economics',
      from: '2012',
      to: '2013',
    },
	{
      institution: 'Utrecht University',
      degree: 'BSc Economics and Business Economics',
      from: '2007',
      to: '2011',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Webscraping',
      description:
        'Webscraping historical oil prices, utilizing US Labor Statistics API and creating stylized visualizations with Plotly Package',
      imageUrl: 'https://github.com/tonyhollaar/tonyhollaar.github.io/blob/main/img/portfolio_stockprice.jpg',
      link: 'https://www.tonyhollaar.com/portfolio/webscraping',
    },
    {
      title: 'Time Series Forecasting with Music',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: '<img src="img/portfolio_robotpiano.jpg" alt="time_series_music" class="inline"/>',
      link: 'https://www.tonyhollaar.com/portfolio/project-one-ephnc-hk6rb',
    },
    {
      title: 'Visualizations',
      description:
        'One technique is a Bar Chart Race as a visual way to display data changing over time in the form of an animated bar chart',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.tonyhollaar.com/portfolio/visualizations',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'thollaar', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#CFD8C7',
      secondary: '#212E21',
      accent: '#e8d03a',
      neutral: '#2A2730', //letters
      'base-100': '#F4F3E8',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
