import { useRef } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    open: boolean;
    title: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    children: React.ReactNode;
    dividers?: boolean;
    maxHeight?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

    onCancel: () => void;
    onConfirm: () => void;
}

export default function ConfirmationDialog(props: ConfirmationDialogRawProps) {

    const { onCancel, onConfirm, open, title, cancelButtonText = 'Cancel', confirmButtonText = 'Ok', children, dividers = true, size = 'md', maxHeight = 435, ...other } = props;

    const radioGroupRef = useRef<HTMLElement>(null);


    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleOk = () => {
        onConfirm();
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: maxHeight } }}
            fullWidth={true}
            maxWidth={size}
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers={dividers}>
                {children}
            </DialogContent>
            <DialogActions>
                <Button color="inherit" autoFocus onClick={handleCancel}>
                    {cancelButtonText}
                </Button>
                <Button color="primary" onClick={handleOk}>
                    {confirmButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}