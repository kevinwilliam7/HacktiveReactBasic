import React from 'react'

export default function SkillCard(props) {
  console.log(props.status==="noob")
  return (
    <div key={props.id} className="indicator">
        <div className="indicator-item indicator-top">
        <span className="relative flex h-5 w-5">
            <span className={props.status === 'noob' ? "bg-red-400 animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" : "bg-sky-400 animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"}></span>
            <span className={props.status === 'noob' ? "bg-red-500 relative inline-flex rounded-full h-5 w-5 " : "relative inline-flex rounded-full h-5 w-5 bg-sky-500"}></span>
        </span>
        </div> 
        <div className="card border">
            <div className="card-body">
                {props.icon}
            </div>
        </div>
    </div>
  )
}
