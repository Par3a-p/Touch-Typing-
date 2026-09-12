(() => {
  // data/lessons/fa.js
  var FA_LESSONS = [
    {
      id: "fa-01-home-intro",
      title: "جایگاه انگشتان روی ردیف خانه",
      desc: "انگشتان را روی ردیف خانه قرار دهید: ش س ی ب ل ا ت ن م ک گ. برجستگی‌های ب و ت را حس کنید.",
      type: "intro",
      chars: "شسیبلاتنمکگ",
      minWpm: 0,
      minAccuracy: 0
    },
    {
      id: "fa-02-home-left",
      title: "کلیدهای چپ ردیف خانه",
      desc: "تمرین ش، س، ی، ب، ل با دست چپ. انگشتان را خمیده و راحت نگه دارید.",
      type: "chars",
      chars: "شسیبل",
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "fa-03-home-right",
      title: "کلیدهای راست ردیف خانه",
      desc: "تمرین ا، ت، ن، م، ک، گ با دست راست. انگشت اشاره روی ت می‌ماند.",
      type: "chars",
      chars: "اتنمکگ",
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "fa-04-home-full",
      title: "کل ردیف خانه",
      desc: "هر دو دست را روی کل ردیف خانه ترکیب کنید، بدون نگاه کردن به صفحه‌کلید.",
      type: "chars",
      chars: "شسیبلاتنمکگ",
      minWpm: 10,
      minAccuracy: 92
    },
    {
      id: "fa-05-home-words",
      title: "کلمات ردیف خانه",
      desc: "کلمات کوتاهی که فقط با حروف ردیف خانه ساخته می‌شوند.",
      type: "words",
      chars: "شسیبلاتنمکگ",
      words: ["بسی", "کل", "ملل", "تمک", "نبک", "سک", "لب", "تل", "کش", "مش", "کب", "نبش", "سنب", "بسک", "تلنگ", "کمل", "نبش", "مسک"],
      minWpm: 12,
      minAccuracy: 92
    },
    {
      id: "fa-06-top-intro",
      title: "ردیف بالا",
      desc: "به ض ص ث ق ف غ ع ه خ ح ج چ برسید و انگشتان را به خانه برگردانید.",
      type: "chars",
      chars: "ضصثقفغعهخحجچ",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "fa-07-top-home",
      title: "ردیف بالا + خانه",
      desc: "حروف ردیف بالا را با پایه‌ی ردیف خانه ترکیب کنید.",
      type: "chars",
      chars: "شسیبلاتنمکگضصثقفغعهخحجچ",
      minWpm: 12,
      minAccuracy: 90
    },
    {
      id: "fa-08-top-words",
      title: "کلمات ردیف بالا",
      desc: "تمرین کلمات پرتکرار با حروف ردیف بالا و خانه.",
      type: "words",
      chars: "شسیبلاتنمکگضصثقفغعهخحجچ",
      words: ["سلام", "کتاب", "خانه", "حکمت", "عشق", "فهم", "حقیقت", "تقدیر", "تقدیم", "شمع", "چشم", "جمله", "خوش", "خلق", "تخفیف", "زخم", "عاقبت", "حکیم"],
      minWpm: 14,
      minAccuracy: 92
    },
    {
      id: "fa-09-bottom-intro",
      title: "ردیف پایین",
      desc: "به ظ ط ز ر ذ د پ و . / برسید. مچ‌ها را شناور نگه دارید.",
      type: "chars",
      chars: "ظطزرذدپو./",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "fa-10-all-rows",
      title: "هر سه ردیف",
      desc: "آزادانه روی ردیف‌های حروف تایپ کنید. اول دقت، بعد سرعت.",
      type: "chars",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو./",
      minWpm: 14,
      minAccuracy: 92
    },
    {
      id: "fa-11-all-words",
      title: "کلمات رایج فارسی",
      desc: "کلمات پرتکرار با الفبای کامل.",
      type: "words",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ",
      words: ["و", "در", "به", "که", "این", "را", "با", "است", "برای", "آن", "یک", "خود", "تا", "کرد", "بر", "هم", "نیز", "گفت", "می", "شود", "بود", "داشت", "از", "اما", "دو", "یا", "پس", "اگر", "همه", "باید", "های", "من", "ما", "آنها", "می‌شود", "باید", "کنند", "شد", "هست", "نبود", "حالا", "روز", "شب", "خوب", "بد", "بزرگ", "کوچک", "نوشتن", "خواندن"],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "fa-12-numbers",
      title: "ردیف اعداد",
      desc: "تمرین ارقام ۱ تا ۰ (یا 1 تا 0).",
      type: "chars",
      chars: "1234567890",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "fa-13-symbols",
      title: "علائم نگارشی",
      desc: "علائم رایج فارسی: ، ؟ ؛ . « » ٪",
      type: "chars",
      chars: "،؟؛.«»٪-/()",
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "fa-14-sentences",
      title: "جملات کوتاه",
      desc: "جمله‌های کامل با فاصله و علائم نگارشی تایپ کنید.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟",
      sentences: [
        "تایپ ده انگشتی یک مهارت ارزشمند است.",
        "تمرین روزانه سرعت و دقت شما را بالا می‌برد.",
        "به صفحه‌کلید نگاه نکنید، به متن نگاه کنید.",
        "انگشتان شما جای هر کلید را یاد می‌گیرند.",
        "آرام شروع کنید و به‌تدریج سریع‌تر شوید."
      ],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "fa-15-paragraphs",
      title: "تمرین پاراگراف",
      desc: "متن‌های بلندتر که تمام مهارت‌های آموخته‌شده را ترکیب می‌کنند.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟0123456789",
      sentences: [
        "تایپ ده انگشتی یعنی تایپ کردن بدون نگاه کردن به صفحه‌کلید. با تمرین مداوم، انگشتان شما جای هر کلید را حفظ می‌کنند و سرعت‌تان به‌طور پیوسته افزایش می‌یابد.",
        "حالت بدن مهم است. صاف بنشینید، مچ‌ها را شناور نگه دارید و فقط نوک انگشتان را روی ردیف خانه قرار دهید. همیشه اول دقت و بعد سرعت را در اولویت بگذارید.",
        "هر تایپیست حرفه‌ای روزی با ضربه‌های آرام و دقیق شروع کرده است. به فرایند اعتماد کنید، هر روز کمی تمرین کنید و بگذارید حافظه‌ی عضلانی شکل بگیرد."
      ],
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "fa-16-free",
      title: "تسلط بر کل صفحه‌کلید",
      desc: "تایپ نهایی آزاد با حروف، اعداد و علائم.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟0123456789«»؛٪-/",
      sentences: [
        "در سال ۱۴۰۳، بسیاری از کارکنان دانش‌محور گفتند سرعت تایپ بر بهره‌وری روزانه‌شان اثر مستقیم دارد.",
        "تمرین کنید: پنج دقیقه تایمر بگذارید، پاراگرافی که دوست دارید تایپ کنید و سرعت و دقت خود را یادداشت کنید. فردا با امروز مقایسه کنید.",
        "بهترین چیدمان‌ها جابه‌جایی انگشتان را کم می‌کنند؛ چیدمان استاندارد فارسی برای تایپ راحت زبان فارسی طراحی شده و یادگیری آن ارزش زمان‌تان را دارد."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "fa-17-home-drill",
      title: "تمرین متمرکز ردیف خانه",
      desc: "دوباره روی ردیف خانه تمرکز کن تا حافظه عضلانی تثبیت شود.",
      type: "chars",
      chars: "شسیبلاتنمکگ",
      minWpm: 22,
      minAccuracy: 96
    },
    {
      id: "fa-18-common-words",
      title: "کلمات بسیار پرتکرار",
      desc: "پرکاربردترین کلمات زبان فارسی را روان تایپ کن.",
      type: "words",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو",
      words: ["و", "در", "به", "که", "این", "را", "با", "است", "برای", "آن", "یک", "خود", "تا", "کرد", "بر", "هم", "نیز", "گفت", "می", "شود", "بود", "از", "اما", "اگر", "همه", "باید", "من", "ما", "شد", "هست", "روز", "خوب", "بزرگ", "کتاب", "خانه", "کار"],
      minWpm: 22,
      minAccuracy: 95
    },
    {
      id: "fa-19-letters-a",
      title: "ترکیب حروف چپ",
      desc: "تمرین گروه‌های سمت چپ صفحه‌کلید با دقت بالا.",
      type: "chars",
      chars: "ضصثقفغشسیبلظطزرذ",
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "fa-20-letters-b",
      title: "ترکیب حروف راست",
      desc: "تمرین گروه‌های سمت راست صفحه‌کلید.",
      type: "chars",
      chars: "عهخحجچاتنمکگدپو",
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "fa-21-words-mix",
      title: "کلمات ترکیبی",
      desc: "کلماتی که حروف هر سه ردیف را درگیر می‌کنند.",
      type: "words",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو",
      words: ["انسان", "کتابخانه", "دانشگاه", "برنامه", "کامپیوتر", "اینترنت", "تمرین", "سرعت", "دقت", "صفحه‌کلید", "نوشتن", "خواندن", "زندگی", "دوستی", "امیدوار", "کوشش", "موفقیت", "پیشرفت", "حرفه‌ای", "تمرکز"],
      minWpm: 20,
      minAccuracy: 94
    },
    {
      id: "fa-22-numbers-words",
      title: "اعداد در جمله",
      desc: "ترکیب اعداد و حروف در جمله‌های واقعی.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو0123456789. ،",
      sentences: [
        "سال ۱۴۰۳ سال خوبی بود.",
        "۲۵ درصد از وقت را صرف تمرین کن.",
        "ساعت ۸ صبح بهترین زمان برای تمرین است.",
        "۱۰ دقیقه در روز کافی است.",
        "۳ ستاره از ۳ ستاره هدف ماست."
      ],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "fa-23-punct-heavy",
      title: "جمله‌های نگارشی",
      desc: "تمرین علائم نگارشی در جریان جمله.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟؛«»",
      sentences: [
        "آیا تمرین امروز را انجام دادی؟",
        "او گفت: «تمرین، کلید موفقیت است.»",
        "دقت، سرعت؛ سرعت، دقت — هر دو مهم‌اند.",
        "نه عجله کن، نه تنبلی؛ فقط ادامه بده.",
        "بهتر است آرام شروع کنی، اما پیوسته ادامه دهی."
      ],
      minWpm: 16,
      minAccuracy: 94
    },
    {
      id: "fa-24-paragraph-1",
      title: "پاراگراف: مهارت",
      desc: "پاراگراف کامل با ترکیب مهارت‌ها.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟",
      sentences: [
        "مهارت تایپ ده انگشتی مانند هر مهارت دیگری با تمرین منظم به دست می‌آید. ابتدا دقت را فدای سرعت نکنید و بگذارید حافظه عضلانی شکل بگیرد.",
        "یک تایپیست خوب به صفحه‌کلید نگاه نمی‌کند؛ چشمان او روی متن است و انگشتانش جای هر کلید را می‌دانند."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "fa-25-paragraph-2",
      title: "پاراگراف: حالت بدن",
      desc: "تمرین متن آموزشی درباره ارگونومی تایپ.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،",
      sentences: [
        "صاف بنشینید، شانه‌ها را رها کنید و مچ دست‌ها را شناور نگه دارید. آرنج‌ها زاویه تقریباً ۹۰ درجه داشته باشند و نوک انگشتان روی ردیف خانه بماند.",
        "هر ۲۰ دقیقه چند ثانیه به دور نگاه کنید و دست‌ها را تکان دهید. خستگی چشم و دست باعث افت دقت می‌شود."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "fa-26-speed-push",
      title: "افزایش سرعت",
      desc: "جمله‌های کوتاه و روان برای هل دادن سرعت.",
      type: "words",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو",
      words: ["سریع", "روان", "دقیق", "تمرین", "روز", "شب", "خوب", "بهتر", "سرعت", "دقت", "کار", "تلاش", "امید", "راه", "هدف", "پیروزی", "شروع", "پایان", "ادامه", "موفق"],
      minWpm: 28,
      minAccuracy: 92
    },
    {
      id: "fa-27-accuracy-push",
      title: "تمرکز بر دقت",
      desc: "متن نسبتاً بلند با آستانه دقت سخت‌گیرانه.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟",
      sentences: [
        "دقت مهم‌تر از سرعت است. اگر سریع تایپ کنی اما پر از خطا باشی، وقت زیادی را صرف اصلاح می‌کنی. پس آرام و دقیق باش.",
        "هر اشتباه یک بازخورد است؛ نشان می‌دهد کدام انگشت یا کدام کلید هنوز تثبیت نشده است."
      ],
      minWpm: 18,
      minAccuracy: 97
    },
    {
      id: "fa-28-mixed-all",
      title: "ترکیب کامل",
      desc: "حروف، اعداد و علائم در کنار هم.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟0123456789",
      sentences: [
        "در سال ۱۴۰۳، ۷۵ درصد کاربران سرعت تایپ خود را مهم دانستند.",
        "تمرین ۱۵ دقیقه‌ای روزانه، بهتر از ۲ ساعت تمرین هفتگی است.",
        "هدف: دقت ۹۵٪ و سرعت ۳۰ کلمه در دقیقه."
      ],
      minWpm: 22,
      minAccuracy: 95
    },
    {
      id: "fa-29-proverbs",
      title: "ضرب‌المثل‌ها",
      desc: "ضرب‌المثل‌های فارسی را با دقت و روانی تایپ کن.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،",
      sentences: [
        "از کوزه همان برون تراود که در اوست.",
        "کار نیکو کردن از پر کردن است.",
        "سنگ بزرگ، نشانه نزدن است.",
        "آهسته آهسته، مورچه به لانه می‌رسد.",
        "یک دست صدا ندارد."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "fa-30-master",
      title: "استادی نهایی",
      desc: "آخرین آزمون: متن بلند، دقیق و سریع. اگر این را قبول شوی، تایپیست فارسی شده‌ای.",
      type: "sentences",
      chars: "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو. ،؟0123456789«»",
      sentences: [
        "تایپ ده انگشتی یک سرمایه‌گذاری مادام‌العمر است. هر دقیقه‌ای که برای یادگیری آن صرف می‌کنی، در تمام سال‌های کار با کامپیوتر به تو بازمی‌گردد. پس با حوصله تمرین کن، به صفحه‌کلید نگاه نکن و به انگشتانت اعتماد کن.",
        "حرفه‌ای‌ها تفاوت‌های کوچک را جدی می‌گیرند: حالت دست، ریتم تنفس، فاصله نشستن و حتی نور اتاق. همه این‌ها روی دقت و سرعت اثر می‌گذارند.",
        "امروز را با یک هدف کوچک شروع کن: ده دقیقه تمرین متمرکز. فردا همین کار را تکرار کن. پس از یک ماه، از پیشرفت خودت شگفت‌زده خواهی شد."
      ],
      minWpm: 25,
      minAccuracy: 96
    }
  ];

  // data/lessons/en.js
  var EN_LESSONS = [
    {
      id: "en-01-home-intro",
      title: "Home Row Position",
      desc: "Place your fingers on the home row: A S D F and J K L ;. Feel the bumps on F and J.",
      type: "intro",
      chars: "asdfjkl;",
      minWpm: 0,
      minAccuracy: 0
    },
    {
      id: "en-02-home-left",
      title: "Left Home Keys",
      desc: "Practice A, S, D, F with your left hand. Keep fingers curved and relaxed.",
      type: "chars",
      chars: "asdf",
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "en-03-home-right",
      title: "Right Home Keys",
      desc: "Practice J, K, L, ; with your right hand. Index rests on J.",
      type: "chars",
      chars: "jkl;",
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "en-04-home-full",
      title: "Full Home Row",
      desc: "Combine both hands on the full home row without looking down.",
      type: "chars",
      chars: "asdfjkl;",
      minWpm: 10,
      minAccuracy: 92
    },
    {
      id: "en-05-home-words",
      title: "Home Row Words",
      desc: "Type short words that only use home-row letters.",
      type: "words",
      chars: "asdfjkl;",
      words: ["as", "ad", "ask", "sad", "dad", "lad", "flask", "half", "gaff", "hall", "fall", "dash", "flash", "salad", "gala", "flask"],
      minWpm: 12,
      minAccuracy: 92
    },
    {
      id: "en-06-top-intro",
      title: "Top Row Reach",
      desc: "Reach up to Q W E R T Y U I O P from the home row. Return fingers home each time.",
      type: "chars",
      chars: "qwertyuiop",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "en-07-top-home",
      title: "Top + Home",
      desc: "Mix top-row letters with your home-row foundation.",
      type: "chars",
      chars: "asdfghjklqwertyuiop",
      minWpm: 12,
      minAccuracy: 90
    },
    {
      id: "en-08-top-words",
      title: "Top Row Words",
      desc: "Practice common words using the top and home rows.",
      type: "words",
      chars: "asdfghjklqwertyuiop",
      words: ["type", "quiet", "power", "write", "pretty", "tower", "outer", "query", "weird", "title", "super", "party", "hello", "world", "type", "writer", "pretty", "powerful"],
      minWpm: 14,
      minAccuracy: 92
    },
    {
      id: "en-09-bottom-intro",
      title: "Bottom Row Reach",
      desc: "Reach down to Z X C V B N M , . /. Keep wrists floating, not resting.",
      type: "chars",
      chars: "zxcvbnm,./",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "en-10-all-rows",
      title: "All Three Rows",
      desc: "Type freely across the letter rows. Accuracy first, then speed.",
      type: "chars",
      chars: "abcdefghijklmnopqrstuvwxyz,./",
      minWpm: 14,
      minAccuracy: 92
    },
    {
      id: "en-11-all-words",
      title: "Common English Words",
      desc: "High-frequency words with the full alphabet.",
      type: "words",
      chars: "abcdefghijklmnopqrstuvwxyz ,./",
      words: ["the", "and", "for", "you", "are", "with", "this", "that", "have", "from", "they", "will", "what", "when", "make", "like", "time", "just", "know", "take", "year", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want"],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "en-12-numbers",
      title: "Number Row",
      desc: "Practice digits 1–0. Keep left fingers on home while pinky and others reach up.",
      type: "chars",
      chars: "1234567890",
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "en-13-shift",
      title: "Shift & Capitals",
      desc: "Hold Shift with the opposite pinky to type capitals A–Z.",
      type: "chars",
      chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      caseSensitive: true,
      minWpm: 10,
      minAccuracy: 90
    },
    {
      id: "en-14-punctuation",
      title: "Punctuation Marks",
      desc: `Common marks: , . ; : ' " ! ? ( ) - `,
      type: "chars",
      chars: `.,;:'"!?()-`,
      minWpm: 8,
      minAccuracy: 90
    },
    {
      id: "en-15-sentences",
      title: "Short Sentences",
      desc: "Type complete sentences with spaces and punctuation.",
      type: "sentences",
      chars: "abcdefghijklmnopqrstuvwxyz .,'",
      sentences: [
        "The quick brown fox jumps over the lazy dog.",
        "She sells sea shells by the sea shore.",
        "Pack my box with five dozen liquor jugs.",
        "How vexingly quick daft zebras jump.",
        "A wizard quickly jinxed the gnomes before they vaporized."
      ],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "en-16-paragraphs",
      title: "Paragraph Practice",
      desc: "Longer passages that combine every skill you have learned.",
      type: "sentences",
      chars: `abcdefghijklmnopqrstuvwxyz .,'"!?0123456789`,
      sentences: [
        "Touch typing is the ability to type without looking at the keyboard. With practice, your fingers learn each key and your speed grows steadily.",
        "Good posture matters. Sit up straight, keep your wrists floating, and rest only your fingertips on the home row. Accuracy should always come before speed.",
        "Every professional typist started with slow, careful keystrokes. Trust the process, practice a little every day, and the muscle memory will follow."
      ],
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "en-17-free",
      title: "Full Keyboard Mastery",
      desc: "Final free typing with letters, numbers, and punctuation.",
      type: "sentences",
      chars: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,'"!?()-_;:/`,
      sentences: [
        "In 2024, more than 60% of knowledge workers said typing speed affected their daily productivity.",
        "The best keyboard layouts minimize finger travel; QWERTY was designed for typewriters, not modern efficiency — yet it remains the global standard.",
        "Practice tip: set a timer for 5 minutes, type a paragraph you enjoy, and note your WPM and accuracy. Compare tomorrow's numbers with today's."
      ],
      caseSensitive: true,
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "en-18-home-drill",
      title: "Home Row Refresher",
      desc: "Re-anchor on the home row for stronger muscle memory.",
      type: "chars",
      chars: "asdfghjkl;",
      minWpm: 22,
      minAccuracy: 96
    },
    {
      id: "en-19-common-words",
      title: "Most Common Words",
      desc: "Type the highest-frequency English words fluently.",
      type: "words",
      chars: "abcdefghijklmnopqrstuvwxyz",
      words: ["the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so"],
      minWpm: 22,
      minAccuracy: 95
    },
    {
      id: "en-20-letters-left",
      title: "Left-Hand Combos",
      desc: "Drill left-hand letter groups with high accuracy.",
      type: "chars",
      chars: "qwertasdfgzxcvb",
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "en-21-letters-right",
      title: "Right-Hand Combos",
      desc: "Drill right-hand letter groups.",
      type: "chars",
      chars: "yuiophjklnm",
      minWpm: 18,
      minAccuracy: 94
    },
    {
      id: "en-22-words-mix",
      title: "Mixed Letter Words",
      desc: "Words that span all three rows.",
      type: "words",
      chars: "abcdefghijklmnopqrstuvwxyz",
      words: ["keyboard", "typing", "practice", "accuracy", "speed", "finger", "lesson", "master", "journey", "improve", "quality", "focus", "rhythm", "muscle", "memory", "smooth", "steady", "powerful", "excellent", "challenge"],
      minWpm: 20,
      minAccuracy: 94
    },
    {
      id: "en-23-numbers-sent",
      title: "Numbers in Sentences",
      desc: "Mix digits with letters in real sentences.",
      type: "sentences",
      chars: "abcdefghijklmnopqrstuvwxyz0123456789. ,",
      sentences: [
        "In 2024, typing speed still matters.",
        "Practice for 10 minutes every day.",
        "Aim for 95% accuracy first.",
        "3 stars is the goal for every stage.",
        "Set a timer for 5 minutes and type."
      ],
      minWpm: 16,
      minAccuracy: 93
    },
    {
      id: "en-24-punct-sent",
      title: "Punctuation Flow",
      desc: "Punctuation inside flowing sentences.",
      type: "sentences",
      chars: `abcdefghijklmnopqrstuvwxyz. ,'"!?()-`,
      sentences: [
        "Can you type this without looking?",
        'She said, "Practice makes perfect."',
        "Accuracy first; speed follows.",
        "Don't rush — stay calm and keep going.",
        "It's better to start slow than to quit early."
      ],
      minWpm: 16,
      minAccuracy: 94
    },
    {
      id: "en-25-paragraph-1",
      title: "Paragraph: Skill",
      desc: "A full paragraph combining your skills.",
      type: "sentences",
      chars: "abcdefghijklmnopqrstuvwxyz. ,'",
      sentences: [
        "Touch typing is a skill earned through regular practice. Never sacrifice accuracy for speed at the start; let muscle memory form first, and speed will follow naturally.",
        "A good typist never looks at the keyboard. Their eyes stay on the text while their fingers know every key by feel."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "en-26-paragraph-2",
      title: "Paragraph: Posture",
      desc: "Practice ergonomics text.",
      type: "sentences",
      chars: "abcdefghijklmnopqrstuvwxyz. ,'",
      sentences: [
        "Sit up straight, relax your shoulders, and keep your wrists floating. Elbows should rest near a 90-degree angle with fingertips on the home row.",
        "Every twenty minutes, look away for a few seconds and shake out your hands. Eye and hand fatigue reduce accuracy."
      ],
      minWpm: 20,
      minAccuracy: 95
    },
    {
      id: "en-27-speed-push",
      title: "Speed Push",
      desc: "Short, punchy words to push your WPM.",
      type: "words",
      chars: "abcdefghijklmnopqrstuvwxyz",
      words: ["quick", "swift", "fast", "rapid", "swift", "flow", "rhythm", "drive", "boost", "power", "reach", "grasp", "claim", "build", "craft", "sharp", "clean", "exact", "ready", "steady"],
      minWpm: 28,
      minAccuracy: 92
    },
    {
      id: "en-28-accuracy-push",
      title: "Accuracy Focus",
      desc: "Longer text with a strict accuracy bar.",
      type: "sentences",
      chars: "abcdefghijklmnopqrstuvwxyz. ,'",
      sentences: [
        "Accuracy matters more than speed. If you type fast but make many errors, you spend more time fixing them. Stay calm and precise.",
        "Every mistake is feedback. It shows which finger or key still needs work."
      ],
      minWpm: 18,
      minAccuracy: 97
    },
    {
      id: "en-29-mixed-all",
      title: "Full Mix",
      desc: "Letters, numbers and punctuation together.",
      type: "sentences",
      chars: `abcdefghijklmnopqrstuvwxyz0123456789. ,'"!?`,
      sentences: [
        "In 2024, 75% of users said typing speed matters at work.",
        "A 15-minute daily drill beats a 2-hour weekly session.",
        "Goal: 95% accuracy and 40 words per minute."
      ],
      caseSensitive: true,
      minWpm: 22,
      minAccuracy: 95
    },
    {
      id: "en-30-master",
      title: "Final Mastery",
      desc: "Last test: long, accurate, fast. Pass this and you are a true typist.",
      type: "sentences",
      chars: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789. ,'"!?()-`,
      sentences: [
        "Touch typing is a lifelong investment. Every minute you spend learning it pays you back for all the years you work at a computer. Practice patiently, keep your eyes off the keyboard, and trust your fingers.",
        "Professionals take small details seriously: hand position, breathing rhythm, desk height, even room lighting. All of these affect accuracy and speed.",
        "Start today with one small goal: ten focused minutes of practice. Repeat tomorrow. After a month, you will be surprised by your own progress."
      ],
      caseSensitive: true,
      minWpm: 25,
      minAccuracy: 96
    }
  ];

  // js/config.js
  var STORAGE_KEYS = {
    settings: "ttt.settings.v1",
    progress: "ttt.progress.v1",
    history: "ttt.history.v1",
    ui: "ttt.ui.v1",
    keyStats: "ttt.keyStats.v1",
    achievements: "ttt.achievements.v1"
  };
  var DEFAULT_SETTINGS = {
    theme: "dark",
    fontSize: "medium",
    // small | medium | large
    fontFa: "vazirmatn",
    fontEn: "system",
    soundEnabled: true,
    soundVolume: 0.55,
    keySound: true,
    errorSound: true,
    completeSound: true,
    caseSensitive: true,
    includeNumbers: true,
    includePunctuation: true,
    practiceLength: "medium",
    practiceDuration: 60,
    practiceSource: "sentences",
    showKeyboard: true,
    showFingerHint: true,
    showFingerIcon: true,
    showHandsDiagram: true,
    strictMode: true,
    smoothCursor: true,
    dailyGoal: 3
  };
  var THEMES = ["dark", "light", "sand", "sky", "forest", "indigo"];
  var FONTS_FA = [
    { id: "vazirmatn", label: "وزیرمتن", stack: '"Vazirmatn", "Segoe UI", Tahoma, sans-serif' },
    { id: "noto-naskh", label: "نسخ نوتیو", stack: '"Noto Naskh Arabic", "Vazirmatn", serif' },
    { id: "noto-kufi", label: "کوفی نوتیو", stack: '"Noto Kufi Arabic", "Vazirmatn", sans-serif' },
    { id: "amiri", label: "امیری (کلاسیک)", stack: '"Amiri", "Vazirmatn", serif' },
    { id: "baloo", label: "بالو (گرد)", stack: '"Baloo Bhaijaan 2", "Vazirmatn", sans-serif' },
    { id: "lalezar", label: "لاله‌زار (دکوراتیو)", stack: '"Lalezar", "Vazirmatn", sans-serif' },
    { id: "markazi", label: "مرکزی (روزنامه‌ای)", stack: '"Markazi Text", "Vazirmatn", serif' }
  ];
  var FONTS_EN = [
    { id: "system", label: "System", stack: '"Segoe UI", system-ui, -apple-system, sans-serif' },
    { id: "inter", label: "Inter", stack: '"Inter", "Segoe UI", system-ui, sans-serif' },
    { id: "roboto", label: "Roboto", stack: '"Roboto", "Segoe UI", sans-serif' },
    { id: "georgia", label: "Georgia", stack: 'Georgia, "Times New Roman", serif' },
    { id: "mono", label: "Monospace", stack: '"Cascadia Code", Consolas, monospace' }
  ];
  var UI_STRINGS = {
    fa: {
      appName: "مربی تایپ",
      home: "خانه",
      curriculum: "مسیر آموزشی",
      practice: "تمرین آزاد",
      stats: "پیشرفت من",
      settings: "تنظیمات",
      start: "شروع",
      continue: "ادامه",
      retry: "تکرار",
      next: "مرحله بعد",
      back: "بازگشت",
      exit: "خروج از جلسه",
      complete: "تکمیل شد",
      locked: "قفل",
      available: "در دسترس",
      done: "انجام شد",
      wpm: "WPM",
      cpm: "CPM",
      accuracy: "دقت",
      time: "زمان",
      errors: "خطا",
      score: "امتیاز",
      speed: "سرعت",
      correct: "درست",
      wrong: "اشتباه",
      corrected: "اصلاح‌شده",
      remaining: "باقی‌مانده",
      pass: "قبول",
      fail: "نیاز به تمرین بیشتر",
      nextKey: "کلید بعدی",
      finger: "انگشت",
      leftHand: "دست چپ",
      rightHand: "دست راست",
      startTyping: "برای شروع تایپ کنید…",
      noHistory: "هنوز جلسه‌ای ثبت نشده است. اولین تمرین را شروع کنید!",
      resetTitle: "بازنشانی و حذف داده‌ها",
      resetBody: "آمار، مراحل، دستاوردها و تاریخچه جلسات حذف می‌شود. تنظیمات (تم، صدا) باقی می‌ماند.",
      resetConfirm: "حذف پیشرفت",
      wipeAll: "حذف کامل همه‌چیز (شامل تنظیمات)",
      wipeBody: "همه داده‌ها از جمله تنظیمات حذف و برنامه به حالت اولیه برمی‌گردد.",
      cancel: "انصراف",
      saved: "ذخیره شد",
      level: "سطح",
      easy: "آسان",
      medium: "متوسط",
      hard: "پیشرفته",
      length: "طول متن",
      short: "کوتاه",
      long: "بلند",
      duration: "مدت زمان",
      unlimited: "بدون محدودیت",
      minute: "دقیقه",
      language: "زبان مسیر",
      theme: "تم ظاهری",
      sound: "صدا",
      volume: "بلندی صدا",
      showKeyboard: "نمایش صفحه‌کلید مجازی",
      fingerHint: "راهنمای انگشت",
      showFingerIcon: "نمایش شکل انگشت روی کلید هدف",
      strictMode: "حالت سخت‌گیرانه (حرف درست الزامی)",
      caseSensitive: "حساس به بزرگی/کوچکی",
      numbers: "اعداد",
      punctuation: "علائم نگارشی",
      fontSize: "اندازه فونت",
      typeSource: "نوع محتوا",
      words: "کلمات",
      sentences: "جملات",
      randomChars: "حروف تصادفی",
      stars: "ستاره",
      goal: "هدف مرحله",
      minSpeed: "حداقل سرعت",
      minAcc: "حداقل دقت",
      sessionDone: "جلسه تمام شد",
      newRecord: "رکورد جدید!",
      tryAgain: "دوباره امتحان کن",
      goToNext: "رفتن به مرحله بعدی",
      practiceAgain: "تمرین مجدد",
      freePractice: "تمرین آزاد",
      selectPath: "یک مسیر آموزشی را انتخاب کنید",
      faTrack: "فارسی",
      enTrack: "English",
      progressFa: "پیشرفت فارسی",
      progressEn: "پیشرفت انگلیسی",
      sessions: "جلسات",
      bestWpm: "بهترین سرعت",
      avgAcc: "میانگین دقت",
      totalTime: "کل زمان تمرین",
      recentSessions: "جلسات اخیر",
      chartWpm: "نمودار سرعت",
      chartAcc: "نمودار دقت",
      openLesson: "شروع مرحله",
      introTitle: "جایگاه دست‌ها",
      keepGoing: "ادامه بده!",
      almost: "تقریباً آماده‌ای",
      needWork: "هنوز به حد نصاب نرسیدی"
    },
    en: {
      appName: "Touch Typing",
      home: "Home",
      curriculum: "Curriculum",
      practice: "Free Practice",
      stats: "My Progress",
      settings: "Settings",
      start: "Start",
      continue: "Continue",
      retry: "Retry",
      next: "Next stage",
      back: "Back",
      exit: "Exit session",
      complete: "Completed",
      locked: "Locked",
      available: "Available",
      done: "Done",
      wpm: "WPM",
      cpm: "CPM",
      accuracy: "Accuracy",
      time: "Time",
      errors: "Errors",
      score: "Score",
      speed: "Speed",
      correct: "Correct",
      wrong: "Wrong",
      corrected: "Corrected",
      remaining: "Remaining",
      pass: "Passed",
      fail: "Keep practicing",
      nextKey: "Next key",
      finger: "Finger",
      leftHand: "Left hand",
      rightHand: "Right hand",
      startTyping: "Start typing to begin…",
      noHistory: "No sessions yet. Start your first practice!",
      resetTitle: "Reset & delete data",
      resetBody: "Stats, stages, achievements and session history will be deleted. Settings (theme, sound) stay.",
      resetConfirm: "Reset progress",
      wipeAll: "Wipe everything (including settings)",
      wipeBody: "All data including settings will be deleted and the app returns to defaults.",
      cancel: "Cancel",
      saved: "Saved",
      level: "Level",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
      length: "Text length",
      short: "Short",
      long: "Long",
      duration: "Duration",
      unlimited: "Unlimited",
      minute: "min",
      language: "Track language",
      theme: "Theme",
      sound: "Sound",
      volume: "Volume",
      showKeyboard: "Show virtual keyboard",
      fingerHint: "Finger hint",
      showFingerIcon: "Show finger shape on target key",
      strictMode: "Strict mode (correct key required)",
      caseSensitive: "Case sensitive",
      numbers: "Numbers",
      punctuation: "Punctuation",
      fontSize: "Font size",
      typeSource: "Content type",
      words: "Words",
      sentences: "Sentences",
      randomChars: "Random chars",
      stars: "Stars",
      goal: "Stage goal",
      minSpeed: "Min speed",
      minAcc: "Min accuracy",
      sessionDone: "Session complete",
      newRecord: "New record!",
      tryAgain: "Try again",
      goToNext: "Go to next stage",
      practiceAgain: "Practice again",
      freePractice: "Free practice",
      selectPath: "Choose a learning path",
      faTrack: "فارسی",
      enTrack: "English",
      progressFa: "Persian progress",
      progressEn: "English progress",
      sessions: "Sessions",
      bestWpm: "Best WPM",
      avgAcc: "Avg accuracy",
      totalTime: "Total practice",
      recentSessions: "Recent sessions",
      chartWpm: "Speed chart",
      chartAcc: "Accuracy chart",
      openLesson: "Start stage",
      introTitle: "Hand position",
      keepGoing: "Keep going!",
      almost: "Almost ready",
      needWork: "Not quite there yet"
    }
  };
  function t(lang, key) {
    return UI_STRINGS[lang]?.[key] ?? UI_STRINGS.en[key] ?? key;
  }

  // js/storage.js
  function safeParse(raw, fallback) {
    if (raw == null || raw === "") return fallback;
    try {
      const val = JSON.parse(raw);
      return val == null ? fallback : val;
    } catch {
      return fallback;
    }
  }
  function loadSettings() {
    try {
      const saved = safeParse(localStorage.getItem(STORAGE_KEYS.settings), {});
      return { ...DEFAULT_SETTINGS, ...saved };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }
  function saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
    } catch {
    }
  }
  function loadProgress() {
    const empty = {
      fa: { unlocked: 0, scores: {} },
      en: { unlocked: 0, scores: {} }
    };
    try {
      const saved = safeParse(localStorage.getItem(STORAGE_KEYS.progress), null);
      if (!saved || typeof saved !== "object") return empty;
      return {
        fa: { ...empty.fa, ...saved.fa || {} },
        en: { ...empty.en, ...saved.en || {} }
      };
    } catch {
      return empty;
    }
  }
  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
    } catch {
    }
  }
  function loadHistory() {
    try {
      const arr = safeParse(localStorage.getItem(STORAGE_KEYS.history), []);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }
  function saveHistory(history) {
    try {
      const capped = history.slice(-200);
      localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(capped));
    } catch {
    }
  }
  function loadUi() {
    try {
      return safeParse(localStorage.getItem(STORAGE_KEYS.ui), { lang: "fa" });
    } catch {
      return { lang: "fa" };
    }
  }
  function saveUi(ui) {
    try {
      localStorage.setItem(STORAGE_KEYS.ui, JSON.stringify(ui));
    } catch {
    }
  }
  function resetAllProgress() {
    try {
      localStorage.removeItem(STORAGE_KEYS.progress);
      localStorage.removeItem(STORAGE_KEYS.history);
      localStorage.removeItem(STORAGE_KEYS.keyStats);
      localStorage.removeItem(STORAGE_KEYS.achievements);
    } catch {
    }
  }
  function resetEverything() {
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch {
    }
  }
  function loadKeyStats() {
    try {
      const saved = safeParse(localStorage.getItem(STORAGE_KEYS.keyStats), {});
      return saved && typeof saved === "object" ? saved : {};
    } catch {
      return {};
    }
  }
  function saveKeyStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEYS.keyStats, JSON.stringify(stats));
    } catch {
    }
  }
  function loadAchievements() {
    try {
      const arr = safeParse(localStorage.getItem(STORAGE_KEYS.achievements), []);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }
  function saveAchievements(ids) {
    try {
      localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify(ids));
    } catch {
    }
  }
  function exportAllData() {
    const out = { version: 1, exportedAt: (/* @__PURE__ */ new Date()).toISOString() };
    for (const [k, key] of Object.entries(STORAGE_KEYS)) {
      try {
        const raw = localStorage.getItem(key);
        out[k] = raw ? JSON.parse(raw) : null;
      } catch {
        out[k] = null;
      }
    }
    return out;
  }
  function importAllData(payload) {
    if (!payload || typeof payload !== "object") throw new Error("invalid");
    for (const key of Object.values(STORAGE_KEYS)) {
      if (key in payload && payload[key] != null) {
        localStorage.setItem(key, JSON.stringify(payload[key]));
      }
    }
  }

  // js/audio.js
  var ctx = null;
  var master = null;
  var flags = { key: true, error: true, complete: true };
  function setSoundFlags(partial) {
    flags = { ...flags, ...partial };
  }
  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {
      });
    }
    return ctx;
  }
  function setVolume(v) {
    ensureCtx();
    if (master) master.gain.value = Math.max(0, Math.min(1, v));
  }
  function blip({ freq = 440, type = "square", dur = 0.05, gain = 0.12, when = 0 }) {
    const c = ensureCtx();
    if (!c || !master) return;
    const t0 = c.currentTime + when;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(1e-4, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 8e-3);
    g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }
  function playKeyCorrect() {
    if (!flags.key) return;
    blip({ freq: 880, type: "sine", dur: 0.04, gain: 0.08 });
  }
  function playKeyWrong() {
    if (!flags.error) return;
    blip({ freq: 160, type: "sawtooth", dur: 0.12, gain: 0.1 });
  }
  function playStageComplete() {
    if (!flags.complete) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      blip({ freq: f, type: "sine", dur: 0.18, gain: 0.12, when: i * 0.09 });
    });
  }
  function unlockAudio() {
    ensureCtx();
  }

  // js/streak.js
  function dayKey(ts = Date.now()) {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  function yesterdayKey() {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - 1);
    return dayKey(d.getTime());
  }
  function computeStreak(history) {
    if (!history || history.length === 0) return { streak: 0, todayDone: false, lastDay: null };
    const days = new Set(history.map((h) => dayKey(h.ts || Date.now())));
    const today = dayKey();
    const todayDone = days.has(today);
    let cursor = todayDone ? today : yesterdayKey();
    let streak = 0;
    for (let i = 0; i < 400; i++) {
      if (days.has(cursor)) {
        streak += 1;
        const [y, m, d] = cursor.split("-").map(Number);
        const dt = new Date(y, m - 1, d);
        dt.setDate(dt.getDate() - 1);
        cursor = dayKey(dt.getTime());
      } else {
        break;
      }
    }
    return {
      streak,
      todayDone,
      lastDay: [...days].sort().pop() || null,
      activeDays: days.size
    };
  }
  function sessionsToday(history) {
    const today = dayKey();
    return history.filter((h) => dayKey(h.ts || Date.now()) === today).length;
  }
  function mergeKeyStats(existing = {}, sessionKeyStats = {}) {
    const out = { ...existing };
    for (const [ch, v] of Object.entries(sessionKeyStats)) {
      const prev = out[ch] || { hits: 0, misses: 0 };
      out[ch] = {
        hits: prev.hits + (v.hits || 0),
        misses: prev.misses + (v.misses || 0)
      };
    }
    return out;
  }
  function weakKeys(keyStats, limit = 12, minSamples = 3) {
    return Object.entries(keyStats).map(([ch, v]) => {
      const total = (v.hits || 0) + (v.misses || 0);
      const acc = total ? (v.hits || 0) / total : 1;
      return { ch, total, misses: v.misses || 0, acc: Math.round(acc * 1e3) / 10 };
    }).filter((k) => k.total >= minSamples && k.acc < 95).sort((a, b) => a.acc - b.acc || b.misses - a.misses).slice(0, limit);
  }

  // js/achievements.js
  var ACHIEVEMENTS = [
    { id: "first-session", icon: "🎯", fa: "اولین قدم", en: "First Steps", descFa: "اولین جلسه تمرین را کامل کن", descEn: "Complete your first session", check: (s) => s.sessions >= 1 },
    { id: "ten-sessions", icon: "🔥", fa: "منظم", en: "Consistent", descFa: "۱۰ جلسه تمرین", descEn: "10 practice sessions", check: (s) => s.sessions >= 10 },
    { id: "fifty-sessions", icon: "💎", fa: "متعهد", en: "Dedicated", descFa: "۵۰ جلسه تمرین", descEn: "50 practice sessions", check: (s) => s.sessions >= 50 },
    { id: "wpm-20", icon: "🚶", fa: "راه‌افتاد", en: "Walking", descFa: "سرعت ۲۰ WPM", descEn: "Reach 20 WPM", check: (s) => s.bestWpm >= 20 },
    { id: "wpm-40", icon: "🏃", fa: "دونده", en: "Runner", descFa: "سرعت ۴۰ WPM", descEn: "Reach 40 WPM", check: (s) => s.bestWpm >= 40 },
    { id: "wpm-60", icon: "⚡", fa: "برق‌آسا", en: "Lightning", descFa: "سرعت ۶۰ WPM", descEn: "Reach 60 WPM", check: (s) => s.bestWpm >= 60 },
    { id: "wpm-80", icon: "🚀", fa: "موشکی", en: "Rocket", descFa: "سرعت ۸۰ WPM", descEn: "Reach 80 WPM", check: (s) => s.bestWpm >= 80 },
    { id: "acc-95", icon: "🎯", fa: "تیرانداز", en: "Sharpshooter", descFa: "دقت ۹۵٪", descEn: "95% accuracy", check: (s) => s.bestAccuracy >= 95 },
    { id: "acc-99", icon: "👑", fa: "بی‌نقص", en: "Flawless", descFa: "دقت ۹۹٪", descEn: "99% accuracy", check: (s) => s.bestAccuracy >= 99 },
    { id: "streak-3", icon: "📅", fa: "سه‌روزه", en: "3-Day Streak", descFa: "۳ روز پیاپی تمرین", descEn: "3-day practice streak", check: (s) => s.streak >= 3 },
    { id: "streak-7", icon: "🗓️", fa: "هفته‌مند", en: "Weekly Hero", descFa: "۷ روز پیاپی تمرین", descEn: "7-day practice streak", check: (s) => s.streak >= 7 },
    { id: "streak-30", icon: "🏆", fa: "ماه‌افشان", en: "Monthly Master", descFa: "۳۰ روز پیاپی تمرین", descEn: "30-day practice streak", check: (s) => s.streak >= 30 },
    { id: "fa-complete", icon: "🇮🇷", fa: "استاد فارسی", en: "Persian Master", descFa: "تکمیل مسیر فارسی", descEn: "Complete Persian track", check: (s) => s.faComplete },
    { id: "en-complete", icon: "🌐", fa: "استاد انگلیسی", en: "English Master", descFa: "تکمیل مسیر انگلیسی", descEn: "Complete English track", check: (s) => s.enComplete },
    { id: "hour-practice", icon: "⏱️", fa: "یک‌ساعته", en: "One Hour", descFa: "مجموع ۱ ساعت تمرین", descEn: "1 hour total practice", check: (s) => s.totalTimeMs >= 36e5 },
    { id: "perfect-lesson", icon: "🌟", fa: "کامل‌بی‌نقص", en: "Perfect Run", descFa: "مرحله‌ای با دقت ۱۰۰٪ و سه ستاره", descEn: "3-star 100% accuracy lesson", check: (s) => s.perfectLessons >= 1 }
  ];
  function evaluateAchievements(stats, alreadyUnlocked = []) {
    const unlocked = new Set(alreadyUnlocked);
    const newly = [];
    for (const a of ACHIEVEMENTS) {
      if (unlocked.has(a.id)) continue;
      try {
        if (a.check(stats)) newly.push(a.id);
      } catch {
      }
    }
    return newly;
  }
  function achievementLabel(a, lang) {
    return lang === "fa" ? a.fa : a.en;
  }
  function achievementDesc(a, lang) {
    return lang === "fa" ? a.descFa : a.descEn;
  }

  // js/state.js
  var listeners = /* @__PURE__ */ new Set();
  var state = {
    route: "home",
    lang: "fa",
    settings: loadSettings(),
    progress: loadProgress(),
    history: loadHistory(),
    ui: loadUi(),
    keyStats: loadKeyStats(),
    achievements: loadAchievements(),
    xp: Number(localStorage.getItem("ttt.xp.v1") || 0),
    session: null
  };
  state.lang = state.ui.lang || "fa";
  function notify(type = "any") {
    listeners.forEach((fn) => {
      try {
        fn(type, state);
      } catch {
      }
    });
  }
  function setLang(lang) {
    state.lang = lang === "en" ? "en" : "fa";
    state.ui.lang = state.lang;
    saveUi(state.ui);
    applyDocumentLang();
    notify("lang");
  }
  function applyDocumentLang() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";
    document.body.dataset.lang = state.lang;
  }
  function applyTheme() {
    document.body.dataset.theme = state.settings.theme || "dark";
  }
  function applyFonts() {
    const { FONTS_FA: FONTS_FA2, FONTS_EN: FONTS_EN2 } = window.__TTT_FONTS__ || {};
    const fa = FONTS_FA2?.find((f) => f.id === state.settings.fontFa) || FONTS_FA2?.[0];
    const en = FONTS_EN2?.find((f) => f.id === state.settings.fontEn) || FONTS_EN2?.[0];
    if (fa) document.documentElement.style.setProperty("--font-fa", fa.stack);
    if (en) document.documentElement.style.setProperty("--font-en", en.stack);
    document.documentElement.style.setProperty("--font-ui", fa?.stack || "");
  }
  function applySettings() {
    applyTheme();
    applyDocumentLang();
    applyFonts();
    setVolume(state.settings.soundEnabled === false ? 0 : state.settings.soundVolume || 0.55);
    setSoundFlags({
      key: state.settings.keySound !== false,
      error: state.settings.errorSound !== false,
      complete: state.settings.completeSound !== false
    });
  }
  function updateSettings(partial) {
    state.settings = { ...state.settings, ...partial };
    saveSettings(state.settings);
    applySettings();
    notify("settings");
  }
  function getLessons(lang = state.lang) {
    return window.__TTT_LESSONS__?.[lang] || [];
  }
  function getProgress(lang = state.lang) {
    return state.progress[lang] || { unlocked: 0, scores: {} };
  }
  function saveLessonResult(lang, lessonIndex, result) {
    const track = state.progress[lang] || (state.progress[lang] = { unlocked: 0, scores: {} });
    const lessons = getLessons(lang);
    const lesson = lessons[lessonIndex];
    if (!lesson) return;
    const prev = track.scores[lesson.id];
    const improved = {
      stars: Math.max(prev?.stars || 0, result.stars || 0),
      wpm: Math.max(prev?.wpm || 0, result.wpm || 0),
      accuracy: Math.max(prev?.accuracy || 0, result.accuracy || 0),
      score: Math.max(prev?.score || 0, result.score || 0),
      completedAt: Date.now(),
      passed: true
    };
    track.scores[lesson.id] = improved;
    if (result.passed && lessonIndex + 1 > track.unlocked) {
      track.unlocked = Math.min(lessonIndex + 1, lessons.length);
    }
    saveProgress(state.progress);
    notify("progress");
  }
  function appendSessionRecord(record) {
    state.history.push(record);
    saveHistory(state.history);
    notify("history");
    return checkNewAchievements();
  }
  function recordKeyStats(sessionKeyStats) {
    if (!sessionKeyStats || !Object.keys(sessionKeyStats).length) return;
    state.keyStats = mergeKeyStats(state.keyStats, sessionKeyStats);
    saveKeyStats(state.keyStats);
    notify("keyStats");
  }
  function buildAchievementStats() {
    const rows = state.history;
    const bestWpm = rows.length ? Math.max(...rows.map((r) => r.wpm || 0)) : 0;
    const bestAccuracy = rows.length ? Math.max(...rows.map((r) => r.accuracy || 0)) : 0;
    const totalTimeMs = rows.reduce((s, r) => s + (r.durationMs || 0), 0);
    const { streak } = computeStreak(rows);
    const faLessons = getLessons("fa");
    const enLessons = getLessons("en");
    const faProg = getProgress("fa");
    const enProg = getProgress("en");
    const faComplete = faLessons.length > 0 && faLessons.every((l) => faProg.scores[l.id]?.passed);
    const enComplete = enLessons.length > 0 && enLessons.every((l) => enProg.scores[l.id]?.passed);
    const perfectLessons = rows.filter((r) => r.accuracy === 100 && r.stars >= 3).length;
    return {
      sessions: rows.length,
      bestWpm,
      bestAccuracy,
      totalTimeMs,
      streak,
      faComplete,
      enComplete,
      perfectLessons
    };
  }
  function checkNewAchievements() {
    const stats = buildAchievementStats();
    const newly = evaluateAchievements(stats, state.achievements);
    if (newly.length) {
      state.achievements = [...state.achievements, ...newly];
      saveAchievements(state.achievements);
      notify("achievements");
    }
    return newly;
  }
  function isLessonUnlocked(lang, index) {
    const track = getProgress(lang);
    if (index === 0) return true;
    return index <= track.unlocked;
  }
  function firstUnfinishedIndex(lang) {
    const track = getProgress(lang);
    const lessons = getLessons(lang);
    for (let i = 0; i < lessons.length; i++) {
      if (!track.scores[lessons[i].id]?.passed) return i;
    }
    return lessons.length - 1;
  }
  function unlockAudioOnGesture() {
    unlockAudio();
    document.removeEventListener("pointerdown", unlockAudioOnGesture);
    document.removeEventListener("keydown", unlockAudioOnGesture);
  }
  function bindAudioUnlock() {
    document.addEventListener("pointerdown", unlockAudioOnGesture, { once: true });
    document.addEventListener("keydown", unlockAudioOnGesture, { once: true });
  }

  // js/router.js
  var routes = /* @__PURE__ */ new Map();
  var current = null;
  var onChange = null;
  function registerRoute(name, handler) {
    routes.set(name, handler);
  }
  function setRouteChangeHandler(fn) {
    onChange = fn;
  }
  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    const [name, ...rest] = raw.split("/");
    return { name: name || "home", params: rest.filter(Boolean) };
  }
  function navigate(name, params = []) {
    const path = params.length ? `#/${name}/${params.join("/")}` : `#/${name}`;
    if (location.hash === path) {
      runRoute();
    } else {
      location.hash = path;
    }
  }
  function runRoute() {
    const { name, params } = parseHash();
    const handler = routes.get(name) || routes.get("home");
    current = { name, params };
    if (onChange) onChange(name, params);
    if (handler) handler(params);
  }
  function startRouter() {
    window.addEventListener("hashchange", runRoute);
    if (!location.hash) location.hash = "#/home";
    else runRoute();
  }

  // js/scoring.js
  function computeMetrics({
    correctChars,
    totalTyped,
    incorrectChars,
    durationMs,
    correctedErrors = 0
  }) {
    const minutes = Math.max(durationMs / 6e4, 1 / 6e4);
    const wpm = Math.round(correctChars / 5 / minutes);
    const cpm = Math.round(correctChars / minutes);
    const accuracy = totalTyped === 0 ? 100 : Math.round(correctChars / Math.max(totalTyped, 1) * 1e3) / 10;
    const remainingErrors = incorrectChars;
    const totalErrors = remainingErrors + correctedErrors;
    const speedFactor = Math.min(wpm / 40, 1);
    const accFactor = accuracy / 100;
    const rawScore = speedFactor * 55 + accFactor * 45;
    const score = Math.round(Math.max(0, Math.min(100, rawScore)));
    return {
      wpm,
      cpm,
      accuracy,
      correctChars,
      incorrectChars: remainingErrors,
      correctedErrors,
      totalErrors,
      durationMs,
      score
    };
  }
  function starsFor({ wpm, accuracy, minWpm, minAccuracy }) {
    const meetsSpeed = wpm >= minWpm;
    const meetsAcc = accuracy >= minAccuracy;
    if (!meetsSpeed || !meetsAcc) return 0;
    let stars = 1;
    if (accuracy >= Math.min(100, minAccuracy + 3) && wpm >= minWpm * 1.1) stars = 2;
    if (accuracy >= Math.min(100, minAccuracy + 5) && wpm >= minWpm * 1.25) stars = 3;
    return stars;
  }
  function passedStage({ wpm, accuracy, minWpm, minAccuracy }) {
    return wpm >= minWpm && accuracy >= minAccuracy;
  }
  function formatDuration(ms) {
    const totalSec = Math.max(0, Math.round(ms / 1e3));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    if (m === 0) return `${s}s`;
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  function summarizeHistory(history, langFilter = null) {
    const rows = langFilter ? history.filter((h) => h.lang === langFilter) : history;
    if (rows.length === 0) {
      return { sessions: 0, bestWpm: 0, avgAccuracy: 0, totalTimeMs: 0, avgWpm: 0 };
    }
    const bestWpm = Math.max(...rows.map((r) => r.wpm || 0));
    const avgAccuracy = Math.round(rows.reduce((s, r) => s + (r.accuracy || 0), 0) / rows.length * 10) / 10;
    const totalTimeMs = rows.reduce((s, r) => s + (r.durationMs || 0), 0);
    const avgWpm = Math.round(rows.reduce((s, r) => s + (r.wpm || 0), 0) / rows.length);
    return { sessions: rows.length, bestWpm, avgAccuracy, totalTimeMs, avgWpm };
  }

  // js/xp.js
  var XP_RULES = {
    perCorrectChar: 1,
    perWpmPoint: 2,
    accuracyBonus: (acc) => acc >= 99 ? 50 : acc >= 95 ? 25 : acc >= 90 ? 10 : 0,
    perfectBonus: 100,
    threeStarBonus: 40,
    comboBonusPer10: 5
    // every 10 combo adds 5 XP
  };
  function xpForLevel(level) {
    return Math.round(80 * Math.pow(level, 1.35));
  }
  function levelFromXp(xp) {
    let level = 1;
    let remaining = Math.max(0, xp);
    while (remaining >= xpForLevel(level + 1) && level < 99) {
      remaining -= xpForLevel(level + 1);
      level += 1;
    }
    const nextNeed = xpForLevel(level + 1);
    const progress = nextNeed ? Math.min(1, remaining / nextNeed) : 1;
    return { level, intoLevel: remaining, nextNeed, progress };
  }
  function computeSessionXp(result, maxCombo = 0) {
    let xp = 0;
    xp += (result.correctChars || 0) * XP_RULES.perCorrectChar;
    xp += (result.wpm || 0) * XP_RULES.perWpmPoint;
    xp += XP_RULES.accuracyBonus(result.accuracy || 0);
    if (result.accuracy === 100 && result.completed) xp += XP_RULES.perfectBonus;
    if (result.stars >= 3) xp += XP_RULES.threeStarBonus;
    xp += Math.floor((maxCombo || 0) / 10) * XP_RULES.comboBonusPer10;
    return Math.round(xp);
  }
  var TITLES = [
    { min: 1, fa: "مبتدی", en: "Beginner" },
    { min: 3, fa: "آموزش‌دیده", en: "Trainee" },
    { min: 5, fa: "تایپیست", en: "Typist" },
    { min: 8, fa: "ماهر", en: "Skilled" },
    { min: 12, fa: "حرفه‌ای", en: "Pro" },
    { min: 16, fa: "استاد", en: "Master" },
    { min: 22, fa: "افسانه", en: "Legend" }
  ];
  function titleForLevel(level, lang) {
    let t2 = TITLES[0];
    for (const item of TITLES) if (level >= item.min) t2 = item;
    return lang === "fa" ? t2.fa : t2.en;
  }

  // js/ui/home.js
  function ringHtml(pct, label, value, size = 88) {
    const r = (size - 10) / 2;
    const c = 2 * Math.PI * r;
    const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return `
    <div class="ring" style="--size:${size}px">
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="7"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="7"
          stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"
          transform="rotate(-90 ${size / 2} ${size / 2})"/>
      </svg>
      <div class="ring-center">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    </div>`;
  }
  function renderHome(root) {
    const lang = state.lang;
    const L = (k) => t(lang, k);
    const faLessons = getLessons("fa");
    const enLessons = getLessons("en");
    const faProg = getProgress("fa");
    const enProg = getProgress("en");
    const faPassed = Object.values(faProg.scores).filter((s) => s.passed).length;
    const enPassed = Object.values(enProg.scores).filter((s) => s.passed).length;
    const faDone = faLessons.length > 0 && faLessons.every((l) => faProg.scores[l.id]?.passed);
    const enDone = enLessons.length > 0 && enLessons.every((l) => enProg.scores[l.id]?.passed);
    const faIdx = firstUnfinishedIndex("fa");
    const enIdx = firstUnfinishedIndex("en");
    const summary = summarizeHistory(state.history);
    const { streak, todayDone, activeDays } = computeStreak(state.history);
    const todayCount = sessionsToday(state.history);
    const dailyGoal = state.settings.dailyGoal || 3;
    const goalPct = Math.min(100, Math.round(todayCount / dailyGoal * 100));
    const weak = weakKeys(state.keyStats, 8);
    const unlockedAch = new Set(state.achievements);
    const recentAch = ACHIEVEMENTS.filter((a) => unlockedAch.has(a.id)).slice(-6).reverse();
    const last = state.history[state.history.length - 1];
    const lvl = levelFromXp(state.xp || 0);
    root.innerHTML = `
    <div class="page page-home fade-in">
      <header class="page-header home-top">
        <div>
          <h1 class="page-title">${L("appName")}</h1>
          <p class="page-sub">${lang === "fa" ? "تایپ ده انگشتی را گام‌به‌گام یاد بگیرید" : "Learn touch typing step by step"}</p>
        </div>
        <div class="home-badges">
          <div class="pill pill-xp" title="XP">
            <span class="pill-icon">⭐</span>
            <strong>Lv ${lvl.level}</strong>
            <span>${titleForLevel(lvl.level, lang)}</span>
          </div>
          <div class="pill ${todayDone ? "is-done" : ""}" title="${lang === "fa" ? "روزهای پیاپی" : "Streak"}">
            <span class="pill-icon">🔥</span>
            <strong>${streak}</strong>
            <span>${lang === "fa" ? "روز" : "d"}</span>
          </div>
          <div class="pill" title="${lang === "fa" ? "تمرین امروز" : "Today"}">
            <span class="pill-icon">📅</span>
            <strong>${todayCount}/${dailyGoal}</strong>
          </div>
        </div>
      </header>

      <section class="dash-grid">
        ${ringHtml(summary.bestWpm ? Math.min(100, summary.bestWpm / 80 * 100) : 0, L("bestWpm"), summary.bestWpm)}
        ${ringHtml(summary.avgAccuracy, L("accuracy"), `${summary.avgAccuracy}%`)}
        ${ringHtml(goalPct, lang === "fa" ? "هدف امروز" : "Daily goal", `${todayCount}/${dailyGoal}`)}
        <div class="ring-stat">
          <strong>${summary.sessions}</strong>
          <span>${L("sessions")}</span>
          <small>${formatDuration(summary.totalTimeMs)}</small>
        </div>
      </section>

      <section class="continue-card card">
        <div>
          <div class="continue-label">${todayDone ? lang === "fa" ? "عالی! امروز تمرین کردی" : "Nice — you practiced today" : lang === "fa" ? "امروز تمرین نکردی" : "No practice yet today"}</div>
          <div class="continue-title">${lang === "fa" ? "ادامه بده" : "Keep going"}</div>
        </div>
        <div class="continue-actions">
          <button type="button" class="btn btn-primary" data-go-fa>
            ${faProg.unlocked > 0 || faPassed > 0 ? L("continue") : L("start")} · فارسی
          </button>
          <button type="button" class="btn btn-secondary" data-go-en>
            ${enProg.unlocked > 0 || enPassed > 0 ? L("continue") : L("start")} · English
          </button>
          <button type="button" class="btn btn-ghost" data-go-practice>${L("practice")}</button>
        </div>
      </section>

      <section class="hero-card card">
        <div class="hero-text">
          <h2>${L("selectPath")}</h2>
          <p class="muted">${lang === "fa" ? "دو مسیر مستقل: فارسی (چیدمان استاندارد) و انگلیسی (QWERTY)." : "Two independent tracks: Persian (standard) and English (QWERTY)."}</p>
        </div>
        <div class="track-grid">
          <button type="button" class="track-card" data-track="fa">
            <div class="track-flag">فارسی</div>
            <div class="track-title">${lang === "fa" ? "مسیر فارسی" : "Persian track"}</div>
            <div class="track-meta">
              <span>${faLessons.length} ${L("level")}</span>
              <span>${faPassed}/${faLessons.length}</span>
            </div>
            <div class="progress-bar"><i style="width:${Math.round(faPassed / Math.max(faLessons.length, 1) * 100)}%"></i></div>
            <span class="track-cta">${faDone ? L("done") : faPassed > 0 ? L("continue") : L("start")} →</span>
          </button>
          <button type="button" class="track-card" data-track="en">
            <div class="track-flag">English</div>
            <div class="track-title">${lang === "fa" ? "مسیر انگلیسی" : "English track"}</div>
            <div class="track-meta">
              <span>${enLessons.length} ${L("level")}</span>
              <span>${enPassed}/${enLessons.length}</span>
            </div>
            <div class="progress-bar"><i style="width:${Math.round(enPassed / Math.max(enLessons.length, 1) * 100)}%"></i></div>
            <span class="track-cta">${enDone ? L("done") : enPassed > 0 ? L("continue") : L("start")} →</span>
          </button>
        </div>
      </section>

      <section class="quick-grid">
        <button type="button" class="action-card" data-action="practice">
          <span class="action-icon">⌨</span>
          <span class="action-title">${L("practice")}</span>
          <span class="action-sub">${lang === "fa" ? "تمرین آزاد" : "Free typing"}</span>
        </button>
        <button type="button" class="action-card" data-action="stats">
          <span class="action-icon">↗</span>
          <span class="action-title">${L("stats")}</span>
          <span class="action-sub">${summary.sessions} ${L("sessions")}</span>
        </button>
        <button type="button" class="action-card" data-action="achievements">
          <span class="action-icon">🏅</span>
          <span class="action-title">${lang === "fa" ? "دستاوردها" : "Achievements"}</span>
          <span class="action-sub">${unlockedAch.size}/${ACHIEVEMENTS.length}</span>
        </button>
        <button type="button" class="action-card" data-action="settings">
          <span class="action-icon">⚙</span>
          <span class="action-title">${L("settings")}</span>
          <span class="action-sub">${lang === "fa" ? "شخصی‌سازی" : "Customize"}</span>
        </button>
      </section>

      <div class="home-split">
        <section class="card">
          <h3 class="card-h">${lang === "fa" ? "دستاوردهای اخیر" : "Recent achievements"}</h3>
          ${recentAch.length === 0 ? `<p class="muted">${lang === "fa" ? "هنوز دستاوردی نداری — اولین جلسه را شروع کن!" : "No badges yet — start your first session!"}</p>` : `<div class="ach-row">${recentAch.map((a) => `
                <div class="ach-chip" title="${achievementLabel(a, lang)}">
                  <span>${a.icon}</span>
                  <span>${achievementLabel(a, lang)}</span>
                </div>`).join("")}</div>`}
        </section>

        <section class="card">
          <h3 class="card-h">${lang === "fa" ? "کلیدهای ضعیف" : "Weak keys"}</h3>
          ${weak.length === 0 ? `<p class="muted">${lang === "fa" ? "هنوز داده کافی نیست. تمرین کن تا نقاط ضعف پیدا شوند." : "Not enough data yet. Practice to discover weak keys."}</p>` : `<div class="weak-row">${weak.map((k) => `
                <span class="weak-chip" style="--acc:${k.acc}">
                  <b>${k.ch === " " ? "␣" : k.ch}</b>
                  <i>${k.acc}%</i>
                </span>`).join("")}</div>
              <button type="button" class="btn btn-ghost btn-sm" data-weak-practice style="margin-top:var(--sp-3)">
                ${lang === "fa" ? "تمرین کلیدهای ضعیف" : "Practice weak keys"}
              </button>`}
        </section>
      </div>

      ${last ? `
      <section class="card last-session">
        <h3 class="card-h">${lang === "fa" ? "آخرین جلسه" : "Last session"}</h3>
        <div class="last-grid">
          <div><span>${L("wpm")}</span><strong>${last.wpm}</strong></div>
          <div><span>${L("accuracy")}</span><strong>${last.accuracy}%</strong></div>
          <div><span>${L("time")}</span><strong>${formatDuration(last.durationMs)}</strong></div>
          <div><span>${L("score")}</span><strong>${last.score}</strong></div>
        </div>
      </section>` : ""}
    </div>
  `;
    root.querySelectorAll(".track-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.track);
        navigate("curriculum");
      });
    });
    root.querySelector("[data-go-fa]")?.addEventListener("click", () => {
      setLang("fa");
      const i = firstUnfinishedIndex("fa");
      navigate("lesson", ["fa", String(i)]);
    });
    root.querySelector("[data-go-en]")?.addEventListener("click", () => {
      setLang("en");
      const i = firstUnfinishedIndex("en");
      navigate("lesson", ["en", String(i)]);
    });
    root.querySelector('[data-action="practice"]')?.addEventListener("click", () => navigate("practice"));
    root.querySelector("[data-go-practice]")?.addEventListener("click", () => navigate("practice"));
    root.querySelector('[data-action="stats"]')?.addEventListener("click", () => navigate("stats"));
    root.querySelector('[data-action="achievements"]')?.addEventListener("click", () => navigate("stats"));
    root.querySelector('[data-action="settings"]')?.addEventListener("click", () => navigate("settings"));
    root.querySelector("[data-weak-practice]")?.addEventListener("click", () => {
      const chars = weak.map((k) => k.ch).join("");
      if (!chars) return;
      sessionStorage.setItem("ttt.weakChars", chars);
      sessionStorage.setItem("ttt.weakDrill", "1");
      navigate("practice-run", [lang, "easy", "weak", "medium", "0", "normal"]);
    });
  }

  // js/ui/curriculum.js
  function renderCurriculum(root) {
    const lang = state.lang;
    const L = (k) => t(lang, k);
    const lessons = getLessons(lang);
    const track = getProgress(lang);
    root.innerHTML = `
    <div class="page page-curriculum fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("curriculum")}</h1>
          <p class="page-sub">${lang === "fa" ? "گام‌به‌گام از ردیف خانه تا تسلط کامل" : "From home row to full mastery"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <div class="stage-map">
        ${lessons.map((lesson, i) => {
      const unlocked = isLessonUnlocked(lang, i);
      const score = track.scores[lesson.id];
      const passed = !!score?.passed;
      const stars = score?.stars || 0;
      const status = passed ? "done" : unlocked ? "open" : "locked";
      const starsHtml = passed ? `<span class="stars" aria-label="${stars} ${L("stars")}">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span>` : "";
      return `
            <button type="button"
              class="stage-card status-${status}"
              data-index="${i}"
              ${!unlocked ? "disabled" : ""}
              style="--i:${i}">
              <div class="stage-num">${i + 1}</div>
              <div class="stage-body">
                <div class="stage-title">${lesson.title}</div>
                <div class="stage-desc">${lesson.desc || ""}</div>
                <div class="stage-meta">
                  ${passed ? starsHtml : unlocked ? `<span class="badge badge-ok">${L("available")}</span>` : `<span class="badge">${L("locked")}</span>`}
                  ${lesson.minWpm ? `<span class="badge">${L("minSpeed")} ${lesson.minWpm}</span>` : ""}
                  ${lesson.minAccuracy ? `<span class="badge">${L("minAcc")} ${lesson.minAccuracy}%</span>` : ""}
                </div>
              </div>
              <div class="stage-go" aria-hidden="true">${unlocked ? "→" : "🔒"}</div>
            </button>
          `;
    }).join("")}
      </div>
    </div>
  `;
    root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));
    root.querySelectorAll(".stage-card:not([disabled])").forEach((btn) => {
      btn.addEventListener("click", () => {
        navigate("lesson", [lang, btn.dataset.index]);
      });
    });
  }

  // data/sentences/fa.js
  var FA_SENTENCES = {
    easy: [
      "این یک کتاب است.",
      "من به خانه می‌روم.",
      "هوا امروز خوب است.",
      "او تایپ سریع دارد.",
      "ما در پارک هستیم.",
      "در را باز کنید.",
      "این میز بزرگ است.",
      "روز خوبی داشته باشید.",
      "لطفاً آرام تایپ کنید.",
      "دست من روی میز است.",
      "آب سرد است.",
      "نان تازه بخر.",
      "کتاب روی میز است.",
      "ما دوست هستیم.",
      "شب خوبی داشته باش.",
      "در بسته است.",
      "این قلم من است.",
      "او خیلی خوب است.",
      "روز جمعه است.",
      "من خسته‌ام."
    ],
    medium: [
      "تمرین مداوم باعث پیشرفت می‌شود، اما اول دقت را در اولویت بگذارید.",
      "صفحه‌کلید ابزار شماست؛ جای هر کلید را بدون نگاه یاد بگیرید.",
      "تایپیست‌های خوب مچ‌ها را شناور و انگشتان را خمیده نگه می‌دارند.",
      "سرعت از دقت پیروی می‌کند، نه برعکس.",
      "هر روز ده دقیقه وقت آرام برای تمرین هدفمند کنار بگذارید.",
      "حافظه‌ی عضلانی با تکرار آگاهانه شکل می‌گیرد نه با عجله.",
      "به صفحه‌کلید نگاه نکنید؛ چشمتان باید روی متن بماند.",
      "خطا بازخورد است، نه شکست؛ اصلاح کنید و ادامه دهید.",
      "تایپ ده انگشتی چشمان شما را برای خواندن متن آزاد می‌کند.",
      "پیوستگی تمرین از شدت آن مهم‌تر است.",
      "موقع تایپ، شانه‌ها را رها نگه دارید و گردن را صاف.",
      "اگر خسته شدید، چند ثانیه دست‌ها را تکان دهید و بعد ادامه دهید.",
      "تمرین با متن‌های معنادار از حروف تصادفی مؤثرتر است.",
      "سرعت واقعی وقتی به دست می‌آید که دقت بالای نود و پنج درصد داشته باشید.",
      "هر جلسه‌ی کوتاه ده دقیقه‌ای بهتر از یک ساعت تمرین خسته‌کننده است."
    ],
    hard: [
      "پژوهش‌ها نشان داده‌اند تمرین آگاهانه می‌تواند سرعت تایپ را در هشت هفته به‌طور میانگین بیست درصد بالا ببرد.",
      "چیدمان استاندارد فارسی بر اساس نیازهای زبان فارسی طراحی شده و یادگیری آن سال‌ها به کارتان می‌آید.",
      "تایپیست‌های حرفه‌ای معمولاً سرعتی بین شصت تا نود کلمه در دقیقه با دقت بالای نود و پنج درصد حفظ می‌کنند.",
      "هنگام تایپ، مغز شما ضربه‌ی بعدی را پیش‌بینی می‌کند؛ تایپیست‌های کند منتظر تأیید بصری می‌مانند.",
      "ردیف خانه لنگر شماست: برجستگی روی کلیدهای ب و ت به اشاره‌ای‌ها کمک می‌کند بدون نگاه به جایگاه اصلی برگردند.",
      "در سال ۱۴۰۳، بسیاری از کارکنان دانش‌محور گفتند سرعت تایپ بر بهره‌وری روزانه‌شان اثر مستقیم دارد.",
      "تمرین کنید: پنج دقیقه تایمر بگذارید، پاراگرافی که دوست دارید تایپ کنید و سرعت و دقت خود را یادداشت کنید.",
      "بهترین چیدمان‌ها جابه‌جایی انگشتان را کم می‌کنند؛ چیدمان استاندارد فارسی برای تایپ راحت زبان فارسی طراحی شده.",
      "یادگیری تایپ ده انگشتی مانند یادگیری دوچرخه‌سواری است: در ابتدا سخت به نظر می‌رسد، اما پس از تسلط، دیگر فراموش نمی‌شود.",
      "برای افزایش سرعت، ابتدا عادت‌های غلط را اصلاح کنید؛ تایپ سریع با فرم دست اشتباه، مسیر اشتباهی است."
    ],
    words: [
      "و",
      "در",
      "به",
      "که",
      "این",
      "را",
      "با",
      "است",
      "برای",
      "آن",
      "یک",
      "خود",
      "تا",
      "کرد",
      "بر",
      "هم",
      "نیز",
      "گفت",
      "می",
      "شود",
      "بود",
      "داشت",
      "از",
      "اما",
      "دو",
      "یا",
      "پس",
      "اگر",
      "همه",
      "باید",
      "من",
      "ما",
      "آنها",
      "شد",
      "هست",
      "نبود",
      "حالا",
      "روز",
      "شب",
      "خوب",
      "بد",
      "بزرگ",
      "کوچک",
      "نوشتن",
      "خواندن",
      "کتاب",
      "خانه",
      "آب",
      "نان",
      "شب",
      "صبح",
      "عصر",
      "ماه",
      "سال",
      "کار",
      "دانش",
      "زندگی",
      "دوست",
      "عشق",
      "امید",
      "راه",
      "شهر",
      "روستا",
      "کوه",
      "دریا",
      "آسمان",
      "باران",
      "برف",
      "باد",
      "نور",
      "کتابخانه",
      "دانشگاه",
      "کامپیوتر",
      "اینترنت",
      "برنامه",
      "تمرین",
      "سرعت",
      "دقت"
    ]
  };
  function pickRandomFa(arr, count = 5) {
    const pool = [...arr];
    const out = [];
    const n = Math.min(count, pool.length);
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(idx, 1)[0]);
    }
    return out;
  }

  // data/sentences/en.js
  var EN_SENTENCES = {
    easy: [
      "The cat sat on the mat.",
      "A dog ran to the park.",
      "She can type very fast.",
      "He likes green apples.",
      "We go home at five.",
      "The sun is very warm.",
      "I see a big red bus.",
      "They play in the yard.",
      "My bag is on the desk.",
      "Please open the door.",
      "Birds fly in the sky.",
      "Water is clear and cold.",
      "I read a short book.",
      "The door is open now.",
      "She writes every day."
    ],
    medium: [
      "Practice makes perfect, but only if you focus on accuracy first.",
      "The keyboard is your instrument; learn every key without looking.",
      "Good typists keep their wrists floating and fingers curved.",
      "Speed follows accuracy — never the other way around.",
      "Set aside ten quiet minutes each day for deliberate practice.",
      "The quick brown fox jumps over the lazy dog near the river.",
      "Reading the text aloud in your head can help you type smoothly.",
      "Errors are feedback, not failures; correct them and keep going.",
      "Touch typing frees your eyes for the screen, not the keys.",
      "Consistency beats intensity when building muscle memory.",
      "Keep your shoulders relaxed and your back straight while typing.",
      "If your hands get tired, shake them out for a few seconds.",
      "Typing real sentences is more effective than random letter drills.",
      "True speed comes when accuracy stays above ninety-five percent.",
      "Ten focused minutes a day beats one exhausting hour once a week."
    ],
    hard: [
      "In 2023, researchers found that deliberate practice improved typing speed by an average of 27% over eight weeks.",
      "Modern keyboards still follow the QWERTY layout designed in the 1870s for mechanical typewriters — a compromise between jamming prevention and finger travel.",
      "Professional transcribers often sustain 80–100 WPM with accuracy above 98%, using specialized key mappings and years of targeted drills.",
      "When you type, your brain predicts the next keystroke; slow typists wait for visual confirmation, while experts rely on proprioception and pattern recognition.",
      "The home row is the anchor: F and J carry tactile bumps so your index fingers can re-center without looking, even after a long reach to the number row.",
      "In 2024, more than 60% of knowledge workers said typing speed affected their daily productivity.",
      "The best keyboard layouts minimize finger travel; QWERTY was designed for typewriters, not modern efficiency — yet it remains the global standard.",
      "Practice tip: set a timer for 5 minutes, type a paragraph you enjoy, and note your WPM and accuracy. Compare tomorrow's numbers with today's.",
      "Learning touch typing is like learning to ride a bicycle: it feels awkward at first, but once it clicks, the skill stays with you forever.",
      "To increase speed, first fix bad habits — typing fast with incorrect finger placement is a path to a permanent plateau."
    ],
    words: [
      "the",
      "be",
      "to",
      "of",
      "and",
      "a",
      "in",
      "that",
      "have",
      "I",
      "it",
      "for",
      "not",
      "on",
      "with",
      "he",
      "as",
      "you",
      "do",
      "at",
      "this",
      "but",
      "his",
      "by",
      "from",
      "they",
      "we",
      "say",
      "her",
      "she",
      "or",
      "an",
      "will",
      "my",
      "one",
      "all",
      "would",
      "there",
      "their",
      "what",
      "so",
      "up",
      "out",
      "if",
      "about",
      "who",
      "get",
      "which",
      "go",
      "me",
      "when",
      "make",
      "can",
      "like",
      "time",
      "no",
      "just",
      "him",
      "know",
      "take",
      "people",
      "into",
      "year",
      "your",
      "good",
      "some",
      "could",
      "them",
      "see",
      "other",
      "than",
      "then",
      "now",
      "look",
      "only",
      "come",
      "its",
      "over",
      "think",
      "also",
      "keyboard",
      "typing",
      "practice",
      "accuracy",
      "speed",
      "finger",
      "lesson",
      "master"
    ]
  };
  function pickRandom(arr, count = 5) {
    const pool = [...arr];
    const out = [];
    const n = Math.min(count, pool.length);
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(idx, 1)[0]);
    }
    return out;
  }

  // data/quotes.js
  var QUOTES = {
    fa: [
      "راه هزار فرسنگی با یک قدم آغاز می‌شود.",
      "دانش قدرت است و تمرین کلید مهارت.",
      "هر سفر بزرگ با یک گام کوچک شروع می‌شود.",
      "صبر تلخ است، اما میوه‌اش شیرین.",
      "آنچه می‌آموزیم انجام می‌دهیم؛ آنچه انجام می‌دهیم می‌شویم.",
      "بهترین زمان برای کاشتن یک درخت بیست سال پیش بود. دومین بهترین زمان، همین حالاست.",
      "اگر می‌خواهی دنیا را تغییر دهی، ابتدا بستر خودت را مرتب کن.",
      "موفقیت مجموعه تلاش‌های کوچک و تکرارشونده است.",
      "ذهن انسان مانند چتر است؛ وقتی باز می‌شود کار می‌کند.",
      "تفاوت میان انسان‌های موفق و ناموفق در اراده و پشتکار است.",
      "کتاب بهترین دوستی است که هرگز خیانت نمی‌کند.",
      "نوشتن، اندیشیدن بر روی کاغذ است."
    ],
    en: [
      "The only way to do great work is to love what you do.",
      "Simplicity is the ultimate sophistication.",
      "In the middle of difficulty lies opportunity.",
      "Well done is better than well said.",
      "The best time to plant a tree was twenty years ago. The second best time is now.",
      "Success is the sum of small efforts repeated day in and day out.",
      "Your mind is like a parachute — it works best when it is open.",
      "We are what we repeatedly do. Excellence is a habit.",
      "The journey of a thousand miles begins with a single step.",
      "Don't watch the clock; do what it does. Keep going.",
      "Quality is not an act, it is a habit.",
      "Everything you've ever wanted is on the other side of fear."
    ]
  };
  var CODE_SNIPPETS = {
    en: [
      "const sum = (a, b) => a + b;",
      "if (user.isActive) { login(user); }",
      "for (let i = 0; i < arr.length; i++) {",
      "return items.filter(x => x.id > 0);",
      "function greet(name) { return `Hi, ${name}`; }",
      "const [first, ...rest] = list;",
      "await fetch(url).then(r => r.json());",
      "class Player { constructor(n) { this.name = n; } }",
      "export default function App() {}",
      "let count = 0; count += 1;",
      "document.querySelector('#app').innerHTML = html;",
      "const map = new Map([['a', 1], ['b', 2]]);",
      "try { parse(data) } catch (e) { console.error(e); }",
      "arr.reduce((acc, n) => acc + n, 0);",
      "if (x !== null && typeof x === 'object') {}"
    ],
    fa: [
      "const sum = (a, b) => a + b;",
      "if (user.isActive) { login(user); }",
      "for (let i = 0; i < n; i++) {",
      "return items.filter(x => x.id > 0);",
      "function greet(name) { return name; }",
      "const [first, ...rest] = list;",
      "await fetch(url).then(r => r.json());",
      "let count = 0; count += 1;",
      "export default function App() {}",
      "try { parse(data) } catch (e) {}"
    ]
  };
  function pickRandomFrom(arr, n = 1) {
    const pool = [...arr];
    const out = [];
    const k = Math.min(n, pool.length);
    for (let i = 0; i < k; i++) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    return out;
  }

  // data/proverbs.js
  var FA_PROVERBS = [
    "از کوزه همان برون تراود که در اوست.",
    "هر که را بهر کاری ساختند.",
    "دانایی بهتر از توانایی است.",
    "آب که از سر گذشت، چه یک وجب چه صد وجب.",
    "نه هر که سر بتراشد، قلندری داند.",
    "کار نیکو کردن از پر کردن است.",
    "باد آورده را باد می‌برد.",
    "تربیت نااهل را، چون گردانیدن سنگ است.",
    "از ماست که بر ماست.",
    "خشت اول چون نهد معمار کج، تا ثریا می‌رود دیوار کج.",
    "دوست آن باشد که گیرد دست دوست.",
    "کبوتر با کبوتر، باز با باز.",
    "هر دستی نجات‌بخش نیست.",
    "گر صبر کنی زورقی سازم.",
    "ماهی را هر وقت از آب بگیری تازه است.",
    "یک دست صدا ندارد.",
    "دو نفر که با هم باشند، از یک نفر که تنهاست بهترند.",
    "کلاغ اگر قار می‌کرد، در قصر پادشاهان آشیانه می‌کرد.",
    "آدم تنها، خدا با اوست.",
    "نهال امروز، درخت فرداست.",
    "صبحانه را مثل پادشاه بخور، ناهار را مثل شاهزاده و شام را مثل گدا.",
    "آهسته آهسته، مورچه به لانه می‌رسد.",
    "سنگ بزرگ، نشانه نزدن است.",
    "آنچه آسان به دست آید، آسان از دست رود.",
    "به اندازه جیبت خرج کن، نه به اندازه چشمت.",
    "هر چه بکاری، همان را درو می‌کنی.",
    "آدم عاقل از یک سوراخ دو بار گزیده نمی‌شود.",
    "آب دریا را اگر نتوان کشید، هم به قدر تشنگی باید چشید.",
    "پیش از آنکه سخن بگویی، بیندیش.",
    "دوستی که در احتیاج شناخته شود، به از خویشان است."
  ];
  function pickProverbs(n = 2) {
    const pool = [...FA_PROVERBS];
    const out = [];
    const k = Math.min(n, pool.length);
    for (let i = 0; i < k; i++) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    return out;
  }

  // js/ui/practice.js
  function isPersianText(text) {
    if (!text) return false;
    const fa = (text.match(/[؀-ۿ]/g) || []).length;
    const latin = (text.match(/[A-Za-z]/g) || []).length;
    return fa > latin;
  }
  function resolveContentLang(source, practiceLang, text) {
    if (source === "code") return "en";
    if (source === "proverbs") return "fa";
    if (source === "custom" || source === "weak") {
      return isPersianText(text) ? "fa" : "en";
    }
    return practiceLang === "en" ? "en" : "fa";
  }
  function resolveContentDir(source, practiceLang, text) {
    const lang = resolveContentLang(source, practiceLang, text);
    return lang === "fa" ? "rtl" : "ltr";
  }
  function renderPractice(root) {
    const lang = state.lang;
    const L = (k) => t(lang, k);
    const s = state.settings;
    const dur0 = Number(s.practiceDuration) || 0;
    const sourceLabels = {
      sentences: L("sentences"),
      words: L("words"),
      random: L("randomChars"),
      quotes: lang === "fa" ? "نقل‌قول" : "Quotes",
      proverbs: "ضرب‌المثل",
      code: lang === "fa" ? "کد" : "Code",
      custom: lang === "fa" ? "متن دلخواه" : "Custom text"
    };
    const allSources = lang === "fa" ? ["sentences", "words", "random", "quotes", "proverbs", "code", "custom"] : ["sentences", "words", "random", "quotes", "code", "custom"];
    let initialSource = s.practiceSource || "sentences";
    if (!allSources.includes(initialSource)) initialSource = "sentences";
    root.innerHTML = `
    <div class="page page-practice fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("practice")}</h1>
          <p class="page-sub">${lang === "fa" ? "نوع تمرین را انتخاب کن؛ گزینه‌های غیرمرتبط خودکار مخفی می‌شوند" : "Pick a mode — unrelated options hide automatically"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <form class="practice-form card" id="practice-form">
        <div class="form-row">
          <label class="form-label">${lang === "fa" ? "نوع تمرین" : "Practice type"}</label>
          <div class="seg seg-wrap" data-group="practiceSource">
            ${allSources.map((v) => `
              <button type="button" class="seg-btn ${initialSource === v ? "is-active" : ""}" data-value="${v}">${sourceLabels[v]}</button>
            `).join("")}
          </div>
          <p class="field-hint" id="source-hint"></p>
        </div>

        <div class="form-row" id="custom-text-row" hidden>
          <label class="form-label" for="custom-text">${lang === "fa" ? "متن خودت را بنویس" : "Your text"}</label>
          <textarea id="custom-text" class="input textarea" rows="5"
            placeholder="${lang === "fa" ? "متن دلخواهت را اینجا بنویس…" : "Type or paste your text here…"}">${(s.customText || "").replace(/</g, "&lt;")}</textarea>
        </div>

        <div class="form-row" id="level-row">
          <label class="form-label">${L("level")}</label>
          <div class="seg" data-group="level">
            <button type="button" class="seg-btn ${(s.practiceLevel || "easy") === "easy" ? "is-active" : ""}" data-value="easy">${L("easy")}</button>
            <button type="button" class="seg-btn ${s.practiceLevel === "medium" ? "is-active" : ""}" data-value="medium">${L("medium")}</button>
            <button type="button" class="seg-btn ${s.practiceLevel === "hard" ? "is-active" : ""}" data-value="hard">${L("hard")}</button>
          </div>
        </div>

        <div class="form-row" id="length-row">
          <label class="form-label">${L("length")}</label>
          <div class="seg" data-group="practiceLength">
            <button type="button" class="seg-btn ${s.practiceLength === "short" ? "is-active" : ""}" data-value="short">${L("short")}</button>
            <button type="button" class="seg-btn ${!s.practiceLength || s.practiceLength === "medium" ? "is-active" : ""}" data-value="medium">${L("medium")}</button>
            <button type="button" class="seg-btn ${s.practiceLength === "long" ? "is-active" : ""}" data-value="long">${L("long")}</button>
          </div>
          <p class="field-hint" id="length-hint"></p>
        </div>

        <div class="form-row" id="duration-row" hidden>
          <label class="form-label">${L("duration")}</label>
          <div class="seg" data-group="practiceDuration">
            <button type="button" class="seg-btn ${dur0 === 30 ? "is-active" : ""}" data-value="30">30s</button>
            <button type="button" class="seg-btn ${!dur0 || dur0 === 60 ? "is-active" : ""}" data-value="60">1 ${L("minute")}</button>
            <button type="button" class="seg-btn ${dur0 === 120 ? "is-active" : ""}" data-value="120">2 ${L("minute")}</button>
            <button type="button" class="seg-btn ${dur0 === 300 ? "is-active" : ""}" data-value="300">5 ${L("minute")}</button>
          </div>
          <p class="field-hint" id="duration-hint">${lang === "fa" ? "فقط در حالت چالش زمانی" : "Timed challenge only"}</p>
        </div>

        <div class="form-row">
          <label class="form-label">${lang === "fa" ? "حالت جلسه" : "Session style"}</label>
          <div class="session-style-grid" data-group="sessionMode">
            <button type="button" class="style-card is-active" data-value="normal">
              <strong>${lang === "fa" ? "تمرین معمولی" : "Standard"}</strong>
              <span>${lang === "fa" ? "صفحه‌کلید مجازی، آمار زنده و راهنمای انگشت" : "Virtual keyboard, live stats, finger guide"}</span>
            </button>
            <button type="button" class="style-card" data-value="zen">
              <strong>${lang === "fa" ? "تمرکز محض" : "Focus / Zen"}</strong>
              <span>${lang === "fa" ? "فقط متن — بدون صفحه‌کلید، بدون آمار، حواس‌پرتی صفر" : "Text only — no keyboard, no stats, zero distraction"}</span>
            </button>
            <button type="button" class="style-card" data-value="boss">
              <strong>${lang === "fa" ? "چالش زمانی" : "Timed challenge"}</strong>
              <span>${lang === "fa" ? "تایمر معکوس — قبل از پایان وقت متن را تمام کن" : "Countdown — finish before time runs out"}</span>
            </button>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary btn-lg">${L("start")}</button>
        </div>
      </form>
    </div>
  `;
    const form = root.querySelector("#practice-form");
    const customRow = root.querySelector("#custom-text-row");
    const levelRow = root.querySelector("#level-row");
    const lengthRow = root.querySelector("#length-row");
    const durationRow = root.querySelector("#duration-row");
    const sourceHint = root.querySelector("#source-hint");
    const lengthHint = root.querySelector("#length-hint");
    const draft = {
      practiceLang: lang,
      // follows sidebar language track — no separate picker
      level: s.practiceLevel || "easy",
      practiceSource: initialSource,
      practiceLength: s.practiceLength || "medium",
      practiceDuration: dur0 || 60,
      sessionMode: "normal"
    };
    const HINTS = {
      fa: {
        sentences: "جمله‌های معنادار از بانک متن",
        words: "کلمات پرتکرار",
        random: "حروف تصادفی برای تمرین جایگاه انگشت",
        quotes: "نقل‌قول‌های کوتاه و الهام‌بخش",
        proverbs: "ضرب‌المثل‌های کهن فارسی",
        code: "قطعه‌کد — چیدمان کیبورد انگلیسی و LTR",
        custom: "متن دلخواه خودت را تایپ کن",
        lengthSentences: "تعداد جمله‌ها",
        lengthWords: "تعداد کلمات",
        lengthGeneric: "تعداد آیتم‌ها"
      },
      en: {
        sentences: "Meaningful sentences from the bank",
        words: "High-frequency words",
        random: "Random letters for finger drills",
        quotes: "Short inspirational quotes",
        proverbs: "Classic Persian proverbs",
        code: "Code snippets — English layout, LTR",
        custom: "Type your own text",
        lengthSentences: "Number of sentences",
        lengthWords: "Number of words",
        lengthGeneric: "Number of items"
      }
    };
    function syncFieldVisibility() {
      const src = draft.practiceSource;
      const H = HINTS[lang] || HINTS.en;
      if (customRow) customRow.hidden = src !== "custom";
      if (levelRow) levelRow.hidden = !["sentences", "words"].includes(src);
      if (lengthRow) lengthRow.hidden = src === "custom";
      if (durationRow) durationRow.hidden = draft.sessionMode !== "boss";
      if (sourceHint) sourceHint.textContent = H[src] || "";
      if (lengthHint && lengthRow && !lengthRow.hidden) {
        if (src === "sentences") lengthHint.textContent = H.lengthSentences;
        else if (src === "words") lengthHint.textContent = H.lengthWords;
        else lengthHint.textContent = H.lengthGeneric;
      }
    }
    syncFieldVisibility();
    root.querySelectorAll(".seg[data-group]").forEach((seg) => {
      seg.addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        seg.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const group = seg.dataset.group;
        let val = btn.dataset.value;
        if (group === "practiceDuration") val = Number(val);
        draft[group] = val;
        if (group === "practiceSource") syncFieldVisibility();
      });
    });
    const styleGrid = root.querySelector('[data-group="sessionMode"]');
    styleGrid?.addEventListener("click", (e) => {
      const btn = e.target.closest(".style-card");
      if (!btn) return;
      styleGrid.querySelectorAll(".style-card").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      draft.sessionMode = btn.dataset.value;
      syncFieldVisibility();
    });
    root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let source = draft.practiceSource;
      const weakRequested = typeof sessionStorage !== "undefined" && sessionStorage.getItem("ttt.weakDrill") === "1" && sessionStorage.getItem("ttt.weakChars");
      if (weakRequested) {
        source = "weak";
        sessionStorage.removeItem("ttt.weakDrill");
      }
      if (draft.practiceSource === "custom") {
        const custom = root.querySelector("#custom-text")?.value?.replace(/\r\n/g, "\n").trim();
        if (!custom) {
          root.querySelector("#custom-text")?.focus();
          return;
        }
        updateSettings({ customText: custom });
      }
      let dur = draft.practiceDuration;
      if (draft.sessionMode === "boss") {
        if (!dur) dur = 60;
      } else {
        dur = 0;
      }
      updateSettings({
        practiceLevel: draft.level,
        practiceSource: draft.practiceSource,
        practiceLength: draft.practiceLength,
        practiceDuration: draft.practiceDuration
      });
      navigate("practice-run", [
        draft.practiceLang,
        draft.level,
        source,
        draft.practiceLength,
        String(dur),
        draft.sessionMode
      ]);
    });
  }
  function buildPracticeText({ practiceLang, level, practiceSource, practiceLength, customText }) {
    if (practiceSource === "weak") {
      const weak = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("ttt.weakChars") : null;
      if (weak) {
        const chars = Array.from(weak).filter((c) => c && c !== " ");
        if (chars.length) {
          const len = practiceLength === "short" ? 40 : practiceLength === "long" ? 120 : 70;
          let out = "";
          for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
          if (typeof sessionStorage !== "undefined") sessionStorage.removeItem("ttt.weakChars");
          return out;
        }
      }
      practiceSource = "sentences";
    }
    if (practiceSource === "custom") {
      const custom = customText || state.settings.customText || "";
      if (custom.trim()) return custom.replace(/\r\n/g, "\n").trim();
      practiceSource = "sentences";
    }
    if (practiceSource === "quotes") {
      const bank2 = QUOTES[practiceLang] || QUOTES.en;
      const n2 = practiceLength === "short" ? 1 : practiceLength === "long" ? 4 : 2;
      return pickRandomFrom(bank2, n2).join(" ");
    }
    if (practiceSource === "proverbs") {
      const n2 = practiceLength === "short" ? 1 : practiceLength === "long" ? 4 : 2;
      return pickProverbs(n2).join(" ");
    }
    if (practiceSource === "code") {
      const bank2 = CODE_SNIPPETS.en;
      const n2 = practiceLength === "short" ? 2 : practiceLength === "long" ? 8 : 4;
      return pickRandomFrom(bank2, n2).join("\n");
    }
    const bank = practiceLang === "fa" ? FA_SENTENCES : EN_SENTENCES;
    const pick = practiceLang === "fa" ? pickRandomFa : pickRandom;
    const lengthMap = { short: 1, medium: 3, long: 6 };
    const n = lengthMap[practiceLength] || 3;
    if (practiceSource === "words") {
      const wLen = practiceLength === "short" ? 8 : practiceLength === "long" ? 24 : 12;
      return pick(bank.words, wLen).join(" ");
    }
    if (practiceSource === "random") {
      const pool2 = practiceLang === "fa" ? "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو" : "abcdefghijklmnopqrstuvwxyz";
      const len = practiceLength === "short" ? 40 : practiceLength === "long" ? 160 : 80;
      let out = "";
      for (let i = 0; i < len; i++) out += pool2[Math.floor(Math.random() * pool2.length)];
      return out;
    }
    const pool = bank[level] || bank.easy;
    return pick(pool, n).join(" ");
  }

  // js/typing-engine.js
  var TypingEngine = class {
    /**
     * @param {object} opts
     * @param {string} opts.text
     * @param {'fa'|'en'} opts.lang
     * @param {boolean} [opts.caseSensitive]
     * @param {boolean} [opts.soundEnabled]
     * @param {boolean} [opts.strictMode] — wrong key does not advance
     * @param {number} [opts.minWpm]
     * @param {number} [opts.minAccuracy]
     * @param {number} [opts.timeLimitMs]
     * @param {(state) => void} [opts.onUpdate]
     * @param {(result) => void} [opts.onComplete]
     */
    constructor(opts) {
      this.text = opts.text || "";
      this.chars = Array.from(this.text);
      this.lang = opts.lang || "en";
      this.caseSensitive = opts.caseSensitive !== false;
      this.soundEnabled = opts.soundEnabled !== false;
      this.strictMode = opts.strictMode === true;
      this.minWpm = opts.minWpm || 0;
      this.minAccuracy = opts.minAccuracy || 0;
      this.timeLimitMs = opts.timeLimitMs || 0;
      this.onUpdate = opts.onUpdate || (() => {
      });
      this.onComplete = opts.onComplete || (() => {
      });
      this.status = this.chars.map(() => "pending");
      this.index = 0;
      this.correctChars = 0;
      this.totalTyped = 0;
      this.incorrectChars = 0;
      this.correctedErrors = 0;
      this.rejectedKeys = 0;
      this.keyStats = {};
      this.startedAt = null;
      this.endedAt = null;
      this.finished = false;
      this.destroyed = false;
      this._raf = null;
    }
    get progressRatio() {
      if (!this.chars.length) return 0;
      return this.index / this.chars.length;
    }
    get remainingMs() {
      if (!this.timeLimitMs || !this.startedAt) return this.timeLimitMs || 0;
      return Math.max(0, this.timeLimitMs - (performance.now() - this.startedAt));
    }
    get elapsedMs() {
      if (this.startedAt == null) return 0;
      const end = this.endedAt != null ? this.endedAt : performance.now();
      return Math.max(0, end - this.startedAt);
    }
    get nextChar() {
      return this.chars[this.index] || null;
    }
    start() {
      this.startedAt = performance.now();
      this._tick();
      this._emit();
    }
    abort() {
      this._stopRaf();
      if (!this.finished) {
        this.finished = true;
        this.endedAt = performance.now();
        this._emit();
      }
    }
    destroy() {
      this.destroyed = true;
      this._stopRaf();
    }
    _bumpKey(ch, ok) {
      if (!ch || ch === " ") return;
      const k = this.keyStats[ch] || (this.keyStats[ch] = { hits: 0, misses: 0 });
      if (ok) k.hits += 1;
      else k.misses += 1;
    }
    _norm(ch) {
      if (ch == null) return ch;
      let out = ch;
      if (!this.caseSensitive && this.lang === "en") out = out.toLowerCase();
      const code = out.codePointAt(0);
      if (code === 8203 || code === 8204 || code === 8205 || code === 8206 || code === 8207 || code === 65279 || code === 1600) return "";
      if (code === 160 || code === 5760 || code >= 8192 && code <= 8202 || code === 8239 || code === 8287 || code === 12288 || out === "	") return " ";
      out = out.replace(/ـ/g, "");
      out = out.replace(/ي/g, "ی").replace(/ى/g, "ی");
      out = out.replace(/ك/g, "ک");
      return out;
    }
    handleKey(key) {
      if (this.finished) return { handled: false };
      if (this.startedAt == null) this.start();
      if (key === "Escape") {
        this.abort();
        return { handled: true, aborted: true };
      }
      if (key === "Backspace") {
        if (this.index <= 0) return { handled: true, noop: true };
        this.index -= 1;
        if (this.status[this.index] === "correct") {
          this.correctChars = Math.max(0, this.correctChars - 1);
          this.correctedErrors += 1;
        } else if (this.status[this.index] === "incorrect") {
          this.incorrectChars = Math.max(0, this.incorrectChars - 1);
        }
        this.totalTyped = Math.max(0, this.totalTyped - 1);
        this.status[this.index] = "pending";
        this._emit();
        return { handled: true, backspace: true };
      }
      if (key === "Enter") {
        return this._typeChar("\n");
      }
      if (key == null || key.length !== 1) return { handled: false };
      return this._typeChar(key);
    }
    _typeChar(key) {
      if (this.finished) return { handled: false };
      if (this.startedAt == null) this.start();
      if (this.index >= this.chars.length) return { handled: true, done: true };
      while (this.index < this.chars.length) {
        const peek = this._norm(this.chars[this.index]);
        if (peek === "" && this.chars[this.index] !== " ") {
          this.status[this.index] = "correct";
          this.index += 1;
          continue;
        }
        break;
      }
      if (this.index >= this.chars.length) {
        this._finish();
        return { handled: true, ok: true, completed: true };
      }
      const expected = this._norm(this.chars[this.index]);
      const actual = this._norm(key);
      const ok = expected === actual || expected === " " && actual === " ";
      if (this.strictMode && !ok) {
        this.rejectedKeys += 1;
        this.incorrectChars += 1;
        this._bumpKey(expected, false);
        if (this.soundEnabled) playKeyWrong();
        this._emit({ rejected: true, expected: this.chars[this.index] });
        return { handled: true, ok: false, rejected: true };
      }
      this.totalTyped += 1;
      if (ok) {
        this.status[this.index] = "correct";
        this.correctChars += 1;
        this._bumpKey(expected, true);
        if (this.soundEnabled) playKeyCorrect();
      } else {
        this.status[this.index] = "incorrect";
        this.incorrectChars += 1;
        this._bumpKey(expected, false);
        if (this.soundEnabled) playKeyWrong();
      }
      this.index += 1;
      if (this.index >= this.chars.length) {
        this._finish();
        return { handled: true, ok, completed: true };
      }
      this._emit();
      return { handled: true, ok };
    }
    _tick() {
      if (this.finished || this.destroyed) return;
      if (this.timeLimitMs > 0 && this.startedAt && performance.now() - this.startedAt >= this.timeLimitMs) {
        this._finish(true);
        return;
      }
      this._emit();
      this._raf = requestAnimationFrame(() => this._tick());
    }
    _stopRaf() {
      if (this._raf != null) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
    }
    _buildResult(timedOut = false) {
      const attempts = this.totalTyped + this.rejectedKeys;
      const metrics = computeMetrics({
        correctChars: this.correctChars,
        totalTyped: Math.max(attempts, this.totalTyped),
        incorrectChars: this.incorrectChars,
        durationMs: this.elapsedMs,
        correctedErrors: this.correctedErrors
      });
      const stars = starsFor({
        wpm: metrics.wpm,
        accuracy: metrics.accuracy,
        minWpm: this.minWpm,
        minAccuracy: this.minAccuracy
      });
      const completed = this.progressRatio >= 0.999;
      let passed;
      if (this.timeLimitMs > 0) {
        const minProgress = this.strictMode ? 0.4 : 0.25;
        const minAcc = Math.max(this.minAccuracy, 85);
        passed = this.progressRatio >= minProgress && metrics.accuracy >= minAcc && metrics.wpm >= this.minWpm && this.correctChars > 0;
      } else {
        passed = completed && passedStage({
          wpm: metrics.wpm,
          accuracy: metrics.accuracy,
          minWpm: this.minWpm,
          minAccuracy: this.minAccuracy
        });
      }
      const errorChars = Object.entries(this.keyStats).filter(([, v]) => v.misses > 0).sort((a, b) => b[1].misses - a[1].misses).slice(0, 8).map(([ch, v]) => ({ ch, misses: v.misses, hits: v.hits }));
      return {
        ...metrics,
        stars: passed ? stars : 0,
        passed,
        timedOut,
        completed,
        progress: Math.round(this.progressRatio * 1e3) / 10,
        lang: this.lang,
        textLength: this.chars.length,
        rejectedKeys: this.rejectedKeys,
        keyStats: this.keyStats,
        errorChars
      };
    }
    _finish(timedOut = false) {
      this._stopRaf();
      this.finished = true;
      this.endedAt = performance.now();
      const result = this._buildResult(timedOut);
      if (this.soundEnabled && result.passed) playStageComplete();
      this._emit();
      this.onComplete(result);
    }
    _emit(extra = null) {
      if (this.destroyed) return;
      const result = this._buildResult(false);
      this.onUpdate({
        index: this.index,
        status: this.status,
        chars: this.chars,
        remainingMs: this.remainingMs,
        progress: this.progressRatio,
        result,
        finished: this.finished,
        nextChar: this.nextChar,
        ...extra || {}
      });
    }
  };

  // js/data/keyboard-layouts.js
  var FINGER = {
    L_PINKY: "l-pinky",
    L_RING: "l-ring",
    L_MIDDLE: "l-middle",
    L_INDEX: "l-index",
    L_THUMB: "l-thumb",
    R_THUMB: "r-thumb",
    R_INDEX: "r-index",
    R_MIDDLE: "r-middle",
    R_RING: "r-ring",
    R_PINKY: "r-pinky"
  };
  var FINGER_LABELS = {
    fa: {
      [FINGER.L_PINKY]: "انگشت کوچک چپ",
      [FINGER.L_RING]: "انگشت حلقه چپ",
      [FINGER.L_MIDDLE]: "انگشت میانی چپ",
      [FINGER.L_INDEX]: "انگشت اشاره چپ",
      [FINGER.L_THUMB]: "شست چپ",
      [FINGER.R_THUMB]: "شست راست",
      [FINGER.R_INDEX]: "انگشت اشاره راست",
      [FINGER.R_MIDDLE]: "انگشت میانی راست",
      [FINGER.R_RING]: "انگشت حلقه راست",
      [FINGER.R_PINKY]: "انگشت کوچک راست"
    },
    en: {
      [FINGER.L_PINKY]: "Left pinky",
      [FINGER.L_RING]: "Left ring",
      [FINGER.L_MIDDLE]: "Left middle",
      [FINGER.L_INDEX]: "Left index",
      [FINGER.L_THUMB]: "Left thumb",
      [FINGER.R_THUMB]: "Right thumb",
      [FINGER.R_INDEX]: "Right index",
      [FINGER.R_MIDDLE]: "Right middle",
      [FINGER.R_RING]: "Right ring",
      [FINGER.R_PINKY]: "Right pinky"
    }
  };
  var FINGER_COLOR = {
    [FINGER.L_PINKY]: "var(--finger-l-pinky)",
    [FINGER.L_RING]: "var(--finger-l-ring)",
    [FINGER.L_MIDDLE]: "var(--finger-l-middle)",
    [FINGER.L_INDEX]: "var(--finger-l-index)",
    [FINGER.L_THUMB]: "var(--finger-l-thumb)",
    [FINGER.R_THUMB]: "var(--finger-r-thumb)",
    [FINGER.R_INDEX]: "var(--finger-r-index)",
    [FINGER.R_MIDDLE]: "var(--finger-r-middle)",
    [FINGER.R_RING]: "var(--finger-r-ring)",
    [FINGER.R_PINKY]: "var(--finger-r-pinky)"
  };
  var CODE_FINGER = {
    Backquote: FINGER.L_PINKY,
    Digit1: FINGER.L_PINKY,
    Digit2: FINGER.L_RING,
    Digit3: FINGER.L_MIDDLE,
    Digit4: FINGER.L_INDEX,
    Digit5: FINGER.L_INDEX,
    Digit6: FINGER.R_INDEX,
    Digit7: FINGER.R_INDEX,
    Digit8: FINGER.R_MIDDLE,
    Digit9: FINGER.R_RING,
    Digit0: FINGER.R_PINKY,
    Minus: FINGER.R_PINKY,
    Equal: FINGER.R_PINKY,
    KeyQ: FINGER.L_PINKY,
    KeyW: FINGER.L_RING,
    KeyE: FINGER.L_MIDDLE,
    KeyR: FINGER.L_INDEX,
    KeyT: FINGER.L_INDEX,
    KeyY: FINGER.R_INDEX,
    KeyU: FINGER.R_INDEX,
    KeyI: FINGER.R_MIDDLE,
    KeyO: FINGER.R_RING,
    KeyP: FINGER.R_PINKY,
    BracketLeft: FINGER.R_PINKY,
    BracketRight: FINGER.R_PINKY,
    Backslash: FINGER.R_PINKY,
    KeyA: FINGER.L_PINKY,
    KeyS: FINGER.L_RING,
    KeyD: FINGER.L_MIDDLE,
    KeyF: FINGER.L_INDEX,
    KeyG: FINGER.L_INDEX,
    KeyH: FINGER.R_INDEX,
    KeyJ: FINGER.R_INDEX,
    KeyK: FINGER.R_MIDDLE,
    KeyL: FINGER.R_RING,
    Semicolon: FINGER.R_PINKY,
    Quote: FINGER.R_PINKY,
    KeyZ: FINGER.L_PINKY,
    KeyX: FINGER.L_RING,
    KeyC: FINGER.L_MIDDLE,
    KeyV: FINGER.L_INDEX,
    KeyB: FINGER.L_INDEX,
    KeyN: FINGER.R_INDEX,
    KeyM: FINGER.R_INDEX,
    Comma: FINGER.R_MIDDLE,
    Period: FINGER.R_RING,
    Slash: FINGER.R_PINKY,
    Space: FINGER.R_THUMB
  };
  var PHYSICAL_ROWS = [
    [
      { code: "Backquote", labels: { en: ["`", "~"], fa: ["÷", "ُ"] } },
      { code: "Digit1", labels: { en: ["1", "!"], fa: ["۱", "!"] } },
      { code: "Digit2", labels: { en: ["2", "@"], fa: ["۲", "٬"] } },
      { code: "Digit3", labels: { en: ["3", "#"], fa: ["۳", "٫"] } },
      { code: "Digit4", labels: { en: ["4", "$"], fa: ["۴", "﷼"] } },
      { code: "Digit5", labels: { en: ["5", "%"], fa: ["۵", "٪"] } },
      { code: "Digit6", labels: { en: ["6", "^"], fa: ["۶", "×"] } },
      { code: "Digit7", labels: { en: ["7", "&"], fa: ["۷", "،"] } },
      { code: "Digit8", labels: { en: ["8", "*"], fa: ["۸", "*"] } },
      { code: "Digit9", labels: { en: ["9", "("], fa: ["۹", ")"] } },
      { code: "Digit0", labels: { en: ["0", ")"], fa: ["۰", "("] } },
      { code: "Minus", labels: { en: ["-", "_"], fa: ["-", "_"] } },
      { code: "Equal", labels: { en: ["=", "+"], fa: ["=", "+"] } }
    ],
    [
      { code: "KeyQ", labels: { en: ["q", "Q"], fa: ["ض", "ْ"] } },
      { code: "KeyW", labels: { en: ["w", "W"], fa: ["ص", "ٌ"] } },
      { code: "KeyE", labels: { en: ["e", "E"], fa: ["ث", "ٍ"] } },
      { code: "KeyR", labels: { en: ["r", "R"], fa: ["ق", "َ"] } },
      { code: "KeyT", labels: { en: ["t", "T"], fa: ["ف", "ُ"] } },
      { code: "KeyY", labels: { en: ["y", "Y"], fa: ["غ", "ِ"] } },
      { code: "KeyU", labels: { en: ["u", "U"], fa: ["ع", "ّ"] } },
      { code: "KeyI", labels: { en: ["i", "I"], fa: ["ه", "ْ"] } },
      { code: "KeyO", labels: { en: ["o", "O"], fa: ["خ", "ٔ"] } },
      { code: "KeyP", labels: { en: ["p", "P"], fa: ["ح", "ٰ"] } },
      { code: "BracketLeft", labels: { en: ["[", "{"], fa: ["ج", ""] } },
      { code: "BracketRight", labels: { en: ["]", "}"], fa: ["چ", ""] } },
      { code: "Backslash", labels: { en: ["\\", "|"], fa: ["\\", "|"] }, wide: true }
    ],
    [
      { code: "KeyA", labels: { en: ["a", "A"], fa: ["ش", "ً"] } },
      { code: "KeyS", labels: { en: ["s", "S"], fa: ["س", "ء"] } },
      { code: "KeyD", labels: { en: ["d", "D"], fa: ["ی", "ي"] } },
      { code: "KeyF", labels: { en: ["f", "F"], fa: ["ب", ""] } },
      { code: "KeyG", labels: { en: ["g", "G"], fa: ["ل", ""] } },
      { code: "KeyH", labels: { en: ["h", "H"], fa: ["ا", "آ"] } },
      { code: "KeyJ", labels: { en: ["j", "J"], fa: ["ت", ""] } },
      { code: "KeyK", labels: { en: ["k", "K"], fa: ["ن", ""] } },
      { code: "KeyL", labels: { en: ["l", "L"], fa: ["م", ""] } },
      { code: "Semicolon", labels: { en: [";", ":"], fa: ["ک", ""] } },
      { code: "Quote", labels: { en: ["'", '"'], fa: ["گ", ""] } }
    ],
    [
      { code: "KeyZ", labels: { en: ["z", "Z"], fa: ["ظ", ""] } },
      { code: "KeyX", labels: { en: ["x", "X"], fa: ["ط", ""] } },
      { code: "KeyC", labels: { en: ["c", "C"], fa: ["ز", "ژ"] } },
      { code: "KeyV", labels: { en: ["v", "V"], fa: ["ر", ""] } },
      { code: "KeyB", labels: { en: ["b", "B"], fa: ["ذ", ""] } },
      { code: "KeyN", labels: { en: ["n", "N"], fa: ["د", ""] } },
      { code: "KeyM", labels: { en: ["m", "M"], fa: ["پ", ""] } },
      { code: "Comma", labels: { en: [",", "<"], fa: ["و", ""] } },
      { code: "Period", labels: { en: [".", ">"], fa: [".", ""] } },
      { code: "Slash", labels: { en: ["/", "?"], fa: ["/", "؟"] } }
    ],
    [
      { code: "Space", labels: { en: ["", ""], fa: ["", ""] }, space: true }
    ]
  ];
  var CHAR_TO_CODE_EN = {
    "`": "Backquote",
    "~": "Backquote",
    "1": "Digit1",
    "!": "Digit1",
    "2": "Digit2",
    "@": "Digit2",
    "3": "Digit3",
    "#": "Digit3",
    "4": "Digit4",
    "$": "Digit4",
    "5": "Digit5",
    "%": "Digit5",
    "6": "Digit6",
    "^": "Digit6",
    "7": "Digit7",
    "&": "Digit7",
    "8": "Digit8",
    "*": "Digit8",
    "9": "Digit9",
    "(": "Digit9",
    "0": "Digit0",
    ")": "Digit0",
    "-": "Minus",
    "_": "Minus",
    "=": "Equal",
    "+": "Equal",
    q: "KeyQ",
    w: "KeyW",
    e: "KeyE",
    r: "KeyR",
    t: "KeyT",
    y: "KeyY",
    u: "KeyU",
    i: "KeyI",
    o: "KeyO",
    p: "KeyP",
    "[": "BracketLeft",
    "{": "BracketLeft",
    "]": "BracketRight",
    "}": "BracketRight",
    "\\": "Backslash",
    "|": "Backslash",
    a: "KeyA",
    s: "KeyS",
    d: "KeyD",
    f: "KeyF",
    g: "KeyG",
    h: "KeyH",
    j: "KeyJ",
    k: "KeyK",
    l: "KeyL",
    ";": "Semicolon",
    "'": "Quote",
    '"': "Quote",
    z: "KeyZ",
    x: "KeyX",
    c: "KeyC",
    v: "KeyV",
    b: "KeyB",
    n: "KeyN",
    m: "KeyM",
    ",": "Comma",
    "<": "Comma",
    ".": "Period",
    ">": "Period",
    "/": "Slash",
    "?": "Slash",
    " ": "Space"
  };
  var CHAR_TO_CODE_FA = {
    "÷": "Backquote",
    "ُ": "Backquote",
    "1": "Digit1",
    "۱": "Digit1",
    "!": "Digit1",
    "2": "Digit2",
    "۲": "Digit2",
    "٬": "Digit2",
    "3": "Digit3",
    "۳": "Digit3",
    "٫": "Digit3",
    "4": "Digit4",
    "۴": "Digit4",
    "﷼": "Digit4",
    "5": "Digit5",
    "۵": "Digit5",
    "٪": "Digit5",
    "6": "Digit6",
    "۶": "Digit6",
    "×": "Digit6",
    "7": "Digit7",
    "۷": "Digit7",
    "،": "Digit7",
    "8": "Digit8",
    "۸": "Digit8",
    "*": "Digit8",
    "9": "Digit9",
    "۹": "Digit9",
    ")": "Digit9",
    "0": "Digit0",
    "۰": "Digit0",
    "(": "Digit0",
    "-": "Minus",
    "_": "Minus",
    "=": "Equal",
    "+": "Equal",
    ض: "KeyQ",
    ص: "KeyW",
    ث: "KeyE",
    ق: "KeyR",
    ف: "KeyT",
    غ: "KeyY",
    ع: "KeyU",
    ه: "KeyI",
    خ: "KeyO",
    ح: "KeyP",
    ج: "BracketLeft",
    چ: "BracketRight",
    "\\": "Backslash",
    "|": "Backslash",
    ش: "KeyA",
    س: "KeyS",
    ی: "KeyD",
    ي: "KeyD",
    ب: "KeyF",
    ل: "KeyG",
    ا: "KeyH",
    آ: "KeyH",
    ت: "KeyJ",
    ن: "KeyK",
    م: "KeyL",
    ک: "Semicolon",
    گ: "Quote",
    ظ: "KeyZ",
    ط: "KeyX",
    ز: "KeyC",
    ژ: "KeyC",
    ر: "KeyV",
    ذ: "KeyB",
    د: "KeyN",
    پ: "KeyM",
    و: "Comma",
    ".": "Period",
    "/": "Slash",
    "؟": "Slash",
    " ": "Space"
  };
  function charToCode(char, lang) {
    if (!char) return null;
    if (char === " ") return "Space";
    const map = lang === "fa" ? CHAR_TO_CODE_FA : CHAR_TO_CODE_EN;
    if (map[char]) return map[char];
    const lower = char.toLowerCase();
    if (map[lower]) return map[lower];
    if (CHAR_TO_CODE_EN[lower]) return CHAR_TO_CODE_EN[lower];
    return null;
  }
  function fingerForChar(char, lang) {
    const code = charToCode(char, lang);
    if (!code) return null;
    return CODE_FINGER[code] || null;
  }
  function needsShift(char, lang) {
    if (!char || char.length === 0) return false;
    if (lang === "en") {
      if (/[A-Z]/.test(char)) return true;
      if (/[!@#$%^&*()_+{}|:"<>?~]/.test(char)) return true;
      return false;
    }
    const shiftedFa = "ٌٍَُِّْٰءئؤ،؛؟ـ«»ۀٔژٓ";
    return shiftedFa.includes(char);
  }

  // js/ui/keyboard.js
  var LEFT_FINGERS = [FINGER.L_PINKY, FINGER.L_RING, FINGER.L_MIDDLE, FINGER.L_INDEX, FINGER.L_THUMB];
  var RIGHT_FINGERS = [FINGER.R_THUMB, FINGER.R_INDEX, FINGER.R_MIDDLE, FINGER.R_RING, FINGER.R_PINKY];
  function fingerTipPositions(hand) {
    if (hand === "left") {
      return [
        { x: 18, h: 52 },
        // pinky
        { x: 38, h: 68 },
        // ring
        { x: 58, h: 74 },
        // middle
        { x: 78, h: 68 },
        // index
        { x: 100, h: 36, thumb: true }
        // thumb
      ];
    }
    return [
      { x: 100, h: 36, thumb: true },
      { x: 78, h: 68 },
      { x: 58, h: 74 },
      { x: 38, h: 68 },
      { x: 18, h: 52 }
    ];
  }
  function handSvg(hand, activeFinger) {
    const fingers = hand === "left" ? LEFT_FINGERS : RIGHT_FINGERS;
    const tips = fingerTipPositions(hand);
    const palmY = 100;
    const baseX = hand === "left" ? 10 : 10;
    let fingerEls = "";
    fingers.forEach((fid, i) => {
      const tip = tips[i];
      const color = FINGER_COLOR[fid];
      const isActive = activeFinger === fid;
      const w = tip.thumb ? 22 : 16;
      const h = tip.h;
      const x = baseX + tip.x - w / 2;
      const y = palmY - h;
      const lift = isActive ? -6 : 0;
      const opacity = activeFinger && !isActive ? 0.35 : 1;
      fingerEls += `
      <rect
        class="hfinger ${isActive ? "is-active" : ""}"
        data-finger="${fid}"
        x="${x}" y="${y + lift}" width="${w}" height="${h}"
        rx="${w / 2}"
        fill="${color}"
        opacity="${opacity}"
      />
    `;
      if (isActive) {
        fingerEls += `
        <circle class="hpulse" cx="${x + w / 2}" cy="${y + lift + 8}" r="6" fill="${color}" />
      `;
      }
    });
    const label = hand === "left" ? "L" : "R";
    return `
    <svg class="hand-svg" viewBox="0 0 130 130" aria-hidden="true">
      <!-- palm -->
      <rect x="${hand === "left" ? 12 : 18}" y="${palmY - 4}" width="100" height="42" rx="16"
        fill="var(--surface-3)" stroke="var(--border)" stroke-width="1.5" opacity="${activeFinger ? 1 : 0.55}" />
      <!-- wrist -->
      <rect x="${hand === "left" ? 30 : 36}" y="${palmY + 34}" width="64" height="18" rx="8"
        fill="var(--surface-2)" stroke="var(--border)" stroke-width="1" opacity="0.5" />
      ${fingerEls}
      <text x="65" y="128" text-anchor="middle" font-size="10" fill="var(--ink-faint)" font-family="system-ui">${label}</text>
    </svg>
  `;
  }
  function renderHands(container, { nextChar = null, lang = "fa" } = {}) {
    if (!container) return;
    const finger = nextChar ? fingerForChar(nextChar, lang) : null;
    const isLeft = finger && finger.startsWith("l-");
    const isRight = finger && finger.startsWith("r-");
    const leftActive = isLeft ? finger : null;
    const rightActive = isRight ? finger : null;
    container.innerHTML = `
    <div class="hands-diagram" aria-hidden="true">
      <div class="hand-col ${isLeft ? "is-active-hand" : ""}">${handSvg("left", leftActive)}</div>
      <div class="hand-col ${isRight ? "is-active-hand" : ""}">${handSvg("right", rightActive)}</div>
    </div>
  `;
  }
  function updateHands(container, { nextChar, lang }) {
    renderHands(container, { nextChar, lang });
  }
  function fingerIconSvg(finger) {
    const color = FINGER_COLOR[finger] || "var(--accent)";
    const isThumb = finger === FINGER.L_THUMB || finger === FINGER.R_THUMB;
    const isLeft = finger.startsWith("l-");
    if (isThumb) {
      return `
      <svg class="key-finger-icon" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="14" rx="7" ry="8" fill="${color}" opacity="0.95"/>
        <ellipse cx="12" cy="7" rx="4.5" ry="5" fill="${color}"/>
      </svg>`;
    }
    const tipX = 12;
    return `
    <svg class="key-finger-icon" viewBox="0 0 24 24" aria-hidden="true" style="${isLeft ? "" : ""}">
      <rect x="${tipX - 4}" y="2" width="8" height="12" rx="4" fill="${color}"/>
      <rect x="${tipX - 7}" y="10" width="14" height="11" rx="5" fill="${color}" opacity="0.85"/>
      <circle cx="${tipX}" cy="4" r="2.2" fill="#fff" opacity="0.35"/>
    </svg>`;
  }
  function renderKeyboard(container, { lang = "fa", nextChar = null, shift = false, showFingerIcon = true } = {}) {
    container.innerHTML = "";
    container.className = "keyboard";
    container.setAttribute("aria-hidden", "true");
    const nextCode = nextChar ? charToCode(nextChar, lang) : null;
    const nextFinger = nextChar ? fingerForChar(nextChar, lang) : null;
    PHYSICAL_ROWS.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "kb-row";
      row.forEach((key) => {
        const keyEl = document.createElement("div");
        keyEl.className = "key";
        keyEl.dataset.code = key.code;
        if (key.space) keyEl.classList.add("is-space");
        if (key.wide) keyEl.classList.add("is-wide");
        const labels = key.labels[lang] || key.labels.en;
        const main = document.createElement("span");
        main.className = "key-main";
        main.textContent = key.space ? "␣" : shift ? labels[1] || labels[0] : labels[0] || "";
        keyEl.appendChild(main);
        if (!key.space && labels[1] && labels[1] !== labels[0]) {
          const sub = document.createElement("span");
          sub.className = "key-sub";
          sub.textContent = labels[1];
          keyEl.appendChild(sub);
        }
        const finger = CODE_FINGER[key.code];
        if (finger) {
          keyEl.style.borderColor = "var(--key-border)";
          keyEl.dataset.finger = finger;
          keyEl.style.boxShadow = `inset 0 -2px 0 0 ${FINGER_COLOR[finger]}55`;
          const badge = document.createElement("span");
          badge.className = "key-finger-dot";
          badge.style.background = FINGER_COLOR[finger];
          keyEl.appendChild(badge);
        }
        if (nextCode && key.code === nextCode) {
          keyEl.classList.add("is-next");
          if (nextFinger && showFingerIcon) {
            const iconWrap = document.createElement("span");
            iconWrap.className = "key-finger-wrap";
            iconWrap.innerHTML = fingerIconSvg(nextFinger);
            keyEl.appendChild(iconWrap);
          }
        }
        rowEl.appendChild(keyEl);
      });
      container.appendChild(rowEl);
    });
  }
  function updateNextKey(container, { lang, nextChar, showFingerIcon = true }) {
    container.querySelectorAll(".key.is-next").forEach((el2) => {
      el2.classList.remove("is-next");
      el2.querySelectorAll(".key-finger-wrap").forEach((n) => n.remove());
      const fid = el2.dataset.finger;
      if (fid && FINGER_COLOR[fid]) {
        el2.style.boxShadow = `inset 0 -2px 0 0 ${FINGER_COLOR[fid]}55`;
      }
    });
    if (!nextChar) return;
    const code = charToCode(nextChar, lang);
    if (!code) return;
    const el = container.querySelector(`.key[data-code="${code}"]`);
    if (!el) return;
    el.classList.add("is-next");
    const finger = fingerForChar(nextChar, lang);
    if (finger) {
      el.style.boxShadow = `inset 0 -3px 0 0 ${FINGER_COLOR[finger]}`;
      if (showFingerIcon) {
        const wrap = document.createElement("span");
        wrap.className = "key-finger-wrap";
        wrap.innerHTML = fingerIconSvg(finger);
        el.appendChild(wrap);
      }
    }
  }
  function handHintHtml(nextChar, lang) {
    if (!nextChar) return "";
    const finger = fingerForChar(nextChar, lang);
    if (!finger) {
      return `<span class="muted">${nextChar === " " ? "Space" : nextChar}</span>`;
    }
    const color = FINGER_COLOR[finger];
    const label = FINGER_LABELS[lang]?.[finger] || finger;
    const side = finger.startsWith("l") ? "L" : "R";
    const sideLabel = lang === "fa" ? side === "L" ? "دست چپ" : "دست راست" : side === "L" ? "Left" : "Right";
    const shift = nextChar && needsShift(nextChar, lang);
    return `
    <span class="hand-side">${sideLabel}</span>
    <span class="hand-finger" style="background:${color}">${label}</span>
    ${shift ? `<span class="badge badge-accent">Shift</span>` : ""}
    <span class="badge badge-accent">${nextChar === " " ? "␣" : nextChar}</span>
  `;
  }

  // js/normalize-text.js
  var ZERO_WIDTH = /[​-‏﻿ـ]/g;
  var EXOTIC_SPACES = /[   -   　]/g;
  var ARABIC_YEH = /[يى]/g;
  var ARABIC_KAF = /ك/g;
  function normalizeTypingText(text) {
    if (!text) return "";
    let out = String(text);
    out = out.replace(ZERO_WIDTH, "");
    out = out.replace(EXOTIC_SPACES, " ");
    out = out.replace(ARABIC_YEH, "ی");
    out = out.replace(ARABIC_KAF, "ک");
    out = out.split("\n").map((line) => line.replace(/ {2,}/g, " ").trim()).join("\n");
    out = out.replace(/\n{3,}/g, "\n\n");
    return out.trim();
  }

  // js/confetti.js
  function burstConfetti(canvas, { duration = 1800, count = 90 } = {}) {
    if (!canvas) return;
    const ctx2 = canvas.getContext("2d");
    if (!ctx2) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 320;
    const h = canvas.clientHeight || 200;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = ["#2dd4bf", "#34d399", "#fbbf24", "#818cf8", "#f472b6", "#60a5fa", "#e879f9"];
    const parts = [];
    for (let i = 0; i < count; i++) {
      parts.push({
        x: w * 0.5 + (Math.random() - 0.5) * w * 0.4,
        y: h * 0.35 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 7 - 2,
        g: 0.14 + Math.random() * 0.08,
        size: 4 + Math.random() * 5,
        color: colors[i % colors.length],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 1
      });
    }
    const t0 = performance.now();
    function frame(now) {
      const elapsed = now - t0;
      ctx2.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life = Math.max(0, 1 - elapsed / duration);
        if (p.life <= 0) continue;
        ctx2.save();
        ctx2.translate(p.x, p.y);
        ctx2.rotate(p.rot);
        ctx2.globalAlpha = p.life;
        ctx2.fillStyle = p.color;
        ctx2.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx2.restore();
      }
      if (elapsed < duration) requestAnimationFrame(frame);
      else ctx2.clearRect(0, 0, w, h);
    }
    requestAnimationFrame(frame);
  }

  // js/ui/session.js
  var engine = null;
  var keyHandler = null;
  function destroySession() {
    if (engine) {
      engine.destroy();
      engine = null;
    }
    if (keyHandler) {
      document.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }
  }
  function renderSession(root, routeName, params) {
    destroySession();
    const lang = params[0] === "en" || params[0] === "fa" ? params[0] : state.lang;
    const L = (k) => t(lang, k);
    let text = "";
    let title = "";
    let desc = "";
    let minWpm = 0;
    let minAccuracy = 0;
    let lessonIndex = -1;
    let mode = "practice";
    let timeLimitMs = 0;
    let sessionMode = "normal";
    let source = "sentences";
    if (routeName === "lesson") {
      mode = "lesson";
      const idxRaw = params[0] === "en" || params[0] === "fa" ? params[1] : params[0];
      lessonIndex = Number(idxRaw || 0);
      const lessons = getLessons(lang);
      const lesson = lessons[lessonIndex];
      if (!lesson) {
        navigate("curriculum");
        return;
      }
      title = lesson.title;
      desc = lesson.desc || "";
      minWpm = lesson.minWpm || 0;
      minAccuracy = lesson.minAccuracy || 0;
      text = normalizeTypingText(buildLessonText(lesson));
      source = "lesson";
    } else {
      const [, level = "easy", src = "sentences", length = "medium", dur = "0", sm = "normal"] = params;
      source = src;
      sessionMode = sm === "zen" || sm === "boss" ? sm : "normal";
      timeLimitMs = Number(dur) * 1e3 || 0;
      if (sessionMode === "boss" && !timeLimitMs) timeLimitMs = 6e4;
      title = sessionMode === "boss" ? lang === "fa" ? "چالش زمانی" : "Timed Challenge" : sessionMode === "zen" ? lang === "fa" ? "تمرکز محض" : "Focus Session" : L("freePractice");
      desc = sessionMode === "boss" ? lang === "fa" ? "قبل از پایان زمان، متن را تمام کن!" : "Finish the text before time runs out!" : sessionMode === "zen" ? lang === "fa" ? "فقط متن — بدون صفحه‌کلید و آمار" : "Text only — no keyboard, no stats" : "";
      text = normalizeTypingText(buildPracticeText({
        practiceLang: lang,
        level,
        practiceSource: source,
        practiceLength: length,
        customText: state.settings.customText
      }));
    }
    if (!text || !Array.from(text).some((c) => c !== " " && c !== "\n")) {
      text = lang === "fa" ? "تمرین تایپ" : "typing practice";
    }
    const kbLang = mode === "lesson" ? lang : resolveContentLang(source, lang, text);
    const contentDir = mode === "lesson" ? lang === "fa" ? "rtl" : "ltr" : resolveContentDir(source, lang, text);
    const caseSensitive = mode === "lesson" ? getLessons(lang)[lessonIndex]?.caseSensitive ?? state.settings.caseSensitive : source === "code" ? true : state.settings.caseSensitive;
    const isZen = sessionMode === "zen";
    const isBoss = sessionMode === "boss";
    const showKb = !isZen && state.settings.showKeyboard !== false;
    const showHands = !isZen && state.settings.showFingerHint !== false && state.settings.showHandsDiagram !== false;
    const showLive = !isZen;
    root.innerHTML = `
    <div class="page page-session fade-in ${isZen ? "is-zen" : ""} ${isBoss ? "is-boss" : ""}"
         data-lang="${kbLang}" dir="${contentDir}">
      <header class="session-header">
        <div class="session-title-block">
          <button type="button" class="btn btn-ghost btn-icon" data-exit title="${L("exit")} (Esc)">✕</button>
          <div>
            <h1 class="session-title">${title}</h1>
            ${desc ? `<p class="session-desc">${desc}</p>` : ""}
          </div>
        </div>
        ${showLive ? `
        <div class="session-live" id="session-live">
          <div class="live-stat"><span class="live-label">${L("wpm")}</span><span class="live-value" data-m="wpm">0</span></div>
          <div class="live-stat"><span class="live-label">${L("accuracy")}</span><span class="live-value" data-m="acc">100%</span></div>
          <div class="live-stat"><span class="live-label">${L("time")}</span><span class="live-value" data-m="time">0:00</span></div>
          <div class="live-stat"><span class="live-label">${L("errors")}</span><span class="live-value" data-m="err">0</span></div>
          <div class="live-stat combo-stat"><span class="live-label">Combo</span><span class="live-value" data-m="combo">0</span></div>
        </div>` : ""}
      </header>

      ${isBoss ? `<div class="boss-bar"><i id="boss-fill" style="width:100%"></i><span id="boss-time"></span></div>` : ""}

      <div class="session-progress"><i id="session-bar" style="width:0%"></i></div>

      <div class="typing-area" id="typing-area" tabindex="0" role="textbox" aria-label="${L("startTyping")}">
        <div class="char-stream" id="char-stream" dir="${contentDir}"></div>
        <div class="typing-hint" id="typing-hint">${L("startTyping")}</div>
        <div class="combo-pop" id="combo-pop" hidden></div>
      </div>

      ${showHands ? `<div class="hand-hint" id="hand-hint" aria-live="polite"></div>` : ""}

      ${showKb ? `
      <div class="kb-guide" id="kb-guide">
        <div class="hands-slot" id="hands-slot"></div>
        <div class="keyboard-wrap" id="keyboard-wrap">
          <div id="vkeyboard"></div>
        </div>
      </div>` : ""}

      ${showLive ? `<div class="live-spark"><canvas id="spark-canvas" width="600" height="48" aria-hidden="true"></canvas></div>` : ""}

      <div class="result-panel card" id="result-panel" hidden></div>
      <canvas id="confetti-canvas" class="confetti-canvas" aria-hidden="true"></canvas>
    </div>
  `;
    const streamEl = root.querySelector("#char-stream");
    const hintEl = root.querySelector("#typing-hint");
    const liveEl = root.querySelector("#session-live");
    const barEl = root.querySelector("#session-bar");
    const kbEl = root.querySelector("#vkeyboard");
    const handEl = root.querySelector("#hand-hint");
    const handsSlot = root.querySelector("#hands-slot");
    const resultEl = root.querySelector("#result-panel");
    const areaEl = root.querySelector("#typing-area");
    const comboPop = root.querySelector("#combo-pop");
    const sparkCanvas = root.querySelector("#spark-canvas");
    const bossFill = root.querySelector("#boss-fill");
    const bossTime = root.querySelector("#boss-time");
    if (showKb && kbEl) {
      renderKeyboard(kbEl, {
        lang: kbLang,
        nextChar: text[0] || null,
        showFingerIcon: state.settings.showFingerIcon !== false
      });
    }
    if (showHands && handsSlot) renderHands(handsSlot, { nextChar: text[0] || null, lang: kbLang });
    if (text[0] && handEl) handEl.innerHTML = handHintHtml(text[0], kbLang);
    const wpmSamples = [];
    function paintStream(chars, status, index) {
      const frag = document.createDocumentFragment();
      chars.forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "ch";
        if (status[i] === "correct") span.classList.add("is-correct");
        else if (status[i] === "incorrect") span.classList.add("is-wrong");
        else if (i === index) span.classList.add("is-current");
        if (ch === "\n") {
          span.textContent = "↵";
          span.dataset.nl = "1";
          span.classList.add("is-nl");
        } else if (ch === " ") {
          span.textContent = "␣";
          span.dataset.space = "1";
        } else {
          span.textContent = ch;
        }
        frag.appendChild(span);
      });
      streamEl.innerHTML = "";
      streamEl.appendChild(frag);
      const cur = streamEl.querySelector(".is-current");
      if (cur) cur.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    function paintLive(result, combo2 = 0) {
      if (!liveEl) return;
      const set = (k, v) => {
        const el = liveEl.querySelector(`[data-m="${k}"]`);
        if (el) el.textContent = v;
      };
      set("wpm", result.wpm);
      set("acc", `${result.accuracy}%`);
      set("time", formatDuration(result.durationMs));
      set("err", result.totalErrors);
      const comboEl = liveEl.querySelector('[data-m="combo"]');
      if (comboEl) {
        comboEl.textContent = combo2;
        comboEl.parentElement.classList.toggle("is-hot", combo2 >= 10);
      }
    }
    function paintSpark(wpm) {
      if (!sparkCanvas) return;
      wpmSamples.push(wpm);
      if (wpmSamples.length > 60) wpmSamples.shift();
      const ctx2 = sparkCanvas.getContext("2d");
      if (!ctx2) return;
      const dpr = window.devicePixelRatio || 1;
      const w = sparkCanvas.clientWidth || 600;
      const h = 48;
      sparkCanvas.width = w * dpr;
      sparkCanvas.height = h * dpr;
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx2.clearRect(0, 0, w, h);
      if (wpmSamples.length < 2) return;
      const max = Math.max(...wpmSamples, 10);
      const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#2dd4bf";
      ctx2.strokeStyle = accent;
      ctx2.lineWidth = 1.5;
      ctx2.beginPath();
      wpmSamples.forEach((v, i) => {
        const x = w * i / Math.max(wpmSamples.length - 1, 1);
        const y = h - v / max * (h - 6) - 3;
        if (i === 0) ctx2.moveTo(x, y);
        else ctx2.lineTo(x, y);
      });
      ctx2.stroke();
    }
    function paintBoss(remainingMs, totalMs) {
      if (!bossFill) return;
      const pct = Math.max(0, Math.min(100, remainingMs / Math.max(totalMs, 1) * 100));
      bossFill.style.width = `${pct}%`;
      bossFill.classList.toggle("is-low", pct < 25);
      if (bossTime) {
        bossTime.textContent = formatDuration(remainingMs);
      }
    }
    function flashReject() {
      areaEl.classList.remove("is-reject");
      void areaEl.offsetWidth;
      areaEl.classList.add("is-reject");
    }
    let combo = 0;
    let maxCombo = 0;
    function showComboPop(n) {
      if (!comboPop || n < 5) return;
      comboPop.hidden = false;
      comboPop.textContent = `×${n}`;
      comboPop.classList.remove("is-show");
      void comboPop.offsetWidth;
      comboPop.classList.add("is-show");
      setTimeout(() => {
        comboPop.hidden = true;
      }, 600);
    }
    engine = new TypingEngine({
      text,
      lang: kbLang,
      caseSensitive,
      soundEnabled: state.settings.soundEnabled,
      strictMode: state.settings.strictMode !== false,
      minWpm,
      minAccuracy,
      timeLimitMs,
      onUpdate(u) {
        paintStream(u.chars, u.status, u.index);
        paintLive(u.result, combo);
        barEl.style.width = `${Math.round(u.progress * 100)}%`;
        if (showKb && kbEl) {
          updateNextKey(kbEl, {
            lang: kbLang,
            nextChar: u.nextChar,
            showFingerIcon: state.settings.showFingerIcon !== false
          });
        }
        if (showHands && handsSlot) updateHands(handsSlot, { nextChar: u.nextChar, lang: kbLang });
        if (u.nextChar && handEl) handEl.innerHTML = handHintHtml(u.nextChar, kbLang);
        if (u.index > 0) hintEl.hidden = true;
        if (u.rejected) flashReject();
        paintSpark(u.result.wpm);
        if (isBoss) paintBoss(u.remainingMs, timeLimitMs);
      },
      onComplete(result) {
        result._maxCombo = maxCombo;
        showResult(result);
      }
    });
    paintStream(engine.chars, engine.status, 0);
    paintLive(engine._buildResult(false), 0);
    if (isBoss) paintBoss(timeLimitMs, timeLimitMs);
    keyHandler = (e) => {
      if (resultEl.hidden === false) {
        if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          renderSession(root, routeName, params);
        }
        if (e.key === "Escape") {
          e.preventDefault();
          navigate(mode === "lesson" ? "curriculum" : "practice");
        }
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        destroySession();
        navigate(mode === "lesson" ? "curriculum" : "practice");
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Tab") return;
      const isSpace = e.key === " " || e.code === "Space";
      if (isSpace) {
        e.preventDefault();
        if (!engine) return;
        const res = engine.handleKey(" ");
        if (res.handled && !res.backspace && !res.aborted) {
          if (res.ok) {
            combo += 1;
            if (combo > maxCombo) maxCombo = combo;
          } else {
            combo = 0;
          }
          if (engine) paintLive(engine._buildResult(false), combo);
        }
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (!engine) return;
        const res = engine.handleKey("Enter");
        if (res.handled && !res.backspace && !res.aborted) {
          if (res.ok) {
            combo += 1;
            if (combo > maxCombo) maxCombo = combo;
          } else {
            combo = 0;
          }
          if (engine) paintLive(engine._buildResult(false), combo);
        }
        return;
      }
      if (e.key === "Backspace" || e.key.length === 1) {
        e.preventDefault();
        if (!engine) return;
        const res = engine.handleKey(e.key);
        if (res.handled && !res.backspace && !res.aborted) {
          if (res.ok) {
            combo += 1;
            if (combo > maxCombo) maxCombo = combo;
            if (combo % 10 === 0) showComboPop(combo);
          } else {
            combo = 0;
          }
          if (engine) paintLive(engine._buildResult(false), combo);
        }
      }
    };
    document.addEventListener("keydown", keyHandler);
    areaEl.addEventListener("click", () => areaEl.focus());
    areaEl.focus();
    root.querySelector("[data-exit]")?.addEventListener("click", () => {
      destroySession();
      navigate(mode === "lesson" ? "curriculum" : "practice");
    });
    function showResult(result) {
      destroySession();
      resultEl.hidden = false;
      const passed = result.passed;
      const isLesson = mode === "lesson";
      const mx = result._maxCombo || maxCombo || 0;
      if (isLesson && passed) {
        saveLessonResult(lang, lessonIndex, result);
      }
      if (result.keyStats) recordKeyStats(result.keyStats);
      const prevBest = state.history.filter((h) => h.lang === lang).reduce((m, h) => Math.max(m, h.wpm || 0), 0);
      const isPb = result.wpm > prevBest && result.wpm > 0;
      const newAchievements = appendSessionRecord({
        ts: Date.now(),
        lang,
        mode: mode === "lesson" ? "lesson" : sessionMode,
        lessonId: isLesson ? getLessons(lang)[lessonIndex]?.id : null,
        wpm: result.wpm,
        cpm: result.cpm,
        accuracy: result.accuracy,
        score: result.score,
        stars: result.stars,
        durationMs: result.durationMs,
        totalErrors: result.totalErrors,
        correctedErrors: result.correctedErrors,
        passed: result.passed,
        maxCombo: mx
      }) || [];
      const xpGain = computeSessionXp(result, mx);
      const prevXp = Number(localStorage.getItem("ttt.xp.v1") || 0);
      const newXp = prevXp + xpGain;
      localStorage.setItem("ttt.xp.v1", String(newXp));
      const lvl = levelFromXp(newXp);
      if (passed) {
        const canvas = root.querySelector("#confetti-canvas");
        burstConfetti(canvas, { count: result.stars >= 3 ? 120 : 70 });
      }
      const L2 = (k) => t(lang, k);
      const errKeys = (result.errorChars || []).slice(0, 6);
      const achHtml = (newAchievements || []).map((id) => {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        if (!a) return "";
        return `<div class="ach-toast"><span class="ach-icon">${a.icon}</span><div><strong>${achievementLabel(a, lang)}</strong><span>${achievementDesc(a, lang)}</span></div></div>`;
      }).join("");
      resultEl.innerHTML = `
      <div class="result-inner ${passed ? "is-pass" : "is-fail"}">
        <div class="result-badge">${passed ? L2("pass") : L2("fail")}</div>
        <h2 class="result-title">${L2("sessionDone")}</h2>
        ${isPb ? `<div class="pb-banner">🏆 ${lang === "fa" ? "رکورد جدید سرعت!" : "New speed record!"}</div>` : ""}
        ${result.stars ? `<div class="result-stars">${"★".repeat(result.stars)}${"☆".repeat(3 - result.stars)}</div>` : ""}

        <div class="xp-line">
          <span class="xp-badge">+${xpGain} XP</span>
          <span class="xp-level">Lv ${lvl.level} · ${titleForLevel(lvl.level, lang)}</span>
          <div class="xp-bar"><i style="width:${Math.round(lvl.progress * 100)}%"></i></div>
        </div>

        <div class="result-grid">
          <div class="result-cell is-hero"><span>${L2("wpm")}</span><strong>${result.wpm}</strong></div>
          <div class="result-cell"><span>${L2("accuracy")}</span><strong>${result.accuracy}%</strong></div>
          <div class="result-cell"><span>Combo</span><strong>×${mx}</strong></div>
          <div class="result-cell"><span>${L2("cpm")}</span><strong>${result.cpm}</strong></div>
          <div class="result-cell"><span>${L2("time")}</span><strong>${formatDuration(result.durationMs)}</strong></div>
          <div class="result-cell"><span>${L2("corrected")}</span><strong>${result.correctedErrors}</strong></div>
          <div class="result-cell"><span>${L2("remaining")}</span><strong>${result.incorrectChars}</strong></div>
          <div class="result-cell"><span>${L2("score")}</span><strong>${result.score}</strong></div>
        </div>

        ${errKeys.length ? `
          <div class="error-keys">
            <span class="error-keys-label">${lang === "fa" ? "کلیدهای پرخطا" : "Most missed keys"}</span>
            ${errKeys.map((e) => `<span class="error-key-chip" title="${e.misses}×">${e.ch === " " ? "␣" : e.ch}</span>`).join("")}
          </div>` : ""}
        ${achHtml ? `<div class="ach-list">${achHtml}</div>` : ""}

        <div class="result-actions">
          <button type="button" class="btn btn-primary" data-again>${L2("practiceAgain")} <kbd>R</kbd></button>
          ${isLesson && passed ? `<button type="button" class="btn btn-accent" data-next>${L2("goToNext")}</button>` : ""}
          <button type="button" class="btn btn-ghost" data-exit2>${isLesson ? L2("curriculum") : L2("practice")}</button>
        </div>
      </div>
    `;
      resultEl.querySelector("[data-again]")?.addEventListener("click", () => {
        renderSession(root, routeName, params);
      });
      resultEl.querySelector("[data-next]")?.addEventListener("click", () => {
        const lessons = getLessons(lang);
        const next = lessonIndex + 1;
        if (next < lessons.length) navigate("lesson", [lang, String(next)]);
        else navigate("curriculum");
      });
      resultEl.querySelector("[data-exit2]")?.addEventListener("click", () => {
        navigate(isLesson ? "curriculum" : "practice");
      });
      resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
  function buildLessonText(lesson) {
    if (lesson.type === "intro") {
      const chars = lesson.chars || "";
      return (chars + " " + chars + " " + chars).trim();
    }
    if (lesson.type === "chars") {
      const chars = Array.from(lesson.chars || "");
      if (!chars.length) return "asdf";
      const groups = [];
      for (let g = 0; g < 8; g++) {
        const shuffled = [...chars].sort(() => Math.random() - 0.5);
        groups.push(shuffled.join(""));
      }
      return groups.join(" ");
    }
    if (lesson.type === "words") {
      const words = lesson.words || [];
      if (!words.length) return "hello world";
      const out = [];
      for (let i = 0; i < 12; i++) {
        out.push(words[Math.floor(Math.random() * words.length)]);
      }
      return out.join(" ");
    }
    if (lesson.type === "sentences") {
      const list = lesson.sentences || [];
      if (!list.length) return "Practice makes perfect.";
      return list[Math.floor(Math.random() * list.length)];
    }
    return lesson.chars || "asdf";
  }

  // js/patterns.js
  function analyzeErrorPatterns(keyStats, history = []) {
    const patterns = [];
    const ranked = Object.entries(keyStats || {}).map(([ch, v]) => {
      const total = (v.hits || 0) + (v.misses || 0);
      const acc = total ? (v.hits || 0) / total : 1;
      return { ch, total, misses: v.misses || 0, acc };
    }).filter((k) => k.total >= 3).sort((a, b) => a.acc - b.acc);
    const veryWeak = ranked.filter((k) => k.acc < 0.85);
    if (veryWeak.length >= 1) {
      patterns.push({
        id: "weak-keys",
        severity: veryWeak.length >= 4 ? "high" : "medium",
        chars: veryWeak.slice(0, 6).map((k) => k.ch),
        fa: "روی این کلیدها خطای زیادی داری — تمرین اختصاصی پیشنهاد می‌شود.",
        en: "You miss these keys often — dedicated drills recommended."
      });
    }
    const neighbors = [
      ["q", "w"],
      ["w", "e"],
      ["e", "r"],
      ["r", "t"],
      ["t", "y"],
      ["a", "s"],
      ["s", "d"],
      ["d", "f"],
      ["f", "g"],
      ["g", "h"],
      ["z", "x"],
      ["x", "c"],
      ["c", "v"],
      ["v", "b"],
      ["b", "n"],
      ["o", "p"],
      ["l", ";"],
      ["k", "l"],
      ["i", "o"]
    ];
    const faNeighbors = [
      ["ض", "ص"],
      ["ص", "ث"],
      ["ث", "ق"],
      ["ق", "ف"],
      ["ف", "غ"],
      ["ش", "س"],
      ["س", "ی"],
      ["ی", "ب"],
      ["ب", "ل"],
      ["ل", "ا"],
      ["ظ", "ط"],
      ["ط", "ز"],
      ["ز", "ر"],
      ["ر", "ذ"],
      ["ذ", "د"],
      ["ت", "ن"],
      ["ن", "م"],
      ["م", "ک"],
      ["ک", "گ"]
    ];
    function pairWeakness(pairs) {
      return pairs.map(([a, b]) => {
        const ka = keyStats?.[a];
        const kb = keyStats?.[b];
        if (!ka || !kb) return null;
        const ta = (ka.hits || 0) + (ka.misses || 0);
        const tb = (kb.hits || 0) + (kb.misses || 0);
        if (ta < 2 || tb < 2) return null;
        const accA = ka.hits / ta;
        const accB = kb.hits / tb;
        if (accA < 0.9 && accB < 0.9) return { pair: [a, b], avg: (accA + accB) / 2 };
        return null;
      }).filter(Boolean).sort((x, y) => x.avg - y.avg).slice(0, 3);
    }
    const weakPairs = [...pairWeakness(neighbors), ...pairWeakness(faNeighbors)];
    if (weakPairs.length) {
      patterns.push({
        id: "neighbor-confusion",
        severity: "medium",
        pairs: weakPairs.map((p) => p.pair),
        fa: "کلیدهای همسایه را با هم اشتباه می‌گیری — آرام‌تر و دقیق‌تر تایپ کن.",
        en: "You confuse neighboring keys — slow down and aim carefully."
      });
    }
    if (history.length >= 10) {
      const last5 = history.slice(-5);
      const prev5 = history.slice(-10, -5);
      const avg = (arr) => arr.reduce((s, r) => s + (r.accuracy || 0), 0) / arr.length;
      const delta = avg(last5) - avg(prev5);
      if (delta < -3) {
        patterns.push({
          id: "acc-dropping",
          severity: "high",
          fa: "دقتت نسبت به جلسات قبل افت کرده — سرعت را کم کن.",
          en: "Accuracy dropped vs earlier sessions — slow down."
        });
      } else if (delta > 3) {
        patterns.push({
          id: "acc-rising",
          severity: "info",
          fa: "دقتت دارد بهتر می‌شود! همین روند را نگه دار.",
          en: "Accuracy is improving — keep it up!"
        });
      }
    }
    return patterns;
  }

  // js/ui/stats.js
  function weeklyReport(history) {
    const now = Date.now();
    const weekMs = 7 * 24 * 3600 * 1e3;
    const week = history.filter((h) => now - (h.ts || 0) <= weekMs);
    const prev = history.filter((h) => {
      const age = now - (h.ts || 0);
      return age > weekMs && age <= weekMs * 2;
    });
    const avg = (arr, k) => arr.length ? Math.round(arr.reduce((s, r) => s + (r[k] || 0), 0) / arr.length) : 0;
    return {
      sessions: week.length,
      avgWpm: avg(week, "wpm"),
      avgAcc: avg(week, "accuracy"),
      prevAvgWpm: avg(prev, "wpm"),
      prevAvgAcc: avg(prev, "accuracy"),
      totalTimeMs: week.reduce((s, r) => s + (r.durationMs || 0), 0)
    };
  }
  function renderStats(root) {
    const lang = state.lang;
    const L = (k) => t(lang, k);
    const all = summarizeHistory(state.history);
    const fa = summarizeHistory(state.history, "fa");
    const en = summarizeHistory(state.history, "en");
    const recent = [...state.history].slice(-25).reverse();
    const { streak, activeDays } = computeStreak(state.history);
    const unlocked = new Set(state.achievements);
    const weak = weakKeys(state.keyStats, 16);
    const patterns = analyzeErrorPatterns(state.keyStats, state.history);
    const week = weeklyReport(state.history);
    const lvl = levelFromXp(state.xp || 0);
    const wpmDelta = week.avgWpm - week.prevAvgWpm;
    const accDelta = Math.round((week.avgAcc - week.prevAvgAcc) * 10) / 10;
    root.innerHTML = `
    <div class="page page-stats fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("stats")}</h1>
          <p class="page-sub">${lang === "fa" ? "نمای کلی پیشرفت شما" : "Your overall progress"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <section class="stats-grid">
        <div class="stat-card card"><span class="stat-label">${lang === "fa" ? "سطح" : "Level"}</span><span class="stat-value">⭐${lvl.level}</span><small class="muted">${titleForLevel(lvl.level, lang)}</small></div>
        <div class="stat-card card"><span class="stat-label">${L("sessions")}</span><span class="stat-value">${all.sessions}</span></div>
        <div class="stat-card card"><span class="stat-label">${L("bestWpm")}</span><span class="stat-value">${all.bestWpm}</span></div>
        <div class="stat-card card"><span class="stat-label">${L("avgAcc")}</span><span class="stat-value">${all.avgAccuracy}%</span></div>
        <div class="stat-card card"><span class="stat-label">${L("totalTime")}</span><span class="stat-value">${formatDuration(all.totalTimeMs)}</span></div>
        <div class="stat-card card"><span class="stat-label">${lang === "fa" ? "استریک" : "Streak"}</span><span class="stat-value">🔥${streak}</span></div>
      </section>

      <section class="card week-card">
        <h3>${lang === "fa" ? "گزارش این هفته" : "This week"}</h3>
        <div class="week-grid">
          <div><span>${L("sessions")}</span><strong>${week.sessions}</strong></div>
          <div><span>${L("wpm")}</span><strong>${week.avgWpm}
            ${week.prevAvgWpm ? `<em class="${wpmDelta >= 0 ? "up" : "down"}">${wpmDelta >= 0 ? "▲" : "▼"} ${Math.abs(wpmDelta)}</em>` : ""}
          </strong></div>
          <div><span>${L("accuracy")}</span><strong>${week.avgAcc}%
            ${week.prevAvgAcc ? `<em class="${accDelta >= 0 ? "up" : "down"}">${accDelta >= 0 ? "▲" : "▼"} ${Math.abs(accDelta)}</em>` : ""}
          </strong></div>
          <div><span>${L("totalTime")}</span><strong>${formatDuration(week.totalTimeMs)}</strong></div>
        </div>
      </section>

      ${patterns.length ? `
      <section class="card">
        <h3>${lang === "fa" ? "تحلیل الگوی خطا" : "Error pattern analysis"}</h3>
        <div class="pattern-list">
          ${patterns.map((p) => `
            <div class="pattern-item sev-${p.severity}">
              <div class="pattern-msg">${lang === "fa" ? p.fa : p.en}</div>
              ${p.chars ? `<div class="pattern-keys">${p.chars.map((c) => `<span>${c === " " ? "␣" : c}</span>`).join("")}</div>` : ""}
              ${p.pairs ? `<div class="pattern-keys">${p.pairs.map((pair) => `<span>${pair[0]}↔${pair[1]}</span>`).join("")}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="card ach-section">
        <h3>${lang === "fa" ? `دستاوردها (${unlocked.size}/${ACHIEVEMENTS.length})` : `Achievements (${unlocked.size}/${ACHIEVEMENTS.length})`}</h3>
        <div class="ach-grid">
          ${ACHIEVEMENTS.map((a) => {
      const on = unlocked.has(a.id);
      return `<div class="ach-card ${on ? "is-on" : "is-off"}" title="${achievementDesc(a, lang)}">
              <span class="ach-big">${on ? a.icon : "🔒"}</span>
              <strong>${achievementLabel(a, lang)}</strong>
              <span>${achievementDesc(a, lang)}</span>
            </div>`;
    }).join("")}
        </div>
      </section>

      <section class="split-stats">
        <div class="card">
          <h3>${L("progressFa")}</h3>
          <div class="mini-stats">
            <div><span>${L("sessions")}</span><strong>${fa.sessions}</strong></div>
            <div><span>${L("bestWpm")}</span><strong>${fa.bestWpm}</strong></div>
            <div><span>${L("avgAcc")}</span><strong>${fa.avgAccuracy}%</strong></div>
          </div>
        </div>
        <div class="card">
          <h3>${L("progressEn")}</h3>
          <div class="mini-stats">
            <div><span>${L("sessions")}</span><strong>${en.sessions}</strong></div>
            <div><span>${L("bestWpm")}</span><strong>${en.bestWpm}</strong></div>
            <div><span>${L("avgAcc")}</span><strong>${en.avgAccuracy}%</strong></div>
          </div>
        </div>
      </section>

      <section class="card chart-card">
        <h3>${L("chartWpm")}</h3>
        <canvas id="wpm-chart" width="800" height="220"></canvas>
      </section>

      <section class="card chart-card">
        <h3>${L("chartAcc")}</h3>
        <canvas id="acc-chart" width="800" height="220"></canvas>
      </section>

      ${weak.length ? `
      <section class="card">
        <h3>${lang === "fa" ? "نقشه کلیدهای ضعیف" : "Weak key map"}</h3>
        <div class="heatmap">
          ${weak.map((k) => {
      const hue = Math.round(k.acc / 100 * 120);
      return `<div class="heat-cell" style="background:hsla(${hue},70%,45%,0.25);border-color:hsla(${hue},70%,50%,0.55)">
              <b>${k.ch === " " ? "␣" : k.ch}</b>
              <i>${k.acc}%</i>
              <small>${k.misses}×</small>
            </div>`;
    }).join("")}
        </div>
      </section>` : ""}

      <section class="card">
        <h3>${L("recentSessions")}</h3>
        ${recent.length === 0 ? `<p class="muted">${L("noHistory")}</p>` : `<div class="table-wrap"><table class="session-table">
              <thead><tr>
                <th>${L("language")}</th>
                <th>${L("wpm")}</th>
                <th>${L("accuracy")}</th>
                <th>${L("time")}</th>
                <th>${L("errors")}</th>
                <th>${L("score")}</th>
              </tr></thead>
              <tbody>
                ${recent.map((r) => `
                  <tr>
                    <td>${r.lang === "fa" ? "فارسی" : "EN"}</td>
                    <td>${r.wpm}</td>
                    <td>${r.accuracy}%</td>
                    <td>${formatDuration(r.durationMs)}</td>
                    <td>${r.totalErrors}</td>
                    <td>${r.score}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table></div>`}
      </section>
    </div>
  `;
    root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));
    drawChart(root.querySelector("#wpm-chart"), state.history.map((h) => h.wpm || 0), L("wpm"));
    drawChart(root.querySelector("#acc-chart"), state.history.map((h) => h.accuracy || 0), L("accuracy"));
  }
  function drawChart(canvas, values, label) {
    if (!canvas) return;
    const ctx2 = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth || 800;
    const cssH = 220;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx2.scale(dpr, dpr);
    const styles = getComputedStyle(document.body);
    const accent = styles.getPropertyValue("--accent").trim() || "#2dd4bf";
    const inkMuted = styles.getPropertyValue("--ink-muted").trim() || "#8fa0b8";
    const border = styles.getPropertyValue("--border").trim() || "#2a3854";
    ctx2.clearRect(0, 0, cssW, cssH);
    const data = values.slice(-30);
    if (data.length === 0) {
      ctx2.fillStyle = inkMuted;
      ctx2.font = "14px system-ui";
      ctx2.textAlign = "center";
      ctx2.fillText("—", cssW / 2, cssH / 2);
      return;
    }
    const pad = { t: 16, r: 16, b: 28, l: 40 };
    const w = cssW - pad.l - pad.r;
    const h = cssH - pad.t - pad.b;
    const max = Math.max(...data, 10);
    const min = 0;
    ctx2.strokeStyle = border;
    ctx2.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + h * i / 4;
      ctx2.beginPath();
      ctx2.moveTo(pad.l, y);
      ctx2.lineTo(pad.l + w, y);
      ctx2.stroke();
      ctx2.fillStyle = inkMuted;
      ctx2.font = "11px system-ui";
      ctx2.textAlign = "right";
      ctx2.fillText(String(Math.round(max - (max - min) * i / 4)), pad.l - 6, y + 3);
    }
    const grad = ctx2.createLinearGradient(0, pad.t, 0, pad.t + h);
    grad.addColorStop(0, accent + "44");
    grad.addColorStop(1, accent + "00");
    ctx2.beginPath();
    data.forEach((v, i) => {
      const x = pad.l + (data.length === 1 ? w / 2 : w * i / (data.length - 1));
      const y = pad.t + h - (v - min) / (max - min) * h;
      if (i === 0) ctx2.moveTo(x, y);
      else ctx2.lineTo(x, y);
    });
    ctx2.lineTo(pad.l + (data.length === 1 ? w / 2 : w), pad.t + h);
    ctx2.lineTo(pad.l, pad.t + h);
    ctx2.closePath();
    ctx2.fillStyle = grad;
    ctx2.fill();
    ctx2.strokeStyle = accent;
    ctx2.lineWidth = 2;
    ctx2.beginPath();
    data.forEach((v, i) => {
      const x = pad.l + (data.length === 1 ? w / 2 : w * i / (data.length - 1));
      const y = pad.t + h - (v - min) / (max - min) * h;
      if (i === 0) ctx2.moveTo(x, y);
      else ctx2.lineTo(x, y);
    });
    ctx2.stroke();
    ctx2.fillStyle = accent;
    data.forEach((v, i) => {
      const x = pad.l + (data.length === 1 ? w / 2 : w * i / (data.length - 1));
      const y = pad.t + h - (v - min) / (max - min) * h;
      ctx2.beginPath();
      ctx2.arc(x, y, 3, 0, Math.PI * 2);
      ctx2.fill();
    });
  }

  // js/ui/settings.js
  var THEME_LABELS = {
    dark: { fa: "تیره", en: "Dark" },
    light: { fa: "روشن", en: "Light" },
    sand: { fa: "شنی (روشن)", en: "Sand (light)" },
    sky: { fa: "آسمانی (روشن)", en: "Sky (light)" },
    forest: { fa: "جنگلی", en: "Forest" },
    indigo: { fa: "نیلی", en: "Indigo" }
  };
  function renderSettings(root) {
    const lang = state.lang;
    const L = (k) => t(lang, k);
    const s = state.settings;
    root.innerHTML = `
    <div class="page page-settings fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("settings")}</h1>
          <p class="page-sub">${lang === "fa" ? "شخصی‌سازی کامل تجربه تمرین" : "Fully personalize your practice"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <section class="card settings-block">
        <h3>${L("theme")}</h3>
        <div class="theme-grid">
          ${THEMES.map((th) => `
            <button type="button" class="theme-swatch ${s.theme === th ? "is-active" : ""}" data-theme-pick="${th}">
              <span class="swatch-preview" data-th="${th}"></span>
              <span>${THEME_LABELS[th]?.[lang] || th}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "فونت فارسی" : "Persian font"}</h3>
        <div class="font-grid" data-setting="fontFa">
          ${FONTS_FA.map((f) => `
            <button type="button" class="font-card ${s.fontFa === f.id ? "is-active" : ""}" data-value="${f.id}" style="font-family:${f.stack}">
              <span class="font-sample">تایپ</span>
              <span class="font-name">${f.label}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "فونت انگلیسی" : "English font"}</h3>
        <div class="font-grid" data-setting="fontEn">
          ${FONTS_EN.map((f) => `
            <button type="button" class="font-card ${s.fontEn === f.id ? "is-active" : ""}" data-value="${f.id}" style="font-family:${f.stack}">
              <span class="font-sample">Type</span>
              <span class="font-name">${f.label}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${L("fontSize")}</h3>
        <div class="seg" data-setting="fontSize">
          ${[["small", lang === "fa" ? "کوچک" : "S"], ["medium", lang === "fa" ? "متوسط" : "M"], ["large", lang === "fa" ? "بزرگ" : "L"]].map(([v, lab]) => `
            <button type="button" class="seg-btn ${s.fontSize === v ? "is-active" : ""}" data-value="${v}">${lab}</button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${L("sound")}</h3>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای کلید درست" : "Correct key sound"}</span>
          <input type="checkbox" id="key-sound" ${s.keySound !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای خطا" : "Error sound"}</span>
          <input type="checkbox" id="error-sound" ${s.errorSound !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای تکمیل مرحله" : "Stage complete sound"}</span>
          <input type="checkbox" id="complete-sound" ${s.completeSound !== false ? "checked" : ""} />
        </label>
        <label class="slider-row">
          <span>${L("volume")}</span>
          <input type="range" id="sound-volume" min="0" max="100" value="${Math.round((s.soundVolume || 0.55) * 100)}" />
          <span id="vol-val">${Math.round((s.soundVolume || 0.55) * 100)}%</span>
        </label>
        <button type="button" class="btn btn-ghost btn-sm" id="test-sound">${lang === "fa" ? "آزمایش صدا" : "Test sound"}</button>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "نمایش هنگام تایپ" : "Typing display"}</h3>
        <label class="toggle-row">
          <span>${L("showKeyboard")}</span>
          <input type="checkbox" id="show-keyboard" ${s.showKeyboard !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "دیاگرام دست‌ها" : "Hands diagram"}</span>
          <input type="checkbox" id="show-hands" ${s.showHandsDiagram !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("fingerHint")}</span>
          <input type="checkbox" id="show-finger" ${s.showFingerHint !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("showFingerIcon")}</span>
          <input type="checkbox" id="show-finger-icon" ${s.showFingerIcon !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "حالت سخت‌گیرانه (حرف درست الزامی)" : "Strict mode (correct key required)"}</span>
          <input type="checkbox" id="strict-mode" ${s.strictMode !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("caseSensitive")}</span>
          <input type="checkbox" id="case-sensitive" ${s.caseSensitive !== false ? "checked" : ""} />
        </label>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "هدف روزانه" : "Daily goal"}</h3>
        <div class="seg" data-setting="dailyGoal">
          ${[1, 2, 3, 5, 10].map((v) => `
            <button type="button" class="seg-btn ${(s.dailyGoal || 3) === v ? "is-active" : ""}" data-value="${v}">${v}</button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "پشتیبان‌گیری" : "Backup"}</h3>
        <p class="muted" style="margin-bottom:var(--sp-3)">${lang === "fa" ? "خروجی پیشرفت را ذخیره کن یا از فایل قبلی بازیابی کن." : "Export your progress or restore from a backup file."}</p>
        <div class="danger-actions">
          <button type="button" class="btn btn-secondary" id="export-data">${lang === "fa" ? "خروجی JSON" : "Export JSON"}</button>
          <button type="button" class="btn btn-secondary" id="import-data">${lang === "fa" ? "ورودی JSON" : "Import JSON"}</button>
          <input type="file" id="import-file" accept="application/json,.json" hidden />
        </div>
      </section>

      <section class="card settings-block danger">
        <h3>${L("resetTitle")}</h3>
        <div class="reset-options">
          <div class="reset-option">
            <div>
              <strong>${L("resetConfirm")}</strong>
              <p class="muted">${L("resetBody")}</p>
            </div>
            <button type="button" class="btn btn-danger btn-sm" id="reset-progress">${lang === "fa" ? "حذف پیشرفت" : "Reset progress"}</button>
          </div>
          <div class="reset-option">
            <div>
              <strong>${L("wipeAll")}</strong>
              <p class="muted">${L("wipeBody")}</p>
            </div>
            <button type="button" class="btn btn-danger btn-sm" id="reset-all">${lang === "fa" ? "حذف کامل" : "Wipe all"}</button>
          </div>
        </div>
      </section>
    </div>
  `;
    root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));
    root.querySelectorAll("[data-theme-pick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        updateSettings({ theme: btn.dataset.themePick });
        root.querySelectorAll("[data-theme-pick]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
    root.querySelectorAll(".font-grid").forEach((grid) => {
      grid.addEventListener("click", (e) => {
        const btn = e.target.closest(".font-card");
        if (!btn) return;
        grid.querySelectorAll(".font-card").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        updateSettings({ [grid.dataset.setting]: btn.dataset.value });
      });
    });
    root.querySelector('[data-setting="fontSize"]')?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn");
      if (!btn) return;
      updateSettings({ fontSize: btn.dataset.value });
      btn.parentElement.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      document.body.dataset.fontSize = btn.dataset.value;
    });
    root.querySelector('[data-setting="dailyGoal"]')?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn");
      if (!btn) return;
      updateSettings({ dailyGoal: Number(btn.dataset.value) });
      btn.parentElement.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
    root.querySelector("#sound-volume")?.addEventListener("input", (e) => {
      const v = Number(e.target.value) / 100;
      root.querySelector("#vol-val").textContent = `${e.target.value}%`;
      updateSettings({ soundVolume: v });
      setVolume(state.settings.soundEnabled === false ? 0 : v);
    });
    root.querySelector("#test-sound")?.addEventListener("click", () => {
      setVolume(state.settings.soundVolume || 0.55);
      playKeyCorrect();
      setTimeout(() => playKeyWrong(), 180);
    });
    const bindToggle = (id, key) => {
      const el = root.querySelector(id);
      el?.addEventListener("change", () => updateSettings({ [key]: el.checked }));
    };
    bindToggle("#key-sound", "keySound");
    bindToggle("#error-sound", "errorSound");
    bindToggle("#complete-sound", "completeSound");
    bindToggle("#show-keyboard", "showKeyboard");
    bindToggle("#show-hands", "showHandsDiagram");
    bindToggle("#show-finger", "showFingerHint");
    bindToggle("#show-finger-icon", "showFingerIcon");
    bindToggle("#strict-mode", "strictMode");
    bindToggle("#case-sensitive", "caseSensitive");
    root.querySelector("#export-data")?.addEventListener("click", () => {
      const data = exportAllData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `typing-trainer-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
    root.querySelector("#import-data")?.addEventListener("click", () => root.querySelector("#import-file")?.click());
    root.querySelector("#import-file")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        importAllData(JSON.parse(await file.text()));
        location.reload();
      } catch {
        alert(lang === "fa" ? "فایل نامعتبر است" : "Invalid file");
      }
    });
    root.querySelector("#reset-progress")?.addEventListener("click", () => {
      if (confirm(L("resetBody"))) {
        resetAllProgress();
        location.reload();
      }
    });
    root.querySelector("#reset-all")?.addEventListener("click", () => {
      if (confirm(L("wipeBody"))) {
        resetEverything();
        location.reload();
      }
    });
  }

  // js/app.js
  window.__TTT_LESSONS__ = { fa: FA_LESSONS, en: EN_LESSONS };
  window.__TTT_FONTS__ = { FONTS_FA, FONTS_EN };
  var pageRoot = document.getElementById("page-root");
  var navEl = document.getElementById("main-nav");
  function updateNav(route) {
    navEl.querySelectorAll(".nav-item").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.route === route);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.setLang === state.lang);
    });
  }
  function refreshSidebarLabels() {
    const lang = state.lang;
    const map = {
      home: t(lang, "home"),
      curriculum: t(lang, "curriculum"),
      practice: t(lang, "practice"),
      stats: t(lang, "stats"),
      settings: t(lang, "settings")
    };
    navEl.querySelectorAll(".nav-item").forEach((btn) => {
      const label = btn.querySelector("span:last-child");
      if (label && map[btn.dataset.route]) label.textContent = map[btn.dataset.route];
    });
  }
  function boot() {
    applySettings();
    document.body.dataset.fontSize = state.settings.fontSize || "medium";
    refreshSidebarLabels();
    registerRoute("home", () => {
      destroySession();
      renderHome(pageRoot);
    });
    registerRoute("curriculum", () => {
      destroySession();
      renderCurriculum(pageRoot);
    });
    registerRoute("practice", () => {
      destroySession();
      renderPractice(pageRoot);
    });
    registerRoute("lesson", (params) => {
      renderSession(pageRoot, "lesson", params);
    });
    registerRoute("practice-run", (params) => {
      renderSession(pageRoot, "practice-run", params);
    });
    registerRoute("stats", () => {
      destroySession();
      renderStats(pageRoot);
    });
    registerRoute("settings", () => {
      destroySession();
      renderSettings(pageRoot);
    });
    setRouteChangeHandler((name) => {
      updateNav(name === "lesson" ? "curriculum" : name === "practice-run" ? "practice" : name);
    });
    navEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-item");
      if (!btn) return;
      navigate(btn.dataset.route);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.setLang);
        refreshSidebarLabels();
        updateNav(state.route);
        const { name, params } = location.hash ? { name: location.hash.replace(/^#\/?/, "").split("/")[0], params: location.hash.replace(/^#\/?/, "").split("/").slice(1) } : { name: "home", params: [] };
        navigate(name || "home", params);
      });
    });
    subscribeUi();
    bindAudioUnlock();
    startRouter();
  }
  function subscribeUi() {
  }
  document.querySelector(".sidebar-brand")?.addEventListener("click", () => navigate("home"));
  boot();
})();
