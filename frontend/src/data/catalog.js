const catalog = [
  {
    id: "ngfw",
    title: "NGFW (+IDS/IPS)",
    description: "Межсетевые экраны нового поколения с функциями обнаружения и предотвращения вторжений",
    products: [
      {
        id: "checkpoint",
        name: "CheckPoint",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Check_Point_logo_2022.svg"
      },
      {
        id: "fortinet",
        name: "Fortinet",
        image: "https://hotkey404.com/wp-content/uploads/2023/01/Fortinet_LogoTag_BlackRed.png"
      },
      {
        id: "paloalto",
        name: "PaloAlto",
        image: "https://www.dragos.com/wp-content/uploads/2022/08/Palo-Alto.png"
      },
      {
        id: "cisco",
        name: "Cisco",
        image: "https://newsroom.cisco.com/content/dam/r/newsroom/en/us/assets/a/y2024/m08/Cisco_Logo_no_TM_Sky_Blue-RGB_1200x675.jpg"
      },
      {
        id: "watchguard",
        name: "WatchGuard",
        image: "https://www.infinigate.com/wp-content/uploads/2023/04/WatchGuard_logo.svg"
      }
    ]
  },
  {
    id: "av",
    title: "AV/EDR/XDR",
    description: "Антивирусные решения и системы обнаружения и реагирования на угрозы на конечных точках",
    products: [
      {
        id: "eset",
        name: "Eset",
        image: "https://www.security.org/app/uploads/2020/12/ESET-Logo.png"
      },
      {
        id: "kaspersky",
        name: "Kaspersky",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
      },
      {
        id: "crowdstrike",
        name: "Crowdstrike",
        image: "https://www.cybersecitalia.events/wp-content/uploads/2024/01/crowdstrike-logo.png"
      },
      {
        id: "trendmicro",
        name: "TrendMicro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Trend_Micro_logo.svg/1200px-Trend_Micro_logo.svg.png"
      },
      {
        id: "sentinelone",
        name: "SentinelOne",
        image: "https://images.contentstack.io/v3/assets/blt9e072702140c498e/blt985aceb419e88d86/639211a73a0e946001a48e33/Sentinelone.png"
      },
      {
        id: "trellix",
        name: "Trellix",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpStOxj2tRQmvZ0xZaIyklw6FxR1h5Wz3yRg&s"
      }
    ]
  },
  {
    id: "dlp",
    title: "DLP",
    description: "Системы предотвращения утечек данных для защиты конфиденциальной информации",
    products: [
      {
        id: "cyberguard",
        name: "CyberGuard",
        image: "https://nctp.kz/images/cyber.jpg"
      },
      {
        id: "searchinform",
        name: "SearchInform",
        image: "https://avg-it.ru/upload/iblock/67a/w3pq5xlffl35vaxxnokku5uowedny5nw.png"
      },
      {
        id: "digitalguardian",
        name: "DigitalGuardian",
        image: "https://store-images.s-microsoft.com/image/apps.52060.ff558954-1156-4c98-9d59-f87407e77b57.647c100b-ea86-4443-b00a-e91a8715b45d.1e8f983e-29ea-4297-832d-a23025cefed5"
      },
      {
        id: "infowatch",
        name: "InfoWatch",
        image: "https://www.itsec.ru/hubfs/ISR/%D0%98%D0%BD%D1%84%D0%BE%D0%B2%D0%BE%D1%82%D1%87-Nov-01-2022-12-38-53-5980-PM.png"
      },
      {
        id: "solardozor",
        name: "SolarDozor",
        image: "https://ib.radiuscompany.ru/wp-content/uploads/2018/08/Solar_Dozor.jpg"
      },
      {
        id: "symantec",
        name: "Symantec",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTb2_zRbHPsxlwJl_NzwNJ0R8fLdk_bI8SMg&s"
      },
      {
        id: "zecurion",
        name: "Zecurion",
        image: "https://rtmtech.ru/wp-content/uploads/2022/08/logo-Zecurion.png"
      },
      {
        id: "ibatyr",
        name: "iBatyr",
        image: "https://gb.ru/blog/wp-content/uploads/2022/09/1-14.jpg"
      },
      {
        id: "gtb",
        name: "GTB",
        image: "https://iit-d.kz/wp-content/uploads/2024/12/property-1gtb-technologies.png"
      },
      {
        id: "forcepoint",
        name: "ForcePoint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Forcepoint_Logo.svg/2560px-Forcepoint_Logo.svg.png"
      },
      {
        id: "safetica",
        name: "Safetica",
        image: "https://asapdemo.com/wp-content/uploads/2020/04/eset-safetica-1.png"
      }
    ]
  },
  {
    id: "sandbox",
    title: "Sandbox",
    description: "Изолированная среда для безопасного анализа подозрительных файлов и обнаружения вредоносного ПО",
    products: [
      {
        id: "tlab",
        name: "tLab",
        image: "https://media.licdn.com/dms/image/v2/D560BAQEaSChcVu6tYw/company-logo_200_200/company-logo_200_200/0/1709277567756/tlabtech_logo?e=2147483647&v=beta&t=m4BA3B2w3U7Xq-fKhgdT4z4q_Xkz-U5j6psu_4713K0"
      }
    ]
  },
  {
    id: "waf",
    title: "WAF(+antiDDOS)",
    description: "Защита веб-приложений от атак и предотвращение DDoS-атак на инфраструктуру",
    products: [
      {
        id: "cloudflare",
        name: "CloudFlare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaaS6cz2-k_AywDZ0twr_KFwOC5CHQPiFNA&s"
      },
      {
        id: "f5",
        name: "f5",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/F5_Networks_logo.svg/1200px-F5_Networks_logo.svg.png"
      },
      {
        id: "fortinet-waf",
        name: "Fortinet",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwMkhmSp7FqIQKoqYW8epUYDvZAs4uaUrkw&s"
      }
    ]
  },
  {
    id: "nac",
    title: "NAC",
    description: "Контроль доступа к сети для защиты от несанкционированного подключения устройств",
    products: [
      {
        id: "netscout",
        name: "Netscout",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSna1fjPnyj_Z9VefDmrihDUmvKyyurU0OtVA&s"
      }
    ]
  },
  {
    id: "siem",
    title: "SIEM",
    description: "Системы управления информацией и событиями безопасности для мониторинга и анализа инцидентов",
    products: [
      {
        id: "elastic",
        name: "Elastic",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg_m4AG5ThekT2jCoNcHsfr3IBH8fdJK-Zw&s"
      },
      {
        id: "splunk",
        name: "Splunk",
        image: "https://www.criticalstart.com/wp-content/uploads/2023/08/Splunk.png"
      },
      {
        id: "energy-logserver",
        name: "Energy Logserver",
        image: "https://www.bakotech.pl/upload/vendors/image-66aa04d53c53e.png"
      },
      {
        id: "qradar",
        name: "IBM QRadar",
        image: "https://old.roi4cio.com/fileadmin/user_upload/IBM_Security_QRadar_SIEM1.png"
      }
    ]
  },
  {
    id: "pam",
    title: "PAM",
    description: "Управление привилегированным доступом для защиты критических систем и данных",
    products: [
      {
        id: "fudo",
        name: "Fudo",
        image: "https://mte-cyber.by/wp-content/uploads/2020/05/fude-logo.jpg"
      },
      {
        id: "wallix",
        name: "Wallix",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKFM4nYeqR6VQ3rMWTOwOk6fQi8KZvGeMlQ&s"
      },
      {
        id: "cyberark",
        name: "CyberArk",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGyn3d8QCULINctOavak7ipDgV9eIwICbEg&s"
      }
    ]
  },
  {
    id: "scanners",
    title: "Scanners",
    description: "Сканеры уязвимостей для выявления слабых мест в системах и приложениях",
    products: [
      {
        id: "celeres",
        name: "Celeres",
        image: "https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/23-12-2020-analysis.png?itok=ZFvJjZXv"
      },
      {
        id: "derscanner",
        name: "DerScanner",
        image: "https://distrisystem.by/wp-content/uploads/2023/07/derscanner-logo-472x127-1.png"
      },
      {
        id: "fortify",
        name: "Fortify",
        image: "https://miro.medium.com/v2/resize:fit:750/0*hh8bL4t2pBckf4Zh.jpg"
      },
      {
        id: "nessus",
        name: "Nessus",
        image: "https://miro.medium.com/v2/resize:fit:1400/0*YbqRjMX_niH6Iazr.png"
      },
      {
        id: "tenable",
        name: "Tenable SC",
        image: "https://www.ico.kz/upload/iblock/eff/170fordp9gremhnc9snn5o06gbtqnxcb/a0670ccc5c6c20c1713086931a4bf25e.png"
      }
    ]
  },
  {
    id: "backup",
    title: "Backup",
    description: "Решения для резервного копирования и восстановления данных после сбоев или атак",
    products: [
      {
        id: "veeam",
        name: "Veeam",
        image: "https://s-tel.kz/media/f2f01544cde19701c507f222eeac4a22.png"
      },
      {
        id: "vinchin",
        name: "Vinchin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCe43bC-fEZ7ajZySnalKOyQjDuYys2mx-g&s"
      }
    ]
  },
  {
    id: "server",
    title: "Сервера/СХД/Коммутаторы",
    description: "Серверное оборудование, системы хранения данных и сетевые устройства",
    products: [
      {
        id: "hpe",
        name: "HPE",
        image: "https://www.hpe.com/apps/settings/wcm/designs/hpeweb/logo.jpg"
      },
      {
        id: "huawei",
        name: "Huawei",
        image: "https://download.logo.wine/logo/Huawei/Huawei-Logo.wine.png"
      },
      {
        id: "dell",
        name: "Dell",
        image: "https://tehnoprint96.ru/upload/iblock/337/337770f4ce1b426d45a2528003b07874.png"
      },
      {
        id: "lenovo",
        name: "Lenovo",
        image: "https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Symbol.png"
      },
      {
        id: "h3c",
        name: "H3C",
        image: "https://allvectorlogo.com/img/2016/06/h3c-logo.png"
      },
      {
        id: "cisco-network",
        name: "Cisco",
        image: "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png"
      },
      {
        id: "supermicro",
        name: "SuperMicro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Super_Micro_Computer_Logo.svg/1200px-Super_Micro_Computer_Logo.svg.png"
      },
      {
        id: "xfusion",
        name: "xFusion",
        image: "https://www.treolan.ru/storage/vendors/picture/i/c/1/ijelnuw0/resize/380x.png"
      },
      {
        id: "fortinet-network",
        name: "Fortinet",
        image: "https://nforceit.com.au/wp-content/uploads/2023/10/nforceit-partner-fortinet-logo.png"
      }
    ]
  },
  {
    id: "easm",
    title: "EASM (автопентест)",
    description: "Автоматизированное управление внешней поверхностью атак и проведение регулярных тестов на проникновение",
    products: [
      {
        id: "dodger",
        name: "Dodger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgm1TiHiopXhe9BuuG_kepF6weK9GylS3SQ&s"
      },
      {
        id: "picus",
        name: "Picus",
        image: "https://cybersecurity-excellence-awards.com/wp-content/uploads/734825-scaled.jpg"
      }
    ]
  },
  {
    id: "awareness",
    title: "Awareness",
    description: "Решения для повышения осведомленности сотрудников в вопросах кибербезопасности",
    products: [
      {
        id: "welldone",
        name: "WellDone",
        image: "https://as2.ftcdn.net/jpg/00/93/79/05/1000_F_93790575_vuk3VPOpp3LsLWiQd4WfVgEITaYPYLqK.jpg"
      }
    ]
  }
];

const services = [
  {
    id: "ocib",
    title: "Оперативный центр информационной безопасности (ОЦИБ)",
    description: "Комплексный сервис мониторинга и реагирования на инциденты безопасности.",
    details: "Наш ОЦИБ работает круглосуточно, обеспечивая постоянный мониторинг и своевременное реагирование на угрозы. Команда опытных специалистов использует передовые технологии для выявления и нейтрализации инцидентов безопасности.",
    features: [
      "Круглосуточное наблюдение за ИТ-инфраструктурой",
      "Выявление и блокировка атак в реальном времени",
      "Реагирование и расследование инцидентов",
      "Регулярные отчеты о состоянии защищенности",
      "Консультирование по вопросам улучшения безопасности"
    ],
    image: "https://intelx.kz/wp-content/uploads/2024/10/designer-58.jpeg"
  },
  {
    id: "test-ib",
    title: "Подготовка и прохождение испытаний ИБ",
    description: "Подготовка систем к сертификации по требованиям регуляторов.",
    details: "Мы поможем вашей организации подготовиться и успешно пройти различные виды проверок информационной безопасности. Наши эксперты проведут предварительную оценку, выявят несоответствия и помогут их устранить.",
    features: [
      "Оценка текущего состояния безопасности",
      "Выявление несоответствий требованиям регуляторов",
      "Разработка плана устранения недостатков",
      "Сопровождение при проведении проверок",
      "Подготовка необходимой документации"
    ],
    image: "https://kslab.kz/wp-content/uploads/2022/06/1.jpg"
  },
  {
    id: "pentest",
    title: "Тестирование на проникновение",
    description: "Проверка защищенности систем методом имитации реальных кибератак.",
    details: "Пентест позволяет выявить реальные уязвимости в ваших системах до того, как их обнаружат злоумышленники. Наши специалисты используют те же методы, что и хакеры, но с целью защиты вашего бизнеса.",
    features: [
      "Имитация действий реальных злоумышленников",
      "Выявление критических уязвимостей",
      "Оценка эффективности существующих мер защиты",
      "Детальный отчет с рекомендациями",
      "Помощь в устранении обнаруженных уязвимостей"
    ],
    image: "https://lh6.googleusercontent.com/proxy/O_Evy2LtFy56sAGCHqnVGX3Hu5p6rDoDKYFkj8bAxUkFoHob1TAA0F-M8I9ajldJtQKJcR0kU9JxpGsEIg-adZ3kqZxjEhy9Ow0Y0w"
  },
  {
    id: "audit",
    title: "Аудит на соответствие стандартам ИБ",
    description: "Проверка соответствия систем и процессов требованиям международных и национальных стандартов.",
    details: "Мы проведем комплексный аудит вашей организации на соответствие различным стандартам информационной безопасности: ISO 27001, PCI DSS, требованиям локальных регуляторов и другим.",
    features: [
      "Проверка соответствия требованиям регуляторов",
      "Анализ организационных и технических мер защиты",
      "Выявление рисков и уязвимостей",
      "Разработка рекомендаций по улучшению",
      "Помощь во внедрении необходимых мер"
    ],
    image: "https://www.smart-soft.ru/data/images/single/34/434.jpg?t=1601816556"
  }
];

// Добавляем константы с цветами в соответствии с логотипом
const colors = {
  primary: "#00a650", // Основной зеленый цвет из логотипа
  secondary: "#025c2d", // Темно-зеленый для акцентов
  tertiary: "#e0f5ea", // Светло-зеленый для фона
  background: "#f0fff6", // Очень светлый зеленый для фона
  text: "#1a1a1a", // Почти черный для текста
  accent: "#06c25e" // Яркий зеленый для выделения
};

export { catalog, services, colors }; 