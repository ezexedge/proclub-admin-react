import { Typography, Box, Avatar, Card, CardContent } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ArrowDownwardTwoTone from '@material-ui/icons/ArrowDownwardTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';

const AvatarWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.green1};
      color:  ${theme.palette.primary.contrastText};
`
);

const ArrowDownwardWrapper = experimentalStyled(ArrowDownwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

function Bills() {
  const { t } = useTranslation();

  const data = {
    value: '$785'
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <ReceiptTwoToneIcon fontSize="medium" />
          </AvatarWrapper>
          <Typography
            sx={{ ml: 1 }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {t('Bills')}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ ml: -1.5, py: 3, justifyContent: 'center' }}
        >
          <ArrowDownwardWrapper />
          <Typography variant="h2" color="text.primary">
            {data.value}
          </Typography>
        </Box>
        <Typography
          align="center"
          variant="body2"
          color="text.secondary"
          component="div"
        >
          <b>-8%</b> less than last week
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Bills;
