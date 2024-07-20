import React from 'react'
import data from '../data/berlin.json'

export default function Facebook() {
  return (
    <>
        {data.map((item, index) => (
            <div className="flex flex-row p-4 bg-white rounded border-zinc-950 border-solid border m-2">
      <img src={item.img} alt={`${item.firstName} ${item.lastName}`} className="w-20 h-20" />
      <div className="flex flex-col">
        <p className="font-bold"><strong>First Name:</strong> {item.firstName}</p>
        <p className="font-bold"><strong>Last Name:</strong> {item.lastName}</p>
        <p className="font-bold"><strong>Country:</strong> {item.gender}</p>
        <p className="font-bold"><strong>Type:</strong>{item.isStudent ? "Student" : "Teacher"}</p>
      </div>
    </div>))}
    </>
  )
}
