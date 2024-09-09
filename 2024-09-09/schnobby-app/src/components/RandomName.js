import React from "react"

const RandomName = () => {
  const nimeMassiiv = [
    "Mari",
    "Jüri",
    "Kadri",
    "Mati",
    "Taavi",
    "Maali",
    "Juuli",
    "August",
  ]
  return nimeMassiiv[Math.round(Math.random() * 8) % 8]
}

export default RandomName
