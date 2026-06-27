import { create } from 'zustand';

export const useGameStore = create((set) => ({
  // Global States
  isLoading: true,
  audioMuted: true,
  timeOfDay: 'night', // 'night', 'dawn', 'day', 'dusk'
  terminalOpen: false,
  bossFightActive: false,
  isBossTransitioning: false,
  
  // Player Stats
  xp: 0,
  level: 21,
  
  // Achievements
  unlockedAchievements: [],
  recentAchievement: null,

  // Actions
  setLoading: (status) => set({ isLoading: status }),
  toggleAudio: () => set((state) => ({ audioMuted: !state.audioMuted })),
  setTimeOfDay: (time) => set({ timeOfDay: time }),
  toggleTerminal: () => set((state) => ({ terminalOpen: !state.terminalOpen })),
  startBossFight: () => set({ bossFightActive: true }),
  endBossFight: () => set({ bossFightActive: false }),
  setBossTransitioning: (status) => set({ isBossTransitioning: status }),
  
  addXP: (amount) => set((state) => ({ xp: Math.min(state.xp + amount, 10000) })),
  
  unlockAchievement: (achievement) => set((state) => {
    if (state.unlockedAchievements.some(a => a.id === achievement.id)) return state;
    return {
      unlockedAchievements: [...state.unlockedAchievements, achievement],
      recentAchievement: achievement
    };
  }),
  
  clearRecentAchievement: () => set({ recentAchievement: null })
}));
