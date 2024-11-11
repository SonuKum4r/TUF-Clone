// Sample FAQ data with nested sub-FAQs
export const faqs = [
  {
    question: 'Step 1 : Learn the basics',
    subFaqs: [
      {
        question: 'Lec 1: Things to Know in C++/Java/Python or any language',
        answer: 'JSX is a syntax extension that allows you to write HTML directly within JavaScript.',
      },
      {
        question: 'Lec 2: Build-up Logical Thinking',
        answer: 'Props are inputs to components that allow data to be passed from one component to another.',
      },
    ],
  },
  {
    question: 'Step 2 : Learn Important Sorting Techniques',
    subFaqs: [
      {
        question: 'Lec 1: Sorting-I',
        answer: 'The virtual DOM is an in-memory representation of the real DOM.',
      },
      {
        question: 'Lec 2: Sorting-II',
        answer: 'State is a JavaScript object that stores dynamic data and determines how the component renders and behaves.',
      },
    ],
  },
];


export const problemList = [
  {
    id: 1,
    status: false,
    problem: 'User Input / Output',
    problemlink: 'https://takeuforward.org/c/c-basic-input-output/',
    articlelink: 'https://takeuforward.org/c/c-basic-input-output/',
    youtube: 'https://www.youtube.com/watch?v=EAR7De6Goz4&t=250s',
    gfg: 'https://www.geeksforgeeks.org/problems/search-query-auto-complete/0?category%255B%255D=Strings&problemStatus=unsolved&difficulty%255B%255D=2&page=1&query=category%255B%255DStringsproblemStatusunsolveddifficulty%255B%255D2page1category%255B%255DStr',
    difficulty: "Easy",
    revision: false
  },
  {
    id: 2,
    status: false,
    problem: 'Data Types',
    problemlink: '',
    articlelink: '',
    youtube: 'https://www.youtube.com/watch?v=EAR7De6Goz4&t=755s',
    gfg: 'https://www.geeksforgeeks.org/problems/data-type-1666706751/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=data-type',
    difficulty: "Easy",
    revision: false
  },
  {
    id: 3,
    status: false,
    problem: 'If Else statements',
    problemlink: 'https://takeuforward.org/if-else/if-else-statements/',
    articlelink: 'https://takeuforward.org/if-else/if-else-statements/',
    youtube: 'https://www.youtube.com/watch?v=EAR7De6Goz4&t=1259s',
    gfg: 'https://www.geeksforgeeks.org/problems/java-if-else-decision-making0924/0?category%255B%255D=Java&difficulty%255B%255D=-2&page=1&query=category%255B%255DJavadifficulty%255B%255D-2page1category%255B%255DJava',
    difficulty: "Easy",
    revision: false
  },
  {
  id: 4,
  status: false,
  problem: 'If  statements',
  problemlink: 'https://takeuforward.org/if-else/if-else-statements/',
  articlelink: 'https://takeuforward.org/if-else/if-else-statements/',
  youtube: 'https://www.youtube.com/watch?v=EAR7De6Goz4&t=1259s',
  gfg: 'https://www.geeksforgeeks.org/problems/java-if-else-decision-making0924/0?category%255B%255D=Java&difficulty%255B%255D=-2&page=1&query=category%255B%255DJavadifficulty%255B%255D-2page1category%255B%255DJava',
  difficulty: "hard",
  revision: false
}
]
export default problemList;