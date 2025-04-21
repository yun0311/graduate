'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function MyPage() {
  return (
    <div className={styles.container}>
      {/* 상단 프로필 영역 */}
      <div className={styles.profileBox}>
        <div className={styles.profileInfo}>
          <img src="/default-profile.png" alt="profile" className={styles.profileImg} />
          <div>
            <h2 className={styles.name}>이름</h2>
            <p className={styles.email}>이메일</p>
            <p className={styles.description}>내정보 간단 설명</p>
          </div>
        </div>
        <button className={styles.editBtn}>프로필 수정</button>
      </div>

      {/* 즐겨찾기 + 내 글 영역 */}
      <div className={styles.sectionBox}>
        {/* 즐겨찾기 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>즐겨찾기</h3>
          <div className={styles.grid}>
            <div className={styles.card}>즐겨찾기 항목 1</div>
            <div className={styles.card}>즐겨찾기 항목 2</div>
            <div className={styles.card}>즐겨찾기 항목 3</div>
            <div className={styles.card}>즐겨찾기 항목 4</div>
          </div>
        </div>

        {/* 내가 쓴 글 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>내 글 목록</h3>
          <div className={styles.grid}>
            <div className={styles.card}>내 글 1</div>
            <div className={styles.card}>내 글 2</div>
            <div className={styles.card}>내 글 3</div>
            <div className={styles.card}>내 글 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}