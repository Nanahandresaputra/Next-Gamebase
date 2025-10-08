// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface DetailNewsImage {
    square_tiny: string,
    screen_tiny: string,
    square_small: string,
    original: string
}

export interface DetailNewsInterface {
    image: DetailNewsImage,
    authors: string,
    title: string,
    body: string,
    publish_date: string
}

interface GlobalContextInterface {
    detailNews: DetailNewsInterface,
    setDetailNews: Dispatch<SetStateAction<DetailNewsInterface>>
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null)

export function Providers({ children }: { children: React.ReactNode }) {

    const [detailNews, setDetailNews] = useState<DetailNewsInterface>({} as DetailNewsInterface)

    return (
        <HeroUIProvider>
            <GlobalContext.Provider value={{ detailNews, setDetailNews }} >
                {children}
            </GlobalContext.Provider>
        </HeroUIProvider>
    )
}