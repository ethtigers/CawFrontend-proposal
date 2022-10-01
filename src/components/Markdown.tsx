import ReactMarkdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Link, Typography, Divider } from '@mui/material'

import HashTagRender, { ActionTagEvent } from "./tag-parser";
import Image from './Image';

const MarkdownStyle = styled('div')(({ theme }) => {
  const isLight = theme.palette.mode === 'light';
  return {
    // List
    '& ul, & ol': {
      ...theme.typography.body1,
      paddingLeft: theme.spacing(5),
      '& li': {
        lineHeight: 2,
      },
    },

    // Blockquote
    '& blockquote': {
      lineHeight: 1.5,
      fontSize: '1.5em',
      margin: '40px auto',
      position: 'relative',
      fontFamily: 'Georgia, serif',
      padding: theme.spacing(3, 3, 3, 8),
      borderRadius: Number(theme.shape.borderRadius) * 2,
      backgroundColor: theme.palette.background.neutral,
      color: `${theme.palette.text.secondary} !important`,
      [ theme.breakpoints.up('md') ]: {
        width: '80%',
      },
      '& p, & span': {
        marginBottom: '0 !important',
        fontSize: 'inherit !important',
        fontFamily: 'Georgia, serif !important',
        color: `${theme.palette.text.secondary} !important`,
      },
      '&:before': {
        left: 16,
        top: -8,
        display: 'block',
        fontSize: '3em',
        content: '"\\201C"',
        position: 'absolute',
        color: theme.palette.text.disabled,
      },
    },

    // Code Block
    '& pre, & pre > code': {
      fontSize: 16,
      overflowX: 'auto',
      whiteSpace: 'pre',
      padding: theme.spacing(2),
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: isLight ? theme.palette.grey[ 900 ] : theme.palette.grey[ 500_16 ],
    },
    '& code': {
      fontSize: 14,
      borderRadius: 4,
      whiteSpace: 'pre',
      padding: theme.spacing(0.2, 0.5),
      color: theme.palette.warning[ isLight ? 'darker' : 'lighter' ],
      backgroundColor: theme.palette.warning[ isLight ? 'lighter' : 'darker' ],
      '&.hljs': { padding: 0, backgroundColor: 'transparent' },
    },
  };
});


// function LinkTo({ href, children }: any) {

//   const preventDefault = (event: any) => {
//     event?.preventDefault()
//   };

//   return !href.includes('http') ? (
//     <Link href={href} onClick={preventDefault} >{children}</Link>
//   ) : (
//     <NextLink href={href} passHref>
//       <Link href={href} target="_blank" rel="nofollow noreferrer noopener" onClick={preventDefault}>
//         {children}
//       </Link>
//     </NextLink>
//   );
// }

type Props = Options & {
  align?: 'left' | 'center' | 'right';
  htStyle?: React.CSSProperties;
  mtStyle?: React.CSSProperties;
  urlStyle?: React.CSSProperties;
  onHashtagClick: ActionTagEvent;
}

export default function Markdown({ onHashtagClick, htStyle, mtStyle, urlStyle, align = 'left', ...other }: Props) {
  return (
    <MarkdownStyle>
      <ReactMarkdown
        linkTarget="_blank"
        rehypePlugins={[ rehypeRaw ]}
        components={components({ onHashtagClick, align, htStyle, mtStyle, urlStyle })}
        {...other}
      />
    </MarkdownStyle>
  );
}


type componentsProps = {
  onHashtagClick: ActionTagEvent;
  align: 'left' | 'center' | 'right';
  htStyle?: React.CSSProperties;
  mtStyle?: React.CSSProperties;
  urlStyle?: React.CSSProperties;
}

const components = ({ align, htStyle = {}, mtStyle = {}, urlStyle = {}, onHashtagClick }: componentsProps) => ({
  h1: ({ ...props }) => <Typography variant="h1" {...props} />,
  h2: ({ ...props }) => <Typography variant="h2" {...props} />,
  h3: ({ ...props }) => <Typography variant="h3" {...props} />,
  h4: ({ ...props }) => <Typography variant="h4" {...props} />,
  h5: ({ ...props }) => <Typography variant="h5" {...props} />,
  h6: ({ ...props }) => <Typography variant="h6" {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  p: ({ ...props }) => (
    <Typography
      paragraph
      variant="body1"
      align={align}
    >
      <HashTagRender
        htStyle={htStyle}
        mtStyle={mtStyle}
        urlStyle={urlStyle}
        onActionTag={onHashtagClick}
      >
        {props.children}
      </HashTagRender>
    </Typography>
  ),
  img: ({ ...props }) => (
    <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2, my: 5 }} {...props} />
  ),
  // a: ({ ...props }) => <LinkTo {...props} />,
  a: ({ ...props }) =>
    props.href.includes('http') ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <NextLink href={props.href || ''} passHref>
        <Link {...props}>{props.children}</Link>
      </NextLink>
    ),
});
