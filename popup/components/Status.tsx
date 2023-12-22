import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import { Button, CircularProgress, Grid, Tooltip, Typography } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import bgaIcon from "data-base64:~assets/bga_icon.png";
import myludoIcon from "data-base64:~assets/myludo_icon.png";
import React, { useEffect, useState } from "react";
import boardGameArenaService from '~core/services/boardGameArenaService';
import myludoService from '~core/services/myludoService';
import { ConnectionStatus } from '~popup/models/StatusModel';
import '~popup/popup.scss';

function getStatusIcon(host: string, status: ConnectionStatus) {
    switch (status) {
        case ConnectionStatus.Connected:
            return <CheckIcon fontSize='small' sx={{ color: green[500] }} />
        case ConnectionStatus.Loading:
            return <CircularProgress size="1.25rem" />
        case ConnectionStatus.Disconnected:
            return <WarningIcon fontSize='small' sx={{ color: orange[500] }} />
        case ConnectionStatus.Unauthorized:
            return <ErrorIcon fontSize='small' sx={{ color: red[500] }} />
        case ConnectionStatus.Unknown:
            return <ErrorIcon fontSize='small' sx={{ color: red[500] }} />
    }
}

function getLoginPageUrl(host: string) {
    switch (host) {
        case 'bga':
            return 'https://fr.boardgamearena.com/account';
        case 'myludo':
            return 'https://www.myludo.fr/#!/presentation?bga2myludo=login';
    }
    return null;
}

function requestPermission(host: string) {
    switch (host) {
        case 'bga':
            boardGameArenaService.requestPermission();
            break;
        case 'myludo':
            myludoService.requestPermission();
            break;
    }
}

function getMessage(status: ConnectionStatus) {
    switch (status) {
        case ConnectionStatus.Connected:
            return chrome.i18n.getMessage("connected");
        case ConnectionStatus.Loading:
            return chrome.i18n.getMessage("loading");
        case ConnectionStatus.Disconnected:
            return chrome.i18n.getMessage("disconnected");
        case ConnectionStatus.Unauthorized:
            return chrome.i18n.getMessage("unauthorized");
        case ConnectionStatus.Unknown:
            return chrome.i18n.getMessage("unknown");
    }
}

function getStatus(promisePermission: Promise<boolean>, promiseConnectionState: Promise<boolean>) {
    return Promise
        .all([promisePermission, promiseConnectionState])
        .then((values) => {
            if (values[0]) {// si on est autorisé 
                if (values[1]) {// si on est connecté
                    return ConnectionStatus.Connected;
                } else {
                    return ConnectionStatus.Disconnected;
                }
            } else {
                return ConnectionStatus.Unauthorized
            }
        })
        .catch(() => {
            return ConnectionStatus.Unknown;
        });
}

function handleClick(host: string, status: ConnectionStatus) {
    switch (status) {
        case ConnectionStatus.Disconnected:
            chrome.tabs.create({ url: getLoginPageUrl(host) });
            window.close();
            break;
        case ConnectionStatus.Unauthorized:
            requestPermission(host);
            window.close();
            break
    }
}

type Props = {
    onReleasesClick: () => void;
}

function Status({ onReleasesClick }: Props) {
    const [bgaStatus, setBGAStatus] = useState(ConnectionStatus.Loading);
    const [myludoStatus, setMyludoStatus] = useState(ConnectionStatus.Loading);

    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;

    useEffect(() => {
        getStatus(boardGameArenaService.hasPermission(), boardGameArenaService.isConnected())
            .then((result) => setBGAStatus(result));

        getStatus(myludoService.hasPermission(), myludoService.isConnected())
            .then((result) => setMyludoStatus(result));
    }, []);

    return (
        <Grid container>
            <Grid item xs={4} textAlign='center'>
                <Tooltip title={getMessage(bgaStatus)}>
                    <span>
                        <Button
                            disabled={bgaStatus === ConnectionStatus.Connected}
                            fullWidth
                            onClick={() => handleClick('bga', bgaStatus)}
                        >
                            <div className="status">
                                <span><img className="icon" src={bgaIcon} alt="Board Game Arena" /></span>
                                <span>{getStatusIcon('bga', bgaStatus)}</span>
                            </div>
                        </Button>
                    </span>
                </Tooltip>
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <Tooltip title={getMessage(myludoStatus)}>
                    <span>
                        <Button
                            disabled={myludoStatus === ConnectionStatus.Connected}
                            fullWidth
                            onClick={() => handleClick('myludo', myludoStatus)}
                        >
                            <div className="status">
                                <span><img className="icon" src={myludoIcon} alt="Myludo" /></span>
                                <span>{getStatusIcon('myludo', myludoStatus)}</span>
                            </div>
                        </Button>
                    </span>
                </Tooltip>
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <Tooltip title={chrome.i18n.getMessage("seeReleases")}>
                    <Button fullWidth onClick={onReleasesClick}>
                        <Typography color='primary' className="version">version {currentVersion}</Typography>
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default Status