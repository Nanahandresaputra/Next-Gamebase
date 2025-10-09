// app/providers.tsx
'use client'

import { store } from '@/store/store'
import { HeroUIProvider } from '@heroui/react'
import { createContext, useState } from 'react'
import { Provider } from 'react-redux'
import { DetailNewsInterface, GlobalContextInterface } from './providerContext.interface'



export const GlobalContext = createContext<GlobalContextInterface | null>(null)

export function Providers({ children }: { children: React.ReactNode }) {

    const [detailNews, setDetailNews] = useState<DetailNewsInterface>({} as DetailNewsInterface)
    const [search, setSearch] = useState<string>('')
    const [selectGenre, setSelectGenre] = useState<string>('')


    return (
        <Provider store={store}>

            <HeroUIProvider>
                <GlobalContext.Provider value={{ detailNews, setDetailNews, search, setSearch, selectGenre, setSelectGenre }} >
                    {children}
                </GlobalContext.Provider>
            </HeroUIProvider>
        </Provider>
    )
}