
const newsData = [
  {
    id: 1,
    image:"https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg",
    title: "React 18: A Game Changer for Developers",
    source: "TechCrunch",
    date: "2025-01-01",
    likeCount: 340,
    content: `
      React 18 has been officially released, and it promises to revolutionize the way developers build user interfaces. This update introduces concurrent rendering, allowing React applications to be more responsive and efficient. With features like automatic batching, developers can now manage state updates more effectively without the need for manual optimization.
      One of the most talked-about features is the new Suspense API, which simplifies the handling of asynchronous operations such as data fetching. This allows developers to build highly interactive applications with minimal boilerplate code. Another key improvement is the integration of server-side rendering with streaming capabilities, enabling faster initial page loads and better SEO performance.
      React 18 also brings improvements to developer tools, including enhanced debugging and profiling features. The React team has ensured backward compatibility, so existing applications can migrate seamlessly without breaking changes. This release is expected to strengthen React's dominance in the frontend development ecosystem.
      Developers worldwide have already started experimenting with the new features, and early adopters are praising the improvements in performance and developer experience. If you haven't explored React 18 yet, now is the perfect time to dive in and see how it can transform your projects.
    `,
  },
  {
    id:2,image:"https://www.shutterstock.com/image-vector/tv-news-studio-broadcaster-breaking-260nw-723691252.jpg",
    title: "AI Breakthrough: GPT-5 Revolutionizes NLP",
    source: "BBC",
    date: "2025-01-02",
    likeCount: 500,
    content: `
      OpenAI has unveiled GPT-5, the latest advancement in natural language processing (NLP) technology. This model boasts a staggering 10 trillion parameters, making it the most powerful language model to date. GPT-5 is designed to understand and generate human-like text with unparalleled accuracy and coherence.
      One of the standout features of GPT-5 is its ability to perform complex reasoning tasks. Unlike its predecessors, this model can solve mathematical problems, write sophisticated essays, and even compose music with minimal human input. Its contextual understanding has also improved, enabling it to provide more accurate and relevant responses in conversations.
      Businesses are already leveraging GPT-5 to automate customer support, generate marketing content, and analyze vast amounts of unstructured data. The healthcare industry is exploring its potential for diagnosing medical conditions and assisting in drug discovery. However, the technology has also raised ethical concerns, particularly around its misuse for creating deepfake content and spreading misinformation.
      OpenAI has emphasized its commitment to ensuring responsible AI use. The organization has implemented stricter controls and monitoring mechanisms to prevent abuse. As GPT-5 becomes more widely adopted, it will be interesting to see how it shapes the future of AI and its impact on society.
    `,
  },
  {
    id:3,image:"https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue",
    title: "Global Climate Summit 2025: Leaders Unite for Change",
    source: "CNN",
    date: "2025-01-03",
    likeCount: 410,
    content: `
      The 2025 Global Climate Summit brought together world leaders, scientists, and activists in a historic effort to address climate change. Hosted in Geneva, the event highlighted the urgent need for collective action to combat rising temperatures, melting ice caps, and extreme weather events.
      Key topics discussed included transitioning to renewable energy, reducing greenhouse gas emissions, and preserving biodiversity. Several nations pledged to achieve net-zero emissions by 2040, with significant investments in green technologies and infrastructure. The summit also underscored the importance of engaging the private sector in sustainable practices.
      While the commitments made are promising, critics argue that more concrete actions are needed to avoid catastrophic outcomes. Activists called for accountability and transparency in implementing these promises, emphasizing that time is running out. The summit ended with a renewed sense of urgency and determination to tackle the climate crisis head-on.
    `,
  },
  {
    id:4,image:"https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg",
    title: "Mars Mission 2025: Human Exploration of the Red Planet",
    source: "NASA News",
    date: "2025-01-04",
    likeCount: 600,
    content: `
      NASA's Mars Mission 2025 marks a monumental milestone in human space exploration. The mission aims to land astronauts on the Martian surface, conducting groundbreaking research to unlock the mysteries of the Red Planet. This ambitious endeavor represents decades of planning, technological innovation, and international collaboration.
      The crew, consisting of seasoned astronauts and scientists, will spend six months traveling to Mars, followed by a year conducting experiments on the planet's surface. Key objectives include studying Martian geology, searching for signs of past life, and testing technologies for future colonization. The mission also seeks to collect soil and rock samples for return to Earth.
      The Mars Mission 2025 has inspired millions worldwide, reigniting interest in space exploration. It symbolizes humanity's enduring curiosity and determination to push the boundaries of what is possible.
    `,
  },
  {
    id:5,image:"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg",
    title: "Electric Vehicles Dominate Auto Industry in 2025",
    source: "The Verge",
    date: "2025-01-05",
    likeCount: 450,
    content: `
      The global automotive industry has undergone a massive transformation, with electric vehicles (EVs) taking center stage. In 2025, EVs account for over 50% of all new car sales, driven by advancements in battery technology and growing environmental awareness.
      Leading automakers have introduced innovative models with extended range, faster charging capabilities, and competitive pricing. Governments worldwide have incentivized EV adoption through subsidies, tax breaks, and the development of charging infrastructure. The shift has also created opportunities for startups to enter the market, challenging established players with disruptive technologies.
      However, challenges remain, including the need for sustainable battery recycling and the development of clean energy sources to power the growing fleet of EVs. Despite these hurdles, the transition to electric vehicles marks a significant step toward a greener future.
    `,
  },
  {
    id:6,image:"https://th-i.thgim.com/public/news/international/eatcsw/article69048127.ece/alternates/LANDSCAPE_385/90092_31_12_2024_23_56_12_1_NEW_YEAR_3.JPG",
    title: "Quantum Computing: Unlocking Unimaginable Potential",
    source: "Science Daily",
    date: "2025-01-06",
    likeCount: 370,
    content: `
      Quantum computing has reached a pivotal moment in 2025, with breakthroughs enabling practical applications across various industries. Unlike classical computers, quantum computers use qubits, which can represent multiple states simultaneously, allowing them to solve complex problems at unprecedented speeds.
      Researchers have demonstrated quantum supremacy in fields like cryptography, material science, and pharmaceutical research. Companies are using quantum algorithms to optimize supply chains, enhance machine learning models, and develop new drugs. The technology is also advancing our understanding of quantum physics itself, paving the way for future discoveries.
      Despite its potential, quantum computing faces challenges, including error correction and scalability. As scientists work to overcome these obstacles, the future of quantum computing looks incredibly promising, with transformative implications for science and technology.
    `,
  },
  {
    id: 7,
    image:"https://img.republicworld.com/all_images/mobile-1730973609972.png",
    title: "React 18: A Game Changer for Developers",
    source: "TechCrunch",
    date: "2025-01-01",
    likeCount: 340,
    content: `
      React 18 has been officially released, and it promises to revolutionize the way developers build user interfaces. This update introduces concurrent rendering, allowing React applications to be more responsive and efficient. With features like automatic batching, developers can now manage state updates more effectively without the need for manual optimization.
      One of the most talked-about features is the new Suspense API, which simplifies the handling of asynchronous operations such as data fetching. This allows developers to build highly interactive applications with minimal boilerplate code. Another key improvement is the integration of server-side rendering with streaming capabilities, enabling faster initial page loads and better SEO performance.
      React 18 also brings improvements to developer tools, including enhanced debugging and profiling features. The React team has ensured backward compatibility, so existing applications can migrate seamlessly without breaking changes. This release is expected to strengthen React's dominance in the frontend development ecosystem.
      Developers worldwide have already started experimenting with the new features, and early adopters are praising the improvements in performance and developer experience. If you haven't explored React 18 yet, now is the perfect time to dive in and see how it can transform your projects.
    `,
  },
  {
    id:8,image:"https://dims.apnews.com/dims4/default/9f8e4e3/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F0a56f597c1a047258477590a64641f6e%2F3000.jpeg",
    title: "AI Breakthrough: GPT-5 Revolutionizes NLP",
    source: "BBC",
    date: "2025-01-02",
    likeCount: 500,
    content: `
      OpenAI has unveiled GPT-5, the latest advancement in natural language processing (NLP) technology. This model boasts a staggering 10 trillion parameters, making it the most powerful language model to date. GPT-5 is designed to understand and generate human-like text with unparalleled accuracy and coherence.
      One of the standout features of GPT-5 is its ability to perform complex reasoning tasks. Unlike its predecessors, this model can solve mathematical problems, write sophisticated essays, and even compose music with minimal human input. Its contextual understanding has also improved, enabling it to provide more accurate and relevant responses in conversations.
      Businesses are already leveraging GPT-5 to automate customer support, generate marketing content, and analyze vast amounts of unstructured data. The healthcare industry is exploring its potential for diagnosing medical conditions and assisting in drug discovery. However, the technology has also raised ethical concerns, particularly around its misuse for creating deepfake content and spreading misinformation.
      OpenAI has emphasized its commitment to ensuring responsible AI use. The organization has implemented stricter controls and monitoring mechanisms to prevent abuse. As GPT-5 becomes more widely adopted, it will be interesting to see how it shapes the future of AI and its impact on society.
    `,
  },
  {
    id:9,image:"https://imageresizer.static9.net.au/ElivK7AjFTasZm8fA6fP7AwS3Oo=/768x0/vms-tv-images-prod.s3-ap-southeast-2.amazonaws.com%2F2024%2F04%2F584647%2Ftoday_earlynews_alexcullen_nextgenstandardcard.png",
    title: "Global Climate Summit 2025: Leaders Unite for Change",
    source: "CNN",
    date: "2025-01-03",
    likeCount: 410,
    content: `
      The 2025 Global Climate Summit brought together world leaders, scientists, and activists in a historic effort to address climate change. Hosted in Geneva, the event highlighted the urgent need for collective action to combat rising temperatures, melting ice caps, and extreme weather events.
      Key topics discussed included transitioning to renewable energy, reducing greenhouse gas emissions, and preserving biodiversity. Several nations pledged to achieve net-zero emissions by 2040, with significant investments in green technologies and infrastructure. The summit also underscored the importance of engaging the private sector in sustainable practices.
      While the commitments made are promising, critics argue that more concrete actions are needed to avoid catastrophic outcomes. Activists called for accountability and transparency in implementing these promises, emphasizing that time is running out. The summit ended with a renewed sense of urgency and determination to tackle the climate crisis head-on.
    `,
  },
  {
    id:10,image:"https://m.turnto10.com/resources/media2/16x9/1920/986/center/90/a68e258e-7b9a-40f2-ac9b-ab7a104540bd-vlcsnap00947.jpg",
    title: "Mars Mission 2025: Human Exploration of the Red Planet",
    source: "NASA News",
    date: "2025-01-04",
    likeCount: 600,
    content: `
      NASA's Mars Mission 2025 marks a monumental milestone in human space exploration. The mission aims to land astronauts on the Martian surface, conducting groundbreaking research to unlock the mysteries of the Red Planet. This ambitious endeavor represents decades of planning, technological innovation, and international collaboration.
      The crew, consisting of seasoned astronauts and scientists, will spend six months traveling to Mars, followed by a year conducting experiments on the planet's surface. Key objectives include studying Martian geology, searching for signs of past life, and testing technologies for future colonization. The mission also seeks to collect soil and rock samples for return to Earth.
      The Mars Mission 2025 has inspired millions worldwide, reigniting interest in space exploration. It symbolizes humanity's enduring curiosity and determination to push the boundaries of what is possible.
    `,
  },
  {
    id:11,image:"https://media.istockphoto.com/id/1345527119/video/graphical-modern-digital-world-news-studio-loop-background.jpg?s=640x640&k=20&c=cr1SYYf7Dix-TgBqiYRLquAmi7TgEE3oZcMUExQ25QY=",
    title: "Electric Vehicles Dominate Auto Industry in 2025",
    source: "The Verge",
    date: "2025-01-05",
    likeCount: 450,
    content: `
      The global automotive industry has undergone a massive transformation, with electric vehicles (EVs) taking center stage. In 2025, EVs account for over 50% of all new car sales, driven by advancements in battery technology and growing environmental awareness.
      Leading automakers have introduced innovative models with extended range, faster charging capabilities, and competitive pricing. Governments worldwide have incentivized EV adoption through subsidies, tax breaks, and the development of charging infrastructure. The shift has also created opportunities for startups to enter the market, challenging established players with disruptive technologies.
      However, challenges remain, including the need for sustainable battery recycling and the development of clean energy sources to power the growing fleet of EVs. Despite these hurdles, the transition to electric vehicles marks a significant step toward a greener future.
    `,
  },
  {
    id:12,image:"https://media14.s-nbcnews.com/i/mpx/2704722219/2024_09/tm-nn-sep19-09hrow.jpg",
    title: "Quantum Computing: Unlocking Unimaginable Potential",
    source: "Science Daily",
    date: "2025-01-06",
    likeCount: 370,
    content: `
      Quantum computing has reached a pivotal moment in 2025, with breakthroughs enabling practical applications across various industries. Unlike classical computers, quantum computers use qubits, which can represent multiple states simultaneously, allowing them to solve complex problems at unprecedented speeds.
      Researchers have demonstrated quantum supremacy in fields like cryptography, material science, and pharmaceutical research. Companies are using quantum algorithms to optimize supply chains, enhance machine learning models, and develop new drugs. The technology is also advancing our understanding of quantum physics itself, paving the way for future discoveries.
      Despite its potential, quantum computing faces challenges, including error correction and scalability. As scientists work to overcome these obstacles, the future of quantum computing looks incredibly promising, with transformative implications for science and technology.
    `,
  },

];

export default newsData;
