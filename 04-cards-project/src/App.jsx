import Card from "./components/card.jsx"

const App = () => {
  const jobOpenings = [
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "name": "Google",
    "datePosted": "2 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 45,
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    "name": "Meta",
    "datePosted": "5 days ago",
    "post": "React Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 55,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    "name": "Amazon",
    "datePosted": "1 week ago",
    "post": "Software Development Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 40,
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "name": "Apple",
    "datePosted": "3 weeks ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Senior Level",
    "pay": 80,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg",
    "name": "Netflix",
    "datePosted": "10 hours ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 95,
    "location": "Remote, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "name": "Microsoft",
    "datePosted": "2 weeks ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 75,
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    "name": "Tesla",
    "datePosted": "4 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 60,
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "name": "IBM",
    "datePosted": "1 month ago",
    "post": "Algorithm Developer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": 35,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    "name": "Oracle",
    "datePosted": "6 days ago",
    "post": "Database Administrator",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 65,
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_Corporate_logo.svg",
    "name": "Adobe",
    "datePosted": "3 days ago",
    "post": "Web Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 38,
    "location": "Noida, India"
  }
];


  return (
    
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
        <Card company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}/>
        </div>
      })}
    </div>
    
  )
}

export default App

