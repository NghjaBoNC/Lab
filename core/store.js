const LabStore = (() => {
  const KEY = 'daily_checkin_v1';
  const SEED_FLAG = 'daily_checkin_seeded_30d';
  const toDateKey = (d) => new Date(d - d.getTimezoneOffset() * 60000).toISOString().split('T')[0];

  const load = () => {
    let raw;
    try { raw = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { raw = {}; }
    const history = raw.history || {};
    const targets = raw.targets || {};
    const customQuotes = Array.isArray(raw.customQuotes) ? raw.customQuotes : [];
    const notes = Array.isArray(raw.notes) ? raw.notes : [];
    const expenses = Array.isArray(raw.expenses) ? raw.expenses : [];
    const budgetMonth = Number(raw.budgetMonth) || 2000; const walletBalance = raw.walletBalance !== undefined ? Number(raw.walletBalance) : 0;
    const courses = Array.isArray(raw.courses) ? raw.courses : []; const projects = Array.isArray(raw.projects) ? raw.projects : []; const wikiFavs = Array.isArray(raw.wikiFavs) ? raw.wikiFavs : []; const wikiLearned = Array.isArray(raw.wikiLearned) ? raw.wikiLearned : []; const wikiRecent = Array.isArray(raw.wikiRecent) ? raw.wikiRecent : [];
    const customCmds = Array.isArray(raw.customCmds) ? raw.customCmds : [];
    const customVocab = Array.isArray(raw.customVocab) ? raw.customVocab : [];
    const masteredVocab = Array.isArray(raw.masteredVocab) ? raw.masteredVocab : [];
    const telemetry = {
      cmdCopies: 0, quizRuns: 0, perfectQuiz: 0,
      cancelledSessions: 0, deletedNotes: 0, ...(raw.telemetry || {})
    };
    let changed = false;

    if (!localStorage.getItem(SEED_FLAG) && typeof SEED_HISTORY !== 'undefined') {
      Object.assign(history, SEED_HISTORY);
      localStorage.setItem(SEED_FLAG, '1');
      changed = true;
    }
    const state = {
      history, targets, customQuotes, notes,
      expenses, budgetMonth, walletBalance, courses, projects, wikiFavs, wikiLearned, wikiRecent,
      customCmds, customVocab, masteredVocab, telemetry
    };
    if (changed) save(state);
    return state;
  };

  const save = (state) => localStorage.setItem(KEY, JSON.stringify(state));
  const bump = (field, step = 1) => {
    const s = load();
    s.telemetry[field] = (s.telemetry[field] || 0) + step;
    save(s);
    return s;
  };
  const isCompleted = (r) => Boolean(r && (r.type === 'makeup' || (r.start && r.end)));

  const calcStats = (history) => {
    const keys = Object.keys(history).filter((k) => isCompleted(history[k])).sort();
    const now = new Date();
    let streak = 0;
    const cur = new Date(now);
    if (!isCompleted(history[toDateKey(cur)])) cur.setDate(cur.getDate() - 1);
    while (isCompleted(history[toDateKey(cur)])) { streak++; cur.setDate(cur.getDate() - 1); }

    let bestStreak = 0, run = 0, prevMs = null;
    keys.forEach((k) => {
      const ms = new Date(k + 'T00:00:00').getTime();
      run = (prevMs !== null && Math.round((ms - prevMs) / 86400000) === 1) ? run + 1 : 1;
      if (run > bestStreak) bestStreak = run;
      prevMs = ms;
    });

    let totalMins = 0;
    keys.forEach((k) => {
      const r = history[k];
      if (r.start && r.end) totalMins += Math.max(1, Math.round((new Date(r.end) - new Date(r.start)) / 60000));
    });
    return { streak, bestStreak, total: keys.length, totalMins };
  };

  const getRank = (streak) => {
    if (streak < 7) return { name: 'Tập Sự', next: 7 };
    if (streak < 14) return { name: 'Kỷ Luật Thép', next: 14 };
    if (streak < 30) return { name: 'Chiến Binh Thức Đêm', next: 30 };
    return { name: 'Bất Bại', next: 60 };
  };

  const getNextLesson = (history, todayKey) => {
    if (typeof ROADMAP_30 === 'undefined') return '';
    const done = Object.keys(history).filter((k) => k < todayKey && isCompleted(history[k])).length;
    return ROADMAP_30[done] || ROADMAP_30[ROADMAP_30.length - 1];
  };

  return { toDateKey, load, save, bump, isCompleted, calcStats, getRank, getNextLesson };
})();
