// 旧城纪事报探案 - 关卡数据
export const cases = [
  {
    id: 1,
    title: "博物馆窃案",
    subtitle: "海神之泪蓝宝石失窃",
    date: "1925年10月24日",
    weather: "暴雨转阴",
    difficulty: "简单",
    description: "维多利亚博物馆镇馆之宝\"海神之泪\"在重重安保下不翼而飞",
    
    // 报纸内容
    newspaper: {
      header: {
        issueNumber: "No. 19254",
        date: "1925年 10月 24日",
        weather: "天气：暴雨转阴",
        motto: "挖掘真相，不畏权贵"
      },
      
      // 头条新闻
      headline: {
        title: "博物馆惊天窃案：\n\"海神之泪\"昨夜离奇消失",
        reporter: "王墨水",
        tag: "现场直击",
        content: [
          {
            text: "昨夜，本市著名的维多利亚博物馆发生了一起令人震惊的盗窃案。镇馆之宝——价值连城的蓝宝石\"海神之泪\"，在重重安保之下不翼而飞。",
            clues: []
          },
          {
            text: "据警方透露，警报并未在案发时响起。博物馆馆长在今早开馆时才发现展柜空空如也。",
            clues: [
              {
                id: "entry_method",
                text: "警方勘查现场发现，位于展厅正上方的天窗玻璃被整齐地切开，现场留有绳索摩擦的痕迹。",
                category: "作案手法"
              }
            ]
          },
          {
            text: "\"这简直是不可能的犯罪！\"保安队长向记者抱怨，",
            clues: [
              {
                id: "security",
                text: "\"昨晚大门紧锁，只有我有大门的钥匙，而且我和兄弟们整晚都在大厅巡逻，没有看到任何人进出。\"",
                category: "安保情况"
              }
            ]
          },
          {
            text: "值得注意的是，昨晚本市遭遇了",
            clues: [
              {
                id: "weather",
                text: "五十年一遇的特大暴雨",
                category: "环境因素"
              },
              {
                id: "thunder",
                text: "雷声掩盖了许多声响",
                category: "环境因素"
              }
            ]
          },
          {
            text: "警方推测窃贼具有极高的攀爬技巧和心理素质。",
            clues: []
          },
          {
            text: "博物馆馆长威廉·哈里森在接受采访时表示：",
            clues: [
              {
                id: "curator_statement",
                text: "\"这颗宝石是我们博物馆的骄傲，价值至少50万英镑。我们已经悬赏1万英镑寻找线索。\"",
                category: "悬赏信息"
              }
            ]
          },
          {
            text: "据了解，",
            clues: [
              {
                id: "exhibition",
                text: "这颗蓝宝石原定于下周运往伦敦参加国际珠宝展",
                category: "背景信息"
              },
              {
                id: "insurance",
                text: "博物馆已为其投保了巨额保险",
                category: "背景信息"
              }
            ]
          }
        ],
        image: {
          description: "图：破碎的展柜与上方悬挂的绳索残片"
        }
      },
      
      // 侧边栏内容
      sidebar: [
        {
          type: "advertisement",
          title: "皇家马戏团盛大公演！",
          subtitle: "就在今晚！中央广场！",
          content: [
            {
              text: "本市最受欢迎的表演！特别是我们的王牌——",
              clues: [
                {
                  id: "suspect_skill",
                  text: "\"飞人\"杰克，他那如猿猴般敏捷的身手，能在没有任何保护措施的情况下攀爬至钟楼顶端！",
                  category: "嫌疑人技能"
                }
              ]
            },
            {
              text: "票价仅需 5 先令",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "街头巷议",
          items: [
            {
              text: "东区的面包价格又上涨了。",
              clues: []
            },
            {
              text: "",
              clues: [
                {
                  id: "motive",
                  text: "有人目击\"飞人\"杰克昨日在地下赌场与债主发生激烈争执，据说他欠下了巨额赌债，被威胁断手断脚。",
                  category: "作案动机"
                },
                {
                  id: "debt_amount",
                  text: "据传杰克欠下的赌债高达2000英镑",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "市政厅计划修缮排水系统。",
              clues: []
            },
            {
              text: "",
              clues: [
                {
                  id: "witness",
                  text: "有居民称昨晚11点左右看到一个黑影在博物馆屋顶移动",
                  category: "目击证词"
                }
              ]
            }
          ]
        },
        {
          type: "weather",
          title: "昨日天气回顾",
          content: [
            {
              text: "昨夜雷暴肆虐，风力达到8级。屋顶湿滑，市民出行困难。",
              clues: [
                {
                  id: "danger",
                  text: "这使得任何室外作业都变得极度危险。",
                  category: "环境因素"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "其他新闻",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "circus_schedule",
                  text: "皇家马戏团昨晚的演出因暴雨临时取消，所有演员当晚休息",
                  category: "时间线索"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "jack_absence",
                  text: "马戏团经理证实，\"飞人\"杰克昨晚并未出现在团员宿舍",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "rope_evidence",
                  text: "警方在现场发现的绳索与马戏团使用的特制绳索材质相同",
                  category: "物证"
                }
              ]
            }
          ]
        }
      ],
      
      // 底部新闻
      bottomNews: [
        {
          title: "警方悬赏缉拿窃贼",
          content: [
            {
              text: "警察局长宣布，",
              clues: [
                {
                  id: "reward",
                  text: "任何提供有效线索导致破案者，将获得500英镑奖金",
                  category: "悬赏信息"
                }
              ]
            }
          ]
        },
        {
          title: "专家分析",
          content: [
            {
              text: "著名侦探顾问分析称，",
              clues: [
                {
                  id: "expert_opinion",
                  text: "此案作案者必定是经过专业训练的攀爬高手，普通人绝无可能在暴雨中完成如此高难度的攀爬",
                  category: "专家意见"
                },
                {
                  id: "time_estimate",
                  text: "根据现场痕迹推测，作案时间应在晚上10点至凌晨2点之间",
                  category: "时间线索"
                }
              ]
            }
          ]
        }
      ]
    },
    
    // 线索总数
    totalClues: 20,
    
    // 推理问题
    questions: [
      {
        id: "suspect",
        question: "谁是那个小偷？",
        type: "radio",
        options: [
          { value: "guard", label: "保安队长" },
          { value: "acrobat", label: "\"飞人\"杰克" },
          { value: "reporter", label: "记者王墨水" },
          { value: "director", label: "博物馆馆长" }
        ],
        correctAnswer: "acrobat"
      },
      {
        id: "method",
        question: "他是如何进入博物馆的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "key", label: "偷了保安的钥匙从大门进入" },
          { value: "skylight", label: "通过高超技巧从屋顶天窗潜入" },
          { value: "hide", label: "闭馆前躲在厕所里" }
        ],
        correctAnswer: "skylight"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "collection", label: "为了私人收藏" },
          { value: "revenge", label: "报复博物馆馆长" },
          { value: "debt", label: "偿还巨额赌债" }
        ],
        correctAnswer: "debt"
      }
    ],
    
    // 结局文本
    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>\"飞人\"杰克利用暴雨声作掩护，凭借高超的杂技技巧从天窗潜入。他急于偿还赌债，所以铤而走险。你的名字将作为神探登上明天的头条！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你抓错了人，真凶还在逍遥法外。",
          wrongMethod: "嫌疑人确实是杰克，但他不可能像你说的那么进去。",
          wrongMotive: "动机分析错误，他并不像你想的那样。"
        },
        conclusion: "别灰心，大侦探，再试一次？"
      }
    }
  }
];

export default cases;
