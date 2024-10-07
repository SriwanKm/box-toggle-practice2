'use client';

import styles from "./page.module.css";
import Box from "./componants/Box";
import boxData from "./boxData"
import React, { useState } from "react";

export default function Home() {
  const [boxes, setBoxes] = useState(boxData)

  function filpHandling(id: number) {
    setBoxes(prevState => (prevState.map(box => (
      box.id === id ? { ...box, isOpen: !box.isOpen } : box
    ))))
console.log()
  }
  const allBoxes = boxes.map(box => {
    return (< Box
      key={box.id}
      id={box.id}
      isOpen={box.isOpen}
      filpHandling={filpHandling}
    />)
  })

  return (
    <main className={styles.main}>
      {allBoxes}
    </main>
  );
}
