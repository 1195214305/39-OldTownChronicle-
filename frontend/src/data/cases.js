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
  },

  // 关卡2：剧院谋杀案
  {
    id: 2,
    title: "剧院谋杀案",
    subtitle: "著名女演员后台离奇身亡",
    date: "1925年11月5日",
    weather: "晴转多云",
    difficulty: "简单",
    description: "皇家大剧院当红女演员艾琳娜在演出后被发现死于化妆间",

    newspaper: {
      header: {
        issueNumber: "No. 19266",
        date: "1925年 11月 5日",
        weather: "天气：晴转多云",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "皇家大剧院惊魂夜：\\n当红女演员命丧化妆间",
        reporter: "李文笔",
        tag: "独家报道",
        content: [
          {
            text: "昨晚，本市皇家大剧院发生了一起震惊全城的谋杀案。",
            clues: [
              {
                id: "victim",
                text: "当红女演员艾琳娜·罗斯在演出结束后被发现死于自己的化妆间",
                category: "受害者信息"
              }
            ]
          },
          {
            text: "据警方透露，",
            clues: [
              {
                id: "time_of_death",
                text: "死亡时间约在晚上10点至11点之间，正值演出结束后的混乱时段",
                category: "时间线索"
              },
              {
                id: "cause_of_death",
                text: "死因为颈部遭钝器重击，现场发现一个沾血的水晶奖杯",
                category: "作案手法"
              }
            ]
          },
          {
            text: "剧院经理在接受采访时表示：",
            clues: [
              {
                id: "scene_locked",
                text: "\\\"化妆间的门从内部反锁，我们不得不破门而入才发现了这一惨剧\\\"",
                category: "现场情况"
              }
            ]
          },
          {
            text: "值得注意的是，",
            clues: [
              {
                id: "window_open",
                text: "化妆间的窗户大开，窗台上有新鲜的脚印痕迹",
                category: "现场情况"
              },
              {
                id: "trophy_origin",
                text: "凶器是艾琳娜三个月前获得的\\\"最佳女演员\\\"奖杯，平时就摆放在化妆台上",
                category: "物证"
              }
            ]
          },
          {
            text: "警方正在调查所有在场人员，",
            clues: [
              {
                id: "suspects_present",
                text: "包括剧院工作人员、演员和当晚的观众",
                category: "嫌疑人范围"
              }
            ]
          }
        ],
        image: {
          description: "图：警方封锁的化妆间现场，窗户大开"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "皇家大剧院本周演出",
          subtitle: "《茶花女》最后三场！",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "performance_info",
                  text: "主演：艾琳娜·罗斯（女主角）、维克多·格雷（男主角）",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "understudy",
                  text: "替补演员：莉莉安·怀特（女主角替补）",
                  category: "嫌疑人信息"
                }
              ]
            },
            {
              text: "票价：5-20先令",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "剧院内幕",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "rivalry",
                  text: "有剧组成员透露，替补演员莉莉安与艾琳娜关系紧张，莉莉安曾多次抱怨\\\"永远只能当替补\\\"",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "argument",
                  text: "演出前两小时，有人听到艾琳娜的化妆间传出激烈争吵声，似乎是两个女人的声音",
                  category: "目击证词"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "lillian_absence",
                  text: "演出结束后，莉莉安消失了近一个小时，她声称自己在后台休息室休息",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "dress_stain",
                  text: "有工作人员注意到莉莉安的裙子上有可疑的深色污渍",
                  category: "物证"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "剧院花絮",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "window_height",
                  text: "艾琳娜的化妆间位于二楼，窗外有一条狭窄的装饰檐口，理论上可以从隔壁房间攀爬过来",
                  category: "现场情况"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "next_room",
                  text: "化妆间隔壁正是莉莉安的休息室，两个房间的窗户相距不到三米",
                  category: "现场情况"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "athletic_ability",
                  text: "莉莉安曾是专业芭蕾舞演员，身手敏捷，平衡感极佳",
                  category: "嫌疑人技能"
                }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "警方调查进展",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "footprint_match",
                  text: "警方发现窗台上的脚印尺码与莉莉安的鞋子吻合",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "alibi_weak",
                  text: "莉莉安声称案发时在休息室，但无人能证实她的不在场证明",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "motive_confirmed",
                  text: "剧院导演证实，艾琳娜生前曾向他推荐另一位演员接替莉莉安的替补位置",
                  category: "作案动机"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "专家分析",
          content: [
            {
              text: "法医专家指出，",
              clues: [
                {
                  id: "attack_angle",
                  text: "从伤口角度判断，凶手身高与受害者相仿，且力量足以一击致命",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "locked_door_theory",
                  text: "门从内部反锁的情况表明，凶手很可能是从窗户逃离现场",
                  category: "专家意见"
                }
              ]
            }
          ]
        },
        {
          title: "目击者证词",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "witness_statement",
                  text: "一名清洁工称，案发时间前后看到一个穿着演出服的女性身影在二楼走廊徘徊",
                  category: "目击证词"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是凶手？",
        type: "radio",
        options: [
          { value: "manager", label: "剧院经理" },
          { value: "lillian", label: "替补演员莉莉安" },
          { value: "victor", label: "男主角维克多" },
          { value: "cleaner", label: "清洁工" }
        ],
        correctAnswer: "lillian"
      },
      {
        id: "method",
        question: "凶手如何进入反锁的化妆间？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "key", label: "偷了艾琳娜的钥匙" },
          { value: "window", label: "从隔壁房间沿檐口攀爬进入" },
          { value: "ventilation", label: "通过通风管道" }
        ],
        correctAnswer: "window"
      },
      {
        id: "motive",
        question: "凶手的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "jealousy", label: "嫉妒艾琳娜的成功和地位" },
          { value: "money", label: "为了金钱利益" },
          { value: "revenge", label: "报复私人恩怨" }
        ],
        correctAnswer: "jealousy"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>替补演员莉莉安因长期嫉妒艾琳娜的成功，加上得知自己即将被替换，在演出结束后从自己房间的窗户攀爬到艾琳娜的化妆间，用奖杯将其杀害，然后从窗户返回。她利用芭蕾舞演员的身手完成了这次\\\"密室\\\"谋杀。你的推理能力令人钦佩！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了凶手，真正的凶手还在逍遥法外。",
          wrongMethod: "嫌疑人确实是莉莉安，但她不是这样进入化妆间的。",
          wrongMotive: "动机分析有误，她的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，再仔细看看线索？"
      }
    }
  },

  // 关卡3：银行劫案
  {
    id: 3,
    title: "银行劫案",
    subtitle: "中央银行金库离奇失窃",
    date: "1925年11月15日",
    weather: "大雾",
    difficulty: "简单",
    description: "中央银行金库在重重守卫下被盗走5万英镑现金",

    newspaper: {
      header: {
        issueNumber: "No. 19276",
        date: "1925年 11月 15日",
        weather: "天气：大雾",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "中央银行惊天劫案：\\n金库5万英镑不翼而飞",
        reporter: "张铁笔",
        tag: "重大案件",
        content: [
          {
            text: "昨日凌晨，本市中央银行发生了一起震惊全城的劫案。",
            clues: [
              {
                id: "stolen_amount",
                text: "金库内5万英镑现金被盗，这是本市有史以来最大的银行劫案",
                category: "案件概况"
              }
            ]
          },
          {
            text: "警方透露，",
            clues: [
              {
                id: "time_window",
                text: "案发时间在凌晨3点至5点之间，正值大雾弥漫，能见度不足10米",
                category: "时间线索"
              },
              {
                id: "no_break_in",
                text: "奇怪的是，金库大门完好无损，没有任何被撬开或破坏的痕迹",
                category: "现场情况"
              }
            ]
          },
          {
            text: "银行行长在接受采访时表示：",
            clues: [
              {
                id: "vault_access",
                text: "\\\"金库需要两把钥匙同时使用才能打开，一把由我保管，另一把由保安队长持有\\\"",
                category: "安保情况"
              }
            ]
          },
          {
            text: "据了解，",
            clues: [
              {
                id: "alarm_disabled",
                text: "案发当晚金库警报系统被人为关闭，监控记录显示是使用了正确的密码",
                category: "作案手法"
              },
              {
                id: "inside_job",
                text: "警方初步判断这是一起内外勾结的案件，作案者对银行内部非常熟悉",
                category: "专家意见"
              }
            ]
          }
        ],
        image: {
          description: "图：警方在银行金库前勘查现场"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "中央银行招聘启事",
          subtitle: "诚聘出纳员、保安等职位",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "new_hire",
                  text: "本行出纳员汤姆·布朗于三个月前入职，工作认真负责，深得客户信赖",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "待遇优厚，五险一金齐全",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "银行内幕",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "gambling_debt",
                  text: "有银行员工透露，出纳员汤姆最近经常出入地下赌场，据说欠下了巨额赌债",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "key_copy",
                  text: "清洁工称，上周看到汤姆在行长办公室逗留很久，当时行长不在",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "security_captain",
                  text: "保安队长证实，案发前一天他的钥匙曾短暂失踪过半小时，后来在办公桌上找到",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "tom_absence",
                  text: "案发当晚，汤姆声称自己在家休息，但邻居表示凌晨4点左右看到他匆忙回家",
                  category: "嫌疑人行踪"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "警方调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "fingerprints",
                  text: "警方在金库内发现了汤姆的指纹，但他辩称自己白天工作时经常进出金库",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "fog_advantage",
                  text: "专家分析，作案者利用大雾天气，即使被监控拍到也难以辨认面容",
                  category: "作案手法"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "key_expertise",
                  text: "警方发现保安队长的钥匙曾被人制作了蜡模，这需要专业的开锁技能",
                  category: "作案手法"
              }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "街头传闻",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "locksmith_skill",
                  text: "有人透露，汤姆的父亲是一名退休锁匠，汤姆从小就跟父亲学习开锁技术",
                  category: "嫌疑人技能"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "debt_amount",
                  text: "地下赌场老板证实，汤姆欠下的赌债正好是5万英镑左右",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "alarm_code",
                  text: "银行内部人员透露，只有少数几个人知道警报系统的密码，汤姆是其中之一",
                  category: "作案手法"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "目击者证词",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "witness_fog",
                  text: "一名夜班出租车司机称，凌晨4点左右在银行附近看到一个提着大包的身影消失在雾中",
                  category: "目击证词"
                }
              ]
            }
          ]
        },
        {
          title: "专家分析",
          content: [
            {
              text: "银行安保专家指出，",
              clues: [
                {
                  id: "inside_knowledge",
                  text: "作案者必定对银行的安保系统了如指掌，包括警报密码、钥匙位置和监控盲区",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "timing_perfect",
                  text: "选择大雾天气作案，说明作案者经过了精心策划，等待最佳时机",
                  category: "专家意见"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是劫匪？",
        type: "radio",
        options: [
          { value: "president", label: "银行行长" },
          { value: "tom", label: "出纳员汤姆" },
          { value: "captain", label: "保安队长" },
          { value: "cleaner", label: "清洁工" }
        ],
        correctAnswer: "tom"
      },
      {
        id: "method",
        question: "他是如何打开金库的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "force", label: "暴力破门" },
          { value: "duplicate_key", label: "复制了保安队长的钥匙，配合行长的钥匙" },
          { value: "password", label: "破解了密码锁" }
        ],
        correctAnswer: "duplicate_key"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "gambling", label: "偿还巨额赌债" },
          { value: "revenge", label: "报复银行" },
          { value: "greed", label: "单纯的贪婪" }
        ],
        correctAnswer: "gambling"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>出纳员汤姆因欠下巨额赌债，利用职务之便偷偷复制了保安队长的钥匙，并利用自己掌握的警报密码，在大雾天气作案。他用复制的钥匙和偷来的行长钥匙打开金库，盗走了正好够还债的5万英镑。你的推理能力令人钦佩！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了劫匪，真正的罪犯还在逍遥法外。",
          wrongMethod: "嫌疑人确实是汤姆，但他不是这样打开金库的。",
          wrongMotive: "动机分析有误，他的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，再仔细分析线索？"
      }
    }
  },

  // 关卡4：豪宅密室案
  {
    id: 4,
    title: "豪宅密室案",
    subtitle: "富商书房密室离奇死亡",
    date: "1925年11月25日",
    weather: "晴朗",
    difficulty: "简单",
    description: "富商威廉在自家书房密室中被发现死亡，门窗紧锁",

    newspaper: {
      header: {
        issueNumber: "No. 19286",
        date: "1925年 11月 25日",
        weather: "天气：晴朗",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "富商豪宅惊现密室死亡：\\n威廉先生离奇身亡",
        reporter: "赵文豪",
        tag: "重大案件",
        content: [
          {
            text: "昨日下午，本市著名富商威廉·哈里森在自家豪宅的书房中被发现死亡。",
            clues: [
              {
                id: "victim_info",
                text: "威廉是本市最大的纺织厂老板，身家超过百万英镑",
                category: "受害者信息"
              }
            ]
          },
          {
            text: "警方透露，",
            clues: [
              {
                id: "locked_room",
                text: "书房的门从内部反锁，窗户也紧闭，现场呈现典型的密室状态",
                category: "现场情况"
              },
              {
                id: "poison_death",
                text: "初步判断死因为氰化物中毒，死者手边有一杯红酒",
                category: "作案手法"
              }
            ]
          },
          {
            text: "管家在接受采访时表示：",
            clues: [
              {
                id: "discovery",
                text: "\\\"下午3点，我按照惯例送下午茶，敲门无人应答，破门而入才发现老爷已经去世\\\"",
                category: "目击证词"
              }
            ]
          },
          {
            text: "据了解，",
            clues: [
              {
                id: "wine_source",
                text: "死者手边的红酒是他最喜欢的1900年波尔多，平时锁在书房的酒柜里",
                category: "物证"
              },
              {
                id: "family_tension",
                text: "威廉与儿子查尔斯关系紧张，因为查尔斯沉迷赌博，威廉威胁要断绝父子关系",
                category: "背景信息"
              }
            ]
          }
        ],
        image: {
          description: "图：警方在豪宅书房勘查现场"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "哈里森纺织厂",
          subtitle: "本市最大的纺织企业",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "business_success",
                  text: "威廉·哈里森白手起家，三十年间将小作坊发展成拥有千名工人的大厂",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "优质面料，诚信经营",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "豪门内幕",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "son_gambling",
                  text: "查尔斯最近在赌场输掉了5万英镑，多次向父亲要钱被拒",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "inheritance",
                  text: "威廉曾威胁要修改遗嘱，将全部财产捐给慈善机构",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "argument",
                  text: "案发前一天，有佣人听到父子俩在书房激烈争吵",
                  category: "目击证词"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "charles_access",
                  text: "查尔斯是唯一拥有书房备用钥匙的人，他声称钥匙一直在自己房间",
                  category: "嫌疑人信息"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "警方调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "wine_poisoned",
                  text: "警方化验发现，红酒中含有致命剂量的氰化物",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "bottle_clean",
                  text: "奇怪的是，酒瓶上只有威廉的指纹，没有其他人的痕迹",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "charles_chemistry",
                  text: "查尔斯曾在大学学习化学，对各种化学物质非常熟悉",
                  category: "嫌疑人技能"
                }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "街头传闻",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "advance_poisoning",
                  text: "有佣人透露，查尔斯前天曾独自进入书房，在酒柜前停留了很久",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "alibi",
                  text: "案发时查尔斯声称自己在花园散步，但没有人能证实",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "motive_urgent",
                  text: "赌场老板给查尔斯下了最后通牒，必须在本周内还清债务，否则性命不保",
                  category: "作案动机"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "专家分析",
          content: [
            {
              text: "毒理学专家指出，",
              clues: [
                {
                  id: "poison_timing",
                  text: "氰化物起效极快，死者应该是在喝下红酒后几分钟内死亡",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "advance_plan",
                  text: "凶手很可能提前在酒瓶中下毒，等待死者自己饮用，这样就能制造密室假象",
                  category: "专家意见"
                }
              ]
            }
          ]
        },
        {
          title: "管家证词",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "daily_routine",
                  text: "管家证实，威廉每天下午2点都会独自在书房品酒，这是他多年的习惯",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "wine_habit",
                  text: "威廉总是自己从酒柜取酒，从不让别人代劳",
                  category: "背景信息"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是凶手？",
        type: "radio",
        options: [
          { value: "butler", label: "管家" },
          { value: "charles", label: "儿子查尔斯" },
          { value: "maid", label: "女佣" },
          { value: "business_partner", label: "生意伙伴" }
        ],
        correctAnswer: "charles"
      },
      {
        id: "method",
        question: "他是如何在密室中杀人的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "secret_passage", label: "通过密道进入" },
          { value: "advance_poison", label: "提前在酒瓶中下毒，等待受害者自己饮用" },
          { value: "remote_device", label: "使用远程装置投毒" }
        ],
        correctAnswer: "advance_poison"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "inheritance", label: "为了继承遗产和偿还赌债" },
          { value: "revenge", label: "报复父亲的严厉管教" },
          { value: "business", label: "争夺公司控制权" }
        ],
        correctAnswer: "inheritance"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>查尔斯因欠下巨额赌债且面临父亲断绝关系的威胁，利用自己的化学知识，提前在父亲最爱的红酒中下毒。他知道父亲每天下午都会独自品酒，利用这个习惯制造了完美的密室杀人案。你成功破解了这个看似不可能的密室之谜！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了凶手，真正的罪犯还在逍遥法外。",
          wrongMethod: "嫌疑人确实是查尔斯，但他不是这样作案的。",
          wrongMotive: "动机分析有误，他的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，密室之谜需要更仔细的推理！"
      }
    }
  },

  // 关卡5：码头走私案
  {
    id: 5,
    title: "码头走私案",
    subtitle: "神秘货船深夜走私被查",
    date: "1925年12月5日",
    weather: "阴雨",
    difficulty: "简单",
    description: "海关在码头查获一艘走私船，船长涉嫌走私违禁品",

    newspaper: {
      header: {
        issueNumber: "No. 19296",
        date: "1925年 12月 5日",
        weather: "天气：阴雨",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "码头惊现走私大案：\\n神秘货船载运违禁品",
        reporter: "孙海涛",
        tag: "独家报道",
        content: [
          {
            text: "昨夜，海关在东码头查获一艘涉嫌走私的货船。",
            clues: [
              {
                id: "ship_info",
                text: "这艘名为\\\"海鸥号\\\"的货船，船长是本地人马克·陈",
                category: "基本信息"
              }
            ]
          },
          {
            text: "海关官员透露，",
            clues: [
              {
                id: "contraband",
                text: "船上藏有价值10万英镑的鸦片，隐藏在标注为\\\"茶叶\\\"的木箱中",
                category: "物证"
              },
              {
                id: "inspection_time",
                text: "海关是在凌晨2点例行检查时发现异常的",
                category: "时间线索"
              }
            ]
          },
          {
            text: "船长马克在接受讯问时辩称：",
            clues: [
              {
                id: "captain_defense",
                text: "\\\"我不知道货物里有违禁品，这批货是客户委托运输的\\\"",
                category: "嫌疑人陈述"
              }
            ]
          },
          {
            text: "然而，",
            clues: [
              {
                id: "manifest_fake",
                text: "海关发现货物清单是伪造的，上面的印章与正规商行的印章不符",
                category: "物证"
              },
              {
                id: "route_suspicious",
                text: "该船的航行路线异常，绕过了多个正常的停靠港",
                category: "作案手法"
              }
            ]
          }
        ],
        image: {
          description: "图：海关人员在\\\"海鸥号\\\"上搜查"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "东方航运公司",
          subtitle: "专业货运服务",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "company_info",
                  text: "马克·陈是东方航运公司的资深船长，从业15年，一向信誉良好",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "安全快捷，值得信赖",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "码头传闻",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "debt_crisis",
                  text: "有码头工人透露，马克最近因投资失败欠下了巨额债务，债主多次上门催债",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "mysterious_client",
                  text: "马克曾向同事提起，有个神秘客户愿意出高价让他运一批\\\"特殊货物\\\"",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "payment_advance",
                  text: "上周有人看到马克收到一大笔现金，他声称是预付款",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "night_loading",
                  text: "装货是在深夜进行的，马克特意支开了其他船员，独自监督装货",
                  category: "嫌疑人行踪"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "海关调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "hidden_compartment",
                  text: "海关在船舱发现了专门改造的暗格，用于藏匿违禁品",
                  category: "作案手法"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "modification_recent",
                  text: "船舱的改造是最近才完成的，马克亲自监督了改造工程",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "contact_records",
                  text: "警方在马克的住处发现了与走私团伙联系的记录",
                  category: "物证"
                }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "知情人爆料",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "previous_trips",
                  text: "有线人举报，这不是马克第一次走私，过去三个月他至少运过两次违禁品",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "profit_motive",
                  text: "每次走私马克可以获得5000英镑的报酬，这对欠债累累的他来说是巨大诱惑",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "aware_of_risk",
                  text: "马克曾对朋友说\\\"只要再干几票，就能还清所有债务\\\"",
                  category: "作案动机"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "专家分析",
          content: [
            {
              text: "海关专家指出，",
              clues: [
                {
                  id: "professional_operation",
                  text: "这种走私手法非常专业，需要对海关检查流程和航运规则非常熟悉",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "inside_knowledge",
                  text: "船舱暗格的设计巧妙，如果不是例行检查恰好发现异常，很难被查获",
                  category: "专家意见"
                }
              ]
            }
          ]
        },
        {
          title: "警方声明",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "arrest",
                  text: "马克·陈已被正式逮捕，警方正在追查走私团伙的其他成员",
                  category: "案件进展"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "confession",
                  text: "在确凿证据面前，马克承认了走私罪行，称是为了偿还债务而铤而走险",
                  category: "案件进展"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是走私的主犯？",
        type: "radio",
        options: [
          { value: "mark", label: "船长马克·陈" },
          { value: "crew", label: "船员" },
          { value: "client", label: "神秘客户" },
          { value: "customs", label: "海关内鬼" }
        ],
        correctAnswer: "mark"
      },
      {
        id: "method",
        question: "他是如何走私的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "bribe", label: "贿赂海关人员" },
          { value: "hidden_compartment", label: "在船舱改造暗格藏匿违禁品" },
          { value: "fake_documents", label: "伪造所有文件蒙混过关" }
        ],
        correctAnswer: "hidden_compartment"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "debt", label: "偿还巨额债务" },
          { value: "greed", label: "单纯的贪婪" },
          { value: "coercion", label: "被走私团伙胁迫" }
        ],
        correctAnswer: "debt"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>船长马克·陈因投资失败欠下巨债，在走私团伙的高额报酬诱惑下，利用自己的航运知识和船长身份，在船舱改造暗格走私鸦片。他以为可以神不知鬼不觉，却在例行检查中露出马脚。你成功破获了这起走私大案！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了主犯，真正的罪犯还在逍遥法外。",
          wrongMethod: "嫌疑人确实是马克，但他不是这样走私的。",
          wrongMotive: "动机分析有误，他的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，再仔细分析码头的线索！"
      }
    }
  },

  // 关卡6：报社纵火案
  {
    id: 6,
    title: "报社纵火案",
    subtitle: "旧城纪事报社深夜遭纵火",
    date: "1925年12月15日",
    weather: "晴朗",
    difficulty: "简单",
    description: "旧城纪事报社深夜遭人纵火，大量档案被烧毁",

    newspaper: {
      header: {
        issueNumber: "No. 19306",
        date: "1925年 12月 15日",
        weather: "天气：晴朗",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "本报社昨夜遭纵火：\\n大量珍贵档案付之一炬",
        reporter: "编辑部",
        tag: "紧急报道",
        content: [
          {
            text: "昨夜凌晨3点，本报社档案室突发大火。",
            clues: [
              {
                id: "fire_location",
                text: "火势集中在二楼档案室，那里存放着近十年的调查资料和敏感文件",
                category: "现场情况"
              }
            ]
          },
          {
            text: "消防队及时赶到，",
            clues: [
              {
                id: "fire_cause",
                text: "初步判断为人为纵火，现场发现了汽油残留物和引火装置",
                category: "作案手法"
              },
              {
                id: "entry_method",
                text: "纵火者从后门进入，后门的锁被撬开",
                category: "作案手法"
              }
            ]
          },
          {
            text: "值得注意的是，",
            clues: [
              {
                id: "targeted_files",
                text: "被烧毁的档案中，包括本报近期正在调查的几起腐败案件的证据材料",
                category: "背景信息"
              },
              {
                id: "recent_threat",
                text: "本报主编上周收到匿名威胁信，警告停止调查某纺织厂老板的偷税案",
                category: "作案动机"
              }
            ]
          },
          {
            text: "警方透露，",
            clues: [
              {
                id: "suspect_identified",
                text: "附近居民在案发前看到一个可疑男子在报社附近徘徊",
                category: "目击证词"
              }
            ]
          }
        ],
        image: {
          description: "图：消防员在扑灭报社大火"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "旧城纪事报",
          subtitle: "真相的守护者",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "investigation_series",
                  text: "本报近期连续报道了多起权贵腐败案件，包括纺织厂老板威廉·哈里森的偷税漏税案",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "挖掘真相，不畏权贵",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "案件背景",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "harrison_case",
                  text: "威廉·哈里森的儿子查尔斯最近因谋杀父亲被捕，本报的调查报道起到了关键作用",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "charles_motive",
                  text: "查尔斯在狱中曾威胁要报复本报，称\\\"你们毁了我的人生\\\"",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "accomplice",
                  text: "警方怀疑查尔斯的朋友帮他实施了报复计划",
                  category: "嫌疑人信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "friend_identity",
                  text: "查尔斯的密友是一名叫彼得的赌场打手，两人曾一起赌博",
                  category: "嫌疑人信息"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "警方调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "witness_description",
                  text: "目击者描述，可疑男子身材魁梧，手臂上有明显的刀疤",
                  category: "目击证词"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "peter_match",
                  text: "警方调查发现，彼得的外貌特征与目击者描述完全吻合",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "peter_alibi",
                  text: "彼得声称案发时在家睡觉，但邻居证实他凌晨2点才回家",
                  category: "嫌疑人行踪"
                }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "深度调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "prison_visit",
                  text: "监狱记录显示，彼得在案发前三天探望过查尔斯",
                  category: "嫌疑人行踪"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "gasoline_purchase",
                  text: "加油站老板证实，彼得在案发前一天购买了一桶汽油，声称要给摩托车加油",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "no_motorcycle",
                  text: "但警方调查发现，彼得根本没有摩托车",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "clothing_evidence",
                  text: "警方在彼得家中搜出了沾有汽油的衣服",
                  category: "物证"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "专家分析",
          content: [
            {
              text: "消防专家指出，",
              clues: [
                {
                  id: "professional_arson",
                  text: "纵火手法虽然简单，但选择的时间和地点都经过精心策划，目的是销毁特定档案",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "revenge_motive",
                  text: "这起纵火案带有明显的报复性质，纵火者对报社的布局非常了解",
                  category: "专家意见"
                }
              ]
            }
          ]
        },
        {
          title: "警方声明",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "arrest_news",
                  text: "警方已逮捕嫌疑人彼得，他承认受查尔斯委托纵火报复本报",
                  category: "案件进展"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "confession",
                  text: "彼得供述，查尔斯在狱中请他帮忙\\\"教训一下那些多管闲事的记者\\\"",
                  category: "案件进展"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是纵火犯？",
        type: "radio",
        options: [
          { value: "charles", label: "查尔斯（在狱中）" },
          { value: "peter", label: "彼得（查尔斯的朋友）" },
          { value: "harrison", label: "威廉·哈里森的其他亲属" },
          { value: "competitor", label: "竞争对手报社" }
        ],
        correctAnswer: "peter"
      },
      {
        id: "method",
        question: "他是如何纵火的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "window", label: "从窗户爬入" },
          { value: "backdoor", label: "撬开后门进入，用汽油纵火" },
          { value: "inside_job", label: "内部人员协助" }
        ],
        correctAnswer: "backdoor"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "revenge", label: "受查尔斯委托报复报社" },
          { value: "money", label: "为了金钱利益" },
          { value: "personal", label: "个人恩怨" }
        ],
        correctAnswer: "revenge"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>彼得受狱中的查尔斯委托，为了报复本报对哈里森家族腐败案的调查报道，撬开后门潜入报社，用汽油纵火焚烧档案室。他以为可以毁灭证据，却没想到目击者和物证将他送上了法庭。正义永不缺席！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了纵火犯，真正的罪犯还在逍遥法外。",
          wrongMethod: "嫌疑人确实是彼得，但他不是这样纵火的。",
          wrongMotive: "动机分析有误，他的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，再仔细分析报社的线索！"
      }
    }
  },

  // 关卡7：市长暗杀案
  {
    id: 7,
    title: "市长暗杀案",
    subtitle: "市长在公开演讲时遭枪击",
    date: "1925年12月25日",
    weather: "晴朗",
    difficulty: "简单",
    description: "市长在圣诞节演讲时遭狙击手暗杀，凶手逃之夭夭",

    newspaper: {
      header: {
        issueNumber: "No. 19316",
        date: "1925年 12月 25日",
        weather: "天气：晴朗",
        motto: "挖掘真相，不畏权贵"
      },

      headline: {
        title: "圣诞惊魂：\\n市长演讲时遭枪击身亡",
        reporter: "全体编辑部",
        tag: "紧急号外",
        content: [
          {
            text: "昨日下午，本市市长约翰·史密斯在市政广场发表圣诞演讲时遭枪击身亡。",
            clues: [
              {
                id: "shooting_location",
                text: "枪声来自广场东侧的钟楼方向，距离演讲台约200米",
                category: "现场情况"
              }
            ]
          },
          {
            text: "警方透露，",
            clues: [
              {
                id: "sniper_shot",
                text: "这是一起精心策划的狙击暗杀，凶手使用的是军用步枪，一枪命中要害",
                category: "作案手法"
              },
              {
                id: "escape_route",
                text: "凶手在作案后从钟楼后门逃离，现场留下了弹壳和脚印",
                category: "物证"
              }
            ]
          },
          {
            text: "市长的遗孀在接受采访时悲痛欲绝：",
            clues: [
              {
                id: "widow_statement",
                text: "\\\"约翰一直致力于打击腐败，他得罪了很多权贵，我早就担心会有这一天\\\"",
                category: "背景信息"
              }
            ]
          },
          {
            text: "据了解，",
            clues: [
              {
                id: "anti_corruption",
                text: "市长最近正在调查一起涉及多名商界大佬的腐败案件，包括已故富商威廉·哈里森的偷税案",
                category: "背景信息"
              },
              {
                id: "threat_received",
                text: "市长在案发前一周收到过匿名死亡威胁，警告他停止调查",
                category: "作案动机"
              }
            ]
          }
        ],
        image: {
          description: "图：市政广场演讲台，警方正在勘查现场"
        }
      },

      sidebar: [
        {
          type: "advertisement",
          title: "市长约翰·史密斯生平",
          subtitle: "人民的好市长",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "mayor_background",
                  text: "约翰·史密斯担任市长三年，以铁腕反腐著称，曾成功查处多起贪污案件",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "他的离去是本市的巨大损失",
              clues: []
            }
          ]
        },
        {
          type: "gossip",
          title: "案件调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "suspect_identified",
                  text: "警方根据脚印和目击者描述，锁定了一名退伍军人——詹姆斯·布莱克",
                  category: "嫌疑人信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "military_background",
                  text: "詹姆斯曾是军队狙击手，枪法精准，退伍后一直找不到工作",
                  category: "嫌疑人技能"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "financial_motive",
                  text: "有人透露，詹姆斯最近突然有钱了，还清了所有债务，购买了新衣服",
                  category: "作案动机"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "hired_killer",
                  text: "警方怀疑詹姆斯是受雇杀手，背后有人出钱买凶",
                  category: "嫌疑人信息"
                }
              ]
            }
          ]
        },
        {
          type: "news",
          title: "深度调查",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "rifle_evidence",
                  text: "警方在詹姆斯的住处搜出了作案用的军用步枪，弹道痕迹与现场弹壳吻合",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "bank_records",
                  text: "银行记录显示，詹姆斯在案发前三天收到了一笔1万英镑的匿名汇款",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "witness_testimony",
                  text: "有目击者看到詹姆斯在案发当天下午进入钟楼，手里提着一个长条形包裹",
                  category: "目击证词"
                }
              ]
            }
          ]
        },
        {
          type: "gossip",
          title: "幕后黑手",
          items: [
            {
              text: "",
              clues: [
                {
                  id: "mastermind_clue",
                  text: "警方在詹姆斯家中发现了一张纸条，上面写着\\\"完成任务后到码头3号仓库取尾款\\\"",
                  category: "物证"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "warehouse_owner",
                  text: "3号仓库的所有者是一名神秘商人，与多起走私案件有关",
                  category: "嫌疑人信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "corruption_network",
                  text: "市长正在调查的腐败案件涉及一个庞大的利益集团，包括商人、官员和黑帮",
                  category: "背景信息"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "james_confession",
                  text: "詹姆斯被捕后承认受雇杀人，但拒绝透露雇主身份，称\\\"说出来我全家都会没命\\\"",
                  category: "案件进展"
                }
              ]
            }
          ]
        }
      ],

      bottomNews: [
        {
          title: "专家分析",
          content: [
            {
              text: "刑侦专家指出，",
              clues: [
                {
                  id: "professional_hit",
                  text: "这是一起典型的职业杀手作案，从选择狙击点到逃跑路线都经过精心策划",
                  category: "专家意见"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "political_motive",
                  text: "暗杀市长的动机很可能与他的反腐行动有关，幕后黑手试图阻止调查",
                  category: "专家意见"
                }
              ]
            }
          ]
        },
        {
          title: "警方声明",
          content: [
            {
              text: "",
              clues: [
                {
                  id: "arrest_announcement",
                  text: "警方已逮捕枪手詹姆斯·布莱克，正在全力追查幕后主使",
                  category: "案件进展"
                }
              ]
            },
            {
              text: "",
              clues: [
                {
                  id: "investigation_continues",
                  text: "警方承诺将彻查此案，不放过任何一个涉案人员，还市长一个公道",
                  category: "案件进展"
                }
              ]
            }
          ]
        }
      ]
    },

    totalClues: 20,

    questions: [
      {
        id: "suspect",
        question: "谁是开枪的凶手？",
        type: "radio",
        options: [
          { value: "james", label: "退伍军人詹姆斯·布莱克" },
          { value: "bodyguard", label: "市长的保镖" },
          { value: "businessman", label: "神秘商人" },
          { value: "gangster", label: "黑帮成员" }
        ],
        correctAnswer: "james"
      },
      {
        id: "method",
        question: "他是如何作案的？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "close_range", label: "近距离开枪" },
          { value: "sniper", label: "从钟楼狙击" },
          { value: "bomb", label: "使用炸弹" }
        ],
        correctAnswer: "sniper"
      },
      {
        id: "motive",
        question: "他的作案动机是什么？",
        type: "select",
        options: [
          { value: "", label: "请选择..." },
          { value: "hired", label: "受雇杀人，为了金钱" },
          { value: "revenge", label: "个人恩怨报复" },
          { value: "political", label: "政治理念冲突" }
        ],
        correctAnswer: "hired"
      }
    ],

    endings: {
      success: {
        title: "真相大白！",
        message: "精彩的推理！<br><br>退伍军人詹姆斯·布莱克因生活困顿，接受了腐败利益集团的雇佣，利用自己的狙击手技能从钟楼暗杀了正在调查腐败案件的市长。虽然枪手落网，但幕后黑手仍在逃。正义的道路任重道远，但真相终将大白于天下！<br><br>恭喜你完成了所有关卡，你是真正的神探！"
      },
      failure: {
        title: "推理错误",
        messages: {
          wrongSuspect: "你指认错了枪手，真正的凶手还在逍遥法外。",
          wrongMethod: "嫌疑人确实是詹姆斯，但他不是这样作案的。",
          wrongMotive: "动机分析有误，他的真实动机并非如此。"
        },
        conclusion: "别灰心，大侦探，这是最后一案，再仔细推理一次！"
      }
    }
  }
];

export default cases;
