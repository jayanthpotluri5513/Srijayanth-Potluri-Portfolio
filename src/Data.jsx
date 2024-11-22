import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.png';
import Project6 from './assets/project6.jpeg';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Front End Development',
    title: 'Web Design & Logo',
    description:
      'Front-end developers build the visual and interactive elements of websites, focusing on user experience, responsive design, and functionality.',
  },
  {
    id: 2,
    name: 'Back End Developement ',
    title: 'Server Management',
    description:
      'Develops and manages server-side logic, databases, and APIs to support web and mobile applications.',
  },
  {
    id: 3,
    name: ' UI/UX design ',
    title: 'User Interface',
    description:
    'Focuses on designing intuitive interfaces and seamless user experiences, enhancing usability and engagement for websites and applications.',
  },
  {
    id: 4,
    name: 'Data Analyst',
    title:'Data Insights',
    description:
      'Analyzes and visualizes data to uncover trends and insights, enabling data-driven decisions and strategic planning.',
  },
  {
    id: 5,
    name: 'AI Developer',
    title: 'ML and AI',
    description:
    'Builds intelligent systems using machine learning, deep learning, and NLP techniques.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Java',
    percentage: 90,
    description:
      'Java is a versatile and widely-used programming language known for its portability, performance, and cross-platform capabilities.',
  },

  {
    id: 2,
    name: 'Python',
    percentage: 70,
    description:
      'Python is a high-level programming language known for its simplicity, readability, and use in web development, data science, and automation.',
  },

  {
    id: 3,
    name: 'React JS',
    percentage: 70,
    description:
      'React is a popular JavaScript library for building dynamic and interactive user interfaces, especially in single-page applications.',
  },

  {
    id: 4,
    name: 'Machine Learning',
    percentage: 80,
    description:
      'Machine learning involves developing algorithms that allow systems to learn from data and make predictions or decisions without being explicitly programmed.',
  },

  {
    id: 5,
    name: 'Deep Learning',
    percentage: 70,
    description:
      'Deep learning is a subset of machine learning that uses neural networks with many layers to analyze large amounts of data for tasks like image and speech recognition.',
  },

  {
    id: 6,
    name: 'Node.js',
    percentage: 70,
    description:
      'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows developers to build fast, scalable, and lightweight server-side applications using JavaScript.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Full Stack',
    title: 'SpendWise',
    description:
      "A comprehensive and intuitive budget tracker app designed to help users efficiently manage, track, and plan their finances.",
    src: 'https://662e0dd025ed7e8cd28aa949--luxury-gelato-fb0550.netlify.app/', 
  },
  {
    id: 2,
    img: Project2,
    category: 'NLP',
    title: 'ChatView',
    description:
      "ChatView is an NLP-based FAQ chatbot with over 90% accuracy, built on 250 diverse intents to ensure responsive interactions.",
    src: 'https://chatviewapp.streamlit.app/', 
  },
  {
    id: 3,
    img: Project3,
    category: 'Full Stack',
    title: 'QuickChat',
    description:
     "QuickChat is a real-time messaging app with an intuitive UI, supporting simultaneous chats for over 1,000 users.",
    src: 'https://github.com/jayanthpotluri5513/QuickChat-Messaging-App', 
  },
  {
    id: 4,
    img: Project4,
    category: 'NLP',
    title: 'VNR Assistbot',
    description:
    "VNR Assistbot is an NLP-powered FAQ chatbot designed on a dataset of 250 intents which delivers quick and reliable responses.",
    src: 'https://github.com/jayanthpotluri5513/VNR-AssistBot', 
  },
  {
    id: 5,
    img: Project5,
    category: 'DL',
    title: 'Image Inferno',
    description:
      "Image Inferno is an image-based fashion recommendation system that uses a ResNet50 model for efficient recommendations.",
    src: 'https://www.linkedin.com/feed/update/urn:li:activity:7162159172581572608/', 
  },
  {
    id: 6,
    img: Project6,
    category: 'DL',
    title: 'News Guard',
    description:
      "News Guard is an LSTM-based model designed to accurately distinguish between deceptive and genuine news.",
    src: 'https://github.com/jayanthpotluri5513/Deceptive-news-sequencing-using-LSTM', 
  },
];

export const cv = [
  {
    id: 1,
    title:'VNR Vignanajyothi Institute of Technology',
    subtitle: 'Bachelor of Technology',
    date: '2021-2025',
    description:
      'Pursuing a Bachelor of Technology with a focus on Computer Science. Gaining knowledge in key technical areas and hands-on experience through projects and coursework.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Sri Chaitanya Junior College',
    subtitle: 'High School (MPC)',
    date: '2019-2021',
    description:
      'Completed high school with a focus on Mathematics, Physics, and Chemistry (MPC). Developed a strong foundation in analytical thinking, problem-solving, and scientific principles.',
    category: 'education',
  },

  {
    id: 3,
    title: 'MDAV Public School',
    subtitle: 'Schooling',
    date: '2003 - 2018',
    description:
      'Completed schooling with a well-rounded education, excelling in core subjects and actively participating in extracurricular activities such as sports, cultural events, and leadership roles.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Lead Tech Developer, AIML Club',
    subtitle: 'Krithomedh  Chapter',
    date: '2023 - PRESENT',
    description:
      'Leading the development and deployment of AI/ML projects, mentoring club members, and organizing workshops on cutting-edge technologies like ML, DL and NLP.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Machine Learning Intern',
    subtitle: 'IFYK Revolutionize',
    date: 'May 2024 - July 2024',
    description:
    'Developed a conversational chatbot using the RASA framework and NLP techniques to provide users with comprehensive information about events, types of events, and performers at any particular place.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Research Intern',
    subtitle: 'Centella Scientific',
    date: 'May 2023 - Jul 2023',
    description:
      "Gained hands-on experience in AI and ML, working on real-world projects that involved developing and implementing ML models. Enhanced skills in data analysis, and applied research to address scientific challenges.",
    category: 'experience',
  },
];