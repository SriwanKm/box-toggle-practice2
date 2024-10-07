'use client';

import styles from "../page.module.css"
import React, { useState } from "react"

export default function Box(props: any) {

    

    const style = { backgroundColor: props.isOpen ?  "salmon": "deepskyblue" }

    return (
        <div style={style} className={styles.box} onClick={() => props.filpHandling(props.id)}></div>
    )
}