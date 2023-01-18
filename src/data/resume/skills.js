// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Golang',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Vue JS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Distributed Systems',
    competency: 4,
    category: ['Practice'],
  },
  {
    title: 'Clean Architecture',
    competency: 4,
    category: ['Practice'],
  },
  {
    title: 'Event Driven Architecture',
    competency: 3,
    category: ['Practice'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Stack'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Stack'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Stack'],
  },
  {
    title: 'Elasticsearch',
    competency: 4,
    category: ['Stack'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Stack'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#0A2647',
  '#144272',
  '#205295',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
