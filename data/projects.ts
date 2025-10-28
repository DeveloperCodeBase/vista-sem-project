export type ProjectGalleryItem = {
  src: string;
  alt: {
    fa: string;
    en: string;
  };
  caption: {
    fa: string;
    en: string;
  };
};

export type ProjectExecutiveSummary = {
  strapline: string;
  intro: string;
  problem: string;
  mission: string;
  highlights: {
    title: string;
    bullets: string[];
  }[];
  timeline: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  roi: {
    value: string;
    label: string;
    description: string;
  }[];
  deliverables: string[];
  risks: {
    risk: string;
    mitigation: string;
  }[];
  aiImagery: {
    title: string;
    prompt: string;
    asset: string;
  }[];
};

export type ProjectLocaleContent = {
  title: string;
  summary: string;
  category: string;
  badges: {
    label: string;
    value: string;
  }[];
  executive: ProjectExecutiveSummary;
};

export type Project = {
  id: number;
  slug: string;
  cover: string;
  gallery: ProjectGalleryItem[];
  locales: {
    fa: ProjectLocaleContent;
    en: ProjectLocaleContent;
  };
};

const projects: Project[] = [
  {
    id: 1,
    slug: "vista-leak-digital-twin",
    cover: "/images/projects/vista-leak-digital-twin/cover.svg",
    gallery: [
      {
        src: "/images/projects/vista-leak-digital-twin/dashboard.svg",
        alt: {
          fa: "داشبورد دوقلوی دیجیتال شبکه آب با هیت‌مپ احتمال نشتی",
          en: "Digital twin dashboard of a water network with leak probability heatmap"
        },
        caption: {
          fa: "نقشه بلادرنگ DMA با نشتی‌های اولویت‌دار و KPI های عملکرد",
          en: "Real-time DMA map with priority leaks and operational KPIs"
        }
      },
      {
        src: "/images/projects/vista-leak-digital-twin/field.svg",
        alt: {
          fa: "تیم میدانی در حال استقرار حسگر فشار هوشمند",
          en: "Field engineers deploying an intelligent pressure sensor"
        },
        caption: {
          fa: "پکیج حسگر آکوستیک و فشار متصل به شبکه LoRaWAN",
          en: "Acoustic and pressure sensing kit connected to the LoRaWAN network"
        }
      },
      {
        src: "/images/projects/vista-leak-digital-twin/insights.svg",
        alt: {
          fa: "گزارش مدیریتی کاهش NRW و صرفه‌جویی انرژی",
          en: "Executive report summarising NRW reduction and energy savings"
        },
        caption: {
          fa: "گزارش هوش تجاری با محاسبه بازگشت سرمایه و کاهش اعزام میدانی",
          en: "BI report showing ROI calculations and reduced field dispatches"
        }
      }
    ],
    locales: {
      fa: {
        title: "سامانهٔ کشف نشتی و دوقلوی دیجیتال VistaLeak",
        summary:
          "کاهش تلفات آب، کاهش اعزام‌های بی‌نتیجه و ساخت دوقلوی دیجیتال برای تصمیم‌گیری هوشمند در شبکه‌های شهری.",
        category: "آب و زیرساخت",
        badges: [
          { label: "پروژه در حال بهره‌برداری", value: "۱۲+" },
          { label: "استان‌های پوشش داده‌شده", value: "۶ استان" },
          { label: "نرخ کاهش NRW", value: "۱۰ تا ۲۵٪" }
        ],
        executive: {
          strapline: "کشف نشتی‌های نامرئی با فیوژن حسگر، مدل هیدرولیک و تحلیل پیش‌بینانه.",
          intro:
            "VistaLeak سامانه‌ای عملیاتی است که داده‌های حسگرهای فشار و آکوستیک را با مدل هیدرولیکی EPANET ترکیب می‌کند تا نشتی‌های پنهان را قبل از تبدیل شدن به بحران شناسایی کند.",
          problem:
            "فرسودگی لوله‌های مدفون، فشار نوسانی و نبود دید یکپارچه باعث افزایش تلفات واقعی آب (NRW) و هزینه‌های میدانی شده است.",
          mission:
            "ایجاد دید بلادرنگ از رفتار شبکه و ارائه مسیر اقدام برای تیم‌های بهره‌بردار در استان سمنان و شهرهای هدف.",
          highlights: [
            {
              title: "قابلیت‌های کلیدی",
              bullets: [
                "دوقلوی دیجیتال با کالیبراسیون خودکار و هیبرید دیتا-درایو",
                "تحلیل آنومالی ترکیبی (فشار، دبی، آکوستیک) با هوش مصنوعی",
                "گزارش مدیریتی با KPI و محاسبه صرفه‌جویی انرژی"
              ]
            },
            {
              title: "پشتیبانی عملیاتی",
              bullets: [
                "پایش ۲۴/۷ با اعلان چندسطحی برای مدیریت، عملیات و ناظر",
                "تعیین ولوهای پیشنهادی برای ایزولاسیون و حداقل‌سازی قطعی",
                "آموزش و انتقال دانش برای تیم بهره‌بردار"
              ]
            }
          ],
          timeline: [
            {
              phase: "تحلیل و طراحی",
              duration: "هفته ۱ تا ۳",
              activities: [
                "پاکسازی داده‌های GIS و ساخت مدل پایه",
                "طراحی چیدمان حسگر و شبکه ارتباطی",
                "تعریف KPI و خط مبنا"
              ]
            },
            {
              phase: "استقرار حسگر و دوقلو",
              duration: "هفته ۴ تا ۸",
              activities: [
                "نصب حسگرهای فشار و آکوستیک",
                "اتصال امن به پلتفرم و آزمون میدانی",
                "کالیبراسیون مدل EPANET و تنظیم آستانه‌ها"
              ]
            },
            {
              phase: "راه‌اندازی و پایش",
              duration: "هفته ۹ تا ۱۲",
              activities: [
                "Go-Live فاز اول و پایش پایدار",
                "بهینه‌سازی الگوریتم با داده‌های واقعی",
                "گزارش مدیریتی و تصمیم‌سازی سرمایه‌ای"
              ]
            }
          ],
          roi: [
            {
              value: "۲۰۷ m³/روز",
              label: "آب حفظ‌شده در DMA پایلوت",
              description: "معادل بیش از ۶٫۲ میلیارد ریال صرفه‌جویی سالانه"
            },
            {
              value: "۳۴ MWh/سال",
              label: "کاهش انرژی پمپاژ",
              description: "همراه با کاهش ۱۳۰ اعزام میدانی پرهزینه"
            }
          ],
          deliverables: [
            "دوقلوی دیجیتال کالیبره با نقشه‌های تعاملی",
            "داشبورد مدیریتی دو زبانه و اپ میدانی",
            "مستندات فنی، سناریوهای اقدام و آموزش تکمیلی"
          ],
          risks: [
            {
              risk: "خرابی حسگر یا تخلیه باتری",
              mitigation: "پایش سلامت حسگر و برنامه نگهداشت پیشگیرانه با قطعات یدکی"
            },
            {
              risk: "داده GIS ناقص یا قدیمی",
              mitigation: "بازبینی میدانی هدفمند و همگام‌سازی دوره‌ای با واحد نقشه‌برداری"
            }
          ],
          aiImagery: [
            {
              title: "شبکه آبرسانی هوشمند",
              prompt: "شبکه لوله زیرزمینی با هاله‌های نوری و حسگرهای متصل به پلتفرم ابری",
              asset: "/images/projects/vista-leak-digital-twin/cover.svg"
            },
            {
              title: "داشبورد مدیریتی",
              prompt: "نمای هیت‌مپ احتمال نشتی با KPI های لحظه‌ای",
              asset: "/images/projects/vista-leak-digital-twin/dashboard.svg"
            },
            {
              title: "تیم میدانی مجهز",
              prompt: "تکنسین با دستگاه آکوستیک و نور آبی-فیروزه‌ای",
              asset: "/images/projects/vista-leak-digital-twin/field.svg"
            }
          ]
        }
      },
      en: {
        title: "VistaLeak digital twin & leak detection platform",
        summary:
          "Reduce non-revenue water, cut false dispatches and build a calibrated digital twin for operational decision-making.",
        category: "Water & infrastructure",
        badges: [
          { label: "Operational programmes", value: "12+" },
          { label: "Regional footprint", value: "6 provinces" },
          { label: "NRW reduction", value: "10–25%" }
        ],
        executive: {
          strapline: "Uncover invisible leaks by fusing sensor analytics, hydraulic modelling and AI forecasting.",
          intro:
            "VistaLeak ingests high-frequency pressure and acoustic data, calibrates an EPANET digital twin and guides operators before leaks escalate into outages.",
          problem:
            "Aging buried assets and fluctuating pressure drive NRW and unplanned maintenance while managers lack a consolidated operational view.",
          mission:
            "Deliver real-time situational awareness and playbooks for Semnan province utilities and partner cities.",
          highlights: [
            {
              title: "What makes it different",
              bullets: [
                "Self-calibrating hybrid digital twin",
                "Multimodal anomaly detection across pressure, flow and acoustics",
                "Executive reporting with energy and NRW savings"
              ]
            },
            {
              title: "Operational enablement",
              bullets: [
                "24/7 monitoring with tiered alerts for management and field teams",
                "Valve isolation recommendations that minimise service disruption",
                "Capability transfer and certified operator training"
              ]
            }
          ],
          timeline: [
            {
              phase: "Discovery & design",
              duration: "Weeks 1–3",
              activities: [
                "Cleanse GIS layers and assemble the baseline model",
                "Engineer the sensor and communications layout",
                "Define KPIs and baseline measurements"
              ]
            },
            {
              phase: "Deployment",
              duration: "Weeks 4–8",
              activities: [
                "Install pressure and acoustic sensors",
                "Commission secure connectivity and run field acceptance tests",
                "Calibrate EPANET and tune detection thresholds"
              ]
            },
            {
              phase: "Go-live & optimisation",
              duration: "Weeks 9–12",
              activities: [
                "Launch pilot DMA with 24/7 monitoring",
                "Refine the AI model with live data",
                "Publish executive impact report and investment roadmap"
              ]
            }
          ],
          roi: [
            {
              value: "207 m³/day",
              label: "Water preserved per pilot DMA",
              description: "Equivalent to 6.2B IRR of annual savings"
            },
            {
              value: "34 MWh/year",
              label: "Energy saved on pumping",
              description: "Alongside 130 fewer false dispatches"
            }
          ],
          deliverables: [
            "Calibrated digital twin with interactive DMA maps",
            "Bilingual executive dashboard and field companion app",
            "Technical runbook, action scenarios and training"
          ],
          risks: [
            {
              risk: "Sensor failure or battery depletion",
              mitigation: "Sensor health monitoring plus a preventive maintenance stock"
            },
            {
              risk: "Outdated GIS records",
              mitigation: "Targeted field surveys and scheduled synchronisation with mapping teams"
            }
          ],
          aiImagery: [
            {
              title: "Intelligent distribution network",
              prompt: "Subsurface pipeline grid with luminous sensors linked to a cloud platform",
              asset: "/images/projects/vista-leak-digital-twin/cover.svg"
            },
            {
              title: "Operations dashboard",
              prompt: "Leak probability heatmap and live KPIs",
              asset: "/images/projects/vista-leak-digital-twin/dashboard.svg"
            },
            {
              title: "Augmented field team",
              prompt: "Technician with acoustic gear under teal lighting",
              asset: "/images/projects/vista-leak-digital-twin/field.svg"
            }
          ]
        }
      }
    }
  },
  {
    id: 2,
    slug: "vista-leak-score",
    cover: "/images/projects/vista-leak-score/cover.svg",
    gallery: [
      {
        src: "/images/projects/vista-leak-score/risk-map.svg",
        alt: {
          fa: "نقشه ریسک دارایی‌های لوله‌گذاری با گرادیان حرارتی",
          en: "Asset risk map with thermal gradient"
        },
        caption: {
          fa: "Risk Map با امتیازدهی P×I برای هر قطعه شبکه",
          en: "Risk map displaying P×I scores per network segment"
        }
      },
      {
        src: "/images/projects/vista-leak-score/capital.svg",
        alt: {
          fa: "جدول برنامه سرمایه‌ای سه‌ساله با نمودار بودجه",
          en: "Three-year capital plan table with budget chart"
        },
        caption: {
          fa: "سناریوهای سرمایه‌گذاری و بازگشت سرمایه",
          en: "Capital investment scenarios and ROI"
        }
      },
      {
        src: "/images/projects/vista-leak-score/field.svg",
        alt: {
          fa: "تیم تعمیرات در حال تعویض لوله با سیستم هوشمند",
          en: "Maintenance crew replacing pipe with smart guidance"
        },
        caption: {
          fa: "اجرای عملیات تعویض هدفمند در معابر بحرانی",
          en: "Targeted renewal on critical corridors"
        }
      }
    ],
    locales: {
      fa: {
        title: "پلتفرم امتیازدهی ریسک دارایی VistaLeak-Score",
        summary: "تعویض هدفمند لوله‌های فرسوده با بهینه‌سازی بودجه و کاهش شکست‌های تکراری.",
        category: "آب و برنامه‌ریزی سرمایه",
        badges: [
          { label: "پروژه در حال بهره‌برداری", value: "۸ شهر" },
          { label: "صرفه‌جویی CAPEX", value: "۱۰ تا ۲۰٪" },
          { label: "کاهش شکست", value: "۱۵ تا ۳۰٪" }
        ],
        executive: {
          strapline: "از داده تاریخی و محیطی تا سبد سرمایه‌ای بهینه برای استان سمنان.",
          intro:
            "VistaLeak-Score با ترکیب داده‌های GIS، شکست‌های گذشته، ویژگی‌های خاک و ترافیک سطحی، احتمال شکست هر قطعه شبکه را مدل‌سازی می‌کند و بهترین بسته سرمایه‌گذاری را پیشنهاد می‌دهد.",
          problem:
            "تعویض گسترده و غیرهدفمند باعث هدررفت سرمایه و استمرار شکست در نقاط حساس می‌شود.",
          mission:
            "تدوین نقشه راه سه‌ساله با اولویت‌بندی علمی و قابل دفاع برای هیئت مدیره و دستگاه‌های نظارتی.",
          highlights: [
            {
              title: "چارچوب فنی",
              bullets: [
                "ساخت دیتاست ریسک با بیش از ۴۰ شاخص ساختاری، محیطی و عملیاتی",
                "مدل یادگیری ماشین (XGBoost) با تحلیل SHAP برای شفافیت",
                "بهینه‌سازی بودجه‌ای چندسناریو با قیود اجرایی"
              ]
            },
            {
              title: "ارزش مدیریتی",
              bullets: [
                "Risk Map تعاملی و داشبورد KPI",
                "گزارش توجیه اقتصادی برای هر سناریو",
                "ابزار شبیه‌سازی برای بازتنظیم سالانه"
              ]
            }
          ],
          timeline: [
            {
              phase: "ساخت داده و استانداردسازی",
              duration: "ماه ۱",
              activities: [
                "یکپارچه‌سازی لایه‌های GIS و پاکسازی شناسه‌ها",
                "جمع‌آوری داده محیطی، خاک و ترافیک",
                "طراحی ساختار ریسک و KPI"
              ]
            },
            {
              phase: "مدل‌سازی و سناریوسازی",
              duration: "ماه ۲",
              activities: [
                "آموزش مدل احتمال شکست و اعتبارسنجی",
                "تعریف شدت اثر و محاسبه Risk Score",
                "ساخت سناریوهای سرمایه‌ای A/B/C"
              ]
            },
            {
              phase: "برنامه‌ریزی و اجرا",
              duration: "ماه ۳ تا ۴",
              activities: [
                "تهیه BOQ و برنامه اجرایی",
                "همکاری با شهرداری و راهور برای معابر پرترافیک",
                "راه‌اندازی داشبورد تصمیم‌سازی و انتقال دانش"
              ]
            }
          ],
          roi: [
            {
              value: "۳۰٪",
              label: "کاهش شکست در کریدور هدف",
              description: "۶ حادثه کمتر در سال با هزینه متوسط ۷۰ میلیون تومان"
            },
            {
              value: "۱۴۴ میلیون ریال",
              label: "صرفه‌جویی تکمیلی آب",
              description: "حفظ ۴۸۰۰ مترمکعب آب با کاهش شکست‌های پرنشت"
            }
          ],
          deliverables: [
            "Risk Map و فایل‌های GIS به‌روزشده",
            "سناریوهای سرمایه‌ای با محاسبات اقتصادی",
            "کارگاه انتقال دانش و دستورالعمل نگهداشت"
          ],
          risks: [
            {
              risk: "ناقص بودن داده شکست گذشته",
              mitigation: "وزن‌دهی عدم قطعیت و برنامه تکمیلی جمع‌آوری داده"
            },
            {
              risk: "محدودیت اجرایی در معابر پرترافیک",
              mitigation: "طراحی فازبندی شبانه و هماهنگی با نهادهای شهری"
            }
          ],
          aiImagery: [
            {
              title: "نقشه هوشمند ریسک",
              prompt: "گرادیان حرارتی روی نقشه شهری با نقاط بحرانی",
              asset: "/images/projects/vista-leak-score/risk-map.svg"
            },
            {
              title: "داشبورد سرمایه‌ای",
              prompt: "جدول بهینه‌سازی بودجه با نمودار",
              asset: "/images/projects/vista-leak-score/capital.svg"
            },
            {
              title: "تیم اجرا",
              prompt: "تعمیرات هدفمند با هدست واقعیت افزوده",
              asset: "/images/projects/vista-leak-score/field.svg"
            }
          ]
        }
      },
      en: {
        title: "VistaLeak-Score asset risk planning",
        summary: "Target pipe renewals that deliver maximum risk reduction with optimised capital plans.",
        category: "Water & capital planning",
        badges: [
          { label: "Operational cities", value: "8" },
          { label: "CAPEX efficiency", value: "10–20%" },
          { label: "Failure reduction", value: "15–30%" }
        ],
        executive: {
          strapline: "Turn historical, environmental and operational data into a defensible three-year renewal roadmap.",
          intro:
            "VistaLeak-Score builds a unified risk dataset, trains an XGBoost model to forecast failure probability and optimises capital allocation under real-world constraints.",
          problem:
            "Length-based renewals waste scarce budgets and leave critical corridors exposed.",
          mission:
            "Equip boards and regulators with a transparent investment case for Semnan and partner municipalities.",
          highlights: [
            {
              title: "Technical pillars",
              bullets: [
                "40+ structural, environmental and operational features",
                "Explainable AI with SHAP-driven insights",
                "Budget optimisation with execution constraints"
              ]
            },
            {
              title: "Management value",
              bullets: [
                "Interactive risk map and KPI cockpit",
                "Economic justification per scenario",
                "Simulation tooling for annual refresh"
              ]
            }
          ],
          timeline: [
            {
              phase: "Data curation",
              duration: "Month 1",
              activities: [
                "Merge GIS layers and reconcile asset IDs",
                "Ingest soil, climate and traffic datasets",
                "Define the risk framework and KPIs"
              ]
            },
            {
              phase: "Modelling & scenarios",
              duration: "Month 2",
              activities: [
                "Train and validate failure probability model",
                "Quantify impact severity and compute risk scores",
                "Build capital scenarios A/B/C"
              ]
            },
            {
              phase: "Planning & launch",
              duration: "Months 3–4",
              activities: [
                "Produce BOQ and execution calendar",
                "Coordinate with city traffic authorities",
                "Deploy decision dashboard and knowledge transfer"
              ]
            }
          ],
          roi: [
            {
              value: "30%",
              label: "Fewer failures on critical corridors",
              description: "Six incidents avoided each year at 70M IRR per event"
            },
            {
              value: "4,800 m³",
              label: "Water preserved",
              description: "Equal to 144M IRR in complementary savings"
            }
          ],
          deliverables: [
            "Risk map and refreshed GIS layers",
            "Capital scenarios with economic justification",
            "Knowledge transfer workshop and maintenance playbook"
          ],
          risks: [
            {
              risk: "Incomplete failure history",
              mitigation: "Uncertainty weighting plus targeted data collection"
            },
            {
              risk: "Execution limits on busy corridors",
              mitigation: "Night-time phasing and stakeholder coordination"
            }
          ],
          aiImagery: [
            {
              title: "Smart risk map",
              prompt: "Thermal gradient over a city grid highlighting hot spots",
              asset: "/images/projects/vista-leak-score/risk-map.svg"
            },
            {
              title: "Capital cockpit",
              prompt: "Optimised budget table with scenario chart",
              asset: "/images/projects/vista-leak-score/capital.svg"
            },
            {
              title: "Guided crews",
              prompt: "Renewal crew with augmented-reality overlay",
              asset: "/images/projects/vista-leak-score/field.svg"
            }
          ]
        }
      }
    }
  },
  {
    id: 3,
    slug: "illegal-groundwater-detection",
    cover: "/images/projects/illegal-groundwater-detection/cover.svg",
    gallery: [
      {
        src: "/images/projects/illegal-groundwater-detection/nightlight.svg",
        alt: {
          fa: "نقشه نور شب VIIRS با نقاط پرریسک",
          en: "VIIRS night light map with high-risk clusters"
        },
        caption: {
          fa: "تحلیل نور شب برای شناسایی فعالیت چاه در ساعات غیر مجاز",
          en: "Nighttime light analytics to detect out-of-hours pumping"
        }
      },
      {
        src: "/images/projects/illegal-groundwater-detection/vegetation.svg",
        alt: {
          fa: "نمودار سری زمانی شاخص گیاهی و مصرف برق",
          en: "Time-series of vegetation index versus power consumption"
        },
        caption: {
          fa: "ترکیب شاخص‌های NDVI و مصرف برق جهت رتبه‌بندی تخلف",
          en: "Combining NDVI signatures with power usage to rank violations"
        }
      },
      {
        src: "/images/projects/illegal-groundwater-detection/inspection.svg",
        alt: {
          fa: "اپلیکیشن بازرسی میدانی با امتیاز تخلف",
          en: "Field inspection app with violation scores"
        },
        caption: {
          fa: "اپ هوشمند برای تیم‌های گشت با مسیرهای بهینه",
          en: "Smart patrol app suggesting optimal inspection routes"
        }
      }
    ],
    locales: {
      fa: {
        title: "رصد برداشت غیرمجاز آب زیرزمینی",
        summary: "فیوژن داده‌های سنجش‌ازدور و مصرف برق برای اولویت‌بندی بازرسی و کاهش تخلف.",
        category: "آب و محیط‌زیست",
        badges: [
          { label: "پوشش دشت‌های مطالعاتی", value: "۵ دشت" },
          { label: "کاهش اعزام بی‌نتیجه", value: "۳۰ تا ۵۰٪" },
          { label: "کاهش تخلف", value: "۱۰ تا ۳۰٪" }
        ],
        executive: {
          strapline: "از سنجش‌ازدور، مصرف برق و هوش مصنوعی برای حفظ آبخوان‌های استان.",
          intro:
            "پلتفرم رصد برداشت غیرمجاز داده‌های VIIRS، Sentinel-2 و سری‌زمان مصرف برق چاه‌ها را ادغام می‌کند تا امتیاز احتمال تخلف و مسیرهای بهینه بازرسی را پیشنهاد دهد.",
          problem:
            "پایش میدانی سنتی پرهزینه است و پوشش زمانی/مکانی کافی ندارد که منجر به افت سطح ایستابی و فرونشست می‌شود.",
          mission:
            "کاهش برداشت غیرمجاز و حمایت از برنامه تعادل‌بخشی در استان سمنان با هوش مصنوعی بومی.",
          highlights: [
            {
              title: "منابع داده",
              bullets: [
                "نور شب VIIRS برای تشخیص فعالیت غیرمعمول",
                "شاخص‌های NDVI و NDMI از Sentinel-2 برای بررسی الگوی کشت",
                "سری زمانی مصرف برق چاه‌ها برای شناسایی امضای پمپاژ"
              ]
            },
            {
              title: "خروجی‌های عملیاتی",
              bullets: [
                "امتیاز احتمال تخلف برای هر چاه",
                "مسیرهای پیشنهادی گشت با حداکثر بازده",
                "داشبورد مدیریتی با KPI و گزارش حقوقی"
              ]
            }
          ],
          timeline: [
            {
              phase: "داده و مدل پایه",
              duration: "ماه ۱",
              activities: [
                "جمع‌آوری و همترازسازی تصاویر ماهواره‌ای",
                "پاکسازی داده اشتراک برق و انطباق با مختصات",
                "تعریف شاخص‌های ترکیبی و آستانه‌ها"
              ]
            },
            {
              phase: "مدل‌سازی و اعتبارسنجی",
              duration: "ماه ۲",
              activities: [
                "ساخت مدل تشخیص آنومالی و رتبه‌بندی",
                "اعتبارسنجی میدانی و بازتنظیم آستانه",
                "طراحی گزارشات حقوقی و مدیریتی"
              ]
            },
            {
              phase: "استقرار و گشت هوشمند",
              duration: "ماه ۳",
              activities: [
                "پیاده‌سازی اپلیکیشن گشت",
                "آموزش تیم‌های استانی",
                "پایش مستمر و بازخورد برخط"
              ]
            }
          ],
          roi: [
            {
              value: "۴۰٪",
              label: "افزایش موفقیت گشت",
              description: "کاهش اعزام بی‌نتیجه و تمرکز بر نقاط داغ"
            },
            {
              value: "۲٫۵ متر",
              label: "کاهش روند افت سطح آبخوان",
              description: "بر پایه سناریوی کنترل‌شده در دشت پایلوت"
            }
          ],
          deliverables: [
            "داشبورد مدیریتی تحت وب",
            "اپلیکیشن موبایل با نقشه آفلاین",
            "مستندات حقوقی و فرآیند رسیدگی"
          ],
          risks: [
            {
              risk: "پوشش ابری تصاویر ماهواره‌ای",
              mitigation: "استفاده از ترکیب چند حسگر و میانگین‌گیری زمانی"
            },
            {
              risk: "دقت موقعیت چاه‌ها",
              mitigation: "به‌روزرسانی مختصات با تیم میدانی و اصلاح مداوم"
            }
          ],
          aiImagery: [
            {
              title: "نقشه نور شب",
              prompt: "کلاسترهای روشن روی نقشه دشت",
              asset: "/images/projects/illegal-groundwater-detection/nightlight.svg"
            },
            {
              title: "تحلیل سری زمانی",
              prompt: "نمودار موجی شاخص گیاهی و برق",
              asset: "/images/projects/illegal-groundwater-detection/vegetation.svg"
            },
            {
              title: "گشت هوشمند",
              prompt: "تبلت میدانی با مسیرهای پیشنهادی",
              asset: "/images/projects/illegal-groundwater-detection/inspection.svg"
            }
          ]
        }
      },
      en: {
        title: "Illegal groundwater abstraction intelligence",
        summary: "Fuse remote sensing and power data to prioritise inspections and curb violations.",
        category: "Water & environmental compliance",
        badges: [
          { label: "Aquifers covered", value: "5" },
          { label: "Fewer false patrols", value: "30–50%" },
          { label: "Violation reduction", value: "10–30%" }
        ],
        executive: {
          strapline: "Protect Semnan's aquifers with AI that blends satellites, electricity usage and field feedback.",
          intro:
            "The monitoring platform combines VIIRS night lights, Sentinel-2 vegetation indices and pump power signatures to score illegal abstraction risk and optimise patrol routes.",
          problem:
            "Manual inspections are expensive, sparse and lag real activity, accelerating drawdown and subsidence.",
          mission:
            "Support the national groundwater balance programme with actionable intelligence for provincial teams.",
          highlights: [
            {
              title: "Data sources",
              bullets: [
                "VIIRS night lights to detect out-of-hours pumping",
                "Sentinel-2 NDVI/NDMI for crop persistence and anomaly detection",
                "Electricity consumption time-series to capture pumping signatures"
              ]
            },
            {
              title: "Operational outputs",
              bullets: [
                "Violation probability score per well",
                "Optimised patrol routes and workload balancing",
                "Management dashboard with legal-ready reports"
              ]
            }
          ],
          timeline: [
            {
              phase: "Data alignment",
              duration: "Month 1",
              activities: [
                "Collect and co-register satellite imagery",
                "Cleanse utility subscriber data and geocode",
                "Define composite indices and thresholds"
              ]
            },
            {
              phase: "Modelling & validation",
              duration: "Month 2",
              activities: [
                "Build anomaly detection and ranking models",
                "Field-validate and recalibrate thresholds",
                "Design legal and executive reporting"
              ]
            },
            {
              phase: "Deployment & patrol ops",
              duration: "Month 3",
              activities: [
                "Deploy patrol app with offline maps",
                "Train provincial enforcement teams",
                "Establish feedback loops and continuous monitoring"
              ]
            }
          ],
          roi: [
            {
              value: "40%",
              label: "Higher patrol hit-rate",
              description: "Fewer false visits by concentrating on hot spots"
            },
            {
              value: "2.5 m",
              label: "Projected drawdown improvement",
              description: "Based on controlled pilot aquifer scenario"
            }
          ],
          deliverables: [
            "Web management console",
            "Mobile inspection app with offline cartography",
            "Legal workflow handbook and evidence package"
          ],
          risks: [
            {
              risk: "Cloud cover in optical imagery",
              mitigation: "Blend multi-sensor sources and temporal smoothing"
            },
            {
              risk: "Geolocation accuracy of wells",
              mitigation: "Progressive field validation and GIS corrections"
            }
          ],
          aiImagery: [
            {
              title: "Night light intelligence",
              prompt: "Illuminated clusters across an aquifer map",
              asset: "/images/projects/illegal-groundwater-detection/nightlight.svg"
            },
            {
              title: "Time-series analytics",
              prompt: "Waveform comparing vegetation and power usage",
              asset: "/images/projects/illegal-groundwater-detection/vegetation.svg"
            },
            {
              title: "Smart patrol",
              prompt: "Field tablet with AI-recommended routes",
              asset: "/images/projects/illegal-groundwater-detection/inspection.svg"
            }
          ]
        }
      }
    }
  }
];

export default projects;
