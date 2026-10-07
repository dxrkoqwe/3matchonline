// ===== CONSTANTS =====
const SIZE = 8;
const TILE_TYPES = [
  { color: '#FF5252', shadow: '#B71C1C', sides: 6, rotation: 0 },
  { color: '#448AFF', shadow: '#0D47A1', sides: 6, rotation: 30 },
  { color: '#69F0AE', shadow: '#1B5E20', sides: 8, rotation: 22.5 },
  { color: '#FFD740', shadow: '#F57F17', sides: 8, rotation: 0 },
  { color: '#E040FB', shadow: '#6A1B9A', sides: 6, rotation: 15 },
  { color: '#40E0D0', shadow: '#00695C', sides: 8, rotation: 22.5 },
  { color: '#FF80AB', shadow: '#880E4F', sides: 6, rotation: -15 },
];
const BOOSTER_COST = 0; // бесконечные монетки

// ===== LEVELS =====
const LEVELS = [
  { id:1, moves:30, types:5, target:500, diff:'easy', reward:10 },
  { id:2, moves:30, types:5, target:800, diff:'easy', reward:10 },
  { id:3, moves:30, types:5, target:0, diff:'easy', reward:12, goal:'color', color:0, count:15 },
  { id:4, moves:28, types:6, target:1000, diff:'normal', reward:15 },
  { id:5, moves:30, types:6, target:0, diff:'normal', reward:15, goal:'heart', count:8 },
  { id:6, moves:30, types:6, target:1200, diff:'normal', reward:18 },
  { id:7, moves:30, types:6, target:0, diff:'normal', reward:18, goal:'color', color:1, count:20 },
  { id:8, moves:28, types:6, target:1400, diff:'normal', reward:20 },
  { id:9, moves:30, types:6, target:0, diff:'normal', reward:22, goal:'heart', count:10 },
  { id:10, moves:30, types:6, target:1600, diff:'normal', reward:25 },
  { id:11, moves:30, types:6, target:1300, diff:'normal', reward:22, obstacles:['........','........','..#.....','........','.....#..','........','........','........'] },
  { id:12, moves:30, types:6, target:0, diff:'normal', reward:22, goal:'ice', obstacles:['........','..1111..','..1111..','........','........','........','........','........'] },
  { id:13, moves:28, types:6, target:1500, diff:'hard', reward:24, obstacles:['........','........','..LL....','..LL....','........','........','........','........'] },
  { id:14, moves:30, types:7, target:0, diff:'hard', reward:26, goal:'ice', obstacles:['........','........','..1111..','..1..1..','..1..1..','..1111..','........','........'] },
  { id:15, moves:32, types:7, target:0, diff:'hard', reward:28, goal:'heart', count:10, obstacles:['#......#','........','........','........','........','........','........','#......#'] },
  { id:16, moves:30, types:7, target:1800, diff:'hard', reward:28 },
  { id:17, moves:30, types:7, target:0, diff:'hard', reward:30, goal:'color', color:4, count:25 },
  { id:18, moves:28, types:7, target:2000, diff:'hard', reward:30, obstacles:['........','........','..LL....','..LL....','........','..LL....','..LL....','........'] },
  { id:19, moves:32, types:7, target:0, diff:'hard', reward:32, goal:'heart', count:12 },
  { id:20, moves:30, types:7, target:2200, diff:'hard', reward:35 },
  { id:21, moves:30, types:7, target:0, diff:'hard', reward:30, goal:'ice', obstacles:['........','.#....#.','.222222.','........','........','.222222.','.#....#.','........'] },
  { id:22, moves:30, types:7, target:2400, diff:'hard', reward:32, obstacles:['........','..2222..','........','..L..L..','........','..2222..','........','........'] },
  { id:23, moves:32, types:7, target:0, diff:'super', reward:34, goal:'color', color:5, count:28 },
  { id:24, moves:30, types:7, target:0, diff:'super', reward:35, goal:'ice', obstacles:['........','..#..#..','.111111.','........','........','.111111.','..#..#..','........'] },
  { id:25, moves:32, types:7, target:0, diff:'super', reward:38, goal:'heart', count:14, obstacles:['L......L','........','........','........','........','........','........','L......L'] },
  { id:26, moves:32, types:7, target:2800, diff:'super', reward:40 },
  { id:27, moves:30, types:7, target:0, diff:'super', reward:40, goal:'ice', obstacles:['........','.111111.','........','..#..#..','........','.111111.','........','........'] },
  { id:28, moves:32, types:7, target:0, diff:'super', reward:42, goal:'heart', count:14, obstacles:['........','.222222.','........','..#..#..','........','.222222.','........','........'] },
  { id:29, moves:32, types:7, target:3200, diff:'super', reward:45, obstacles:['..#..#..','........','.2....2.','........','........','.2....2.','........','..#..#..'] },
  { id:30, moves:32, types:7, target:0, diff:'super', reward:48, goal:'color', color:6, count:32 },
  { id:31, moves:32, types:7, target:3600, diff:'super', reward:50, obstacles:['##....##','........','........','..L..L..','..L..L..','........','........','##....##'] },
  { id:32, moves:32, types:7, target:0, diff:'super', reward:52, goal:'ice', obstacles:['........','L.2222.L','........','..2..2..','..2..2..','........','L.2222.L','........'] },
  { id:33, moves:34, types:7, target:0, diff:'super', reward:55, goal:'heart', count:16 },
  { id:34, moves:32, types:7, target:4000, diff:'super', reward:58, obstacles:['........','..#..#..','.2....2.','..L..L..','..L..L..','.2....2.','..#..#..','........'] },
  { id:35, moves:32, types:7, target:0, diff:'super', reward:60, goal:'ice', obstacles:['........','.#2222#.','.2....2.','..2..2..','..2..2..','.2....2.','.#2222#.','........'] },
  { id:36, moves:34, types:7, target:4500, diff:'super', reward:65, obstacles:['L......L','.222222.','........','..#..#..','..#..#..','........','.222222.','L......L'] },
  { id:37, moves:34, types:7, target:0, diff:'super', reward:70, goal:'heart', count:18 },
  { id:38, moves:34, types:7, target:5000, diff:'super', reward:75, obstacles:['#......#','.222222.','..#..#..','..2..2..','..2..2..','..#..#..','.222222.','#......#'] },
  { id:39, moves:36, types:7, target:0, diff:'super', reward:80, goal:'ice', obstacles:['22222222','22222222','22222222','22222222','22222222','22222222','22222222','22222222'] },
  { id:40, moves:40, types:7, target:0, diff:'super', reward:100, goal:'heart', count:20, obstacles:['#......#','.222222.','..#..#..','..2LL2..','..2LL2..','..#..#..','.222222.','#......#'] },
  { id:41, moves:32, types:7, target:5500, diff:'super', reward:105, obstacles:['##....##','.2....2.','..2222..','........','........','..2222..','.2....2.','##....##'] },
  { id:42, moves:34, types:7, target:0, diff:'super', reward:110, goal:'color', color:3, count:35, obstacles:['........','L222222L','........','..2222..','..2222..','........','L222222L','........'] },
  { id:43, moves:34, types:7, target:0, diff:'super', reward:115, goal:'ice', obstacles:['2......2','.2....2.','..2222..','...22...','...22...','..2222..','.2....2.','2......2'] },
  { id:44, moves:36, types:7, target:6000, diff:'super', reward:120, obstacles:['........','..#..#..','.2....2.','..2222..','..2222..','.2....2.','..#..#..','........'] },
  { id:45, moves:36, types:7, target:0, diff:'super', reward:125, goal:'heart', count:22, obstacles:['L......L','.222222.','..2..2..','..2..2..','..2..2..','..2..2..','.222222.','L......L'] },
  { id:46, moves:32, types:7, target:6500, diff:'super', reward:130, obstacles:['#......#','.222222.','..#..#..','..2LL2..','..2LL2..','..#..#..','.222222.','#......#'] },
  { id:47, moves:34, types:7, target:0, diff:'super', reward:135, goal:'color', color:5, count:40, obstacles:['22222222','2......2','2......2','2..LL..2','2..LL..2','2......2','2......2','22222222'] },
  { id:48, moves:34, types:7, target:0, diff:'super', reward:140, goal:'ice', obstacles:['22222222','21111112','21111112','21111112','21111112','21111112','21111112','22222222'] },
  { id:49, moves:36, types:7, target:7000, diff:'super', reward:150, obstacles:['#2....2#','22....22','........','........','........','........','22....22','#2....2#'] },
  { id:50, moves:40, types:7, target:0, diff:'super', reward:200, goal:'heart', count:25, obstacles:['#......#','.222222.','..#..#..','..2LL2..','..2LL2..','..#..#..','.222222.','#......#'] },
  { id:51, moves:34, types:7, target:7500, diff:'super', reward:100 },
  { id:52, moves:34, types:7, target:0, diff:'super', reward:110, goal:'color', color:0, count:40 },
  { id:53, moves:34, types:7, target:0, diff:'super', reward:120, goal:'ice', obstacles:['22222222','2......2','2.2222.2','2.2..2.2','2.2..2.2','2.2222.2','2......2','22222222'] },
  { id:54, moves:36, types:7, target:8000, diff:'super', reward:130 },
  { id:55, moves:36, types:7, target:0, diff:'super', reward:140, goal:'heart', count:24 },
  { id:56, moves:34, types:7, target:8500, diff:'super', reward:150, obstacles:['L......L','2222222.','........','..2..2..','..2..2..','........','.2222222','L......L'] },
  { id:57, moves:34, types:7, target:0, diff:'super', reward:160, goal:'color', color:6, count:45 },
  { id:58, moves:36, types:7, target:0, diff:'super', reward:170, goal:'ice', obstacles:['11111111','12222221','12222221','12222221','12222221','12222221','12222221','11111111'] },
  { id:59, moves:38, types:7, target:9000, diff:'super', reward:180 },
  { id:60, moves:45, types:7, target:0, diff:'super', reward:300, goal:'heart', count:30, obstacles:['#222222#','22222222','22LLLL22','22LLLL22','22LLLL22','22LLLL22','22222222','#222222#'] },
];

// ===== ACHIEVEMENTS =====
const ACHIEVEMENTS = [
  { id:1, title:'Первая победа', desc:'Пройди 1 уровень', target:1, emoji:'🎯' },
  { id:2, title:'Новичок', desc:'Пройди 5 уровней', target:5, emoji:'🌱' },
  { id:3, title:'Опытный', desc:'Пройди 15 уровней', target:15, emoji:'⭐' },
  { id:4, title:'Ветеран', desc:'Пройди 30 уровней', target:30, emoji:'🏅' },
  { id:5, title:'Мастер', desc:'Пройди 50 уровней', target:50, emoji:'👑' },
  { id:6, title:'Богач', desc:'Накопи 500 монет', target:500, emoji:'💰' },
  { id:7, title:'Миллионер', desc:'Накопи 2000 монет', target:2000, emoji:'💎' },
  { id:8, title:'Сердцеед', desc:'Собери 50 сердечек', target:50, emoji:'❤' },
  { id:9, title:'Ледокол', desc:'Разбей 100 льда', target:100, emoji:'❄' },
  { id:10, title:'Радужный мастер', desc:'Создай 10 радужных камней', target:10, emoji:'🌈' },
  { id:11, title:'Комбо', desc:'Сделай каскад ×3', target:3, emoji:'⚡' },
  { id:12, title:'Без бустеров', desc:'Пройди 10 уровней без бустеров', target:10, emoji:'🚫' },
];

// ===== PROGRESS =====
class Progress {
  constructor() {
    const raw = localStorage.getItem('match3_progress');
    const d = raw ? JSON.parse(raw) : {};
    this.unlocked = d.unlocked || 1;
    this.coins = 999999; // бесконечные монетки
    this.bestScores = d.bestScores || {};
    this.lastDailyTime = d.lastDailyTime || 0;
    this.dailyStreak = d.dailyStreak || 0;
    this.totalWins = d.totalWins || 0;
    this.totalCoinsEarned = d.totalCoinsEarned || 0;
    this.totalHearts = d.totalHearts || 0;
    this.totalIce = d.totalIce || 0;
    this.totalRainbows = d.totalRainbows || 0;
    this.bestCascade = d.bestCascade || 0;
    this.noBoosterWins = d.noBoosterWins || 0;
    this.achievements = d.achievements || [];
    this.lastDailyChallengeDate = d.lastDailyChallengeDate || '';
  }
  save() { localStorage.setItem('match3_progress', JSON.stringify({
    unlocked: this.unlocked, bestScores: this.bestScores,
    lastDailyTime: this.lastDailyTime, dailyStreak: this.dailyStreak,
    totalWins: this.totalWins, totalCoinsEarned: this.totalCoinsEarned,
    totalHearts: this.totalHearts, totalIce: this.totalIce,
    totalRainbows: this.totalRainbows, bestCascade: this.bestCascade,
    noBoosterWins: this.noBoosterWins, achievements: this.achievements,
    lastDailyChallengeDate: this.lastDailyChallengeDate,
  })); }
  canClaimDaily() { return Date.now() - this.lastDailyTime > 20*60*60*1000; }
  nextDailyAmount() {
    const day = (this.dailyStreak % 7) + 1;
    return [20,30,50,75,100,150,300][day-1];
  }
  claimDaily() {
    const a = this.nextDailyAmount();
    this.totalCoinsEarned += a;
    this.lastDailyTime = Date.now();
    this.dailyStreak = (this.dailyStreak + 1) % 7;
    this.save();
    return a;
  }
  recordWin(levelId, score, reward) {
    if (score > (this.bestScores[levelId]||0)) this.bestScores[levelId] = score;
    this.totalCoinsEarned += reward;
    this.totalWins += 1;
    if (levelId + 1 > this.unlocked) this.unlocked = levelId + 1;
    this.save();
  }
  progressFor(id) {
    switch(id) {
      case 1: case 2: case 3: case 4: case 5: return this.totalWins;
      case 6: case 7: return this.totalCoinsEarned;
      case 8: return this.totalHearts;
      case 9: return this.totalIce;
      case 10: return this.totalRainbows;
      case 11: return this.bestCascade;
      case 12: return this.noBoosterWins;
    }
    return 0;
  }
  checkAchievements() {
    const unlocked = [];
    for (const a of ACHIEVEMENTS) {
      if (this.achievements.includes(a.id)) continue;
      if (this.progressFor(a.id) >= a.target) {
        this.achievements.push(a.id);
        unlocked.push(a);
      }
    }
    if (unlocked.length) this.save();
    return unlocked;
  }
}

// ===== BOARD LOGIC =====
let idCounter = 0;
function nextId() { return ++idCounter; }

function createEmptyGrid() {
  return Array.from({length:SIZE}, () => Array.from({length:SIZE}, () => null));
}

function generateGrid(types) {
  let grid;
  let safety = 0;
  do {
    grid = Array.from({length:SIZE}, () =>
      Array.from({length:SIZE}, () => ({ id: nextId(), type: randInt(types), matching:false, locked:false, stone:false, hasHeart:false, rainbow:false }))
    );
    safety++;
  } while ((findMatches(grid).size > 0 || !hasAnyMove(grid)) && safety < 30);
  return grid;
}

function generateWithObstacles(types, obstacles, heartCount) {
  let grid, ice;
  let safety = 0;
  do {
    grid = generateGrid(types);
    ice = Array.from({length:SIZE}, () => Array(SIZE).fill(0));
    if (obstacles && obstacles.length) {
      for (let r=0; r<SIZE; r++) {
        for (let c=0; c<SIZE; c++) {
          const ch = (obstacles[r]||'........')[c] || '.';
          if (ch === '#') grid[r][c] = {...grid[r][c], type:-1, stone:true};
          else if (ch === 'L') grid[r][c] = {...grid[r][c], locked:true};
          else if (ch === '1') ice[r][c] = 1;
          else if (ch === '2') ice[r][c] = 2;
        }
      }
    }
    if (heartCount > 0) {
      const candidates = [];
      for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
        const t = grid[r][c];
        if (!t.stone && !t.locked && ice[r][c] === 0) candidates.push([r,c]);
      }
      shuffle(candidates);
      for (let i=0; i<Math.min(heartCount, candidates.length); i++) {
        const [r,c] = candidates[i];
        grid[r][c] = {...grid[r][c], hasHeart:true};
      }
    }
    safety++;
  } while ((findMatches(grid).size > 0 || !hasAnyMove(grid)) && safety < 40);
  return { grid, ice };
}

function findMatches(grid) {
  const m = new Set();
  for (let r=0; r<SIZE; r++) {
    let c = 0;
    while (c < SIZE) {
      const t = grid[r][c];
      if (t.stone) { c++; continue; }
      let c2 = c;
      while (c2 < SIZE && !grid[r][c2].stone && grid[r][c2].type === t.type) c2++;
      if (c2 - c >= 3) for (let k=c; k<c2; k++) m.add(`${r},${k}`);
      c = c2;
    }
  }
  for (let c=0; c<SIZE; c++) {
    let r = 0;
    while (r < SIZE) {
      const t = grid[r][c];
      if (t.stone) { r++; continue; }
      let r2 = r;
      while (r2 < SIZE && !grid[r2][c].stone && grid[r2][c].type === t.type) r2++;
      if (r2 - r >= 3) for (let k=r; k<r2; k++) m.add(`${k},${c}`);
      r = r2;
    }
  }
  return m;
}

function findFiveInRow(grid) {
  for (let r=0; r<SIZE; r++) {
    let c = 0;
    while (c < SIZE) {
      const t = grid[r][c];
      if (t.stone) { c++; continue; }
      let c2 = c;
      while (c2 < SIZE && !grid[r][c2].stone && grid[r][c2].type === t.type) c2++;
      if (c2 - c >= 5) return [r, Math.floor((c + c2 - 1) / 2)];
      c = c2;
    }
  }
  for (let c=0; c<SIZE; c++) {
    let r = 0;
    while (r < SIZE) {
      const t = grid[r][c];
      if (t.stone) { r++; continue; }
      let r2 = r;
      while (r2 < SIZE && !grid[r2][c].stone && grid[r2][c].type === t.type) r2++;
      if (r2 - r >= 5) return [Math.floor((r + r2 - 1) / 2), c];
      r = r2;
    }
  }
  return null;
}

function areAdjacent(a, b) { return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]) === 1; }

function canSwap(grid, a, b) {
  if (!areAdjacent(a, b)) return false;
  return grid[a[0]][a[1]].isMovable !== false && !grid[a[0]][a[1]].stone && !grid[a[0]][a[1]].locked
      && !grid[b[0]][b[1]].stone && !grid[b[0]][b[1]].locked;
}

function swapTiles(grid, a, b) {
  const g = grid.map(row => row.slice());
  const tmp = g[a[0]][a[1]];
  g[a[0]][a[1]] = g[b[0]][b[1]];
  g[b[0]][b[1]] = tmp;
  return g;
}

function hasAnyMove(grid) {
  const t = grid.map(r => r.map(x => x.type));
  const movable = grid.map(r => r.map(x => !x.stone && !x.locked));
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    if (!movable[r][c]) continue;
    if (grid[r][c].rainbow) {
      if (c+1 < SIZE && movable[r][c+1]) return true;
      if (r+1 < SIZE && movable[r+1][c]) return true;
    }
  }
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    if (!movable[r][c]) continue;
    if (c+1 < SIZE && movable[r][c+1] && trySwapAndMatch(t, r, c, r, c+1)) return true;
    if (r+1 < SIZE && movable[r+1][c] && trySwapAndMatch(t, r, c, r+1, c)) return true;
  }
  return false;
}

function findHint(grid) {
  const t = grid.map(r => r.map(x => x.type));
  const movable = grid.map(r => r.map(x => !x.stone && !x.locked));
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    if (grid[r][c].rainbow && movable[r][c]) {
      if (c+1 < SIZE && movable[r][c+1]) return [[r,c],[r,c+1]];
      if (r+1 < SIZE && movable[r+1][c]) return [[r,c],[r+1,c]];
    }
  }
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    if (!movable[r][c]) continue;
    if (c+1 < SIZE && movable[r][c+1] && trySwapAndMatch(t, r, c, r, c+1)) return [[r,c],[r,c+1]];
    if (r+1 < SIZE && movable[r+1][c] && trySwapAndMatch(t, r, c, r+1, c)) return [[r,c],[r+1,c]];
  }
  return null;
}

function trySwapAndMatch(t, r1, c1, r2, c2) {
  [t[r1][c1], t[r2][c2]] = [t[r2][c2], t[r1][c1]];
  const ok = hasMatchAt(t, r1, c1) || hasMatchAt(t, r2, c2);
  [t[r1][c1], t[r2][c2]] = [t[r2][c2], t[r1][c1]];
  return ok;
}

function hasMatchAt(t, r, c) {
  const v = t[r][c];
  if (v < 0) return false;
  let count = 1;
  let cc = c-1; while (cc >= 0 && t[r][cc] === v) { count++; cc--; }
  cc = c+1; while (cc < SIZE && t[r][cc] === v) { count++; cc++; }
  if (count >= 3) return true;
  count = 1;
  let rr = r-1; while (rr >= 0 && t[rr][c] === v) { count++; rr--; }
  rr = r+1; while (rr < SIZE && t[rr][c] === v) { count++; rr++; }
  return count >= 3;
}

function markMatching(grid, matches) {
  return grid.map((row, r) => row.map((tile, c) => matches.has(`${r},${c}`) ? {...tile, matching:true} : tile));
}

function unlockCells(grid, cells) {
  return grid.map((row, r) => row.map((tile, c) => cells.has(`${r},${c}`) ? {...tile, locked:false} : tile));
}

function dropAndRefill(grid, matches, types) {
  const g = grid.map(row => row.slice());
  for (const key of matches) {
    const [r, c] = key.split(',').map(Number);
    g[r][c] = null;
  }
  for (let c=0; c<SIZE; c++) {
    let segEnd = SIZE - 1;
    let r = SIZE - 1;
    while (r >= -1) {
      const isStone = r >= 0 && g[r][c] && g[r][c].stone;
      if (r < 0 || isStone) {
        dropSegment(g, c, r+1, segEnd, types);
        segEnd = r - 1;
      }
      r--;
    }
  }
  return g;
}

function dropSegment(g, c, from, to, types) {
  if (from > to) return;
  const existing = [];
  for (let r=from; r<=to; r++) {
    const t = g[r][c];
    if (t && !t.stone) existing.push(t);
  }
  let write = to;
  for (let i=existing.length-1; i>=0; i--) {
    g[write][c] = existing[i];
    write--;
  }
  while (write >= from) {
    g[write][c] = { id: nextId(), type: randInt(types), matching:false, locked:false, stone:false, hasHeart:false, rainbow:false };
    write--;
  }
}

function reshuffle(grid, types) {
  const movable = [];
  const colors = [];
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    const t = grid[r][c];
    if (!t.stone && !t.rainbow) { movable.push([r,c]); colors.push(t.type); }
  }
  shuffle(colors);
  const g = grid.map(row => row.slice());
  movable.forEach(([r,c], i) => {
    g[r][c] = {...grid[r][c], type: colors[i], matching:false};
  });
  return findMatches(g).size === 0 ? g : grid;
}

// ===== HELPERS =====
function randInt(n) { return Math.floor(Math.random() * n); }
function shuffle(a) { for (let i=a.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ===== GAME ENGINE =====
class GameEngine {
  constructor(level) {
    this.level = level;
    idCounter = 0;
    const init = generateWithObstacles(level.types, level.obstacles || [], level.count && level.goal === 'heart' ? level.count : 0);
    this.grid = init.grid;
    this.ice = init.ice;
    this.movesLeft = level.moves;
    this.score = 0;
    this.goalProgress = 0;
    this.phase = 'PLAYING';
    this.isAnimating = false;
    this.selected = null;
    this.activeBooster = null;
    this.totalIceCount = this.ice.flat().reduce((a,b) => a+b, 0);
    this.heartsSession = 0;
    this.iceBrokenSession = 0;
    this.rainbowsSession = 0;
    this.maxCascade = 0;
    this.usedBooster = false;
  }

  async trySwap(a, b) {
    if (this.isAnimating || this.phase !== 'PLAYING') return;
    if (!canSwap(this.grid, a, b)) return;
    this.isAnimating = true;
    this.selected = null;
    try {
      const tileA = this.grid[a[0]][a[1]];
      const tileB = this.grid[b[0]][b[1]];
      if (tileA.rainbow || tileB.rainbow) {
        this.movesLeft--;
        const rainbowPos = tileA.rainbow ? a : b;
        const targetPos = tileA.rainbow ? b : a;
        const targetType = this.grid[targetPos[0]][targetPos[1]].type;
        await this.activateRainbow(rainbowPos, targetType);
        this.checkEnd();
        return;
      }
      this.grid = swapTiles(this.grid, a, b);
      render(this);
      await sleep(200);
      if (findMatches(this.grid).size === 0) {
        this.grid = swapTiles(this.grid, a, b);
        render(this);
        await sleep(200);
        return;
      }
      this.movesLeft--;
      render(this);
      await this.resolveCascades();
      this.checkEnd();
    } finally { this.isAnimating = false; }
  }

  async activateRainbow(pos, targetType) {
    const affected = new Set();
    for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
      const t = this.grid[r][c];
      if (!t.stone && (t.type === targetType || (r === pos[0] && c === pos[1]))) affected.add(`${r},${c}`);
    }
    if (affected.size === 0) return;
    const newIce = this.ice.map(r => r.slice());
    let iceBroken = 0;
    for (const key of affected) {
      const [rr, cc] = key.split(',').map(Number);
      if (newIce[rr][cc] > 0) { newIce[rr][cc] = 0; iceBroken++; }
    }
    if (iceBroken > 0) {
      this.ice = newIce;
      this.iceBrokenSession += iceBroken;
      if (this.level.goal === 'ice') this.goalProgress += iceBroken;
    }
    let heartsCleared = 0;
    for (const key of affected) {
      const [rr, cc] = key.split(',').map(Number);
      if (this.grid[rr][cc].hasHeart) heartsCleared++;
    }
    if (heartsCleared > 0) {
      this.heartsSession += heartsCleared;
      if (this.level.goal === 'heart') this.goalProgress += heartsCleared;
    }
    if (this.level.goal === 'color') {
      let count = 0;
      for (const key of affected) {
        const [rr, cc] = key.split(',').map(Number);
        if (this.grid[rr][cc].type === this.level.color) count++;
      }
      this.goalProgress += count;
    }
    this.grid = markMatching(this.grid, affected);
    render(this);
    await sleep(280);
    this.score += affected.size * 25;
    this.grid = dropAndRefill(this.grid, affected, this.level.types);
    render(this);
    await sleep(320);
    await this.resolveCascades();
  }

  async resolveCascades() {
    let safety = 0;
    let cascadeLevel = 0;
    while (safety++ < 30) {
      const matches = findMatches(this.grid);
      if (matches.size === 0) break;
      cascadeLevel++;
      if (cascadeLevel > this.maxCascade) this.maxCascade = cascadeLevel;
      const multiplier = Math.min(3, 1 + (cascadeLevel - 1) * 0.5);
      const rainbowAt = findFiveInRow(this.grid);
      if (rainbowAt) this.rainbowsSession++;
      const newIce = this.ice.map(r => r.slice());
      let iceBroken = 0;
      for (const key of matches) {
        const [r, c] = key.split(',').map(Number);
        if (newIce[r][c] > 0) { newIce[r][c]--; iceBroken++; }
      }
      if (iceBroken > 0) {
        this.ice = newIce;
        this.iceBrokenSession += iceBroken;
        if (this.level.goal === 'ice') this.goalProgress += iceBroken;
      }
      let heartsCleared = 0;
      for (const key of matches) {
        const [r, c] = key.split(',').map(Number);
        if (this.grid[r][c].hasHeart && newIce[r][c] === 0) heartsCleared++;
      }
      if (heartsCleared > 0) {
        this.heartsSession += heartsCleared;
        if (this.level.goal === 'heart') this.goalProgress += heartsCleared;
      }
      if (this.level.goal === 'color') {
        let count = 0;
        for (const key of matches) {
          const [r, c] = key.split(',').map(Number);
          if (this.grid[r][c].type === this.level.color) count++;
        }
        this.goalProgress += count;
      }
      const unlocks = new Set();
      for (const key of matches) {
        const [r, c] = key.split(',').map(Number);
        for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
          const nr = r+dr, nc = c+dc;
          if (nr>=0 && nr<SIZE && nc>=0 && nc<SIZE && this.grid[nr][nc].locked) {
            unlocks.add(`${nr},${nc}`);
          }
        }
      }
      const basePoints = matches.size * 10 + iceBroken * 15 + unlocks.size * 5 + heartsCleared * 20;
      this.score += Math.round(basePoints * multiplier);
      this.grid = markMatching(this.grid, matches);
      if (unlocks.size > 0) this.grid = unlockCells(this.grid, unlocks);
      render(this);
      await sleep(240);
      let toRemove = matches;
      if (rainbowAt && matches.has(`${rainbowAt[0]},${rainbowAt[1]}`)) {
        toRemove = new Set(matches);
        toRemove.delete(`${rainbowAt[0]},${rainbowAt[1]}`);
      }
      this.grid = dropAndRefill(this.grid, toRemove, this.level.types);
      if (rainbowAt && matches.has(`${rainbowAt[0]},${rainbowAt[1]}`)) {
        const g = this.grid.map(r => r.slice());
        const existing = g[rainbowAt[0]][rainbowAt[1]];
        g[rainbowAt[0]][rainbowAt[1]] = {...existing, rainbow:true, matching:false};
        this.grid = g;
      }
      render(this);
      await sleep(280);
      let rs = 0;
      while (!hasAnyMove(this.grid) && rs < 8) {
        this.grid = reshuffle(this.grid, this.level.types);
        rs++;
      }
    }
  }

  tapTile(r, c) {
    if (this.phase !== 'PLAYING' || this.isAnimating) return;
    if (this.activeBooster && this.activeBooster !== 'shuffle') {
      const b = this.activeBooster;
      this.activeBooster = null;
      this.usedBooster = true;
      this.applyBooster(b, r, c);
      return;
    }
    const sel = this.selected;
    if (!sel) { this.selected = [r, c]; render(this); return; }
    if (sel[0] === r && sel[1] === c) { this.selected = null; render(this); return; }
    if (!canSwap(this.grid, sel, [r, c])) { this.selected = [r, c]; render(this); return; }
    const a = sel;
    this.selected = null;
    render(this);
    this.trySwap(a, [r, c]);
  }

  swipe(from, to) {
    if (this.phase !== 'PLAYING' || this.isAnimating) return;
    if (this.activeBooster) return;
    if (!canSwap(this.grid, from, to)) return;
    this.selected = null;
    this.trySwap(from, to);
  }

  requestBooster(type) {
    if (this.phase !== 'PLAYING' || this.isAnimating) return;
    this.usedBooster = true;
    if (type === 'shuffle') { this.applyShuffle(); return; }
    this.activeBooster = type;
    render(this);
  }

  async applyShuffle() {
    this.isAnimating = true;
    try {
      this.grid = reshuffle(this.grid, this.level.types);
      render(this);
      await sleep(300);
    } finally { this.isAnimating = false; }
  }

  async applyBooster(type, r, c) {
    this.isAnimating = true;
    try {
      const affected = new Set();
      if (type === 'bomb') {
        for (let rr=r-1; rr<=r+1; rr++) for (let cc=c-1; cc<=c+1; cc++) {
          if (rr>=0 && rr<SIZE && cc>=0 && cc<SIZE) affected.add(`${rr},${cc}`);
        }
      } else if (type === 'rocketH') {
        for (let cc=0; cc<SIZE; cc++) affected.add(`${r},${cc}`);
      } else if (type === 'rocketV') {
        for (let rr=0; rr<SIZE; rr++) affected.add(`${rr},${c}`);
      }
      if (affected.size === 0) return;
      const newIce = this.ice.map(rr => rr.slice());
      let iceBroken = 0;
      for (const key of affected) {
        const [rr, cc] = key.split(',').map(Number);
        if (newIce[rr][cc] > 0) { newIce[rr][cc] = 0; iceBroken++; }
      }
      if (iceBroken > 0) {
        this.ice = newIce;
        this.iceBrokenSession += iceBroken;
        if (this.level.goal === 'ice') this.goalProgress += iceBroken;
      }
      let heartsCleared = 0;
      for (const key of affected) {
        const [rr, cc] = key.split(',').map(Number);
        if (this.grid[rr][cc].hasHeart && !this.grid[rr][cc].stone) heartsCleared++;
      }
      if (heartsCleared > 0) {
        this.heartsSession += heartsCleared;
        if (this.level.goal === 'heart') this.goalProgress += heartsCleared;
      }
      if (this.level.goal === 'color') {
        let count = 0;
        for (const key of affected) {
          const [rr, cc] = key.split(',').map(Number);
          const t = this.grid[rr][cc];
          if (!t.stone && t.type === this.level.color) count++;
        }
        this.goalProgress += count;
      }
      this.grid = markMatching(this.grid, affected);
      render(this);
      await sleep(240);
      this.score += affected.size * 15 + heartsCleared * 20;
      this.grid = dropAndRefill(this.grid, affected, this.level.types);
      render(this);
      await sleep(280);
      await this.resolveCascades();
      this.checkEnd();
    } finally { this.isAnimating = false; }
  }

  checkEnd() {
    let reached = false;
    const lvl = this.level;
    if (!lvl.goal || lvl.goal === 'score') reached = this.score >= lvl.target;
    else if (lvl.goal === 'color') reached = this.goalProgress >= lvl.count;
    else if (lvl.goal === 'ice') reached = this.ice.flat().reduce((a,b) => a+b, 0) === 0;
    else if (lvl.goal === 'heart') reached = this.goalProgress >= lvl.count;
    if (reached) this.phase = 'WON';
    else if (this.movesLeft <= 0) this.phase = 'LOST';
    render(this);
  }

  continueWithExtraMoves(extra) {
    if (this.phase !== 'LOST') return;
    this.movesLeft += extra;
    this.phase = 'PLAYING';
    render(this);
  }

  retry() {
    idCounter = 0;
    const init = generateWithObstacles(this.level.types, this.level.obstacles || [], this.level.count && this.level.goal === 'heart' ? this.level.count : 0);
    this.grid = init.grid;
    this.ice = init.ice;
    this.movesLeft = this.level.moves;
    this.score = 0;
    this.goalProgress = 0;
    this.selected = null;
    this.phase = 'PLAYING';
    this.isAnimating = false;
    this.activeBooster = null;
    this.usedBooster = false;
    this.heartsSession = 0;
    this.iceBrokenSession = 0;
    this.rainbowsSession = 0;
    this.maxCascade = 0;
    this.totalIceCount = this.ice.flat().reduce((a,b) => a+b, 0);
    render(this);
  }
}

// ===== RENDERING =====
let canvas, ctx, cellPx;

function setupCanvas() {
  const wrap = document.getElementById('boardWrap');
  if (!wrap) return;
  canvas = document.getElementById('board');
  if (!canvas) return;
  const size = wrap.clientWidth;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  cellPx = size / SIZE;
}

function drawPolygon(cx, cy, r, sides, rotationDeg) {
  ctx.beginPath();
  const startAngle = -Math.PI / 2 + rotationDeg * Math.PI / 180;
  for (let i=0; i<sides; i++) {
    const angle = startAngle + i * 2 * Math.PI / sides;
    const px = cx + Math.cos(angle) * r;
    const py = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawGem(x, y, size, type, rainbow) {
  const cx = x + size/2, cy = y + size/2;
  const r = size/2 * 0.94;
  const t = TILE_TYPES[type % TILE_TYPES.length];
  // shadow
  ctx.save();
  ctx.lineWidth = size * 0.09;
  ctx.strokeStyle = 'rgba(0,0,0,0.55)';
  drawPolygon(cx, cy, r, t.sides, t.rotation);
  ctx.stroke();
  // body
  if (rainbow) {
    const grad = ctx.createLinearGradient(x, y, x+size, y+size);
    grad.addColorStop(0, '#FF5252'); grad.addColorStop(0.25, '#FFD740');
    grad.addColorStop(0.5, '#69F0AE'); grad.addColorStop(0.75, '#40E0D0');
    grad.addColorStop(1, '#E040FB');
    ctx.fillStyle = grad;
  } else {
    const grad = ctx.createLinearGradient(x, y, x, y+size);
    grad.addColorStop(0, t.color); grad.addColorStop(1, t.shadow);
    ctx.fillStyle = grad;
  }
  drawPolygon(cx, cy, r, t.sides, t.rotation);
  ctx.fill();
  // highlight
  const hl = ctx.createLinearGradient(x, y, x, y+size*0.55);
  hl.addColorStop(0, 'rgba(255,255,255,0.55)');
  hl.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = hl;
  drawPolygon(cx, cy, r, t.sides, t.rotation);
  ctx.fill();
  // table
  const table = ctx.createLinearGradient(x, y+size*0.2, x, y+size*0.8);
  table.addColorStop(0, 'rgba(255,255,255,0.45)');
  table.addColorStop(1, 'rgba(255,255,255,0.08)');
  ctx.fillStyle = table;
  drawPolygon(cx, cy, r*0.55, t.sides, t.rotation);
  ctx.fill();
  ctx.lineWidth = size * 0.02;
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  drawPolygon(cx, cy, r*0.55, t.sides, t.rotation);
  ctx.stroke();
  // sparkle
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.arc(cx - size*0.15, cy - size*0.18, size*0.055, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function drawHeart(x, y, size) {
  const cx = x + size/2, cy = y + size/2;
  const s = size * 0.55;
  const r = s/2;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx, cy + r*0.9);
  ctx.bezierCurveTo(cx - r*1.3, cy + r*0.2, cx - r*1.0, cy - r*0.7, cx, cy - r*0.15);
  ctx.bezierCurveTo(cx + r*1.0, cy - r*0.7, cx + r*1.3, cy + r*0.2, cx, cy + r*0.9);
  ctx.closePath();
  ctx.lineWidth = s * 0.18;
  ctx.strokeStyle = 'rgba(255,255,255,0.95)';
  ctx.lineJoin = 'round';
  ctx.stroke();
  const grad = ctx.createLinearGradient(cx, cy - r, cx, cy + r);
  grad.addColorStop(0, '#FF5252'); grad.addColorStop(1, '#C62828');
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.beginPath();
  ctx.arc(cx - s*0.18, cy - s*0.15, s*0.09, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function drawStone(x, y, size) {
  const pad = size * 0.05;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + pad*1.5, y + pad*2);
  ctx.lineTo(x + size*0.30, y + pad);
  ctx.lineTo(x + size*0.72, y + pad*1.6);
  ctx.lineTo(x + size - pad, y + size*0.30);
  ctx.lineTo(x + size - pad*1.5, y + size - pad*1.5);
  ctx.lineTo(x + size*0.42, y + size - pad);
  ctx.lineTo(x + pad, y + size*0.75);
  ctx.closePath();
  ctx.lineWidth = size * 0.10;
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.stroke();
  const grad = ctx.createLinearGradient(x, y, x, y+size);
  grad.addColorStop(0, '#9E9E9E'); grad.addColorStop(1, '#424242');
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

function drawIce(x, y, size, layers) {
  const alpha = layers >= 2 ? 0.60 : 0.40;
  ctx.save();
  const rad = size * 0.16;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, size - 4, size - 4, rad);
  ctx.fillStyle = `rgba(179,229,252,${alpha})`;
  ctx.fill();
  const crackCount = layers >= 2 ? 4 : 2;
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = size * 0.03;
  for (let i=0; i<crackCount; i++) {
    ctx.beginPath();
    ctx.moveTo(x + Math.random()*size, y + Math.random()*size);
    ctx.lineTo(x + Math.random()*size, y + Math.random()*size);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.lineWidth = size * 0.03;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, size - 4, size - 4, rad);
  ctx.stroke();
  ctx.restore();
}

function drawLock(x, y, size) {
  ctx.save();
  const rad = size * 0.16;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, size - 4, size - 4, rad);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fill();
  const bodyW = size * 0.42;
  const bodyH = size * 0.30;
  const bodyX = x + (size - bodyW) / 2;
  const bodyY = y + size * 0.52;
  ctx.beginPath();
  ctx.roundRect(bodyX, bodyY, bodyW, bodyH, size * 0.05);
  ctx.fillStyle = '#FFC107';
  ctx.fill();
  ctx.strokeStyle = '#8D6E00';
  ctx.lineWidth = size * 0.02;
  ctx.stroke();
  const strokeW = size * 0.07;
  const arcLeft = bodyX + bodyW * 0.20;
  const arcRight = bodyX + bodyW * 0.80;
  const arcTop = bodyY - bodyH * 0.65;
  const arcBottom = bodyY + bodyH * 0.05;
  ctx.beginPath();
  ctx.moveTo(arcLeft, arcBottom);
  ctx.lineTo(arcLeft, (arcTop + arcBottom) / 2);
  ctx.quadraticCurveTo((arcLeft+arcRight)/2, arcTop, arcRight, (arcTop+arcBottom)/2);
  ctx.lineTo(arcRight, arcBottom);
  ctx.lineWidth = strokeW;
  ctx.strokeStyle = '#FFC107';
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.fillStyle = '#3E2723';
  ctx.beginPath();
  ctx.arc(x + size/2, bodyY + bodyH*0.42, size*0.045, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function render(engine) {
  if (!ctx) return;
  const w = canvas.width / (window.devicePixelRatio || 1);
  const h = canvas.height / (window.devicePixelRatio || 1);
  ctx.clearRect(0, 0, w, h);
  const size = cellPx;

  // ice layer (under gems)
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    if (engine.ice[r][c] > 0) {
      drawIce(c*size, r*size, size, engine.ice[r][c]);
    }
  }

  // gems
  for (let r=0; r<SIZE; r++) for (let c=0; c<SIZE; c++) {
    const tile = engine.grid[r][c];
    if (!tile) continue;
    const x = c*size, y = r*size;
    const isSelected = engine.selected && engine.selected[0]===r && engine.selected[1]===c;
    ctx.save();
    const pad = size * 0.04;
    if (isSelected) {
      ctx.translate(x + size/2, y + size/2);
      ctx.scale(1.12, 1.12);
      ctx.translate(-(x + size/2), -(y + size/2));
    }
    if (tile.stone) {
      drawStone(x + pad, y + pad, size - pad*2);
    } else {
      drawGem(x + pad, y + pad, size - pad*2, tile.type, tile.rainbow);
      if (tile.hasHeart) drawHeart(x + pad, y + pad, size - pad*2);
      if (tile.locked) drawLock(x + pad, y + pad, size - pad*2);
    }
    ctx.restore();
  }
}

// ===== UI =====
const app = document.getElementById('app');
const progress = new Progress();
let currentEngine = null;
let hintTimer = null;

function el(tag, props = {}, children = []) {
  const e = document.createElement(tag);
  for (const k in props) {
    if (k === 'style') Object.assign(e.style, props[k]);
    else if (k === 'className') e.className = props[k];
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), props[k]);
    else if (k === 'text') e.textContent = props[k];
    else if (k === 'html') e.innerHTML = props[k];
    else e.setAttribute(k, props[k]);
  }
  for (const c of [].concat(children)) {
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else if (c) e.appendChild(c);
  }
  return e;
}

function showMap() {
  if (hintTimer) { clearTimeout(hintTimer); hintTimer = null; }
  currentEngine = null;
  app.innerHTML = '';
  const screen = el('div', { className: 'screen map-screen' });

  const header = el('div', { className: 'map-header' }, [
    el('div', { className: 'map-title', text: 'MATCH 3' }),
    el('div', { className: 'chip', onClick: showAchievements, text: '🏆' }),
  ]);
  screen.appendChild(header);

  const chips = el('div', { className: 'map-chips' });
  chips.appendChild(el('div', { className: 'chip', html: '🪙 <b style="color:#FFC107">∞</b>' }));
  if (progress.canClaimDaily()) {
    chips.appendChild(el('div', { className: 'chip gold', onClick: () => {
      const amt = progress.claimDaily();
      showDialog({
        title: '🎁 Ежедневный бонус',
        text: `+${amt} монет!\nСерия: ${progress.dailyStreak} / 7`,
        buttons: [{ label: 'Забрать!', primary: true, onClick: () => { closeDialog(); showMap(); } }],
      });
    }, text: '🎁' }));
  }
  chips.appendChild(el('div', { className: 'chip accent', onClick: startDailyChallenge, text: '⚔ Испытание' }));
  screen.appendChild(chips);

  const grid = el('div', { className: 'level-grid' });
  for (const lvl of LEVELS) {
    const unlocked = lvl.id <= progress.unlocked;
    const best = progress.bestScores[lvl.id] || 0;
    const diffClass = { easy: 'easy', normal: 'normal', hard: 'hard', super: 'super' }[lvl.diff];
    const cls = unlocked ? diffClass : 'locked';
    const stars = !unlocked ? 0 :
      best >= lvl.target * 3/2 ? 3 :
      best >= lvl.target * 5/4 ? 2 :
      best > 0 ? 1 : 0;
    const card = el('div', { className: `level-card ${cls}`, onClick: () => { if (unlocked) startLevel(lvl.id); } });
    if (unlocked) {
      card.appendChild(el('div', { className: 'num', text: String(lvl.id) }));
      card.appendChild(el('div', { className: 'stars', text: '★'.repeat(stars) + '☆'.repeat(3-stars) }));
      let goalText = '';
      if (lvl.goal === 'color') goalText = `◆ ${lvl.count}`;
      else if (lvl.goal === 'ice') goalText = '❄ лёд';
      else if (lvl.goal === 'heart') goalText = `❤ ${lvl.count}`;
      if (goalText) card.appendChild(el('div', { className: 'goal', text: goalText }));
    } else {
      card.appendChild(el('div', { className: 'num', text: '🔒' }));
    }
    grid.appendChild(card);
  }
  screen.appendChild(grid);
  app.appendChild(screen);
}

function startLevel(id) {
  const lvl = LEVELS.find(l => l.id === id);
  if (!lvl) return;
  showGame(lvl);
}

function startDailyChallenge() {
  const today = new Date().toISOString().slice(0,10);
  if (progress.lastDailyChallengeDate === today) {
    showDialog({ title: '⚔ Испытание дня', text: 'Сегодня уже пройдено! Приходи завтра.', buttons: [{ label: 'OK', primary: true, onClick: closeDialog }] });
    return;
  }
  const seedRng = (() => {
    let s = today.split('-').join('') | 0;
    return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  })();
  const goalTypes = ['score','color','heart'];
  const goal = goalTypes[Math.floor(seedRng()*goalTypes.length)];
  const types = 6 + Math.floor(seedRng()*2);
  const lvl = {
    id: 1000, moves: 22 + Math.floor(seedRng()*8), types,
    target: 2000 + Math.floor(seedRng()*1500),
    diff: 'hard', reward: 50 + Math.floor(seedRng()*50),
    goal, color: goal === 'color' ? Math.floor(seedRng()*types) : null,
    count: goal === 'color' ? 20 + Math.floor(seedRng()*15) : goal === 'heart' ? 10 + Math.floor(seedRng()*8) : 0,
  };
  showGame(lvl, true);
}

function showGame(level, isDaily = false) {
  app.innerHTML = '';
  currentEngine = new GameEngine(level);

  const screen = el('div', { className: 'screen game-screen' });
  const top = el('div', { className: 'game-top' }, [
    el('div', { className: 'chip', onClick: showPause, text: '⏸' }),
    el('div', { className: 'game-title' }, [
      el('h2', { text: isDaily ? '⚔ Испытание дня' : `Уровень ${level.id}` }),
      el('div', { className: 'diff', text: { easy:'Лёгкий', normal:'Обычный', hard:'Сложный', super:'Эпик' }[level.diff] || 'Обычный' }),
    ]),
    el('div', { className: 'chip', html: '🪙 <b style="color:#FFC107">∞</b>' }),
  ]);
  screen.appendChild(top);

  const stats = el('div', { className: 'stats-row' });
  stats.id = 'statsRow';
  screen.appendChild(stats);

  const pbar = el('div', { className: 'progress-bar' }, [el('div', { className: 'progress-fill', id: 'progressFill' })]);
  screen.appendChild(pbar);

  const wrap = el('div', { id: 'boardWrap' }, [el('canvas', { id: 'board' })]);
  screen.appendChild(wrap);

  const boosters = el('div', { className: 'booster-bar' });
  const boosterDefs = [
    { type: 'bomb', emoji: '💣', label: 'Бомба' },
    { type: 'rocketH', emoji: '➡️', label: 'Ракета →' },
    { type: 'rocketV', emoji: '⬇️', label: 'Ракета ↓' },
    { type: 'shuffle', emoji: '🔀', label: 'Микс' },
  ];
  for (const b of boosterDefs) {
    const btn = el('button', { className: 'booster-btn', onClick: () => {
      if (currentEngine) currentEngine.requestBooster(b.type);
    } }, [
      el('span', { className: 'emoji', text: b.emoji }),
      el('span', { className: 'label', text: '∞' }),
    ]);
    boosters.appendChild(btn);
  }
  screen.appendChild(boosters);

  app.appendChild(screen);
  setupCanvas();
  updateStats();
  render(currentEngine);

  bindBoardInput();
  scheduleHint();
}

function updateStats() {
  if (!currentEngine) return;
  const e = currentEngine;
  const stats = document.getElementById('statsRow');
  if (!stats) return;
  const lvl = e.level;
  let goalBlock = '';
  if (!lvl.goal || lvl.goal === 'score') {
    goalBlock = `<div class="stat"><div class="label">Цель</div><div class="value">${e.score} / ${lvl.target}</div></div>`;
  } else if (lvl.goal === 'color') {
    goalBlock = `<div class="stat"><div class="label">Цель</div><div class="value">◆ ${e.goalProgress} / ${lvl.count}</div></div>`;
  } else if (lvl.goal === 'ice') {
    const remaining = e.ice.flat().reduce((a,b)=>a+b,0);
    goalBlock = `<div class="stat"><div class="label">Цель</div><div class="value">❄ ${e.totalIceCount - remaining} / ${e.totalIceCount}</div></div>`;
  } else if (lvl.goal === 'heart') {
    goalBlock = `<div class="stat"><div class="label">Цель</div><div class="value">❤ ${e.goalProgress} / ${lvl.count}</div></div>`;
  }
  stats.innerHTML = `
    <div class="stat"><div class="label">Ходы</div><div class="value">${e.movesLeft}</div></div>
    <div class="stat"><div class="label">Очки</div><div class="value">${e.score}</div></div>
    ${goalBlock}
  `;
  const fill = document.getElementById('progressFill');
  if (fill) {
    let pv = 0;
    if (!lvl.goal || lvl.goal === 'score') pv = e.score / lvl.target;
    else if (lvl.goal === 'color') pv = e.goalProgress / lvl.count;
    else if (lvl.goal === 'ice') pv = e.totalIceCount === 0 ? 1 : 1 - (e.ice.flat().reduce((a,b)=>a+b,0) / e.totalIceCount);
    else if (lvl.goal === 'heart') pv = e.goalProgress / lvl.count;
    fill.style.width = Math.max(0, Math.min(1, pv)) * 100 + '%';
  }
}

let inputBound = false;
function bindBoardInput() {
  const wrap = document.getElementById('boardWrap');
  if (!wrap) return;
  let dragStart = null;
  let startX = 0, startY = 0;

  const getCell = (clientX, clientY) => {
    const rect = wrap.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const c = Math.floor(x / cellPx);
    const r = Math.floor(y / cellPx);
    if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) return [r, c];
    return null;
  };

  wrap.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (!currentEngine) return;
    dragStart = getCell(e.clientX, e.clientY);
    startX = e.clientX; startY = e.clientY;
  });

  wrap.addEventListener('pointerup', e => {
    e.preventDefault();
    if (!currentEngine || !dragStart) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const dist = Math.hypot(dx, dy);
    const cell = getCell(e.clientX, e.clientY);
    if (dist < 10) {
      currentEngine.tapTile(dragStart[0], dragStart[1]);
    } else if (cell) {
      let target = null;
      if (Math.abs(dx) > Math.abs(dy)) {
        target = [dragStart[0], dragStart[1] + (dx > 0 ? 1 : -1)];
      } else {
        target = [dragStart[0] + (dy > 0 ? 1 : -1), dragStart[1]];
      }
      if (target[0] >= 0 && target[0] < SIZE && target[1] >= 0 && target[1] < SIZE) {
        currentEngine.swipe(dragStart, target);
      }
    }
    dragStart = null;
    updateStats();
    checkEndAndShowDialogs();
  });
}

function scheduleHint() {
  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    if (!currentEngine || currentEngine.phase !== 'PLAYING' || currentEngine.isAnimating) {
      scheduleHint();
      return;
    }
    const hint = findHint(currentEngine.grid);
    if (hint) {
      // pulse the two cells briefly
      const old = currentEngine.selected;
      currentEngine.selected = hint[0];
      render(currentEngine);
      setTimeout(() => {
        if (!currentEngine) return;
        currentEngine.selected = old;
        render(currentEngine);
        scheduleHint();
      }, 1200);
    } else {
      scheduleHint();
    }
  }, 5000);
}

function checkEndAndShowDialogs() {
  if (!currentEngine) return;
  const e = currentEngine;
  if (e.phase === 'WON') {
    const lvl = e.level;
    if (lvl.id === 1000) {
      progress.lastDailyChallengeDate = new Date().toISOString().slice(0,10);
      progress.totalCoinsEarned += lvl.reward;
      progress.save();
    } else {
      progress.recordWin(lvl.id, e.score, lvl.reward);
    }
    if (e.heartsSession) progress.totalHearts += e.heartsSession;
    if (e.iceBrokenSession) progress.totalIce += e.iceBrokenSession;
    if (e.rainbowsSession) progress.totalRainbows += e.rainbowsSession;
    if (e.maxCascade > progress.bestCascade) progress.bestCascade = e.maxCascade;
    if (!e.usedBooster) progress.noBoosterWins += 1;
    progress.save();
    const newAch = progress.checkAchievements();

    const stars = e.score >= lvl.target * 3/2 ? 3 : e.score >= lvl.target * 5/4 ? 2 : 1;
    const hasNext = lvl.id !== 1000 && lvl.id < LEVELS.length;
    showDialog({
      title: lvl.id === 1000 ? '⚔ Испытание пройдено!' : 'Победа!',
      html: `<div class="stars-big">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
             <p>Очки: ${e.score}</p><p>🪙 +${lvl.reward} монет</p>`,
      buttons: [
        ...(hasNext ? [{ label: 'Дальше', primary: true, onClick: () => { closeDialog(); startLevel(lvl.id + 1); } }] : []),
        { label: 'К карте', primary: !hasNext, onClick: () => { closeDialog(); showMap(); } },
      ],
      afterClose: () => { if (newAch.length) showNewAchievements(newAch); },
    });
  } else if (e.phase === 'LOST') {
    showDialog({
      title: 'Ходы закончились',
      text: 'Продолжить за монеты или переиграть?',
      buttons: [
        { label: '↻ +5 ходов', primary: true, onClick: () => { closeDialog(); e.continueWithExtraMoves(5); updateStats(); } },
        { label: 'Заново', onClick: () => { closeDialog(); e.retry(); updateStats(); render(e); } },
        { label: 'К карте', onClick: () => { closeDialog(); showMap(); } },
      ],
    });
  }
}

function showPause() {
  if (!currentEngine) return;
  showDialog({
    title: 'Пауза',
    text: `Уровень ${currentEngine.level.id}`,
    buttons: [
      { label: 'Продолжить', primary: true, onClick: closeDialog },
      { label: '🔄 Заново', onClick: () => { closeDialog(); currentEngine.retry(); updateStats(); render(currentEngine); } },
      { label: '🗺 К карте', onClick: () => { closeDialog(); showMap(); } },
    ],
  });
}

// ===== DIALOGS =====
function showDialog({ title, text, html, buttons, afterClose }) {
  closeDialog();
  const overlay = el('div', { className: 'dialog-overlay', id: 'dlg' });
  const dlg = el('div', { className: 'dialog' });
  if (title) dlg.appendChild(el('h3', { text: title }));
  if (text) dlg.appendChild(el('p', { text }));
  if (html) dlg.appendChild(el('div', { html }));
  const btns = el('div', { className: 'buttons' });
  for (const b of buttons || []) {
    btns.appendChild(el('button', {
      className: b.primary ? '' : 'ghost',
      onClick: b.onClick || closeDialog,
      text: b.label,
    }));
  }
  dlg.appendChild(btns);
  overlay.appendChild(dlg);
  app.appendChild(overlay);
  overlay._afterClose = afterClose;
}

function closeDialog() {
  const d = document.getElementById('dlg');
  if (!d) return;
  const after = d._afterClose;
  d.remove();
  if (after) after();
}

function showNewAchievements(list) {
  const text = list.map(a => `${a.emoji} ${a.title}\n${a.desc}`).join('\n\n');
  showDialog({
    title: '🏆 Новое достижение!',
    text,
    buttons: [{ label: 'Круто!', primary: true, onClick: closeDialog }],
  });
}

function showAchievements() {
  app.innerHTML = '';
  const screen = el('div', { className: 'screen' });
  const header = el('div', { className: 'map-header', style: { padding: '12px 14px 0' } }, [
    el('div', { style: { fontSize: '22px', fontWeight: '700', color: '#B388FF' }, text: '🏆 Достижения' }),
    el('div', { className: 'chip', onClick: showMap, text: '← Назад' }),
  ]);
  screen.appendChild(header);
  const list = el('div', { className: 'ach-list' });
  list.appendChild(el('p', { style: { fontSize: '13px', opacity: 0.6, marginBottom: '12px' },
    text: `${progress.achievements.length} / ${ACHIEVEMENTS.length} получено` }));
  for (const a of ACHIEVEMENTS) {
    const unlocked = progress.achievements.includes(a.id);
    const cur = Math.min(progress.progressFor(a.id), a.target);
    const row = el('div', { className: `ach-row${unlocked ? '' : ' locked'}` }, [
      el('div', { className: 'emoji', text: unlocked ? a.emoji : '🔒' }),
      el('div', { className: 'info' }, [
        el('div', { className: 'title', text: a.title }),
        el('div', { className: 'desc', text: a.desc }),
        el('div', { className: 'bar' }, [el('div', { className: 'bar-fill', style: { width: (cur/a.target*100) + '%' } })]),
        el('div', { className: 'prog', text: `${cur} / ${a.target}` }),
      ]),
    ]);
    list.appendChild(row);
  }
  screen.appendChild(list);
  app.appendChild(screen);
}

// ===== PWA =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ===== BOOT =====
window.addEventListener('resize', () => {
  if (currentEngine) {
    setupCanvas();
    render(currentEngine);
  }
});
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    if (currentEngine) { setupCanvas(); render(currentEngine); }
  }, 300);
});

showMap();