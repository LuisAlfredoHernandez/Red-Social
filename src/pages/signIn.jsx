import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FooterText from '../components/ui/footerText'
import HeaderText from '../components/ui/headerText';
import TextInput from '../components/form/textInput';
import FormButon from '../components/form/button';
import BottomLink from '../components/form/bottomLink';
import LabelCheck from '../components/form/labelCheck';


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <HeaderText component="h1" variant="h5" title="Sign in" />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextInput label="Email Address" name="email" autoComplete="email" margin={"normal"}/>
            <TextInput label="Password" name="password" autoComplete="current-password" margin={"normal"}/>
            <LabelCheck
              color="primary"
              CheckboxVal="remember"
              labelText="Remember me"
            />
            <FormButon name="Sign In" />
            <Grid container>
              <Grid item xs>
                <BottomLink text="Forgot password?" />
              </Grid>
              <Grid item>
                <BottomLink text="Don't have an account? Sign Up" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <FooterText sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}