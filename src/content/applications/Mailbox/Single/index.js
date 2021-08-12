import { useEffect, useState, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { format, formatDistance } from 'date-fns';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  ListItemText,
  ListItem,
  Card,
  List,
  Menu,
  Button,
  TextField,
  lighten
} from '@material-ui/core';
import { useDispatch, useSelector } from 'src/store';
import { getMail } from 'src/slices/mailbox';
import useAuth from 'src/hooks/useAuth';
import { experimentalStyled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@material-ui/icons/MarkEmailReadTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import ReplyTwoToneIcon from '@material-ui/icons/ReplyTwoTone';

const IconButtonError = experimentalStyled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const DividerWrapper = experimentalStyled(Divider)(
  ({ theme }) => `
        height: 40px;
        margin: 0 ${theme.spacing(2)};
        align-self: center;
`
);

const Input = experimentalStyled('input')({
  display: 'none'
});

const BoxContent = experimentalStyled(Box)(
  ({ theme }) => `
      border-radius: ${theme.general.borderRadius};
      background: ${theme.colors.alpha.black[5]};
      font-size: ${theme.typography.pxToRem(15)};
`
);

const BoxReply = experimentalStyled(Box)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[5]};
`
);

function MailboxSingle() {
  const { user } = useAuth();
  const { t } = useTranslation();

  const [onMenuOpen, menuOpen] = useState(false);
  const moreRef = useRef(null);

  const openMenu = () => {
    menuOpen(true);
  };

  const closeMenu = () => {
    menuOpen(false);
  };

  const { mailboxCategory } = useParams();
  const dispatch = useDispatch();
  const mailbox = useSelector(
    (state) => state.mailbox.mails.byId[mailboxCategory]
  );

  const history = useHistory();

  const { categoryTag, labelTag } = useParams();

  const handleBack = () => {
    if (categoryTag) {
      return history.push(`/preview/applications/mailbox/${categoryTag}`);
    }

    if (labelTag) {
      return history.push(`/preview/applications/mailbox/tag/${labelTag}`);
    }

    return history.push('/preview/applications/mailbox/inbox');
  };

  useEffect(() => {
    dispatch(getMail(mailboxCategory));
  }, [dispatch, mailboxCategory]);

  if (!mailbox) {
    return null;
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        sx={{ pt: { lg: 3 } }}
        pb={3}
      >
        <Tooltip arrow placement="top" title={t('Go back')}>
          <IconButton color="primary" sx={{ p: 1 }} onClick={handleBack}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>

        <Box>
          <Tooltip arrow placement="top" title={t('Archive')}>
            <IconButton color="primary" sx={{ ml: 1, p: 1 }}>
              <ArchiveTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={t('Delete')}>
            <IconButton color="primary" sx={{ p: 1 }}>
              <DeleteTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={t('Mark as read')}>
            <IconButton color="primary" sx={{ p: 1 }}>
              <MarkEmailReadTwoToneIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            color="primary"
            onClick={openMenu}
            ref={moreRef}
            sx={{ ml: 1, p: 1 }}
          >
            <MoreVertTwoToneIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Typography sx={{ py: 4, px: 10 }} variant="h3">
        {mailbox.subject}
      </Typography>
      <Box
        px={3}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Avatar sx={{ mr: 2 }} src={mailbox.from.avatar} />
          <Box>
            <Typography variant="h4" gutterBottom>
              {mailbox.from.email}{' '}
              <Typography
                component="span"
                variant="h5"
                color="text.secondary"
                fontWeight="normal"
              >
                ({mailbox.from.name})
              </Typography>
            </Typography>
            <Typography variant="h5" color="text.secondary" fontWeight="normal">
              {t('to')}{' '}
              {mailbox.to.map((to) => (
                <span key={to.name}>
                  {to.name} ({to.email})
                </span>
              ))}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography align="right" variant="subtitle2" color="text.primary">
            {format(mailbox.date, 'MMMM dd yyyy, h:mm:ss a')}
          </Typography>
          <Typography align="right" variant="subtitle1">
            {formatDistance(mailbox.date, new Date(), {
              addSuffix: true
            })}
          </Typography>
        </Box>
      </Box>
      <BoxContent px={4} py={3} mt={3} mb={4} ml={10} mr={3}>
        <div dangerouslySetInnerHTML={{ __html: mailbox.content }} />
      </BoxContent>
      <Divider />
      <BoxReply px={3} py={4} display="flex" alignItems="flex-start">
        <Avatar alt={user.name} src={user.avatar} />
        <Box ml={2} flexGrow={1}>
          <Card>
            <Box px={3} pt={2}>
              <Typography component="span" variant="subtitle1">
                {t('Sending to')}:{' '}
              </Typography>
              <Typography
                component="span"
                variant="h5"
                color="text.primary"
                fontWeight="bold"
              >
                {mailbox.from.email}{' '}
                <Typography
                  component="span"
                  variant="h5"
                  color="text.secondary"
                  fontWeight="normal"
                >
                  ({mailbox.from.name})
                </Typography>
              </Typography>
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                multiline
                minRows={4}
                name="mail_reply"
                variant="outlined"
                placeholder={t('Write your reply here...')}
              />
            </Box>
            <Box
              px={3}
              pb={3}
              pt={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <Button startIcon={<ReplyTwoToneIcon />} variant="contained">
                  {t('Reply')}
                </Button>
                <DividerWrapper orientation="vertical" flexItem />
                <Tooltip arrow placement="top" title={t('Insert an emoji')}>
                  <IconButton sx={{ p: 1 }} color="primary">
                    😀
                  </IconButton>
                </Tooltip>
                <Input
                  accept="image/*"
                  id="messenger-upload-file"
                  type="file"
                />
                <Tooltip arrow placement="top" title={t('Attach a file')}>
                  <label htmlFor="messenger-upload-file">
                    <IconButton color="primary" component="span">
                      <AttachFileTwoToneIcon />
                    </IconButton>
                  </label>
                </Tooltip>
              </Box>
              <Tooltip arrow placement="top" title={t('Delete draft')}>
                <IconButtonError sx={{ p: 1 }}>
                  <DeleteTwoToneIcon />
                </IconButtonError>
              </Tooltip>
            </Box>
          </Card>
        </Box>
      </BoxReply>

      <Menu
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        getContentAnchorEl={null}
      >
        <List sx={{ p: 1 }} component="nav">
          <ListItem button>
            <ListItemText primary={t('Mark as read')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Mark as important')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Filter messages like this')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Forward as attachment')} />
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

export default MailboxSingle;
