// ============================================================
// projects.js — All project data for the Projects page
// ============================================================
// HOW IT WORKS:
//   Each object in projectSections = one carousel row.
//   Each project inside it = one card in that row.
//   Each link inside a project = one row in the modal popup.
//
// TO ADD A NEW PROJECT:
//   1. Find the right section (or create a new one at the bottom)
//   2. Copy an existing project object and update its fields
//   3. Add the card image to public/images/
//
// TO ADD A NEW SECTION:
//   Copy a whole { title, className, titleClass, projects: [...] }
//   block, give it a unique className, and add matching CSS in
//   global.css under section 6 (e.g. .myNewSection { padding-top: 5% })
//
// LINK TYPES:
//   - Standard link: { label, image, description, url }
//   - Embedded video: { label, type: "video", embedUrl, description }
// ============================================================

export const projectSections = [

    // ── SELF-LEARNED PROJECTS ────────────────────────────────────
  {
    title: "Projects for Self-Learning & Exploration",
    className: "learning",
    titleClass: "tksTitle",
    projects: [
      {
        id: "phoenix",
        title: "Operation Phoenix: A Personal Fitness Tracker",
        image: "/images/self/phoenix.png",
        description: " 'Symbolically, the phoenix represents rebirth, resilience, transformation, and rising from adversity,' which is why I chose this name for my fitness tracker. This project was a personal one that I created to track my workouts each week and get reminders to drink water and eat timely meals.",
        links: [
          {
            label: "Website Link",
            image: "/images/thumbnails/website.png",
            description: "The actual website for this project.",
            url: "https://reentika.github.io/operation-phoenix/",
          },
          {
            label: "Code",
            image: "/images/thumbnails/code.png",
            description: "This link provides the code used for this project.",
            url: "https://github.com/reentika/operation-phoenix.git",
          },
        ],
      },
      
      {
        id: "perry",
        title: "Perry",
        image: "/images/self/perry.png",
        description: "This small project was part of Cougar's STEM Outreach Club, the STEM Club at Killarney Secondary School. The intent was to engage youth with STEM projects because they do not always have to be complicated!",
        links: [
          {
            label: "Video - How it works",
            type: "video", // ← embedded YouTube, not a link card
            embedUrl: "https://www.youtube.com/embed/cu8ESNC1tiw?autoplay=1&mute=1&loop=1&playlist=cu8ESNC1tiw",
            description: "This is Perry at the club fair!",
          },
          {
            label: "Code",
            image: "/images/thumbnails/code.png",
            description: "This link provides the code used for this project.",
            url: "https://github.com/reentika/CSOC-",
          },
        ],
      },
      {
        id: "nlp",
        title: "Language Detection Model",
        image: "/images/self/NLP.png",
        links: [
          {
            label: "Article",
            image: "/images/thumbnails/article.png",
            description: "This article goes through the process of creating a language detection model step by step.",
            url: "https://reentikaawasthi.medium.com/language-detection-model-using-nlp-580e411e4bcc",
          },
          {
            label: "Video Playlist",
            image: "/images/thumbnails/video.png",
            description: "This playlist walks through the entire process of creating this language detection model.",
            url: "https://www.youtube.com/watch?v=FQYilmEvxNg&list=PLcosB43agtWyVzHf9Bot4YV13ptxyYncc",
          },
          {
            label: "Code",
            image: "/images/thumbnails/code.png",
            description: "This link provides the code for this model.",
            url: "https://github.com/reentika/lang-detection-model",
          },
        ],
      },
      {
        id: "keychain",
        title: "Coca Cola Keychain",
        image: "/images/self/keychain.png",
        description: "As a superfan of Coca Cola, I chose to create this keychain for print for one of my courses. This was created on Onshape.",
        links: [
          {
            label: "Onshape Link",
            image: "/images/thumbnails/3d.png",
            description: "This is the modelled version of the keychain.",
            url: "https://cad.onshape.com/documents/d55d784451626357aac3ff8f/w/b53afa9a53b3baf4d3f563fa/e/ca5c2144d54e3eb4b6d36a56?renderMode=0&uiState=6819a344709a361113147031",
          },
        ],
      },
      {
        id: "diggy",
        title: "Diggy Bank",
        image: "/images/self/diggybank.png",
        links: [
          {
            label: "Code Link",
            image: "/images/thumbnails/code.png",
            description: "This is the first code for this created in 2018. I will be re-doing this in Summer 2025!",
            url: "https://github.com/reentika/diggy-bank",
          },
        ],
      },
    ],
  },

  // ── UBC SAILBOT ─────────────────────────────────────────────
  {
    title: "UBC Sailbot Work",
    className: "sailbot",       // matches CSS class in global.css
    titleClass: "sailbotTitle", // matches CSS class in global.css
    projects: [
      {
        id: "wire",                          // must be unique — used as modal ID
        title: "Building a Wire Fatigue Tester",
        image: "/images/wire.png",           // card thumbnail in public/images/
        links: [
          {
            label: "Onshape Link",
            image: "/images/thumbnails/3d.png",
            description: "This is the servo motor attachment, with adjustments for a wire to go through the pentagon-like shape.",
            url: "https://cad.onshape.com/documents/896ad8a1f97e0518fcf7861c/w/f3a7b24a5cc48f1a2c315825/e/ec0bef6dd4524cd8bfad0602?renderMode=0&uiState=68d4c081dcbdf5e045b88aa5",
          },
        ],
      },
    ],
  },

  // ── FIRST YEAR ENGINEERING (APSC 100/101) ───────────────────
  {
    title: "First Year Engineering Course Work",
    className: "apsc100",
    titleClass: "apscTitle",
    projects: [
      {
        id: "mod1",
        title: "Module 1: Designing a Cardboard Chair",
        image: "/images/mod1.png",
        links: [
          {
            label: "Poster",
            image: "/images/thumbnails/eposter.png",
            description: "This poster describes the cardboard chair in detail and the approach we used to finalize this. The missing spaces were 3D prototypes placed on the actual poster.",
            url: "/images/module1/1_eposter.pdf",
          },
          {
            label: "Video",
            image: "/images/thumbnails/pitchvideo.png",
            description: "This video is a pitch designed for the NGO relating to the chair and its assembly.",
            url: "https://youtu.be/flUDwXK06GA",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#", // ← update when article is published
          },
        ],
      },
      {
        id: "mod2",
        title: "Module 2: Selecting a Bicycle Lane in Vancouver",
        image: "/images/mod2.png",
        links: [
          {
            label: "Slide Deck",
            image: "/images/thumbnails/slidedeck.png",
            description: "This is the slide deck we presented in class, describing our choice.",
            url: "/images/module2/2_slidedeck.pdf",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#",
          },
        ],
      },
      {
        id: "mod3",
        title: "Module 3: Creating an Adaptive Device to use a Hose",
        image: "/images/mod3.png",
        links: [
          {
            label: "Promo Sheet",
            image: "/images/thumbnails/promosheet.png",
            description: "This is a promo sheet we designed to display our adaptive device.",
            url: "/images/module3/3_promosheet.pdf",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#",
          },
        ],
      },
      {
        id: "mod4",
        title: "Module 5: Creating an Automated Claw",
        image: "/images/mod4.png",
        links: [
          {
            label: "E-Poster",
            image: "/images/thumbnails/eposter.png",
            description: "This is an electronic poster that describes our design process and end results.",
            url: "https://youtu.be/XVfHB8A-Lc0",
          },
          {
            label: "TinkerCAD",
            image: "/images/thumbnails/tinkercad.png",
            description: "This is our Arduino mechanism's online simulation.",
            url: "https://www.tinkercad.com/things/eJ8UkvLRO2s-claw-design-n-1prototype-1?sharecode=4FxoeJNcAL0ZtenBFRxmsmor3DbVJC-VLU3WyZUVOCg",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#",
          },
        ],
      },
      {
        id: "mod5",
        title: "Module 6: Mine Site Selection",
        image: "/images/mod5.png",
        links: [
          {
            label: "Poster",
            image: "/images/thumbnails/slidedeck.png",
            description: "This is our pitch deck to describe our mine site selection and our process.",
            url: "/images/module6/6_slidedeck.pdf",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#",
          },
        ],
      },
      {
        id: "mod6",
        title: "Module 7: Rain Water Harvesting System",
        image: "/images/mod6.png",
        links: [
          {
            label: "E-Poster",
            image: "/images/thumbnails/eposter.png",
            description: "This is our E-Poster, detailing the system and its design parameters.",
            url: "/images/module7/7_eposter.pdf",
          },
          {
            label: "Article",
            image: "/images/slide.png",
            description: "This is a reflective article that goes in-depth about APSC 100/101 concepts applied.",
            url: "#",
          },
        ],
      },
    ],
  },

  // ── THE KNOWLEDGE SOCIETY ────────────────────────────────────
  {
    title: "The Knowledge Society Projects",
    className: "tks",
    titleClass: "tksTitle",
    projects: [
      {
        id: "zinnix",
        title: "Moonshot Company: Zinnix",
        image: "/images/tks/zinnix.png",
        links: [
          {
            label: "Video",
            image: "/images/thumbnails/pitchvideo.png",
            description: "This video is our 90-second pitch which goes over the process in detail.",
            url: "https://www.youtube.com/watch?v=TRJiZAS0EpU&themeRefresh=1",
          },
          {
            label: "Slidedeck",
            image: "/images/thumbnails/slidedeck.png",
            description: "This slide deck includes details relating to our business strategy, the science behind our solution, and mock-ups created using Blender.",
            url: "/images/tks/ZinniX.pdf",
          },
        ],
      },
      {
        id: "walmart",
        title: "TKS Global Challenge: Reinventing Walmart Retail Stores",
        image: "/images/tks/walmart.png",
        description: "A set of solutions to rebrand Walmart to use more sustainable and easy practices for the wellbeing of customers, employees, and the planet.",
        links: [
          {
            label: "Slidedeck",
            image: "/images/thumbnails/slidedeck.png",
            description: "This slide deck includes the problem statement as well as our solution with detailed mock-ups.",
            url: "/images/tks/walmart_store.pdf",
          },
        ],
      },
      {
        id: "renaio",
        title: "TKS Focus Hackathon: Renaio",
        image: "/images/tks/renaio.png",
        description: "A set of solutions focused on sustainable and accessible practices for customers, employees, and the planet.",
        links: [
          {
            label: "Slidedeck",
            image: "/images/thumbnails/slidedeck.png",
            description: "This slide deck includes a detailed analysis of the problem, solution, and outcomes.",
            url: "/images/tks/kidneygen.pdf",
          },
          {
            label: "Video",
            image: "/images/thumbnails/pitchvideo.png",
            description: "This video is our submitted pitch, which includes details relating to our solution.",
            url: "#", // ← update when uploaded to YouTube
          },
        ],
      },
      {
        id: "longetivity",
        title: "Artificial Intelligence & Longevity: Brief Overview",
        image: "/images/tks/ai_long.png",
        description: "This one-pager summarizes how Artificial Intelligence is transforming the field of longevity research. It highlights key tools and methods that use machine learning to accelerate healthspan-focused innovations.",
        links: [
          {
            label: "One Pager",
            image: "/images/thumbnails/onepager.png",
            description: "This one-pager highlights how AI is used in aging research—covering DeepSeSMo for detecting senescent cells, Gero.ai for drug discovery, and GeroSense for lifestyle tracking.",
            url: "/images/tks/longetivity.pdf",
          },
        ],
      },
      {
        id: "xanadu",
        title: "Xanadu: Technology Overview",
        image: "/images/tks/xanadu.png",
        description: "Xanadu is a Canadian company founded in 2016 that builds room-temperature quantum computers using photonic chips—a scalable, accessible alternative to traditional cryogenic systems.",
        links: [
          {
            label: "One Pager",
            image: "/images/thumbnails/onepager.png",
            description: "This one-pager describes how Xanadu uses photonic quantum computing with silicon photonic chips, including squeezers, interferometers, and transition edge sensors.",
            url: "/images/tks/Xanadu.pdf",
          },
        ],
      },
    ],
  },

]