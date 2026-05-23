// ============================================================
// newsletters.js — All newsletter data
// ============================================================
// HOW IT WORKS:
//   Each object = one newsletter issue.
//   `id`     → must be unique, used to link the card to the popup
//   `number` → the big background number shown on the card
//   `month`  → displayed as the popup heading
//   `poster` → image path in public/images/newsletters/
//   `ready`  → true = clickable card, false = shows inProgress.png
//   `content`→ the full HTML content of the newsletter popup
//
// TO ADD A NEW NEWSLETTER:
//   1. Set `ready: true` on the next issue
//   2. Add your poster image to public/images/newsletters/
//   3. Write your content in the `content` field using HTML
//   4. Add any photos to public/images/newsletters/yourmonth/
// ============================================================

export const newsletters = [

  // ── ISSUE 1 ─────────────────────────────────────────────────
  {
    id: "newsletter1",
    number: 1,
    month: "May",
    subtitle: "An Endless Month Filled with Learning & Celebrations",
    poster: "/images/newsletters/may2025/may2025.png",
    ready: true,
    content: `
      <p>The end of April, I began a goal I had been wanting to complete since I was in Grade 10, and that was a website!
         I embarked on the journey to create a website from scratch, and finally made it!
          Along the way, I decided to make it even more personal by making it
          <strong>Netflix-themed</strong>. One of my goals is to work at Netflix one day.
          This came from my love for cinema, and TV shows when I started recognizing how well
          the algorithm worked for me in recommending me TV shows/movies.</p><br>

      <p>This was probably my busiest month of the year. From painting the walls of my new house, to graduating from the cadet program, and volunteering at a conference. It was <strong>VERY</strong> hectic.</p><br>

      <h3>From One Wall to the Whole House…</h3>
      <p>What started as a simple mission between my sister and me — just repainting our bedroom walls — quickly turned into a full-house makeover. After moving into a new home, we noticed scuff marks and patches on the walls and thought, why not freshen things up a bit?</p><br>
      <p>After we painted our first wall white, we got <em>way</em> too confident. Next thing you know, we were experimenting with colors, textures, and even wallpapers. Our DIY painting project spiraled into a two-week adventure.</p><br>

      <div style="text-align: center;">
        <img src="/images/newsletters/may2025/BEFORE.png" alt="before"
          style="display:inline-block; height:300px; width:auto; margin:0.5em; object-fit:cover; border-radius:6px; vertical-align:middle;">
        <img src="/images/newsletters/may2025/AFTER.jpeg" alt="after"
          style="display:inline-block; height:300px; width:auto; margin:0.5em; object-fit:cover; border-radius:6px; vertical-align:middle;">
        <p style="margin-top:0.5em;"><em style="color:white;">Before & After of my room - still not complete BTW!</em></p>
      </div><br>

      <p>You might be wondering why take on a project like this in my only three weeks off before summer school? The truth is, I thrive when I'm busy. There's so much to learn, create, and experience.</p><br>
      <p>So, if you've been thinking about repainting your room; <em>just go for it.</em> <strong>It's worth it. 🙂</strong></p>

      <br><hr><br>

      <h3>Sylvie Brought Me Water</h3>
      <p>In the middle of all the house chaos, <strong>I officially aged out of the cadet program!</strong> I joined back in October 2019 as a shy 13-year-old. After years of showing up, learning, and growing, <strong>I can say with confidence: I got so much out of it.</strong></p><br>
      <img src="/images/newsletters/may2025/AO.jpeg" alt="age out" class="newsletter-img">
      <p style="text-align:center; margin-top:0.5em;"><em style="color:white;">Getting my mug!</em></p><br>
      <p>By the end, I earned the rank of <strong>CPO2</strong>. The weeks I spent at <strong>HMCS Quadra</strong> were truly unforgettable.</p><br>

      <br><hr><br>

      <h3>CCECE or an Eating Week</h3>
      <p>To end an already eventful month, I volunteered at the <strong>Canadian Conference for Electrical and Computer Engineering (CCECE)</strong> — honestly, <strong>one of the best experiences of my life.</strong></p><br>
      <img src="/images/newsletters/may2025/CCECE.jpeg" alt="CCECE" class="newsletter-img">
      <p style="text-align:center; margin-top:0.5em;"><em style="color:white;">Setting down the conference!</em></p><br>
      <p>The most important thing I got was <strong>MOTIVATION</strong> — to do something good and something of my own.</p>

      <br><hr><br>

      <h4>And while those were my most significant learning events…</h4>
      <p><strong>Happy Mother's Day to my amazing mommy</strong>, and <strong>happy graduation to my sister</strong>. It was a great month!</p>
      <div style="text-align:center;">
        <img src="/images/newsletters/may2025/MD.JPG" alt="mothers day" class="side-by-side">
        <img src="/images/newsletters/may2025/GRAD.jpeg" alt="graduation" class="side-by-side">
        <p style="margin-top:0.5em;"><em style="color:white;">Mother's Day (left) & Sis Grad (right)!</em></p>
      </div>
    `,
  },

  // ── ISSUE 2 ─────────────────────────────────────────────────
  {
    id: "newsletter2",
    number: 2,
    month: "June",
    subtitle: "Reformative June",
    poster: "/images/newsletters/june2025.png",
    ready: true,
    content: `
      <p>The beginning of June was marked with a celebration of the age-outs of my friends and the mid-way mark of the year that began my goal in self-growth.</p><br>

      <h3>Days in my Life</h3>
      <p>An Instagram account that started as a joke between my sister and I transformed into an opportunity for me to monitor myself and the changes I can make in my lifestyle.</p><br>
      <p>Making those videos, I noticed I was taking <em>wayy</em> too many naps in a day and wasn't staying on tasks. So it was time to fix that.</p><br>
      <p>Slowly, I am becoming more and more mindful of my choices. The most important thing I've learned: routine is extremely important.</p>

      <br><hr><br>

      <h3>Design Team Dubs</h3>
      <p>This summer I wrapped up a wire fatigue tester project for UBC Sailbot. What started as a simple project became a multi-faceted one:</p>
      <ol>
        <li>C++ Coding — coding an arduino for a push-pull mechanism</li>
        <li>3D Printing — created my own attachment for the wire</li>
        <li>Python — outputting data into a CSV file</li>
        <li>Problem Solving — understanding the importance of testing and iteration</li>
      </ol>

      <br><hr><br>

      <h3>First Summer Semester @UBC = donezo!</h3>
      <ul>
        <li>Math 253 was conceptually interesting, expanding on Math 152</li>
        <li>I did fairly decent</li>
        <li>Quizzes were far easier than the final (cry emoji)</li>
      </ul>
      <p>Summer school has always been a fun experience. The skill of understanding topics quickly and applying them is something I believe I mastered.</p>
    `,
  },

  // ── ISSUES 3–12 (not ready yet) ──────────────────────────────
  // When ready: set ready: true, add poster path, write content
  { id: "newsletter3",  number: 3,  month: "July",      subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter4",  number: 4,  month: "August",    subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter5",  number: 5,  month: "September", subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter6",  number: 6,  month: "October",   subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter7",  number: 7,  month: "November",  subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter8",  number: 8,  month: "December",  subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter9",  number: 9,  month: "January",   subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter10", number: 10, month: "February",  subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter11", number: 11, month: "March",     subtitle: "", poster: "", ready: false, content: "" },
  { id: "newsletter12", number: 12, month: "April",     subtitle: "", poster: "", ready: false, content: "" },
];
