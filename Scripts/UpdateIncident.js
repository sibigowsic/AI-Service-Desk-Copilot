
AI Service Desk Copilot

Tool:
Update Incident

Purpose:
Updates work notes for an existing incident.

Technology:
JavaScript
GlideRecord
ServiceNow AI Agent Studio

Script: 

(function(inputs) {

    var gr = new GlideRecord('incident');

    gr.addQuery('number', inputs.IncidentNumber);
    gr.query();

    if (gr.next()) {

        gr.work_notes = inputs.WorkNotes;
        gr.update();

        return {
            Status: "Success",
            IncidentNumber: gr.getValue('number'),
            State: gr.getDisplayValue('state'),
            Message: "Work note added successfully."
        };

    }

    return {
        Status: "Failed",
        Error: "No incident found with number " + inputs.IncidentNumber
    };

})(inputs);
