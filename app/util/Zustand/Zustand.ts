'use client'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  id: string | number
  userId: string
  authority: string
  nickname:string
  login: (authData: {
    id: string | number
    userId: string
    authority: string
	nickname:string
  }) => void
  logout: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      id: '',
      userId: '',
      authority: '',
	  nickname:'',
      login: (authData) =>
        set({
          isAuthenticated: true,
          id: authData.id,
          userId: authData.userId,
          authority: authData.authority,
		  nickname: authData.nickname
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          userId: '',
          authority: '',
		  nickname: '',
          id: '',
        }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage as any),
    },
  ),
)