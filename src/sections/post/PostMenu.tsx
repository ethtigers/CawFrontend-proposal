import { useState } from "react";
import { MenuItem, IconButton } from '@mui/material';

import Iconify from 'src/components/Iconify';
import MenuPopover from 'src/components/MenuPopover';


export type Props = {
    postId: string;
    txId: string;
    onDelete?: VoidFunction;
}

const ICON = {
    mr: 2,
    width: 20,
    height: 20,
};

export function PostMenu({ postId, txId, onDelete }: Props) {

    const [ open, setOpen ] = useState<HTMLElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleReport = () => {
        handleClose();
    }

    const handleDelete = () => {
        onDelete?.();
        handleClose();
    }

    const handleBlockScan = () => {
        handleClose();
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
            </IconButton>
            <MenuPopover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                arrow="right-top"
                sx={{
                    mt: -1,
                    width: 160,
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                }}
            >
                <MenuItem onClick={handleDelete}>
                    <Iconify icon={'eva:trash-fill'} sx={{ ...ICON }} />
                    Delete
                </MenuItem>
                <MenuItem onClick={handleReport}>
                    <Iconify icon={'ic:baseline-report'} sx={{ ...ICON }} />
                    Report
                </MenuItem>
                <MenuItem onClick={handleBlockScan}>
                    <Iconify icon={'simple-icons:ethereum'} sx={{ ...ICON }} />
                    Block scan
                </MenuItem>
            </MenuPopover>
        </>
    );
}
