import React from 'react'

function VoteCard() {
    const handleChange = (event) => {

    }

  return (
    <>
        <label htmlFor='voting'>Vote</label>
        <input 
            id="scores1" 
            name="voteCard" 
            type="radio"
            onChange={handleChange}
              required 
        />
        <input 
            id="scores2" 
            name="voteCard" 
            type="radio"
            onChange={handleChange}
              required 
        />
    </>
  )
}

export default VoteCard