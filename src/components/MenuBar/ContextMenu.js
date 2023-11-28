import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
import { SVG_arrow_left_12, SVG_home_12 } from '../IconPack'
import styles from '@/styles/menuBar.module.css';

// export function MbContextMenu() {
//     return (
//         <div className={styles.contextMenu + ' bC-BGSub e-Box'}>
//             <div className={styles.back + ' bC-BG e-Button'}><SVG_arrow_left_12 size={20} /></div>
//             <div className={styles.home + ' bC-BG e-Button'}><SVG_home_12 size={20} /></div>
//             <div className={styles.label + ' bC-BG'}>
//                 <div className={styles.subTitle + ' t-SubText-Normal tC-TextSub'}>アーカイブ</div>
//                 <div className={styles.title + ' t-Text-Bolder tC-Text'}>Long Naaaaame</div>
//             </div>
//         </div>
//     )
// }

export function MbContextMenu() {
    return (
        <div className={styles.contextMenu + ' bC-BGSub e-Box'}>
            <div className={styles.label}>
                <div className='t-SubText2-Normal tC-TextSub'>asdf</div>
            </div>
            <div className='bC-BG e-Button'><SVG_home_12 size={20} /></div>
        </div>
    )
}