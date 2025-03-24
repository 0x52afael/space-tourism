import React from 'react'


export const DotTabs: React.FC = () => {
  return (
    <div className="dot-indicators flex flex-center">
      <button aria-selected="true"  >
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false" >
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false" >
        <span className="sr-only">Slide title</span>
      </button>
    </div>
  )
}

export const Tabs: React.FC = () => {
  return (
    <div className="tab-list underline-indicators flex flex-center">
      <button aria-selected="true" className="uppercase bg-dark text-accent letter-spacing-2 ff-sans-cond" >Moon</button>
      <button aria-selected="false" className="uppercase bg-dark text-accent letter-spacing-2 ff-sans-cond" >Mars</button>
      <button aria-selected="false" className="uppercase bg-dark text-accent letter-spacing-2 ff-sans-cond" >Europa</button>
    </div>
  )
}

