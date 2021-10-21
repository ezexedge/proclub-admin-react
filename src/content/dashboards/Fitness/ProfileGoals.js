import { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardHeader,
  Divider,
  Hidden,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Box
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled, useTheme } from '@material-ui/core/styles';
import useAuth from 'src/hooks/useAuth';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { buildStyles } from 'react-circular-progressbar';
import Gauge from 'src/components/Gauge';

function ProfileGoals() {
  const { t } = useTranslation();
  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const { user } = useAuth();
  const theme = useTheme();

  const data = {
    weightLoss: 42,
    sleep: 65
  };

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const [period, setPeriod] = useState(periods[2].text);

  const GoalsBox = experimentalStyled(Box)(
    ({ theme }) => `
      border-radius: ${theme.general.borderRadius};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: ${theme.spacing(2)};
      margin-top: ${theme.spacing(3)};
`
  );

  const DotLegend = experimentalStyled('span')(
    ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
  );

  const TypographyPrimary = experimentalStyled(Typography)(
    ({ theme }) => `
      color: #fff;
    `
  );

  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                mr: 2,
                width: theme.spacing(8),
                height: theme.spacing(8)
              }}
              variant="rounded"
              alt={user.name}
              src={user.avatar}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle2">San Francisco, USA</Typography>
          </Grid>
        </Grid>
        <Grid sx={{ my: 3 }} spacing={0} container>
          <Grid item xs={12} sm={4}>
            <Box p={2}>
              <Typography align="center" variant="h3" gutterBottom>
                79
                <Typography variant="h4" component="span">
                  {t('kg')}
                </Typography>
              </Typography>
              <Typography align="center" variant="subtitle2">
                {t('weight')}
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ position: 'relative' }} item xs={12} sm={4}>
            <Hidden smDown>
              <Divider absolute orientation="vertical" flexItem />
            </Hidden>
            <Box p={2}>
              <Typography align="center" variant="h3" gutterBottom>
                182
                <Typography variant="h4" component="span">
                  {t('cm')}
                </Typography>
              </Typography>
              <Typography align="center" variant="subtitle2">
                {t('height')}
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ position: 'relative' }} item xs={12} sm={4}>
            <Hidden smDown>
              <Divider absolute orientation="vertical" flexItem />
            </Hidden>
            <Box p={2}>
              <Typography align="center" variant="h3" gutterBottom>
                24
                <Typography variant="h4" component="span">
                  {t('cm')}
                </Typography>
              </Typography>
              <Typography align="center" variant="subtitle2">
                {t('age')}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <CardHeader
          sx={{ pl: 0, pr: 0.9 }}
          title={t('Your Goals')}
          action={
            <>
              <Button
                size="small"
                variant="outlined"
                ref={actionRef1}
                onClick={() => setOpenMenuPeriod(true)}
                endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
              >
                {period}
              </Button>
              <Menu
                anchorEl={actionRef1.current}
                onClose={() => setOpenMenuPeriod(false)}
                open={openPeriod}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                {periods.map((_period) => (
                  <MenuItem
                    key={_period.value}
                    onClick={() => {
                      setPeriod(_period.text);
                      setOpenMenuPeriod(false);
                    }}
                  >
                    {_period.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          }
        />

        <GoalsBox style={{ background: theme.colors.gradients.blue1 }}>
          <Box>
            <TypographyPrimary
              variant="subtitle1"
              sx={{ py: 0.5, display: 'flex', alignItems: 'center', mr: 2 }}
            >
              <DotLegend style={{ background: theme.colors.success.main }} />
              {t('Weight Loss')}
            </TypographyPrimary>
            <Box>
              <TypographyPrimary
                variant="h3"
                fontWeight="bold"
                sx={{ pr: 0.5, display: 'inline-flex' }}
              >
                4.2
              </TypographyPrimary>
              <TypographyPrimary
                variant="body2"
                fontWeight="bold"
                sx={{ pr: 2, display: 'inline-flex' }}
              >
                /10 kg
              </TypographyPrimary>
            </Box>
          </Box>
          <Box>
            <Gauge
              circleRatio={1}
              styles={buildStyles({
                rotation: 0.5
              })}
              value={data.weightLoss}
              strokeWidth={8}
              text={`${data.weightLoss}%`}
              color="trueWhite"
              size="small"
            ></Gauge>
          </Box>
        </GoalsBox>

        <GoalsBox style={{ background: theme.colors.gradients.orange1 }}>
          <Box>
            <TypographyPrimary
              variant="subtitle1"
              sx={{ py: 0.5, display: 'flex', alignItems: 'center', mr: 2 }}
            >
              <DotLegend style={{ background: theme.colors.error.main }} />
              {t('Sleep')}
            </TypographyPrimary>
            <Box>
              <TypographyPrimary
                variant="h3"
                fontWeight="bold"
                sx={{ pr: 0.5, display: 'inline-flex' }}
              >
                37
              </TypographyPrimary>
              <TypographyPrimary
                variant="body2"
                fontWeight="bold"
                sx={{ pr: 2, display: 'inline-flex' }}
              >
                /59 hours
              </TypographyPrimary>
            </Box>
          </Box>
          <Box>
            <Gauge
              circleRatio={1}
              styles={buildStyles({
                rotation: 0.5
              })}
              value={data.sleep}
              strokeWidth={8}
              text={`${data.sleep}%`}
              color="trueWhite"
              size="small"
            ></Gauge>
          </Box>
        </GoalsBox>
      </CardContent>
    </Card>
  );
}

export default ProfileGoals;
