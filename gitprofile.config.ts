// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ebertug', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ebertug/OOP_Python','ebertug/leetCode','ebertug/python101','ebertug/eyupYenikomsu'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "'Siyah-Inci' Remotyl Operated Vehicle",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D2DAQERSh3FvGP7_A/profile-treasury-image-shrink_800_800/0/1701975799350?e=1710781200&v=beta&t=gDKuQhROesdHISE8AIKMi87eHCqGDi3SBq3KepHsrpA',
          link: 'https://drive.google.com/drive/folders/1N_AgGX1PaQ9ILdg9lWVB_lqIYKEagD-z?usp=drive_link',
        },
        {
          title: "'Ice' Remotly Operated Vehicle",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D2DAQGje3m036QrpA/profile-treasury-image-shrink_1280_1280/0/1710080373727?e=1710784800&v=beta&t=qHps4nIVrCCyZkUBw-diqcWl3uX73IY0vGk3NzqiF08',
          link: 'https://drive.google.com/drive/folders/1xo6rVIvTM_rYHamDWkefZCEKXg8To6M2?usp=drive_link',
        },
        {
          title: "'Kayra' Remotyl Operated Vehicle",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D2DAQERSh3FvGP7_A/profile-treasury-image-shrink_800_800/0/1701975799350?e=1710781200&v=beta&t=gDKuQhROesdHISE8AIKMi87eHCqGDi3SBq3KepHsrpA',
          link: 'https://drive.google.com/drive/folders/1N_AgGX1PaQ9ILdg9lWVB_lqIYKEagD-z?usp=drive_link',
        },
        {
          title: "'Teknogaraj' Remotly Operated Vehicle",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D2DAQGje3m036QrpA/profile-treasury-image-shrink_1280_1280/0/1710080373727?e=1710784800&v=beta&t=qHps4nIVrCCyZkUBw-diqcWl3uX73IY0vGk3NzqiF08',
          link: 'https://drive.google.com/drive/folders/1xo6rVIvTM_rYHamDWkefZCEKXg8To6M2?usp=drive_link',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Eyüp Yenikomşu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'eyupyenikomsu',
    twitter: 'eyupbertu',
    instagram: 'eyupbertug',
    phone: '+90 535 736 00 55',
    email: 'eyup.bertu@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1L_5fFYXHT6U9eECgyRrqKX6Fca3KPkgN/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C++',
    'C#',
    'HTML',
    'CSS',
    'Unity',
    'Git',
    'Arduino',
    'Raspberry Pi',
  ],
  experiences: [
    {
      company: 'UnifyBytes',
      position: 'Intern',
      from: 'Aug - 2023',
      to: 'Oct - 2023',
    },
  ],
  certifications: [
    {
      name: 'GameDev.tv - C# Unity Game Developer 2D',
      body: 'Complete C# Unity Game Developer 2D Certificate',
      year: 'Dec 2023',
      link: 'https://www.linkedin.com/in/eyupyenikomsu/details/certifications/1635553092848/single-media-viewer/?profileId=ACoAADWtyGMBt9XKp6U7PGCzBDAGh5BVdIt03ZY',
    },
  ],
  educations: [
    {
      institution: 'Mustafa Gurbuz Necat Bayel Anadolu Lisesi',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Hasan Kalyoncu University',
      degree: 'Bachelor',
      from: '2020',
      to: '2025',
    },
  ],
  
  // Display articles from your medium or dev account. (Optional)

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'light',
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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
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

  enablePWA: true,
};

export default CONFIG;
