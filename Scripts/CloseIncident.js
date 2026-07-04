
AI Service Desk Copilot

Tool:
Close Incident

Purpose:
Closes an incident after successful issue
resolution.

Technology:
JavaScript
GlideRecord
ServiceNow AI Agent Studio

Script:
(function(inputs) {

    var gr = new GlideRecord('incident');
    gr.addQuery('number', inputs.IncidentNumber);
    gr.query();

    if (!gr.next()) {
        return {
            Success: false,
            Message: "Incident " + inputs.IncidentNumber + " was not found."
        };
    }

   
    gr.state = 7;

    gr.close_notes = inputs.CloseNotes;

    gr.update();

    return {
        Success: true,
        IncidentNumber: gr.number.toString(),
        Status: "Closed",
        CloseNotes: gr.close_notes.toString(),
        Message: "Incident " + gr.number + " has been closed successfully."
    };

})(inputs);
