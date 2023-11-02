import AutoSubmit from "./components/AutoSubmit"
import CustomPlace from "./components/CustomPlace"
import CustomUsers from "./components/CustomUsers"
import ImportExportConfiguration from "./components/ImportExportConfiguration"
import Status from "./components/Status"

function PopupIndex() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: 16,
                width: '540px'
            }}>
            <h2>{chrome.i18n.getMessage("welcomeMessage")}</h2>
            <Status />
            <CustomPlace />
            <AutoSubmit />
            <CustomUsers />
            <ImportExportConfiguration />
        </div>
    )
}

export default PopupIndex
