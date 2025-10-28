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

export type ProjectLocaleContent = {
  title: string;
  summary: string;
  category: string;
  badges: {
    label: string;
    value: string;
  }[];
  executiveHtml: string;
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
        src: "/images/projects/vista-leak-digital-twin/cover.svg",
        alt: {
          fa: "نقشه دیجیتال شبکه آب با نواحی نشتی",
          en: "Digital map of the water network with leak clusters"
        },
        caption: {
          fa: "تحلیل نشتی در شبکه آب شهری سمنان",
          en: "Leak analytics for the Semnan municipal water grid"
        }
      }
    ],
    locales: {
      fa: {
        title: "دوقلوی دیجیتال و کشف نشتی VistaLeak",
        summary:
          "پلتفرم نظارت شبکه آب که داده حسگر، مدل هیدرولیک و گزارش بهره‌بردار را ترکیب می‌کند تا نشتی‌ها پیش از تبدیل به بحران شناسایی شوند.",
        category: "آب و زیرساخت",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "پایش شبکه آب" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>VistaLeak در استان سمنان به بهره‌بردار شبکه آب کمک می‌کند الگوی فشار، دبی و سیگنال آکوستیک را به‌صورت یکپارچه پایش کند. خروجی سامانه نقشه احتمال نشتی، هشدار عملیاتی و گزارش مدیریتی است تا تصمیم بر مبنای داده انجام شود.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>فرسودگی لوله‌های مدفون و نبود دید بلادرنگ از رفتار شبکه.</li>
  <li>اعزام‌های تکراری بدون کشف محل دقیق نشتی و اتلاف منابع میدانی.</li>
  <li>فاصله میان تیم‌های بهره‌برداری و مدیریت در ارزیابی اثر اقدامات.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>نصب حسگرهای فشار و صدا در DMZ های حساس با ارتباط امن.</li>
  <li>کالیبراسیون مدل هیدرولیک و اتصال آن به داده‌های زنده.</li>
  <li>تعریف آستانه‌های هوشمند، داشبورد یکپارچه و فرایند پیگیری تیکت.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد دو زبانه با نقشه نشتی و مسیر ایزوله‌سازی.</li>
  <li>پروتکل واکنش میدانی و گزارش پس از اقدام برای مدیریت.</li>
  <li>آموزش و پشتیبانی مستمر تیم بهره‌بردار در سمنان.</li>
</ul>
        `
      },
      en: {
        title: "VistaLeak digital twin",
        summary:
          "An operational platform that fuses sensor data, hydraulic modelling and operator feedback to surface leaks before they escalate.",
        category: "Water intelligence",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Urban water network" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>VistaLeak gives Semnan's water utility a real-time view across pressure, flow and acoustic sensing. The digital twin produces leak probability maps, tiered alerts and concise executive briefings so decisions are grounded in trusted data.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Aging buried mains with limited situational awareness.</li>
  <li>Repeated truck rolls without confirming the actual leak location.</li>
  <li>Disconnected reporting between field operations and leadership.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Deploy resilient pressure and acoustic sensing across priority DMAs.</li>
  <li>Calibrate the hydraulic model with live telemetry.</li>
  <li>Configure anomaly thresholds, bilingual dashboards and ticket workflows.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Actionable leak heatmaps with valve isolation guidance.</li>
  <li>Shared incident playbooks and after-action reporting.</li>
  <li>Ongoing enablement for the Semnan operations team.</li>
</ul>
        `
      }
    }
  },
  {
    id: 2,
    slug: "vista-leak-score",
    cover: "/images/projects/vista-leak-score/cover.svg",
    gallery: [
      {
        src: "/images/projects/vista-leak-score/cover.svg",
        alt: {
          fa: "نقشه اولویت‌بندی نوسازی لوله",
          en: "Priority map for pipe renewal"
        },
        caption: {
          fa: "امتیازدهی ریسک دارایی برای برنامه‌ریزی سرمایه‌ای",
          en: "Risk scoring that guides capital planning"
        }
      }
    ],
    locales: {
      fa: {
        title: "امتیازدهی ریسک VistaLeak-Score",
        summary:
          "چارچوبی برای اولویت‌بندی نوسازی خطوط فرسوده با ترکیب داده‌های تاریخی، محیطی و عملیاتی در استان سمنان.",
        category: "آب و سرمایه‌گذاری",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "برنامه‌ریزی سرمایه‌ای" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>VistaLeak-Score به مدیریت استان سمنان کمک می‌کند بودجه نوسازی لوله‌ها را بر مبنای ریسک واقعی تخصیص دهد. سامانه با تحلیل داده‌های شکست، شرایط خاک و حساسیت مصرف‌کننده، نقشه‌ای شفاف برای تصمیم‌گیری فراهم می‌کند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>پراکندگی داده‌های شکست و نبود شاخص واحد ریسک.</li>
  <li>کمبود بودجه برای تعویض گسترده و نیاز به هدف‌گذاری دقیق.</li>
  <li>لزوم گزارش شفاف برای مدیران و مراجع نظارتی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>یکپارچه‌سازی داده GIS، حوادث و ویژگی‌های محیطی.</li>
  <li>محاسبه امتیاز ریسک ترکیبی احتمال و شدت اثر.</li>
  <li>ساخت سناریوهای بودجه‌ای و نقشه اقدام گام‌به‌گام.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>Risk Map قابل فیلتر با گزارش مدیریتی.</li>
  <li>لیست پروژه‌های پیشنهادی به تفکیک سال و محدودیت اجرایی.</li>
  <li>چارچوب پایش اثر اقدامات و به‌روزرسانی دوره‌ای.</li>
</ul>
        `
      },
      en: {
        title: "VistaLeak-Score asset risk",
        summary:
          "A Semnan-focused decision framework that ranks pipe renewal candidates using operational, environmental and customer impact data.",
        category: "Water capital planning",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Capital optimisation" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>VistaLeak-Score equips Semnan's asset planners with a unified risk index so limited renewal budgets can focus on the most critical corridors. It blends break history, soil conditions and customer sensitivity to surface defensible priorities.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Fragmented maintenance records with no common scoring method.</li>
  <li>Capital constraints that prevent broad, undirected replacement.</li>
  <li>Transparency requirements from executive and regulatory stakeholders.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Integrate GIS, failure and environmental datasets into a clean model.</li>
  <li>Compute combined likelihood and consequence scores for each pipe segment.</li>
  <li>Generate budget scenarios and phased construction roadmaps.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Interactive risk maps and dashboards in Persian and English.</li>
  <li>Year-by-year project lists aligned with operational constraints.</li>
  <li>Governance cadence to refresh data and track impact.</li>
</ul>
        `
      }
    }
  },
  {
    id: 3,
    slug: "illegal-groundwater-detection",
    cover: "/images/projects/illegal-groundwater-detection/cover.svg",
    gallery: [
      {
        src: "/images/projects/illegal-groundwater-detection/cover.svg",
        alt: {
          fa: "نقشه فیوژن داده برای پایش چاه‌های غیرمجاز",
          en: "Data fusion map for monitoring illegal wells"
        },
        caption: {
          fa: "ترکیب نور شب، شاخص گیاهی و الگوی مصرف برق",
          en: "Combining night lights, vegetation indices and power usage"
        }
      }
    ],
    locales: {
      fa: {
        title: "پایش برداشت غیرمجاز آب زیرزمینی",
        summary:
          "سامانه هوشمندی که با ترکیب تصاویر ماهواره‌ای و داده برق، نقاط داغ برداشت در دشت‌های سمنان را برای بازرسی اولویت‌بندی می‌کند.",
        category: "منابع آب زیرزمینی",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "پایش آبخوان" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>این پروژه به شرکت آب منطقه‌ای سمنان امکان می‌دهد با استفاده از نور شب، شاخص‌های گیاهی و سری زمانی مصرف برق چاه‌ها، برداشت غیرمجاز را سریع‌تر تشخیص دهد. نتیجه، لیست بازرسی هدفمند و کاهش اعزام‌های بی‌نتیجه است.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>کاهش سطح آب زیرزمینی و فشار مضاعف بر منابع آبی استان.</li>
  <li>هزینه بالای بازرسی میدانی و نیاز به تمرکز بر نقاط پرریسک.</li>
  <li>نبود داشبورد یکپارچه برای تصمیم‌سازی مدیریتی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>پردازش تصاویر VIIRS و Sentinel-2 برای استخراج الگوهای غیرعادی.</li>
  <li>تحلیل سری زمانی مصرف برق چاه‌ها و همبستگی با داده میدانی.</li>
  <li>ساخت امتیاز احتمال تخلف و نقشه راه بازرسی.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد مدیریتی با فیلتر مکانی و زمانی.</li>
  <li>لیست اولویت‌بندی شده برای تیم بازرسی و گزارش پایش.</li>
  <li>مستند روش‌شناسی برای اعتبارسنجی قضایی.</li>
</ul>
        `
      },
      en: {
        title: "Groundwater compliance analytics",
        summary:
          "A fusion of satellite imagery and electricity data that prioritises groundwater inspections across Semnan's plains.",
        category: "Groundwater stewardship",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Aquifer monitoring" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>This programme helps Semnan Regional Water Company surface unusual extraction patterns by linking night lights, vegetation signals and pump electricity logs. Inspectors receive a ranked list of locations instead of canvassing broad areas.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Declining aquifer levels and pressure on legal abstractions.</li>
  <li>Expensive field patrols that must concentrate on high-risk hotspots.</li>
  <li>Lack of a consolidated management view across remote sensing layers.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Process VIIRS and Sentinel-2 imagery to detect anomalies in cultivation.</li>
  <li>Model well electricity consumption trends and correlate with field surveys.</li>
  <li>Assign compliance scores and generate inspector-ready briefings.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Dashboards with spatial and temporal filtering.</li>
  <li>Ranked inspection itineraries for enforcement teams.</li>
  <li>Methodology documentation to support legal follow-up.</li>
</ul>
        `
      }
    }
  },
  {
    id: 4,
    slug: "smart-irrigation-pistachio-damghan",
    cover: "/images/projects/smart-irrigation-pistachio-damghan/cover.svg",
    gallery: [
      {
        src: "/images/projects/smart-irrigation-pistachio-damghan/cover.svg",
        alt: {
          fa: "نقشه آبیاری دقیق باغ پسته",
          en: "Precision irrigation map for pistachio orchards"
        },
        caption: {
          fa: "پایش رطوبت خاک و زمان‌بندی آبیاری در دامغان",
          en: "Soil moisture monitoring and irrigation scheduling in Damghan"
        }
      }
    ],
    locales: {
      fa: {
        title: "آبیاری هوشمند باغات پسته دامغان",
        summary:
          "پلتفرمی برای اندازه‌گیری رطوبت خاک، پیش‌بینی تبخیر و زمان‌بندی آبیاری هدفمند در باغ‌های پسته استان سمنان.",
        category: "کشاورزی هوشمند",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "آبیاری دقیق" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>در باغ‌های پسته دامغان، مدیریت آب و انرژی حیاتی است. این سامانه با ترکیب حسگرهای رطوبت، پیش‌بینی هواشناسی و مدل‌سازی تبخیر، برنامه آبیاری را هوشمند می‌کند و مصرف آب را با نیاز واقعی درختان هماهنگ می‌سازد.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>افت سطح آب زیرزمینی و سهمیه‌بندی منابع در باغ‌های سنتی.</li>
  <li>عدم شفافیت در تعیین نوبت آبیاری بین قطعات متنوع.</li>
  <li>نیاز به مستندسازی برای ارائه گزارش به تشکل‌های کشاورزی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>استقرار ایستگاه‌های سنجش رطوبت و دمای خاک در قطعات نمونه.</li>
  <li>یکپارچه‌سازی داده سنجش از دور و پیش‌بینی هواشناسی محلی.</li>
  <li>محاسبه شاخص نیاز آبی و تولید برنامه نوبت‌دهی و هشدار.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد مزرعه با نقشه رنگی وضعیت هر قطعه.</li>
  <li>گزارش مصرف واقعی در مقایسه با سهمیه و اهداف صرفه‌جویی.</li>
  <li>بسته آموزشی برای بهره‌بردار و اپراتور سیستم آبیاری.</li>
</ul>
        `
      },
      en: {
        title: "Smart irrigation for Damghan pistachios",
        summary:
          "A precision irrigation platform that aligns soil moisture, weather forecasts and grower routines for Semnan's pistachio orchards.",
        category: "Smart agriculture",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Precision irrigation" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Pistachio orchards around Damghan rely on scarce groundwater. The platform blends in-field sensors with weather-led evapotranspiration models to recommend irrigation slots that respect both crop demand and allocation rules.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Declining aquifer levels and strict water quotas.</li>
  <li>Manual scheduling that ignores differences between orchard blocks.</li>
  <li>The need for transparent reporting to grower cooperatives.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Deploy soil-moisture and canopy sensors in representative plots.</li>
  <li>Fuse remote sensing indicators with hyperlocal weather forecasts.</li>
  <li>Generate irrigation priority indices with alerts and advisory notes.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Farm dashboards with colour-coded block status.</li>
  <li>Usage reports comparing consumption against targets.</li>
  <li>Training materials for growers and irrigation technicians.</li>
</ul>
        `
      }
    }
  },
  {
    id: 5,
    slug: "solar-forecast-soiling-optimization",
    cover: "/images/projects/solar-forecast-soiling-optimization/cover.svg",
    gallery: [
      {
        src: "/images/projects/solar-forecast-soiling-optimization/cover.svg",
        alt: {
          fa: "داشبورد عملکرد نیروگاه خورشیدی",
          en: "Performance dashboard for a solar plant"
        },
        caption: {
          fa: "پیش‌بینی تولید و برنامه شست‌وشوی پنل",
          en: "Forecasting output and panel cleaning schedules"
        }
      }
    ],
    locales: {
      fa: {
        title: "پیش‌بینی تولید و مدیریت آلودگی پنل خورشیدی",
        summary:
          "مدل ترکیبی تابش، غبار و سوابق تولید که برای نیروگاه خورشیدی سمنان برنامه شست‌وشو و انرژی قابل تحویل را پیش‌بینی می‌کند.",
        category: "انرژی هوشمند",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "نیروگاه خورشیدی" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>این سامانه با تحلیل داده تابش، پیش‌بینی هواشناسی و میزان آلودگی پنل، تولید روزانه نیروگاه خورشیدی را برآورد و بهترین زمان شست‌وشو را پیشنهاد می‌کند تا بهره‌برداری در سمنان پایدار بماند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>تجمع غبار و کاهش راندمان در اقلیم خشک سمنان.</li>
  <li>هزینه شست‌وشو و نیاز به هماهنگی با تیم بهره‌برداری.</li>
  <li>گزارش‌دهی شفاف به سرمایه‌گذار و شرکت توزیع.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>مدلسازی تابش خورشیدی و سایه‌اندازی پنل‌ها.</li>
  <li>محاسبه شاخص آلودگی پنل با استفاده از حسگر و داده تولید.</li>
  <li>تولید سناریوی بهره‌برداری و اعلان برای تیم O&amp;M.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>گزارش پیش‌بینی تولید هفتگی و روزانه.</li>
  <li>تقویم شست‌وشو با اولویت‌بندی و تخمین اثر.</li>
  <li>رابط کاربری وب با داشبورد تحلیلی و آرشیو داده.</li>
</ul>
        `
      },
      en: {
        title: "Solar generation & soiling optimisation",
        summary:
          "A forecasting and maintenance planner that keeps Semnan's solar plant output stable despite dust accumulation.",
        category: "Renewable energy",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "PV performance" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>The platform estimates daily production and proposes optimal cleaning windows by combining irradiance models, weather forecasts and soiling sensors. Operations teams can plan maintenance without sacrificing energy delivery commitments.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Dust accumulation that quickly degrades photovoltaic performance.</li>
  <li>Balancing cleaning costs with available O&amp;M crews.</li>
  <li>Providing transparent production outlooks to investors and grid partners.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Model solar irradiance, shading and historical output trends.</li>
  <li>Estimate soiling ratios from sensor readings and inverter data.</li>
  <li>Generate cleaning schedules with projected energy uplift.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Rolling weekly and daily energy forecasts.</li>
  <li>Maintenance calendars with quantified impact per action.</li>
  <li>Web dashboards archiving performance and interventions.</li>
</ul>
        `
      }
    }
  },
  {
    id: 6,
    slug: "wildfire-early-warning-abr",
    cover: "/images/projects/wildfire-early-warning-abr/cover.svg",
    gallery: [
      {
        src: "/images/projects/wildfire-early-warning-abr/cover.svg",
        alt: {
          fa: "نقشه خطر حریق در جنگل ابر",
          en: "Wildfire risk map for Abr forest"
        },
        caption: {
          fa: "پایش سوخت، باد و هشدار به یگان حفاظت",
          en: "Monitoring fuel, wind and dispatching alerts"
        }
      }
    ],
    locales: {
      fa: {
        title: "هشدار زودهنگام حریق جنگل ابر",
        summary:
          "مدل ریسک حریق که با تحلیل داده اقلیمی، تصاویر ماهواره‌ای و گزارش میدانی یگان حفاظت استان سمنان، هشدار عملیاتی صادر می‌کند.",
        category: "محیط زیست",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "پایش حریق" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>جنگل ابر به‌دلیل شرایط اقلیمی متغیر نیازمند هشدار سریع است. این سامانه داده‌های سوخت، باد و رطوبت را یکپارچه می‌کند تا یگان حفاظت استان بتواند پیش از گسترش حریق وارد عمل شود.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>تغییرات شدید رطوبت و باد که تشخیص خطر را دشوار می‌کند.</li>
  <li>پراکندگی گزارش‌های میدانی و عدم ثبت ساختارمند.</li>
  <li>نیاز به هماهنگی با مدیریت بحران استان.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>پایش پیوسته شاخص‌های سوخت و وضعیت پوشش گیاهی با سنجش از دور.</li>
  <li>اتصال سامانه به داده ایستگاه‌های هواشناسی و حسگرهای محلی.</li>
  <li>تعریف سطح هشدار و ارسال اعلان از طریق پنل وب و پیامک.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>نقشه ریسک به تفکیک ناحیه و بازه زمانی.</li>
  <li>گزارش روزانه برای مدیریت بحران و استانداری.</li>
  <li>کتابچه عملیات استاندارد برای تیم‌های میدانی.</li>
</ul>
        `
      },
      en: {
        title: "Abr forest wildfire early warning",
        summary:
          "A risk model for Semnan's Abr forest that blends fuel conditions, weather and ranger reports to trigger early interventions.",
        category: "Environmental intelligence",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Wildfire readiness" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>The Abr forest faces rapid shifts in humidity and wind. Our early-warning stack consolidates fuel moisture, forecast data and ranger observations so Semnan's protection unit can mobilise before ignition becomes a large-scale fire.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Volatile microclimates that complicate fire risk estimation.</li>
  <li>Unstructured incident notes from patrol teams.</li>
  <li>The need for coordinated alerts to provincial crisis management.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Monitor vegetation and fuel indices through remote sensing.</li>
  <li>Ingest station data and local sensors for high-frequency updates.</li>
  <li>Configure alert levels delivered via dashboards and SMS.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Risk maps segmented by zone and time horizon.</li>
  <li>Daily intelligence briefs for crisis managers.</li>
  <li>Standard operating procedures for field deployment.</li>
</ul>
        `
      }
    }
  },
  {
    id: 7,
    slug: "insar-subsidence-monitoring",
    cover: "/images/projects/insar-subsidence-monitoring/cover.svg",
    gallery: [
      {
        src: "/images/projects/insar-subsidence-monitoring/cover.svg",
        alt: {
          fa: "نقشه فرونشست با داده اینسار",
          en: "InSAR-derived subsidence map"
        },
        caption: {
          fa: "پایش فرونشست دشت سمنان با تحلیل راداری",
          en: "Monitoring Semnan plain subsidence using radar analytics"
        }
      }
    ],
    locales: {
      fa: {
        title: "پایش فرونشست با InSAR",
        summary:
          "سامانه‌ای برای پایش فرونشست زمین در دشت سمنان با استفاده از تصاویر راداری و هم‌پوشانی داده‌های میدانی.",
        category: "ژئوماتیک",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "پایش فرونشست" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>فرونشست زمین تهدیدی برای زیرساخت و سکونتگاه‌های استان سمنان است. این پروژه با پردازش داده‌های InSAR، نرخ تغییر سطح زمین را استخراج و به زبان مدیریتی گزارش می‌کند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>فقدان داده منظم برای تصمیم درباره محدودیت برداشت آب.</li>
  <li>ریسک برای زیرساخت‌های جاده‌ای، خطوط انتقال و ساختمان‌ها.</li>
  <li>نیاز به مستندسازی جهت مکاتبات حاکمیتی و قضایی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>دریافت و پردازش تصاویر راداری Sentinel-1 در بازه‌های ماهانه.</li>
  <li>هم‌پوشانی نتایج با داده GPS و مشاهدات میدانی.</li>
  <li>تهیه نقشه و گزارش تحلیلی برای مناطق بحرانی.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>نقشه تعاملی سرعت فرونشست و ترند زمانی.</li>
  <li>گزارش مدیریتی برای کمیته آب‌های زیرزمینی.</li>
  <li>پیشنهاد پایش تکمیلی و نقاط نصب حسگر زمینی.</li>
</ul>
        `
      },
      en: {
        title: "InSAR subsidence monitoring",
        summary:
          "A radar-based monitoring workflow that quantifies land subsidence across the Semnan plain and aligns it with ground truth observations.",
        category: "Geospatial analytics",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Land subsidence" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Land subsidence threatens infrastructure and communities in Semnan. Our programme processes Sentinel-1 radar stacks to measure ground deformation and translates the results into actionable reports for provincial committees.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Lack of frequent, reliable deformation measurements.</li>
  <li>Exposure of roads, transmission lines and urban assets to gradual sinkage.</li>
  <li>The need to document evidence for regulatory coordination.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Ingest monthly Sentinel-1 scenes and perform time-series InSAR processing.</li>
  <li>Cross-validate displacements with GPS and field surveys.</li>
  <li>Publish hotspot maps and commentary for decision-makers.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Interactive deformation layers with temporal trends.</li>
  <li>Briefings for the groundwater task force.</li>
  <li>Recommendations on where to expand ground instrumentation.</li>
</ul>
        `
      }
    }
  },
  {
    id: 8,
    slug: "dust-aqi-nowcast-hvac",
    cover: "/images/projects/dust-aqi-nowcast-hvac/cover.svg",
    gallery: [
      {
        src: "/images/projects/dust-aqi-nowcast-hvac/cover.svg",
        alt: {
          fa: "پیش‌بینی شاخص آلودگی هوا",
          en: "Air quality index forecast"
        },
        caption: {
          fa: "پیش‌آگاهی طوفان گرد و غبار برای مدیریت تهویه",
          en: "Dust storm nowcast to manage HVAC operations"
        }
      }
    ],
    locales: {
      fa: {
        title: "پیش‌آگاهی گرد و غبار و مدیریت تهویه",
        summary:
          "سامانه‌ای برای پیش‌بینی کوتاه‌مدت گرد و غبار و تنظیم راهبری HVAC در مراکز حساس استان سمنان.",
        category: "محیط زیست و سلامت",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "پایش هوا" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>سمنان در معرض رخداد طوفان‌های گرد و غبار است. این سامانه با استفاده از مدل‌های هواشناسی و داده سنسورهای محلی، به مراکز درمانی و صنعتی کمک می‌کند تجهیزات تهویه را پیش از وقوع طوفان تنظیم کنند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>غافلگیری مراکز حساس و ورود گرد و غبار به فضاهای کنترل‌شده.</li>
  <li>هزینه نگهداشت فیلترها و نیاز به برنامه‌ریزی دقیق.</li>
  <li>نیاز به اطلاع‌رسانی سریع برای کارکنان و شهروندان.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>ترکیب مدل WRF با داده ایستگاه‌های سنجش کیفی هوا.</li>
  <li>محاسبه سناریوهای ۶ تا ۲۴ ساعت آینده و میزان ورود ذرات.</li>
  <li>ارسال هشدار و چک‌لیست اقدام برای تیم‌های تاسیسات.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد پیش‌آگاهی با نقشه و نمودار زمانی.</li>
  <li>هشدار پیامکی و ایمیلی با سطح شدت و توصیه اقدام.</li>
  <li>گزارش پس از رخداد برای ارزیابی عملکرد تهویه.</li>
</ul>
        `
      },
      en: {
        title: "Dust nowcast & HVAC readiness",
        summary:
          "Short-term dust forecasting that helps Semnan's critical facilities prepare ventilation systems ahead of events.",
        category: "Environmental resilience",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Air quality" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Frequent dust storms challenge Semnan's hospitals and industrial sites. The nowcast service blends mesoscale forecasts with sensor feeds so facility teams can reconfigure HVAC assets before particle loads spike.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Unexpected ingress of dust into controlled environments.</li>
  <li>Filter maintenance costs when events are not anticipated.</li>
  <li>Timely communication to staff and the public.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Combine WRF outputs with local air-quality sensors.</li>
  <li>Project particle concentrations 6–24 hours ahead.</li>
  <li>Issue actionable alerts and HVAC checklists.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Dashboards with maps and timeline visualisations.</li>
  <li>SMS and email notifications graded by severity.</li>
  <li>After-action reports benchmarking ventilation response.</li>
</ul>
        `
      }
    }
  },
  {
    id: 9,
    slug: "uas-predictive-maintenance",
    cover: "/images/projects/uas-predictive-maintenance/cover.svg",
    gallery: [
      {
        src: "/images/projects/uas-predictive-maintenance/cover.svg",
        alt: {
          fa: "داشبورد سلامت پهپاد عملیاتی",
          en: "Operational drone health dashboard"
        },
        caption: {
          fa: "تحلیل پرواز و نگهداشت ناوگان پهپاد",
          en: "Flight analytics and maintenance planning for drones"
        }
      }
    ],
    locales: {
      fa: {
        title: "نگهداشت پیشگویانه ناوگان پهپاد",
        summary:
          "پلتفرمی برای تحلیل داده پرواز، باتری و قطعات پهپادهای عملیاتی که به تیم‌های سمنان برای برنامه‌ریزی تعمیر کمک می‌کند.",
        category: "هوافضا و بازرسی",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "نگهداشت تجهیزات" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>پهپادهای بازرسی خطوط و تاسیسات برای مأموریت‌های سمنان به قابلیت اطمینان بالا نیاز دارند. این سامانه با تحلیل ثبت پرواز، لرزش و دمای قطعات، تعمیرات پیشگیرانه را پیشنهاد می‌کند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>خرابی ناگهانی باتری و موتور در عملیات حساس.</li>
  <li>عدم وجود تصویر یکپارچه از سلامت ناوگان.</li>
  <li>نیاز به مستندسازی برای رعایت استانداردهای ایمنی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>جمع‌آوری داده تله‌متری از کنترلر و حسگرهای جانبی.</li>
  <li>مدل‌سازی چرخه عمر قطعات و تحلیل روند فرسایش.</li>
  <li>تولید تیکت نگهداشت و زمان‌بندی تعمیر.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد سلامت ناوگان با هشدار سطح‌بندی شده.</li>
  <li>گزارش بهره‌برداری برای مدیر فنی و ایمنی پرواز.</li>
  <li>کتابچه فرآیند نگهداشت پیشگیرانه.</li>
</ul>
        `
      },
      en: {
        title: "UAS predictive maintenance",
        summary:
          "A fleet health platform that analyses flight logs, vibration and battery data to schedule preventative maintenance for Semnan's drone missions.",
        category: "Aerial inspection",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Asset reliability" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Drones inspecting utilities and infrastructure need consistent readiness. The platform ingests telemetry, vibration and temperature signals to forecast component fatigue and recommend proactive interventions.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Unexpected battery or motor failures mid-mission.</li>
  <li>No unified view of fleet health across missions.</li>
  <li>Compliance obligations for flight safety audits.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Capture telemetry from flight controllers and auxiliary sensors.</li>
  <li>Model component life and detect anomalous degradation trends.</li>
  <li>Create maintenance tickets with recommended timelines.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Fleet health dashboards with tiered alerts.</li>
  <li>Operational reports for technical and safety leads.</li>
  <li>Preventive maintenance playbooks.</li>
</ul>
        `
      }
    }
  },
  {
    id: 10,
    slug: "pavement-railway-iri-boq",
    cover: "/images/projects/pavement-railway-iri-boq/cover.svg",
    gallery: [
      {
        src: "/images/projects/pavement-railway-iri-boq/cover.svg",
        alt: {
          fa: "تحلیل وضعیت روسازی و خطوط ریلی",
          en: "Condition analysis for pavement and rail"
        },
        caption: {
          fa: "شاخص ناهمواری و برآورد هزینه نگهداشت",
          en: "IRI scoring with maintenance cost estimates"
        }
      }
    ],
    locales: {
      fa: {
        title: "ارزیابی روسازی و خطوط ریلی",
        summary:
          "تحلیل داده شتاب‌سنج و تصویر برای سنجش ناهمواری، ترک و هزینه نگهداشت راه و ریل در استان سمنان.",
        category: "زیرساخت حمل‌ونقل",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "نگهداشت راه" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>زیرساخت‌های جاده و ریلی استان سمنان برای سرویس‌دهی ایمن نیازمند پایش مستمر هستند. این سامانه با داده‌های شتاب‌سنج، تصویر و بازدید میدانی، شاخص ناهمواری و هزینه تعمیر را محاسبه می‌کند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>نیاز به برنامه‌ریزی نگهداشت پیشگیرانه برای مسیرهای پرتردد.</li>
  <li>عدم یکپارچگی داده‌های پیمایش میدانی و گزارش پیمانکاران.</li>
  <li>ضرورت دفاع از بودجه در جلسات استانی و ملی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>نصب سنسور بر روی خودروهای پیمایش و جمع‌آوری داده شتاب.</li>
  <li>تحلیل ویدئو برای شناسایی ترک و آسیب ساختاری.</li>
  <li>تخمین هزینه بازسازی و اولویت‌بندی پروژه‌ها.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>نقشه ناهمواری و لایه GIS برای تصمیم‌سازان.</li>
  <li>گزارش BOQ و برآورد هزینه برای هر مقطع.</li>
  <li>داشبورد پیگیری اجرای پروژه و وضعیت قرارداد.</li>
</ul>
        `
      },
      en: {
        title: "Pavement & rail condition analytics",
        summary:
          "A combined accelerometer and imagery workflow that quantifies IRI, defects and maintenance budgets for Semnan's transport corridors.",
        category: "Transport infrastructure",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Maintenance planning" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Semnan's roads and rail lines require proactive maintenance. The analytics stack merges vehicle-based accelerometer feeds, imagery and field inspections to derive IRI scores and repair cost estimates.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Prioritising preventative maintenance on busy corridors.</li>
  <li>Disparate datasets from inspectors and contractors.</li>
  <li>Evidence needed to justify budgets to provincial and national bodies.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Equip survey vehicles with sensors to capture ride quality.</li>
  <li>Process video frames to locate cracks and structural issues.</li>
  <li>Estimate rehabilitation costs and rank projects.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>GIS layers and dashboards showing condition trends.</li>
  <li>Bill-of-quantity reports per section.</li>
  <li>Implementation tracker aligned with contract milestones.</li>
</ul>
        `
      }
    }
  },
  {
    id: 11,
    slug: "retinopathy-clinical-nlp-fa",
    cover: "/images/projects/retinopathy-clinical-nlp-fa/cover.svg",
    gallery: [
      {
        src: "/images/projects/retinopathy-clinical-nlp-fa/cover.svg",
        alt: {
          fa: "داشبورد غربالگری رتینوپاتی",
          en: "Retinopathy screening dashboard"
        },
        caption: {
          fa: "ترکیب تحلیل تصویر و پرونده بالینی",
          en: "Fusing image analysis with clinical records"
        }
      }
    ],
    locales: {
      fa: {
        title: "غربالگری رتینوپاتی مبتنی بر NLP",
        summary:
          "راهکاری برای تحلیل تصاویر فوندوس و متن پرونده بالینی فارسی جهت غربالگری رتینوپاتی دیابتی در مراکز درمانی سمنان.",
        category: "سلامت دیجیتال",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "بینایی سنجی" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>با رشد بیماران دیابتی در سمنان، غربالگری رتینوپاتی نیازمند اتوماسیون است. این سامانه تصاویر شبکیه و یادداشت پزشکی فارسی را ترکیب می‌کند تا موارد پرریسک سریع‌تر معرفی شوند.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>کمبود نیروی متخصص و ازدحام لیست انتظار.</li>
  <li>متن‌های آزاد در پرونده که استخراج ریسک را دشوار می‌کند.</li>
  <li>لزوم رعایت حریم خصوصی و استقرار داخلی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>استفاده از مدل بینایی برای شناسایی ضایعات در تصاویر فوندوس.</li>
  <li>پردازش زبان طبیعی برای استخراج شاخص‌های خطر از پرونده فارسی.</li>
  <li>امتیازدهی و ایجاد داشبورد ارجاع برای پزشکان.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>سیستم غربالگری با رابط فارسی و ثبت سوابق.</li>
  <li>گزارش بالینی برای کلینیک و معاونت درمان.</li>
  <li>مستند حاکمیت داده و چارچوب حفظ حریم خصوصی.</li>
</ul>
        `
      },
      en: {
        title: "Retinopathy screening with Farsi NLP",
        summary:
          "An on-premise workflow that analyses fundus images and Persian clinical notes to triage diabetic retinopathy cases in Semnan clinics.",
        category: "Digital health",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Ophthalmology" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Diabetic populations in Semnan continue to grow. The screening platform fuses retinal imaging with Persian-language notes to flag high-risk patients and support clinicians.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Limited specialist availability and long waiting lists.</li>
  <li>Unstructured Farsi notes that hide relevant risk factors.</li>
  <li>Strict privacy requirements mandating on-prem deployment.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Apply computer vision to detect lesions in fundus images.</li>
  <li>Use NLP pipelines to extract risk indicators from clinical text.</li>
  <li>Score cases and populate referral dashboards.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Persian-language screening system with audit trails.</li>
  <li>Clinical summaries for specialists and health authorities.</li>
  <li>Data governance artefacts covering privacy and retention.</li>
</ul>
        `
      }
    }
  },
  {
    id: 12,
    slug: "civic-rag-137",
    cover: "/images/projects/civic-rag-137/cover.svg",
    gallery: [
      {
        src: "/images/projects/civic-rag-137/cover.svg",
        alt: {
          fa: "داشبورد رسیدگی به درخواست‌های مردمی",
          en: "Civic request handling dashboard"
        },
        caption: {
          fa: "جست‌وجوی هوشمند پرونده‌های سامانه ۱۳۷",
          en: "Intelligent search across municipality service cases"
        }
      }
    ],
    locales: {
      fa: {
        title: "دستیار هوشمند سامانه ۱۳۷",
        summary:
          "راهکار بازیابی اطلاعات و تولید پاسخ که اپراتورهای سامانه ۱۳۷ شهرداری سمنان را در پاسخگویی سریع یاری می‌کند.",
        category: "خدمات شهری",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "دستیار محاوره‌ای" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>سامانه تماس ۱۳۷ حجم زیادی از درخواست‌های مردمی را ثبت می‌کند. این دستیار با تکیه بر RAG فارسی، سوابق مشابه و مقررات را جمع‌بندی می‌کند تا پاسخ دقیق‌تر و سریع‌تر ارائه شود.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>یافتن پرونده مشابه در میان هزاران درخواست ثبت‌شده.</li>
  <li>هماهنگی میان اپراتور، کارشناسان و مناطق شهرداری.</li>
  <li>نیاز به مستندسازی پاسخ و کاهش اتکا به حافظه فردی.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>استخراج دانش از آرشیو مکاتبات، مصوبات و پاسخ‌های تاریخی.</li>
  <li>پیاده‌سازی زنجیره بازیابی-تولید با مدل زبانی فارسی.</li>
  <li>ارائه پیشنهاد پاسخ و ثبت تعامل برای ارزیابی کیفیت.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>پنل اپراتور با جست‌وجوی معنایی و پیشنهاد متن.</li>
  <li>داشبورد نظارت برای معاونت خدمات شهری.</li>
  <li>گزارش دوره‌ای از کیفیت پاسخ و زمان رسیدگی.</li>
</ul>
        `
      },
      en: {
        title: "Civic RAG assistant for 137 hotline",
        summary:
          "A retrieval-augmented assistant that helps Semnan's municipal hotline operators answer citizen requests with consistent guidance.",
        category: "Civic services",
        badges: [
          { label: "Status", value: "Operational pilot" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "Conversational AI" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Semnan's 137 hotline receives thousands of civic service cases. The assistant uses a Persian RAG pipeline to retrieve precedents, regulations and recommended steps so operators respond quickly and consistently.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Locating similar cases across a large historical archive.</li>
  <li>Aligning operators, experts and district offices.</li>
  <li>Documenting answers instead of relying on personal memory.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Index legacy correspondence, approvals and resolution notes.</li>
  <li>Build a retrieval-augmented generation workflow tuned for Persian.</li>
  <li>Surface suggested responses while logging interactions.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Operator console with semantic search and drafted replies.</li>
  <li>Supervisory dashboards for municipal leadership.</li>
  <li>Quality reports covering response accuracy and handling time.</li>
</ul>
        `
      }
    }
  },
  {
    id: 13,
    slug: "lite-soc-ot-security",
    cover: "/images/projects/lite-soc-ot-security/cover.svg",
    gallery: [
      {
        src: "/images/projects/lite-soc-ot-security/cover.svg",
        alt: {
          fa: "مرکز عملیات امنیت OT",
          en: "OT security operations centre"
        },
        caption: {
          fa: "پایش شبکه صنعتی و تولید هشدار",
          en: "Monitoring industrial networks with actionable alerts"
        }
      }
    ],
    locales: {
      fa: {
        title: "SOC سبک برای شبکه‌های صنعتی",
        summary:
          "چارچوبی سبک و قابل استقرار داخلی برای پایش امنیت شبکه‌های OT در صنایع استان سمنان.",
        category: "امنیت سایبری",
        badges: [
          { label: "وضعیت", value: "پروژه در حال بهره‌برداری" },
          { label: "استان فعال", value: "سمنان" },
          { label: "حوزه تخصصی", value: "امنیت OT" }
        ],
        executiveHtml: `
<h3>خلاصه مدیریتی</h3>
<p>زیرساخت‌های صنعتی سمنان به سامانه‌ای نیاز دارند که بدون وابستگی به سرویس ابری، تهدیدات سایبری را پایش کند. SOC سبک ویستا لاگ‌های شبکه و تجهیزات را تحلیل کرده و هشدار قابل اقدام ارائه می‌دهد.</p>
<h3>مسئله اصلی</h3>
<ul>
  <li>محدودیت اتصال به اینترنت و نیاز به استقرار کاملاً داخلی.</li>
  <li>کمبود تیم امنیتی بزرگ و نیاز به خودکارسازی.</li>
  <li>حفاظت از فرآیندهای حساس تولید و توزیع.</li>
</ul>
<h3>رویکرد اجرا</h3>
<ul>
  <li>پیاده‌سازی ماژول جمع‌آوری لاگ و ترافیک در شبکه OT.</li>
  <li>تحلیل رفتار ناهنجار با قوانین و مدل یادگیری ماشین.</li>
  <li>تعریف روال پاسخ و داشبورد وضعیت برای مدیران.</li>
</ul>
<h3>خروجی‌های تحویلی</h3>
<ul>
  <li>داشبورد SOC با دید کلی و هشدارهای اولویت‌بندی شده.</li>
  <li>کتابچه عملیات پاسخ‌گویی و تمرین‌های دوره‌ای.</li>
  <li>گزارش انطباق برای ممیزی‌های داخلی و حاکمیتی.</li>
</ul>
        `
      },
      en: {
        title: "Lightweight SOC for OT networks",
        summary:
          "An on-prem security operations framework tailored to the industrial OT environments operating across Semnan.",
        category: "Cybersecurity",
        badges: [
          { label: "Status", value: "Operational programme" },
          { label: "Province", value: "Semnan" },
          { label: "Focus", value: "OT security" }
        ],
        executiveHtml: `
<h3>Executive summary</h3>
<p>Semnan's industrial operators need cyber monitoring that works fully on-premises. The lightweight SOC ingests logs and network telemetry from OT assets, correlates anomalies and produces actionable alerts.</p>
<h3>Challenges addressed</h3>
<ul>
  <li>Restricted connectivity and the requirement for self-hosted tooling.</li>
  <li>Lean security teams who require automation.</li>
  <li>Protecting sensitive production and distribution processes.</li>
</ul>
<h3>Delivery approach</h3>
<ul>
  <li>Deploy collectors across OT segments to capture logs and traffic.</li>
  <li>Apply behavioural analytics and rule-based detection tuned for OT.</li>
  <li>Define response workflows and executive dashboards.</li>
</ul>
<h3>Delivered outcomes</h3>
<ul>
  <li>Prioritised alerting and situational awareness dashboards.</li>
  <li>Runbooks and tabletop exercises for response teams.</li>
  <li>Compliance-ready reporting for internal and governmental audits.</li>
</ul>
        `
      }
    }
  }
];

export default projects;
