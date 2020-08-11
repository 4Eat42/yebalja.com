import React , { useCallback, useEffect, useState }from 'react';
import styles from './Faq.module.css';
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import faqReducer from '../redux/reducers/faq';
import axios from 'axios';
function QnA ({list}) {
  return (
    <>
      <strong>Q. {list.q}</strong>
      <br />A. {list.a}
      <br /><br />
    </>
  );
};

function TabLeft({sub}) {
  return (
    <ListGroup.Item action href={sub.href}>
      {sub.title}
    </ListGroup.Item>
  )
}

function TabRight ({sub}) { 
  return (
    <Tab.Pane eventKey={sub.href}>
      {sub.qna.map((v, idx) => <QnA list={v} key={idx} />)}
    </Tab.Pane>
  );
}

function FaqTab({subList}) {
  return (
    <div className={classNames({["row"]: true, ["justify-content-md-center"]: true})}>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey={subList[0].href}>
        <div className={"col-md-3"}>
          <ListGroup className={styles.secondTab}>
            {subList.map((v, idx) => <TabLeft sub={v} key={idx} />)}
          </ListGroup>
        </div>

        <div className={classNames({["col-md-9"]: true, [styles.content]: true})}>
          <Tab.Content>
            {subList.map((v, idx) => <TabRight sub={v} key={idx} />)}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}

export default function Faq({program}) {
  
  const allDataList = {
    "ftseoul" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                    {
                        "q": "지원자격이 어떻게 되나요?",
                        "a": "지원 자격은 교육 시작 시점 기준으로 민법상 성인 또는 교육 시작 년도 기준 고등학교 졸업 또는 졸업예정자 이상의 학력자면 누구나 가능합니다."
                    },
                    {
                        "q": "어떤 사람이 지원하면 좋을까요?",
                        "a": "저희는 지원자들이 특정 배경, 교육 또는 학위를 가지고 있는 대신, 열정적이고 2년 간의 교육 프로그램에 헌신할 준비가 된 비전을 가진 사람이기를 기대합니다."
                    }
                ]
            },{
                "title": "모집규모 및 분야",
                "href": "#apply2",
                "qna": [
                    {
                        "q": "모집 규모가 어떻게 되나요?",
                        "a": "매년 반기별 약 250여 명 수준, 연 약 500여 명 수준으로 선발할 계획입니다. 그러나 이 인원은 공간, 이전 과정 교육생들의 수료 상황에 따라 달라질 수 있습니다."
                    },
                ]
            },{
                "title": "선발과정",
                "href": "#apply3",
                "qna": [
                    {
                        "q": "온라인테스트는 어떤 테스트인가요?",
                        "a": "온라인 테스트를 포함한 전형 과정은 현재의 역량을 확인하여 순위를 정해 선발하는 과정이 아니라 앞으로 힘든 과정의 학습을 따라할 수 있는지에 관한 최소한의 학습 역량과 의지를 확인하는 과정입니다. 온라인 테스트는 코딩을 전혀 안해보신 분들도 충분히 통과가 가능한 방식으로 진행됩니다."
                    },
                    {
                        "q": "선발과정을 조금 더 자세히 알려주세요",
                        "a": "온라인 테스트를 통과한 지원자는 본인 확인 및 신청조건 해당 여부를 확인하기 위해 체크인 기간에 반드시 참석해야 합니다.체크인 미팅은 선착순으로 '등록' 마감되기 때문에, 교육과정 참석을 원하시는 분은 반드시 온라인 테스트 통과 메일을 수신 후 등록을 완료하시기 바랍니다. 체크인 기간에 본인 확인이 완료된 지원자는 추가적인 개인 정보와 에세이를 제출해야 합니다. 에세이는 소프트웨어를 배우려는 동기와 이전 경험 및 진로 계획 등을 작성하는 것입니다. 본인 확인 및 에세이 제출을 완료한 지원자는 La Piscine(1개월 집중교육) 과정에 참여하게 됩니다. La Piscine 과정을 거쳐 최종 선발된 교육생은 약 2년간 본 과정에 참여하게 됩니다."
                    },
                    {
                      "q": "제출한 에세이도 평가요소인가요?",
                      "a": "제출한 에세이의 내용은 평가에 반영되지 않지만, 에세이 작성 미비 또는 신원 불분명한 지원자의 경우 온라인 테스트 통과 여부에 관계없이 교육 선발 대상자에서 제외될 수 있습니다."
                  },
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                    {
                      "q": "커리큘럼에는 어던 내용이 들어가 있나요?",
                      "a": "C 언어 프로그래밍과 기본적인 프로그래밍 개념을 기반으로 시작하여 스스로 운영체제, 그래픽 및 웹 프로그래밍을 학습합니다. 이후에 객체지향 프로그래밍, 모바일 프로그래밍, 웹 보안, 리버스 엔지니어링, 커널 프로그래밍, 네트워크 프로그래밍, 인공 지능, 3D 프로그래밍 등의 커리큘럼이 포함되어 있으며, 지속적으로 새로운 영역이 포함될 것입니다."
                    }, {
                      "q": "42 SEOUL만의 학습방식은 무엇인가요?",
                      "a": "42 SEOUL은 특정 문제를 해결하는 스킬 혹은 도구를 사용하는 방법을 가르쳐주지 않습니다. 모든 것을 스스로, 동료와 함께 배우고, 주어진 도구들을 이용하여 문제를 해결하면서 역량을 키워나가게 됩니다.                   교육생은 비판적 사고를 통해 지식을 탐구하고 팀원과 공유하며 협력하는데 익숙해지기 때문에 어려운 문제를 해결할 수 있는 역량을 점차 확보할 수 있습니다."
                    },{

                      "q": "커리큘럼에는 어떠한 게임 요소가 있나요?",
                      "a": "교육생들이 재미와 동기를 유지하면서 학습을 할 수 있도록 커리큘럼에는 다양한 게임 요소를 담고 있습니다. 예를 들어 교육생이 팀을 이루어 프로젝트를 완료하면 포인트를 얻습니다. 이 포인트로 레벨 업을 하고 다음 프로젝트 수행을 위한 잠금을 해제할 수 있고 또한 다양한 기술을 습득하고 퀘스트와 업적을 완수할 수 있습니다. 교육생들은 서로간의 레벨을 보면서 현재 커리큘럼에서 어디에 위치해 있는지 확인하고 서로 배울 수 있습니다."
                    },
                    {
                      "q": "교육 중 인턴십의 기회도 있나요?",
                      "a": "교육기간 중 일정 레벨에 도달한 교육생은 인턴십을 하며, 이 인턴십은 교육의 일부로 간주됩니다."
                  }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                    {
                        "q": "학습 기간 동안 전일제로 등교를 해야하나요?",
                        "a": "첫 단계인 La Piscine 기간은 주중 주말 휴일과 상관없이 거의 매일 등교를 해야합니다. 반드시 출석해야 하는 시험도 있지만, 전체 교육생들이 모여 동료 학습을 하기 위함입니다. 그 이후에도 거의 전일제 학습이 권장되며, 초기에는 그 보다 더 많은 학습 시간이 필요하다고 예상됩니다. 따라서 다른 일과 교육을 병행하기는 매우 힘들다고 할 수 있습니다."
                    },{
                        "q": "교육관에 기숙사가 있나요?",
                        "a": "기숙사를 제공할 계획은 없습니다. 다만 24시간 운영을 하는 관계로 교육생들이 휴식을 취할 수 있는 휴게 시설, 샤워 시설이 확보되어 있습니다."
                    },{
                        "q": "원격으로도 공부할 수 있나요?",
                        "a": "개인용 PC나 노트북을 이용하여 원격으로 프로젝트 작업 수행은 가능하지만 42 SEOUL의 서버로 접근은 불가능합니다. 프로젝트에 따라 팀 단위로 개발에 참여해야 하고, 모든 학습이 혼자가 아니라 동료와 함께 이루어지기 때문입니다. 이 과정에서 운영팀은 그 협업 과정을 가장 잘 일으킬 수 있는 훌륭한 환경을 제공하게 됩니다."
                    }
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                    {
                      "q": "교육은 무료인가요?",
                      "a": "네, 그렇습니다. 이 교육은 대한민국 정부에서 모든 과정을 지원합니다. 우리의 임무는 모든 교육생의 경제적 배경, 학력 등과 상관없이 교육을 받을 수 있도록 하는 것입니다. 돈이 당신의 열정과 꿈을 방해해서는 안되기 때문입니다."
                    },{
                      "q": "정부 또는 42 SEOUL로부터 장학금을 지원 받을 수 있나요?",
                      "a": "42 SEOUL에서 요구하는 학습 시간 이상을 참석하시는 분에게 지원금이 지급됩니다. 단, 취업자(또는 사업자 등록증이 있는 자) 및 중복 수혜가 불가능한 타 정부 사업에 참여하고 계신분은 42 SEOUL 지원에 제한은 없으나, 병행을 권장하지 않으며 지원금 지급 대상자에서 제외됩니다. 2020년 기준으로 월 100만원 수준의 지원금이 지급됩니다."
                    }
                ]
            },
            {
                "title": "교육장비",
                "href": "#etc2",
                "qna": [
                    {
                        "q": "개인 노트북/컴퓨터가 필요한가요?",
                        "a": "학습기간 동안 개인 컴퓨터가 필요하지 않습니다. 교육관에는 모든 교육생들의 학습을 지원할 수 있는 충분한 컴퓨터가 준비되고, 24시간 이용 가능하게 개방됩니다. 개인 연구 중에는 자신의 노트북을 사용해도 되지만 반드시 필요한 것은 아니며, 모든 프로젝트, 학습 결과물은 반드시 교육관의 컴퓨터를 이용하여 제출해야합니다."
                  }
                ]
            }
        ]
      }
    ],
    "ssafy" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                    {
                      "q": "삼성 청년 SW 아카데미에는 어떤 사람들이 지원하면 좋을까요?",
                      "a": "만 29세 이하의 청년 취업 준비생이라면 누구나 본 과정에 지원할 수 있습니다. (국내외 4년제 대학 졸업자 및 졸업예정자, 전공 무관)."
                    },
                    {
                      "q": "SW 경험이 전혀없는데 지원 가능한가요?",
                      "a": "SW 전공자뿐만 아니라 비전공자도 지원 가능합니다. SW역량을 고려하여 수준별로 분반 교육을 실시합니다."
                    }
                ]
            },{
                "title": "모집규모 및 분야",
                "href": "#apply2",
                "qna": [
                  {
                    "q": "SW 전공자와 비전공자 모두 뽑나요?",
                    "a": "네, SW전공자와 비전공자의 수준에 따라 맞춤형 굥규을 제공하여 최적의 학습효과를 지향합니다."
                  }
                ]
            },{
                "title": "선발과정",
                "href": "#apply3",
                "qna": [
                    {
                      "q": "삼성 청년 SW 아카데미가 희망하는 인재상은 무엇인가요?",
                      "a": "논리적 사고력, 열정, 학습의지를 갖춘 사람입니다. SW를 잘 이해하고 개발하기 위해서는 논리적이고 창의적으로 사고하는 것이 필요합니다. 또한 SW를 학습하고자 하는 열정, 프로젝트 수행에 필요한 협업 능력 등도 중요합니다. 교육생 선발도 이러한 내용을 바탕으로 진행됩니다."
                    },
                    {
                      "q": "선발 프로세스는 어떻게 되나요?",
                      "a": "지원서 접수 후 SW 적성진단(온라인테스트)이 실시되며, 이후 인터뷰를 거쳐 교육생으로 최종 선발됩니다. 지원서 접수→SW 적성진단→인터뷰→합격자 발표"
                    },
                    {
                      "q": "SW 적성진단 및 인터뷰 대비 관련하여 어떻게 준비하면 될까요?",
                      "a": "SSAFY는 비전공자도 학습을 통해 SW능력을 배양할 수 있도록 하고 있으며, SW 적성진단의 경우 4년제 대학 졸업자라면 해결할 수 있는 문제로 구성하였습니다. 예를 들면, 수학이나 공학에서 많이 사용되는 행렬이나 수열, 확률 기반의 문제를 풀 수 있는 논리적 사고력을 측정합니다. 이에, SSAFY에 입학하기 위해 별도의 강좌 수강 없이도 충분히 대비하실 수 있습니다."
                    }
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                  {
                    "q": "교육과정은 어떻게 운영되나요?",
                    "a": "1년간 2학기 형태로 운영됩니다. 1학기는 코딩 및 알고리즘 집중학습 중심의 기본과정, 2학기는 문제해결 프로젝트 중심의 심화과정으로 구성됩니다. 매일 8시간 이상 진행되는 강도 높은 교육과정으로 구성되어 있으며, 수업을 성실하게 수강하고 주어지는 모든 과제를 착실하게 완수해야 본 교육과정을 수료할 수 있습니다."
                  },
                  {
                    "q": "SW 비전공자가 따라가기 어려운 커리큘럼은 아닌가요?",
                    "a": "비전공자를 위한 반을 따로 구성하여 코딩의 기초부터 학습하며, 5개월간 진행되는 1학기 기본교육은 스스로 App을 개발할 수 있는 수준까지의 역량 향상을 목표로 합니다. 그리고 추가학습이 필요한 교육생을 위해 강사 밀착 지도와 보충학습 등도 실시하고 있습니다."
                  }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                  {
                    "q": "교육기간은 어떻게 되나요?",
                    "a": "총 12개월의 교육기간을 통해 문제해결 능력을 갖춘 경쟁력 있는 차세대 SW 인력양성을 목표로 합니다. 5개월 기본과정 + 1차 JOB FAIR + 5개월 심화과정 + 2차 JOB FAIR "
                  },{
                    "q": "교육 장소(지역)은 어떻게 결정되나요?",
                    "a": "교육은 전국의 취업 준비생에게 기회를 제공하고, 지역별로 한정된 교육 인프라를 효율적으로 활용하기 위해 서울, 대전, 광주, 구미 4개 지역에서 실시하며, 지원서 작성시 희망 지역을 선택할 수 있습니다. (1지망/2지망) 지역배정은 1지망을 우선 고려하되, 지역별 선발규모에 따라 2지망으로 배정될 수도 있습니다."
                  },
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                    {
                        "q": "교육생에게는 어떤 사항들이 지원되나요?",
                        "a": "교육생에게는 양질의 SW 교육이 무료로 제공될 뿐만 아니라, 교육기간 중 월 100만원의 교육지원비도 제공됩니다. 또한, 개인별 맞춤형 취업 컨설팅 서비스가 제공되며, 교육성적 우수자에게는 삼성전자 해외연구소 실습기회가 주어집니다."
                    }
                ]
            }
        ]
      }
    ],
    "boostcamp" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                    {
                        "q": "웹이나 iOS가 아닌 다른 분야의 개발자로 경력이 있을 경우 지원이 가능한가요?",
                        "a": "분야에 관계없이 2년 이상의 현업 개발 경력을 가진 분은 지원이 불가능합니다."
                    },
                    {
                        "q": "최종 학력 또는 전공과 관계없이 지원이 가능한가요?",
                        "a": "네 가능합니다. 최종 학력이나 전공 여부와 관계없이 2020년 하반기에 풀타임으로 프로그램 참여가 가능한 분이라면 지원 가능합니다."
                    }
                ]
            },{
                "title": "모집규모 및 분야",
                "href": "#apply2",
                "qna": [
                    {
                        "q": "웹 풀스택, 모바일 iOS 분야별 선발 인원이 정해져 있나요?",
                        "a": "아니요, 분야별로 인원을 정해두고 선발하지 않습니다."
                    },
                    {
                        "q": "지원할 때 반드시 웹 풀스택, 모바일 iOS 중 하나를 선택해야 하나요?",
                        "a": "네, 지원 시 두 분야 중 하나를 선택해야 합니다. 서로 다른 프로그래밍 언어를 사용하여 부스트캠프 기간 동안 충분한 연습이 필요하기 때문입니다."
                    }
                ]
            },{
                "title": "선발과정",
                "href": "#apply3",
                "qna": [
                    {
                        "q": "코딩테스트는 어떻게 진행되나요?",
                        "a": "코딩테스트는 온라인으로 진행합니다. 개인 노트북을 지참해야 하며, 사용 가능한 프로그래밍 언어는 C, C++, C#, Java, JavaScript, Kotlin, Python2, Python3, Swift입니다. 자세한 내용은 추후 서류 합격자에 한해 안내해 드릴 예정입니다."
                    },
                    {
                        "q": "면접은 따로 없나요?",
                        "a": "이번 부스트캠프는 별도의 면접 과정이 없습니다."
                    }
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                    {
                        "q": "부스트캠프에서 사용하는 프로그래밍 언어는 무엇인가요?",
                        "a": "웹 풀스택 과정은 JavaScript, HTML, CSS를 사용하며, 모바일 iOS는 Swift를 사용합니다."
                    },
                    {
                      "q": "부스트캠프 멤버십에만 참여할 수는 없나요?",
                      "a": "네, 아쉽게도 챌린지 과정을 수료한 사람에게 멤버십 참가 자격이 주어집니다. 따라서 멤버십에만 참여하는 것은 불가능합니다."
                  }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                    {
                        "q": "온라인으로 진행된다면 개인이 원하는 시간대에 참여할 수 있나요?",
                        "a": "아니요, 부스트캠프는 동료와 함께 학습하는 프로그램이기 때문에 정해진 일과 시간(월~금 10:00~19:00)에 필수로 참여해야 합니다."
                    },{
                        "q": "현업 또는 학업으로 코어타임 중 일부 시간대에 참여할 수 없는데 괜찮을까요?",
                        "a": "정해진 일과 시간에 풀타임으로 참여가 가능한 사람만 참가 가능합니다."
                    },{
                        "q": "오프라인 활동이 있다면 어디서 진행되나요?",
                        "a": "오프라인 활동은 주로 커넥트재단 교육장(서울 강남)에서 진행되며 운영 상황에 따라 추후 변동이 있을 수 있습니다."
                    }
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                    {
                        "q": "부스트캠프는 무료인가요?",
                        "a": "네 무료입니다."
                    }
                ]
            },
            {
                "title": "교육장비",
                "href": "#etc2",
                "qna": [
                    {
                        "q": "참가자에게 노트북 대여가 가능한가요?",
                        "a": "대여하지 않습니다. 개인 노트북을 지참해야 합니다."
                    }
                ]
            }
        ]
      }
    ],
    "soma" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                  {
                    "q": "지원자격에서 학력·전공·경력의 제한이 있나요?",
                    "a": "학력·전공·경력의 제한은 없으나 SW개발(언어)능력을 갖추어야 하고, 지원서 접수 마감일 기준 대한민국 국적을 가진 미취업자이어야 합니다."
                  },{
                    "q": "과정 참여 중 취업 등으로 인해 SW마에스트로 과정을 포기해야 하면 어떡하나요?",
                    "a": "SW마에스트로 과정은 팀을 이루어 프로젝트를 수행하는 것이 주 활동이고 팀원 한명의 이탈에 대한 다른 팀원들의 상실감과 불이익이 매우 크므로 취업이 확정되었거나 연수기간 중 취업이 예정되어 있는 경우라면 지원하지 않는 것이 바람직합니다.   "
                  }
                ]
            },{
                "title": "모집규모 및 분야",
                "href": "#apply2",
                "qna": [
                    {
                        "q": "모집규모 및 분야가 어떻게 되나요?",
                        "a": "150명, SW 분야 입니다."
                    }
                ]
            },{
                "title": "선발과정",
                "href": "#apply3",
                "qna": [
                  {
                    "q": "응시원서의 PC활용능력의 프로그램명에는 어떤 내용을 써야하나요?",
                    "a": "프로그램명에는 관련 웹, 앱 또는 프레임워크, 플랫폼 등 자유롭게 기재해 주시기 바랍니다.(예: JAVA - Spring, C# - .NET)"
                  },{
                    "q": "응시원서에 언어의 숙련도에 따른 분류를 선택하게 되어 있는데 숙련도에 대한 결정 근거가 있는지요?",
                    "a": "응시자의 주관적인 기준에 따라 판단하시면 됩니다."
                  },{
                      "q": "코딩 테스트는 어떤 수준의 문제가 출제되나요?",
                      "a": "120분간 10개 내외 문제가 출제될 예정입니다. 난이도는 다양하게 구성되어 있으며 코딩 테스트 샘플 및 방법은 대상자들에게 사전 안내될 예정입니다."
                  }
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                    {
                        "q": "연수과정 시 교육은 언제 어떻게 진행되나요? ",
                        "a": "오프라인 집체 교육이 몇 회 정도 예정되어 있고, 연수생 전체 워크샵과 개인평가, 프로젝트 팀 평가(2회) 등이 있습니다. 또한 프로젝트를 진행함에 있어 멘토링, 팀 회의 등 오프라인에서 진행해야 하는 요소도 비정기적으로 발생합니다. 연수센터는 365일 24시간 개방되어 있으므로 멘토링과 팀 회의는 자율적으로 협의에 의해 조절하여 진행하시면 됩니다."
                    }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                    {
                        "q": "현재 대학생인데 수업을 진행하면서 연수과정에 참여할 수 있나요?",
                        "a": "SW마에스트로 과정은 자기주도형 학습과 팀 프로젝트 수행을 위주로 진행되어 어느 정도 시간 조절이 가능합니다. 다만, 필수로 참석해야 하는 행사 및 평가 등이 있어 이 부분은 일정 조정이 필요하며 연수과정 참여가 본인의 대학 수업에 지장이 없다고 판단되면 지원 해 주십시오. 필요시, 연수과정 중 행사 및 평가 참여에 따른 참가확인서를 발행하여 드립니다."
                    }, {
                      "q": "연수센터는 어디인가요?",
                      "a": "SW마에스트로센터는 서울 강남구 역삼동에 위치하여, 연수생의 창의적 개발공간을 마련하고 SW전문가들에게 코워킹 스페이스를 제공하여 상호 교류할 수 있는 탄력적 공간을 제공합니다."
                  }
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                  {
                    "q": "연수생 지원금이 있나요?",
                    "a": "교육과정 중 (6개월) 매월 100만원 지급되며, 팀별 프로젝트 활동비, 기술정보수집비 등 지원합니다."
                  },{
                    "q": "연수과정 중 자기주도적인 강의를 수강할 수 있게 지원을 해준다고 하는데 자세한 지원 범위가 어떻게 되나요?",
                    "a": "연수기간 6~7개월 동안 통상 5과목 내외에서 유/무료 강의를 지원합니다. 자기주도형 학습의 취지와 목적은 프로젝트 수행을 위해 필요한 지식을 습득하게 하는 것이므로 프로젝트와 연관이 있는 교육과목을 신청하셔야 합니다.  "
                  }
                ]
            },
            {
                "title": "교육장비",
                "href": "#etc2",
                "qna": [
                    {
                        "q": "IT기기 지원이 가능한가요?",
                        "a": "노트북 등 IT기기 구입비 최대 150만원 지원(1회)합니다."
                    }
                ]
            }
        ]
      }
    ],
    "woowa" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                  {
                    "q": "컴퓨터 관련 전공자만 참가할 수 있나요?",
                    "a": "전공과 상관없이 지원 가능합니다. 다만, 본 교육 과정은 프로그래밍에 대한 기본 지식과 경험을 가지신 분들이 참여하실 수 있습니다."
                  },
                  {
                    "q": "회사를 다니고 있는 주니어 개발자나 개발 경력이 있는 사람도 지원 가능한가요?",
                    "a": "지원은 가능합니다. 하지만 우아한테크코스의 교육과정이 꼭 필요하다고 생각하는 사람들을 우선적으로 선발합니다. 그래서 우아한테크코스의 교육과정이 아니라 다른 곳을 통해서 취업이나 이직이 가능하다고 생각하는 분들은 우선순위에서 밀릴 수 있습니다."
                  }
                ]
            },{
                "title": "모집규모 및 분야",
                "href": "#apply2",
                "qna": [
                  {
                    "q": "최종 선발 인원은 몇 명인가요?",
                    "a": "최종 선발 인원은 50명 내외입니다.(2020년 기준)"
                  }
                ]
            },{
                "title": "선발과정",
                "href": "#apply3",
                "qna": [
                  {
                    "q": "온라인 코딩 테스트는 어떤 언어로 테스트 하나요?",
                    "a": "온라인 코딩테스트에서는 Java, C++, Python2, Python3, Javascript, Kotlin, Swift 를 지원할 예정입니다. 자신있는 언어로 참여하시면 됩니다."
                  },{
                    "q": "온라인 코딩테스트는 알고리즘 문제풀이 형식으로 진행되나요?",
                    "a": "온라인 코딩테스트는 알고리즘 위주의 문제보다는 논리적인 사고력을 검증하는 문제 위주로 출제될 예정입니다."
                  },{
                    "q": "면접은 어떤 방식으로 진행되나요?",
                    "a": "면접은 진행하지 않고 자기소개서, 프리코스, 오프라인 코딩 테스트를 기반으로 합격생을 선발합니다."
                  },{
                    "q": "지원 과정을 보면 프리코스가 있는데 프리코스에서 무슨 활동을 하나요?",
                    "a": "프리코스는 온라인 코딩 테스트를 통과한 사람들을 대상으로 본 과정을 미리 경험해 보는 단계입니다. 본 과정과 같이 매주 미션을 하나씩 구현하고 제출하는 방식으로 진행합니다. 이 과정을 통해 지원자는 본 과정을 미리 경험해 보면서 교육의 참여 여부를 결정할 수 있습니다."
                }
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                  {
                    "q": "우아한 테크캠프와 다른 점이 무엇인가요?",
                    "a": "우아한 테크캠프는 인턴 과정으로 현장에서 필요로하는 역량을 두 달 동안 진행하는 교육 과정이라면 우아한테크코스는 최소한의 프로그래밍 지식과 역량을 가진 상태에서 현장에서 업무가 가능한 상태의 교육을 진행하는 교육 과정입니다."
                  },{
                    "q": "수료의 기준이 어떻게 되나요?",
                    "a": "우아한테크코스는 4개의 레벨로 구성되어 있습니다. 4개의 레벨을 모두 수료해야 최종 수료할 수 있습니다."
                  },{
                    "q": "수료 후 우아한형제들에 입사할 기회가 있나요?",
                    "a": "우아한테크코스를 수료한 교육생 중 일부를 신입사원으로 선발할 계획은 있습니다. 하지만 반드시 우형에 입사하지 않더라도 우형에 준하는 회사에 입사할 기회는 많아질 것입니다."
                  }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                  {
                    "q": "교육 시간과 장소는 어떻게 되나요?",
                    "a": "공식적인 교육 시간은 월요일 1시 ~ 6시, 화~금 10시 ~ 6시로 진행합니다. 장소는 우아한형제들 회사 내 오프라인 교육장(한국루터회관)이 마련되어 있습니다. 대부분의 교육을 온라인 피드백으로 진행하지만 교육은 오프라인 공간에 모여 같이 학습하고 협업하는 방식으로 진행합니다. 공식적인 교육 시간 외에도 정해진 시간 내에 오프라인 교육장을 자유롭게 사용할 수 있습니다."
                  },{
                    "q": "학교, 직장 등과 병행이 가능한가요?",
                    "a": "정해진 교육 시간동안 반드시 오프라인 교육에 참여하는 것을 기본 원칙으로 하고 있기 때문에 병행은 불가능합니다."
                  },{
                    "q": "오프라인 활동이 있다면 어디서 진행되나요?",
                    "a": "오프라인 활동은 주로 커넥트재단 교육장(서울 강남)에서 진행되며 운영 상황에 따라 추후 변동이 있을 수 있습니다."
                  }
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                    {
                        "q": "우아한테크코스 참여시 교육 비용은 어떻게 되나요?",
                        "a": "우아한테크코스는 4주 기준 100만원 수준의 강의료를 책정하고 있습니다. 단, 강의료 전액을 우아한형제들이 지원합니다."
                    }
                ]
            },
            {
                "title": "교육장비",
                "href": "#etc2",
                "qna": [
                    {
                        "q": "우아한테크코스 참여시 실습할 장비는 지급하나요?",
                        "a": "우아한테크코스는 별도의 장비를 지급하지 않습니다. 개인 실습 장비는 각자 준비해야 합니다."
                    }
                ]
            }
        ]
      }
    ],
    "likelion" : [
      {
        "category" : "지원/선발",
        "eventKey" : "apply",
        "subCategory": [
            {
                "title": "지원자격",
                "href": "#apply1",
                "qna": [
                    {
                        "q": "컴퓨터 전공생도 신청 할 수 있나요?",
                        "a": "당연합니다. 멋쟁이사자처럼 전체의 약 35%가 컴퓨터 공학 관련 전공생입니다. 0) 대학교 수업을 따라가기에 불편함이 있는 경우, 1) 학교에서 배우는 이론보다 현장에 쓰이는 도구를 배우고 싶을 때 많이 신청 합니다."
                    },
                    {
                        "q": "컴퓨터 비전공생도 신청 할 수 있나요?",
                        "a": "당연하죠."
                    },
                    {
                        "q": "우리학교에서 열리지 않습니다. 타 학교로 지원 가능한가요?",
                        "a": "원칙적으로는 불가능합니다. 하지만 일부 학교에서 수락을 하는 경우가 있으니, 해당 학교에 문의하시면 정확한 답을 얻을 수 있습니다."
                    },
                    {
                        "q": "졸업생 및 대학원생도 지원 가능한가요?",
                        "a": "원칙적으로는 불가능합니다. 하지만 일부 학교에서 수락을 하는 경우가 있습니다. 해당 학교에 질문하는것이 정확할것 같습니다."
                    }
                ]
            }
        ]
    },{
        "category": "교육과정",
        "eventKey": "learn",
        "subCategory": [
            {
                "title": "교육내용",
                "href": "#learn1",
                "qna": [
                    {
                        "q": "수업 방식은 어떻게 되나요? 동영상 강의가 제공되나요?",
                        "a": "각 학교 운영진이 직접 수업 합니다. 추가적인 수업 영상이 제공 될 순 있으나, 영상은 보조 역할에 그칠것입니다."
                    },
                    {
                      "q": "영상을 제공하지 않는 이유는 뭔가요?",
                      "a": "영상으로 수업하니, 집에서 인터넷 강의만 듣고 끝나버리는 경우가 많았습니다. 멋사는 같이 IT 서비스를 만드는게 목표인 동아리입니다. 학습으로 끝나는걸 원치 않기에 영상 제공은 최소화 할 예정입니다."
                  }
                ]
            },
           {
                "title": "교육시간 및 장소",
                "href": "#learn2",
                "qna": [
                    {
                      "q": "활동 기간이 얼마인가요?",
                      "a": "올해부터 1년입니다."
                    },{
                      "q": "만약 합격한다면 어떤 요일에 활동하게 되는지 알 수 있을까요?",
                      "a": "학교별로 활동날짜는 완전 달라서, 학교에 물어보면 정확합니다."
                    },{
                      "q": "학기중에 병행가능할까요? 시간을 많이 투자해야하나요?",
                      "a": "병행 가능합니다. 근데 휴학하는 비율도 적진 않습니다."
                    }
                ]
            }
        ]
    },{
        "category": "기타",
        "eventKey": "etc",
        "subCategory": [
            {
                "title": "교육비용",
                "href": "#etc1",
                "qna": [
                    {
                        "q": "수업료가 별도로 있나요?",
                        "a": "수업료는 없고, 중앙회비가 3만원이 있습니다. 추가적으로 각 학교별로 별도 회비가 있는 경우도 있습니다. 회비는 해커톤, 엠티 지원, 아이디어톤 등의 개최에 사용됩니다."
                    }
                ]
            }
        ]
      }
    ]
  }

  let dataList = allDataList[program];
//user 데이터값이 바뀌면 해당 컴포넌트가 re-rendering된다.
  const myData = useSelector((state) => state.faqReducer);

  let data;
  const dispatch = useDispatch(); // 디스패치 사용하도록하기
  useEffect(()=>{
    data = dispatch({type:'GET_FAQ_DATA'});      
  },[])

  console.log(data);
  // console.log(myData)
  return (
    <div className={styles.firstTab}>
      {console.log('랜더링됨')}
      <Tabs defaultActiveKey={dataList[0].eventKey} transition={false}>
        {dataList.map((v, idx) => (
          <Tab eventKey={v.eventKey} title={v.category} key={idx}>
            <FaqTab subList={v.subCategory} key={idx}/>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}