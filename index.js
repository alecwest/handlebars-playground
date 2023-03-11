const sampleData = {
  education: [
    {
      endDate: "present",
      startDate: "8/1/2020",
      user: "alecwest",
      details: {
        degree: "MS Computer Science",
        "notable-classes": [
          "Systems Issues in Cloud Computing",
          "High Performance Computer Architecture",
          "Human Computer Interaction",
          "Quantum Computing",
        ],
        description: ["Specialization in Computing Systems"],
      },
      id: "1673746185836",
      title: "Georgia Institute of Technology",
      type: "education",
    },
    {
      endDate: "5/4/2019",
      startDate: "8/1/2015",
      user: "alecwest",
      details: {
        degree: "BS Computer Science",
        description: ["Distributed & High Performance Computing Concentration"],
        notableClasses: [
          "Artificial Intelligence",
          "Distributed & Cloud Computing",
        ],
      },
      id: "1673746226169",
      title: "Tennessee Technological University",
      type: "education",
    },
  ],
  employment: [
    {
      endDate: "present",
      startDate: "8/1/2022",
      user: "alecwest",
      details: {
        description: [
          "Troubleshot scale and performance issues experienced by customers",
        ],
        position: "Senior Software Engineer",
      },
      id: "1673747907996",
      title: "Adtran",
      type: "employment",
    },
    {
      endDate: "8/1/2022",
      startDate: "7/1/2021",
      user: "alecwest",
      details: {
        description: [
          "Helped plan/execute a developer-driven improvement of our GUI build pipeline, cutting build times for developers up to 10x and significantly lowering the barrier to entry for new teams.",
          "Prioritized and planned features for the team backlog in coordination with the ART as a SAFe Product Owner",
        ],
        position: "Software Engineer II",
      },
      id: "1673747883391",
      title: "Adtran",
      type: "employment",
    },
    {
      endDate: "7/1/2021",
      startDate: "6/3/2019",
      user: "alecwest",
      details: {
        description: [
          "Learned how to build, run, and troubleshoot a microservice architecture comprised of Angular, Scala, and Python code bases",
          "Building full-stack features to orchestrate customer networks with REST apis",
          "Ran a UX & Accessibility Community of Practice, actively encouraging good accessibility and UX patterns in our Angular framework",
        ],
        position: "Software Engineer",
      },
      id: "1673747855249",
      title: "Adtran",
      type: "employment",
    },
    {
      endDate: "8/10/2018",
      startDate: "5/14/2018",
      user: "alecwest",
      details: {
        description: [
        ],
        position: "Intern",
      },
      id: "1673747932680",
      title: "Joint Warfare Analysis Center",
      type: "employment",
    },
    {
      endDate: "5/4/2019",
      startDate: "1/10/2017",
      user: "alecwest",
      details: {
        description: [
        ],
        position: "Intern",
      },
      id: "1673747782535",
      title: "Tennessee Technological University",
      type: "employment",
    },
    {
      endDate: "5/4/2018",
      startDate: "8/1/2016",
      user: "alecwest",
      details: {
        description: [
        ],
        position: "Co-Op",
      },
      id: "1673747805599",
      title: "Adtran",
      type: "employment",
    }
  ],
  skills: [
    {
      endDate: "present",
      startDate: "1/1/2018",
      user: "alecwest",
      details: { proficiency: 5 },
      id: "1673749250288",
      title: "Angular",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "1/1/2018",
      user: "alecwest",
      details: { proficiency: 5 },
      id: "1673749808349",
      title: "Typescript / Javascript",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "8/1/2014",
      user: "alecwest",
      details: { proficiency: 4 },
      id: "1673749858794",
      title: "Scala / Java",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "8/1/2016",
      user: "alecwest",
      details: { proficiency: 4 },
      id: "1673749858795",
      title: "Unix",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "6/1/2017",
      user: "alecwest",
      details: { proficiency: 4 },
      id: "1673749858796",
      title: "Python",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "1/1/2018",
      user: "alecwest",
      details: { proficiency: 3 },
      id: "1673749835436",
      title: "Kafka / Activemq",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "1/1/2019",
      user: "alecwest",
      details: { proficiency: 3 },
      id: "1673749858793",
      title: "AWS / Azure",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "8/1/2016",
      user: "alecwest",
      details: { proficiency: 3 },
      id: "1673749858799",
      title: "Databases",
      type: "skills",
    },
    {
      endDate: "present",
      startDate: "1/1/2022",
      user: "alecwest",
      details: { proficiency: 3 },
      id: "1674927176658",
      title: "Elasticsearch",
      type: "skills",
    },
  ],
  projects: [
    {
      endDate: "5/1/2022",
      startDate: "3/1/2022",
      user: "alecwest",
      details: {
        description: [
          "Fed OpenSky flight data through Azure services (functions, event hub, HDInsight with Apache Spark, CosmosDB) before displaying queryable, realtime, and historic flight paths on a static Angular page",
        ],
        projectSource: "available upon request",
      },
      id: "1673750380530",
      title: "Flight Path Tracking with Azure",
      type: "projects",
    },
    {
      endDate: "present",
      startDate: "3/1/2020",
      user: "alecwest",
      details: {
        description: [
          "Conveniently update both my resume and website simultaneously.",
          "Website built with angular.",
          "Resume built using a google docs template and google apps script.",
          "All data provided in a single google spreadsheet.",
          "Migrated Data and API to AWS DynamoDB, Lambda, and API Gateway in 2023",
        ],
        projectSource: "https://github.com/alecwest/resume-website",
      },
      id: "1673750380531",
      title: "Resume / Website single source of truth",
      type: "projects",
    },
    {
      endDate: "5/4/2019",
      startDate: "8/1/2018",
      user: "alecwest",
      details: {
        description: [
        ],
        projectSource: "available upon request",
      },
      id: "1673750380533",
      title: "Cummints Falls State Park App",
      type: "projects",
    },
    {
      endDate: "9/27/2018",
      startDate: "10/1/2017",
      user: "alecwest",
      details: {
        description: [
        ],
        projectSource: "https://github.com/alecwest/wumpus-kotlin",
      },
      id: "1673750380534",
      title: "Wumpus World text game",
      type: "projects",
    },
    {
      endDate: "8/1/2019",
      startDate: "6/1/2017",
      user: "alecwest",
      details: {
        description: [
        ],
        projectSource: "https://github.com/AFTERWAKE/IRCBots/tree/master/dad",
      },
      id: "1673750380532",
      title: "IRC bots",
      type: "projects",
    },
  ],
  bio: [
    {
      endDate: "present",
      startDate: "8/1/2016",
      user: "alecwest",
      details: {
        description: [
          "Hi! I'm Alec West.",
          "I'm a software engineer in the Denver area. Thus far in my career, I've become an expert on Angular frontends and accessible web pages, created full stack features in a microservice platform, improved build pipelines, explored scalable services in the cloud, and planned/managed my team's backlog.",
        ],
        images: [
          "https://drive.google.com/uc?id=1g_VnKtKKBEzHF23UfGWYpihP6urEM1iv&export=download",
        ],
        social: [
          { name: "Personal Website", url: "http://www.alecnwest.com" },
          { name: "Github", url: "https://www.github.com/alecwest" },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/alexander-west-587545117/",
          },
        ],
        subtitle: "Senior Software Engineer",
      },
      id: "1673752107528",
      title: "Alec West",
      type: "bio",
    },
  ],
};


/**
 * Assumptions about the data
 * - categories provided include education, employment, skills, projects, bio
 * - entries within each category are correctly ordered (will not be sorted here)
 * - all description information provided will be presented for employment and projects
 */
function buildTemplate(data) {
  const templateHTML = document.getElementById("template").innerHTML;
  const compiledTemplate = Handlebars.compile(templateHTML);
  const completeHTML = compiledTemplate(data);
  document.getElementById("template-output").innerHTML = completeHTML;
}

buildTemplate(sampleData);
