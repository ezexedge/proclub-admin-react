import { forwardRef, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  Tooltip,
  List as ListWrapper,
  ListItem,
  ListItemText,
  Menu,
  Button,
  IconButton,
  Typography,
  AvatarGroup
} from '@material-ui/core';
import { formatDistance } from 'date-fns';
import { experimentalStyled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'src/store';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';

const taskSelector = (state, taskId) => {
  const { tasks, members } = state.projectsBoard;
  const task = tasks.byId[taskId];

  return {
    ...task,
    members: task.memberIds.map((memberId) => members.byId[memberId])
  };
};

const LinearProgressWrapper = experimentalStyled(LinearProgress)(
  ({ theme }) => `
      flex-grow: 1;
      height: 8px;
      background-color: ${theme.colors.alpha.black[10]};

      .MuiLinearProgress-barColorPrimary {
        background-color: ${theme.colors.primary.main};
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
      }
`
);

const ButtonWrapper = experimentalStyled(Button)(
  ({ theme }) => `
      padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
      min-width: 32px;

      .MuiSvgIcon-root {
        color: ${theme.colors.alpha.black[30]};
        margin-right: ${theme.spacing(1)};
      }

      &:hover {
        .MuiSvgIcon-root {
          color: ${theme.colors.primary.main};
        }
      }
`
);

const Task = forwardRef(({ taskId, dragging, index, list, ...rest }, ref) => {
  const task = useSelector((state) => taskSelector(state, taskId));
  const { t } = useTranslation();

  const [onMenuOpen, menuOpen] = useState(false);
  const moreRef = useRef(null);

  const openMenu = () => {
    menuOpen(true);
  };

  const closeMenu = () => {
    menuOpen(false);
  };

  return (
    <>
      <Box key={taskId} ref={ref} {...rest}>
        <Card
          sx={{ m: 2, p: 2 }}
          className={clsx({ dragging: dragging })}
          raised={dragging}
          variant={dragging ? 'elevation' : 'outlined'}
        >
          <Typography variant="h4" gutterBottom noWrap>
            {task.name}
          </Typography>
          <Typography variant="subtitle1" noWrap>
            {task.description}
          </Typography>
          <Box py={1}>
            {task.comments > 0 && (
              <Tooltip placement="top" arrow title={t('Comments')}>
                <ButtonWrapper size="small" color="primary">
                  <CommentTwoToneIcon />
                  {task.comments}
                </ButtonWrapper>
              </Tooltip>
            )}
            {task.attachments > 0 && (
              <Tooltip placement="top" arrow title={t('File attachments')}>
                <ButtonWrapper size="small" color="primary">
                  <AttachFileTwoToneIcon />
                  {task.attachments}
                </ButtonWrapper>
              </Tooltip>
            )}
            {task.sub_items > 0 && (
              <Tooltip placement="top" arrow title={t('Subtasks')}>
                <ButtonWrapper size="small" color="primary">
                  <FormatListBulletedTwoToneIcon />
                  {task.sub_items}
                </ButtonWrapper>
              </Tooltip>
            )}
          </Box>
          <Box>
            <Typography variant="subtitle1">
              {t('Due')}{' '}
              {formatDistance(task.due_date, new Date(), { addSuffix: true })}
            </Typography>
            <LinearProgressWrapper
              value={task.progress}
              color="primary"
              variant="determinate"
            />
          </Box>
          <Box
            pt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              {task.members.length > 0 && (
                <AvatarGroup max={4}>
                  {task.members.map((member) => (
                    <Tooltip
                      arrow
                      placement="top"
                      key={member.name}
                      title={member.name}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        key={member.id}
                        src={member.avatar}
                      />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              )}
            </Box>
            <IconButton
              color="inherit"
              size="small"
              onClick={openMenu}
              ref={moreRef}
            >
              <MoreHorizTwoToneIcon fontSize="small" />
            </IconButton>
          </Box>
        </Card>
      </Box>
      <Menu
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        getContentAnchorEl={null}
      >
        <ListWrapper sx={{ p: 1 }} component="nav">
          <ListItem button>
            <VisibilityTwoToneIcon />
            <ListItemText primary={t('View details')} />
          </ListItem>
          <ListItem button>
            <ArchiveTwoToneIcon />
            <ListItemText primary={t('Move to archive')} />
          </ListItem>
          <ListItem button>
            <DeleteForeverTwoToneIcon />
            <ListItemText primary={t('Delete')} />
          </ListItem>
        </ListWrapper>
      </Menu>
    </>
  );
});

Task.propTypes = {
  taskId: PropTypes.string.isRequired,
  dragging: PropTypes.bool.isRequired,
  index: PropTypes.number,
  // @ts-ignore
  list: PropTypes.object.isRequired
};

Task.defaultProps = {
  dragging: false
};

export default Task;
