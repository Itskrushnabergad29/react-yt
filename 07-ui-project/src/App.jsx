import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    intro: 'Absolutely love the service! The team was incredibly helpful, and the final product exceeded all of my expectations. Highly recommend!',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    intro: 'A completely seamless experience from start to finish. It is rare to find a platform that is this easy to use and looks this good.',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    intro: 'This saved me so much time and effort. The customer support is top-notch, and I could not be happier with the results.',
    tag: 'Underbaned'
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    intro: 'The attention to detail in the UI is remarkable. It has transformed the way our team manages daily workflows and internal communications.',
    tag: 'Verified'
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    intro: 'Incredible value for the price. I was skeptical at first, but the performance improvements we saw within the first week were undeniable.',
    tag: 'Premium'
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    intro: 'The flexibility of this platform is its greatest strength. We were able to customize the entire dashboard to fit our specific industry needs.',
    tag: 'Enterprise'
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
    intro: 'I’ve tried several competitors, but none offer the same level of intuitive design and speed. This is now an essential part of my toolkit.',
    tag: 'Core'
  }
];
  return (
    <div>
      <Section1 users={users}></Section1>
      <Section2></Section2>
    </div>
  )
}

export default App

