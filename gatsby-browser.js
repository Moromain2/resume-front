import React from 'react';
import Layout from './src/components/layout';
import { AnimatePresence } from "framer-motion"
import '@fontsource/josefin-sans';

export const wrapPageElement = ({ element }) => (
    <AnimatePresence exitBeforeEnter>
        <Layout>
            {element}
        </Layout>
    </AnimatePresence>
)

export const shouldUpdateScroll = () => {
    return false
}