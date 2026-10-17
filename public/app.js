(() => {
  const { useState, useEffect } = React;
  const html = htm.bind(React.createElement);

  const profile = {
    name: 'Ananyaa Singhal',
    email: 'anayaa160407@gmail.com',
    github: 'https://github.com/ananyaa-creator',
    linkedin: 'https://www.linkedin.com/in/ananyaa-056b2a383',
    resume: 'https://docs.google.com/document/d/1ndSWALq2eJBzurVHvJvtE7gKd6CGyq1s/edit?usp=sharing&ouid=110527117956731971729&rtpof=true&sd=true',
    cartoon: '/images/ananyaa-cartoon.png'
  };

  const projects = [
    {
      id: 'amazon',
      number: '01',
      title: 'Amazon Clone',
      category: 'Frontend',
      tag: 'RETAIL INTERFACE STUDY',
      status: 'EDIT DETAILS',
      tone: 'amazon',
      mark: 'amazon.',
      summary: 'A retail-interface case study focused on familiar shopping patterns and clear navigation.',
      problem: 'Explore how a busy retail interface can make products and categories easy to scan.',
      contribution: 'Replace this with the exact components and interactions you implemented.',
      features: 'Responsive layout, product listings, navigation and cart interactions only if verified in your version.',
      learning: 'Document what you learned about component structure, layout, and state after confirming the details.',
      tech: 'HTML · CSS',
      data: 'Mock data unless your repository proves otherwise',
      repo: 'https://github.com/ananyaa-creator/AMAZON-CLONE',
      demo: 'https://ananyaa-amazon-clone.vercel.app/'
    },

{
  id: 'stone-paper-scissors',
  number: '02',
  title: 'Stone Paper Scissors',
  category: 'Frontend',
  tag: 'INTERACTIVE MINI PROJECT',
  status: 'COMPLETED',
  tone: 'cine',
  mark: 'STONE\nPAPER\nSCISSORS',
  summary: 'A classic Stone Paper Scissors game reimagined as a simple, interactive browser experience.',
  problem: 'Turn a familiar hand game into an engaging digital experience with clear feedback and responsive interactions.',
  contribution: 'Frontend development using HTML, CSS, and JavaScript, including game logic, player interactions, and result handling.',
  features: 'Player-versus-computer gameplay, random computer choices, win/loss/draw detection, and instant result feedback.',
  learning: 'JavaScript conditionals, randomisation, DOM manipulation, event handling, and implementing game logic.',
  tech: 'HTML · CSS · JavaScript',
  data: 'Runs locally in the browser; no backend or external API required.',
  repo: 'https://github.com/ananyaa-creator/Stone-Paper-Scissors',
  demo: 'https://stone-paper-scissors-roan.vercel.app/'
},
    {
      id: 'tictactoe',
      number: '03',
      title: 'Tic-Tac-Toe',
      category: 'Interactive',
      tag: 'PLAYABLE MINI PROJECT',
      status: 'PORTFOLIO DEMO',
      tone: 'game',
      mark: '× ○',
      summary: 'A tiny strategy break: take turns, spot a line, and try not to give the game away.',
      problem: 'Practice game state, turn-taking, and win/draw detection in a small interface.',
      contribution: 'The playable board below is implemented locally in this portfolio; repository details remain editable.',
      features: 'Alternating turns, win detection, draw detection, reset, and keyboard-operable cells.',
      learning: 'State transitions and covering end states.',
      tech: 'HTML · CSS · JavaScript',
      data: 'Runs entirely in your browser',
      repo: 'https://github.com/ananyaa-creator/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-five-rho-34.vercel.app/'
    },
    {
      id: 'password',
      number: '04',
      title: 'Password Generator',
      category: 'Utility',
      tag: 'BROWSER-ONLY UTILITY',
      status: 'PORTFOLIO DEMO',
      tone: 'password',
      mark: '••••••',
      summary: 'A configurable password-making utility with no server, account, or storage.',
      problem: 'Make it quick to create a random password with the character groups you want.',
      contribution: 'Built as a Python and Flask web application. See the GitHub repository for implementation details.',
      features: 'Configurable length, character-set toggles, secure browser randomness where available, and copy when supported.',
      learning: 'Input validation, Web Crypto, and designing small useful tools.',
      tech: 'Python · Flask · HTML · CSS · JavaScript',
      data: 'Generated locally; never sent or stored',
      repo: 'https://github.com/ananyaa-creator/password-strength-checker',
      demo: 'https://password-strength-checker-one-red.vercel.app/' 
    },
  ];


const books = [
  {
    title: 'The Builder Era',
    author: 'CURRENTLY BUILDING',
    note: 'Second-year B.Tech CSE student, learning to turn ideas into things people can actually use. React, Java, Spring Boot, Python, databases, and a growing collection of projects. The goal is not just to make things work, but to understand why they work.'
  },
  {
    title: 'Eight Projects, One Direction',
    author: 'THE PLACEMENT PLAN',
    note: 'Aiming to build eight meaningful projects by the end of third year: four AI/ML projects and four web development projects. The bigger plan is to develop strong, distinct AI, developer, and SDE profiles instead of relying on one generic resume.'
  },
  {
    title: 'MAGELLAN',
    author: 'THE IDEA THAT STARTED IT',
    note: 'An education and career guidance platform imagined to help students connect their interests, academic choices, higher studies, and future opportunities. The challenge is to make a big, meaningful problem feel simple enough to solve, one feature at a time.'
  },
  {
    title: 'CineSync',
    author: 'A PRODUCT IN PROGRESS',
    note: 'Building a movie-discovery experience with React and Vite on the frontend, with a Spring Boot and PostgreSQL backend planned. A reminder that a polished interface is only one part of a product: architecture, APIs, authentication, data, and real functionality matter too.'
  },
  {
    title: 'The DSA Chapter',
    author: 'THINK BEFORE YOU CODE',
    note: 'Working through DSA in C++, with a focus on understanding the brute-force approach, improving it, analysing time and space complexity, and eventually solving unfamiliar problems independently. The real milestone is not getting accepted code; it is being able to explain every decision.'
  },
  {
    title: 'Ideas With a Deadline',
    author: 'HACKATHONS & EXPERIMENTS',
    note: 'Exploring hackathons, building portfolio projects, and learning how to turn an idea into a convincing prototype. The next level is moving beyond a good-looking demo towards a product with a clear problem, thoughtful design, working features, and a reason to exist.'
  },
  {
    title: 'Where Ideas Find Their Voice',
    author: 'HORIZON · LEADERSHIP',
    note: 'Growing as a core member and General Secretary of HORIZON, the debating society. Organising, presenting, motivating juniors, and learning to take responsibility when things need to happen. Leadership is not just being the person with the plan; it is helping everyone move forward.'
  },
  {
    title: 'The Bigger Picture',
    author: 'CAREER, CURIOSITY & BECOMING',
    note: 'Balancing college academics with DSA, full-stack development, AI/ML, and career exploration. Long-term, the ambition is to build things, lead teams, communicate confidently, and create something of my own. Still figuring things out, but no longer waiting to have everything figured out before starting.'
  }
];


  const skills = [
    {
      label: '01 / The interface desk',
      title: 'Frontend',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      note: 'Building responsive, readable interfaces and learning through implementation.'
    },
    {
      label: '02 / The logic shelf',
      title: 'Programming & DSA',
      tags: ['C++', 'JavaScript', 'Java'],
      note: 'Problem-solving practice, fundamentals, and steady progress.'
    },
    {
      label: '03 / The workshop',
      title: 'Backend & data',
      tags: ['Java', 'Spring Boot · learning', 'PostgreSQL · learning', 'SQL'],
      note: 'A learning track; this portfolio itself has no backend.'
    },
    {
      label: '04 / The toolkit',
      title: 'Developer tools',
      tags: ['Git', 'GitHub', 'VS Code'],
      note: 'Version control, local development, and project organisation.'
    }
  ];

  function App() {
    const [
      menu,
      setMenu
    ] = useState(false);

    const [
      scrolled,
      setScrolled
    ] = useState(false);

    const [
      filter,
      setFilter
    ] = useState('All');

    const [
      activeProject,
      setActiveProject
    ] = useState(null);

    const [
      bookIndex,
      setBookIndex
    ] = useState(0);

    const [
      board,
      setBoard
    ] = useState(Array(9).fill(''));

    const [
      turn,
      setTurn
    ] = useState('X');

    useEffect(() => {
      const fn = () => setScrolled(window.scrollY > 24);

      window.addEventListener('scroll', fn, {
        passive: true
      });

      return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => {
      const els = [...document.querySelectorAll('.reveal')];

      if (!('IntersectionObserver' in window)) {
        els.forEach(e => e.classList.add('visible'));
        return;
      }

      const ob = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            ob.unobserve(e.target);
          }
        }),
        {
          threshold: .08
        }
      );

      els.forEach(e => ob.observe(e));

      return () => ob.disconnect();
    }, []);

    useEffect(() => {
      const img = new Image();

      img.onload = () => {
        const el = document.querySelector('.portrait-inner');

        if (el) {
          el.classList.add('has-image');

          const real = el.querySelector('img');
          real.src = profile.cartoon;
        }
      };

      img.src = profile.cartoon;
    }, []);

    const filtered = projects.filter(
      p => filter === 'All' || p.category === filter
    );

    const gameWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (const line of lines) {
        if (
          board[line[0]] &&
          board[line[0]] === board[line[1]] &&
          board[line[1]] === board[line[2]]
        ) {
          return board[line[0]];
        }
      }

      return '';
    };

    const winner = gameWinner();
    const draw = !winner && board.every(Boolean);

    const play = (i) => {
      if (board[i] || winner || draw) return;

      const next = [...board];
      next[i] = turn;

      setBoard(next);
      setTurn(turn === 'X' ? 'O' : 'X');
    };

    const resetGame = () => {
      setBoard(Array(9).fill(''));
      setTurn('X');
    };

    const nav = [
      ['Home', '#home'],
      ['My Story', '#story'],
      ['Projects', '#projects'],
      ['Skills', '#skills'],
      ['Beyond the Code', '#beyond'],
      ['Life Lately', '#bookshelf'],
      ['Contact', '#contact']
    ];

    return html`
      <${React.Fragment}>
        <header class=${'site-nav ' + (scrolled ? 'scrolled' : '')}>
          <a
            class="brand"
            href="#home"
            aria-label="Ananyaa's Little Universe home"
          >
            a<em>✳</em> / universe
          </a>

          <button
            class="menu-toggle"
            aria-expanded=${menu}
            aria-label="Toggle navigation"
            onClick=${() => setMenu(!menu)}
          >
            ${menu ? 'Close ×' : '☰ Menu'}
          </button>

          <nav
            class=${'nav-links ' + (menu ? 'open' : '')}
            aria-label="Main navigation"
          >
            ${nav.map(([label, href]) => html`
              <a
                href=${href}
                onClick=${() => setMenu(false)}
              >
                ${label}
              </a>
            `)}

            <a
              class="nav-cta"
              href="#contact"
              onClick=${() => setMenu(false)}
            >
              Say hello ↗
            </a>
          </nav>
        </header>

        <main>
          <section class="hero" id="home">
            <div class="hero-copy">
              <div class="hero-kicker">
                <span class="pulse"></span>
                WELCOME TO MY LITTLE UNIVERSE
              </div>

              <h1>
                Some girls collect books.
                <em>I collect ideas.</em>
              </h1>

              <p class="hero-name">Ananyaa Singhal.</p>

              <p class="hero-sub">
                Computer Science student · Frontend developer · Professional overthinker of good ideas.
              </p>

              <div class="hero-meta">
                <span class="meta-chip">B.Tech CSE · Year 2</span>
                <span class="meta-chip">BVCOE, GGSIPU</span>
              </div>

              <div class="eyebrow">
                <span class="pulse"></span>
                Currently building & learning
              </div>

              <div class="actions" style=${{ marginTop: '20px' }}>
                <a class="btn btn-primary" href="#story">
                  Enter my world <span>↘</span>
                </a>

                <a class="btn btn-quiet" href="#projects">
                  Meet my projects ↗
                </a>

                <a
                  class="btn btn-quiet"
                  href=${profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Résumé ↗
                </a>
              </div>

              <div class="social-mini">
                <a href=${profile.github} target="_blank" rel="noreferrer">
                  ↗ GITHUB
                </a>

                <a href=${profile.linkedin} target="_blank" rel="noreferrer">
                  ↗ LINKEDIN
                </a>

                <span>MADE OF CURIOSITY & CAFFEINE-ADJACENT ENERGY</span>
              </div>
            </div>

            <div
              class="hero-art"
              aria-label="Illustrated portrait placeholder surrounded by books and stars"
            >
              <div class="halo"></div>
              <div class="float-note note-a">collecting little wonders ✿</div>
              <div class="float-book"></div>

              <div class="portrait-frame">
                <div class="portrait-inner">
                  <img alt="Ananyaa's cartoon illustration placeholder"/>

                  <div class="portrait-placeholder">
                    <div class="placeholder-orbit">✿</div>
                    <strong>Your cartoon belongs here.</strong>

                    <span>
                      ADD YOUR ILLUSTRATION TO<br/>
                      public/images/ananyaa-cartoon.png
                    </span>

                    <span>
                      PNG · transparent background works beautifully
                    </span>
                  </div>
                </div>
              </div>

              <div class="float-note note-b">ideas, in bloom.</div>
              <span class="spark s1">✦</span>
              <span class="spark s2">✳</span>
              <span class="spark s3">✧</span>
            </div>
          </section>

          <section class="section story" id="story">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 01 · THE ORIGIN STORY</div>
                <h2>
                  Chapter One:
                  <em>The Girl Who Likes Making Things.</em>
                </h2>
              </div>

              <div class="section-note">
                A SMALL INTRODUCTION<br/>
                NO SPOILERS, JUST POTENTIAL
              </div>
            </div>

            <div class="story-grid">
              <div class="chapter-mark reveal">01</div>

              <article class="journal reveal">
                <div class="tiny-label">A PAGE FROM MY NOTEBOOK</div>

                <h3>
                  I like when an idea becomes something you can actually
                  <em>use.</em>
                </h3>

                <p>
                  I'm a second-year Computer Science student at Bharati Vidyapeeth’s College of Engineering, GGSIPU. I enjoy learning by building: exploring frontend development, solving programming problems, and figuring out how small details can make a digital experience feel clear and thoughtful.
                </p>

                <p>
                  I'm drawn to the overlap between logic and storytelling — turning a fuzzy problem into an interface people can understand, use, and enjoy. I also love communicating ideas and working with people whose strengths are different from mine. The best projects leave room for everyone to make the idea better.
                </p>

                <p>
                  Right now, I'm learning, iterating, and building a stronger foundation one project at a time.
                  <span class="scribble">still becoming, always curious.</span>
                </p>

                <div class="story-stamps">
                  <span class="stamp">✳ BUILD TO LEARN</span>
                  <span class="stamp">✎ ASK BETTER QUESTIONS</span>
                  <span class="stamp">♡ MAKE IT USEFUL</span>
                </div>
              </article>
            </div>
          </section>

          <section class="section projects" id="projects">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 02 · SELECTED WORKS</div>
                <h2>
                  Things I've Built:
                  <em>My Projects & Experiments.</em>
                </h2>
              </div>

              <div class="section-note">
                FOUR PROJECTS & COUNTING<br/>
                BUILT TO LEARN, MADE TO GROW
              </div>
            </div>

            <div class="filters" role="group" aria-label="Filter projects">
              ${['All', 'Frontend', 'Interactive', 'Utility'].map(f => html`
                <button
                  class=${'filter ' + (filter === f ? 'active' : '')}
                  aria-pressed=${filter === f}
                  onClick=${() => setFilter(f)}
                >
                  ${f === 'All' ? '✳ All projects' : f}
                </button>
              `)}
            </div>

            <div class="project-grid">
              ${filtered.map(p => html`
                <article class=${'project-card reveal'}>
                  <div class=${'poster ' + p.tone}>
                    <div class="poster-title">${p.mark}</div>
                  </div>

                  <div class="card-body">
                    <div class="card-top">
                      <span>${p.number} / ${p.category}</span>
                      <span>${p.status}</span>
                    </div>

                    <h3>${p.title}</h3>
                    <p>${p.summary}</p>

                    <button
                      class="card-link"
                      onClick=${() => setActiveProject(activeProject === p.id ? null : p.id)}
                      aria-expanded=${activeProject === p.id}
                    >
                      ${activeProject === p.id ? 'CLOSE NOTES −' : 'OPEN CASE FILE ↗'}
                    </button>
                  </div>
                </article>
              `)}
            </div>

            <div
              id="project-detail"
              class=${'project-detail ' + (activeProject ? 'open' : '')}
              aria-live="polite"
            >
              ${activeProject && (() => {
                const p = projects.find(x => x.id === activeProject);

                return html`
                  <div class="eyebrow">
                    CASE FILE ${p.number} · ${p.category}
                  </div>

                  <h3>${p.title}</h3>

                  <p style=${{
                    color: 'var(--rose)',
                    fontSize: '12px'
                  }}>
                    ${p.summary}
                  </p>

                  <div class="detail-grid">
                    <div>
                      <h4>The problem</h4>
                      <p>${p.problem}</p>
                    </div>

                    <div>
                      <h4>My contribution</h4>
                      <p>${p.contribution}</p>
                    </div>

                    <div>
                      <h4>Features & status</h4>
                      <p>${p.features}</p>
                    </div>

                    <div>
                      <h4>What I learned</h4>
                      <p>${p.learning}</p>
                    </div>

                    <div>
                      <h4>Stack / data</h4>
                      <p>
                        ${p.tech}<br/>
                        ${p.data}
                      </p>
                    </div>

                    <div>
                      <h4>Links</h4>
                      <p>
                        <a
                          class="card-link"
                          href=${p.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Source Code on GitHub ↗
                        </a>
                        <br/>

                        <a
                          class="card-link"
                          href=${p.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Explore Live Demo ↗
                        </a>
                      </p>
                    </div>
                  </div>
                `;
              })()}
            </div>

            <div class="demo reveal">
              <div class="eyebrow">
                A LITTLE INTERMISSION · LIVE IN THIS PAGE
              </div>

              <h3>Take five. Play a round.</h3>

              <p>
                This working Tic-Tac-Toe is a client-side portfolio demo, not a claim about the repository version.
              </p>

              <div class="game-board" role="group" aria-label="Tic-Tac-Toe board">
                ${board.map((v, i) => html`
                  <button
                    class="game-cell"
                    aria-label=${'Cell ' + (i + 1) + (v ? ', ' + v : ' empty')}
                    onClick=${() => play(i)}
                    disabled=${!!v || !!winner || draw}
                  >
                    ${v}
                  </button>
                `)}
              </div>

              <div class="demo-row">
                <span class="mono" aria-live="polite">
                  ${winner ? '✦ ' + winner + ' wins!' : draw ? 'A draw. Well played.' : 'TURN: ' + turn}
                </span>

                <button class="small-btn outline" onClick=${resetGame}>
                  Reset board ↻
                </button>
              </div>
            </div>

          </section>

          <section class="section skills" id="skills">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 03 · THE TOOLKIT</div>
                <h2>
                  The Spellbook:
                  <em>Tools I Use to Make Things Happen.</em>
                </h2>
              </div>

              <div class="section-note">
                TOOLS ARE NOT THE MAGIC<br/>
                THE THINKING IS
              </div>
            </div>

            <p class="skills-intro reveal">
              A working toolkit, not a leaderboard. I'm growing my range by building things, revisiting fundamentals, and getting more comfortable with the tools behind the interface.
            </p>

            <div class="spell-grid">
              ${skills.map(s => html`
                <article class="spell-card reveal">
                  <div class="mono">${s.label}</div>
                  <h3>${s.title}</h3>

                  <div class="skill-tags">
                    ${s.tags.map(t => html`<span>${t}</span>`)}
                  </div>

                  <p style=${{
                    fontSize: '11px',
                    lineHeight: 1.7,
                    color: '#6b5152'
                  }}>
                    ${s.note}
                  </p>
                </article>
              `)}
            </div>

            <div class="skill-foot reveal">
              ✳ SELF-REPORTED DSA PRACTICE: APPROX. 70–80 PROBLEMS · NOT A PLATFORM-VERIFIED STATISTIC
            </div>
          </section>

          <section class="section beyond" id="beyond">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 04 · THE PLOT TWIST</div>
                <h2>
                  Plot Twist:
                  <em>I Also Love the Stage.</em>
                </h2>
              </div>

              <div class="section-note">
                COMMUNICATION IS PART OF THE BUILD
              </div>
            </div>

            <div class="beyond-grid">
              <article class="beyond-card dark reveal">
                <div class="big-icon">⌘</div>
                <div class="tiny-label">EXECUTIVE MEMBER</div>
                <h3>ACM</h3>

                <p>
                  Contributed to organizing activities, supporting event execution, and working collaboratively within a technical student community.
                </p>

                <div class="mono">TEAMWORK · EVENT COORDINATION · COLLABORATION</div>
              </article>

              <article class="beyond-card light reveal">
                <div class="big-icon">✳</div>
                <div class="tiny-label">GENERAL SECRETARY</div>
                <h3>HORIZON</h3>

                <p>
                  Help lead the debating society, coordinate activities, engage with juniors, and contribute to planning and organizing society events.
                </p>

                <div class="mono">LEADERSHIP · PUBLIC SPEAKING · TEAM MANAGEMENT</div>
              </article>

              <article class="beyond-card outline reveal">
                <div class="eyebrow">THE HUMAN INTERFACE</div>
                <h3>Clear communication. Better collaboration.</h3>

                <p>
                  Whether I'm explaining a concept, presenting an idea, or working through a problem with a team, I enjoy helping different perspectives find a shared direction. Add confirmed events and achievements here when ready.
                </p>
              </article>
            </div>
          </section>

          <section class="section bookshelf" id="bookshelf">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 05 · MY CURRENT CHAPTER</div>
                <h2>
                  Life Lately:
                  <em>What I'm Building & Becoming.</em>
                </h2>
              </div>

              <div class="section-note">
                PLANS, PROJECTS & LITTLE AMBITIONS<br/>
                TAP A CHAPTER TO READ MORE
              </div>
            </div>

            <div class="bookshelf-wrap reveal">
              <div class="shelf-row" role="group" aria-label="Interactive bookshelf">
                ${books.map((b, i) => html`
                  <button
                    class="book"
                    aria-pressed=${bookIndex === i}
                    aria-label=${'Open book note ' + (i + 1) + ': ' + b.title}
                    onClick=${() => setBookIndex(i)}
                  >
                    <span class="book-num">0${i + 1}</span>
                    <span>${b.title}</span>
                    <span>✳</span>
                  </button>
                `)}
              </div>

              <div class="book-note" aria-live="polite">
                <div>
                  <div class="mono">${books[bookIndex].author}</div>
                  <h3>${books[bookIndex].title}</h3>
                  <p>${books[bookIndex].note}</p>
                </div>

                <div style=${{
                  fontSize: '28px',
                  color: 'var(--red)'
                }}>
                  ✦
                </div>
              </div>
            </div>
          </section>

          <section class="section principles" id="principles">
            <div class="section-head reveal">
              <div>
                <div class="eyebrow">CHAPTER 06 · THE AUTHOR'S NOTES</div>
                <h2>
                  How I
                  <em>Think.</em>
                </h2>
              </div>

              <div class="section-note">
                SMALL PRINCIPLES<br/>
                I KEEP COMING BACK TO
              </div>
            </div>

            <div class="principle-layout">
              <p class="principle-aside reveal">
                “Good work starts with good questions — and gets better when you let it be a draft first.”
              </p>

              <div class="principle-list">
                <article class="principle reveal">
                  <div class="principle-num">01 /</div>

                  <div>
                    <h3>Understand the problem before building the solution.</h3>
                    <p>
                      Get clear on who it's for, what is actually difficult, and what a useful outcome would look like.
                    </p>
                  </div>
                </article>

                <article class="principle reveal">
                  <div class="principle-num">02 /</div>

                  <div>
                    <h3>Turn ideas into useful, usable interfaces.</h3>
                    <p>
                      A clever idea matters more when people can understand it, navigate it, and make something happen with it.
                    </p>
                  </div>
                </article>

                <article class="principle reveal">
                  <div class="principle-num">03 /</div>

                  <div>
                    <h3>Learn through implementation, iteration, and collaboration.</h3>
                    <p>
                      Build a first version, learn from what breaks, and invite other perspectives into the next one.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section class="section contact" id="contact">
            <div class="eyebrow reveal">THE LAST PAGE · NOT THE END</div>

            <h2 class="reveal">
              End of Chapter.
              <em>Beginning of Something Else.</em>
            </h2>

            <div class="contact-bottom reveal">
              <p>
                Have a good idea?
                <strong>Let's make it real.</strong>
                <br/>

                <span style=${{
                  font: '10px var(--mono)',
                  fontStyle: 'normal',
                  color: '#8b6267'
                }}>
                  MY INBOX IS ONE EDIT AWAY FROM READY.
                </span>
              </p>

              <div class="contact-links">
                <a href=${'mailto:' + profile.email}>EMAIL ↗</a>

                <a href=${profile.github} target="_blank" rel="noreferrer">
                  GITHUB ↗
                </a>

                <a href=${profile.linkedin} target="_blank" rel="noreferrer">
                  LINKEDIN ↗
                </a>

                <a href=${profile.resume} target="_blank" rel="noreferrer">
                  RÉSUMÉ ↗
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer class="footer">
          <div class="signature">
            ananyaa<span>✳</span>
          </div>

          <div>
            BUILT WITH CURIOSITY, CODE & A FEW TOO MANY OPEN TABS.
          </div>

          <a href="#home">BACK TO THE FIRST PAGE ↑</a>

          <div>
            © ${new Date().getFullYear()} · END OF CURRENT DRAFT
          </div>
        </footer>
      <//>
    `;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    html`<${App}/>`
  );
})();