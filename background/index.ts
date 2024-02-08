import boardGameArenaRepository from "~core/repositories/boardGameArenaRepository";
import notificationsService from "~core/services/notificationsService";

chrome.runtime.onInstalled.addListener(async ({ reason, previousVersion }) => {
    const manifestData = chrome.runtime.getManifest();

    // temp : renouveler les notifications 
    if (reason === "update" && manifestData.version === '3.4.2') {
        notificationsService.updateNotifications([]);
    }

    let showBoarding = false;
    if (reason === "install") {
        showBoarding = true;
    }

    if (reason === "update") {
        const currentMajorVersion = manifestData.version.substring(0, 3);
        const previousMajorVersion = previousVersion.substring(0, 3);

        if (currentMajorVersion !== previousMajorVersion) {
            showBoarding = true;
        }
    }

    if (showBoarding) {
        chrome.tabs.create({ url: chrome.runtime.getURL('tabs/onboarding.html') });
    }

    await chrome.alarms.create('check-notifications', {
        when: Date.now(),
        periodInMinutes: 10
    });
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
    boardGameArenaRepository.getPlayerNotifications()
        .then(response => {
            notificationsService.updateNotifications(response);
        });
})