import { List, ListItem, ListItemText } from "@mui/material";

export default function Releases() {
    return (
        <div className="releases">
            <div className="title">{chrome.i18n.getMessage("releasesTitle")}</div>
            <div>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary='version 3.1.0 (28/11/2023)'
                            secondary='Add override games matching'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.6 (27/11/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.5 (24/11/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.4 (24/11/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.3 (24/11/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.2 (24/11/2023)'
                            secondary='Fix onboarding on Firefox'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.1 (24/11/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 3.0.0 (24/11/2023)'
                            secondary={
                                <div>
                                    <div>Big improvements in customization of the behavior of the plugin</div>
                                    <div>Popup for extension</div>
                                    <div>Options screen</div>
                                    <div>BGA/Myludo Status</div>
                                    <div>Players customization</div>
                                    <div>Behavior configurations</div>
                                    <div>Night mode</div>
                                    <div>Import/export current configuration</div>
                                    <div>Releases screen</div>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.7 (07/11/2023)'
                            secondary='Fix score for coop game'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.6 (06/11/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.5 (06/11/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.4 (06/11/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.3 (30/10/2023)'
                            secondary='Fix when game not found, search on myludo based on game name'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.2 (26/10/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.1 (24/10/2023)'
                            secondary='Fix patching game stats failed when no table found'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.2.0 (23/10/2023)'
                            secondary='Open login popup on Myludo if not connected'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.1.1 (20/10/2023)'
                            secondary='Update game list'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.1.0 (20/10/2023)'
                            secondary={
                                <div>
                                    <div>Add duration on realtime mode</div>
                                    <div>Security update</div>
                                    <div>Technical updates</div>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.9 (13/10/2023)'
                            secondary={
                                <div>
                                    <div>Update game list</div>
                                    <div>Fix scroll on myludo popup</div>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.8 (13/10/2023)'
                            secondary='Fix duplicate myludo button on slow connection on history page'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.7 (13/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.6 (12/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.5 (12/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.4 (12/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.3 (12/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.2 (12/10/2023)'
                            secondary='Technical version'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.1 (11/10/2023)'
                            secondary='Fix abandonned game property from bga history page'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 2.0.0 (05/10/2023)'
                            secondary='Migrate extension on Plasmo framework' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.1.0.3 (25/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.1.0.2 (25/09/2023)'
                            secondary={
                                <div>
                                    <div>Update game list</div>
                                    <div>Fix duplicate table comparison</div>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.1.0.1 (21/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.1.0.0 (20/09/2023)'
                            secondary={
                                <div>
                                    <div>Add table link on Myludo</div>
                                    <div>Add warning on duplicate table</div>
                                    <div>Encode BGA information</div>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.15 (11/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.14 (09/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.13 (08/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.12 (06/09/2023)'
                            secondary='Add alpha and beta games support' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.11 (01/09/2023)'
                            secondary='Fix wording' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.10 (01/09/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.9 (30/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.8 (30/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.7 (24/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.6 (16/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.5 (09/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.4 (09/08/2023)'
                            secondary='Fix button on end game page' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.3 (07/08/2023)'
                            secondary='Manage online game on Myludo' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.2 (07/08/2023)'
                            secondary='Revert host permissions' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.1 (07/08/2023)'
                            secondary='Fix authorization on Firefox version' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 1.0.0.0 (06/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.6 (03/08/2023)'
                            secondary='Fix for Firefox version' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.5 (03/08/2023)'
                            secondary='Fix for Firefox version' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.4 (03/08/2023)'
                            secondary='Fix for Firefox version' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.3 (03/08/2023)'
                            secondary='Add support for Firefox' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.2 (02/08/2023)'
                            secondary='Update game list' />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='version 0.0.0.1 (08/06/2023)'
                            secondary='Initial version' />
                    </ListItem>
                </List>
            </div>
        </div >
    )
}