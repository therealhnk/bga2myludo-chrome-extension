import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/Github';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import '~popup/popup.scss';
import DiscordIcon from './DiscordIcon';

export default function Home() {
    return (
        <div className="home">
            <div className="title">{chrome.i18n.getMessage("welcomeTitle")}</div>
            <Typography color='secondary' className="message">
                {chrome.i18n.getMessage("welcomeMessageLine1")}
                <br />
                {chrome.i18n.getMessage("welcomeMessageLine2")}
            </Typography>
            <List dense>
                <ListItemButton href="https://discord.gg/Xwp8VFVP37" target='_blank'>
                    <ListItemIcon>
                        <DiscordIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='secondary' className="message-list">{chrome.i18n.getMessage("contactByDiscord")}</Typography>} />
                </ListItemButton>

                <ListItemButton href="mailto:bga2myludo@gmail.com">
                    <ListItemIcon>
                        <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='secondary' className="message-list">{chrome.i18n.getMessage("contactByMail")}</Typography>} />
                </ListItemButton>

                <ListItemButton href="https://github.com/therealhnk/bga2myludo-web-extension/issues" target='_blank'>
                    <ListItemIcon>
                        <GithubIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='secondary' className="message-list">{chrome.i18n.getMessage("contactByGithub")}</Typography>} />
                </ListItemButton>
            </List>
        </div >
    )
}