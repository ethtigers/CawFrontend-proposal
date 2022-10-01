import { styled } from '@mui/material/styles';
import { FormControlLabel, Radio, CardActionArea } from '@mui/material';

export type Props = {
    value: string;
};

export const BoxStyle = styled(CardActionArea)(({ theme }) => ({
    height: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.disabled,
    border: `solid 1px ${theme.palette.grey[ 500_12 ]}`,
    borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));



export function BoxMask({ value }: Props) {
    return (
        <FormControlLabel
            label=""
            value={value}
            control={<Radio sx={{ display: 'none' }} />}
            sx={{
                m: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
            }} />
    );
}
