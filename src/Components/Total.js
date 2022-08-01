import React from 'react'
import { useState } from 'react'
import '../Styles/total.css'

const startingTax = 300000000

function TaxFigure() {
  const [taxFigure, setTaxFigure] = useState(startingTax)

  return (
    <section className='total-tax-number'>
        £{taxFigure} currently owed
    </section>
  )
}

export default TaxFigure