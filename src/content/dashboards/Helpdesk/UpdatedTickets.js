import { Button, Card, CardContent, Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import HelpdeskChart from './HelpdeskChart';

const IconWrapper = experimentalStyled('div')(
  ({ theme }) => `
      color:  ${theme.colors.primary.light};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      .MuiSvgIcon-fontSizeMedium {
        font-size: ${theme.typography.pxToRem(55)};
      }
`
);
const HelpdeskChartWrapper = experimentalStyled(HelpdeskChart)(
  ({ theme }) => `
        height: 160px;
`
);

const CardWrapper = experimentalStyled(Card)(
  ({ theme }) => `
        position: relative;
        min-height: 340px;
        padding: 0;
        overflow: hidden;
`
);

const ChartWrapper = experimentalStyled('div')(
  ({ theme }) => `
        position: absolute;
        bottom: ${theme.spacing(3)};
        left: -10px;
        right: 0;
        height: 160px;
`
);

const TypographyWrapper = experimentalStyled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(45)};
`
);

const BottomWrapper = experimentalStyled(Box)(
  ({ theme }) => `
      position: absolute;
      bottom: ${theme.spacing(2)};
      left: 0;
      right: 0;
      padding: 0 ${theme.spacing(3)};
`
);

function UpdatedTickets() {
  const { t } = useTranslation();

  const questions = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      data: [28, 31, 26, 32, 27, 22, 37, 13, 30, 10, 16, 21]
    }
  };

  return (
    <CardWrapper>
      <CardContent sx={{ p: 3 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 2 }}
        >
          <Typography variant="h3" sx={{ width: 80, lineHeight: 1.4 }}>
            {t('Updated Tickets')}
          </Typography>
          <IconWrapper>
            <UpdateTwoToneIcon />
          </IconWrapper>
        </Box>
        <Button variant="contained" size="small">
          {t('View tickets')}
        </Button>
      </CardContent>
      <BottomWrapper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 2 }}
      >
        <TypographyWrapper variant="h1">51</TypographyWrapper>
        <Box>
          <Typography align="right" variant="subtitle1" noWrap>
            {t('Previous Period')}
          </Typography>
          <Typography align="right" variant="h3">
            39
          </Typography>
        </Box>
      </BottomWrapper>
      <ChartWrapper>
        <HelpdeskChartWrapper
          data={questions.month.data}
          labels={questions.month.labels}
        />
      </ChartWrapper>
    </CardWrapper>
  );
}

export default UpdatedTickets;
