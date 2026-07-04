
AI Service Desk Copilot

Tool:
Get Incident Status

Purpose:
Retrieves incident details using the
incident number.

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

        return {
            IncidentNumber: gr.getValue('number'),
            State: gr.getDisplayValue('state'),
            Priority: gr.getDisplayValue('priority'),
            ShortDescription: gr.getValue('short_description'),
            AssignedTo: gr.getDisplayValue('assigned_to')
        };

    }

    return {
        Error: "No incident found with number " + inputs.IncidentNumber
    };

})(inputs);

