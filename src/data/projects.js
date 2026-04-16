import anydayImg from '../assets/images/anyday.jpg'
import nextflixImg from '../assets/images/nextflix.jpg'
import bloggieImg from '../assets/images/bloggie.jpg'

export const projects = [
  {
    id: 'anyday',
    title: 'Anyday',
    description: 'End-To-End MERN application featuring a robust Node.js backend, live data updates via WebSockets, Drag & Drop interfaces, and Voice Control integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com/yosikari/Anyday',
    imgUrl: anydayImg 
  },
  {
    id: 'nextflix',
    title: 'NextFlix',
    description: 'Full-stack Netflix clone built with a strong focus on high performance, type safety, and delivering a sleek, fully responsive user interface across devices.',
    tech: ['Next.js', 'React', 'TypeScript', 'Atoms'],
    githubUrl: 'https://github.com/yosikari/NextFlix', 
    imgUrl: nextflixImg
  },
  {
    id: 'bloggie',
    title: 'Bloggie',
    description: 'Robust blog platform utilizing the MVC design pattern in C# .NET. Features secure user authentication, full CRUD operations, and a scalable backend system.',
    tech: ['C#', '.NET', 'MVC', 'SQL'],
    githubUrl: 'https://github.com/yosikari/BloggieMVC', 
    imgUrl: bloggieImg
  }
];