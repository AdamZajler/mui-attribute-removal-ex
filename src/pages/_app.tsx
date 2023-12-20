import {AppCacheProvider} from '@mui/material-nextjs/v14-pagesRouter';
import type {AppProps} from 'next/app'

const clientSideEmotionCache = createEmotionCache();
import {CacheProvider, EmotionCache} from '@emotion/react';

import type {DocumentHeadTagsProps} from '@mui/material-nextjs/v14-pagesRouter';
import createEmotionCache from "@/config/createEmotionCache";

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({Component, pageProps, emotionCache = clientSideEmotionCache}: MyAppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <Component {...pageProps} />
        </CacheProvider>
    );
}
