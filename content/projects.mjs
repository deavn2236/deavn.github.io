// Public bilingual content.
export const projects = [
  {
    "id": "kangaroo",
    "title": {
      "zh": "大模型驱动的子母车跨室内外物流配送系统",
      "en": "LLM-driven macro–micro robot delivery across indoor and outdoor environments"
    },
    "summary": {
      "zh": "面向跨室内外物流配送，以大语言模型分解需求，结合 SLAM、RTK 与 MPC 协调子母车；已在大厅—小房间、室外道路—窄通道场景验证运输、交接和末端导航。",
      "en": "For delivery across indoor and outdoor environments, language-model planning, SLAM, RTK, and MPC coordinate macro–micro vehicles; transport, handoff, and final navigation are validated across hall–room and road–narrow-path settings."
    },
    "facts": [
      {
        "label": {
          "zh": "项目时间",
          "en": "Period"
        },
        "value": {
          "zh": "2024.08—2025.06",
          "en": "Aug 2024–Jun 2025"
        }
      },
      {
        "label": {
          "zh": "本人职责",
          "en": "Role"
        },
        "value": {
          "zh": "核心开发者",
          "en": "Core developer"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "室外道路、大厅、窄通道和房间对机器人尺寸与通行能力的要求不同。单一移动平台难以同时兼顾长距离运输与室内末端任务，因此采用大小载具协作衔接不同尺度环境。",
            "en": "Outdoor roads, halls, narrow passages, and rooms impose different size and mobility requirements. A macro–micro team links long-distance transport with the final indoor task."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "用户通过自然语言提出配送或导航需求，系统将其分解为母车移动、子车卸载、进入目标区域和协同返回等动作。典型任务涵盖大厅至小房间以及室外道路至窄路。",
            "en": "The system translates natural-language requests into vehicle movement, micro-vehicle unloading, target-area entry, and coordinated return. Tasks span a large hall to a small room and outdoor roads to narrow paths."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/kangaroo-scenario.webp",
            "caption": {
              "zh": "跨尺度、跨室内外的子母车协作任务",
              "en": "Macro–micro collaboration across scales and environments"
            }
          }
        ]
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot platforms"
        },
        "paragraphs": [
          {
            "zh": "母车搭载 Robosense Helios 16 三维激光雷达、N100 IMU、ZED-F9P GPS-RTK、车载计算单元和电动滑轨；子车搭载 RealSense 相机、RPLIDAR A3 与车载计算单元。母车负责大范围运输，子车进入狭窄目标区域。",
            "en": "The macro vehicle carries a Robosense Helios 16 LiDAR, N100 IMU, ZED-F9P GPS-RTK, onboard computer, and an electric sliding rail. The micro vehicle uses a RealSense camera, RPLIDAR A3, and an onboard computer for access to confined targets."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/kangaroo-platform.webp",
            "caption": {
              "zh": "论文中的子母车设备配置与尺寸",
              "en": "Robot hardware and dimensions from the paper"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "迭代反馈规划器将用户需求转化为运动原语，并利用规则反馈检查任务逻辑与执行可行性。底层控制结合多传感器建图定位和导航，按场景调用 RTK、SLAM 与 MPC；大小载具之间交换状态和控制信息。",
            "en": "An iterative feedback planner converts requests into motion primitives and uses rule-based feedback to check task logic and feasibility. Multi-sensor mapping, localization, and navigation combine RTK, SLAM, and MPC, with state and command exchange between the vehicles."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/kangaroo-architecture.webp",
            "caption": {
              "zh": "语言反馈规划、双车导航与协同执行架构",
              "en": "Language feedback planning and coordinated vehicle navigation"
            }
          },
          {
            "src": "assets/papers/kangaroo-ifplanner.webp",
            "caption": {
              "zh": "迭代反馈规划器",
              "en": "Iterative feedback planner"
            }
          },
          {
            "video": "assets/projects/kangaroo/method.mp4",
            "poster": "assets/projects/kangaroo/method.poster.webp",
            "caption": {
              "zh": "方法说明：需求分解、反馈检查与双车执行",
              "en": "Method: demand decomposition, feedback, and coordinated execution"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "方法视频展示任务分解与跨环境执行；分场景片段展示大小载具如何完成交接和进入目标区域。不同硬件平台上的装卸、对接与走廊行驶作为系统迁移演示放在最后。",
            "en": "The method video shows task decomposition and execution across environments. Separate clips illustrate vehicle handoffs and access to confined targets. Loading, docking, and corridor travel with another hardware configuration are presented last as platform transfer demonstrations."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/kangaroo/indoor.mp4",
            "poster": "assets/projects/kangaroo/indoor.poster.webp",
            "caption": {
              "zh": "大厅—小房间：运输、释放、狭窄空间执行与返回对接",
              "en": "Hall–small room: transport, release, confined-space execution, and return docking"
            }
          },
          {
            "video": "assets/projects/kangaroo/outdoor.mp4",
            "poster": "assets/projects/kangaroo/outdoor.poster.webp",
            "caption": {
              "zh": "室外道路—狭窄通道：跨环境行驶与建筑入口通行",
              "en": "Outdoor road–narrow path: cross-environment navigation and building access"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验",
          "en": "Experiments"
        },
        "paragraphs": [
          {
            "zh": "在 VastHall–TinyRoom 与 OutdoorRoad–NarrowPath 两类真实场景中，按直接/间接表达以及单/多需求形成四类任务。完整系统在两类场景中的成功率分别为 85–88% 和 78–81%。",
            "en": "Real-world evaluation covers VastHall–TinyRoom and OutdoorRoad–NarrowPath, with four task types combining direct/indirect expressions and single/multiple demands. Success ranges from 85–88% and 78–81%, respectively."
          },
          {
            "zh": "在间接多需求任务中，加入反馈后，VastHall–TinyRoom 的成功率由 33% 提升至 85%，OutdoorRoad–NarrowPath 由 30% 提升至 78%。独立导航模块测试中，母车导航成功率为 92.7%，子车为 100%。",
            "en": "For indirect multiple-demand tasks, feedback raises success from 33% to 85% in VastHall–TinyRoom and from 30% to 78% in OutdoorRoad–NarrowPath. Separate navigation-module evaluation obtains 92.7% success for the macro vehicle and 100% for the micro vehicle."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/kangaroo-results.webp",
            "caption": {
              "zh": "不同环境与任务复杂度的成功率",
              "en": "Success rates across environments and task complexity"
            }
          }
        ],
        "metrics": [
          {
            "value": "85–88%",
            "label": {
              "zh": "VastHall–TinyRoom，四类需求任务成功率",
              "en": "VastHall–TinyRoom success across four demand types"
            }
          },
          {
            "value": "78–81%",
            "label": {
              "zh": "OutdoorRoad–NarrowPath，四类需求任务成功率",
              "en": "OutdoorRoad–NarrowPath success across four demand types"
            }
          }
        ],
        "table": {
          "caption": {
            "zh": "完整系统的真实跨环境任务成功率",
            "en": "Real-world cross-environment success of the full system"
          },
          "columns": [
            {
              "zh": "场景",
              "en": "Scenario"
            },
            {
              "zh": "直接单需求",
              "en": "Direct single"
            },
            {
              "zh": "直接多需求",
              "en": "Direct multiple"
            },
            {
              "zh": "间接单需求",
              "en": "Indirect single"
            },
            {
              "zh": "间接多需求",
              "en": "Indirect multiple"
            }
          ],
          "rows": [
            [
              "VastHall–TinyRoom",
              "88%",
              "88%",
              "88%",
              "85%"
            ],
            [
              "OutdoorRoad–NarrowPath",
              "81%",
              "81%",
              "81%",
              "78%"
            ]
          ]
        }
      },
      {
        "id": "transfer",
        "title": {
          "zh": "不同设备的迁移演示",
          "en": "Transfer to other robot platforms"
        },
        "paragraphs": [
          {
            "zh": "将子母车协同流程迁移到不同母车与载台配置，展示运输、装卸、对接及室内行驶。",
            "en": "The cooperative workflow is transferred to different macro vehicles and carrier configurations, with transport, loading, docking, and indoor travel."
          }
        ],
        "figures": [
          {
            "video": "assets/projects/kangaroo/ppt-05.mp4",
            "poster": "assets/projects/kangaroo/ppt-05.poster.webp",
            "caption": {
              "zh": "不同设备迁移：轮椅母车与子车交接",
              "en": "Platform transfer: wheelchair macro vehicle and micro-vehicle handoff"
            }
          },
          {
            "video": "assets/projects/kangaroo/ppt-06.mp4",
            "poster": "assets/projects/kangaroo/ppt-06.poster.webp",
            "caption": {
              "zh": "不同设备迁移：轮式母车与子车对接及室内执行",
              "en": "Platform transfer: wheeled macro vehicle, docking, and indoor execution"
            }
          },
          {
            "video": "assets/projects/kangaroo/ppt-07.mp4",
            "poster": "assets/projects/kangaroo/ppt-07.poster.webp",
            "caption": {
              "zh": "不同设备迁移：母车走廊运输",
              "en": "Platform transfer: macro-vehicle corridor transport"
            }
          },
          {
            "video": "assets/projects/kangaroo/demo.mp4",
            "poster": "assets/projects/kangaroo/poster.webp",
            "caption": {
              "zh": "不同设备迁移：原主页展示的装卸、对接与室内行驶片段",
              "en": "Platform transfer: the loading, docking, and indoor-travel clip previously shown on the homepage"
            }
          }
        ]
      }
    ],
    "categoryKey": "navigation",
    "category": {
      "zh": "跨环境协作导航",
      "en": "Cross-environment navigation"
    },
    "year": "2024–2025",
    "media": {
      "video": "assets/projects/kangaroo/indoor.mp4",
      "poster": "assets/projects/kangaroo/indoor.poster.webp",
      "alt": {
        "zh": "Kangaroo子母车在大厅与小房间间协同配送",
        "en": "Kangaroo robot delivery across a hall and a small room"
      }
    },
    "relatedPapers": [
      "kangaroo-paper"
    ],
    "period": {
      "zh": "2024.08—2025.06",
      "en": "Aug 2024–Jun 2025"
    }
  },
  {
    "id": "library-robot",
    "title": {
      "zh": "四足移动操作机器人跨楼层图书整理与自主取放系统",
      "en": "Quadruped mobile manipulation for cross-floor book organization and pick-and-place"
    },
    "summary": {
      "zh": "面向多楼层图书整理与自主取放，融合激光惯性 SLAM、视觉图书定位和抓取规划；完成四足上下楼、楼层移动及书架操作的实机演示。",
      "en": "For multi-floor book handling, LiDAR–inertial SLAM, visual book localization, and grasp planning support a quadruped manipulator; real demonstrations cover stairs, floor-to-floor mobility, and shelf operation."
    },
    "facts": [
      {
        "label": {
          "zh": "项目时间",
          "en": "Period"
        },
        "value": {
          "zh": "2023.02—2024.07",
          "en": "Feb 2023–Jul 2024"
        }
      },
      {
        "label": {
          "zh": "合作单位",
          "en": "Partner"
        },
        "value": {
          "zh": "深圳理工大学",
          "en": "Shenzhen University of Advanced Technology"
        }
      },
      {
        "label": {
          "zh": "本人职责",
          "en": "Role"
        },
        "value": {
          "zh": "核心开发者",
          "en": "Core developer"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "阶梯式或多楼层图书馆中，图书整理需要在楼层、书架和取放位置之间连续移动。项目以四足机器人的楼梯通行能力结合机械臂操作，连接跨楼层运输和图书整理。",
            "en": "Stepped and multi-floor libraries require robots to move between floors, shelves, and manipulation poses. A quadruped carries an arm to connect stair traversal with book organization."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/library-robot/ppt/summary-image49.webp",
            "caption": {
              "zh": "多层图书馆中的跨楼层任务场景",
              "en": "Cross-floor task setting in a multi-level library"
            }
          }
        ]
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "接收取书或放书任务后，机器人定位目标书架与书籍，移动到操作位置，生成抓取或插入位姿并执行取放。跨楼层时需要保持平台与运送物品稳定，并在到达书架后完成对位。",
            "en": "Given a retrieval or return request, the robot localizes the shelf and book, moves to an operation pose, plans grasp or insertion poses, and executes the action. Floor transitions require stable transport, followed by shelf alignment."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "四足平台采用云深处机器人，配合睿尔曼机械臂、Livox 三维激光雷达和 RealSense 相机。激光雷达与惯性信息服务于建图定位，相机服务于书架与书籍感知。",
            "en": "The platform combines a DEEP Robotics quadruped, a RealMan arm, Livox 3D LiDAR, and RealSense sensing. LiDAR and inertial data support mapping and localization; cameras observe shelves and books."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/library-robot/ppt/summary-image50.webp",
            "caption": {
              "zh": "四足移动操作机器人样机",
              "en": "Quadruped mobile manipulator prototype"
            }
          },
          {
            "src": "assets/projects/library-robot/ppt/summary-image51.webp",
            "caption": {
              "zh": "书架前的机械臂取放作业",
              "en": "Arm operation in front of a bookshelf"
            }
          },
          {
            "src": "assets/projects/library-robot/ppt/summary-image55.webp",
            "caption": {
              "zh": "四足平台与传感器布局",
              "en": "Quadruped platform and sensor layout"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "系统将环境感知、SLAM、三维定位、路径规划和机械臂运动学连接为取放流程。书架与书籍感知提供目标位姿，抓取规划和逆运动学生成机械臂动作，底盘导航负责在楼层和书架之间转移。系统架构还包括 ROS 2、Nav2、MoveIt 2、视觉伺服、夹持反馈和重试恢复。",
            "en": "The system connects perception, SLAM, 3D localization, path planning, and arm kinematics. Shelf and book perception supply target poses, grasp planning and inverse kinematics produce arm actions, and navigation transfers the robot between floors and shelves. The architecture also includes ROS 2, Nav2, MoveIt 2, visual servoing, gripper feedback, and recovery."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/library-robot/ppt/summary-image66.webp",
            "caption": {
              "zh": "图书管理机器人的导航与取放系统框架",
              "en": "Navigation and book-handling architecture shown in the slides"
            }
          },
          {
            "src": "assets/projects/library-robot/ppt/summary-image70.webp",
            "caption": {
              "zh": "图书馆室内导航栅格地图",
              "en": "Indoor occupancy map for library navigation"
            }
          },
          {
            "src": "assets/projects/library-robot/ppt/summary-image71.webp",
            "caption": {
              "zh": "室内三维点云地图与导航轨迹",
              "en": "Indoor point-cloud map and navigation trajectory"
            }
          }
        ],
        "flow": [
          {
            "zh": "Livox / IMU / RGB-D感知",
            "en": "Livox / IMU / RGB-D sensing"
          },
          {
            "zh": "SLAM定位与三维建图",
            "en": "SLAM and 3D mapping"
          },
          {
            "zh": "Nav2移动导航",
            "en": "Nav2 mobile navigation"
          },
          {
            "zh": "书架与书本位姿估计",
            "en": "Shelf and book pose estimation"
          },
          {
            "zh": "MoveIt 2抓取与取放",
            "en": "MoveIt 2 grasping and placement"
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "视频补充完整样机移动、机械臂抓书、楼梯接近、上下楼与不同场景行驶。导航与操作通过统一任务流程衔接；书架附近的感知与操作画面用于说明从目标定位到抓取执行的过程。",
            "en": "The demonstrations cover prototype mobility, book grasping, stair approach and traversal, and movement in different settings. Navigation and manipulation are connected through the task flow, with shelf-side footage showing perception and action."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/library-robot/ppt-12.mp4",
            "poster": "assets/projects/library-robot/ppt-12.poster.webp",
            "caption": {
              "zh": "多层智慧图书馆应用场景动画",
              "en": "Multi-floor smart-library application animation"
            }
          },
          {
            "video": "assets/projects/library-robot/demo.mp4",
            "poster": "assets/projects/library-robot/poster.webp",
            "caption": {
              "zh": "四足移动操作机器人取放测试（一）",
              "en": "Quadruped mobile manipulation test I"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-14.mp4",
            "poster": "assets/projects/library-robot/ppt-14.poster.webp",
            "caption": {
              "zh": "四足机器人楼梯场景与移动测试",
              "en": "Quadruped stair-setting and mobility test"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-15.mp4",
            "poster": "assets/projects/library-robot/ppt-15.poster.webp",
            "caption": {
              "zh": "四足平台机械臂抓取与搬移",
              "en": "Arm grasping and transfer on the quadruped"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-16.mp4",
            "poster": "assets/projects/library-robot/ppt-16.poster.webp",
            "caption": {
              "zh": "楼梯场景中的四足平台控制",
              "en": "Quadruped control in a stair setting"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-17.mp4",
            "poster": "assets/projects/library-robot/ppt-17.poster.webp",
            "caption": {
              "zh": "四足平台遥控与移动测试",
              "en": "Quadruped teleoperation and mobility test"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-18.mp4",
            "poster": "assets/projects/library-robot/ppt-18.poster.webp",
            "caption": {
              "zh": "四足移动操作机器人取放测试（二）",
              "en": "Quadruped mobile manipulation test II"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-20.mp4",
            "poster": "assets/projects/library-robot/ppt-20.poster.webp",
            "caption": {
              "zh": "四足机器人楼梯通行测试（一）",
              "en": "Quadruped stair traversal test I"
            }
          },
          {
            "video": "assets/projects/library-robot/ppt-21.mp4",
            "poster": "assets/projects/library-robot/ppt-21.poster.webp",
            "caption": {
              "zh": "四足机器人楼梯通行测试（二）",
              "en": "Quadruped stair traversal test II"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验与系统迭代",
          "en": "Experiments and iteration"
        },
        "paragraphs": [
          {
            "zh": "PPT 记录楼梯识别、三维感知与抓取验证，并指出嵌入式算力、遮挡、光照和复杂图书摆放是后续优化重点。桌面平放与堆叠书籍的处理、双臂协作和边走边抓属于材料中的后续规划。",
            "en": "The slides document stair recognition, 3D perception, and grasp tests, while identifying embedded compute, occlusion, lighting, and book arrangements as areas for improvement. Handling flat or stacked books, dual-arm work, and manipulation while moving are listed as future directions."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/library-robot/ppt/summary-image72.webp",
            "caption": {
              "zh": "楼梯识别流程与点云检测结果",
              "en": "Stair-recognition pipeline and point-cloud detection"
            }
          },
          {
            "src": "assets/projects/library-robot/ppt/summary-image73.webp",
            "caption": {
              "zh": "机械臂三维抓取与环境感知可视化",
              "en": "3D grasp and environment visualization"
            }
          }
        ]
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "移动操作",
      "en": "Mobile manipulation"
    },
    "year": "2023–2024",
    "media": {
      "video": "assets/projects/library-robot/demo.mp4",
      "poster": "assets/projects/library-robot/poster.webp",
      "alt": {
        "zh": "四足图书馆机器人移动与操作演示",
        "en": "Quadruped library robot mobility and manipulation demo"
      }
    },
    "period": {
      "zh": "2023.02—2024.07",
      "en": "Feb 2023–Jul 2024"
    },
    "organization": {
      "zh": "深圳理工大学",
      "en": "Shenzhen University of Advanced Technology"
    }
  },
  {
    "id": "image-goal",
    "title": {
      "zh": "SCTNav：单目视觉导航系统",
      "en": "SCTNav: Monocular Visual Navigation"
    },
    "summary": {
      "zh": "面向室内外图像目标导航，通过过去、当前与目标图像预测路点，并以单目场景几何约束 MPC；三类真实场景平均成功率为90.8%。",
      "en": "For indoor and outdoor image-goal navigation, past, current, and goal images predict waypoints while monocular scene geometry constrains MPC; average success is 90.8% across three real settings."
    },
    "facts": [
      {
        "label": {
          "zh": "导航输入",
          "en": "Inputs"
        },
        "value": {
          "zh": "历史观测、当前图像与目标图像",
          "en": "Past observations, current image, and goal image"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "图像目标导航通过目标照片指定机器人应到达的位置。项目面向低成本单目平台，研究如何在缺少直接几何目标位姿的情况下，将视觉信息转化为可执行且安全的运动。",
            "en": "Image-goal navigation specifies a destination using a photograph. The project studies how a low-cost monocular robot can turn visual information into safe motion without an explicit geometric target pose."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "机器人根据行进中获取的 RGB 画面判断与目标的关系，持续预测航点并控制底盘前进，在室内走廊、障碍场景和室外道路中抵达目标图像对应的位置。",
            "en": "The robot relates incoming RGB views to the goal image, continually predicts waypoints, and controls its base toward the depicted destination in corridors, obstacle settings, and outdoor routes."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "采用自研全向移动底盘和 RealSense D435i 相机，实验关闭深度通道，仅使用单目 RGB 图像进行视觉推理与场景约束恢复。",
            "en": "A self-developed omnidirectional mobile base uses a RealSense D435i with the depth channel disabled. Visual reasoning and scene constraints use monocular RGB images only."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/image-goal/web-pipline.webp",
            "caption": {
              "zh": "训练数据来源、仿真与实机环境，以及关闭深度通道的单目机器人平台",
              "en": "Training sources, evaluation settings, and the monocular robot with depth disabled"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "P3Net 融合过去、当前与目标图像的时空关系预测航点；SCMPC 将场景约束接入运动优化，使视觉预测与底盘控制衔接。需要用项目网页中的方法视频和室内外演示补充这两个模块的工作过程。",
            "en": "P3Net combines past, current, and goal images to predict waypoints, while SCMPC incorporates scene constraints into motion optimization. The project-page videos explain how visual prediction and base control work together."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/image-goal/web-compare.webp",
            "caption": {
              "zh": "SCTNav与端到端视觉导航方法的比较",
              "en": "SCTNav compared with end-to-end visual navigation"
            }
          },
          {
            "src": "assets/papers/sctnav-framework.webp",
            "caption": {
              "zh": "P3Net路点预测与SCMPC控制框架",
              "en": "P3Net waypoint prediction and SCMPC control"
            }
          },
          {
            "video": "assets/projects/image-goal/web-method.mp4",
            "poster": "assets/projects/image-goal/web-method.poster.webp",
            "caption": {
              "zh": "方法视频：三元时空路点预测与场景约束控制",
              "en": "Method video: ternary spatiotemporal waypoint prediction and scene-constrained control"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "项目页提供室内外实机、走廊导航、方法与对比演示。SCTNav 成功片段和其他方法的失败案例分别标注，用于观察不同场景下的执行行为。",
            "en": "The project page provides indoor and outdoor robot tests, corridor navigation, method videos, and comparisons. SCTNav demonstrations and baseline failure cases are labeled separately."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/image-goal/web-all1.mp4",
            "poster": "assets/projects/image-goal/web-all1.poster.webp",
            "caption": {
              "zh": "跨场景导航总览",
              "en": "Cross-scene navigation overview"
            }
          },
          {
            "video": "assets/projects/image-goal/web-indoor_1.mp4",
            "poster": "assets/projects/image-goal/web-indoor_1.poster.webp",
            "caption": {
              "zh": "狭小房间实机导航 · 1",
              "en": "Confined room real-robot navigation · 1"
            }
          },
          {
            "video": "assets/projects/image-goal/web-indoor_2.mp4",
            "poster": "assets/projects/image-goal/web-indoor_2.poster.webp",
            "caption": {
              "zh": "狭小房间实机导航 · 2",
              "en": "Confined room real-robot navigation · 2"
            }
          },
          {
            "video": "assets/projects/image-goal/web-indoor_3.mp4",
            "poster": "assets/projects/image-goal/web-indoor_3.poster.webp",
            "caption": {
              "zh": "狭小房间实机导航 · 3",
              "en": "Confined room real-robot navigation · 3"
            }
          },
          {
            "video": "assets/projects/image-goal/web-corridor_1.mp4",
            "poster": "assets/projects/image-goal/web-corridor_1.poster.webp",
            "caption": {
              "zh": "长走廊实机导航 · 1",
              "en": "Long corridor real-robot navigation · 1"
            }
          },
          {
            "video": "assets/projects/image-goal/indoor.mp4",
            "poster": "assets/projects/image-goal/indoor-poster.webp",
            "caption": {
              "zh": "长走廊实机导航 · 2",
              "en": "Long corridor real-robot navigation · 2"
            }
          },
          {
            "video": "assets/projects/image-goal/web-corridor_3.mp4",
            "poster": "assets/projects/image-goal/web-corridor_3.poster.webp",
            "caption": {
              "zh": "长走廊实机导航 · 3",
              "en": "Long corridor real-robot navigation · 3"
            }
          },
          {
            "video": "assets/projects/image-goal/web-outdoor_1.mp4",
            "poster": "assets/projects/image-goal/web-outdoor_1.poster.webp",
            "caption": {
              "zh": "室外道路实机导航 · 1",
              "en": "Outdoor path real-robot navigation · 1"
            }
          },
          {
            "video": "assets/projects/image-goal/web-outdoor_2.mp4",
            "poster": "assets/projects/image-goal/web-outdoor_2.poster.webp",
            "caption": {
              "zh": "室外道路实机导航 · 2",
              "en": "Outdoor path real-robot navigation · 2"
            }
          },
          {
            "video": "assets/projects/image-goal/web-outdoor_3.mp4",
            "poster": "assets/projects/image-goal/web-outdoor_3.poster.webp",
            "caption": {
              "zh": "室外道路实机导航 · 3",
              "en": "Outdoor path real-robot navigation · 3"
            }
          }
        ],
        "source": {
          "label": {
            "zh": "演示来源：SCTNav 项目页 · CC BY-SA 4.0",
            "en": "Demonstrations: SCTNav project page · CC BY-SA 4.0"
          },
          "url": "https://anonymous.4open.science/w/SCTNav/index.html"
        }
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验与基线对比",
          "en": "Experiments and baseline comparisons"
        },
        "paragraphs": [
          {
            "zh": "训练数据来自七类模拟器或数据集，约含 8.5 万条轨迹和 250 万张 RGB 图像。仿真在未出现在训练集的四种 Gazebo 布局上评估，包含 102 组固定起终点。完整系统获得 98.0% 成功率、2.0% 碰撞率和 95.1% SPL。",
            "en": "Training uses approximately 85,000 trajectories and 2.5 million RGB images from seven simulators or datasets. Simulation evaluation uses 102 fixed start–goal pairs across four unseen Gazebo layouts. The full system reaches 98.0% success, 2.0% collision rate, and 95.1% SPL."
          },
          {
            "zh": "在三个未见真实环境中直接部署，不进行微调。每个场景包含 10 条轨迹、每条重复 4 次，共 120 次测试。受限房间、长走廊和开放校园成功率分别为 90.0%、97.5% 和 85.0%，平均为 90.8%。",
            "en": "The system transfers without fine-tuning to three unseen real-world environments. Each environment has 10 trajectories repeated four times, totaling 120 runs. Success is 90.0% in confined rooms, 97.5% in long corridors, and 85.0% on an open campus, averaging 90.8%."
          },
          {
            "zh": "P3Net 本身为 13.0M 参数，加入场景几何模块后完整系统为 347.2M 参数。系统在 i7-12700F 与 RTX 3050 的机载平台上运行，D435i 仅启用 RGB，推理无需云端。",
            "en": "P3Net has 13.0M parameters; the full system, including scene-geometry estimation, has 347.2M. It runs onboard an i7-12700F and RTX 3050 platform with only the RGB stream of a D435i enabled, without cloud inference."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/sctnav-realworld.webp",
            "caption": {
              "zh": "受限房间、长走廊和开放校园的真实机器人导航。",
              "en": "Real robot navigation in confined rooms, long corridors, and an open campus."
            }
          },
          {
            "src": "assets/papers/sctnav-results-scenes.webp",
            "caption": {
              "zh": "三个真实环境的成功率比较，每个环境 40 次测试。",
              "en": "Real-world success comparison, with 40 runs in each environment."
            }
          },
          {
            "video": "assets/projects/image-goal/demo.mp4",
            "poster": "assets/projects/image-goal/poster.webp",
            "caption": {
              "zh": "EffoNav：室外预测失效对比",
              "en": "EffoNav: outdoor prediction failure"
            }
          },
          {
            "video": "assets/projects/image-goal/web-fail_predict_flownav.mp4",
            "poster": "assets/projects/image-goal/web-fail_predict_flownav.poster.webp",
            "caption": {
              "zh": "FlowNav：轨迹漂移对比",
              "en": "FlowNav: trajectory drift"
            }
          },
          {
            "video": "assets/projects/image-goal/web-fail_collision_vint.mp4",
            "poster": "assets/projects/image-goal/web-fail_collision_vint.poster.webp",
            "caption": {
              "zh": "ViNT：障碍物安全性对比",
              "en": "ViNT: obstacle safety failure"
            }
          },
          {
            "video": "assets/projects/image-goal/ppt-03.mp4",
            "poster": "assets/projects/image-goal/ppt-03.poster.webp",
            "caption": {
              "zh": "GNM：室内碰撞对比",
              "en": "GNM: indoor collision"
            }
          }
        ],
        "metrics": [
          {
            "value": "98.0%",
            "label": {
              "zh": "Gazebo 仿真成功率，102 组起终点",
              "en": "Simulation success over 102 start–goal pairs"
            }
          },
          {
            "value": "90.8%",
            "label": {
              "zh": "真实三场景平均成功率，共 120 次测试",
              "en": "Mean real-world success over 120 runs"
            }
          }
        ],
        "table": {
          "caption": {
            "zh": "仿真与真实部署主要指标",
            "en": "Simulation and deployment metrics"
          },
          "columns": [
            {
              "zh": "评估",
              "en": "Evaluation"
            },
            {
              "zh": "成功率",
              "en": "Success rate"
            },
            {
              "zh": "碰撞率",
              "en": "Collision rate"
            },
            {
              "zh": "SPL",
              "en": "SPL"
            }
          ],
          "rows": [
            [
              {
                "zh": "仿真，102组起终点",
                "en": "Simulation, 102 start–goal pairs"
              },
              "98.0%",
              "2.0%",
              "95.1%"
            ],
            [
              {
                "zh": "真实三场景平均，120次",
                "en": "Real-world mean, 120 runs"
              },
              "90.8%",
              "—",
              "—"
            ]
          ]
        }
      }
    ],
    "categoryKey": "navigation",
    "category": {
      "zh": "视觉导航",
      "en": "Visual navigation"
    },
    "media": {
      "video": "assets/projects/image-goal/web-indoor_1.mp4",
      "poster": "assets/projects/image-goal/web-indoor_1.poster.webp",
      "alt": {
        "zh": "SCTNav在桌椅间的真实机器人导航",
        "en": "SCTNav real-robot navigation among desks and chairs"
      }
    },
    "relatedPapers": [
      "sctnav"
    ]
  },
  {
    "id": "patrol-inspection",
    "title": {
      "zh": "基于移动操作机器人的厂房自主巡检与设备交互系统",
      "en": "Autonomous plant inspection and equipment interaction with a mobile manipulator"
    },
    "summary": {
      "zh": "面向厂房自主巡检与设备按钮交互，结合移动导航、视觉按钮识别和机械臂接触反馈；在移动操作机器人上完成系统集成与实机演示。",
      "en": "For autonomous plant inspection and button interaction, mobile navigation, visual button recognition, and arm contact feedback are integrated and demonstrated on a real mobile manipulator."
    },
    "facts": [
      {
        "label": {
          "zh": "项目时间",
          "en": "Period"
        },
        "value": {
          "zh": "2023.10—2024.10",
          "en": "Oct 2023–Oct 2024"
        }
      },
      {
        "label": {
          "zh": "本人职责",
          "en": "Role"
        },
        "value": {
          "zh": "核心开发；按钮识别与机械臂点击",
          "en": "Core development in button recognition and arm pressing"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "厂房巡检不只涉及观察设备状态，还可能需要机器人主动触发按钮等物理交互。项目将巡检移动与设备操作结合，减少对固定位置机械臂的依赖。",
            "en": "Plant inspection can require physical interaction, such as triggering a button. The project connects inspection mobility with equipment manipulation."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "移动机器人到达设备附近，抬升机械臂并扫描环境；检测按钮后计算操作坐标，调整底盘与机械臂位置，依据接触信号执行按压并复位。未检测到按钮时重新调整观察位置。",
            "en": "The robot approaches equipment, raises its arm, scans for a button, computes operation coordinates, and adjusts the base and arm. Contact feedback guides pressing and return; unsuccessful detection triggers repositioning."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/patrol-inspection/ppt/summary-image115.webp",
            "caption": {
              "zh": "按钮识别、接触反馈与操作复位流程",
              "en": "Button detection, contact feedback, and return workflow"
            }
          }
        ]
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "系统由移动底盘、升降机构、机械臂和视觉传感器组成。底盘承担厂房内移动，升降与机械臂扩大设备交互范围，相机为按钮定位提供输入。",
            "en": "The system uses a mobile base, lifting mechanism, arm, and camera. The base provides mobility, the lift and arm extend reach, and vision localizes device buttons."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/patrol-inspection/ppt/summary-image117.webp",
            "caption": {
              "zh": "厂房巡检移动操作机器人实机",
              "en": "Plant-inspection mobile manipulator"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "导航层融合传感器信息完成定位和目标接近；操作层根据视觉检测结果求解按钮位置，并用接触位姿反馈闭合机械臂操作流程。本人负责按钮识别和机械臂点击等核心环节。",
            "en": "Sensor fusion supports localization and approach. The manipulation layer computes button positions from vision and closes the interaction loop with contact-pose feedback. My work focused on button recognition and arm pressing."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "实机视频展示巡检平台在实验环境中的设备接近与操作过程。流程图给出识别失败重定位、接触检查与操作复位环节。",
            "en": "Robot footage documents equipment approach and interaction in the experimental setting. The workflow includes repositioning after failed detection, contact checks, and return."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/patrol-inspection/demo.mp4",
            "poster": "assets/projects/patrol-inspection/poster.webp",
            "caption": {
              "zh": "厂房巡检移动操作平台实机测试",
              "en": "Real-robot test of the plant-inspection mobile manipulator"
            }
          }
        ]
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "移动巡检操作",
      "en": "Mobile inspection & interaction"
    },
    "year": "2023–2024",
    "media": {
      "video": "assets/projects/patrol-inspection/demo.mp4",
      "poster": "assets/projects/patrol-inspection/poster.webp",
      "alt": {
        "zh": "厂房巡检机器人实机演示",
        "en": "Plant inspection robot demo"
      }
    },
    "period": {
      "zh": "2023.10—2024.10",
      "en": "Oct 2023–Oct 2024"
    }
  },
  {
    "id": "aloha",
    "title": {
      "zh": "双臂示教学习与移动操作",
      "en": "Dual-arm imitation learning and mobile manipulation"
    },
    "summary": {
      "zh": "面向双臂协同抓取与操作技能学习，以主从机械臂采集示教并训练 ACT；在仿真和实机中演示木块递交、羽毛球抓取与嵌套物体拆解。",
      "en": "For coordinated manipulation and skill learning, leader–follower arms collect demonstrations for ACT training; simulation and real-robot examples cover block handover, shuttlecock grasping, and nested-object separation."
    },
    "facts": [
      {
        "label": {
          "zh": "研发阶段",
          "en": "Development period"
        },
        "value": {
          "zh": "2023.11—2024.05",
          "en": "Nov 2023–May 2024"
        }
      },
      {
        "label": {
          "zh": "学习方法",
          "en": "Learning method"
        },
        "value": {
          "zh": "人工示教与 ACT",
          "en": "Human demonstrations and ACT"
        }
      },
      {
        "label": {
          "zh": "任务类型",
          "en": "Tasks"
        },
        "value": {
          "zh": "单臂、双臂与移动操作探索",
          "en": "Single-arm, dual-arm, and mobile manipulation"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "单次抓取难以覆盖嵌套、勾连和需要双手配合的操作。项目通过人工示教学习动作序列，研究双臂协作在不同物体摆放下的执行方式。",
            "en": "A single grasp cannot cover nesting, entanglement, and coordinated two-handed tasks. Human demonstrations provide action sequences for dual-arm manipulation under different object arrangements."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "从仿真木块递交开始，扩展到实机单臂抓取、双臂羽毛球拿取和嵌套分离。移动操作平台还考虑装球、球桶安装及简单服务取物等任务场景。",
            "en": "Tasks progress from simulated block handover to physical single-arm grasping, dual-arm shuttlecock pickup, and nested-object separation. The mobile platform also considers loading shuttlecocks, installing a tube, and simple service-object handling."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/aloha/ppt/summary-image107.webp",
            "caption": {
              "zh": "嵌套羽毛球操作场景",
              "en": "Nested shuttlecock task"
            }
          },
          {
            "src": "assets/projects/aloha/ppt/summary-image108.webp",
            "caption": {
              "zh": "多羽毛球抓取场景",
              "en": "Multiple-shuttlecock task"
            }
          },
          {
            "src": "assets/projects/aloha/ppt/summary-image109.webp",
            "caption": {
              "zh": "单羽毛球抓取场景",
              "en": "Single-shuttlecock task"
            }
          },
          {
            "src": "assets/projects/aloha/ppt/summary-image110.webp",
            "caption": {
              "zh": "相互勾连的羽毛球",
              "en": "Entangled shuttlecocks"
            }
          }
        ]
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "双臂移动捡球平台采用智猿底盘、Widow 主机械臂、Viper 从机械臂和 RGB-D 相机。主从结构用于示教数据采集，视觉和关节状态为动作学习提供输入。",
            "en": "The mobile platform uses a ZhiYuan base, Widow leader arms, Viper follower arms, and RGB-D sensing. The leader–follower arrangement records demonstrations, while vision and joint state support policy learning."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/aloha/ppt/summary-image106.webp",
            "caption": {
              "zh": "双臂移动操作平台实机",
              "en": "Dual-arm mobile manipulation platform"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "围绕 ACT 模型调整数据记录与训练流程，将人工动作与视觉观测对应起来。进一步探索 mask 观测和基于航点的模仿学习，并在仿真与实机间分别测试动作执行。",
            "en": "The work adapts demonstration recording and ACT training to align actions with visual observations. It also explores masked observations and waypoint-based imitation learning, with separate simulation and robot tests."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "补充木块递交仿真、单臂取物、双臂配合及单球、多球、嵌套羽毛球操作片段。视频覆盖不同任务设置，其中多球抓取存在失败案例。",
            "en": "Demonstrations cover simulated block handover, single-arm pickup, coordinated two-arm actions, and single, multiple, and nested shuttlecock handling. The slides also document failures in multi-object grasping."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/aloha/ppt-19.mp4",
            "poster": "assets/projects/aloha/ppt-19.poster.webp",
            "caption": {
              "zh": "双臂递木块仿真示例（一）",
              "en": "Simulated dual-arm block handover I"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-29.mp4",
            "poster": "assets/projects/aloha/ppt-29.poster.webp",
            "caption": {
              "zh": "双臂递木块仿真示例（二）",
              "en": "Simulated dual-arm block handover II"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-30.mp4",
            "poster": "assets/projects/aloha/ppt-30.poster.webp",
            "caption": {
              "zh": "单臂木块抓取实机测试（一）",
              "en": "Real-robot single-arm block grasp I"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-37.mp4",
            "poster": "assets/projects/aloha/ppt-37.poster.webp",
            "caption": {
              "zh": "单臂木块抓取实机测试（二）",
              "en": "Real-robot single-arm block grasp II"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-32.mp4",
            "poster": "assets/projects/aloha/ppt-32.poster.webp",
            "caption": {
              "zh": "羽毛球单球抓取测试（一）",
              "en": "Single-shuttlecock grasp test I"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-33.mp4",
            "poster": "assets/projects/aloha/ppt-33.poster.webp",
            "caption": {
              "zh": "羽毛球单球抓取测试（二）",
              "en": "Single-shuttlecock grasp test II"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-31.mp4",
            "poster": "assets/projects/aloha/ppt-31.poster.webp",
            "caption": {
              "zh": "双臂嵌套羽毛球操作",
              "en": "Dual-arm nested-shuttlecock manipulation"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-34.mp4",
            "poster": "assets/projects/aloha/ppt-34.poster.webp",
            "caption": {
              "zh": "双臂多羽毛球操作",
              "en": "Dual-arm multiple-shuttlecock manipulation"
            }
          },
          {
            "video": "assets/projects/aloha/demo.mp4",
            "poster": "assets/projects/aloha/poster.webp",
            "caption": {
              "zh": "双臂羽毛球协作操作",
              "en": "Coordinated dual-arm shuttlecock manipulation"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-35.mp4",
            "poster": "assets/projects/aloha/ppt-35.poster.webp",
            "caption": {
              "zh": "不同桌面物体抓取测试",
              "en": "Grasp tests with different tabletop objects"
            }
          },
          {
            "video": "assets/projects/aloha/ppt-47.mp4",
            "poster": "assets/projects/aloha/ppt-47.poster.webp",
            "caption": {
              "zh": "示教与遥操作探索",
              "en": "Demonstration collection and teleoperation exploration"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验记录",
          "en": "Experimental observations"
        },
        "paragraphs": [
          {
            "zh": "当前仿真记录中，有航点与无航点两种设置的成功率分别为90%和98%。下图展示对应的仿真日志与轨迹，供分析动作分段和轨迹形态。",
            "en": "The current simulation records show success rates of 90% with waypoints and 98% without waypoints. The logs and trajectories below illustrate action segmentation and trajectory shape."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/aloha/ppt/summary-image97.webp",
            "caption": {
              "zh": "两种设置的仿真日志",
              "en": "Simulation logs for the two settings"
            }
          },
          {
            "src": "assets/projects/aloha/ppt/summary-image98.webp",
            "caption": {
              "zh": "双臂轨迹记录示意",
              "en": "Recorded dual-arm trajectories"
            }
          }
        ]
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "双臂示教学习",
      "en": "Dual-arm imitation learning"
    },
    "media": {
      "video": "assets/projects/aloha/ppt-32.mp4",
      "poster": "assets/projects/aloha/ppt-32.poster.webp",
      "alt": {
        "zh": "双臂机械臂操作演示",
        "en": "Dual-arm manipulation demonstration"
      }
    },
    "period": {
      "zh": "2023.11—2024.05",
      "en": "Nov 2023–May 2024"
    }
  },
  {
    "id": "shuttlecock-grasping",
    "title": {
      "zh": "羽毛球对打机器人",
      "en": "Badminton rally robot"
    },
    "summary": {
      "zh": "面向羽毛球对打，以深度学习和 EKF 预测轨迹、MPC 控制站位与击球；另以 YOLOv5 位姿检测和目标分离开展视觉抓取拓展，完成实机抓取演示。",
      "en": "For badminton rallying, deep learning and EKF predict flight trajectories while MPC controls positioning and striking. A separate YOLOv5-based grasping extension demonstrates pose-aware shuttlecock pickup on a real robot."
    },
    "facts": [
      {
        "label": {
          "zh": "对打项目时间",
          "en": "Rally project period"
        },
        "value": {
          "zh": "2021.06—2022.07",
          "en": "Jun 2021–Jul 2022"
        }
      },
      {
        "label": {
          "zh": "对打项目单位",
          "en": "Rally project partner"
        },
        "value": {
          "zh": "浙江深酷机器人有限公司",
          "en": "Zhejiang Shenku Robotics Co., Ltd."
        }
      },
      {
        "label": {
          "zh": "对打项目职责",
          "en": "Rally project role"
        },
        "value": {
          "zh": "部分功能核心开发者",
          "en": "Core developer for selected functions"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "对打机器人需要在有限时间内感知来球、预测飞行轨迹、调整站位并击球。围绕羽毛球机器人，另有独立的视觉抓取拓展：在球头、羽身方向和多球堆叠条件下选择抓握位置并分离目标。",
            "en": "A rally robot must perceive an incoming shuttlecock, predict flight, position itself, and strike within a short time. The material also documents a separate grasping extension that handles directional geometry and piled objects."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Tasks"
        },
        "paragraphs": [
          {
            "zh": "对打系统由移动底盘与机械臂协同，实现来球轨迹预测、站位调整和击球；视觉抓取拓展则面向单球、堆叠和勾连羽毛球的定位、夹持与分离。两部分任务分别展示。",
            "en": "The rally system coordinates a mobile base and arm for trajectory prediction, positioning, and striking. The grasping extension instead detects, holds, and separates single, piled, or entangled shuttlecocks. The two tasks are presented separately."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image25.webp",
            "caption": {
              "zh": "视觉抓取拓展中的嵌套、竖向与勾连场景",
              "en": "Nested, upright, and entangled configurations in the grasping extension"
            }
          },
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image24.webp",
            "caption": {
              "zh": "视觉抓取拓展中的夹持方向选择",
              "en": "Grasp-orientation choice in the grasping extension"
            }
          }
        ]
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "简历中的对打系统基于移动底盘与机械臂。视觉抓取拓展样机另外包含相机、夹爪和控制计算单元，基于 ROS 连接识别、位姿计算与执行动作。",
            "en": "The CV describes a rally platform with a mobile base and arm. The separate grasping prototype in the slides adds a camera, gripper, and control computer, using ROS to connect perception and execution."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image27.webp",
            "caption": {
              "zh": "视觉抓取拓展样机及识别界面",
              "en": "Prototype and perception interface for the grasping extension"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "对打系统：采用深度学习与扩展卡尔曼滤波预测羽毛球轨迹，以 MPC 协调底盘站位和机械臂击球。视觉抓取拓展：在 YOLOv5 检测中定位球头、羽身等关键部位，以几何关系求解方向与抓握姿态，并在夹持后加入抖动动作分离堆叠目标。",
            "en": "Rally system: deep learning and an extended Kalman filter predict shuttlecock flight, while MPC coordinates the base and striking arm. Grasping extension: YOLOv5 locates head and feather key regions, geometry determines orientation and grasp pose, and a shaking action helps separate piled targets."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image26.webp",
            "caption": {
              "zh": "视觉抓取拓展的关键部位检测结果",
              "en": "Key-region detection for the grasping extension"
            }
          },
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image118.webp",
            "caption": {
              "zh": "视觉抓取拓展的识别与抓取流程",
              "en": "Perception and grasp-control pipeline for the extension"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "简历记载对打系统实现羽毛球对打，本人参与部分功能核心开发。当前提供的实机短片对应视觉抓取拓展，展示抓取平台与羽毛球操作。",
            "en": "The CV records a badminton rally system, with my contribution focused on selected functions. The supplied robot clip documents the separate visual grasping extension and its platform."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/shuttlecock-grasping/demo.mp4",
            "poster": "assets/projects/shuttlecock-grasping/poster.webp",
            "caption": {
              "zh": "羽毛球视觉抓取拓展演示",
              "en": "Visual shuttlecock grasping extension demonstration"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "视觉抓取拓展实验",
          "en": "Grasping-extension experiments"
        },
        "paragraphs": [
          {
            "zh": "视觉抓取拓展的单羽毛球与多羽毛球抓取准确率分别为97.83%和95.1%，对应抓取任务的演示记录。该记录未列出样本量。",
            "en": "The grasping-extension records give accuracies of 97.83% for single shuttlecocks and 95.1% for multiple shuttlecocks. These are grasping results; the sample counts are unspecified."
          }
        ],
        "points": [],
        "figures": []
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "视觉抓取",
      "en": "Visual grasping"
    },
    "media": {
      "video": "assets/projects/shuttlecock-grasping/demo.mp4",
      "poster": "assets/projects/shuttlecock-grasping/poster.webp",
      "alt": {
        "zh": "羽毛球机械臂抓取实机演示",
        "en": "Real robot shuttlecock grasping demo"
      }
    },
    "period": {
      "zh": "2021.06—2022.07",
      "en": "Jun 2021–Jul 2022"
    },
    "organization": {
      "zh": "浙江深酷机器人有限公司",
      "en": "Zhejiang Shenku Robotics Co., Ltd."
    },
    "previewCaption": {
      "zh": "视频：羽毛球视觉抓取拓展",
      "en": "Video: shuttlecock grasping extension"
    }
  },
  {
    "id": "lidar-3d",
    "title": {
      "zh": "三维激光雷达与惯性融合导航",
      "en": "3D LiDAR–inertial mapping and navigation"
    },
    "summary": {
      "zh": "面向三维环境中的定位建图与自主避障，以 LIO-SAM 融合激光点云和 IMU，连接目标点规划与底盘控制；已在走廊和室内障碍环境完成实机导航演示。",
      "en": "For 3D mapping, localization, and obstacle avoidance, LIO-SAM fuses LiDAR and IMU measurements with goal planning and base control; real demonstrations cover corridors and indoor obstacles."
    },
    "facts": [
      {
        "label": {
          "zh": "研发阶段",
          "en": "Development period"
        },
        "value": {
          "zh": "2022.09—2023.01",
          "en": "Sep 2022–Jan 2023"
        }
      },
      {
        "label": {
          "zh": "主要传感器",
          "en": "Sensors"
        },
        "value": {
          "zh": "三维激光雷达与 IMU",
          "en": "3D LiDAR and IMU"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "复杂室内环境存在不同高度障碍和连续转弯，需要利用三维几何和惯性信息估计机器人运动，并支持目标点导航。",
            "en": "Indoor environments contain obstacles at different heights and repeated turns, motivating joint use of 3D geometry and inertial motion for localization and navigation."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "采集环境点云并建立地图，持续估计机器人位姿，接收目标位置后生成路径和避障轨迹，驱动底盘到达目标。",
            "en": "Build a point-cloud map, estimate the robot pose continuously, and plan obstacle-aware motion to a specified goal."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "平台为四轮无人车，搭载三维激光雷达、IMU 和计算控制单元。设备及建图结果如下。",
            "en": "A four-wheel robot carries 3D LiDAR, IMU, and computing/control hardware. The slides show the sensor, base integration, and mapping results."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/lidar-3d/ppt/summary-image85.webp",
            "caption": {
              "zh": "三维激光雷达传感器",
              "en": "3D LiDAR sensor"
            }
          },
          {
            "src": "assets/projects/lidar-3d/ppt/summary-image88.webp",
            "caption": {
              "zh": "激光导航无人车平台",
              "en": "LiDAR-navigation mobile platform"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "LIO-SAM 将惯性预积分、激光点云配准和因子图优化连接起来，输出位姿与地图；导航层利用地图和实时障碍信息规划路径与局部运动。",
            "en": "LIO-SAM combines inertial preintegration, LiDAR alignment, and factor-graph optimization to estimate pose and map the environment. Navigation uses the map and obstacle observations to plan motion."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/lidar-3d/ppt/summary-image84.webp",
            "caption": {
              "zh": " LIO-SAM 模块框架",
              "en": "LIO-SAM modules shown in the slides"
            }
          },
          {
            "src": "assets/projects/lidar-3d/ppt/summary-image89.webp",
            "caption": {
              "zh": "实测点云地图",
              "en": "Recorded point-cloud map"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "视频包括室内绕障、目标点接近、不同布局通行以及 RViz 中的地图与轨迹显示。所选实机片段主要在室内进行。",
            "en": "Videos cover indoor obstacle avoidance, goal approach, movement across layouts, and map/trajectory visualization in RViz. The physical demonstrations are primarily indoors."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/lidar-3d/ppt-25.mp4",
            "poster": "assets/projects/lidar-3d/ppt-25.poster.webp",
            "caption": {
              "zh": "三维激光导航：室内目标点通行",
              "en": "3D LiDAR navigation: indoor goal reaching"
            }
          },
          {
            "video": "assets/projects/lidar-3d/ppt-26.mp4",
            "poster": "assets/projects/lidar-3d/ppt-26.poster.webp",
            "caption": {
              "zh": "三维激光导航：地图与局部轨迹可视化",
              "en": "3D LiDAR navigation: map and local trajectories"
            }
          },
          {
            "video": "assets/projects/lidar-3d/ppt-27.mp4",
            "poster": "assets/projects/lidar-3d/ppt-27.poster.webp",
            "caption": {
              "zh": "三维激光导航：不同障碍布局通行",
              "en": "3D LiDAR navigation: movement across obstacle layouts"
            }
          },
          {
            "video": "assets/projects/lidar-3d/demo.mp4",
            "poster": "assets/projects/lidar-3d/poster.webp",
            "caption": {
              "zh": "三维激光导航：人员穿行场景",
              "en": "3D LiDAR navigation: a person crossing the scene"
            }
          }
        ]
      }
    ],
    "categoryKey": "navigation",
    "category": {
      "zh": "激光导航",
      "en": "LiDAR navigation"
    },
    "media": {
      "video": "assets/projects/lidar-3d/demo.mp4",
      "poster": "assets/projects/lidar-3d/poster.webp",
      "alt": {
        "zh": "三维激光导航绕障演示",
        "en": "3D LiDAR navigation and obstacle avoidance demo"
      }
    },
    "period": {
      "zh": "2022.09—2023.01",
      "en": "Sep 2022–Jan 2023"
    }
  },
  {
    "id": "rtk-navigation",
    "title": {
      "zh": "RTK 校园道路自主循迹",
      "en": "RTK-guided campus route following"
    },
    "summary": {
      "zh": "面向校园道路自主循迹，自建 RTK 基站并融合 GNSS、九轴 IMU，经 EKF 平滑与 MPC 控制，实现校园道路上的实机循迹和转弯。",
      "en": "For autonomous campus-road tracking, a local RTK base, GNSS, and a nine-axis IMU feed EKF smoothing and MPC; real-robot tests demonstrate route following and turns on campus roads."
    },
    "facts": [
      {
        "label": {
          "zh": "研发阶段",
          "en": "Development period"
        },
        "value": {
          "zh": "2022.03—2022.04",
          "en": "Mar–Apr 2022"
        }
      },
      {
        "label": {
          "zh": "演示地点",
          "en": "Setting"
        },
        "value": {
          "zh": "山东大学校园道路",
          "en": "Shandong University campus roads"
        }
      },
      {
        "label": {
          "zh": "传感器",
          "en": "Sensors"
        },
        "value": {
          "zh": "RTK GNSS、九轴 IMU",
          "en": "RTK GNSS and nine-axis IMU"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "普通 GNSS 易受大气、遮挡和多路径影响，位置跳变会干扰底盘循迹。项目搭建差分定位链路，将室外定位和运动控制连接为校园道路导航系统。",
            "en": "GNSS errors, occlusion, and multipath can disturb path tracking. Differential positioning links outdoor localization with base control for campus navigation."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "以山东大学东门停车场至计算机科学与技术学院的路线为目标，建立参考站与车载流动站，记录或设置参考轨迹，控制无人车沿道路行驶。",
            "en": "The target route connects the east-gate parking area and the School of Computer Science and Technology. A base station and robot-mounted rover support route recording and autonomous tracking."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/rtk-navigation/ppt/summary-image74.webp",
            "caption": {
              "zh": "校园道路与目标路线示意",
              "en": "Campus route and destination plan"
            }
          }
        ]
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "四轮无人车搭载 GNSS 接收器、九轴 IMU、中央控制器、微控制器和轮毂电机；固定参考站向流动站提供差分信息。",
            "en": "A four-wheel vehicle carries GNSS, a nine-axis IMU, a central controller, microcontrollers, and hub motors. A fixed base provides differential corrections to the rover."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/rtk-navigation/ppt/summary-image75.webp",
            "caption": {
              "zh": "四轮无人车平台",
              "en": "Four-wheel mobile platform"
            }
          },
          {
            "src": "assets/projects/rtk-navigation/ppt/summary-image76.webp",
            "caption": {
              "zh": "GNSS 接收与车载计算设备",
              "en": "GNSS receiver and onboard computing"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "参考站和流动站同步观测卫星信号，差分解算获取位置。九轴 IMU 补充姿态信息，通过 EKF 平滑位置和姿态后输入 MPC 控制器，减轻 GNSS 跳变与惯性累计误差对循迹的影响。",
            "en": "The base and rover observe satellite signals for differential positioning. A nine-axis IMU supplies attitude, and an EKF smooths pose before MPC generates tracking commands."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "补充道路车载视角、路侧拍摄与校园坡道等演示，并展示参考轨迹和实际轨迹对比。定位受到遮挡与多路径影响，RTK 定位本身不提供周围障碍感知。",
            "en": "Demonstrations include onboard and roadside views, campus routes, and ramps, together with reference-versus-actual trajectories. Positioning remains sensitive to occlusion and multipath; RTK alone does not sense obstacles."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/rtk-navigation/ppt/summary-image80.webp",
            "caption": {
              "zh": "参考轨迹与实际轨迹对比",
              "en": "Reference and measured trajectories"
            }
          },
          {
            "video": "assets/projects/rtk-navigation/ppt-22.mp4",
            "poster": "assets/projects/rtk-navigation/ppt-22.poster.webp",
            "caption": {
              "zh": "校园道路循迹：车载跟拍视角",
              "en": "Campus route following: close tracking view"
            }
          },
          {
            "video": "assets/projects/rtk-navigation/demo.mp4",
            "poster": "assets/projects/rtk-navigation/poster.webp",
            "caption": {
              "zh": "校园道路循迹：路侧视角",
              "en": "Campus route following: roadside view"
            }
          },
          {
            "video": "assets/projects/rtk-navigation/ppt-24.mp4",
            "poster": "assets/projects/rtk-navigation/ppt-24.poster.webp",
            "caption": {
              "zh": "校园道路与坡道循迹",
              "en": "Campus road and ramp tracking"
            }
          }
        ]
      }
    ],
    "categoryKey": "navigation",
    "category": {
      "zh": "室外导航",
      "en": "Outdoor navigation"
    },
    "media": {
      "video": "assets/projects/rtk-navigation/demo.mp4",
      "poster": "assets/projects/rtk-navigation/poster.webp",
      "alt": {
        "zh": "四轮机器人校园道路循迹视频",
        "en": "Four-wheel robot following a campus road"
      }
    },
    "period": {
      "zh": "2022.03—2022.04",
      "en": "Mar–Apr 2022"
    }
  },
  {
    "id": "agva",
    "title": {
      "zh": "基于半人型机器人的激光雷达与视觉融合导航操作系统",
      "en": "LiDAR–vision navigation and manipulation with a semi-humanoid robot"
    },
    "summary": {
      "zh": "面向半人型机器人的室内定位与作业位置到达，融合二维激光雷达、视觉点云和 SLAM；实机展示走廊导航、障碍场景通行与接近工作台。",
      "en": "For indoor localization and access to work poses, a semi-humanoid platform combines 2D LiDAR, visual point clouds, and SLAM; real demonstrations cover corridor navigation, obstacles, and approaching a workbench."
    },
    "facts": [
      {
        "label": {
          "zh": "项目时间",
          "en": "Period"
        },
        "value": {
          "zh": "2022.05—2023.03",
          "en": "May 2022–Mar 2023"
        }
      },
      {
        "label": {
          "zh": "本人职责",
          "en": "Role"
        },
        "value": {
          "zh": "核心开发者",
          "en": "Core developer"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "二维激光雷达只观测一个高度平面，难以覆盖室内不同高度的障碍。项目引入相机信息，并把融合感知与移动操作平台的导航需求连接起来。",
            "en": "A 2D LiDAR observes a single plane and can miss obstacles at other heights. Camera information extends perception for a mobile manipulation platform."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "在复杂室内环境中完成定位、避障和目标位置到达，为后续机械臂作业提供可执行的底盘位置。",
            "en": "Localize, avoid obstacles, and reach target locations indoors to provide suitable base poses for manipulation."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "平台采用带升降结构的移动操作机器人，采用二维激光雷达、相机和底盘控制系统。激光和视觉观测共同构建导航所需的几何信息。",
            "en": "The slides show a mobile manipulation platform with a lift, 2D LiDAR, camera, and base controller. Laser and camera observations jointly support navigation geometry."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/agva/ppt/summary-image29.webp",
            "caption": {
              "zh": "移动操作平台结构",
              "en": "Mobile manipulation platform design"
            }
          },
          {
            "src": "assets/projects/agva/ppt/summary-image40.webp",
            "caption": {
              "zh": "用于融合导航的机器人平台",
              "en": "Platform used for fusion navigation"
            }
          }
        ]
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "相机点云经过滤波和投影，与二维激光扫描融合后进入 Cartographer 建图和代价地图。后续探索加入深度估计与语义网络，为不同类别物体设置导航代价。",
            "en": "Filtered and projected camera point clouds are fused with 2D laser scans for Cartographer mapping and costmaps. Follow-up work explores depth and semantic networks to assign category-dependent navigation costs."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/agva/ppt/summary-image30.webp",
            "caption": {
              "zh": "激光与视觉融合的室内地图",
              "en": "Indoor map from laser–vision fusion"
            }
          },
          {
            "src": "assets/projects/agva/ppt/summary-image41.webp",
            "caption": {
              "zh": "二维地图中的路径规划示意",
              "en": "Path planning in the 2D map"
            }
          },
          {
            "src": "assets/projects/agva/ppt/summary-image42.webp",
            "caption": {
              "zh": "室内语义感知实验",
              "en": "Indoor semantic-perception experiment"
            }
          },
          {
            "src": "assets/projects/agva/ppt/summary-image43.webp",
            "caption": {
              "zh": "室外语义感知探索",
              "en": "Outdoor semantic-perception exploration"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "实机视频补充走廊行驶、实验室绕障与接近工作台等不同场景，地图与感知图用于说明导航输入及规划过程。",
            "en": "Real-robot clips cover corridor travel, laboratory obstacle avoidance, and approach to a workbench. Maps and perception images explain the navigation inputs and planning."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/agva/demo.mp4",
            "poster": "assets/projects/agva/poster.webp",
            "caption": {
              "zh": "激光与视觉融合的室内走廊导航",
              "en": "Indoor corridor navigation with LiDAR–vision fusion"
            }
          },
          {
            "video": "assets/projects/agva/ppt-09.mp4",
            "poster": "assets/projects/agva/ppt-09.poster.webp",
            "caption": {
              "zh": "实验室障碍环境中的移动导航",
              "en": "Mobile navigation among laboratory obstacles"
            }
          },
          {
            "video": "assets/projects/agva/ppt-10.mp4",
            "poster": "assets/projects/agva/ppt-10.poster.webp",
            "caption": {
              "zh": "室内移动操作平台运行片段",
              "en": "Indoor mobile manipulation platform in motion"
            }
          },
          {
            "video": "assets/projects/agva/ppt-11.mp4",
            "poster": "assets/projects/agva/ppt-11.poster.webp",
            "caption": {
              "zh": "移动操作平台接近工作台",
              "en": "Mobile manipulator approaching a workbench"
            }
          }
        ]
      }
    ],
    "categoryKey": "navigation",
    "category": {
      "zh": "多传感器导航",
      "en": "Multi-sensor navigation"
    },
    "media": {
      "video": "assets/projects/agva/demo.mp4",
      "poster": "assets/projects/agva/poster.webp",
      "alt": {
        "zh": "AGVA 室内走廊导航演示",
        "en": "AGVA indoor corridor navigation demo"
      }
    },
    "period": {
      "zh": "2022.05—2023.03",
      "en": "May 2022–Mar 2023"
    }
  },
  {
    "id": "fruit-sorting",
    "title": {
      "zh": "果蔬干分拣产线项目",
      "en": "Dried-fruit sorting pilot line"
    },
    "summary": {
      "zh": "面向果蔬干产线的识别、分拣与计数，结合视觉定位、四自由度机械臂抓放和产线协同控制；完成产线联调及预研验收。",
      "en": "For dried-fruit and vegetable sorting and counting, visual localization, a four-degree-of-freedom arm, and line coordination are integrated; the pilot line completed commissioning and acceptance."
    },
    "facts": [
      {
        "label": {
          "zh": "合作单位",
          "en": "Partner"
        },
        "value": {
          "zh": "安徽安粮控股股份公司",
          "en": "Anhui ANLIANG Holdings"
        }
      },
      {
        "label": {
          "zh": "本人职责",
          "en": "Role"
        },
        "value": {
          "zh": "识别定位、机械臂抓放与计数等核心模块",
          "en": "Core perception, arm pick-and-place, and counting modules"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "预研产线需要把视觉识别结果转化为可执行的分拣动作，并与输送和其他机械结构按顺序协作。",
            "en": "The pilot line requires visual detections to drive sorting actions in coordination with conveyors and other mechanisms."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "识别并定位果蔬干，控制机械臂抓取后放置到指定区域，记录处理数量并与产线硬件逻辑交互。",
            "en": "Detect and localize dried fruit, pick and place items in target areas, count processed items, and coordinate with line logic."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "系统采用四自由度机械臂、视觉采集与计算单元及配套产线机械。",
            "en": "The system uses a four-degree-of-freedom arm, vision/computing hardware, and the associated line mechanisms."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "视觉模块输出目标位置，机械臂执行抓取与放置，计数模块记录处理进度；控制逻辑协调机械臂与其他硬件设备。",
            "en": "Vision provides target positions, the arm executes pick-and-place, and counting records progress. Control logic coordinates the arm with the other equipment."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/fruit-sorting/ppt/summary-image122.webp",
            "caption": {
              "zh": "果蔬干目标识别与定位画面",
              "en": "Dried-fruit detection and localization"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "该预研产线已通过验收，现场视频展示机械臂与产线协同。",
            "en": "The slides record acceptance of the pilot line, with on-site footage showing the arm and equipment."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/fruit-sorting/ppt/summary-image123.webp",
            "caption": {
              "zh": "预研产线现场展示",
              "en": "On-site pilot-line demonstration"
            }
          },
          {
            "video": "assets/projects/fruit-sorting/demo.mp4",
            "poster": "assets/projects/fruit-sorting/poster.webp",
            "caption": {
              "zh": "果蔬干预研产线现场演示",
              "en": "On-site demonstration of the dried-fruit pilot line"
            }
          }
        ]
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "工业分拣",
      "en": "Industrial sorting"
    },
    "media": {
      "video": "assets/projects/fruit-sorting/demo.mp4",
      "poster": "assets/projects/fruit-sorting/poster.webp",
      "alt": {
        "zh": "果蔬干分拣产线现场演示",
        "en": "Dried-fruit sorting line demonstration"
      }
    },
    "organization": {
      "zh": "安徽安粮控股股份公司",
      "en": "Anhui ANLIANG Holdings"
    }
  },
  {
    "id": "industrial-grasping",
    "title": {
      "zh": "柔性与不规则物料抓取实验",
      "en": "Flexible and irregular material manipulation"
    },
    "summary": {
      "zh": "面向服装、食品等柔性与不规则物料操作，结合不同夹爪和机械臂开展抓取实验；多段实机演示展示夹持、搬移与处理过程。",
      "en": "For handling clothing, food, and other deformable or irregular objects, experiments combine different grippers and robot arms; real clips demonstrate grasping, transfer, and material handling."
    },
    "facts": [],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "柔性与不规则目标在形态、接触位置和可抓取区域上存在较大变化，需要通过实物测试观察夹持和搬移行为。",
            "en": "Flexible and irregular objects vary in shape, contact, and graspable regions, motivating physical tests of holding and transfer."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "对工作台上的目标执行抓取、转移或材料处理动作，覆盖服装与食品物料等不同形态。",
            "en": "Grasp, transfer, or process workbench objects across clothing and food-material settings."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Robot hardware"
        },
        "paragraphs": [
          {
            "zh": "实验配置包含不同机械臂、夹爪、工作台及食品处理装置。",
            "en": "The slides show experiments using different arms, grippers, workbenches, and food-processing fixtures."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "现有材料主要记录机械臂动作和设备配置，可据视频分项展示夹持、搬移和处理过程。",
            "en": "The available material documents robot actions and hardware configurations, supporting separate presentations of grasping, transfer, and processing."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/industrial-grasping/ppt/summary-image125.webp",
            "caption": {
              "zh": "机械臂与物料处理实验装置",
              "en": "Arm and material-handling setup"
            }
          },
          {
            "src": "assets/projects/industrial-grasping/ppt/summary-image126.webp",
            "caption": {
              "zh": "食品物料操作实验",
              "en": "Food-material manipulation experiment"
            }
          },
          {
            "src": "assets/projects/industrial-grasping/ppt/summary-image127.webp",
            "caption": {
              "zh": "食品处理设备与机械臂操作",
              "en": "Food-processing fixture and arm operation"
            }
          },
          {
            "src": "assets/projects/industrial-grasping/ppt/summary-image128.webp",
            "caption": {
              "zh": "机械臂夹持与工作台配置",
              "en": "Gripper and workbench setup"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations and results"
        },
        "paragraphs": [
          {
            "zh": "补充不同实验配置下的实机操作短片，展示物料抓取和搬移过程。",
            "en": "Supplementary robot clips show material handling across the experimental configurations."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/industrial-grasping/ppt-41.mp4",
            "poster": "assets/projects/industrial-grasping/ppt-41.poster.webp",
            "caption": {
              "zh": "柔性服装物料抓取与搬移",
              "en": "Grasping and transfer of flexible clothing material"
            }
          },
          {
            "video": "assets/projects/industrial-grasping/ppt-42.mp4",
            "poster": "assets/projects/industrial-grasping/ppt-42.poster.webp",
            "caption": {
              "zh": "食品物料操作实验（一）",
              "en": "Food-material manipulation experiment I"
            }
          },
          {
            "video": "assets/projects/industrial-grasping/ppt-43.mp4",
            "poster": "assets/projects/industrial-grasping/ppt-43.poster.webp",
            "caption": {
              "zh": "食品物料操作实验（二）",
              "en": "Food-material manipulation experiment II"
            }
          },
          {
            "video": "assets/projects/industrial-grasping/ppt-44.mp4",
            "poster": "assets/projects/industrial-grasping/ppt-44.poster.webp",
            "caption": {
              "zh": "夹爪与机械臂近景测试",
              "en": "Close-up gripper and arm test"
            }
          },
          {
            "video": "assets/projects/industrial-grasping/ppt-46.mp4",
            "poster": "assets/projects/industrial-grasping/ppt-46.poster.webp",
            "caption": {
              "zh": "桌面夹爪操作实验",
              "en": "Tabletop gripper manipulation experiment"
            }
          }
        ]
      }
    ],
    "categoryKey": "manipulation",
    "category": {
      "zh": "机器人操作实验",
      "en": "Robot manipulation experiments"
    },
    "media": {
      "video": "assets/projects/industrial-grasping/demo.mp4",
      "poster": "assets/projects/industrial-grasping/poster.webp",
      "alt": {
        "zh": "机械臂抓取服装的实验视频",
        "en": "Robot arm clothing-grasping experiment"
      }
    }
  },
  {
    "id": "rfid-nfc",
    "title": {
      "zh": "RFID/NFC 电子视觉标签定位",
      "en": "RFID/NFC electronic visual tags for localization"
    },
    "summary": {
      "zh": "面向遮挡场景中的位置与朝向估计，结合 RFID 远场检出和多 NFC 近场读取，研究标签几何布局与分层定位；完成误差分析和实验方案设计。",
      "en": "For position and orientation estimation under occlusion, far-range RFID detection and multiple near-range NFC readings support tag-layout and hierarchical-localization research, with geometric error analysis and an experimental design."
    },
    "facts": [
      {
        "label": {
          "zh": "研究内容",
          "en": "Focus"
        },
        "value": {
          "zh": "标签设计、几何分析与定位",
          "en": "Tag design, geometry, and localization"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "视觉标记在遮挡和弱光中可能失效，射频标签则能补充不依赖直接视觉的辨识信息。项目讨论如何将远场检出与近场高精度几何信息结合。",
            "en": "Visual markers can fail under occlusion or low light. Radio tags provide complementary identification, motivating a combination of far-range detection and near-range geometry."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "在物体上布置 RFID 与多 NFC 标签，通过读取位置关系推断物体位置和朝向，并研究给定尺寸、读取范围与误差要求下的标签数量和排布。",
            "en": "Place RFID and multiple NFC tags on an object, infer location and orientation from their spatial readings, and study tag count and layout under size, read-range, and error constraints."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Tag and reader setup"
        },
        "paragraphs": [
          {
            "zh": "方案包含无源 RFID、NFC 标签、对应读卡器与相机。RFID 用于较远距离发现目标，NFC 读取用于近距离几何约束。",
            "en": "The concept uses passive RFID and NFC tags, readers, and cameras. RFID detects targets at greater range, while NFC readings provide local geometric constraints."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "单个电子视觉标签中的多 NFC 布局以定向精度为目标；物体表面的多电子视觉标签则扩大可读方向和覆盖范围。材料分析三角形、多边形等布局的最坏误差和读取区域。",
            "en": "Multiple NFC elements within one tag target orientation accuracy, while multiple composite tags expand readable directions and coverage. The slides analyze triangular and polygonal layouts and their worst-case errors."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/rfid-nfc/ppt/summary-image132.webp",
            "caption": {
              "zh": "标签布局与读取区域分析",
              "en": "Tag-layout and read-region analysis"
            }
          },
          {
            "src": "assets/projects/rfid-nfc/ppt/summary-image133.webp",
            "caption": {
              "zh": "几何条件下的标签排布分析",
              "en": "Tag placement under geometric constraints"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "研究记录",
          "en": "Research material"
        },
        "paragraphs": [
          {
            "zh": "PPT 主要包含问题定义、几何分析和实验设计，展示单标签与多标签层级的设计思路。",
            "en": "The material documents problem formulation, geometric analysis, and experimental design for single- and multiple-tag configurations."
          }
        ],
        "points": [],
        "figures": []
      }
    ],
    "categoryKey": "exploration",
    "category": {
      "zh": "定位研究",
      "en": "Localization research"
    },
    "media": {
      "image": "assets/projects/rfid-nfc/overview.webp",
      "alt": {
        "zh": "RFID/NFC 组合标签的结构与定位示意",
        "en": "RFID/NFC combined tag and localization concept"
      }
    }
  },
  {
    "id": "wheel-legged",
    "title": {
      "zh": "轮腿平衡机器人原型测试",
      "en": "Wheeled-legged balancing robot prototype"
    },
    "summary": {
      "zh": "面向轮腿平台的平衡与运动稳定性，利用轮式驱动和腿部结构开展原型调试；实机短片展示平衡姿态与近距离运动。",
      "en": "For balance and motion stability in a wheel-legged platform, a wheeled-drive and leg-structure prototype is tested; real footage shows balancing posture and short-range motion."
    },
    "facts": [],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "轮腿平台结合轮式移动和腿部结构，以下展示平衡原型的实机测试。",
            "en": "A wheeled-legged platform combines wheels with leg structures; the supplied material records a balancing prototype test."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [
          {
            "zh": "观察原型在测试环境中的姿态保持与运动响应。",
            "en": "Observe posture maintenance and motion response in the test setting."
          }
        ],
        "points": [],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Prototype hardware"
        },
        "paragraphs": [
          {
            "zh": "视频展示双轮与腿部结构组成的机器人原型。",
            "en": "The video shows a robot prototype with two wheels and leg structures."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/wheel-legged/ppt/summary-image129.webp",
            "caption": {
              "zh": "轮腿平衡原型实机测试",
              "en": "Physical test of the wheeled-legged balancing prototype"
            }
          }
        ]
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstration"
        },
        "paragraphs": [
          {
            "zh": "保留原始短片中的平衡和姿态测试过程。",
            "en": "The short clip records balancing and posture tests."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/wheel-leg/ppt-45.mp4",
            "poster": "assets/projects/wheel-leg/ppt-45.poster.webp",
            "caption": {
              "zh": "轮腿机器人平衡原型完整短片",
              "en": "Full short clip of the wheel-legged balance prototype"
            }
          }
        ]
      }
    ],
    "categoryKey": "exploration",
    "category": {
      "zh": "机器人原型",
      "en": "Robotics prototype"
    },
    "media": {
      "video": "assets/projects/wheel-leg/ppt-45.mp4",
      "poster": "assets/projects/wheel-leg/ppt-45.poster.webp",
      "alt": {
        "zh": "轮腿机器人平衡测试",
        "en": "Wheel-legged robot balance test"
      }
    }
  },
  {
    "id": "reconav",
    "categoryKey": "exploration",
    "category": {
      "zh": "在研方向",
      "en": "Ongoing research"
    },
    "title": {
      "zh": "组合线索目标导航（ReCoNav / CINav）",
      "en": "Compositional clue navigation (ReCoNav / CINav)"
    },
    "summary": {
      "zh": "面向参考图像与修改语言共同指定目标的组合导航，构建七类变化任务，以视觉匹配和语言条件策略建立免训练与学习式基线；学习式基线总体成功率27.07%。",
      "en": "For navigation to a target specified jointly by a reference image and modification text, seven edit types are evaluated using visual-matching and language-conditioned baselines; the learning baseline reaches 27.07% overall success."
    },
    "media": {
      "image": "assets/papers/reconav-motivation.webp",
      "alt": {
        "zh": "参考图像与语言修改的组合导航任务",
        "en": "Composed navigation with a reference image and language modification"
      }
    },
    "facts": [
      {
        "label": {
          "zh": "输入",
          "en": "Input"
        },
        "value": {
          "zh": "参考图像与语言修改指令",
          "en": "Reference image and language modification"
        }
      },
      {
        "label": {
          "zh": "评估",
          "en": "Evaluation"
        },
        "value": {
          "zh": "七类目标变化；学习式导航基线",
          "en": "Seven target edit types; learned navigation baseline"
        }
      }
    ],
    "sections": [
      {
        "id": "background",
        "title": {
          "zh": "项目背景",
          "en": "Background"
        },
        "paragraphs": [
          {
            "zh": "用户提供的参考照片可能与当前物体存在差异，例如背包已经打开、侧边水杯被取走。机器人接收参考图像和一条相对修改指令，在未知室内环境中探索，找到满足组合描述的正确实例，并导航到附近主动停止。",
            "en": "A reference photograph may differ from the current object: a backpack may now be open with its side bottle removed. The robot receives a reference image and a relative modification instruction, explores an unknown indoor environment, finds the intended instance, and stops nearby."
          },
          {
            "zh": "任务要求把参考外观与修改信息共同转换成目标。变化覆盖颜色、材质、纹理、局部几何、目标状态、组件配置与上下文关系，单独的类别词或旧照片无法充分确定目标实例。",
            "en": "The reference appearance and modification must jointly define the goal. Edits cover color, material, surface pattern, part geometry, target state, component configuration, and contextual relations; a category name or outdated image alone is insufficient."
          }
        ],
        "points": [],
        "figures": [],
        "metrics": []
      },
      {
        "id": "task",
        "title": {
          "zh": "任务说明",
          "en": "Task"
        },
        "paragraphs": [],
        "points": [
          {
            "zh": "定义参考图像加修正语言的组合实例导航，区分“寻找同类物体”与“找到符合当前意图的具体实例”。",
            "en": "Composed instance navigation uses a reference image plus modification text to identify the specific instance matching the current intent."
          },
          {
            "zh": "围绕七种可见变化构建参考图像、目标图像和双向修改语言，强调局部编辑和其他属性保持。",
            "en": "Reference–target image pairs and bidirectional edit instructions cover seven visible change types, with local editing and preservation of unrelated attributes."
          },
          {
            "zh": "设计免训练与学习式两类基线，分别连接视觉匹配、空间探索和策略学习。",
            "en": "Two baseline families connect visual matching and spatial exploration through either a training-free system or a learned policy."
          }
        ],
        "figures": [
          {
            "src": "assets/papers/reconav-motivation.webp",
            "caption": {
              "zh": "组合目标示例：由背包参考外观和状态/组件修改确定真实目标。",
              "en": "A backpack goal is composed from its reference appearance and edits to its state and components."
            }
          }
        ],
        "metrics": []
      },
      {
        "id": "system",
        "title": {
          "zh": "系统和关键技术",
          "en": "System and key technologies"
        },
        "paragraphs": [
          {
            "zh": "数据构造流程先在三维场景中选择目标及可通行轨迹，由分析 VLM 判断可修改的属性并产生双向指令，再由生成模块按局部性和几何保持约束构造参考图像。",
            "en": "The data pipeline selects a target and traversable routes in a 3D scene. An analysis VLM identifies editable attributes and creates bidirectional instructions; a generation module produces the reference image under locality and geometry-preservation constraints."
          },
          {
            "zh": "免训练基线使用 CLIP 图像/文本特征与 DINOv2 局部特征进行多分支匹配，并结合局部建图、前沿探索和 FMM 规划推进导航。学习式基线将参考图像和文本特征通过 FiLM 调制，与 ResNet 观测及历史动作输入强化学习策略。",
            "en": "The training-free baseline combines CLIP image/text features and DINOv2 local features for multi-branch matching, together with local mapping, frontier exploration, and FMM planning. The learning baseline uses FiLM to condition reference-image and text features, combining them with ResNet observations and the previous action in an RL policy."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/reconav-dataset-method.webp",
            "caption": {
              "zh": "数据构造流程示意：三维场景、属性分析、局部图像编辑与双向修正语言；图中属性分数为流程示例。",
              "en": "Illustrative data pipeline: 3D scenes, attribute analysis, local image editing, and bidirectional instructions. Attribute scores illustrate the process."
            }
          },
          {
            "src": "assets/papers/reconav-trainingfree.webp",
            "caption": {
              "zh": "免训练基线：图文匹配、局部建图、前沿探索与 FMM 规划。",
              "en": "Training-free baseline: image–text matching, local mapping, frontier exploration, and FMM planning."
            }
          },
          {
            "src": "assets/papers/reconav-learning.webp",
            "caption": {
              "zh": "学习式基线：图文条件、FiLM、观测编码与强化学习策略。",
              "en": "Learning baseline: multimodal conditioning, FiLM, observation encoding, and an RL policy."
            }
          }
        ],
        "metrics": []
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验",
          "en": "Experiments"
        },
        "paragraphs": [
          {
            "zh": "学习式基线按七种修改类型评估目标到达率（SR）、路径效率（SPL/SoftSPL）及目标距离误差（DTG）。总体 SR 为 27.07%，SPL 为 14.43%，SoftSPL 为 24.18%，DTG 为 5.36 m。",
            "en": "The learning baseline is evaluated over seven edit categories using success rate (SR), path efficiency (SPL/SoftSPL), and distance to goal (DTG). Overall SR is 27.07%, SPL 14.43%, SoftSPL 24.18%, and DTG 5.36 m."
          },
          {
            "zh": "不同变化类型呈现明显差异：上下文关系类 SR 为 41.86%，颜色类为 16.67%。分类结果刻画了机器人理解组合目标并区分相似实例时的难度差异。",
            "en": "Performance varies across edits: SR is 41.86% for contextual relations and 16.67% for color. The breakdown characterizes differences in the difficulty of understanding composed goals and distinguishing similar instances."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/papers/reconav-examples.webp",
            "caption": {
              "zh": "七类参考–目标变化示例，彩色框标出对应变化区域。",
              "en": "Reference–target examples for seven edit types; boxes indicate the changed regions."
            }
          },
          {
            "src": "assets/papers/reconav-results.webp",
            "caption": {
              "zh": "学习式基线按修改类型的导航结果。",
              "en": "Navigation results of the learning baseline by edit type."
            }
          }
        ],
        "metrics": [
          {
            "value": "27.07%",
            "label": {
              "zh": "学习式基线总体 SR",
              "en": "Overall learning-baseline SR"
            }
          },
          {
            "value": "14.43%",
            "label": {
              "zh": "学习式基线总体 SPL",
              "en": "Overall learning-baseline SPL"
            }
          }
        ],
        "table": {
          "caption": {
            "zh": "学习式基线，按修改类型评估",
            "en": "Learning-baseline evaluation by edit type"
          },
          "columns": [
            {
              "zh": "修改类型",
              "en": "Edit type"
            },
            "SR ↑ (%)",
            "SPL ↑ (%)",
            "SoftSPL ↑ (%)",
            "DTG ↓ (m)"
          ],
          "rows": [
            [
              {
                "zh": "颜色",
                "en": "Color"
              },
              "16.67",
              "9.85",
              "20.43",
              "6.41"
            ],
            [
              {
                "zh": "表面纹理",
                "en": "Surface pattern"
              },
              "29.73",
              "15.16",
              "24.68",
              "5.15"
            ],
            [
              {
                "zh": "局部几何",
                "en": "Part geometry"
              },
              "30.49",
              "14.61",
              "24.00",
              "4.66"
            ],
            [
              {
                "zh": "上下文关系",
                "en": "Context relation"
              },
              "41.86",
              "21.35",
              "27.87",
              "4.07"
            ],
            [
              {
                "zh": "材质",
                "en": "Material"
              },
              "33.86",
              "17.95",
              "28.14",
              "4.92"
            ],
            [
              {
                "zh": "目标状态",
                "en": "Target state"
              },
              "28.12",
              "15.89",
              "22.90",
              "5.85"
            ],
            [
              {
                "zh": "组件配置",
                "en": "Component configuration"
              },
              "20.47",
              "11.47",
              "23.06",
              "5.36"
            ],
            [
              {
                "zh": "总体",
                "en": "Overall"
              },
              "27.07",
              "14.43",
              "24.18",
              "5.36"
            ]
          ]
        }
      }
    ],
    "relatedPapers": [
      "reconav-paper"
    ]
  }
];
