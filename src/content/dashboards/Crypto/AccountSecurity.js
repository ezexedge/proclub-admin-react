import { useState } from 'react';
import {
  Card,
  CardHeader,
  ListItemText,
  List,
  ListItem,
  Divider,
  Switch,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import PhoneLockedTwoToneIcon from '@material-ui/icons/PhoneLockedTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import Text from 'src/components/Text';

const AvatarWrapperError = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

function AccountSecurity() {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(['phone_verification']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card>
      <CardHeader title={t('Account Security')} />
      <Divider />
      <List disablePadding>
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <AvatarWrapperError>
              <LockTwoToneIcon fontSize="medium" />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">{t('2FA Authentication')}</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="error">{t('Disabled')}</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('2fa')}
            checked={checked.indexOf('2fa') !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <PhoneLockedTwoToneIcon fontSize="medium" />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">{t('Phone Verification')}</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="success">{t('Active')}</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('phone_verification')}
            checked={checked.indexOf('phone_verification') !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <EmailTwoToneIcon fontSize="medium" />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">{t('Recovery Email')}</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">{t('Not completed')}</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default AccountSecurity;
