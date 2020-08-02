import styles from './Table.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';
import CodingTest from './BadgeCoding';
import Aptitude from './BadgeAptitude';
import Interview from './BadgeInterview';
import Tryout from './BadgeTryout';
import Header from "./Header";
import TableRow from './TableRow';



export default function Table() {

  const tableList = [
    {
      name: '42서울',
      link: '/ftseoul',
      number_of_recruits: '기수 당 240여명',
      edu_period: '최대 2년',
      grant: '월 100만원',
      badge: '1001',
    },
    {
      name: 'SSAFY',
      link: '/ssafy',
      number_of_recruits: '1000여명',
      edu_period: '1년',
      grant: '월 100만원',
      badge: '1010',
    },
    {
      name: '네이버 부스트캠프',
      link: '/boostcamp',
      number_of_recruits: '미정-챌린지 과정 수료자',
      edu_period: '4개월',
      grant: '-',
      badge: '0101',
    },
    {
      name: 'SW마에스트로',
      link: '/soma',
      number_of_recruits: '140명',
      edu_period: '6개월',
      grant: '월 100만원/nIT기기 140만원',
      badge: '1110',
    },
    {
      name: '우아한테크코스',
      link: '/woowa',
      number_of_recruits: '약 40명',
      edu_period: '약 10개월',
      grant: '월 50만원',
      badge: '0101',
    },
  ]


    return (
      <>
      <div className={styles.wrapper}>
        {/* Badge Description*/}

        <div className={styles.badges}>
            <div className={styles.badge}>
              <img src={require('../src/image/tryout badge.png')} width="27"/>
              <span className={styles.tooltip}>사전집중교육</span>
            </div>

            <div className={styles.badge}>
              <img src={require('../src/image/interview badge.png')} width="27"/>
              <span className={styles.tooltip}>면접</span>
            </div>
          <div className={styles.badge}>
            <img src={require('../src/image/coding test badge.png')} width="27"/>
            <span className={styles.tooltip}>코딩테스트</span>
          </div>

          <div className={styles.badge}>
            <img src={require('../src/image/aptitude badge.png')} width="27"/>
            <span className={styles.tooltip}>적성검사</span>
          </div>
        </div>


        {/*Table*/}

        <div className={styles.users}>
          <table className={styles.thetable}>
            <thead>
              <tr className={styles.rowtitle}>
                <th className={styles.title}></th>
                {/*<th className={styles.title}>주관</th>*/}
                {/*<th className={styles.title}>지원자격</th>*/}
                <th className={styles.title}>모집인원</th>
                <th className={styles.title}>교육기간</th>
                <th className={styles.title}>혜택</th>
                {/*<th className={styles.title}>교육지역</th>*/}
                <th className={styles.title}>선발과정</th>
              </tr>
            </thead>
          {tableList.map((v, idx) => <TableRow data={v} key={idx} />)}
          </table>
        </div>
      </div>
      <Header>
        <div className={styles.mobileheader}>
    <br/>
    <h1>2020년 부트캠프</h1>
          <p>무료 부트캠프 연간 일정은 웹사이트 혹은 가로모드에서 지원됩니다</p>
    <br/><br/> <br/>
        </div>
      </Header>
    </>
  );
}
