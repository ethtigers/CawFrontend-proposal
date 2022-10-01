import { ReactNode } from 'react';
import { alpha, Theme } from '@mui/material/styles';
import { Box, Paper, CardHeader, SxProps } from '@mui/material';

export type BlockProps = {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    sx?: SxProps<Theme>;
};


export default function Block({ title, subtitle, sx, children }: BlockProps) {
    return (
        <Paper
            variant="outlined"
            sx={{
                borderRadius: 1.5,
                bgcolor: (theme) => alpha(theme.palette.grey[ 500 ], 0.04),
            }}
        >
            {title && <CardHeader title={title} subheader={subtitle} />}
            <Box
                sx={{
                    ...sx,
                    p: 5,
                    minHeight: 180,
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > *': { mx: 1 },
                }}
            >
                {children}
            </Box>
        </Paper>
    );
}
