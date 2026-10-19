// Public bilingual project content.
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
          "zh": "主要研发成员",
          "en": "Research and development contributor"
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
          },
          {
            "zh": "母车具有运输效率和传感器搭载空间，子车具有狭窄区域通行能力；协作的难点在于让两者在合适的位置交接，并保持任务语义、地图位置与执行状态一致。系统因此同时处理语言层面的任务分解和物理层面的跨平台衔接。",
            "en": "The larger vehicle offers transport capacity and room for sensors, while the smaller vehicle can enter confined areas. Coordinating their handoff requires consistency between task intent, map locations, and execution state, linking language-level planning with physical cooperation."
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
          },
          {
            "zh": "执行过程按照“理解需求—分配载具—前往交接点—卸载与末端导航—返回对接”组织。母车无法进入目标区域时，由子车继续完成末端任务；执行反馈用于检查动作前置条件和计划是否与当前状态匹配。",
            "en": "Execution follows request interpretation, vehicle assignment, travel to a handoff location, unloading and final navigation, and return docking. The micro vehicle completes the final stage where the macro vehicle cannot enter; feedback checks action prerequisites against the current state."
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
            },
            "role": "main"
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
          },
          {
            "zh": "高层将载具能力与任务地点表示为可检查的运动原语，反馈环节发现动作依赖或位置关系不满足时重新组织计划。低层分别维护两车定位与导航，交接环节通过装卸、对接及状态同步把独立导航连接为完整任务链。",
            "en": "The high-level planner represents vehicle capabilities and locations through checkable motion primitives and revises plans when action dependencies or spatial conditions are unmet. Each vehicle maintains localization and navigation, while loading, docking, and state exchange connect the two into a complete workflow."
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
            },
            "displayWidth": 620
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
            "zh": "以下片段直接从实机场景的导航开始，分别展示大厅与小房间、室外道路与窄通道中的运输、交接和末端执行。其他母车配置的装卸与对接演示放在页面末尾。",
            "en": "The clips start with physical navigation and show transport, handoff, and final execution in hall–room and road–narrow-path settings. Loading and docking with other macro-vehicle configurations appear last."
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
              "zh": "论文原表：不同环境与任务复杂度的成功率。",
              "en": "Original paper table: success across environments and task complexity."
            },
            "kind": "table",
            "displayWidth": 900
          }
        ],
        "metrics": []
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
            "video": "assets/projects/kangaroo/ppt-06.mp4",
            "poster": "assets/projects/kangaroo/ppt-06.poster.webp",
            "caption": {
              "zh": "不同设备迁移：轮式母车与子车对接及室内执行",
              "en": "Platform transfer: wheeled macro vehicle, docking, and indoor execution"
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
    },
    "group": "primary",
    "previewCaption": {
      "zh": "实机场景：大厅运输与末端导航",
      "en": "Real-world hall transport and final navigation"
    }
  },
  {
    "id": "library-robot",
    "title": {
      "zh": "四足移动操作机器人跨楼层图书整理与自主取放系统",
      "en": "Quadruped mobile manipulation for cross-floor book organization and pick-and-place"
    },
    "summary": {
      "zh": "面向多楼层图书整理与自主取放，融合激光惯性 SLAM、书脊视觉识别和抓取规划；实机图书识别率96%，任务成功率89%。",
      "en": "For cross-floor book organization and autonomous pick-and-place, LiDAR–inertial SLAM, visual book-spine recognition, and grasp planning achieve 96% book recognition and 89% task success on the robot."
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
          "zh": "主要研发成员",
          "en": "Research and development contributor"
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
          },
          {
            "zh": "图书馆任务还要求机器人从“到达书架”进一步完成“对准目标书籍并可靠取放”。跨楼层移动、近架定位和机械臂作业的误差会逐级影响末端执行，因此需要将移动能力与视觉、抓取和反馈控制共同设计。",
            "en": "Reaching a shelf is only the first step: the robot must align with a particular book and manipulate it reliably. Errors in floor traversal, shelf-side localization, and arm motion affect final execution, motivating joint design of mobility, perception, grasping, and feedback."
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
          },
          {
            "zh": "任务链分为跨楼层接近、书架前定位、视觉确定目标、机械臂取放及作业后转移。楼梯识别和环境建图支撑移动，目标三维位置与夹持反馈支撑近距离操作，连接楼层间运输与书架端的具体作业。",
            "en": "The workflow comprises cross-floor approach, shelf-side positioning, target perception, arm pick-and-place, and departure. Stair recognition and mapping support travel, while 3D target localization and gripper feedback support manipulation, connecting floor-to-floor transport with shelf-side work."
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
            "src": "assets/projects/library-robot/ppt/summary-image55.webp",
            "caption": {
              "zh": "四足平台与传感器布局",
              "en": "Quadruped platform and sensor layout"
            },
            "role": "main"
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
          },
          {
            "zh": "导航侧使用点云与惯性信息持续估计平台位姿，并将楼梯与障碍区域作为通行条件；操作侧根据目标位姿完成抓取规划与逆运动学求解。视觉伺服和夹持反馈用于减小到位误差，识别或抓取不满足条件时进入调整与重试流程。",
            "en": "Point clouds and inertial sensing maintain the platform pose and support traversal decisions around stairs and obstacles. Target poses feed grasp planning and inverse kinematics. Visual servoing and gripper feedback reduce positioning error, with adjustment and retry when perception or grasp conditions are unmet."
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
            "zh": "页面开头的场景动画说明跨楼层取送需求；以下实机片段展示样机、机械臂抓取与搬移，以及楼梯附近的移动和平台控制。导航与操作通过统一任务流程衔接。",
            "en": "The opening application animation introduces cross-floor book retrieval and delivery. The physical clips below show the prototype, arm grasping and transfer, and movement and control near stairs. A shared task workflow connects navigation and manipulation."
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
            "video": "assets/projects/library-robot/ppt-18.mp4",
            "poster": "assets/projects/library-robot/ppt-18.poster.webp",
            "caption": {
              "zh": "四足移动操作机器人取放测试（二）",
              "en": "Quadruped mobile manipulation test II"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验结果",
          "en": "Experimental results"
        },
        "paragraphs": [
          {
            "zh": "实机实验中，图书识别率为96%，任务成功率为89%。书脊检测提供目标书籍的位置，三维感知与抓取规划进一步连接识别结果和取放动作。",
            "en": "Real-robot experiments achieve 96% book-recognition accuracy and 89% task success. Book-spine detection provides target locations, while 3D perception and grasp planning connect recognition to pick-and-place."
          },
          {
            "zh": "下图展示书脊识别、楼梯感知和三维抓取可视化。光照变化、遮挡和复杂图书摆放是持续优化的场景因素。",
            "en": "The images show book-spine recognition, stair perception, and 3D grasp visualization. Lighting changes, occlusion, and varied book arrangements remain relevant conditions for further refinement."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/library-robot/book-recognition.webp",
            "displayWidth": 620,
            "caption": {
              "zh": "图书识别：书脊检测与目标书籍定位。",
              "en": "Book recognition: spine detection and target-book localization."
            }
          },
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
        ],
        "metrics": []
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
    },
    "group": "primary"
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
          },
          {
            "zh": "目标照片便于用户指定位置，但不会直接给出机器人坐标系中的距离、朝向和可行驶路径。狭窄房间中的遮挡、长走廊中的外观相似与室外光照变化，会同时影响目标识别和局部运动安全。",
            "en": "A goal photograph is easy to provide but does not directly specify distance, heading, or a traversable route in robot coordinates. Occlusion in confined rooms, repetitive corridor appearances, and outdoor lighting challenge both goal recognition and safe local motion."
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
          },
          {
            "zh": "输入为历史 RGB 观测、当前 RGB 图像和目标图像，输出为连续航点与底盘控制。机器人在执行中反复更新视觉判断和局部轨迹，既要向目标推进，也要处理桌椅、墙边和道路障碍带来的空间约束。",
            "en": "Past RGB observations, the current RGB image, and a goal image are converted into waypoints and base commands. Visual estimates and local motion are updated throughout execution to make progress while accounting for spatial constraints from furniture, walls, and outdoor obstacles."
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
            "src": "assets/projects/image-goal/robot-platform.webp",
            "role": "main",
            "caption": {
              "zh": "自研全向移动平台与 RealSense D435i（仅使用 RGB）",
              "en": "Self-developed omnidirectional platform with RealSense D435i; RGB only"
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
            "zh": "系统采用“视觉路点预测—场景约束恢复—运动优化”的分层结构。P3Net 对历史、当前和目标图像进行时空关系建模，预测面向目标的局部路点；SCMPC 将恢复的场景约束引入模型预测控制，生成可由底盘执行的运动指令。",
            "en": "The system separates visual waypoint prediction, scene-constraint recovery, and motion optimization. P3Net models temporal and spatial relations among past, current, and goal images to predict local waypoints. SCMPC incorporates scene constraints into predictive control to produce executable base commands."
          },
          {
            "zh": "视觉模块负责判断朝哪里前进，控制模块结合可通行区域和底盘运动约束修正局部轨迹。两者在机器人行进中持续闭环更新，使图像目标理解与障碍环境中的运动执行相互衔接；方法和对比视频展示各模块对实际行为的影响。",
            "en": "Visual prediction provides local goal direction, while control adapts the trajectory to traversable space and base-motion constraints. Repeated closed-loop updates connect goal understanding with physical execution; method and comparison videos show how these components affect robot behavior."
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
            "src": "assets/projects/image-goal/web-pipline.webp",
            "caption": {
              "zh": "训练数据来源、仿真与实机环境，以及关闭深度通道的单目机器人平台",
              "en": "Training sources, evaluation settings, and the monocular robot with depth disabled"
            }
          },
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
    ],
    "group": "primary"
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
          },
          {
            "zh": "不同设备的按钮高度、朝向和可接近空间并不一致，单纯到达导航点不足以完成巡检操作。系统需要把厂房内的移动定位、按钮视觉定位与接触后的动作判断衔接起来。",
            "en": "Equipment buttons differ in height, orientation, and accessible space, so reaching a navigation waypoint is insufficient. The system connects plant navigation, visual button localization, and action checks after contact."
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
          },
          {
            "zh": "操作按“移动接近—升降调整—扫描识别—求解操作位置—接触按压—复位”展开。目标不可见时改变观察位置，接触信号用于判断是否进入有效交互阶段，避免将视觉识别成功等同于按钮操作完成。",
            "en": "The sequence is approach, lift adjustment, scanning and recognition, operation-pose calculation, contact pressing, and return. Repositioning handles an unseen target; contact feedback indicates entry into the interaction stage rather than treating recognition alone as completion."
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
            },
            "role": "main"
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
          },
          {
            "zh": "关键衔接是将视觉目标转换到机械臂可执行的空间位置，并协调底盘、升降机构和机械臂的动作顺序。识别失败重定位、接触检查和复位组成状态闭环，使设备接近和按钮点击能够按流程连续执行。",
            "en": "A key integration step converts the visual target into an executable arm-space location and sequences the base, lift, and arm. Repositioning after detection failure, contact checks, and return motions close the workflow between approach and pressing."
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
    },
    "group": "primary"
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
          },
          {
            "zh": "嵌套羽毛球等任务不仅需要选定抓取位置，还需要按顺序固定、分离和递交物体。主从示教记录人如何协调双臂，为学习长动作序列和两臂之间的配合关系提供数据。",
            "en": "Nested shuttlecocks require more than choosing a grasp: objects must be held, separated, and handed over in sequence. Leader–follower demonstrations record this coordination to support learning multi-step actions and relationships between the two arms."
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
          },
          {
            "zh": "通过主机械臂采集动作、从机械臂执行及相机记录观测，将视觉图像与关节状态、动作序列对齐。验证从单物体抓取扩展到双臂交接与分离时，示教策略能否在对应任务布置中重现动作。",
            "en": "Leader-arm actions, follower execution, camera observations, and joint states are aligned into demonstration sequences. Tests examine whether learned actions can be reproduced when progressing from single-object pickup to two-arm handover and separation."
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
            },
            "role": "main"
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
          },
          {
            "zh": "ACT 以连续动作片段建模示教序列，数据流程覆盖同步记录、训练和部署执行。mask 观测与航点设置作为不同输入或动作组织方式分别测试，仿真记录与真实任务演示分别列示，以观察策略在不同设置中的执行行为。",
            "en": "ACT models demonstrations through action chunks, supported by synchronized recording, training, and execution. Masked observations and waypoint settings are tested as alternative observation and action structures. Simulation records and physical demonstrations document execution under their respective settings."
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
            "video": "assets/projects/aloha/ppt-29.mp4",
            "poster": "assets/projects/aloha/ppt-29.poster.webp",
            "caption": {
              "zh": "双臂递木块仿真示例",
              "en": "Simulated dual-arm block handover"
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
    },
    "group": "primary"
  },
  {
    "id": "shuttlecock-grasping",
    "title": {
      "zh": "捡球机器人",
      "en": "Shuttlecock collection robot"
    },
    "summary": {
      "zh": "面向单球、堆叠及勾连羽毛球的自动拾取，通过 YOLOv5 关键点检测估计抓握姿态，以夹持后抖动分离目标；实机单球与多球抓取准确率分别为97.83%和95.1%。",
      "en": "For automatic collection of single, piled, and entangled shuttlecocks, YOLOv5 keypoint detection estimates grasp pose and a post-grasp shaking action separates targets. Physical tests report 97.83% single-object and 95.1% multiple-object grasp accuracy."
    },
    "facts": [
      {
        "label": {
          "zh": "任务",
          "en": "Task"
        },
        "value": {
          "zh": "羽毛球识别、夹取与分离",
          "en": "Shuttlecock recognition, pickup, and separation"
        }
      },
      {
        "label": {
          "zh": "感知方法",
          "en": "Perception"
        },
        "value": {
          "zh": "YOLOv5关键部位检测与几何姿态估计",
          "en": "YOLOv5 key-region detection and geometric pose estimation"
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
            "zh": "羽毛球的球头、羽身和方向差异会改变可夹持位置；多球堆叠或勾连时，直接闭合夹爪容易同时带起多个目标。项目围绕球体姿态判断与抓取后的目标分离，完成自动捡球的视觉与机械臂流程。",
            "en": "A shuttlecock’s head, feather body, and orientation affect its graspable region. Piled or entangled targets can be lifted together by a simple gripper closure. The project connects pose-aware perception with post-grasp separation for automatic collection."
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
            "zh": "识别单球或多球场景中的球头与球身关键部位，估计目标方向和夹持姿态，控制机械臂接近并夹取目标。对堆叠与勾连情况，在抓取后执行摆动、抖动等分离动作，取出目标羽毛球。",
            "en": "Detect head and body key regions in single- and multiple-shuttlecock scenes, estimate target orientation and grasp pose, and execute the approach and pickup. Swinging and shaking after closure separate the target from piled or entangled neighbors."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image25.webp",
            "caption": {
              "zh": "视觉捡球中的嵌套、竖向与勾连场景",
              "en": "Nested, upright, and entangled configurations in the collection system"
            }
          },
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image24.webp",
            "caption": {
              "zh": "视觉捡球中的夹持方向选择",
              "en": "Grasp-orientation choice in the collection system"
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
            "zh": "实机由机械臂、夹爪、相机与控制计算单元组成，基于 ROS 连接图像识别、抓握姿态计算和机械臂动作执行。",
            "en": "The prototype combines a robot arm, gripper, camera, and control computer. ROS connects image recognition, grasp-pose estimation, and arm execution."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image27.webp",
            "caption": {
              "zh": "视觉捡球样机及识别界面",
              "en": "Prototype and perception interface for the collection system"
            },
            "role": "main"
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
            "zh": "在 YOLOv5 中检测球头和球身关键点，根据关键点的相对几何关系求解球体方向矢量，选择球体骨架主干上的抓握位置和姿态。",
            "en": "YOLOv5 detects head and body keypoints. Their relative geometry determines the shuttlecock direction and a grasp location and pose along its main structure."
          },
          {
            "zh": "机械臂采用分步动作控制：接近目标、夹紧、抬起并抖动分离。该流程将姿态感知与拟人化分离动作衔接，用于处理直接夹取难以解决的多球堆叠和勾连。",
            "en": "Arm execution is divided into approach, closure, lifting, and shaking for separation. This connects pose estimation with a human-inspired separation action for piled and entangled shuttlecocks."
          }
        ],
        "points": [],
        "figures": [
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image26.webp",
            "caption": {
              "zh": "视觉捡球的关键部位检测结果",
              "en": "Key-region detection for the collection system"
            }
          },
          {
            "src": "assets/projects/shuttlecock-grasping/ppt/summary-image118.webp",
            "caption": {
              "zh": "视觉捡球的识别与抓取流程",
              "en": "Perception and grasp-control pipeline for collection"
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
            "zh": "实机片段展示捡球样机与羽毛球抓取过程，以下识别图和实验结果对应同一类视觉捡球任务。",
            "en": "The robot clip demonstrates the collection prototype and shuttlecock grasping. The perception images and reported experiments concern the same visual pickup task."
          }
        ],
        "points": [],
        "figures": [
          {
            "video": "assets/projects/shuttlecock-grasping/demo.mp4",
            "poster": "assets/projects/shuttlecock-grasping/poster.webp",
            "caption": {
              "zh": "羽毛球视觉捡球演示",
              "en": "Visual shuttlecock collection system demonstration"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "实验结果",
          "en": "Experimental results"
        },
        "paragraphs": [
          {
            "zh": "实机单羽毛球抓取准确率为97.83%，多羽毛球抓取准确率为95.1%。姿态检测和夹持后抖动分别对应目标选择与堆叠分离环节。",
            "en": "Physical tests report 97.83% accuracy for single-shuttlecock grasping and 95.1% for multiple shuttlecocks. Pose detection supports target selection, while post-grasp shaking handles separation."
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
        "zh": "捡球机器人实机识别与抓取演示",
        "en": "Shuttlecock collection robot: recognition and grasping"
      }
    },
    "group": "primary"
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
          },
          {
            "zh": "仅依靠平面扫描难以描述悬空、低矮或形状复杂的障碍，连续运动还会改变点云采样时刻对应的姿态。三维激光与惯性融合既提供空间结构，也为运动过程中的位姿连续性提供约束。",
            "en": "Planar scans cannot fully describe overhanging, low, or irregular obstacles, while motion changes the pose associated with each point-cloud sample. LiDAR–inertial fusion supplies both spatial structure and constraints on pose continuity."
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
          },
          {
            "zh": "工作流程由地图建立、位姿估计、目标下发、全局路径与局部轨迹生成组成。演示同时观察机器人实际通行和地图中的位置、路径变化，从而检查感知定位与底盘执行是否对应。",
            "en": "The workflow includes map creation, pose estimation, goal specification, and global and local planning. Physical traversal and map-side pose and path updates are observed together to check consistency between estimation and base execution."
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
            "src": "assets/projects/lidar-3d/ppt/summary-image88.webp",
            "caption": {
              "zh": "激光导航无人车平台",
              "en": "LiDAR-navigation mobile platform"
            },
            "role": "main"
          },
          {
            "src": "assets/projects/lidar-3d/ppt/summary-image85.webp",
            "caption": {
              "zh": "三维激光雷达传感器",
              "en": "3D LiDAR sensor"
            },
            "role": "sensor"
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
          },
          {
            "zh": "惯性预积分为相邻时刻运动提供先验，激光配准给出环境几何约束，因子图优化整合这些信息。导航层再把定位结果与障碍信息转换为可行路径及局部控制目标；可视化用于检查地图、当前位置和局部轨迹的对应关系。",
            "en": "Inertial preintegration supplies a motion prior, LiDAR registration provides geometric constraints, and factor-graph optimization combines them. Navigation converts estimated pose and obstacle observations into feasible paths and local control targets, visualized alongside the map."
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
      "video": "assets/projects/lidar-3d/ppt-26.mp4",
      "poster": "assets/projects/lidar-3d/ppt-26.poster.webp",
      "alt": {
        "zh": "三维激光导航：地图与局部轨迹可视化",
        "en": "3D LiDAR navigation: map and local trajectories"
      }
    },
    "period": {
      "zh": "2022.09—2023.01",
      "en": "Sep 2022–Jan 2023"
    },
    "group": "primary",
    "previewCaption": {
      "zh": "三维激光导航：地图与局部轨迹可视化",
      "en": "3D LiDAR navigation: map and local trajectories"
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
          },
          {
            "zh": "校园路线包含较长直道、转弯与坡道，既需要稳定的绝对位置，也需要平滑的短时姿态估计。定位和控制之间的接口需要处理坐标一致性、测量波动和底盘运动响应。",
            "en": "Campus routes combine long straights, turns, and ramps, requiring stable absolute position and smooth short-term orientation. The localization-to-control interface must handle coordinate consistency, measurement variation, and base response."
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
          },
          {
            "zh": "将参考轨迹与实时融合位姿放在同一坐标系中，持续计算车辆相对路线的偏离并生成控制指令。通过道路跟拍、路侧视角和参考/实际轨迹对照，观察直行、转弯及坡道阶段的循迹行为。",
            "en": "Reference paths and fused poses share a coordinate system so route deviation can be converted into continuous control commands. Following and roadside views, together with reference-versus-measured trajectories, document straight, turning, and ramp behavior."
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
            },
            "role": "main"
          },
          {
            "src": "assets/projects/rtk-navigation/ppt/summary-image76.webp",
            "caption": {
              "zh": "GNSS 接收与车载计算设备",
              "en": "GNSS receiver and onboard computing"
            },
            "role": "sensor"
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
          },
          {
            "zh": "RTK 提供室外绝对位置，IMU 提供连续姿态变化，EKF 在观测之间维持平滑估计。MPC 依据当前状态与参考轨迹预测后续运动并调整控制，使差分定位、状态估计和底盘循迹形成闭环。",
            "en": "RTK supplies absolute outdoor position, the IMU tracks orientation changes, and the EKF maintains a smooth estimate between observations. MPC predicts motion relative to the reference route and updates commands, closing the loop from positioning to tracking."
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
    },
    "group": "primary"
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
          "zh": "主要研发成员",
          "en": "Research and development contributor"
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
          },
          {
            "zh": "移动操作平台的机身与机械臂占据不同高度空间，底盘所在平面安全不代表整机通行安全。融合视觉几何与激光扫描，可为室内地图和障碍代价提供更完整的环境信息。",
            "en": "The base, body, and arm occupy different heights, so a clear base-level plane does not guarantee clearance for the whole robot. Fusing visual geometry with laser scans provides richer mapping and obstacle information."
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
          },
          {
            "zh": "在走廊和工作台附近持续定位并生成可通行路径，到达目标后为机械臂操作预留底盘站位。材料分别呈现融合地图、路径规划和语义感知探索，演示以室内导航过程为主。",
            "en": "The robot maintains localization and plans traversable routes near corridors and workbenches, ending at a base pose suitable for arm work. The material separately documents fused maps, planning, and semantic-perception exploration, with demonstrations focused on indoor travel."
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
            "src": "assets/projects/agva/ppt/summary-image40.webp",
            "caption": {
              "zh": "用于融合导航的机器人平台",
              "en": "Platform used for fusion navigation"
            },
            "role": "main"
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
          },
          {
            "zh": "点云滤波与投影将相机观测转成可与二维激光共同使用的几何信息，再服务于定位建图和代价地图更新。语义探索进一步研究如何把目标类别映射为导航代价，区分几何可通行与任务相关的区域。",
            "en": "Filtering and projection transform camera point clouds into geometry compatible with 2D laser scans for localization, mapping, and costmap updates. Semantic exploration examines how object classes can affect navigation costs beyond geometric traversability."
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
    },
    "group": "primary"
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
          },
          {
            "zh": "远距离发现目标与近距离确定姿态具有不同的读取范围和精度要求。将二者分层处理，有助于分析标签数量、安装空间与有效读取区域之间的取舍。",
            "en": "Discovering a target at range and estimating its pose nearby impose different read-range and precision requirements. A hierarchical design supports analysis of trade-offs among tag count, mounting space, and readable regions."
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
          },
          {
            "zh": "先利用 RFID 确定目标是否存在，再根据多个 NFC 的读取关系建立位置和方向约束。通过几何分析比较三角形、多边形和多组合标签布置，给出误差与覆盖范围的实验设计。",
            "en": "RFID first indicates target presence; multiple NFC readings then constrain location and orientation. Geometric analysis compares triangular, polygonal, and multiple composite-tag layouts to guide error and coverage experiments."
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
          },
          {
            "zh": "单标签层面研究多个 NFC 的相对位置如何约束方向，多标签层面研究物体表面布置如何改善读取覆盖。几何推导与读取区域分析构成方案证据，当前展示限定为研究与实验设计。",
            "en": "Within one composite tag, relative NFC positions constrain orientation; across an object, multiple tags improve read coverage. Geometric derivations and read-region analysis support the concept, which is presented as research and experimental design."
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
    },
    "group": "primary"
  },
  {
    "id": "sports-robot",
    "group": "collaboration",
    "title": {
      "zh": "三球一体运动机器人",
      "en": "Multi-sport robot: table tennis, badminton, and tennis"
    },
    "category": {
      "zh": "运动机器人",
      "en": "Sports robotics"
    },
    "categoryKey": "manipulation",
    "summary": {
      "zh": "面向乒乓球、羽毛球和网球的人机对打，展示球类感知、轨迹预测与移动挥拍的协同；实机视频覆盖三类球运动，结合 MV-BMR 文献说明羽毛球的两阶段预测与控制。",
      "en": "For human–robot rallies in table tennis, badminton, and tennis, the demonstrations show coordinated perception, trajectory prediction, positioning, and striking. The MV-BMR paper provides context for two-stage badminton prediction and control."
    },
    "media": {
      "video": "assets/projects/sports-robot/demo.mp4",
      "poster": "assets/projects/sports-robot/demo.poster.webp",
      "alt": {
        "zh": "三球一体运动机器人的乒乓球、羽毛球与网球演示",
        "en": "Multi-sport robot demonstrations in table tennis, badminton, and tennis"
      }
    },
    "facts": [
      {
        "label": {
          "zh": "参与类型",
          "en": "Involvement"
        },
        "value": {
          "zh": "参与项目",
          "en": "Collaborative project"
        }
      },
      {
        "label": {
          "zh": "演示任务",
          "en": "Demonstrations"
        },
        "value": {
          "zh": "乒乓球、羽毛球、网球",
          "en": "Table tennis, badminton, tennis"
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
            "zh": "球类运动要求机器人在来球落地或越过可击打区域前完成感知、判断、移动与回击。不同球类的飞行速度、运动规律和场地尺度不同，但都需要把视觉观测与移动平台、挥拍机械臂联动起来。",
            "en": "Ball-sport robots must perceive, decide, reposition, and return a ball before it leaves the reachable zone. Flight dynamics and court scale differ across sports, but all require close coordination between vision, a mobile platform, and a striking arm."
          },
          {
            "zh": "本页通过三球一体实机视频展示平台在不同球类场景中的动作，并参考 Shi 等人的 MV-BMR 研究梳理羽毛球的感知与控制思路。实机演示和相关文献实验分别列示。",
            "en": "The multi-sport video documents physical actions across the three sports. Shi et al.’s MV-BMR study provides context for badminton sensing and control, with the supplied demonstrations and related literature experiments presented separately."
          }
        ],
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
            "zh": "机器人根据来球状态调整位置与球拍姿态，在可击打时间窗口内完成回击。视频依次包括乒乓球正反手及人机对打、羽毛球对打、网球对打，展示不同球类与球拍配置下的动作。",
            "en": "The robot adjusts position and racket pose from the incoming ball state and returns it within the available interception window. The video includes table-tennis forehand/backhand and rallies, followed by badminton and tennis rallies under different racket configurations."
          }
        ],
        "points": [
          {
            "zh": "感知来球并估计未来可击打区域，争取底盘移动时间。",
            "en": "Observe the ball and estimate a future interception region to provide time for base movement."
          },
          {
            "zh": "协调底盘站位、机械臂姿态与挥拍时机，连接预测结果和真实动作。",
            "en": "Coordinate base position, arm pose, and striking time to translate predictions into physical actions."
          }
        ],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Hardware"
        },
        "paragraphs": [
          {
            "zh": "视频中的实机由移动底盘、挥拍机械臂和球拍组成，在不同场地中进行三类球运动。设备图截取自演示视频，展示实际平台与挥拍结构。",
            "en": "The video shows a mobile base, striking arm, and racket operating in three sports settings. The hardware view is a still from the supplied demonstration."
          }
        ],
        "figures": [
          {
            "src": "assets/projects/sports-robot/platform.webp",
            "role": "main",
            "caption": {
              "zh": "三球一体运动机器人实机（视频截图）",
              "en": "Multi-sport robot hardware, from the supplied video"
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
            "zh": "运动任务的基本流程为来球感知、轨迹预测、击球位置选择和底盘/机械臂协同执行。对于可用反应时间短的羽毛球，尽早估计落点区域有助于先启动平台，再利用新的视觉观测修正击球位置。",
            "en": "The pipeline connects ball sensing, trajectory prediction, interception selection, and coordinated base/arm execution. For fast badminton exchanges, an early region estimate allows the platform to move before later visual observations refine the hit point."
          },
          {
            "zh": "在 MV-BMR 羽毛球方案中，第一阶段将球拍 IMU 与视觉信息输入 SEPNet，提前估计可击打区域并以 PID 启动平台；第二阶段持续更新视觉轨迹与击球点，通过 NMPC 协调平台和机械臂。两阶段结构体现了先争取移动时间、再逐步提高击球精度的设计思路。",
            "en": "In the MV-BMR badminton system, SEPNet combines racket-IMU and visual information to estimate a hit zone early, with PID starting the platform. A second stage updates the visual trajectory and interception point and uses NMPC for coordinated base and arm motion. This structure first gains movement time and then progressively refines interception."
          }
        ],
        "figures": [
          {
            "src": "assets/projects/sports-robot/mvbmr-overview.webp",
            "caption": {
              "zh": "技术参考：Shi 等，MV-BMR，Information Fusion 123 (2025)，Fig. 1",
              "en": "Technical reference: Shi et al., MV-BMR, Information Fusion 123 (2025), Fig. 1"
            }
          }
        ],
        "source": {
          "url": "https://doi.org/10.1016/j.inffus.2025.103337",
          "label": {
            "zh": "参考文献：MV-BMR（Information Fusion, 2025）",
            "en": "Reference: MV-BMR (Information Fusion, 2025)"
          }
        }
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstrations"
        },
        "paragraphs": [
          {
            "zh": "以下三球一体实机视频按球类拆分，直接从运动开始播放。乒乓球片段展示正反手与连续回击，羽毛球和网球片段展示移动平台在真实场地中的人机对打。",
            "en": "The multi-sport video is split by sport, with each clip starting at the physical action. Table-tennis footage shows forehand, backhand, and successive returns, while badminton and tennis clips show mobile-platform rallies in real courts."
          }
        ],
        "figures": [
          {
            "video": "assets/projects/sports-robot/table-tennis.mp4",
            "poster": "assets/projects/sports-robot/table-tennis.poster.webp",
            "caption": {
              "zh": "乒乓球：正反手与人机对打",
              "en": "Table tennis: forehand, backhand, and rallies"
            }
          },
          {
            "video": "assets/projects/sports-robot/badminton.mp4",
            "poster": "assets/projects/sports-robot/badminton.poster.webp",
            "caption": {
              "zh": "羽毛球：移动与人机对打",
              "en": "Badminton: positioning and rallies"
            }
          },
          {
            "video": "assets/projects/sports-robot/tennis.mp4",
            "poster": "assets/projects/sports-robot/tennis.poster.webp",
            "caption": {
              "zh": "网球：实机场地对打",
              "en": "Tennis: physical court rallies"
            }
          }
        ]
      },
      {
        "id": "experiments",
        "title": {
          "zh": "相关文献实验：MV-BMR",
          "en": "Related literature: MV-BMR experiments"
        },
        "paragraphs": [
          {
            "zh": "Shi 等人在 MV-BMR 论文的实验部分报告：羽毛球短球平均击球成功率为 92.2%，最长连续对打为 68 回合。该文献结果展示了两阶段轨迹预测与控制在快速来球任务中的验证效果。",
            "en": "The experimental section of Shi et al.’s MV-BMR paper reports 92.2% mean short-shot hit success and a longest rally of 68 exchanges. These literature results demonstrate the evaluated two-stage trajectory-prediction and control approach for fast incoming shots."
          }
        ],
        "figures": []
      }
    ]
  },
  {
    "id": "chess-grasping",
    "group": "collaboration",
    "categoryKey": "manipulation",
    "category": {
      "zh": "视觉操作",
      "en": "Visual manipulation"
    },
    "title": {
      "zh": "机械臂棋子视觉抓取",
      "en": "Robotic visual grasping of game pieces"
    },
    "summary": {
      "zh": "面向棋盘上小尺寸棋子的视觉抓取，将棋子位置与夹爪接近、夹取动作衔接；实机演示展示协作机械臂对棋子的定位、夹持和操作过程。",
      "en": "For visual pickup of small pieces on a game board, target positions are connected to gripper approach and closure. The physical demonstration shows a collaborative arm localizing and grasping a board piece."
    },
    "media": {
      "video": "assets/projects/chess-grasping/demo.mp4",
      "poster": "assets/projects/chess-grasping/demo.poster.webp",
      "alt": {
        "zh": "机械臂在棋盘上执行棋子抓取",
        "en": "Robot-arm piece pickup on a game board"
      }
    },
    "facts": [
      {
        "label": {
          "zh": "参与类型",
          "en": "Involvement"
        },
        "value": {
          "zh": "参与项目",
          "en": "Collaborative project"
        }
      },
      {
        "label": {
          "zh": "操作对象",
          "en": "Objects"
        },
        "value": {
          "zh": "棋盘与棋子",
          "en": "Game board and pieces"
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
            "zh": "棋子尺寸小、形状相近，棋盘纹理与夹爪接近方向都会影响视觉定位和抓取。任务需要把相机观察到的目标位置转换为机械臂可执行的动作，并处理夹爪与棋盘之间的空间关系。",
            "en": "Small, similarly shaped pieces and a patterned board challenge visual localization and grasp approach. The task connects camera-observed targets with executable arm motion while accounting for the gripper’s clearance above the board."
          }
        ],
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
            "zh": "在棋盘区域定位目标棋子，调整夹爪对准目标，完成接近、闭合夹持与后续移动。实机演示聚焦视觉目标和末端操作之间的衔接。",
            "en": "Locate a target piece on the board, align the gripper, and execute approach, closure, and subsequent movement. The demonstration focuses on connecting a visual target with end-effector operation."
          }
        ],
        "figures": []
      },
      {
        "id": "equipment",
        "title": {
          "zh": "设备说明",
          "en": "Hardware"
        },
        "paragraphs": [
          {
            "zh": "实机包含协作机械臂、末端夹爪和棋盘工作台。视频从近距离观察夹爪与棋子的相对位置及接触过程。",
            "en": "The setup comprises a collaborative arm, an end-effector gripper, and a board workspace. A close view documents the relative positions and contact between the gripper and piece."
          }
        ],
        "figures": [
          {
            "src": "assets/projects/chess-grasping/demo.poster.webp",
            "role": "main",
            "caption": {
              "zh": "协作机械臂与棋盘抓取工作区。",
              "en": "Collaborative arm and board-grasping workspace."
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
            "zh": "流程围绕视觉目标定位、抓取位置对准和机械臂动作执行展开，将目标识别结果与夹爪接近、闭合和移动等阶段连接。小物体抓取重点关注定位偏差、夹爪开口和接近方向对接触结果的影响。",
            "en": "The workflow connects visual target localization, grasp alignment, and arm execution through approach, closure, and movement. Small-object manipulation makes localization error, gripper opening, and approach direction particularly relevant to contact outcomes."
          }
        ],
        "figures": []
      },
      {
        "id": "demo",
        "title": {
          "zh": "演示与结果",
          "en": "Demonstration"
        },
        "paragraphs": [
          {
            "zh": "以下片段来自 PPT 中的棋盘实机抓取视频，展示机械臂在棋盘工作区对小尺寸棋子的操作过程。",
            "en": "The supplied PPT clip documents physical arm manipulation of a small piece in the board workspace."
          }
        ],
        "figures": [
          {
            "video": "assets/projects/chess-grasping/demo.mp4",
            "poster": "assets/projects/chess-grasping/demo.poster.webp",
            "caption": {
              "zh": "棋子视觉定位与机械臂抓取实机演示。",
              "en": "Physical demonstration of visual piece localization and robot-arm grasping."
            }
          }
        ]
      }
    ]
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
          },
          {
            "zh": "双轮平台的支撑范围有限，姿态保持与移动响应需要协调。轮腿结构为姿态调整提供机构条件，原型阶段通过短距离实机测试观察整体运动状态。",
            "en": "A two-wheel platform has limited support, making balance and travel interdependent. The leg structure provides mechanical freedom for posture adjustment, observed here through short-range prototype tests."
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
          },
          {
            "zh": "记录机器人在测试区域中的站立平衡、姿态变化和短距离移动，重点观察轮式驱动与腿部机构共同作用下的运动连续性。",
            "en": "The recording documents standing balance, posture changes, and short-range movement, focusing on the continuity of wheel-driven travel and leg-structure motion."
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
            },
            "role": "main"
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
            "zh": "原型将双轮驱动与腿部机构结合，围绕姿态保持和短距离运动开展联调。视频展示平台构型、平衡姿态与运动响应，记录轮式移动和腿部结构协同作用下的实机表现。",
            "en": "The prototype combines two driven wheels with leg mechanisms for posture and short-range motion tests. The footage records the hardware configuration, balancing posture, and motion response produced by the combined wheel and leg structure."
          }
        ],
        "figures": []
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
    },
    "group": "collaboration"
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
          },
          {
            "zh": "与规则刚性物体相比，服装和食品物料更容易在接触后发生形变，抓取点选择和夹持方式会改变后续搬移行为。实物测试用于比较不同末端工具与材料的适配情况。",
            "en": "Clothing and food materials deform on contact, so grasp location and holding method influence transfer behavior. Physical trials examine how different end-effectors interact with the materials."
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
          },
          {
            "zh": "在不同夹爪和机械臂配置下观察目标能否被夹持、提起和转移，记录柔性材料在操作中的形态变化；演示按服装抓取、食品物料与工作台处理分项呈现。",
            "en": "Tests observe holding, lifting, and transfer under different gripper and arm configurations, including material deformation. Demonstrations are organized into clothing grasping, food materials, and workbench handling."
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
          },
          {
            "zh": "技术重点在于目标形态、夹持接触与机械臂动作之间的匹配。实机记录按机械臂和末端工具配置展示夹持、提起、搬移及材料处理，可直接观察不同物料在动作执行中的形态变化。",
            "en": "The technical focus is matching object shape, gripper contact, and arm motion. Physical records show holding, lifting, transfer, and processing under different arm and end-effector configurations, documenting material deformation during execution."
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
            "video": "assets/projects/aloha/ppt-47.mp4",
            "poster": "assets/projects/aloha/ppt-47.poster.webp",
            "caption": {
              "zh": "服装操作的双臂示教与遥操作",
              "en": "Dual-arm demonstration and teleoperation for garment handling"
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
    },
    "group": "collaboration"
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
          },
          {
            "zh": "产线运行要求感知、机械臂和输送设备按顺序配合：目标位置变化、抓取时机与设备状态不一致都会影响作业连续性。项目重点是把视觉分拣流程与现场硬件逻辑连通。",
            "en": "Line operation requires coordinated sensing, robot motion, and conveying: target movement, picking timing, and equipment state affect continuity. The focus is integrating visual sorting with the pilot line’s hardware logic."
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
          },
          {
            "zh": "围绕目标识别定位、机械臂取放、处理计数和设备联动完成流程调试，在现场预研平台检查各环节的输入输出与执行顺序。",
            "en": "Detection and localization, arm pick-and-place, processing counts, and equipment coordination are commissioned together on the pilot platform, checking data interfaces and execution order."
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
          },
          {
            "zh": "系统以目标位置和设备状态为接口组织视觉、抓取与产线控制，计数信息用于记录处理进度。现场联调检查机械臂动作与其他机构的衔接，材料记录了预研调试与验收过程。",
            "en": "Target positions and equipment state connect vision, grasping, and line control, while counts track progress. On-site integration checks arm interactions with other mechanisms; the supplied material records pilot commissioning and acceptance."
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
    },
    "group": "collaboration"
  }
];
