import React from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        title: React.CSSProperties;
        infoTitle: React.CSSProperties;
        info: React.CSSProperties;
        description:React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        infoTitle?: React.CSSProperties;
        info?: React.CSSProperties;
        description?:React.CSSProperties;
    }

    interface Theme {}

    interface ThemeOptions {}
}