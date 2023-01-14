export const projects_data = [
    {
        "title": "Portfolio Website",
        "technologies": ['Next.js', 'Sass', 'React Components', 'Web Design', 'Netlify'],
        "poster": require("../../public/portfolio.png"),
        "link": "https://tibor-balint.netlify.app",
        "github": "https://github.com/F3KT0R/portfolio",
        "description": ["It's obviously this website which is a representation of my work.", "This is the first time I've used Next.js.", "Created my own design using Adobe Photoshop.", "It's hosted on Netlify.", "Constantly being updated as I create more and more projects and learn new things."]
    },
    {
        "title": "Income Tax Calculator",
        "technologies": ['React.js', 'TailwindCSS', 'Webpack', 'Web Design', 'Netlify'],
        "poster": require("../../public/tax-calculator.png"),
        "link": "https://net-income.netlify.app",
        "github": "https://github.com/F3KT0R/tax-calculator",
        "description": ["This was the first project that I've created from scratch without CRA.", "It is a Webpack bundled project using Yarn as a package manager hosted on Netlify.", "Adding my own small local JSON data and creating custom utility components.", "The design of the site was influenced by a template project, but the current look is uniquely designed by me in Adobe Photoshop.", "This is also the first project that I've used TailwindCSS with."]
    },
    {
        "title": "Watchflix",
        "technologies": ['React.js', 'React Hooks', 'Components', 'TMDB API', 'Netlify'],
        "poster": require("../../public/watchflix.png"),
        "link": "https://watchlix-webapp.netlify.app",
        "github": "https://github.com/F3KT0R/watchflix",
        "description": ["This was my Graduation Thesis at the University of Szeged.", "It is a Progressive Web Application developed by me in ReactJS.", "Uses data from The Movie Database's API service.", "It's the first project that I've hosted dinamically on Netlify.", "It is installable and works offline, hence it performs local caching."]
    },
    {
        'title': 'Medieval Fort',
        'technologies': ['HTML5', 'CSS3', 'ThreeJS', 'Blender', 'Netlify'],
        'poster': require('../../public/medieval_fort.png'),
        'link': 'https://middleagesfort.netlify.app',
        'github': 'https://github.com/F3KT0R/middleagefort',
        'description': ["This was a project I've created for a course at University.", "The main 3D elements were created in Blender.", "The rest of the work was done in ThreeJS.", "It has been hosted on Netlify so it is made accessible to anyone.", "It has keyboard commands attached to it, but the explanation is written in Hungarian."]
    }
];

export const experience_data = [
    {
        'title': 'Zeto EU Kft.',
        'year': '1st October 2021 - 1st September 2022',
        'role': 'Quality Assurance Engineer', 
        'address': 'Hungary, Szeged, Back Bernát Street 6', 
        'link': 'https://zeto-inc.com/',
        'description': ['Internship for 4 months as a: Quality Assurance Intern', 'Creating Custom Functions in Google Apps Script', 'Testing and Validation of Custom Functions', 'Key Performance Indicators Manager']
    },
    {
        'title': 'Ovation BBDO',
        'year': '1st July 2020 - 1st June 2022',
        'role': 'Translator / Social Media Manager', 
        'address': 'Serbia, Belgrade Velisava Vulovića Street 16', 
        'link': 'https://ovation.rs/en/',
        'description': ['Translation of advertisement content from English to Hungarian', 'Community Management', 'Writing reports and summing up monthly metrics', 'Technical Support']
    },
    {
        'title': 'Bemeding',
        'year': 'August 2020 & August 2021',
        'role': 'Webshop Administrator', 
        'address': 'Serbia, Novi Bečej, Maršala Tita Street 10', 
        'link': 'https://www.webapoteka.rs/',
        'description': ['Managing the webshop', 'Fulfilling orders', 'Packaging and sending orders', 'Customer Support']
    }
]