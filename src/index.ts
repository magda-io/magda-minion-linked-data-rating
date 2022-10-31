import minion, { commonYargs } from "@magda/minion-sdk";
import linkedDataAspectDef from "./linkedDataAspectDef";
import datasetQualityAspectDef from "./datasetQualityAspectDef";
import onRecordFound from "./onRecordFound";

const ID = "minion-linked-data-rating";
const argv = commonYargs(6109, "http://localhost:6109");

minion({
    argv,
    id: ID,
    aspects: ["dataset-distributions"],
    optionalAspects: ["dataset-format", "source-link-status"],
    writeAspectDefs: [linkedDataAspectDef, datasetQualityAspectDef],
    dereference: true,
    onRecordFound
}).catch((e) => {
    console.error("Error: " + e.message, e);
    process.exit(1);
});
