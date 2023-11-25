import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
import { SVG_arrow_left_12, SVG_home_12 } from '../IconPack'
import { MbContextMenu } from './ContextMenu';
import styles from '@/styles/menuBar.module.css';


export function MenuBar(props) {
    const [time, setTime] = useState("XX:XX");
    const [date, setDate] = useState("XX/XX (曜)");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
            setTime(hours + ':' + minutes);
            setDate(month + '/' + day + ' (' + dayOfWeek + ')');
        }, 1000); // 1秒ごとに更新

        // コンポーネントのクリーンアップ時にintervalをクリアする
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.menuBarBody}>
            <div className={styles.left}>
                <div className={styles.navButtons + ' bC-BGSub e-Box'}>
                    <div className={styles.back + ' bC-BG e-Button'}><SVG_arrow_left_12 size={20} /></div>
                    <div className={styles.home + ' bC-BG e-Button'}><SVG_home_12 size={20} /></div>
                    <div className={styles.label + ' bC-BG'}>
                        <div className={styles.subTitle + ' t-SubText-Normal tC-TextSub'}>アーカイブ</div>
                        <div className={styles.title + ' t-Text-Bolder tC-Text'}>Long Naaaaame</div>
                    </div>
                </div>
                <MbContextMenu/>
            </div>
            <div className={styles.right + ' bC-BGSub e-Box'}>
                <div className={styles.status + ' bC-BG e-Button'}>
                    <div className={styles.caleTime}>
                        <div className={styles.title + ' t-Text-Bolder tC-Text'}>{time}</div>
                        <div className={styles.subTitle + ' t-SubText-Normal tC-TextSub'}>{date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}