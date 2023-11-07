import EmailIcon from '@mui/icons-material/Email';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import '~popup/index.scss';
import DiscordIcon from './DiscordIcon';
import GithubIcon from './GithubIcon';

export default function Home() {
    return (
        <div className="home">
            <div className="title">{chrome.i18n.getMessage("welcomeTitle")}</div>
            <div className="message">
                {chrome.i18n.getMessage("welcomeMessageLine1")}
                <br />
                {chrome.i18n.getMessage("welcomeMessageLine2")}
            </div>
            <List dense>
                <ListItem component="a" href="https://discord.gg/Xwp8VFVP37" target='_blank'>
                    <ListItemIcon>
                        <DiscordIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography className="message-list">{chrome.i18n.getMessage("contactByDiscord")}</Typography>} />
                </ListItem>

                <ListItem component="a" href="mailto:bga2myludo@gmail.com">
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography className="message-list">{chrome.i18n.getMessage("contactByMail")}</Typography>} />
                </ListItem>

                <ListItem component="a" href="https://github.com/therealhnk/bga2myludo-web-extension/issues" target='_blank'>
                    <ListItemIcon>
                        <GithubIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography className="message-list">{chrome.i18n.getMessage("contactByGithub")}</Typography>} />
                </ListItem>
            </List>
        </div >
    )
}