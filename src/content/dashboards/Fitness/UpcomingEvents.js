import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Tooltip,
  Box,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';

const AvatarPrimary = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.palette.primary.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

const BoxWrapper = experimentalStyled(Box)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      border-radius: ${theme.general.borderRadius};
      text-align: center;
      width: ${theme.spacing(9)};
      height: ${theme.spacing(9)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1.5)};
      flex-shrink: 0;
      transition: ${theme.transitions.create(['background'])};
`
);

const ListItemWrapper = experimentalStyled(ListItem)(
  ({ theme }) => `
      border-radius: 0;
      
      &:hover {
        .MuiDate-wrapper {
            background: ${theme.colors.alpha.white[100]};
        }
      }
`
);

function UpcomingEvents() {
  const { t } = useTranslation();

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        avatar={
          <AvatarPrimary>
            <DateRangeTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <Tooltip placement="top" arrow title={t('Create new event')}>
            <IconButton color="primary">
              <ControlPointTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title={t('Upcoming Events')}
        titleTypographyProps={{ variant: 'h5' }}
      />
      <List disablePadding component="div">
        <ListItemWrapper button alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                23
              </Typography>
              <Typography variant="subtitle2">{t('June')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{ pt: 1 }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Healthy Body')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'You will learn how to have a healthy body and how to stay fit in this event.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Box sx={{ my: 2 }} />
        <ListItemWrapper button alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                30
              </Typography>
              <Typography variant="subtitle2">{t('July')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{ pt: 1 }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Healthy Nutrition - The Power is in You')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'Three day course that will help you harness your inner power in order to have a healthier life.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Box sx={{ my: 2 }} />
        <ListItemWrapper button alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                14
              </Typography>
              <Typography variant="subtitle2">{t('August')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{ pt: 1 }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Mindfulness Online Course')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'Learn how to better manage the stresses of daily life, improve your overall health.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Box sx={{ my: 2 }} />
        <ListItemWrapper button alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                21
              </Typography>
              <Typography variant="subtitle2">{t('Sept.')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{ pt: 1 }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('The surprising new science of fitness.')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'This is a description for the above title. Add whatever you need here. Create beautiful designs!'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
      </List>
      <CardContent sx={{ pt: 3 }}>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all')}
        </Button>
      </CardContent>
    </Card>
  );
}

export default UpcomingEvents;
