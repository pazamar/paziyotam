# פרסום האתר לאינטרנט

האתר שלך קיים כרגע מקומית בקבצים הבאים:
- `index.html`
- `styles.css`
- `script.js`

כדי לקבל כתובת אינטרנט ציבורית (URL אמיתי), אפשר לפרסם את האתר ב-GitHub Pages או ב-Netlify.

## אפשרות 1: GitHub Pages (הכי פשוט אם יש לך חשבון GitHub)

1. צור ריפוזיטורי חדש ב-GitHub.
2. העלה לשם את שלושת הקבצים: `index.html`, `styles.css`, `script.js`.
3. ב-GitHub, עבור ל-Settings > Pages.
4. בחר את הענף (`main` או `master`) ושמור.
5. המתן כמה דקות.
6. תקבל כתובת URL בסגנון: `https://USERNAME.github.io/REPO_NAME`

> היתרון: חינמי, פשוט, לא צריך שרת.

## אפשרות 2: Netlify

1. פתח חשבון ב-Netlify או תתחבר עם Google/GitHub.
2. בחר "Sites" > "New site from Git" או פשוט גרור את התיקייה `paziyotam` לחלון ה-Drag & Drop שלהם.
3. אם בחרת Git, חיבור לחשבון GitHub ופרוס את הריפוזיטורי.
4. Netlify ייתן לך URL חינם בסגנון `https://cool-name.netlify.app`.

> היתרון: פרסום מהיר, אפשרות לשינוי מיידי, לא צריך לטפל בשרת.

## אפשרות 3: Vercel

1. פתח חשבון ב-Vercel.
2. קישור ל-GitHub ופרוס את הריפוזיטורי.
3. Vercel יפרסם את האתר ב-URL חינם.

## פרסום מקומי לצפייה
אם רק רוצה לראות את האתר בדפדפן שלך כרגע, תוכל להריץ:

```bash
cd '/Users/pazamar/new projet/paziyotam'
python3 -m http.server 8000
```

ואז לפתוח בדפדפן: `http://localhost:8000`

> זאת רק כתובת מקומית, לא כתובת אינטרנט ציבורית.

## מה אני יכול לעשות עכשיו
- להסביר צעד-אחר-צעד איך לפתוח את הריפוזיטורי ב-GitHub ולפרסם אותו.
- להכין קבצי `README.md` ו-`.gitignore` אם תרצה.
- לעזור לקשר את האתר ל-Netlify או Vercel.
