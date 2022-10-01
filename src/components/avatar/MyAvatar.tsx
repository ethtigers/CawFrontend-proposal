import { AvatarProps } from "@mui/material";
import useAuth from "src/hooks/useAuth";
import Avatar, { AvatarColor } from './Avatar';



interface Props extends AvatarProps {
    color?: AvatarColor;
}

export default function MyAvatar({ color = 'default', ...other }: Props) {

    const { user } = useAuth();

    return (
        <Avatar
            src={user?.avatar?.src}
            alt={user?.username}
            sx={{ width: 48, height: 48 }}
            color={color}
            {...other}
        />
    );

}